from sqlalchemy import Column, Integer, String, Text, Date, Boolean, DateTime, JSON
from sqlalchemy.sql import func
from ..database import Base

class Strategy(Base):
    """沙盘推演模型 - 展示行动路径和流程"""
    __tablename__ = "strategies"

    id = Column(Integer, primary_key=True, index=True)
    date = Column(Date, nullable=False)
    is_new = Column(Boolean, default=True)
    recommendation = Column(String(10), nullable=False)  # high, medium, low
    difficulty = Column(String(20))  # 入门, 中级, 进阶
    title = Column(String(200), nullable=False)
    description = Column(Text)
    duration = Column(String(50))
    steps = Column(JSON, default=[])  # SQLite用JSON存储数组（保留兼容）
    
    # 新增字段 - 行动路径和里程碑
    action_path = Column(JSON)  # 行动路径详细数据
    # 格式: [{"step": 1, "title": "阶段名", "action": "具体行动", "attention": "注意事项", "industry_case": "对标案例"}]
    industry_comparison = Column(Text)  # 行业对比案例描述
    key_milestones = Column(JSON)  # 关键里程碑
    # 格式: [{"month": 1, "milestone": "完成xxx", "indicator": "指标xxx"}]
    timeline_months = Column(Integer)  # 预计完成时间（月）
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
