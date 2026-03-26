const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const APP_NAME = "Ziona ERP";
const TARGET_PATH = path.join(process.cwd(), 'START_HOSPITAL.bat');
const ICON_PATH = path.join(process.cwd(), 'public', 'ziona_erp.png'); // Updated to premium logo
const WORKING_DIR = process.cwd();

function createVBS(shortcutPath, target, workingDir, icon) {
    return `
Set oWS = WScript.CreateObject("WScript.Shell")
sLinkFile = "${shortcutPath.replace(/\\/g, '\\\\')}"
Set oLink = oWS.CreateShortcut(sLinkFile)
oLink.TargetPath = "${target.replace(/\\/g, '\\\\')}"
oLink.WorkingDirectory = "${workingDir.replace(/\\/g, '\\\\')}"
oLink.Description = "Launch ${APP_NAME}"
${fs.existsSync(icon) ? `oLink.IconLocation = "${icon.replace(/\\/g, '\\\\')}"` : ''}
oLink.Save
    `;
}

async function run() {
    console.log(`\n[CREATE SHORTCUTS] Setting up ${APP_NAME} access...`);

    const desktopPath = path.join(require('os').homedir(), 'Desktop', `${APP_NAME}.lnk`);
    const startMenuPath = path.join(process.env.APPDATA, 'Microsoft', 'Windows', 'Start Menu', 'Programs', `${APP_NAME}.lnk`);

    const tempVBS = path.join(require('os').tmpdir(), 'create_shortcut.vbs');

    try {
        // 1. Create Desktop Shortcut
        console.log(` > Creating Desktop Shortcut...`);
        fs.writeFileSync(tempVBS, createVBS(desktopPath, TARGET_PATH, WORKING_DIR, ICON_PATH), 'utf8');
        execSync(`cscript //NoLogo "${tempVBS}"`);

        // 2. Create Start Menu Shortcut
        console.log(` > Registering in Start Menu...`);
        fs.writeFileSync(tempVBS, createVBS(startMenuPath, TARGET_PATH, WORKING_DIR, ICON_PATH), 'utf8');
        execSync(`cscript //NoLogo "${tempVBS}"`);

        console.log(` > [SUCCESS] Shortcuts created. You can now search for "${APP_NAME}" in your Start Menu!`);
    } catch (err) {
        console.log(` > [ERROR] Could not create shortcuts: ${err.message}`);
    } finally {
        if (fs.existsSync(tempVBS)) fs.unlinkSync(tempVBS);
    }
}

run();
