@echo off
title FSD1 Automated Cloud Deployment
color 0A
echo ===================================================
echo   FSD1 - Automated Push and Deploy Launcher
echo ===================================================
echo.
cd /d "%~dp0"

echo [Step 1/3] Pushing changes to GitHub (HEMACHANDRA-7/FSD1)...
git push -u origin main
if errorlevel 1 (
    echo.
    echo ⚠️ Git push required authentication or failed.
    echo If prompted by GitHub, please sign in.
    echo.
)

echo [Step 2/3] Authenticating with Vercel CLI...
echo A browser window will open if you are not yet authenticated.
call npm run login:vercel

echo.
echo [Step 3/3] Deploying all 10 React apps to Vercel...
call npm run deploy:vercel

echo.
echo ===================================================
echo  Render Backend Deployment:
echo  Open this link to deploy all 8 backend services:
echo  https://render.com/deploy?repo=https://github.com/HEMACHANDRA-7/FSD1
echo ===================================================
echo.
pause
