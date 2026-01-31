from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional

class ResourceBase(BaseModel):
    """资源基础模型"""
    name: str = Field(..., max_length=200)
    problem: str
    description: Optional[str] = None
    type: Optional[str] = None
    format: Optional[str] = None
    category: Optional[str] = None
    file_url: Optional[str] = None
    is_example: bool = True

class ResourceCreate(ResourceBase):
    """创建资源"""
    pass

class ResourceUpdate(BaseModel):
    """更新资源"""
    name: Optional[str] = Field(None, max_length=200)
    problem: Optional[str] = None
    description: Optional[str] = None
    type: Optional[str] = None
    format: Optional[str] = None
    category: Optional[str] = None
    file_url: Optional[str] = None
    is_example: Optional[bool] = None

class ResourceResponse(ResourceBase):
    """资源响应"""
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True
