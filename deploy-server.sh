#!/bin/bash

#####################################################
# 老陈AI工坊 - 服务器端一键部署脚本
# 适用于腾讯云轻量应用服务器 (Ubuntu 22.04)
# 版本: V2.0
#####################################################

set -e  # 遇到错误立即退出

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 配置变量
GITHUB_REPO="https://github.com/LCCG-Agent/laochen-ai.com.git"
PROJECT_DIR="/home/ubuntu/laochen-ai.com"
BRANCH="main"
FRONTEND_PORT=80
BACKEND_PORT=8000
DB_PORT=5432

# 打印带颜色的消息
print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 打印标题
echo "========================================"
echo "  老陈AI工坊 - 服务器部署脚本"
echo "  版本: V2.0"
echo "========================================"
echo ""

# 1. 检查并安装 Docker
print_info "检查 Docker 安装状态..."
if ! command -v docker &> /dev/null; then
    print_warning "Docker 未安装，开始安装..."
    
    # 更新软件包索引
    sudo apt-get update
    
    # 安装必要的依赖
    sudo apt-get install -y \
        ca-certificates \
        curl \
        gnupg \
        lsb-release
    
    # 添加 Docker 官方 GPG key（使用国内镜像）
    print_info "使用国内镜像下载 Docker GPG 密钥..."
    sudo mkdir -p /etc/apt/keyrings
    
    # 尝试多个镜像源下载 GPG key
    if curl -fsSL https://mirrors.tencent.com/docker-ce/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg; then
        print_success "腾讯云镜像 GPG 密钥下载成功"
        DOCKER_MIRROR="https://mirrors.tencent.com/docker-ce/linux/ubuntu"
    elif curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg; then
        print_success "阿里云镜像 GPG 密钥下载成功"
        DOCKER_MIRROR="https://mirrors.aliyun.com/docker-ce/linux/ubuntu"
    elif curl -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg; then
        print_success "中科大镜像 GPG 密钥下载成功"
        DOCKER_MIRROR="https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu"
    else
        print_error "所有镜像源均无法访问，请检查网络连接"
        exit 1
    fi
    
    # 设置 Docker 仓库（使用国内镜像）
    print_info "配置 Docker 仓库（国内镜像）..."
    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] $DOCKER_MIRROR \
      $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    
    # 安装 Docker Engine
    print_info "安装 Docker Engine..."
    sudo apt-get update
    sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    
    # 配置 Docker 镜像加速器（国内镜像）
    print_info "配置 Docker 镜像加速器..."
    sudo mkdir -p /etc/docker
    sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": [
    "https://mirror.ccs.tencentyun.com",
    "https://docker.mirrors.ustc.edu.cn",
    "https://hub-mirror.c.163.com"
  ]
}
EOF
    
    # 重启 Docker 服务
    sudo systemctl daemon-reload
    sudo systemctl restart docker
    
    # 将当前用户添加到 docker 组
    sudo usermod -aG docker $USER
    
    print_success "Docker 安装完成！"
    print_warning "请注销并重新登录以使 Docker 组权限生效，然后重新运行此脚本。"
    print_info "提示：退出命令 'exit'，然后重新连接 SSH"
    exit 0
else
    print_success "Docker 已安装"
fi

# 2. 检查 Git
print_info "检查 Git 安装状态..."
if ! command -v git &> /dev/null; then
    print_warning "Git 未安装，开始安装..."
    sudo apt-get update
    sudo apt-get install -y git
    print_success "Git 安装完成！"
else
    print_success "Git 已安装"
fi

# 2.5 配置 Git（凭据存储 + 大文件传输优化）
print_info "配置 Git..."
git config --global credential.helper store
git config --global http.postBuffer 524288000
git config --global http.lowSpeedLimit 0
git config --global http.lowSpeedTime 999999
print_success "Git 配置完成（已优化大文件传输）"

# 3. 克隆或更新代码仓库
if [ -d "$PROJECT_DIR" ]; then
    print_info "项目目录已存在，拉取最新代码..."
    cd "$PROJECT_DIR"
    
    # 检查是否有未保存的更改
    if ! git diff-index --quiet HEAD -- 2>/dev/null; then
        print_warning "检测到本地修改，暂存更改..."
        git stash
    fi
    
    # 尝试拉取最新代码
    print_info "从远程仓库拉取最新代码..."
    if git fetch origin && git reset --hard origin/$BRANCH && git pull origin $BRANCH; then
        print_success "代码更新完成"
    else
        print_error "代码更新失败！"
        echo ""
        print_warning "可能的原因："
        echo "  1. GitHub 访问权限问题（需要 Personal Access Token）"
        echo "  2. 网络连接问题"
        echo ""
        print_info "解决方案："
        echo "  如果是首次部署或权限问题，请按照以下步骤操作："
        echo ""
        echo "  步骤1：创建 GitHub Personal Access Token"
        echo "    1. 访问 https://github.com/settings/tokens"
        echo "    2. 点击 'Generate new token (classic)'"
        echo "    3. 勾选 'repo' 权限"
        echo "    4. 生成并复制 Token"
        echo ""
        echo "  步骤2：配置 Git 凭据"
        echo "    在下次 Git 操作时："
        echo "    - Username: LCCG-Agent"
        echo "    - Password: 粘贴您的 Token（不是 GitHub 密码！）"
        echo ""
        echo "  步骤3：重新运行此脚本"
        echo "    ./deploy-server.sh"
        echo ""
        exit 1
    fi
else
    print_info "克隆 GitHub 仓库..."
    echo ""
    print_warning "⚠️  重要提示："
    echo "  GitHub 不再支持使用密码进行身份验证"
    echo "  您需要使用 Personal Access Token (PAT)"
    echo ""
    print_info "准备工作："
    echo "  1. 确保您已创建 GitHub Personal Access Token"
    echo "  2. 访问 https://github.com/settings/tokens 创建（如果还没有）"
    echo "  3. Token 需要 'repo' 权限"
    echo ""
    print_info "身份验证说明："
    echo "  当提示输入用户名和密码时："
    echo "  - Username for 'https://github.com': LCCG-Agent"
    echo "  - Password for 'https://LCCG-Agent@github.com': [粘贴您的Token]"
    echo ""
    read -p "按 Enter 继续克隆仓库..." dummy
    
    if git clone -b $BRANCH $GITHUB_REPO $PROJECT_DIR; then
        cd "$PROJECT_DIR"
        print_success "代码克隆完成"
        print_success "您的凭据已保存，下次将自动使用"
    else
        print_error "代码克隆失败！"
        echo ""
        print_warning "请检查："
        echo "  1. Token 是否有效"
        echo "  2. Token 是否有 'repo' 权限"
        echo "  3. 网络连接是否正常"
        echo ""
        exit 1
    fi
fi

# 4. 创建环境变量文件
print_info "创建环境变量文件..."
if [ ! -f "$PROJECT_DIR/.env" ]; then
    cat > "$PROJECT_DIR/.env" << EOF
# 数据库配置
POSTGRES_DB=laochen_ai
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres123

# 后端配置
DATABASE_URL=postgresql://postgres:postgres123@db:5432/laochen_ai
FRONTEND_URL=http://101.34.79.228

# 前端配置
NEXT_PUBLIC_API_URL=http://101.34.79.228:${BACKEND_PORT}
EOF
    print_success "环境变量文件已创建"
else
    print_info "环境变量文件已存在，跳过创建"
fi

# 5. 停止并删除旧容器
print_info "停止并删除旧容器..."
cd "$PROJECT_DIR"
docker compose down --volumes || true
print_success "旧容器已清理"

# 6. 清理旧镜像（可选，节省空间）
print_info "清理未使用的 Docker 镜像..."
docker image prune -f || true

# 7. 构建新镜像
print_info "构建 Docker 镜像（这可能需要几分钟）..."
docker compose build --no-cache
print_success "镜像构建完成"

# 8. 启动容器
print_info "启动容器..."
docker compose up -d
print_success "容器已启动"

# 9. 等待服务启动
print_info "等待服务启动..."
sleep 15

# 10. 初始化数据库
print_info "初始化数据库..."
docker compose exec -T backend python init_db.py || print_warning "数据库初始化失败，可能已经初始化过"

# 11. 检查服务状态
print_info "检查服务状态..."
echo ""
echo "容器运行状态："
docker compose ps
echo ""

# 检查后端服务
print_info "检查后端服务..."
sleep 5
if curl -s http://localhost:${BACKEND_PORT}/docs > /dev/null 2>&1; then
    print_success "后端服务运行正常！"
else
    print_warning "后端服务未响应，查看日志："
    docker compose logs backend --tail=20
fi

# 检查前端服务
print_info "检查前端服务..."
if curl -s http://localhost:${FRONTEND_PORT} > /dev/null 2>&1; then
    print_success "前端服务运行正常！"
else
    print_warning "前端服务未响应，查看日志："
    docker compose logs frontend --tail=20
fi

# 检查数据库
print_info "检查数据库服务..."
if docker compose exec -T db pg_isready -U postgres > /dev/null 2>&1; then
    print_success "数据库服务运行正常！"
else
    print_warning "数据库服务未响应"
fi

echo ""
echo "========================================"
echo "  🎉 部署完成！"
echo "========================================"
echo ""
echo "📌 服务信息："
echo "   - 前端地址：http://101.34.79.228 (端口80，用于备案)"
echo "   - 后端API：http://101.34.79.228:${BACKEND_PORT}"
echo "   - API文档：http://101.34.79.228:${BACKEND_PORT}/docs"
echo "   - 数据库端口：${DB_PORT} (仅内部访问)"
echo ""
echo "📌 常用命令："
echo "   - 查看所有日志：docker compose logs -f"
echo "   - 查看后端日志：docker compose logs -f backend"
echo "   - 查看前端日志：docker compose logs -f frontend"
echo "   - 重启服务：docker compose restart"
echo "   - 停止服务：docker compose down"
echo "   - 查看状态：docker compose ps"
echo ""
echo "📌 下一步："
echo "   1. 在腾讯云控制台开放端口："
echo "      - 80 (HTTP，必须，用于备案)"
echo "      - 443 (HTTPS，建议，用于SSL)"
echo "      - ${BACKEND_PORT} (后端API)"
echo "   2. 访问前端测试：http://101.34.79.228"
echo "   3. 如遇问题，查看日志：docker compose logs -f"
echo ""
print_warning "⚠️ 备案重要提示："
echo "   - ✅ 已配置80端口（HTTP标准端口）"
echo "   - 🔒 建议配置443端口和SSL证书（HTTPS）"
echo "   - 📝 确保网站内容符合备案要求"
echo "   - 🏷️  在网站底部添加ICP备案号"
echo "   - 📞 备案期间网站必须可访问"
echo ""
