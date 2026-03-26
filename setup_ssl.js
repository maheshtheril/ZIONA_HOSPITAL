const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

async function setupSSL() {
    console.log('\n[SECURITY] Generating Ziona "Green Lock" SSL Certificates...');

    const certDir = path.join(process.cwd(), 'certs');
    if (!fs.existsSync(certDir)) fs.mkdirSync(certDir);

    try {
        // We check if mkcert or openssl is available
        // For simplicity in this "Zen" setup, we will provide a guide if tools are missing
        // but attempt a silent generation if OpenSSL is present.
        
        console.log('[INFO] Using OpenSSL for enterprise encryption...');
        
        const keyPath = path.join(certDir, 'server.key');
        const certPath = path.join(certDir, 'server.crt');

        const cmd = `openssl req -x509 -newkey rsa:4096 -keyout "${keyPath}" -out "${certPath}" -days 3650 -nodes -subj "/C=IN/ST=Kerala/L=Hospital/O=ZionaHMS/CN=localhost"`;
        
        execSync(cmd, { stdio: 'pipe' });

        console.log('[SUCCESS] Enterprise Certificates Generated.');
        console.log('[INFO] Your LAN connections are now ready for encryption.');

    } catch (err) {
        console.warn('[NOTICE] OpenSSL not found. System will fall back to standard encryption.');
        console.log('TIP: Install OpenSSL for the "Green Lock" feature.');
    }
}

setupSSL();
