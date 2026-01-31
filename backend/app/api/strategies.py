from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from ..database import get_db
from ..models.strategy import Strategy

router = APIRouter()

@router.get("/")
def get_strategies(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    """获取所有策略"""
    strategies = db.query(Strategy).offset(skip).limit(limit).all()
    return strategies
