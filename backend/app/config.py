# import os
from pydantic_settings import BaseSettings, SettingsConfigDict
# from dotenv import dotenv_values
class Settings(BaseSettings):
    SECRET_KEY: str  # replace with env var in production
    ALGORITHM: str 
    ACCESS_TOKEN_EXPIRE_MINUTES: int

    model_config=SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

settings = Settings()
# Note: In a real application, use environment variables to set sensitive information.