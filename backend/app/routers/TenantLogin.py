from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from datetime import timedelta

from app.database import get_db   # ✅ lowercase
from auth import authenticate_tenant, create_access_token   # ✅ inside app
from app.schemas import TenantLoginRequest, TokenResponse
from app.config import settings   # ✅ assuming you defined settings in config.py

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

@router.post("/tenant/login", response_model=TokenResponse)
def tenant_login(
    login_data: TenantLoginRequest,
    db: Session = Depends(get_db)
):
    # Step 1: Authenticate tenant (custom function in app/auth.py)
    tenant = authenticate_tenant(db, login_data.email, login_data.password)
    if not tenant:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )
    
    # Step 2: Generate JWT token
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": tenant.email}, 
        expires_delta=access_token_expires
    )

    # Step 3: Return token
    return {"access_token": access_token, "token_type": "bearer"}
