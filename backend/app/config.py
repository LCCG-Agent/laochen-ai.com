from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    """应用配置"""
    
    # 数据库（开发环境用SQLite，生产环境用PostgreSQL）
    DATABASE_URL: str = "sqlite:///./laochen_ai.db"
    
    # 安全
    SECRET_KEY: str = "your-secret-key-change-in-production"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    # 应用
    APP_NAME: str = "老陈AI工坊"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = True
    
    # CORS
    FRONTEND_URL: str = "http://localhost:3000"
    
    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()
