@echo off
title HOSPITAL RECOVERY - ZIONA SHIELD
color 0E

echo ===================================================
echo   HOSPITAL RECOVERY - EMERGENCY REPAIR
echo ===================================================
echo.

echo [0/5] Stopping active services...
taskkill /F /IM node.exe /T >nul 2>&1
echo Services stopped.

echo [1/5] Updating Database Columns...
node tmp/migrate_columns_v2.js

echo [2/5] Configuring Local Network IP...
node configure_ip.js

echo [3/5] Opening Windows Firewall...
netsh advfirewall firewall add rule name="HMS_Port_3000" dir=in action=allow protocol=TCP localport=3000 profile=any >nul 2>&1
netsh advfirewall firewall add rule name="HMS_Port_5432" dir=in action=allow protocol=TCP localport=5432 profile=any >nul 2>&1
echo Firewall door is open.

echo [4/5] Syncing Application Client...
npx prisma generate

echo [5/5] Launching FAST Production Server...
echo.
echo ===================================================
echo   SUCCESS: App is online at your Local IP!
echo   Other PCs use the IP shown by configure_ip.js
echo ===================================================
echo.
npm start
pause
