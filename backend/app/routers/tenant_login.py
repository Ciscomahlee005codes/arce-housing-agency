from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from datetime import timedelta
from fastapi.responses import JSONResponse
from app.database import get_db
from auth import authenticate_tenant, create_access_token, create_refresh_token
from app.schemas import TenantLoginRequest
from app.config import settings
import logging
from slowapi import Limiter
from slowapi.util import get_remote_address

# ✅ Rate limiter: max 5 logins per minute per IP
limiter = Limiter(key_func=get_remote_address)

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

logger = logging.getLogger("tenant_auth")
logger.setLevel(logging.INFO)


@router.post("/tenant/login")
@limiter.limit("5/minute")  # brute force protection
def tenant_login(request: Request, login_data: TenantLoginRequest, db: Session = Depends(get_db)):
    tenant = authenticate_tenant(db, login_data.email, login_data.password)
    if not tenant:
        logger.warning(f"❌ Failed login attempt for email: {login_data.email}")
        raise HTTPException(status_code=401, detail="Invalid credentials")

    # ✅ Short-lived access token (15 min default)
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": tenant.email, "role": "tenant"},
        expires_delta=access_token_expires
    )

    # ✅ Long-lived refresh token (7 days default)
    refresh_token = create_refresh_token(
        data={"sub": tenant.email, "role": "tenant"},
        expires_days=7
    )

    # ✅ Store tokens in HttpOnly cookies
    # ⚠️ For local development: secure=False, samesite="Lax"
    resp = JSONResponse({"message": "Login successful"})
    resp.set_cookie(
        key="access_token",
        value=access_token,
        httponly=True,
        samesite="Lax",      # less strict for local dev
        secure=False,        # must be False on localhost
        max_age=int(access_token_expires.total_seconds())
    )
    resp.set_cookie(
        key="refresh_token",
        value=refresh_token,
        httponly=True,
        samesite="Lax",
        secure=False,
        max_age=60 * 60 * 24 * 7  # 7 days
    )

    logger.info(f"✅ Tenant login successful: {tenant.email}")
    return resp


# Optional logout endpoint
# @router.post("/tenant/logout")
# def logout():
#     resp = JSONResponse({"message": "Logged out"})
#     resp.delete_cookie("access_token")
#     resp.delete_cookie("refresh_token")
#     return resp
