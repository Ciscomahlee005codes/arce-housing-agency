# app/routers/tenant_profile.py
from fastapi import APIRouter, Depends
from app.dependencies import get_current_tenant
import models

router = APIRouter(prefix="/tenant", tags=["Tenant"])

@router.get("/me")
def read_current_tenant(current_tenant: models.Tenant = Depends(get_current_tenant)):
    return {
        "id": current_tenant.id,
        "full_name": current_tenant.full_name,
        "email": current_tenant.email,
        "phone": current_tenant.phone
    }
