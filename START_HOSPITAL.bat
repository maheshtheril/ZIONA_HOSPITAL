@echo off
setlocal enabledelayedexpansion
title ZIONA ERP - STARTING SERVICES
color 0B

echo ===================================================
echo           ZIONA ERP - ONE-CLICK START
echo ===================================================
echo.

:: 1. Auto-Config Network (IP Sync)
echo [1/4] Detecting Network & Auto-Configuring...
node configure_ip.js

:: 2. Launch Smart Guard AI (Background)
echo [2/4] Engaging Smart Guard AI...
start /B node smart_guard.js

:: 3. Launch WhatsApp Bridge (Background)
echo [3/4] Starting WhatsApp Bridge Service...
start /B cmd /c "RUN_WHATSAPP.bat"

:: Detect current IPv4 address for display
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /i "IPv4 Address"') do (
    set "LOCAL_IP=%%a"
    set "LOCAL_IP=!LOCAL_IP: =!"
    goto :IP_FOUND
)
:IP_FOUND

echo.
echo ===================================================
echo   Access on this PC: http://localhost:3000
echo   Access on LAN: http://!LOCAL_IP!:3000
echo   Access by Name: http://!COMPUTERNAME!:3000
echo ===================================================
echo.

:: Wait a few seconds for server to initialize
timeout /t 5 /nobreak >nul

:: 4. Native Desktop Mode (App Mode) to hide address bar
set "URL=http://localhost:3000/"

:: Try Chrome
if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
    start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --app=%URL%
    goto :START_APP
)
if exist "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" (
    start "" "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --app=%URL%
    goto :START_APP
)

:: Try Edge
if exist "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" (
    start "" "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --app=%URL%
    goto :START_APP
)

:: Fallback
start %URL%

:START_APP
:: Start the production server (High-Performance Standalone mode)
if exist ".next\standalone\server.js" (
    echo [INFO] Running in Secure Standalone Mode...
    node ".next\standalone\server.js"
) else (
    npm start
)

pause
