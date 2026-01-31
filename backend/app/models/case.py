from sqlalchemy import Column, Integer, String, Text, Date, Boolean, DateTime, JSON
from sqlalchemy.sql import func
from ..database import Base

class Case(Base):
    """资讯捕捉模型 - 时间轴展示新闻资讯"""
    __tablename__ = "cases"

    id = Column(Integer, primary_key=True, index=True)
    date = Column(Date, nullable=False)
    is_new = Column(Boolean, default=True)
    priority = Column(String(10), nullable=False)  # high, medium, low
    title = Column(String(200), nullable=False)
    description = Column(Text)
    tools = Column(JSON, default=[])  # SQLite用JSON存储数组
    category = Column(String(50))
    impact = Column(String(100))
    
    # 新增字段 - 新闻来源和权威性
    source = Column(String(100))  # 新闻来源（如：麦肯锡、德勤、36氪、TechCrunch）
    authority_level = Column(String(20))  # 权威性（官方/权威/一般）
    source_url = Column(String(500))  # 来源链接
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
