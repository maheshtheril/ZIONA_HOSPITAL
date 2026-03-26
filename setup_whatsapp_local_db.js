const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

async function run() {
    console.log('[SETUP] Configuring WhatsApp in hms_settings...');
    
    // 1. Read .env for DB URL
    const envPath = path.join(process.cwd(), '.env');
    const env = fs.readFileSync(envPath, 'utf8');
    const dbUrlMatch = env.match(/DATABASE_URL=["']?(.+?)["']?\r?\n/);
    
    if (!dbUrlMatch) {
        console.error('[ERROR] Could not find DATABASE_URL in .env');
        process.exit(1);
    }
    
    const dbUrl = dbUrlMatch[1];
    const client = new Client({ connectionString: dbUrl });

    try {
        await client.connect();
        console.log('[SUCCESS] Connected to PostgreSQL');

        // 2. Try to get first available tenant and company
        const discovery = await client.query('SELECT tenant_id, id as company_id FROM company LIMIT 1');
        if (discovery.rows.length === 0) {
            console.error('[ERROR] No companies found in database. Please run seed first.');
            await client.end();
            process.exit(1);
        }

        const { tenant_id, company_id } = discovery.rows[0];
        console.log(`[SETUP] Using Tenant ID: ${tenant_id}, Company ID: ${company_id}`);

        // 3. Prepare config JSON - FORCING local-bridge
        const configValue = JSON.stringify({
            enabled: true,
            provider: 'local-bridge',
            instanceId: 'local-main',
            token: 'local',
            autoSendBill: true,
            lastUpdated: new Date().toISOString()
        });

        // 4. Delete existing if any, then insert
        // Using two separate queries for simplicity and reliability in initialization
        const deleteQuery = 'DELETE FROM hms_settings WHERE tenant_id = $1 AND company_id = $2 AND key = $3';
        const insertQuery = `
            INSERT INTO hms_settings (
                id, tenant_id, company_id, key, value, scope, version, is_active, created_at, updated_at
            ) VALUES (
                gen_random_uuid(), $1, $2, $3, $4, 'company', 1, true, now(), now()
            )
        `;

        await client.query(deleteQuery, [tenant_id, company_id, 'whatsapp_config']);
        await client.query(insertQuery, [tenant_id, company_id, 'whatsapp_config', configValue]);
        
        console.log('[SUCCESS] WhatsApp bridge configuration active in hms_settings');


    } catch (err) {
        console.error('[ERROR] Failed to update database:', err.message);
    } finally {
        await client.end();
    }
}

run();
