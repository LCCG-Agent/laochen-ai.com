from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from ..database import get_db
from ..models.research import Research

router = APIRouter()

@router.get("/")
def get_research(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    """获取所有调研"""
    research = db.query(Research).offset(skip).limit(limit).all()
    return research
