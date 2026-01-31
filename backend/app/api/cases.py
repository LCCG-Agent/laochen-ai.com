from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from ..database import get_db
from ..schemas.case import CaseCreate, CaseUpdate, CaseResponse
from ..crud.case import case_crud

router = APIRouter()

@router.get("/", response_model=List[CaseResponse])
def get_cases(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    """获取所有案例"""
    cases = case_crud.get_all(db, skip=skip, limit=limit)
    return cases

@router.get("/{case_id}", response_model=CaseResponse)
def get_case(
    case_id: int,
    db: Session = Depends(get_db)
):
    """获取单个案例"""
    case = case_crud.get_by_id(db, case_id)
    if not case:
        raise HTTPException(status_code=404, detail="案例不存在")
    return case

@router.post("/", response_model=CaseResponse)
def create_case(
    case_in: CaseCreate,
    db: Session = Depends(get_db)
):
    """创建案例"""
    case = case_crud.create(db, case_in)
    return case

@router.put("/{case_id}", response_model=CaseResponse)
def update_case(
    case_id: int,
    case_in: CaseUpdate,
    db: Session = Depends(get_db)
):
    """更新案例"""
    case = case_crud.update(db, case_id, case_in)
    if not case:
        raise HTTPException(status_code=404, detail="案例不存在")
    return case

@router.delete("/{case_id}")
def delete_case(
    case_id: int,
    db: Session = Depends(get_db)
):
    """删除案例"""
    success = case_crud.delete(db, case_id)
    if not success:
        raise HTTPException(status_code=404, detail="案例不存在")
    return {"message": "删除成功"}
