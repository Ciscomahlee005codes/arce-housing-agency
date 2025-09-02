from passlib.context import CryptContext
from sqlalchemy.orm import Session
from models import Tenant
from jose import JWTError, jwt
from datetime import datetime, timedelta
from app.config import settings

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def authenticate_tenant(db: Session, email: str, password: str):
    tenant = db.query(Tenant).filter(Tenant.email == email).first()
    if not tenant:
        return None
    if not verify_password(password, tenant.hashed_password):
        return None
    return tenant

def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=15))
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return encoded_jwt
