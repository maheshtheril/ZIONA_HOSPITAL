module.exports = [
"[project]/src/lib/tax-master-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COUNTRY_TAX_CONFIGS",
    ()=>COUNTRY_TAX_CONFIGS,
    "GLOBAL_DEFAULT_TAXES",
    ()=>GLOBAL_DEFAULT_TAXES,
    "MASTER_TAX_RATES",
    ()=>MASTER_TAX_RATES
]);
const MASTER_TAX_RATES = [
    {
        name: 'GST 0%',
        rate: 0.0,
        type: 'GST_0'
    },
    {
        name: 'GST 5%',
        rate: 5.0,
        type: 'GST_5'
    },
    {
        name: 'GST 12%',
        rate: 12.0,
        type: 'GST_12'
    },
    {
        name: 'GST 18%',
        rate: 18.0,
        type: 'GST_18'
    },
    {
        name: 'GST 28%',
        rate: 28.0,
        type: 'GST_28'
    },
    {
        name: 'VAT 0%',
        rate: 0.0,
        type: 'VAT_0'
    },
    {
        name: 'VAT 5%',
        rate: 5.0,
        type: 'VAT_5'
    },
    {
        name: 'VAT 15%',
        rate: 15.0,
        type: 'VAT_15'
    }
];
const COUNTRY_TAX_CONFIGS = [
    {
        countryIso2: 'IN',
        taxNames: [
            'GST 0%',
            'GST 5%',
            'GST 12%',
            'GST 18%',
            'GST 28%'
        ]
    },
    {
        countryIso2: 'AE',
        taxNames: [
            'VAT 0%',
            'VAT 5%'
        ]
    },
    {
        countryIso2: 'SA',
        taxNames: [
            'VAT 0%',
            'VAT 15%'
        ]
    }
];
const GLOBAL_DEFAULT_TAXES = [
    'GST 0%',
    'GST 5%',
    'GST 12%',
    'GST 18%',
    'GST 28%'
];
}),
"[project]/src/lib/services/tax-seed.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ensureGlobalTaxes",
    ()=>ensureGlobalTaxes,
    "seedCompanyTaxes",
    ()=>seedCompanyTaxes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tax$2d$master$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/tax-master-data.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function ensureGlobalTaxes(tx) {
    const db = tx || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"];
    const count = await db.tax_rates.count();
    if (count > 0) return {
        success: true,
        message: "Taxes already exist"
    };
    console.log("[TaxSeed] Seeding global master taxes...");
    const logs = [];
    for (const r of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tax$2d$master$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MASTER_TAX_RATES"]){
        // 1. Ensure Tax Type
        let taxType = await db.tax_types.findFirst({
            where: {
                name: r.type
            }
        });
        if (!taxType) {
            taxType = await db.tax_types.create({
                data: {
                    id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                    name: r.type,
                    description: `${r.name} Class`,
                    is_active: true
                }
            });
            logs.push(`Created Tax Type: ${r.type}`);
        }
        // 2. Ensure Tax Rate
        let taxRate = await db.tax_rates.findFirst({
            where: {
                tax_type_id: taxType.id,
                rate: r.rate
            }
        });
        if (!taxRate) {
            await db.tax_rates.create({
                data: {
                    id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                    tax_type_id: taxType.id,
                    name: r.name,
                    rate: r.rate,
                    is_active: true
                }
            });
            logs.push(`Created Tax Rate: ${r.name}`);
        }
    }
    // 3. Seed Country Mappings (Global/Master)
    for (const config of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tax$2d$master$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COUNTRY_TAX_CONFIGS"]){
        const country = await db.countries.findFirst({
            where: {
                iso2: config.countryIso2
            }
        });
        if (!country) continue;
        for (const taxName of config.taxNames){
            const rate = await db.tax_rates.findFirst({
                where: {
                    name: taxName
                }
            });
            if (!rate) continue;
            const exists = await db.country_tax_mappings.findFirst({
                where: {
                    country_id: country.id,
                    tax_rate_id: rate.id
                }
            });
            if (!exists) {
                await db.country_tax_mappings.create({
                    data: {
                        id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                        country_id: country.id,
                        tax_type_id: rate.tax_type_id,
                        tax_rate_id: rate.id,
                        is_active: true
                    }
                });
                logs.push(`Mapped ${taxName} to ${country.name}`);
            }
        }
    }
    return {
        success: true,
        logs
    };
}
async function seedCompanyTaxes(companyId, tx) {
    const db = tx || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"];
    // 1. Ensure Global Master Data exists
    await ensureGlobalTaxes(db);
    const company = await db.company.findUnique({
        where: {
            id: companyId
        },
        include: {
            countries: true
        }
    });
    if (!company) return {
        error: "Company not found"
    };
    const tenantId = company.tenant_id;
    const existingMaps = await db.company_tax_maps.count({
        where: {
            company_id: companyId
        }
    });
    if (existingMaps > 0) return {
        success: true,
        message: "Company taxes already mapped"
    };
    console.log(`[TaxSeed] Mapping default taxes for Company: ${company.name} (${company.countries?.name || 'Global'})`);
    // 2. Determine which taxes to map
    const countryIso = company.countries?.iso2 || 'IN'; // Fallback to IN if not set
    const config = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tax$2d$master$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COUNTRY_TAX_CONFIGS"].find((c)=>c.countryIso2 === countryIso);
    const taxNamesToMap = config ? config.taxNames : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tax$2d$master$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GLOBAL_DEFAULT_TAXES"];
    const logs = [];
    for (const name of taxNamesToMap){
        const rateRow = await db.tax_rates.findFirst({
            where: {
                name
            }
        });
        if (!rateRow) continue;
        await db.company_tax_maps.create({
            data: {
                id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                tenant_id: tenantId,
                company_id: companyId,
                tax_rate_id: rateRow.id,
                tax_type_id: rateRow.tax_type_id,
                is_active: true,
                is_default: rateRow.rate === 0
            }
        });
        logs.push(`Linked ${name}`);
    }
    return {
        success: true,
        logs
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=src_lib_d5572a00._.js.map