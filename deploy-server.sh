#!/bin/bash

# 老陈AI工坊 - 服务器一键部署脚本
# 版本: V2.0 - 专为 laochen-AI 项目定制
# 功能: 从GitHub拉取代码并部署到Docker

set -e  # 遇到错误立即退出

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# ⚠️ 重要配置项 - 首次使用请修改这里！
# ============================================
PROJECT_NAME="laochen-AI"
REPO_URL="https://github.com/LCCG-Agent/laochen-ai.com.git"  # ⚠️ 请修改为你的GitHub仓库地址（如: https://github.com/username/laochen-AI.git）
BRANCH="main"  # Git分支名称（如果你的仓库使用 master 分支，请改为 "master"）
# ============================================

# 自动配置项（一般不需要修改）
DEPLOY_DIR="/home/ubuntu/${PROJECT_NAME}"
PORT=3000  # 前端端口
BACKEND_PORT=8000  # 后端端口
DB_PORT=5432  # 数据库端口

echo -e "${BLUE}========================================"
echo "  老陈AI工坊 - 服务器部署脚本"
echo "  版本: V1.0"
echo "  项目: ${PROJECT_NAME}"
echo "========================================${NC}"
echo ""

# 步骤1: 检查Docker环境
echo -e "${YELLOW}[1/8] 检查Docker环境...${NC}"
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker未安装，请先安装Docker${NC}"
    exit 1
fi
if ! command -v docker compose &> /dev/null; then
    echo -e "${RED}❌ Docker Compose未安装${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Docker环境正常${NC}"
echo ""

# 步骤2: 停止旧容器（如果存在）
echo -e "${YELLOW}[2/8] 停止旧容器...${NC}"
if [ -d "$DEPLOY_DIR" ]; then
    cd "$DEPLOY_DIR"
    if [ -f "docker-compose.yml" ]; then
        echo "停止现有容器..."
        docker compose down || true
        echo -e "${GREEN}✅ 旧容器已停止${NC}"
    fi
else
    echo "首次部署，跳过停止步骤"
fi
echo ""

# 步骤3: 备份数据（如果存在）
echo -e "${YELLOW}[3/8] 备份数据...${NC}"
if [ -d "$DEPLOY_DIR/backend" ]; then
    BACKUP_FILE="$HOME/laochen-ai-backup-$(date +%Y%m%d-%H%M%S).tar.gz"
    echo "备份数据库到: $BACKUP_FILE"
    tar -czf "$BACKUP_FILE" -C "$DEPLOY_DIR/backend" laochen_ai.db 2>/dev/null || echo "没有数据库文件需要备份"
    echo -e "${GREEN}✅ 数据备份完成${NC}"
else
    echo "首次部署，跳过备份"
fi
echo ""

# 步骤4: 拉取最新代码
echo -e "${YELLOW}[4/8] 拉取最新代码...${NC}"
if [ -d "$DEPLOY_DIR" ]; then
    echo "更新现有仓库..."
    cd "$DEPLOY_DIR"
    git fetch origin
    git reset --hard origin/$BRANCH
    git pull origin $BRANCH
else
    echo "克隆新仓库..."
    git clone -b $BRANCH $REPO_URL $DEPLOY_DIR
    cd "$DEPLOY_DIR"
fi
echo -e "${GREEN}✅ 代码拉取成功${NC}"
echo ""

# 步骤5: 恢复数据库（如果有备份）
echo -e "${YELLOW}[5/8] 恢复数据库...${NC}"
LATEST_BACKUP=$(ls -t $HOME/laochen-ai-backup-*.tar.gz 2>/dev/null | head -1)
if [ -n "$LATEST_BACKUP" ] && [ -f "$LATEST_BACKUP" ]; then
    echo "发现备份文件: $LATEST_BACKUP"
    read -p "是否恢复数据库？(y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        mkdir -p "$DEPLOY_DIR/backend"
        tar -xzf "$LATEST_BACKUP" -C "$DEPLOY_DIR/backend"
        echo -e "${GREEN}✅ 数据库恢复成功${NC}"
    else
        echo "跳过数据库恢复"
    fi
else
    echo "没有备份文件，跳过恢复"
fi
echo ""

# 步骤6: 配置环境变量
echo -e "${YELLOW}[6/8] 配置环境变量...${NC}"
cat > "$DEPLOY_DIR/.env" << EOF
# 数据库配置
POSTGRES_DB=laochen_ai
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres123

# 后端配置
DATABASE_URL=postgresql://postgres:postgres123@db:5432/laochen_ai
FRONTEND_URL=http://localhost:${PORT}

# 前端配置
NEXT_PUBLIC_API_URL=http://localhost:${BACKEND_PORT}
EOF
echo -e "${GREEN}✅ 环境变量配置完成${NC}"
echo ""

# 步骤7: 构建并启动容器
echo -e "${YELLOW}[7/8] 构建并启动Docker容器...${NC}"
cd "$DEPLOY_DIR"
echo "构建镜像（这可能需要几分钟）..."
docker compose build --no-cache

echo "启动容器..."
docker compose up -d

echo "等待服务启动..."
sleep 10
echo -e "${GREEN}✅ 容器启动成功${NC}"
echo ""

# 步骤8: 验证部署
echo -e "${YELLOW}[8/8] 验证部署状态...${NC}"
echo ""
echo "容器状态:"
docker compose ps
echo ""

# 检查后端健康
echo "检查后端服务..."
if curl -s http://localhost:${BACKEND_PORT}/api/health > /dev/null; then
    echo -e "${GREEN}✅ 后端服务正常${NC}"
else
    echo -e "${RED}⚠️ 后端服务未响应${NC}"
fi

# 检查前端
echo "检查前端服务..."
if curl -s http://localhost:${PORT} > /dev/null; then
    echo -e "${GREEN}✅ 前端服务正常${NC}"
else
    echo -e "${RED}⚠️ 前端服务未响应${NC}"
fi
echo ""

# 完成
echo -e "${GREEN}========================================"
echo "  ✅ 部署完成！"
echo "========================================${NC}"
echo ""
echo "访问地址:"
echo "  前端: http://101.34.79.228:${PORT}"
echo "  后端API: http://101.34.79.228:${BACKEND_PORT}"
echo "  API文档: http://101.34.79.228:${BACKEND_PORT}/docs"
echo ""
echo "常用命令:"
echo "  查看日志: docker compose logs -f"
echo "  重启服务: docker compose restart"
echo "  停止服务: docker compose down"
echo "  查看状态: docker compose ps"
echo ""
echo "⚠️ 注意事项:"
echo "  1. 确保防火墙已开放端口 ${PORT} 和 ${BACKEND_PORT}"
echo "  2. 如需配置域名，请修改Nginx配置"
echo "  3. 数据库备份位于: $HOME/laochen-ai-backup-*.tar.gz"
echo ""
