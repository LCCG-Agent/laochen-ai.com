from sqlalchemy.orm import Session
from typing import List, Optional
from ..models.case import Case
from ..schemas.case import CaseCreate, CaseUpdate

class CaseCRUD:
    """案例CRUD操作"""
    
    def get_all(self, db: Session, skip: int = 0, limit: int = 100) -> List[Case]:
        """获取所有案例"""
        return db.query(Case).offset(skip).limit(limit).all()
    
    def get_by_id(self, db: Session, case_id: int) -> Optional[Case]:
        """根据ID获取案例"""
        return db.query(Case).filter(Case.id == case_id).first()
    
    def create(self, db: Session, case_in: CaseCreate) -> Case:
        """创建案例"""
        case = Case(**case_in.model_dump())
        db.add(case)
        db.commit()
        db.refresh(case)
        return case
    
    def update(self, db: Session, case_id: int, case_in: CaseUpdate) -> Optional[Case]:
        """更新案例"""
        case = self.get_by_id(db, case_id)
        if not case:
            return None
        
        update_data = case_in.model_dump(exclude_unset=True)
        for field, value in update_data.items():
            setattr(case, field, value)
        
        db.commit()
        db.refresh(case)
        return case
    
    def delete(self, db: Session, case_id: int) -> bool:
        """删除案例"""
        case = self.get_by_id(db, case_id)
        if not case:
            return False
        
        db.delete(case)
        db.commit()
        return True

case_crud = CaseCRUD()
