Set-Location "c:\Users\boyap\Downloads\FSD1"
Write-Host "===================================================" -ForegroundColor Green
Write-Host "  FSD1 - Automated Push and Deploy Launcher" -ForegroundColor Green
Write-Host "===================================================" -ForegroundColor Green
Write-Host ""

Write-Host "[Step 1/3] Pushing changes to GitHub (HEMACHANDRA-7/FSD1)..." -ForegroundColor Cyan
git push -u origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "?? Git push requires authentication or failed." -ForegroundColor Yellow
    Write-Host "Please ensure you have access to push to HEMACHANDRA-7/FSD1." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "[Step 2/3] Authenticating with Vercel CLI..." -ForegroundColor Cyan
npm run login:vercel

Write-Host ""
Write-Host "[Step 3/3] Deploying all 10 React apps to Vercel..." -ForegroundColor Cyan
npm run deploy:vercel

Write-Host ""
Write-Host "===================================================" -ForegroundColor Green
Write-Host " Render Backend Deployment:" -ForegroundColor Green
Write-Host " Open: https://render.com/deploy?repo=https://github.com/HEMACHANDRA-7/FSD1" -ForegroundColor Yellow
Write-Host "===================================================" -ForegroundColor Green
Read-Host -Prompt "Press Enter to exit"
