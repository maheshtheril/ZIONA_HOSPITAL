module.exports = [
"[project]/src/lib/services/pos-device.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * POS Device Service - Plug-n-Play Integration
 * Supports PineLabs Plutus Smart API over HTTP (Localhost)
 */ __turbopack_context__.s([
    "posService",
    ()=>posService
]);
class POSDeviceService {
    baseUrl = 'http://localhost:8080';
    fallbackUrl = 'http://localhost:8082';
    activeUrl = null;
    status = 'searching';
    constructor(){
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    async autoDiscover() {
        const ports = [
            8080,
            8082,
            12345
        ]; // Common POS Controller ports
        for (const port of ports){
            try {
                const url = `http://localhost:${port}`;
                const res = await fetch(`${url}/web/status`, {
                    method: 'GET',
                    signal: AbortSignal.timeout(1000)
                });
                if (res.ok) {
                    this.activeUrl = url;
                    this.status = 'connected';
                    console.log(`[POS] Device Controller detected at ${url}`);
                    return;
                }
            } catch (e) {
            // Port offline
            }
        }
        this.status = 'offline';
        console.log('[POS] No local device controller detected.');
    }
    getStatus() {
        return this.status;
    }
    /**
     * Initiates a payment on the physical device.
     * Uses the Plutus Smart API CSV/JSON format.
     */ async initiatePayment(req) {
        if (!this.activeUrl) {
            await this.autoDiscover();
            if (!this.activeUrl) {
                return {
                    success: false,
                    error: 'POS Controller not found on localhost'
                };
            }
        }
        try {
            // PineLabs Sample Request Format (Aggregator/Standalone)
            const payload = {
                transaction_type: 4001,
                amount: Math.round(req.amount * 100),
                billing_ref_no: req.invoiceId,
                payment_mode: req.method === 'CARD' ? 1 : 14
            };
            const response = await fetch(`${this.activeUrl}/web/doTransaction`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (data.status === 'success' || data.response_code === '00') {
                return {
                    success: true,
                    reference: data.approval_code || data.retrieval_ref_no,
                    amount: req.amount,
                    rawResponse: data
                };
            }
            return {
                success: false,
                error: data.message || 'Transaction Failed on Device',
                rawResponse: data
            };
        } catch (err) {
            console.error('[POS] Transaction Error:', err);
            return {
                success: false,
                error: 'Communication error with local POS controller'
            };
        }
    }
}
const posService = new POSDeviceService();
}),
];

//# sourceMappingURL=src_lib_services_pos-device_ts_5d6b01f6._.js.map