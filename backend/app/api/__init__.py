from fastapi import APIRouter
from .cases import router as cases_router
from .resources import router as resources_router
from .research import router as research_router
from .strategies import router as strategies_router
from .competitors import router as competitors_router
from .auth import router as auth_router

api_router = APIRouter()

# 注册路由
api_router.include_router(cases_router, prefix="/cases", tags=["资讯捕捉"])
api_router.include_router(research_router, prefix="/research", tags=["调研洞察"])
api_router.include_router(strategies_router, prefix="/strategies", tags=["沙盘推演"])
api_router.include_router(competitors_router, prefix="/competitors", tags=["竞品雷达"])
api_router.include_router(resources_router, prefix="/resources", tags=["工具资源"])
api_router.include_router(auth_router, prefix="/auth", tags=["认证"])

__all__ = ["api_router"]
