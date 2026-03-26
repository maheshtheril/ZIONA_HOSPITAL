@echo off
title UPDATING ZIONA HOSPITAL
color 0E

echo ===================================================
echo      UPDATING HOSPITAL SYSTEM (GIT SYNC)
echo ===================================================
echo.

echo [1/1] Downloading latest updates from server...
git fetch origin production
git reset --hard origin/production

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Update failed! Retrying with standard pull...
    git pull origin production
)

echo.
echo ===================================================
echo   SUCCESS: System is up to date!
echo   You can now restart the application.
echo ===================================================
echo.
pause
