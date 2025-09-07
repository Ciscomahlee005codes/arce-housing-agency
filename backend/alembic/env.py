import sys
import os
from logging.config import fileConfig

from sqlalchemy import engine_from_config, pool
from alembic import context
from dotenv import load_dotenv

# ---------------- Path Setup ----------------
# Ensure "backend/app" is in sys.path so imports work
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'app')))

# ---------------- Load Env ----------------
load_dotenv()  # Load variables from .env

# ---------------- Import Database & Models ----------------
from app.database import Base, DATABASE_URL
from models import Tenant, Agent, Landlord, Student  # make sure all models are imported

# ---------------- Alembic Config ----------------
config = context.config

# Debug print
print("DEBUG DATABASE_URL:", os.getenv("DATABASE_URL"))

# Override sqlalchemy.url with value from database.py
config.set_main_option("sqlalchemy.url", DATABASE_URL)

# ---------------- Logging ----------------
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# ---------------- Target Metadata ----------------
target_metadata = Base.metadata


# ---------------- Offline Migrations ----------------
def run_migrations_offline() -> None:
    """Run migrations in 'offline' mode (without DB connection)."""
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )

    with context.begin_transaction():
        context.run_migrations()


# ---------------- Online Migrations ----------------
def run_migrations_online() -> None:
    """Run migrations in 'online' mode (with DB connection)."""
    connectable = engine_from_config(
        config.get_section(config.config_ini_section, {}),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    with connectable.connect() as connection:
        context.configure(connection=connection, target_metadata=target_metadata)

        with context.begin_transaction():
            context.run_migrations()


# ---------------- Run ----------------
if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
