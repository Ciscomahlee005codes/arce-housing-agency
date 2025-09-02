from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.database import get_db
from models import Tenant
from app.schemas import TenantSignupRequest, TenantResponse
from auth import get_password_hash

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

@router.post("/tenant/signup", response_model=TenantResponse)
def tenant_signup(
    signup_data: TenantSignupRequest,
    db: Session = Depends(get_db)
):
    # Step 1: Check if email already exists
    existing_tenant = db.query(Tenant).filter(Tenant.email == signup_data.email).first()
    if existing_tenant:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )

    # Step 2: Hash password
    hashed_password = get_password_hash(signup_data.password)

    # Step 3: Create tenant object
    new_tenant = Tenant(
        full_name=signup_data.full_name,
        email=signup_data.email,
        phone=signup_data.phone,
        hashed_password=hashed_password
    )

    # Step 4: Save to DB
    db.add(new_tenant)
    db.commit()
    db.refresh(new_tenant)

    return new_tenant
