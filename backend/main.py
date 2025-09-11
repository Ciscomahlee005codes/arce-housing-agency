import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import Base, engine
# ---------------- Routers ----------------
from app.routers import tenant_signup, tenant_login, tenant_profile
from app.routers import student_auth
from app.routers import landlord_auth
from app.routers import agent_auth

# 🟢 Add to main.py
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware
from app.routers.tenant_signup import limiter  # or wherever you defined it



#import models  # Ensure all models are loaded so SQLAlchemy creates tables
# ---------------- Logging ----------------

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s"
)
logger = logging.getLogger("arce-api")

# ---------------- App Initialization ----------------
app = FastAPI(
    title="ARCE Housing API",
    description="API for tenants, students, landlords, and agents",
    version="1.0.0"
)


app.state.limiter = limiter
app.add_middleware(SlowAPIMiddleware)
app.add_exception_handler(RateLimitExceeded, lambda request, exc: JSONResponse(
    status_code=429, content={"detail": "Too many requests"}
))


# ---------------- CORS ----------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # Frontend React app
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------------- Include Routers ----------------
app.include_router(tenant_signup.router)
app.include_router(tenant_login.router)
app.include_router(tenant_profile.router)
app.include_router(student_auth.router)
app.include_router(landlord_auth.router)
app.include_router(agent_auth.router)

# ---------------- Root Endpoint ----------------
@app.get("/")
def root():
    return {"message": "Welcome to ARCE Housing API"}

