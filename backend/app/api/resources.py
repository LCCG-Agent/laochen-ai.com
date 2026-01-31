from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from ..database import get_db
from ..models.resource import Resource

router = APIRouter()

@router.get("/")
def get_resources(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    """获取所有资源"""
    resources = db.query(Resource).offset(skip).limit(limit).all()
    return resources

@router.get("/{resource_id}")
def get_resource(
    resource_id: int,
    db: Session = Depends(get_db)
):
    """获取单个资源"""
    resource = db.query(Resource).filter(Resource.id == resource_id).first()
    if not resource:
        return {"error": "资源不存在"}
    return resource
