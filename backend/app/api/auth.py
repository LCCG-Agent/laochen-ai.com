from fastapi import APIRouter

router = APIRouter()

@router.post("/login")
def login():
    """用户登录（待实现）"""
    return {"message": "登录功能待实现"}

@router.post("/register")
def register():
    """用户注册（待实现）"""
    return {"message": "注册功能待实现"}
