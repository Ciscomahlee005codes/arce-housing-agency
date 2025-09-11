from fastapi import APIRouter, Depends, HTTPException, status, Response
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from app.database import get_db
from models import Student
from app.schemas import StudentSignupRequest, StudentResponse, StudentLoginRequest, LoginResponse,TokenResponse
from auth import get_password_hash, verify_password, create_access_token, create_refresh_token
import logging
from datetime import timedelta

router = APIRouter(
    prefix="/auth/student",
    tags=["Authentication - Student"]
)

logger = logging.getLogger(__name__)

# ---------------- Signup ----------------
@router.post("/signup", response_model=StudentResponse)
def student_signup(signup_data: StudentSignupRequest, db: Session = Depends(get_db)):
    try:
        # Pre-check for duplicates
        if db.query(Student).filter(Student.email == signup_data.email).first():
            raise HTTPException(status_code=400, detail="Email already registered")
        if db.query(Student).filter(Student.phone == signup_data.phone).first():
            raise HTTPException(status_code=400, detail="Phone already registered")

        hashed_password = get_password_hash(signup_data.password)
        new_student = Student(
            full_name=signup_data.full_name,
            email=signup_data.email,
            phone=signup_data.phone,
            hashed_password=hashed_password,
            school_name=signup_data.school_name
        )

        db.add(new_student)
        db.commit()
        db.refresh(new_student)

        return StudentResponse(
            student_id=new_student.id,
            full_name=new_student.full_name,
            email=new_student.email,
            phone=new_student.phone,
            school_name=new_student.school_name,
            message="Signup successful"
        )

    except IntegrityError:
        db.rollback()
        raise HTTPException(status_code=400, detail="Email or phone already registered")


# ---------------- Login ----------------
@router.post("/login")
def student_login(login_data: StudentLoginRequest, response: Response, db: Session = Depends(get_db)):
    student = db.query(Student).filter(Student.email == login_data.email).first()
    if not student or not verify_password(login_data.password, student.hashed_password):
        logger.warning(f"Failed login attempt for email: {login_data.email}")
        raise HTTPException(status_code=401, detail="Invalid credentials")

    # Short-lived access token + long-lived refresh token
    access_token = create_access_token(data={"sub": student.email, "role": "student"}, expires_delta=timedelta(minutes=15))
    refresh_token = create_refresh_token(data={"sub": student.email, "role": "student"}, expires_days=7)

    # Set HttpOnly, secure cookies
    response.set_cookie("access_token", access_token, httponly=True, secure=False, samesite="Strict")
    response.set_cookie("refresh_token", refresh_token, httponly=True, secure=False, samesite="Strict")

    return LoginResponse(message= "Login successful", role= "student")
