from sqlalchemy import Column, Integer, String, Text, Date, Boolean, DateTime, JSON
from sqlalchemy.sql import func
from ..database import Base

class Research(Base):
    """调研洞察模型 - 展示分析模型和市场调研"""
    __tablename__ = "research"

    id = Column(Integer, primary_key=True, index=True)
    date = Column(Date, nullable=False)
    is_new = Column(Boolean, default=True)
    importance = Column(String(10), nullable=False)  # high, medium, low
    title = Column(String(200), nullable=False)
    description = Column(Text)
    framework = Column(String(50))  # SWOT, 五力模型等（保留兼容）
    source = Column(String(100))
    
    # 新增字段 - 模型可视化和分类
    model_type = Column(String(50))  # SWOT/五力模型/波士顿矩阵/PEST等
    model_data = Column(JSON)  # 存储模型的具体数据
    # 例如SWOT: {"S": ["优势1", "优势2"], "W": ["劣势1"], "O": ["机会1"], "T": ["威胁1"]}
    # 例如五力: {"supplier": 7, "buyer": 6, "substitute": 5, "entry": 8, "rivalry": 9}
    source_institution = Column(String(100))  # 来源机构（麦肯锡、德勤等）
    category = Column(String(50))  # 行业分析/市场调研/趋势研判
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
