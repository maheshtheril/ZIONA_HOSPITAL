const http = require('http');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const CHECK_INTERVAL = 30000; // 30 seconds
const LOG_FILE = path.join(process.cwd(), 'ziona_guard.log');

function log(message) {
    const timestamp = new Date().toLocaleString();
    const logLine = `[${timestamp}] ${message}\n`;
    console.log(logLine.trim());
    try {
        fs.appendFileSync(LOG_FILE, logLine);
    } catch (e) {
        console.error('Failed to write to log file', e);
    }
}

function getLocalIp() {
    const interfaces = os.networkInterfaces();
    for (const devName in interfaces) {
        const iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            const alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
    return 'localhost';
}

function syncIpConfig() {
    const currentIp = getLocalIp();
    const envPath = path.join(__dirname, '.env');
    const dockerPath = path.join(__dirname, 'docker-compose.yml');
    let changed = false;

    // Update .env
    if (fs.existsSync(envPath)) {
        let envContent = fs.readFileSync(envPath, 'utf8');
        const oldContent = envContent;
        
        envContent = envContent.replace(/NEXT_PUBLIC_APP_URL="http:\/\/.*:3000"/g, `NEXT_PUBLIC_APP_URL="http://${currentIp}:3000"`);
        envContent = envContent.replace(/AUTH_URL="http:\/\/.*:3000"/g, `AUTH_URL="http://${currentIp}:3000"`);
        envContent = envContent.replace(/LOCAL_URL=http:\/\/.*:3000/g, `LOCAL_URL=http://${currentIp}:3000`);
        
        if (envContent !== oldContent) {
            fs.writeFileSync(envPath, envContent);
            log(`[SELF-HEAL] IP Change Detected! Updated .env to: ${currentIp}`);
            changed = true;
        }
    }

    // Update docker-compose.yml
    if (fs.existsSync(dockerPath)) {
        let dockerContent = fs.readFileSync(dockerPath, 'utf8');
        const oldDocker = dockerContent;
        dockerContent = dockerContent.replace(/- SERVER_URL=http:\/\/.*:8080/g, `- SERVER_URL=http://${currentIp}:8080`);
        
        if (dockerContent !== oldDocker) {
            fs.writeFileSync(dockerPath, dockerContent);
            log(`[SELF-HEAL] Updated docker-compose.yml to: ${currentIp}`);
            changed = true;
        }
    }

    if (changed) {
        log(`[INFO] Network address changed. You can now access Ziona HMS at: http://${currentIp}:3000`);
    }
    
    return currentIp;
}

async function checkService(port, name) {
    return new Promise((resolve) => {
        const req = http.get(`http://localhost:${port}/status`, (res) => {
            resolve(res.statusCode === 200);
        });
        
        req.on('error', () => {
            if (port === 3000) {
                const reqRoot = http.get(`http://localhost:3000`, (res) => {
                    resolve(true);
                });
                reqRoot.on('error', () => resolve(false));
                return;
            }
            resolve(false);
        });
        
        req.setTimeout(5000, () => {
            req.destroy();
            resolve(false);
        });
    });
}

async function monitor() {
    log('--- ZIONA SMART GUARD ACTIVATED ---');
    log(`[INIT] Current Network IP: ${getLocalIp()}`);
    log(`[INIT] Computer Name: ${os.hostname()}`);

    // Initial sync
    syncIpConfig();

    setInterval(async () => {
        // 1. IP Network Self-Healing
        syncIpConfig();

        // 2. Check HMS Application
        const hmsAlive = await checkService(3000, 'Ziona HMS');
        if (!hmsAlive) {
            log('[ALERT] Ziona HMS App is down! (Attempting recovery logs)');
        }

        // 3. Check WhatsApp Bridge
        const waAlive = await checkService(8081, 'WhatsApp Bridge');
        if (!waAlive) {
            log('[ALERT] WhatsApp Bridge is down! Restarting service...');
            exec('start RUN_WHATSAPP.bat', (err) => {
                if (err) log('[ERROR] Failed to restart WhatsApp Bridge');
                else log('[SUCCESS] WhatsApp Bridge restart triggered.');
            });
        }
    }, CHECK_INTERVAL);
}

monitor();
