const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { Client } = require('pg');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function run() {
    console.log('\n=========================================');
    console.log('   ZIONA HMS - CLOUD SETUP WIZARD');
    console.log('=========================================\n');

    const envPath = path.join(process.cwd(), '.env');
    let envContent = '';
    
    if (fs.existsSync(envPath)) {
        envContent = fs.readFileSync(envPath, 'utf8');
    }

    // Try to find existing CLOUD_DATABASE_URL
    const existingMatch = envContent.match(/CLOUD_DATABASE_URL=["']?(.+?)["']?(\r?\n|$)/);
    if (existingMatch && existingMatch[1].trim()) {
        console.log(`Current Cloud URL: ${existingMatch[1].substring(0, 20)}...`);
        const confirm = await ask('Do you want to change it? (y/n): ');
        if (confirm.toLowerCase() !== 'y') {
            console.log('\n[INFO] Keeping existing configuration.');
            process.exit(0);
        }
    }

    console.log('\nPlease paste your Neon Database URL below.');
    console.log('(It looks like: postgres://user:pass@ep-flat-firefly...)\n');

    const cloudUrl = await ask('Neon URL: ');
    
    if (!cloudUrl.startsWith('postgres')) {
        console.error('\n[ERROR] That doesn\'t look like a valid database URL.');
        process.exit(1);
    }

    console.log('\n[1/2] Testing connection to Neon...');
    const client = new Client({ 
        connectionString: cloudUrl.trim(),
        ssl: { rejectUnauthorized: false }
    });

    try {
        await client.connect();
        console.log('[SUCCESS] Connected to Neon Cloud!');
        await client.end();

        console.log('\n[2/2] Saving to .env...');
        
        let newEnv = '';
        if (envContent.includes('CLOUD_DATABASE_URL=')) {
            newEnv = envContent.replace(/CLOUD_DATABASE_URL=.*/, `CLOUD_DATABASE_URL="${cloudUrl.trim()}"`);
        } else {
            newEnv = envContent + `\nCLOUD_DATABASE_URL="${cloudUrl.trim()}"\n`;
        }

        fs.writeFileSync(envPath, newEnv);
        console.log('[SUCCESS] Configuration saved!');
        
        console.log('\n=========================================');
        console.log('   CLOUD SETUP COMPLETE!');
        console.log('   You can now run SYNC_TO_CLOUD.bat');
        console.log('=========================================\n');

    } catch (err) {
        console.error('\n[ERROR] Failed to connect to Neon. Please check the URL.');
        console.error(`Error: ${err.message}`);
        process.exit(1);
    } finally {
        rl.close();
    }
}

function ask(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer));
    });
}

run();
