# 🚀 快速部署参考卡

---

## 📋 部署流程总览

```
本地修改代码 → 推送到GitHub → 服务器拉取 → Docker部署 → 访问服务
```

---

## 1️⃣ 本地推送到 GitHub

### Windows 一键上传（推荐PowerShell版）

**方法A: PowerShell版（支持中文，推荐）**
```powershell
右键点击 deploy-to-github.ps1 -> "使用PowerShell运行"
```

**方法B: CMD批处理版（纯英文界面）**
```batch
双击运行: deploy-to-github.bat
```

### 手动提交
```bash
git add .
git commit -m "更新说明"
git push origin main
```

> 💡 **首次推送需要GitHub Token**  
> 访问 https://github.com/settings/tokens 生成Token（勾选repo权限）  
> 推送时使用Token作为密码

---

## 2️⃣ 服务器部署

### SSH 连接
```bash
ssh ubuntu@101.34.79.228
```

### 首次部署（清理旧项目）
```bash
# 复制并运行以下整段代码
cd ~
[ -d ~/OfficeAgent-LandingPage ] && cd ~/OfficeAgent-LandingPage && docker compose down --volumes --rmi all && cd ~ && rm -rf ~/OfficeAgent-LandingPage
docker container prune -f && docker image prune -a -f && docker volume prune -f
rm -f ~/deploy-server.sh ~/diagnose.sh
echo "✓ 清理完成！"
```

### 一键部署
```bash
# 下载部署脚本
curl -o ~/deploy-server.sh https://raw.githubusercontent.com/LCCG-Agent/laochen-ai.com/main/deploy-server.sh

# 添加执行权限
chmod +x ~/deploy-server.sh

# 运行部署
./deploy-server.sh
```

---

## 3️⃣ 访问服务

| 服务 | 地址 |
|------|------|
| 前端 | http://101.34.79.228:3000 |
| 后端API | http://101.34.79.228:8000 |
| API文档 | http://101.34.79.228:8000/docs |

---

## 🔧 常用命令

### 查看状态
```bash
cd ~/laochen-ai.com
docker compose ps
```

### 查看日志
```bash
docker compose logs -f
docker compose logs -f backend
docker compose logs -f frontend
```

### 重启服务
```bash
docker compose restart
```

### 更新部署
```bash
cd ~/laochen-ai.com
git pull origin main
docker compose down
docker compose build --no-cache
docker compose up -d
```

---

## 🔥 防火墙（必须配置！）

### 腾讯云控制台
https://console.cloud.tencent.com/lighthouse

开放端口：
- ✅ 3000 (前端)
- ✅ 8000 (后端)

---

## ⚠️ 常见问题

### 端口被占用
```bash
sudo netstat -tulpn | grep 8000
sudo kill -9 <PID>
```

### GitHub Token 配置
```
访问: https://github.com/settings/tokens
生成新Token → 勾选 repo 权限

推送时输入:
Username: LCCG-Agent
Password: [粘贴Token]
```

### 服务未响应
```bash
# 重启所有服务
docker compose restart

# 查看错误日志
docker compose logs --tail=50
```

---

## 📞 需要详细文档？

- 完整部署指南: `DEPLOYMENT.md`
- 清理服务器: `清理服务器指南.md`
- 服务器信息: `服务器信息移交文档.md`

---

**服务器IP**: 101.34.79.228  
**GitHub**: https://github.com/LCCG-Agent/laochen-ai.com  
**腾讯云**: https://console.cloud.tencent.com/lighthouse
