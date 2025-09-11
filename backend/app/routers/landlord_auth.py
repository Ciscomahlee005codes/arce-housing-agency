from fastapi import APIRouter, Depends, HTTPException, Response
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from app.database import get_db
from models import Landlord
from app.schemas import LandlordSignupRequest, LandlordResponse, LandlordLoginRequest, LoginResponse
from auth import get_password_hash, verify_password, create_access_token, create_refresh_token
import logging
from datetime import timedelta

router = APIRouter(prefix="/auth/landlord", tags=["Authentication - Landlord"])
logger = logging.getLogger(__name__)

# ---------------- Signup ----------------
@router.post("/signup", response_model=LandlordResponse)
def landlord_signup(signup_data: LandlordSignupRequest, db: Session = Depends(get_db)):
    try:
        if db.query(Landlord).filter(Landlord.email == signup_data.email).first():
            raise HTTPException(status_code=400, detail="Email already registered")
        if db.query(Landlord).filter(Landlord.phone == signup_data.phone).first():
            raise HTTPException(status_code=400, detail="Phone already registered")

        hashed_password = get_password_hash(signup_data.password)
        new_landlord = Landlord(
            full_name=signup_data.full_name,
            email=signup_data.email,
            phone=signup_data.phone,
            hashed_password=hashed_password,
            company_name=signup_data.company_name,
            property_location=signup_data.property_location,
            landlord_property_type=signup_data.property_type
        )

        db.add(new_landlord)
        db.commit()
        db.refresh(new_landlord)

        return LandlordResponse(
            landlord_id=new_landlord.id,
            full_name=new_landlord.full_name,
            email=new_landlord.email,
            phone=new_landlord.phone,
            company_name=new_landlord.company_name,
            property_location=new_landlord.property_location,
            landlord_property_type=new_landlord.property_type,
            message="Signup successful"
        )

    except IntegrityError:
        db.rollback()
        raise HTTPException(status_code=400, detail="Email or phone already registered")

# ---------------- Login ----------------
@router.post("/login")
def landlord_login(login_data: LandlordLoginRequest, response: Response, db: Session = Depends(get_db)):
    landlord = db.query(Landlord).filter(Landlord.email == login_data.email).first()
    if not landlord or not verify_password(login_data.password, landlord.hashed_password):
        logger.warning(f"Failed login attempt for email: {login_data.email}")
        raise HTTPException(status_code=401, detail="Invalid credentials")

    access_token = create_access_token(data={"sub": landlord.email, "role": "landlord"}, expires_delta=timedelta(minutes=15))
    refresh_token = create_refresh_token(data={"sub": landlord.email, "role": "landlord"}, expires_days=7)

    # response.set_cookie("access_token", access_token, httponly=True, secure=True, samesite="Strict")
    # response.set_cookie("refresh_token", refresh_token, httponly=True, secure=True, samesite="Strict")

    response.set_cookie(
    key="access_token",
    value=access_token,
    httponly=True,
    secure=False,         # False for dev, True in prod
    samesite="Lax",       # Lax works better than Strict for most login flows
    max_age=15 * 60
    )
    response.set_cookie(
    key="refresh_token",
    value=refresh_token,
    httponly=True,
    secure=False,         # False for dev, True in prod
    samesite="Lax",
    max_age=7 * 24 * 60 * 60
   )

    return LoginResponse(message="Login successful", role= "landlord")


