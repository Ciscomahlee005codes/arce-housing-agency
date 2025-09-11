from pydantic import BaseModel, EmailStr
from typing import Optional

# ==========================
# Tenant Schemas
# ==========================
class TenantSignupRequest(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    password: str

class TenantResponse(BaseModel):
    tenant_id: int
    full_name: str
    email: EmailStr
    phone: str
    message: Optional[str] = None  # optional response message

    class Config:
        from_attributes = True

class TenantLoginRequest(BaseModel):
    email: EmailStr
    password: str


# ==========================
# Student Schemas
# ==========================
class StudentSignupRequest(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    password: str
    school_name: str

class StudentResponse(BaseModel):
    student_id: int
    full_name: str
    email: EmailStr
    phone: str
    school_name: str
    message: Optional[str] = None

    class Config:
        from_attributes = True

class StudentLoginRequest(BaseModel):
    email: EmailStr
    password: str


# ==========================
# Landlord Schemas
# ==========================
class LandlordSignupRequest(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    password: str
    company_name: Optional[str] = None
    property_location: str
    landlord_property_type: str

class LandlordResponse(BaseModel):
    landlord_id: int
    full_name: str
    email: EmailStr
    phone: str
    company_name: Optional[str] = None
    property_location: str
    landlord_property_type: str
    message: Optional[str] = None

    class Config:
        from_attributes = True

class LandlordLoginRequest(BaseModel):
    email: EmailStr
    password: str


# ==========================
# Agent Schemas
# ==========================
class AgentSignupRequest(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    password: str
    agency_name: str
    license_number: str
    service_areas: str

class AgentResponse(BaseModel):
    agent_id: int
    full_name: str
    email: EmailStr
    phone: str
    agency_name: str
    license_number: str
    service_areas: str
    message: Optional[str] = None

    class Config:
        from_attributes = True

class AgentLoginRequest(BaseModel):
    email: EmailStr
    password: str


# ==========================
# Common Responses
# ==========================
class TokenResponse(BaseModel):
    access_token: str
    token_type: str

class LoginResponse(BaseModel):
    message: str
    role: str




















# from pydantic import BaseModel, EmailStr
# from typing import Optional

# # ==========================
# # Tenant Schemas
# # ==========================
# class TenantSignupRequest(BaseModel):
#     full_name: str
#     email: EmailStr
#     phone: str
#     password: str

# class TenantResponse(BaseModel):
#     tenant_id: int
#     full_name: str
#     email: EmailStr
#     phone: str
#     message: Optional[str] = None  # optional response message

#     class Config:
#         from_attributes = True

# class TenantLoginRequest(BaseModel):
#     email: EmailStr
#     password: str


# # ==========================
# # Student Schemas
# # ==========================
# class StudentSignupRequest(BaseModel):
#     full_name: str
#     email: EmailStr
#     phone: str
#     password: str
#     school_name: str

# class StudentResponse(BaseModel):
#     student_id: int
#     full_name: str
#     email: EmailStr
#     phone: str
#     school_name: str
#     message: Optional[str] = None

#     class Config:
#         from_attributes = True

# class StudentLoginRequest(BaseModel):
#     email: EmailStr
#     password: str


# # ==========================
# # Landlord Schemas
# # ==========================
# class LandlordSignupRequest(BaseModel):
#     full_name: str
#     email: EmailStr
#     phone: str
#     password: str
#     company_name: Optional[str] = None
#     property_location: str
#     landlord_property_type: str

# class LandlordResponse(BaseModel):
#     landlord_id: int
#     full_name: str
#     email: EmailStr
#     phone: str
#     company_name: Optional[str] = None
#     property_location: str
#     landlord_property_type: str
#     message: Optional[str] = None

#     class Config:
#         from_attributes = True

# class LandlordLoginRequest(BaseModel):
#     email: EmailStr
#     password: str


# # ==========================
# # Agent Schemas
# # ==========================
# class AgentSignupRequest(BaseModel):
#     full_name: str
#     email: EmailStr
#     phone: str
#     password: str
#     agency_name: str
#     license_number: str
#     service_areas: str

# class AgentResponse(BaseModel):
#     agent_id: int
#     full_name: str
#     email: EmailStr
#     phone: str
#     agency_name: str
#     license_number: str
#     service_areas: str
#     message: Optional[str] = None

#     class Config:
#         from_attributes = True

# class AgentLoginRequest(BaseModel):
#     email: EmailStr
#     password: str


# # ==========================
# # Common Token Response
# # ==========================
# class TokenResponse(BaseModel):
#     access_token: str
#     token_type: str
