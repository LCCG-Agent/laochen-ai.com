# 老陈AI工坊 - FastAPI后端

## 快速开始

### 1. 安装依赖

```bash
cd backend
pip install -r requirements.txt
```

### 2. 配置环境变量

```bash
cp .env.example .env
# 编辑 .env 文件，配置数据库等信息
```

### 3. 启动开发服务器

```bash
uvicorn app.main:app --reload
```

访问:
- API文档: http://localhost:8000/docs
- 后端API: http://localhost:8000/api

## API接口

### 资讯捕捉
- `GET /api/cases` - 获取所有案例
- `GET /api/cases/{id}` - 获取单个案例
- `POST /api/cases` - 创建案例
- `PUT /api/cases/{id}` - 更新案例
- `DELETE /api/cases/{id}` - 删除案例

### 工具资源
- `GET /api/resources` - 获取所有资源
- `GET /api/resources/{id}` - 获取单个资源

### 其他模块
- 调研洞察: `/api/research`
- 沙盘推演: `/api/strategies`
- 竞品雷达: `/api/competitors`

## 数据库

使用PostgreSQL数据库。

### 初始化数据库

```bash
# 方式1: 自动创建（首次启动时）
uvicorn app.main:app --reload

# 方式2: 使用Alembic迁移（推荐）
alembic init alembic
alembic revision --autogenerate -m "Initial migration"
alembic upgrade head
```

## 项目结构

```
backend/
├── app/
│   ├── main.py          # FastAPI应用入口
│   ├── config.py        # 配置
│   ├── database.py      # 数据库连接
│   ├── models/          # SQLAlchemy模型
│   ├── schemas/         # Pydantic模型
│   ├── api/             # API路由
│   └── crud/            # 数据库操作
├── requirements.txt     # 依赖
└── Dockerfile          # Docker配置
```
