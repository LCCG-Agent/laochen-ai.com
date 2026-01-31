@echo off
REM =====================================================
REM laochen-AI - GitHub Deploy Script
REM Version: V2.0
REM =====================================================

echo ========================================
echo   GitHub Deploy Tool
echo   Version: V2.0
echo ========================================
echo.

REM Check if in Git repository
git status >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Not a Git repository!
    echo Please run this script in project root directory
    pause
    exit /b 1
)

echo [1/6] Checking current branch...
for /f "tokens=*" %%i in ('git branch --show-current') do set CURRENT_BRANCH=%%i
echo Current branch: %CURRENT_BRANCH%
echo.

echo [2/6] Checking file changes...
git status -s
echo.

REM Ask for confirmation
set /p CONFIRM="Continue to commit these changes? (Y/N): "
if /i not "%CONFIRM%"=="Y" (
    echo Operation cancelled
    pause
    exit /b 0
)
echo.

echo [3/6] Adding all changes...
git add .
if errorlevel 1 (
    echo [ERROR] Failed to add files!
    pause
    exit /b 1
)
echo [OK] Files added successfully
echo.

echo [4/6] Enter commit message...
set /p COMMIT_MSG="Commit message (leave empty for default): "
if "%COMMIT_MSG%"=="" (
    set COMMIT_MSG=Update: Deploy %date% %time%
)
echo.

echo [5/6] Committing code...
git commit -m "%COMMIT_MSG%"
if errorlevel 1 (
    echo [WARNING] Commit failed, maybe no changes
    echo.
    git status
    pause
    exit /b 1
)
echo [OK] Code committed successfully
echo.

echo [6/6] Pushing to GitHub...
echo Pushing to origin/%CURRENT_BRANCH% ...
git push origin %CURRENT_BRANCH%
if errorlevel 1 (
    echo [ERROR] Push failed!
    echo.
    echo Possible reasons:
    echo   1. Network connection issue
    echo   2. No push permission
    echo   3. Need GitHub Personal Access Token
    echo.
    echo To configure Token:
    echo   1. Visit https://github.com/settings/tokens
    echo   2. Generate new token (check 'repo' permission)
    echo   3. Use token as password when pushing
    pause
    exit /b 1
)
echo.

echo ========================================
echo   Deploy Completed!
echo ========================================
echo.
echo Code pushed to GitHub successfully
echo Branch: %CURRENT_BRANCH%
echo Commit: %COMMIT_MSG%
echo.
echo Next steps:
echo   1. SSH to server: ssh ubuntu@101.34.79.228
echo   2. Run deploy script: ./deploy-server.sh
echo.
echo Or run one-line deploy on server:
echo   curl -o ~/deploy-server.sh https://raw.githubusercontent.com/LCCG-Agent/laochen-ai.com/main/deploy-server.sh
echo   chmod +x ~/deploy-server.sh
echo   ./deploy-server.sh
echo.
pause
