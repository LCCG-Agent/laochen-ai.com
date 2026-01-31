from pydantic import BaseModel, Field
from datetime import date, datetime
from typing import List, Optional

class CaseBase(BaseModel):
    """案例基础模型"""
    date: date
    is_new: bool = True
    priority: str = Field(..., pattern="^(high|medium|low)$")
    title: str = Field(..., max_length=200)
    description: Optional[str] = None
    tools: List[str] = []
    category: Optional[str] = None
    impact: Optional[str] = None

class CaseCreate(CaseBase):
    """创建案例"""
    pass

class CaseUpdate(BaseModel):
    """更新案例"""
    date: Optional[date] = None
    is_new: Optional[bool] = None
    priority: Optional[str] = Field(None, pattern="^(high|medium|low)$")
    title: Optional[str] = Field(None, max_length=200)
    description: Optional[str] = None
    tools: Optional[List[str]] = None
    category: Optional[str] = None
    impact: Optional[str] = None

class CaseResponse(CaseBase):
    """案例响应"""
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True
