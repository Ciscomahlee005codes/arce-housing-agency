# app/dependencies.py
from fastapi import Depends, HTTPException, status, Request
from jose import JWTError, jwt
from sqlalchemy.orm import Session
from typing import Optional
from app.database import get_db
import models
from app.config import settings  # must provide SECRET_KEY and ALGORITHM in your settings

def get_current_tenant(request: Request, db: Session = Depends(get_db)) -> models.Tenant:
    # 1) Read JWT from HTTP-only cookie
    token = request.cookies.get("access_token")
    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated"
        )

    # 2) Verify JWT (signature, expiry). jose validates "exp" automatically if present.
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        email: Optional[str] | None = payload.get("sub")
        if not email:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid token payload"
            )
    except JWTError:
        # Includes expired token case
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token"
        )

    # 3) Load the tenant from DB (lets you detect deleted/disabled accounts)
    tenant = db.query(models.Tenant).filter(models.Tenant.email == email).first()
    if tenant is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User no longer exists"
        )

    return tenant
