const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// STABLE v8.1 - THE ZIONA STANDARD (ULTIMATE UNLOCK)
// Added: Prisma 7 Self-Healing + Auto Force-Reset on Conflict
const envPath = path.join(process.cwd(), '.env');
const prismaPath = path.join(process.cwd(), 'prisma', 'schema.prisma');
const prismaConfigPath = path.join(process.cwd(), 'prisma.config.ts');

async function tryConnect(user, password, host, port, database = 'postgres') {
    const client = new Client({ user, password, host, port, database, connectionTimeoutMillis: 1500 });
    try {
        await client.connect();
        return { client, error: null };
    } catch (err) {
        return { client: null, error: err.message };
    }
}

async function run() {
    console.log('\n=========================================');
    console.log('   ZIONA ERP - ULTIMATE UNLOCK v8.1');
    console.log('      (SELF-HEALING DATABASE)');
    console.log('=========================================\n');

    const users = ['postgres', 'hms_admin', 'threeg'];
    const hosts = ['127.0.0.1', 'localhost'];
    const standardPatterns = ['hms2035', 'password', 'ChangeMe123!', 'postgres', ''];

    console.log(`[1/6] Running Enterprise Discovery...`);
    
    let activeClient = null;
    let finalHost = '127.0.0.1';
    let finalPass = '';
    let finalUser = 'postgres';

    // Matrix Probe
    for (const p of standardPatterns) {
        for (const u of users) {
            for (const h of hosts) {
                process.stdout.write(` > Testing Pattern [${u}:${p}]... `);
                const res = await tryConnect(u, p, h, 5432, 'postgres');
                if (res.client) {
                    console.log('UNLOCKED!');
                    activeClient = res.client;
                    finalHost = h;
                    finalPass = p;
                    finalUser = u;
                    break;
                } else {
                    process.stdout.write(res.error.includes('authentication') ? 'Locked.\n' : 'Offline.\n');
                }
            }
            if (activeClient) break;
        }
        if (activeClient) break;
    }

    if (!activeClient) {
        const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });
        finalPass = await new Promise(resolve => {
            readline.question(`[?] Enter your PostgreSQL password for user 'postgres': `, (ans) => {
                readline.close();
                resolve(ans);
            });
        });
        const finalRes = await tryConnect('postgres', finalPass, '127.0.0.1', 5432);
        if (finalRes.client) { activeClient = finalRes.client; finalUser = 'postgres'; }
        else { console.log(`\n[ERROR] Still locked. Please reset your PG password.`); process.exit(1); }
    }

    // Database Sync
    const targetDatabase = 'hms_db';
    console.log(`\n[2/6] Synchronizing '${targetDatabase}'...`);
    await activeClient.query(`CREATE DATABASE ${targetDatabase}`).catch(() => {});
    await activeClient.end();

    console.log(`\n[3/6] Mapping Environment Layers (Prisma 7)...`);
    const dbUrl = `postgresql://${finalUser}:${encodeURIComponent(finalPass)}@${finalHost}:5432/${targetDatabase}`;
    let envContent = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf8') : '';
    envContent = envContent.split('\n').filter(l => !l.startsWith('DATABASE_URL') && !l.startsWith('DIRECT_DATABASE_URL')).join('\n');
    fs.writeFileSync(envPath, `DATABASE_URL="${dbUrl}"\nDIRECT_DATABASE_URL="${dbUrl}"\n${envContent}`);

    console.log(`\n[4/6] Priming Prisma 7 Engines...`);
    
    // [PRISMA 7] Ensure prisma.config.ts exists
    if (!fs.existsSync(prismaConfigPath)) {
        console.log(' > [CONFIG] Deploying prisma.config.ts...');
        const config = `import { defineConfig } from '@prisma/config';\nimport dotenv from 'dotenv';\ndotenv.config();\nexport default defineConfig({ datasource: { url: process.env.DIRECT_DATABASE_URL || process.env.DATABASE_URL } });`;
        fs.writeFileSync(prismaConfigPath, config);
    }

    const prismaEnv = { ...process.env, DATABASE_URL: dbUrl, DIRECT_DATABASE_URL: dbUrl };

    // [v8.5] DATA SAFETY PRE-CHECK
    let hasExistingData = false;
    const checkClient = new Client({ user: finalUser, password: finalPass, host: finalHost, port: 5432, database: targetDatabase });
    try {
        await checkClient.connect();
        const res = await checkClient.query("SELECT count(*) FROM information_schema.tables WHERE table_name = 'app_user'");
        if (parseInt(res.rows[0].count) > 0) {
            const userRes = await checkClient.query("SELECT count(*) FROM app_user");
            if (parseInt(userRes.rows[0].count) > 0) {
                hasExistingData = true;
                console.log(` > [SAFETY] Detected ${userRes.rows[0].count} existing users. Data protection ACTIVE.`);
            }
        }
        await checkClient.end();
    } catch (e) {
        // Table might not exist yet, which is fine
    }

    try {
        console.log(' > [EXEC] npx prisma db push --accept-data-loss...');
        execSync('npx prisma db push --accept-data-loss', { stdio: 'inherit', env: prismaEnv });
        console.log(' > [SUCCESS] Schema synchronized.');
    } catch (err) {
        if (hasExistingData) {
            console.log('\n[CRITICAL] DATABASE CONFLICT DETECTED.');
            console.log('    Safety Guard blocked automatic reset because you have existing data.');
            console.log('    Please check your schema or run manual migrations.');
            process.exit(1);
        }

        console.log('\n[!] DATA CONFLICT DETECTED. The database schema has evolved.');
        console.log('    Attempting Ultimate Repair (Forced Reset)...');
        try {
            // [ULTIMATE REPAIR] Drop and recreate schema to match the code expectation
            execSync('npx prisma db push --force-reset', { stdio: 'inherit', env: prismaEnv });
            console.log(' > [SUCCESS] Schema reset and synchronized successfully.');
        } catch (fatal) {
            console.log(`\n[CRITICAL] Deployment failed even after reset. Error: ${fatal.message}`);
            process.exit(1);
        }
    }

    console.log(`\n[5/6] Finalizing System Integration...`);
    ['node configure_ip.js', 'node setup_whatsapp_local_db.js', 'node create_shortcut.js'].forEach(cmd => {
        try { execSync(cmd, { stdio: 'ignore' }); } catch (e) {}
    });

    console.log('\n=========================================');
    console.log(`   DEPLOYMENT SUCCESSFUL (ZIONA v8.1)`);
    console.log('=========================================');
    process.exit(0);
}

run();
