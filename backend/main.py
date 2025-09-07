import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import Base, engine

# ---------------- Routers ----------------
from app.routers import tenant_signup, tenant_login, tenant_profile
from app.routers import student_auth
from app.routers import landlord_auth
from app.routers import agent_auth

import models  # Ensure all models are loaded so SQLAlchemy creates tables

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

# ---------------- Database ----------------
try:
    Base.metadata.create_all(bind=engine)
    logger.info("Database tables created or already exist.")
except Exception as e:
    logger.error(f"Failed to create tables: {e}")

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










# import os
# import logging
# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from app.database import Base, engine
# # ---------------- Routers ----------------
# # Tenant routers
# from app.routers import tenant_signup, tenant_login, tenant_profile
# # Student router
# from app.routers import student_auth
# # Landlord router
# from app.routers import landlord_auth
# # Agent router
# from app.routers import agent_auth
# from dotenv import load_dotenv
# # ---------------- Models ----------------

# import models  # Ensure all models are loaded so SQLAlchemy creates tables

# # ---------------- Logging ----------------
# logging.basicConfig(
#     level=logging.INFO,
#     format="%(asctime)s [%(levelname)s] %(name)s: %(message)s"
# )
# logger = logging.getLogger("arce-api")

# load_dotenv()  # Load .env file if present
# # ---------------- Environment Variables ----------------
# FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:5173")
# DATABASE_URL = os.getenv(
#     "DATABASE_URL",
#     "postgresql+psycopg2://postgres:MEGA1234@localhost/housing_db"
# )

# # ---------------- App Initialization ----------------
# app = FastAPI(
#     title="ARCE Housing API",
#     description="API for tenants, students, landlords, and agents",
#     version="1.0.0"
# )

# # ---------------- CORS ----------------
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=[
#         FRONTEND_URL,  # from environment
#         "http://127.0.0.1:5173"  # local dev alternative
#     ],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # ---------------- Database ----------------
# # Create all tables (for initial setup; use Alembic for migrations in production)
# try:
#     Base.metadata.create_all(bind=engine)
#     logger.info("Database tables created or already exist.")
# except Exception as e:
#     logger.error(f"Failed to create tables: {e}")

# # ---------------- Include Routers ----------------
# # Tenant endpoints
# app.include_router(tenant_signup.router)
# app.include_router(tenant_login.router)
# app.include_router(tenant_profile.router)

# # Student endpoints
# app.include_router(student_auth.router)

# # Landlord endpoints
# app.include_router(landlord_auth.router)

# # Agent endpoints
# app.include_router(agent_auth.router)

# # ---------------- Root Endpoint ----------------
# @app.get("/")
# def root():
#     return {"message": "Welcome to ARCE Housing API"}
