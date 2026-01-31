from sqlalchemy import Column, Integer, String, Text, Date, Boolean, DateTime, JSON
from sqlalchemy.sql import func
from ..database import Base

class Competitor(Base):
    """竞品雷达模型 - 展示竞品分析和风险评估"""
    __tablename__ = "competitors"

    id = Column(Integer, primary_key=True, index=True)
    date = Column(Date, nullable=False)
    is_new = Column(Boolean, default=True)
    attention_level = Column(String(10), nullable=False)  # high, medium, low
    title = Column(String(200), nullable=False)
    description = Column(Text)
    company = Column(String(100))
    impact = Column(Text)
    source = Column(String(100))
    
    # 新增字段 - 风险评估和雷达图数据
    product_name = Column(String(100))  # 产品名称
    risk_level = Column(String(20))  # 风险等级（高/中/低）
    counter_strategy = Column(Text)  # 应对策略
    key_metrics = Column(JSON)  # 雷达图关键指标
    # 格式: {"price": 8, "features": 7, "market_share": 6, "user_satisfaction": 9, "innovation": 8}
    update_frequency = Column(String(50))  # 更新频率（每日/每周/每月）
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
