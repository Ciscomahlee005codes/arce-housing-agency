import os
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

# PostgreSQL connection
DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "postgresql+psycopg2://DB_USER:DB_PASS@DB_HOST/housing_db"
)

engine = create_engine(DATABASE_URL, future=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Dependency for FastAPI
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
