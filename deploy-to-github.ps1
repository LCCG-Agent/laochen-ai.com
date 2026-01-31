# =====================================================
# 老陈AI工坊 - GitHub部署脚本 (PowerShell版本)
# 版本: V2.0
# 使用方法: 右键点击 -> "使用PowerShell运行"
# =====================================================

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  老陈AI工坊 - GitHub部署工具" -ForegroundColor Cyan
Write-Host "  版本: V2.0" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 检查是否在Git仓库中
$gitStatus = git status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "[错误] 当前目录不是Git仓库！" -ForegroundColor Red
    Write-Host "请在项目根目录运行此脚本" -ForegroundColor Yellow
    Read-Host "按Enter键退出"
    exit 1
}

Write-Host "[1/6] 检查当前分支..." -ForegroundColor Yellow
$branch = git branch --show-current
Write-Host "当前分支: $branch" -ForegroundColor Green
Write-Host ""

Write-Host "[2/6] 查看文件变更..." -ForegroundColor Yellow
git status -s
Write-Host ""

# 询问是否继续
$confirm = Read-Host "是否继续提交这些更改？(Y/N)"
if ($confirm -ne "Y" -and $confirm -ne "y") {
    Write-Host "已取消操作" -ForegroundColor Yellow
    Read-Host "按Enter键退出"
    exit 0
}
Write-Host ""

Write-Host "[3/6] 添加所有变更到暂存区..." -ForegroundColor Yellow
git add .
if ($LASTEXITCODE -ne 0) {
    Write-Host "[错误] 添加文件失败！" -ForegroundColor Red
    Read-Host "按Enter键退出"
    exit 1
}
Write-Host "✓ 文件添加成功" -ForegroundColor Green
Write-Host ""

Write-Host "[4/6] 输入提交信息..." -ForegroundColor Yellow
$commitMsg = Read-Host "请输入提交信息（留空则使用默认信息）"
if ([string]::IsNullOrWhiteSpace($commitMsg)) {
    $commitMsg = "Update: 部署更新 $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
}
Write-Host ""

Write-Host "[5/6] 提交代码..." -ForegroundColor Yellow
git commit -m "$commitMsg"
if ($LASTEXITCODE -ne 0) {
    Write-Host "[警告] 提交失败，可能没有变更或遇到错误" -ForegroundColor Yellow
    Write-Host ""
    git status
    Read-Host "按Enter键退出"
    exit 1
}
Write-Host "✓ 代码提交成功" -ForegroundColor Green
Write-Host ""

Write-Host "[6/6] 推送到GitHub远程仓库..." -ForegroundColor Yellow
Write-Host "正在推送到 origin/$branch ..." -ForegroundColor Cyan
git push origin $branch
if ($LASTEXITCODE -ne 0) {
    Write-Host "[错误] 推送失败！" -ForegroundColor Red
    Write-Host ""
    Write-Host "可能的原因：" -ForegroundColor Yellow
    Write-Host "  1. 网络连接问题"
    Write-Host "  2. 没有推送权限"
    Write-Host "  3. 需要配置GitHub Personal Access Token"
    Write-Host ""
    Write-Host "如需配置Token:" -ForegroundColor Cyan
    Write-Host "  1. 访问 https://github.com/settings/tokens"
    Write-Host "  2. 生成新Token（勾选repo权限）"
    Write-Host "  3. 使用Token作为密码进行推送"
    Read-Host "按Enter键退出"
    exit 1
}
Write-Host ""

Write-Host "========================================" -ForegroundColor Green
Write-Host "  ✓ 部署完成！" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "代码已成功推送到GitHub" -ForegroundColor Green
Write-Host "分支: $branch" -ForegroundColor Cyan
Write-Host "提交信息: $commitMsg" -ForegroundColor Cyan
Write-Host ""
Write-Host "下一步：" -ForegroundColor Yellow
Write-Host "  1. SSH登录到服务器：ssh ubuntu@101.34.79.228"
Write-Host "  2. 运行部署脚本：./deploy-server.sh"
Write-Host ""
Write-Host "或者 在服务器上运行一键部署命令：" -ForegroundColor Yellow
Write-Host "  curl -o ~/deploy-server.sh https://raw.githubusercontent.com/LCCG-Agent/laochen-ai.com/main/deploy-server.sh" -ForegroundColor Gray
Write-Host "  chmod +x ~/deploy-server.sh" -ForegroundColor Gray
Write-Host "  ./deploy-server.sh" -ForegroundColor Gray
Write-Host ""
Read-Host "按Enter键退出"
