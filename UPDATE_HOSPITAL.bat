@echo off
title UPDATING ZIONA HOSPITAL
color 0E

echo ===================================================
echo      UPDATING HOSPITAL SYSTEM (GIT SYNC)
echo ===================================================
echo.

echo [1/1] Downloading latest updates from server...
git pull origin production

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Update failed! Check internet or Git connection.
    pause
    exit /b
)

echo.
echo ===================================================
echo   SUCCESS: System is up to date!
echo   You can now restart the application.
echo ===================================================
echo.
pause
