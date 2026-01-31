# 老陈AI工坊

一个 AI 驱动的数据分析决策看板平台

---

## 📦 当前已实现

### 五大功能板块（V3.2升级）

1. **资讯捕捉** (`/cases`) - **时间轴展示**，追踪AI工具最新动态
   - ✅ 垂直时间轴设计
   - ✅ 优先级可视化（🔴高 🟡中 🟢低）
   - ✅ 新闻来源和权威性标注
   - ✅ NEW标识脉冲动画
   
2. **调研洞察** (`/research`) - **专业分析模型可视化**
   - ✅ SWOT分析矩阵
   - ✅ PEST分析矩阵
   - ✅ 雷达图能力模型
   - ✅ 麦肯锡/德勤框架应用
   
3. **沙盘推演** (`/strategy`) - **流程路径可视化**
   - ✅ 横向流程图展示
   - ✅ 关键行动 + 注意事项 + 对标案例
   - ✅ 里程碑时间线
   - ✅ 行业对比分析
   
4. **竞品雷达** (`/competitor`) - **多维度雷达图分析**
   - ✅ Recharts雷达图可视化
   - ✅ 风险等级评估
   - ✅ 应对策略建议
   - ✅ 关键指标详情
   
5. **工具资源** (`/resources`) - 提示词与代码模板

### 核心特性

- ✅ **时间轴展示系统** - 垂直时间轴，脉冲动画
- ✅ **专业分析模型** - SWOT、PEST、雷达图
- ✅ **流程可视化** - 横向流程图、里程碑
- ✅ **雷达图分析** - Recharts图表库
- ✅ **优先级标记** - 🔴高 🟡中 🟢低
- ✅ **权威性标注** - 官方/权威/一般
- ✅ **响应式设计** - 移动端适配
- ✅ **ICP备案合规** - 纯信息展示

---

## 🛠️ 技术框架

**前端**
- Next.js 16.1.6 (App Router)
- React 19.2.3
- TypeScript 5
- TailwindCSS 4

**后端**
- FastAPI (Python)
- PostgreSQL 15
- SQLAlchemy (ORM)
- Pydantic (数据验证)

**项目结构**
```
frontend/src/
├── app/
│   ├── page.tsx          # 首页
│   ├── cases/           # 资讯捕捉
│   ├── research/        # 调研洞察
│   ├── strategy/        # 沙盘推演
│   ├── competitor/      # 竞品雷达
│   ├── resources/       # 工具资源
│   ├── layout.tsx       # 全局布局
│   └── globals.css      # 样式
├── components/
│   ├── ModuleIcons.tsx  # 图标
│   └── Navigation.tsx   # 导航
└── public/
    └── logo.jpg         # Logo
```

---

## 🚀 快速开始

### 前端开发

```bash
cd frontend
npm install
npm run dev
```

访问: http://localhost:3000

### 后端开发

```bash
cd backend
pip install -r requirements.txt
cp .env.example .env  # 配置环境变量
uvicorn app.main:app --reload
```

访问:
- API文档: http://localhost:8000/docs
- 后端API: http://localhost:8000/api

> 💡 提示: 需要先安装PostgreSQL数据库

### Docker部署（一键启动所有服务）

```bash
# 构建并启动（数据库+后端+前端）
docker compose up -d

# 查看日志
docker compose logs -f

# 停止
docker compose down
```

访问:
- 前端: http://localhost:3000
- 后端: http://localhost:8000
- 数据库: localhost:5432

---

## 🌐 服务器部署

### 快速部署到生产环境

本项目已配置腾讯云服务器一键部署方案：

#### 1. 本地推送到 GitHub
```bash
# Windows: 双击运行
deploy-to-github.bat

# 或手动执行
git add .
git commit -m "更新说明"
git push origin main
```

#### 2. 服务器部署
```bash
# SSH连接服务器
ssh ubuntu@101.34.79.228

# 运行一键部署脚本
curl -o ~/deploy-server.sh https://raw.githubusercontent.com/LCCG-Agent/laochen-ai.com/main/deploy-server.sh
chmod +x ~/deploy-server.sh
./deploy-server.sh
```

#### 3. 访问生产环境
- 前端: http://101.34.79.228:3000
- 后端: http://101.34.79.228:8000
- API文档: http://101.34.79.228:8000/docs

### 部署文档

| 文档 | 说明 |
|------|------|
| `QUICK-START.md` | 快速部署参考卡（推荐） |
| `DEPLOYMENT.md` | 完整部署指南 |
| `deploy-to-github.bat` | Windows本地一键上传脚本 |
| `deploy-server.sh` | 服务器一键部署脚本 |

> 💡 **首次部署提示**: 
> - 需要 GitHub Personal Access Token
> - 需要在腾讯云控制台开放端口 3000 和 8000
> - 详见 `DEPLOYMENT.md`

---

**版本**: V3.2.0 (可视化升级)  
**更新**: 2026-01-31

---

## 🎯 最新更新

### V3.2 - 可视化升级 ✅ (2026-01-31)
- ✅ **资讯捕捉**：时间轴展示，优先级可视化
- ✅ **调研洞察**：SWOT/PEST矩阵 + 雷达图
- ✅ **沙盘推演**：横向流程图 + 里程碑时间线
- ✅ **竞品雷达**：Recharts雷达图 + 风险评估
- ✅ **数据库升级**：新增10+字段支持可视化
- ✅ **Recharts集成**：专业图表库

### V3.1 - 前后端分离架构 ✅
- ✅ FastAPI后端完整搭建
- ✅ 6个数据库表创建
- ✅ RESTful API接口
- ✅ Docker部署配置

**当前状态**: 前端展示全面升级，数据库结构完善，后端API就绪

---

## 🔧 常见问题排查

### 问题1: 提示"端口被占用"或"无法启动"

**原因**: 有旧的Next.js进程还在运行

**解决方法**:
```powershell
# 查找占用3000端口的进程
netstat -ano | findstr :3000

# 停止该进程（替换<PID>为实际进程ID）
taskkill /F /PID <PID>

# 或者清理锁文件
Remove-Item "frontend\.next\dev\lock" -Force
```

### 问题2: 提示"找不到package.json"

**原因**: 在错误的目录下运行了npm命令

**解决方法**: 确保在 `frontend` 文件夹下运行：
```bash
cd frontend
npm run dev
```

### 问题3: Docker启动失败

**解决方法**:
```bash
# 完全清理并重新启动
docker-compose down -v
docker-compose up --build
```

### ⚠️ 重要提醒
- ✅ **正确**: 在 `frontend` 文件夹下启动前端
- ❌ **错误**: 在根目录或 `web` 文件夹下启动（旧版本已废弃）
