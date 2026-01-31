# 部署脚本测试指南

## 🧪 测试本地部署脚本

### 测试PowerShell版本（推荐）

1. **找到文件**：`deploy-to-github.ps1`

2. **右键点击文件** → 选择 "使用PowerShell运行"

3. **如果提示执行策略错误**：
   ```powershell
   # 以管理员身份打开PowerShell，运行：
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

4. **预期输出**：
   - ✅ 显示当前分支
   - ✅ 显示文件变更
   - ✅ 提示输入提交信息
   - ✅ 推送到GitHub

### 测试批处理版本

1. **双击运行**：`deploy-to-github.bat`

2. **预期输出**（英文界面）：
   ```
   ========================================
     GitHub Deploy Tool
     Version: V2.0
   ========================================
   
   [1/6] Checking current branch...
   Current branch: main
   
   [2/6] Checking file changes...
   ...
   ```

3. **如果看到乱码**：使用PowerShell版本

---

## 🖥️ 测试服务器部署

### 方法1: 直接在服务器测试

1. **SSH连接**：
   ```bash
   ssh ubuntu@101.34.79.228
   ```

2. **下载脚本**：
   ```bash
   curl -o ~/test-deploy.sh https://raw.githubusercontent.com/LCCG-Agent/laochen-ai.com/main/deploy-server.sh
   ```

3. **添加执行权限**：
   ```bash
   chmod +x ~/test-deploy.sh
   ```

4. **查看脚本内容**（验证下载是否正确）：
   ```bash
   head -20 ~/test-deploy.sh
   ```

5. **运行脚本**：
   ```bash
   ./test-deploy.sh
   ```

### 方法2: 先清理再部署

1. **清理旧项目**：
   ```bash
   ssh ubuntu@101.34.79.228
   
   # 运行清理脚本
   cd ~
   if [ -d ~/OfficeAgent-LandingPage ]; then
       cd ~/OfficeAgent-LandingPage
       docker compose down --volumes --rmi all
       cd ~ && rm -rf ~/OfficeAgent-LandingPage
   fi
   docker container prune -f
   docker image prune -a -f
   docker volume prune -f
   ```

2. **部署新项目**：
   ```bash
   curl -o ~/deploy-server.sh https://raw.githubusercontent.com/LCCG-Agent/laochen-ai.com/main/deploy-server.sh
   chmod +x ~/deploy-server.sh
   ./deploy-server.sh
   ```

---

## ✅ 验证部署结果

### 检查服务器状态

1. **查看容器**：
   ```bash
   docker compose ps
   ```
   
   预期输出：3个容器运行中
   - `db` (PostgreSQL)
   - `backend` (FastAPI)
   - `frontend` (Next.js)

2. **查看日志**：
   ```bash
   docker compose logs --tail=20
   ```

3. **测试后端API**：
   ```bash
   curl http://localhost:8000/docs
   ```
   
   预期：返回HTML内容（Swagger文档）

4. **测试前端**：
   ```bash
   curl http://localhost:3000
   ```
   
   预期：返回HTML内容

### 检查防火墙

1. **登录腾讯云控制台**：
   https://console.cloud.tencent.com/lighthouse

2. **确认开放端口**：
   - ✅ 3000 (前端)
   - ✅ 8000 (后端)

### 浏览器测试

1. **访问前端**：http://101.34.79.228:3000
2. **访问后端API文档**：http://101.34.79.228:8000/docs
3. **测试API接口**：在Swagger文档中测试各个接口

---

## ⚠️ 常见测试问题

### 问题1: PowerShell脚本无法运行

**错误信息**：
```
无法加载文件，因为在此系统上禁止运行脚本
```

**解决方法**：
```powershell
# 以管理员身份运行PowerShell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# 或者一次性允许
PowerShell -ExecutionPolicy Bypass -File deploy-to-github.ps1
```

### 问题2: 批处理脚本显示乱码

**原因**：Windows命令提示符编码问题

**解决方法**：使用PowerShell版本（`.ps1`）

### 问题3: Git推送需要用户名密码

**原因**：首次推送需要认证

**解决方法**：
1. 访问 https://github.com/settings/tokens
2. 生成新Token（勾选repo权限）
3. 推送时：
   - Username: `LCCG-Agent`
   - Password: `[粘贴你的Token]`

### 问题4: 服务器脚本下载失败

**错误信息**：
```
curl: (6) Could not resolve host: raw.githubusercontent.com
```

**解决方法**：
```bash
# 方法1: 使用代理或等待网络恢复

# 方法2: 手动上传脚本
# 在本地电脑运行：
scp deploy-server.sh ubuntu@101.34.79.228:~/
```

### 问题5: Docker容器启动失败

**检查步骤**：

1. 查看详细日志：
   ```bash
   docker compose logs backend
   docker compose logs frontend
   docker compose logs db
   ```

2. 检查端口占用：
   ```bash
   sudo netstat -tulpn | grep -E '3000|8000|5432'
   ```

3. 重启服务：
   ```bash
   docker compose down
   docker compose up -d
   ```

---

## 📊 测试检查清单

### 本地测试
- [ ] deploy-to-github.ps1 能正常运行
- [ ] 或 deploy-to-github.bat 能正常运行
- [ ] Git推送成功
- [ ] GitHub仓库可以看到最新提交

### 服务器测试
- [ ] SSH连接成功
- [ ] 清理脚本运行成功
- [ ] 部署脚本下载成功
- [ ] 部署脚本运行成功
- [ ] Docker容器全部启动
- [ ] 后端API可访问（localhost:8000）
- [ ] 前端页面可访问（localhost:3000）

### 防火墙测试
- [ ] 腾讯云控制台已开放3000端口
- [ ] 腾讯云控制台已开放8000端口
- [ ] 外网可访问前端（101.34.79.228:3000）
- [ ] 外网可访问后端（101.34.79.228:8000）

### 功能测试
- [ ] 前端页面正常显示
- [ ] 导航菜单正常工作
- [ ] API文档可访问
- [ ] 数据库连接正常
- [ ] 各个模块页面正常加载

---

## 📞 遇到问题？

1. **查看详细文档**：`DEPLOYMENT.md`
2. **查看快速参考**：`QUICK-START.md`
3. **查看清理指南**：`清理服务器指南.md`

---

**最后更新**: 2026-02-01
