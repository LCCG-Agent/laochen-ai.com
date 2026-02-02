# 老陈AI工坊

> 数据分析自动化的知识分享站

**网站定位**：知识分享型网站，而非产品营销网站
- 分享数分自动化体系（道）
- 分享 Skills/MCP/Agent 工具清单（术）
- 分享 Office Agent 插件使用方法（器）

---

## 产品架构

### 道法术器体系

| 层级 | 名称 | 说明 |
|------|------|------|
| **道** | 体系框架 | 数分自动化的框架、流程、标准 |
| **术** | 工具清单 | Skills / MCP / Agent 拿来就用清单 |
| **器** | Office Agent | Excel 本地 AI 插件（VSTO框架，30+工具） |

### Office Agent 插件

- **技术栈**：VSTO（Visual Studio Tools for Office）
- **功能模式**：对话 + 工具双模式
- **核心能力**：
  - 选区即上下文，自动理解表格
  - 侧边栏对话，自然语言交互
  - 30+ 标准化工具（清洗、分析、格式化）
  - 本地化部署，数据安全可控

---

## 未来迭代方向

### "一句话执行"工作流引擎

**当前状态**：Office Agent 提供 30+ 独立工具，需手动选择
**目标愿景**：输入一句话 → 自动识别意图 → 串联工具链 → 输出结果

**实现思路**：

```
架构层级：
┌─────────────────────────────────────┐
│ 用户输入层                            │
│ "按月汇总销售额，生成折线图 + 3条结论" │
└─────────────┬───────────────────────┘
              ↓
┌─────────────────────────────────────┐
│ 意图识别层（LLM API）                 │
│ - 解析用户意图                        │
│ - 识别所需字段                        │
│ - 匹配工具组合                        │
└─────────────┬───────────────────────┘
              ↓
┌─────────────────────────────────────┐
│ 工作流引擎                            │
│ Tool1: 数据透视表（按月份分组）       │
│ Tool2: 趋势图生成                     │
│ Tool3: 同环比计算                     │
│ Tool4: 结论生成（调用 LLM）           │
└─────────────┬───────────────────────┘
              ↓
┌─────────────────────────────────────┐
│ 输出层（写回 Excel）                  │
│ - 新工作表：透视表 + 图表             │
│ - 结论文本框                          │
└─────────────────────────────────────┘
```

**技术可行性**：
- ✅ VSTO 插件可以调用外部 API（LLM）
- ✅ 可以在 C# 中实现工具链编排
- ✅ 可以用 Skills/MCP 的方式定义工具能力
- ⏳ 需要设计工具描述规范（类似 OpenAI Function Calling）
- ⏳ 需要构建工具依赖关系图

**迭代路径**：
1. **Phase 1（当前）**：30+ 独立工具，手动选择
2. **Phase 2**：预设工作流模板（如"月度销售分析"）
3. **Phase 3**：意图识别 + 自动串联工具
4. **Phase 4**：学习用户习惯，优化工作流推荐

---

## 项目结构

```
├── frontend/          # Next.js 前端
│   ├── src/
│   │   ├── app/       # 页面（道/术/器/更新/FAQ）
│   │   └── components/# 组件（Header/Footer）
│   ├── public/        # 静态资源
│   └── Dockerfile
├── backend/           # FastAPI 后端
│   ├── app/
│   │   ├── api/       # API 路由
│   │   ├── models/    # 数据模型
│   │   └── schemas/   # Pydantic 模式
│   └── Dockerfile
├── docker-compose.yml # Docker 编排
├── deploy-server.sh   # 服务器部署脚本
└── deploy-to-github.bat # 本地推送脚本
```

## 页面路由

| 路由 | 说明 |
|------|------|
| `/` | 首页 - Hero + 三卡片 + 案例 + 更新 |
| `/dao` | 道 - 数分自动化体系框架 |
| `/shu` | 术 - 工具清单库 |
| `/qi` | 器 - 模板下载 |
| `/qi/templates/[slug]` | 模板详情页 |
| `/updates` | 更新日志 |
| `/faq` | 常见问题 |

---

## 本地开发

### 前端

```bash
cd frontend
npm install
npm run dev
```

访问 http://localhost:3000

### 后端

```bash
cd backend
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload
```

访问 http://localhost:8000/docs

---

## Docker 部署

```bash
# 启动所有服务
docker compose up -d

# 查看日志
docker compose logs -f

# 停止服务
docker compose down
```

---

## 生产部署

### 1. 推送代码到 GitHub

```bash
# Windows
deploy-to-github.bat

# 或手动
git add .
git commit -m "更新"
git push origin main
```

### 2. 服务器部署

```bash
ssh ubuntu@101.34.79.228
./deploy-server.sh
```

### 3. 访问

- 前端: http://101.34.79.228:3000
- 后端: http://101.34.79.228:8000

---

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | Next.js 16 + React 19 + TailwindCSS 4 |
| 后端 | FastAPI + PostgreSQL + SQLAlchemy |
| 部署 | Docker + Docker Compose |

---

**版本**: v4.0.0  
**更新**: 2026-02-02
