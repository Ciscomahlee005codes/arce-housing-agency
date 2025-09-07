from fastapi import APIRouter, Depends, HTTPException, status, Request
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from app.database import get_db
from models import Tenant
from app.schemas import TenantSignupRequest, TenantResponse
from auth import get_password_hash
import logging
import re
from slowapi import Limiter
from slowapi.util import get_remote_address

# ✅ Rate limiter: 5 requests per minute per IP
limiter = Limiter(key_func=get_remote_address)

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

logger = logging.getLogger("tenant_auth")
logger.setLevel(logging.INFO)


def validate_password(password: str) -> None:
    """Enforce strong password policy."""
    if len(password) < 8:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Password must be at least 8 characters long"
        )
    if not re.search(r"[A-Z]", password):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Password must contain at least one uppercase letter"
        )
    if not re.search(r"[a-z]", password):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Password must contain at least one lowercase letter"
        )
    if not re.search(r"[0-9]", password):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Password must contain at least one number"
        )
    if not re.search(r"[\W_]", password):  # special char
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Password must contain at least one special character"
        )


@router.post("/tenant/signup", response_model=TenantResponse)
@limiter.limit("5/minute")  # ✅ prevent a\buse
def tenant_signup(
    request: Request,
    signup_data: TenantSignupRequest,
    db: Session = Depends(get_db)
):
    try:
        # ✅ Password validation
        validate_password(signup_data.password)

        errors = []

        # ✅ Pre-check for duplicates
        if db.query(Tenant).filter(Tenant.email == signup_data.email).first():
            errors.append("Email already registered")

        if db.query(Tenant).filter(Tenant.phone == signup_data.phone).first():
            errors.append("Phone number already registered")

        if errors:
            logger.warning(f"Signup failed for {signup_data.email}: {errors}")
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=errors
            )

        # ✅ Hash password
        hashed_password = get_password_hash(signup_data.password)

        # ✅ Create tenant
        new_tenant = Tenant(
            full_name=signup_data.full_name,
            email=signup_data.email,
            phone=signup_data.phone,
            hashed_password=hashed_password
        )

        db.add(new_tenant)
        db.commit()
        db.refresh(new_tenant)

        logger.info(f"✅ Tenant created: {new_tenant.email}")

        return TenantResponse(
            tenant_id=new_tenant.id,
            full_name=new_tenant.full_name,
            email=new_tenant.email,
            phone=new_tenant.phone,
            message="Signup successful"
        )

    except IntegrityError:
        db.rollback()
        logger.error(f"IntegrityError: Duplicate signup attempt for {signup_data.email}")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email or phone already registered"
        )

    except HTTPException:
        # Already raised with details
        raise

    except Exception as e:
        db.rollback()
        logger.exception("Unexpected error during tenant signup")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An unexpected error occurred. Please try again later."
        )
