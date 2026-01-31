# 老陈AI工坊 - 部署指南

> **项目**: laochen-AI.com  
> **服务器**: 腾讯云轻量应用服务器 (Ubuntu 22.04)  
> **版本**: V2.0

---

## 🚀 快速开始

### 前置要求
- ✅ GitHub 仓库已创建：https://github.com/LCCG-Agent/laochen-ai.com.git
- ✅ 服务器 SSH 访问权限
- ✅ GitHub Personal Access Token（用于推送代码）

---

## 📦 本地部署到 GitHub

### 方法一：使用一键脚本（推荐）

在项目根目录，双击运行：
```
deploy-to-github.bat
```

脚本会自动：
1. ✅ 检查Git状态
2. ✅ 显示文件变更
3. ✅ 添加所有变更
4. ✅ 提交代码
5. ✅ 推送到GitHub

### 方法二：手动提交

```bash
# 1. 查看变更
git status

# 2. 添加所有文件
git add .

# 3. 提交
git commit -m "feat: 更新描述"

# 4. 推送到GitHub
git push origin main
```

### 首次推送配置

如果是首次推送，需要配置 GitHub Token：

1. **创建 Personal Access Token**
   - 访问：https://github.com/settings/tokens
   - 点击 "Generate new token (classic)"
   - 勾选 `repo` 权限
   - 生成并复制 Token

2. **推送时使用 Token**
   ```
   Username: LCCG-Agent
   Password: [粘贴你的Token]
   ```

---

## 🖥️ 服务器部署

### 步骤 1: 清理旧项目（首次部署必须）

SSH 连接到服务器：
```bash
ssh ubuntu@101.34.79.228
```

运行清理脚本（复制整段执行）：
```bash
#!/bin/bash
echo "开始清理旧项目..."

# 停止并删除 OfficeAgent 容器
if [ -d ~/OfficeAgent-LandingPage ]; then
    cd ~/OfficeAgent-LandingPage
    docker compose down --volumes --rmi all 2>/dev/null
    cd ~
    rm -rf ~/OfficeAgent-LandingPage
    echo "✓ OfficeAgent 已清理"
fi

# 清理 Docker 资源
docker container prune -f
docker image prune -a -f
docker volume prune -f

# 删除旧脚本
rm -f ~/deploy-server.sh ~/diagnose.sh

echo "✓ 清理完成！"
docker system df
```

### 步骤 2: 上传部署脚本

**方法A: 在本地电脑运行（推荐）**
```bash
scp deploy-server.sh ubuntu@101.34.79.228:~/
```

**方法B: 在服务器上直接下载**
```bash
curl -o ~/deploy-server.sh https://raw.githubusercontent.com/LCCG-Agent/laochen-ai.com/main/deploy-server.sh
chmod +x ~/deploy-server.sh
```

### 步骤 3: 运行部署脚本

在服务器上运行：
```bash
cd ~
chmod +x deploy-server.sh
./deploy-server.sh
```

脚本会自动：
1. ✅ 检查并安装 Docker（如未安装）
2. ✅ 配置 Docker 国内镜像源
3. ✅ 克隆 GitHub 仓库
4. ✅ 创建环境变量文件
5. ✅ 构建 Docker 镜像
6. ✅ 启动所有服务（数据库、后端、前端）
7. ✅ 初始化数据库
8. ✅ 验证服务状态

### 首次运行注意事项

如果是首次从 GitHub 克隆代码，需要输入 Token：
```
Username for 'https://github.com': LCCG-Agent
Password for 'https://LCCG-Agent@github.com': [粘贴你的Token]
```

Token 会被保存，下次自动使用。

---

## 🌐 访问服务

部署完成后，可以通过以下地址访问：

| 服务 | 地址 | 说明 |
|------|------|------|
| **前端** | http://101.34.79.228:3000 | 用户界面 |
| **后端API** | http://101.34.79.228:8000 | API接口 |
| **API文档** | http://101.34.79.228:8000/docs | Swagger文档 |
| **数据库** | localhost:5432 | PostgreSQL (仅服务器内部) |

---

## 🔧 服务器管理命令

### 查看服务状态
```bash
cd ~/laochen-ai.com
docker compose ps
```

### 查看日志
```bash
# 所有服务日志
docker compose logs -f

# 后端日志
docker compose logs -f backend

# 前端日志
docker compose logs -f frontend

# 数据库日志
docker compose logs -f db
```

### 重启服务
```bash
# 重启所有服务
docker compose restart

# 重启单个服务
docker compose restart backend
docker compose restart frontend
```

### 停止服务
```bash
docker compose down
```

### 完全重新部署
```bash
cd ~/laochen-ai.com
docker compose down --volumes
git pull origin main
docker compose build --no-cache
docker compose up -d
```

---

## 🔥 防火墙配置

### 腾讯云控制台配置（必须！）

1. 登录腾讯云控制台：https://console.cloud.tencent.com/lighthouse
2. 选择你的服务器实例
3. 点击「防火墙」选项卡
4. 添加以下规则：

| 端口 | 协议 | 说明 |
|------|------|------|
| 22 | TCP | SSH（保留） |
| 80 | TCP | HTTP（可选） |
| 443 | TCP | HTTPS（可选） |
| 3000 | TCP | **前端服务（必须）** |
| 8000 | TCP | **后端API（必须）** |

### 服务器系统防火墙
```bash
# 查看状态
sudo ufw status

# 如果已启用，开放端口
sudo ufw allow 3000/tcp
sudo ufw allow 8000/tcp
```

---

## 🔄 日常更新流程

### 1. 本地修改代码后

运行 `deploy-to-github.bat` 推送到 GitHub

### 2. 服务器更新

SSH 连接到服务器，然后：
```bash
cd ~/laochen-ai.com
git pull origin main
docker compose down
docker compose build --no-cache
docker compose up -d
```

或者直接重新运行部署脚本：
```bash
./deploy-server.sh
```

---

## ⚠️ 常见问题

### 问题 1: 端口被占用
```bash
# 查看端口占用
sudo netstat -tulpn | grep -E '3000|8000'

# 杀死占用进程
sudo kill -9 <PID>
```

### 问题 2: Docker 镜像拉取失败

原因：国内网络访问 Docker Hub 较慢

解决：脚本已自动配置腾讯云镜像源，如仍失败可手动配置：
```bash
sudo tee /etc/docker/daemon.json <<EOF
{
  "registry-mirrors": [
    "https://mirror.ccs.tencentyun.com",
    "https://docker.mirrors.ustc.edu.cn"
  ]
}
EOF

sudo systemctl restart docker
```

### 问题 3: 前端构建失败

可能原因：Node.js 版本不兼容或依赖安装失败

解决：
```bash
cd ~/laochen-ai.com/frontend
npm cache clean --force
npm install
npm run build
```

### 问题 4: 数据库连接失败

检查数据库容器状态：
```bash
docker compose ps db
docker compose logs db
```

重启数据库：
```bash
docker compose restart db
```

### 问题 5: GitHub 克隆失败

错误信息：`Authentication failed`

解决：
1. 确认 Token 有 `repo` 权限
2. Token 未过期
3. 重新输入 Token

---

## 📊 监控和维护

### 查看系统资源
```bash
# CPU和内存
htop

# 磁盘空间
df -h

# Docker 资源占用
docker system df
```

### 清理 Docker 资源
```bash
# 清理未使用的镜像
docker image prune -a -f

# 清理未使用的容器
docker container prune -f

# 清理未使用的数据卷
docker volume prune -f
```

### 数据库备份
```bash
# 备份
docker compose exec -T db pg_dump -U postgres laochen_ai > backup-$(date +%Y%m%d).sql

# 下载到本地（在本地电脑运行）
scp ubuntu@101.34.79.228:~/backup-*.sql ./
```

---

## 🎯 最佳实践

1. **定期备份**
   - 每周备份一次数据库
   - 保存重要的备份文件到本地

2. **监控日志**
   - 定期查看容器日志
   - 关注错误和警告信息

3. **安全更新**
   - 定期更新系统：`sudo apt update && sudo apt upgrade`
   - 更新 Docker 镜像

4. **版本控制**
   - 提交代码时写清楚提交信息
   - 重大更新前打 Git tag

5. **域名和 HTTPS（可选）**
   - 配置域名解析
   - 使用 Nginx 反向代理
   - 申请 Let's Encrypt SSL 证书

---

## 📞 技术支持

### 文档位置
- ✅ 本地部署脚本：`deploy-to-github.bat`
- ✅ 服务器部署脚本：`deploy-server.sh`
- ✅ 清理指南：`清理服务器指南.md`（内部文档）
- ✅ 服务器信息：`服务器信息移交文档.md`（内部文档）

### 有用的链接
- GitHub 仓库：https://github.com/LCCG-Agent/laochen-ai.com
- 腾讯云控制台：https://console.cloud.tencent.com/lighthouse
- GitHub Token 管理：https://github.com/settings/tokens

---

**最后更新**: 2026-02-01  
**维护者**: 老陈AI工坊
