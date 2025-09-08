from passlib.context import CryptContext
from sqlalchemy.orm import Session
from jose import JWTError, jwt
from datetime import datetime, timedelta
from typing import Optional
import logging

from models import Tenant, Student
from app.config import settings

# ---------------- Setup ----------------
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
logger = logging.getLogger(__name__)

# ---------------- Password Utilities ----------------
def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verify plain password against hashed password."""
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password: str) -> str:
    """Hash a password."""
    return pwd_context.hash(password)

# ---------------- Authentication ----------------
def authenticate_tenant(db: Session, email: str, password: str):
    """Authenticate tenant with email and password."""
    tenant = db.query(Tenant).filter(Tenant.email == email).first()
    if tenant and verify_password(password, tenant.hashed_password):  # Ensure model column name matches
        return tenant
    logger.warning(f"Failed tenant login attempt: {email}")
    return None

def authenticate_student(db: Session, email: str, password: str):
    """Authenticate student with email and password."""
    student = db.query(Student).filter(Student.email == email).first()
    if student and verify_password(password, student.hashed_password):  # Ensure model column name matches
        return student
    logger.warning(f"Failed student login attempt: {email}")
    return None

# ---------------- JWT Token Creation ----------------
def create_access_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
    """
    Create short-lived JWT access token (default 15 min).
    Expects `sub` (subject) in data dict for user identifier.
    """
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=15))
    to_encode.update({"exp": expire})
    if "sub" not in to_encode:
        logger.warning("JWT created without `sub` claim. Recommended to include user identifier.")
    return jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)

def create_refresh_token(data: dict, expires_days: int = 7) -> str:
    """
    Create long-lived JWT refresh token (default 7 days).
    Expects `sub` (subject) in data dict for user identifier.
    """
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(days=expires_days)
    to_encode.update({"exp": expire})
    if "sub" not in to_encode:
        logger.warning("Refresh token created without `sub` claim.")
    return jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)

# ---------------- JWT Verification ----------------
def verify_token(token: str):
    """Decode JWT token and return payload, or None if invalid/expired."""
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        return payload
    except JWTError as e:
        logger.warning(f"JWT verification failed: {str(e)}")
        return None
