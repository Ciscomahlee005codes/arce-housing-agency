from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    SECRET_KEY: str = "bzDlkz0GUSRut2Jp1Si4GQsOfKi6tUhxvQBNQfJh06jctK2KtD2tRQNglHvhj2WoFd8"  # replace with env var in production
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

settings = Settings()
# Note: In a real application, use environment variables to set sensitive information.