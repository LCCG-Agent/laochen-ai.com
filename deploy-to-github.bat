@echo off
chcp 65001 >nul
echo ========================================
echo   laochen-AI 一键上传到 GitHub
echo   版本: V1.0
echo ========================================
echo.

REM 设置颜色（使用PowerShell）
powershell -Command "Write-Host '正在检查项目状态...' -ForegroundColor Yellow"
echo.

REM 检查是否在正确的目录
if not exist "frontend" (
    powershell -Command "Write-Host '错误: 未找到 frontend 目录，请确保在项目根目录运行此脚本！' -ForegroundColor Red"
    pause
    exit /b 1
)

if not exist "backend" (
    powershell -Command "Write-Host '错误: 未找到 backend 目录，请确保在项目根目录运行此脚本！' -ForegroundColor Red"
    pause
    exit /b 1
)

REM 显示当前Git状态
powershell -Command "Write-Host '[1/5] 检查Git状态...' -ForegroundColor Cyan"
git status
echo.

REM 询问是否继续
powershell -Command "Write-Host '请确认以上文件修改无误' -ForegroundColor Yellow"
set /p confirm="是否继续提交到GitHub？(Y/N): "
if /i not "%confirm%"=="Y" (
    echo 操作已取消
    pause
    exit /b 0
)
echo.

REM 添加所有文件
powershell -Command "Write-Host '[2/5] 添加文件到Git...' -ForegroundColor Cyan"
git add .
if errorlevel 1 (
    powershell -Command "Write-Host '错误: Git add 失败' -ForegroundColor Red"
    pause
    exit /b 1
)
powershell -Command "Write-Host '✓ 文件添加成功' -ForegroundColor Green"
echo.

REM 请求提交信息
set /p commit_msg="请输入提交信息（默认: 更新项目代码）: "
if "%commit_msg%"=="" set commit_msg=更新项目代码
echo.

REM 提交
powershell -Command "Write-Host '[3/5] 提交代码...' -ForegroundColor Cyan"
git commit -m "%commit_msg%"
if errorlevel 1 (
    powershell -Command "Write-Host '提示: 没有新的修改需要提交，或提交失败' -ForegroundColor Yellow"
    echo.
    set /p force_push="是否强制推送到GitHub？(Y/N): "
    if /i not "%force_push%"=="Y" (
        echo 操作已取消
        pause
        exit /b 0
    )
) else (
    powershell -Command "Write-Host '✓ 代码提交成功' -ForegroundColor Green"
)
echo.

REM 推送到GitHub
powershell -Command "Write-Host '[4/5] 推送到GitHub仓库...' -ForegroundColor Cyan"
git push origin main
if errorlevel 1 (
    powershell -Command "Write-Host '尝试推送到 master 分支...' -ForegroundColor Yellow"
    git push origin master
    if errorlevel 1 (
        powershell -Command "Write-Host '错误: 推送失败，请检查网络连接和GitHub权限' -ForegroundColor Red"
        pause
        exit /b 1
    )
)
powershell -Command "Write-Host '✓ 推送成功' -ForegroundColor Green"
echo.

REM 显示远程仓库信息
powershell -Command "Write-Host '[5/5] 显示仓库信息...' -ForegroundColor Cyan"
git remote -v
echo.

REM 完成
powershell -Command "Write-Host '========================================' -ForegroundColor Green"
powershell -Command "Write-Host '  ✓ 代码已成功上传到 GitHub！' -ForegroundColor Green"
powershell -Command "Write-Host '========================================' -ForegroundColor Green"
echo.
powershell -Command "Write-Host '下一步操作提示：' -ForegroundColor Yellow"
echo   1. 登录到服务器: ssh ubuntu@101.34.79.228
echo   2. 运行一键部署脚本: bash ~/deploy-server.sh
echo.
powershell -Command "Write-Host '⚠️ 注意：服务器部署脚本会自动从GitHub拉取最新代码' -ForegroundColor Yellow"
echo.
pause
