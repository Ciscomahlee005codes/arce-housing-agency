from pydantic import BaseModel, EmailStr

# tenant signup schema
class TenantSignupRequest(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    password: str

class TenantResponse(BaseModel):
    id: int
    full_name: str
    email: EmailStr
    phone: str

    class Config:
         from_attributes = True


# tenant login schema
class TenantLoginRequest(BaseModel):
    email: str
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str
