from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from ..database import get_db
from ..models.competitor import Competitor

router = APIRouter()

@router.get("/")
def get_competitors(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    """获取所有竞品动态"""
    competitors = db.query(Competitor).offset(skip).limit(limit).all()
    return competitors
