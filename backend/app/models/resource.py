from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime
from sqlalchemy.sql import func
from ..database import Base

class Resource(Base):
    """工具资源模型"""
    __tablename__ = "resources"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(200), nullable=False)
    problem = Column(Text, nullable=False)  # 解决什么问题
    description = Column(Text)
    type = Column(String(50))  # 提示词/代码/插件
    format = Column(String(20))
    category = Column(String(50))  # prompts/code/plugins
    file_url = Column(String(500))
    is_example = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
