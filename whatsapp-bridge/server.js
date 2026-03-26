const { 
    default: makeWASocket, 
    useMultiFileAuthState, 
    DisconnectReason,
    delay,
    fetchLatestBaileysVersion,
    Browsers
} = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');
const qrcode = require('qrcode-terminal');
const express = require('express');
const pino = require('pino');
const path = require('path');

const app = express();
app.use(express.json({ limit: '50mb' }));
const port = 8081;

let sock;
let isConnected = false;

async function connectToWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, 'auth_info'));
    const { version, isLatest } = await fetchLatestBaileysVersion();
    console.log(`[INFO] Using WA version v${version.join('.')}, isLatest: ${isLatest}`);
    
    sock = makeWASocket({
        version,
        auth: state,
        logger: pino({ level: 'silent' }),
        browser: Browsers.macOS('Desktop'),
        syncFullHistory: false
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect, qr } = update;
        
        if (qr) {
            console.log('\n--- SCAN THIS QR CODE WITH WHATSAPP ---');
            qrcode.generate(qr, { small: true });
        }

        if (connection === 'close') {
            const error = lastDisconnect?.error;
            const code = error?.output?.statusCode || error?.code;
            const shouldReconnect = code !== DisconnectReason.loggedOut;
            
            console.log(`Connection closed (Reason: ${code}, Error: ${error?.message || 'Unknown'})`);
            console.log(`Reconnecting: ${shouldReconnect}`);
            
            isConnected = false;

            if (shouldReconnect) {
                console.log('Waiting 5s before reconnecting...');
                await delay(5000);
                connectToWhatsApp();
            }
        } else if (connection === 'open') {
            console.log('\n[SUCCESS] WhatsApp Connected!');
            isConnected = true;
        }
    });
}

// API Endpoints for the HMS App
app.get('/status', (req, res) => {
    res.json({ connected: isConnected });
});

app.post('/send-message', async (req, res) => {
    if (!isConnected) return res.status(500).json({ error: 'WhatsApp not connected' });
    
    const { number, message, pdfBase64, filename } = req.body;
    const jid = `${number}@s.whatsapp.net`;

    try {
        if (pdfBase64) {
            const buffer = Buffer.from(pdfBase64, 'base64');
            await sock.sendMessage(jid, { 
                document: buffer, 
                mimetype: 'application/pdf', 
                fileName: filename || 'Invoice.pdf',
                caption: message 
            });
        } else {
            await sock.sendMessage(jid, { text: message });
        }
        res.json({ success: true });
    } catch (err) {
        console.error('Failed to send message:', err);
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`[BRIDGE] Running on http://localhost:${port}`);
    connectToWhatsApp();
});
