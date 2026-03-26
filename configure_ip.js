const fs = require('fs');
const os = require('os');
const path = require('path');

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

const currentIp = getLocalIp();
const envPath = path.join(__dirname, '.env');
const dockerPath = path.join(__dirname, 'docker-compose.yml');

console.log(`[SETUP] Detected Local IP: ${currentIp}`);

// Update .env
if (fs.existsSync(envPath)) {
    let envContent = fs.readFileSync(envPath, 'utf8');
    
    envContent = envContent.replace(/NEXT_PUBLIC_APP_URL="http:\/\/.*:3000"/g, `NEXT_PUBLIC_APP_URL="http://${currentIp}:3000"`);
    envContent = envContent.replace(/AUTH_URL="http:\/\/.*:3000"/g, `AUTH_URL="http://${currentIp}:3000"`);
    envContent = envContent.replace(/LOCAL_URL=http:\/\/.*:3000/g, `LOCAL_URL=http://${currentIp}:3000`);
    
    // Sanitize Database URL if it still has the neon-host placeholder
    if (envContent.includes('neon-host')) {
        console.log('[INFO] Placeholder database URL detected. Resetting to local defaults...');
        envContent = envContent.replace(/DATABASE_URL="postgresql:\/\/.*@neon-host\/.*"/g, `DATABASE_URL="postgresql://postgres:postgres@localhost:5432/ziona_hms"`);
        envContent = envContent.replace(/DIRECT_DATABASE_URL="postgresql:\/\/.*@neon-host\/.*"/g, `DIRECT_DATABASE_URL="postgresql://postgres:postgres@localhost:5432/ziona_hms"`);
    }
    
    fs.writeFileSync(envPath, envContent);
    console.log(`[SUCCESS] Updated .env with IP: ${currentIp}`);
}

// Update docker-compose.yml (if it exists)
if (fs.existsSync(dockerPath)) {
    let dockerContent = fs.readFileSync(dockerPath, 'utf8');
    dockerContent = dockerContent.replace(/- SERVER_URL=http:\/\/.*:8080/g, `- SERVER_URL=http://${currentIp}:8080`);
    fs.writeFileSync(dockerPath, dockerContent);
    console.log(`[SUCCESS] Updated docker-compose.yml with IP: ${currentIp}`);
}

console.log('\n=========================================');
console.log(`Ready to go! Access on LAN at: http://${currentIp}:3000`);
console.log('=========================================\n');
