from fastapi import FastAPI
from app.routers import TenantSignup, TenantLogin

app = FastAPI()

app.include_router(TenantLogin.router)
app.include_router(TenantSignup.router)