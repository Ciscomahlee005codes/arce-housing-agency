from fastapi import APIRouter, Depends, HTTPException, Response
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from app.database import get_db
from models import Agent
from app.schemas import AgentSignupRequest, AgentResponse, AgentLoginRequest
from auth import get_password_hash, verify_password, create_access_token, create_refresh_token
import logging
from datetime import timedelta

router = APIRouter(prefix="/auth/agent", tags=["Authentication - Agent"])
logger = logging.getLogger(__name__)

# ---------------- Signup ----------------
@router.post("/signup", response_model=AgentResponse)
def agent_signup(signup_data: AgentSignupRequest, db: Session = Depends(get_db)):
    try:
        if db.query(Agent).filter(Agent.email == signup_data.email).first():
            raise HTTPException(status_code=400, detail="Email already registered")
        if db.query(Agent).filter(Agent.phone == signup_data.phone).first():
            raise HTTPException(status_code=400, detail="Phone already registered")

        hashed_password = get_password_hash(signup_data.password)
        new_agent = Agent(
            full_name=signup_data.full_name,
            email=signup_data.email,
            phone=signup_data.phone,
            hashed_password=hashed_password,
            agency_name=signup_data.agency_name,
            license_number=signup_data.license_number,
            service_areas=signup_data.service_areas
        )

        db.add(new_agent)
        db.commit()
        db.refresh(new_agent)

        return AgentResponse(
            agent_id=new_agent.id,
            full_name=new_agent.full_name,
            email=new_agent.email,
            phone=new_agent.phone,
            agency_name=new_agent.agency_name,
            license_number=new_agent.license_number,
            service_areas=new_agent.service_areas,
            message="Signup successful"
        )

    except IntegrityError:
        db.rollback()
        raise HTTPException(status_code=400, detail="Email or phone already registered")

# ---------------- Login ----------------
@router.post("/login")
def agent_login(login_data: AgentLoginRequest, response: Response, db: Session = Depends(get_db)):
    agent = db.query(Agent).filter(Agent.email == login_data.email).first()
    if not agent or not verify_password(login_data.password, agent.hashed_password):
        logger.warning(f"Failed login attempt for email: {login_data.email}")
        raise HTTPException(status_code=401, detail="Invalid credentials")

    access_token = create_access_token(data={"sub": agent.email, "role": "agent"}, expires_delta=timedelta(minutes=15))
    refresh_token = create_refresh_token(data={"sub": agent.email, "role": "agent"}, expires_days=7)

    response.set_cookie("access_token", access_token, httponly=True, secure=True, samesite="Strict")
    response.set_cookie("refresh_token", refresh_token, httponly=True, secure=True, samesite="Strict")

    return {"message": "Login successful"}
