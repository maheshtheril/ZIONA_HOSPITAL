module.exports = [
"[project]/src/lib/services/uom.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "internalSeedUOMs",
    ()=>internalSeedUOMs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
async function internalSeedUOMs(tenantId, companyId, tx) {
    const db = tx || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"];
    console.log(`[UOM Service] Seeding UOMs for Tenant: ${tenantId}, Company: ${companyId}`);
    try {
        // 0. MIGRATION: Normalize 'each' to 'EACH'
        // This cleans up previous duplicate seeds
        console.log("[UOM Service] Normalizing UOMs (each -> EACH)...");
        try {
            // Update products to use 'EACH'
            await db.hms_product.updateMany({
                where: {
                    uom: 'each'
                },
                data: {
                    uom: 'EACH'
                }
            });
            // Find the lowercase UOM record to delete it
            const lowercaseEach = await db.hms_uom.findFirst({
                where: {
                    tenant_id: tenantId,
                    company_id: companyId,
                    name: 'each'
                }
            });
            if (lowercaseEach) {
                await db.hms_uom.delete({
                    where: {
                        id: lowercaseEach.id
                    }
                });
                console.log("[UOM Service] Deleted duplicate lowercase 'each' UOM.");
            }
        } catch (migError) {
            console.warn("[UOM Service] Migration warning (non-fatal):", migError);
        }
        // 1. Ensure Categories
        const categories = [
            'Pharmaceutical Packaging',
            'Generic Units',
            'Volume',
            'Weight',
            'Services'
        ];
        const catMap = {};
        for (const catName of categories){
            let cat = await db.hms_uom_category.findFirst({
                where: {
                    tenant_id: tenantId,
                    company_id: companyId,
                    name: catName
                }
            });
            if (!cat) {
                cat = await db.hms_uom_category.create({
                    data: {
                        id: crypto.randomUUID(),
                        tenant_id: tenantId,
                        company_id: companyId,
                        name: catName
                    }
                });
            }
            catMap[catName] = cat;
        }
        const pharmaCat = catMap['Pharmaceutical Packaging'];
        const genericCat = catMap['Generic Units'];
        const volCat = catMap['Volume'];
        const weightCat = catMap['Weight'];
        const serviceCat = catMap['Services'];
        // 2. Define world-standard UOMs
        const uomDefinitions = [
            // Generic
            {
                name: 'EACH',
                type: 'reference',
                ratio: 1.0,
                description: 'Each / Single Unit',
                categoryId: genericCat.id
            },
            {
                name: 'PCS',
                type: 'reference',
                ratio: 1.0,
                description: 'Pieces',
                categoryId: genericCat.id
            },
            {
                name: 'UNIT',
                type: 'reference',
                ratio: 1.0,
                description: 'Standard Unit',
                categoryId: genericCat.id
            },
            {
                name: 'NOS',
                type: 'reference',
                ratio: 1.0,
                description: 'Numbers',
                categoryId: genericCat.id
            },
            // Pharma Packaging
            {
                name: 'TAB',
                type: 'reference',
                ratio: 1.0,
                description: 'Tablet',
                categoryId: pharmaCat.id
            },
            {
                name: 'CAP',
                type: 'reference',
                ratio: 1.0,
                description: 'Capsule',
                categoryId: pharmaCat.id
            },
            {
                name: 'STRIP',
                type: 'reference',
                ratio: 1.0,
                description: 'Strip',
                categoryId: pharmaCat.id
            },
            {
                name: 'VIAL',
                type: 'reference',
                ratio: 1.0,
                description: 'Vial',
                categoryId: pharmaCat.id
            },
            {
                name: 'AMPOULE',
                type: 'reference',
                ratio: 1.0,
                description: 'Ampoule',
                categoryId: pharmaCat.id
            },
            {
                name: 'BOTTLE',
                type: 'reference',
                ratio: 1.0,
                description: 'Bottle',
                categoryId: pharmaCat.id
            },
            {
                name: 'PACK',
                type: 'reference',
                ratio: 1.0,
                description: 'Pack',
                categoryId: pharmaCat.id
            },
            {
                name: 'BOX',
                type: 'reference',
                ratio: 1.0,
                description: 'Box',
                categoryId: pharmaCat.id
            },
            // Weight
            {
                name: 'MG',
                type: 'reference',
                ratio: 1.0,
                description: 'Milligram',
                categoryId: weightCat.id
            },
            {
                name: 'G',
                type: 'bigger',
                ratio: 1000.0,
                description: 'Gram',
                categoryId: weightCat.id
            },
            {
                name: 'KG',
                type: 'bigger',
                ratio: 1000000.0,
                description: 'Kilogram',
                categoryId: weightCat.id
            },
            {
                name: 'MCG',
                type: 'smaller',
                ratio: 0.001,
                description: 'Microgram',
                categoryId: weightCat.id
            },
            // Volume
            {
                name: 'ML',
                type: 'reference',
                ratio: 1.0,
                description: 'Milliliter',
                categoryId: volCat.id
            },
            {
                name: 'L',
                type: 'bigger',
                ratio: 1000.0,
                description: 'Liter',
                categoryId: volCat.id
            },
            // Services
            {
                name: 'VISIT',
                type: 'reference',
                ratio: 1.0,
                description: 'Consultation Visit',
                categoryId: serviceCat.id
            },
            {
                name: 'TEST',
                type: 'reference',
                ratio: 1.0,
                description: 'Lab Test',
                categoryId: serviceCat.id
            },
            {
                name: 'SCAN',
                type: 'reference',
                ratio: 1.0,
                description: 'Radiology Scan',
                categoryId: serviceCat.id
            },
            {
                name: 'SESSION',
                type: 'reference',
                ratio: 1.0,
                description: 'Procedure Session',
                categoryId: serviceCat.id
            },
            {
                name: 'DAY',
                type: 'reference',
                ratio: 1.0,
                description: 'Day (IPD)',
                categoryId: serviceCat.id
            }
        ];
        // 3. Seed UOMs
        let createdCount = 0;
        for (const uomDef of uomDefinitions){
            const existing = await db.hms_uom.findFirst({
                where: {
                    tenant_id: tenantId,
                    company_id: companyId,
                    name: uomDef.name
                }
            });
            if (!existing) {
                await db.hms_uom.create({
                    data: {
                        id: crypto.randomUUID(),
                        tenant_id: tenantId,
                        company_id: companyId,
                        category_id: uomDef.categoryId,
                        name: uomDef.name,
                        uom_type: uomDef.type,
                        ratio: uomDef.ratio,
                        is_active: true
                    }
                });
                createdCount++;
            }
        }
        return {
            success: true,
            message: `Seeded ${createdCount} new UOMs`
        };
    } catch (error) {
        console.error("Error in internalSeedUOMs:", error);
        throw error;
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/services/tenant-init.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "initializeTenantMasters",
    ()=>initializeTenantMasters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$uom$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services/uom.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$uom$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$uom$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function initializeTenantMasters(tenantId, companyId, tx) {
    const db = tx || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"];
    console.log(`[TenantInit] Initializing masters for Tenant: ${tenantId}, Company: ${companyId}`);
    try {
        // 0. Seed Standard Departments (World-Class Comprehensive List)
        const deptCount = await db.hms_departments.count({
            where: {
                company_id: companyId
            }
        });
        if (deptCount === 0) {
            const standardDepartments = [
                {
                    name: 'Emergency & Trauma',
                    code: 'ER',
                    description: '24/7 emergency care'
                },
                {
                    name: 'Outpatient (OPD)',
                    code: 'OPD',
                    description: 'Outpatient consultations'
                },
                {
                    name: 'Inpatient (IPD)',
                    code: 'IPD',
                    description: 'In-patient wards'
                },
                {
                    name: 'Critical Care (ICU)',
                    code: 'ICU',
                    description: 'Critical care'
                },
                {
                    name: 'Operation Theatre',
                    code: 'OT',
                    description: 'Surgical procedures'
                },
                {
                    name: 'Radiological Imaging',
                    code: 'RAD',
                    description: 'Medical imaging'
                },
                {
                    name: 'Pathology Lab',
                    code: 'PATH',
                    description: 'Laboratory diagnostics'
                },
                {
                    name: 'Central Pharmacy',
                    code: 'PHAR',
                    description: 'Medication dispensing'
                },
                {
                    name: 'General Medicine',
                    code: 'GENMED',
                    description: 'Internal Medicine'
                },
                {
                    name: 'Pediatrics',
                    code: 'PED',
                    description: 'Child care'
                },
                {
                    name: 'Obstetrics & Gynae',
                    code: 'OBGYN',
                    description: 'Women care'
                },
                {
                    name: 'Cardiology',
                    code: 'CARD',
                    description: 'Heart care'
                }
            ];
            await db.hms_departments.createMany({
                data: standardDepartments.map((dept)=>({
                        id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                        tenant_id: tenantId,
                        company_id: companyId,
                        name: dept.name,
                        code: dept.code,
                        description: dept.description,
                        is_active: true
                    }))
            });
            console.log('[TenantInit] Seeded 12 Standard Departments');
        }
        // 1. Seed UOMs (Crucial for inventory/billing)
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$uom$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["internalSeedUOMs"])(tenantId, companyId, db);
        console.log('[TenantInit] Seeded UOMs');
        // 2. Seed Default Stock Location (Professional Standard)
        const locationCount = await db.hms_stock_location.count({
            where: {
                company_id: companyId
            }
        });
        if (locationCount === 0) {
            await db.hms_stock_location.create({
                data: {
                    id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                    tenant_id: tenantId,
                    company_id: companyId,
                    code: 'MAIN',
                    name: 'Main Store',
                    location_type: 'warehouse',
                    metadata: {
                        is_default: true
                    }
                }
            });
            console.log('[TenantInit] Seeded Default Stock Location');
        }
        // 3. Seed Standard HMS Roles (Physician, Nurse, etc. - in addition to RBAC roles)
        const roleCount = await db.hms_roles.count({
            where: {
                tenant_id: tenantId
            }
        });
        if (roleCount === 0) {
            const standardRoles = [
                "Physician",
                "Surgeon",
                "Nurse",
                "Radiologist",
                "Pathologist",
                "Anesthesiologist",
                "Physiotherapist",
                "Pharmacist",
                "Lab Technician",
                "Administrative Specialist"
            ];
            await db.hms_roles.createMany({
                data: standardRoles.map((name)=>({
                        id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                        tenant_id: tenantId,
                        company_id: companyId,
                        name,
                        is_clinical: true,
                        is_active: true
                    }))
            });
            console.log('[TenantInit] Seeded Standard HMS Roles');
        }
        // 4. Seed Standard Specializations
        const specCount = await db.hms_specializations.count({
            where: {
                tenant_id: tenantId
            }
        });
        if (specCount === 0) {
            const standardSpecs = [
                "Cardiology",
                "Neurology",
                "Pediatrics",
                "Orthopedics",
                "Gastroenterology",
                "Dermatology",
                "Psychiatry",
                "Ophthalmology",
                "ENT",
                "Oncology",
                "Urology",
                "Nephrology"
            ];
            await db.hms_specializations.createMany({
                data: standardSpecs.map((name)=>({
                        id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                        tenant_id: tenantId,
                        company_id: companyId,
                        name,
                        is_active: true
                    }))
            });
            console.log('[TenantInit] Seeded Standard Specializations');
        }
        // 5. Seed Placeholder Manufacturers
        const mfgCount = await db.hms_manufacturer.count({
            where: {
                company_id: companyId
            }
        });
        if (mfgCount === 0) {
            const commonMfgs = [
                "Pfizer",
                "Novartis",
                "Roche",
                "Merck",
                "GSK",
                "Sanofi",
                "AstraZeneca"
            ];
            await db.hms_manufacturer.createMany({
                data: commonMfgs.map((name)=>({
                        id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                        tenant_id: tenantId,
                        company_id: companyId,
                        name: name,
                        is_active: true
                    }))
            });
            console.log('[TenantInit] Seeded Placeholder Manufacturers');
        }
        return {
            success: true
        };
    } catch (error) {
        console.error('[TenantInit] Critical failure during master seeding:', error);
        // We don't throw here to avoid blocking signup, 
        // but in a world-class system we might want to log this for manual intervention
        return {
            success: false,
            error
        };
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/currency-constants.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Centralized Currency Constants
 * 
 * Shared between client and server components.
 * Default values can be overridden via environment variables.
 */ __turbopack_context__.s([
    "CURRENCY_CODES",
    ()=>CURRENCY_CODES,
    "CURRENCY_SYMBOLS",
    ()=>CURRENCY_SYMBOLS,
    "SYSTEM_DEFAULT_CURRENCY_CODE",
    ()=>SYSTEM_DEFAULT_CURRENCY_CODE,
    "SYSTEM_DEFAULT_CURRENCY_SYMBOL",
    ()=>SYSTEM_DEFAULT_CURRENCY_SYMBOL
]);
const SYSTEM_DEFAULT_CURRENCY_CODE = typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_DEFAULT_CURRENCY_CODE || 'INR' : 'INR';
const SYSTEM_DEFAULT_CURRENCY_SYMBOL = typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_DEFAULT_CURRENCY_SYMBOL || '₹' : '₹';
const CURRENCY_SYMBOLS = {
    'IN': '₹',
    'US': '$',
    'GB': '£',
    'EU': '€',
    'AE': 'AED',
    'SA': 'SAR',
    'AU': 'A$',
    'CA': 'C$',
    'SG': 'S$'
};
const CURRENCY_CODES = {
    'IN': 'INR',
    'US': 'USD',
    'GB': 'GBP',
    'EU': 'EUR',
    'AE': 'AED',
    'SA': 'SAR',
    'AU': 'AUD',
    'CA': 'CAD',
    'SG': 'SGD'
};
}),
"[project]/src/lib/account-seeder.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ensureDefaultAccounts",
    ()=>ensureDefaultAccounts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
async function ensureDefaultAccounts(companyId, tenantId) {
    // 1. Determine Tax Terminology based on Country
    const company = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].company.findUnique({
        where: {
            id: companyId
        },
        include: {
            countries: true
        }
    });
    let taxLabel = "Tax";
    const countryName = company?.countries?.name?.toLowerCase() || '';
    if (countryName.includes('india') || countryName.includes('canada') || countryName.includes('australia')) {
        taxLabel = "GST";
    } else if (countryName.includes('united kingdom') || countryName.includes('uae') || countryName.includes('europe')) {
        taxLabel = "VAT";
    } else if (countryName.includes('usa') || countryName.includes('united states')) {
        taxLabel = "Sales Tax";
    }
    // 2. Fetch existing accounts to check what is missing
    const existingAccounts = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].accounts.findMany({
        where: {
            company_id: companyId
        },
        select: {
            code: true
        }
    });
    const existingCodes = new Set(existingAccounts.map((a)=>a.code || ''));
    // 3. Define Standard COA Template (1000-8999 range)
    const templates = [
        // ASSETS (1000-1999)
        {
            code: '1000',
            name: 'Fixed Assets',
            type: 'Asset',
            isGroup: true
        },
        {
            code: '1010',
            name: 'Office Equipment',
            type: 'Asset',
            parentCode: '1000'
        },
        {
            code: '1020',
            name: 'Medical Equipment',
            type: 'Asset',
            parentCode: '1000'
        },
        {
            code: '1030',
            name: 'Furniture & Fixtures',
            type: 'Asset',
            parentCode: '1000'
        },
        {
            code: '1500',
            name: 'Current Assets',
            type: 'Asset',
            isGroup: true
        },
        {
            code: '1600',
            name: 'Cash on Hand',
            type: 'Asset',
            parentCode: '1500',
            isGroup: true
        },
        {
            code: '1700',
            name: 'Bank Accounts',
            type: 'Asset',
            parentCode: '1500',
            isGroup: true
        },
        {
            code: '1710',
            name: 'Bank Account - Primary',
            type: 'Asset',
            parentCode: '1700'
        },
        {
            code: '1610',
            name: 'Cash',
            type: 'Asset',
            parentCode: '1600'
        },
        {
            code: '1800',
            name: 'Sundry Debtors',
            type: 'Asset',
            parentCode: '1500',
            isGroup: true
        },
        {
            code: '1810',
            name: 'Accounts Receivable (Patients)',
            type: 'Asset',
            parentCode: '1800'
        },
        {
            code: '1820',
            name: 'Insurance Debtors',
            type: 'Asset',
            parentCode: '1800'
        },
        {
            code: '1830',
            name: 'Corporate Debtors',
            type: 'Asset',
            parentCode: '1800'
        },
        {
            code: '1900',
            name: 'Inventory / Stock',
            type: 'Asset',
            parentCode: '1500',
            isGroup: true
        },
        // LIABILITIES (2000-2999)
        {
            code: '2000',
            name: 'Current Liabilities',
            type: 'Liability',
            isGroup: true
        },
        {
            code: '2100',
            name: 'Sundry Creditors',
            type: 'Liability',
            parentCode: '2000',
            isGroup: true
        },
        {
            code: '2110',
            name: 'Accounts Payable (Vendors)',
            type: 'Liability',
            parentCode: '2100'
        },
        {
            code: '2120',
            name: 'Accrued Expenses',
            type: 'Liability',
            parentCode: '2000'
        },
        {
            code: '2200',
            name: `${taxLabel} Duties & Taxes`,
            type: 'Liability',
            parentCode: '2000',
            isGroup: true
        },
        {
            code: '2210',
            name: `${taxLabel} Output (Collected)`,
            type: 'Liability',
            parentCode: '2200'
        },
        {
            code: '2220',
            name: `${taxLabel} Input (Paid)`,
            type: 'Liability',
            parentCode: '2200'
        },
        {
            code: '2300',
            name: 'Salaries Payable',
            type: 'Liability',
            parentCode: '2000'
        },
        // EQUITY (3000-3999)
        {
            code: '3000',
            name: 'Owner Capital / Equity',
            type: 'Equity',
            isGroup: true
        },
        {
            code: '3200',
            name: 'Retained Earnings',
            type: 'Equity'
        },
        // REVENUE (4000-4999)
        {
            code: '4000',
            name: 'Direct Income (Revenue)',
            type: 'Revenue',
            isGroup: true
        },
        {
            code: '4010',
            name: 'Patient Consultation Fees',
            type: 'Revenue',
            parentCode: '4000'
        },
        {
            code: '4100',
            name: 'Lab Test Revenue',
            type: 'Revenue',
            parentCode: '4000'
        },
        {
            code: '4200',
            name: 'Pharmacy Sales',
            type: 'Revenue',
            parentCode: '4000'
        },
        {
            code: '4300',
            name: 'Procedure / Surgery Charges',
            type: 'Revenue',
            parentCode: '4000'
        },
        {
            code: '4900',
            name: 'Other Income',
            type: 'Revenue'
        },
        {
            code: '4950',
            name: 'Purchase Discounts',
            type: 'Revenue'
        },
        // EXPENSES (5000-8999)
        {
            code: '5000',
            name: 'Direct Expenses (COGS)',
            type: 'Expense',
            isGroup: true
        },
        {
            code: '5100',
            name: 'Cost of Goods Sold',
            type: 'Expense',
            parentCode: '5000'
        },
        {
            code: '5200',
            name: 'Inventory Shrinkage',
            type: 'Expense',
            parentCode: '5000'
        },
        {
            code: '6000',
            name: 'Indirect Expenses (Admin)',
            type: 'Expense',
            isGroup: true
        },
        {
            code: '6010',
            name: 'Rent',
            type: 'Expense',
            parentCode: '6000'
        },
        {
            code: '6020',
            name: 'Utilities (Elec/Water)',
            type: 'Expense',
            parentCode: '6000'
        },
        {
            code: '6030',
            name: 'Telephone & Internet',
            type: 'Expense',
            parentCode: '6000'
        },
        {
            code: '6040',
            name: 'Printing & Stationery',
            type: 'Expense',
            parentCode: '6000'
        },
        {
            code: '6600',
            name: 'Personnel Expenses',
            type: 'Expense',
            isGroup: true
        },
        {
            code: '6610',
            name: 'Staff Salaries',
            type: 'Expense',
            parentCode: '6600'
        },
        {
            code: '6620',
            name: 'Staff Welfare',
            type: 'Expense',
            parentCode: '6600'
        }
    ];
    const missing = templates.filter((t)=>!existingCodes.has(t.code));
    if (missing.length > 0) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].accounts.createMany({
            data: missing.map((acc)=>({
                    company_id: companyId,
                    tenant_id: tenantId,
                    code: acc.code,
                    name: acc.name,
                    type: acc.type,
                    is_active: true,
                    is_group: acc.isGroup || false,
                    is_reconcilable: [
                        '1200',
                        '1210',
                        '1220',
                        '2001'
                    ].includes(acc.code)
                })),
            skipDuplicates: true
        });
    }
    // Always ensure parent-child links are established (even for existing accounts)
    const allAccounts = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].accounts.findMany({
        where: {
            company_id: companyId
        }
    });
    const accountMap = new Map(allAccounts.map((a)=>[
            a.code,
            a.id
        ]));
    for (const t of templates){
        const childId = accountMap.get(t.code);
        if (!childId) continue;
        const updateData = {
            is_group: t.isGroup || false
        };
        if (t.parentCode) {
            const parentId = accountMap.get(t.parentCode);
            if (parentId) {
                updateData.parent_id = parentId;
            }
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].accounts.update({
            where: {
                id: childId
            },
            data: updateData
        });
    }
    // 6. Ensure Company Accounting Settings exist and are linked to default accounts
    const settings = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].company_accounting_settings.findUnique({
        where: {
            company_id: companyId
        }
    });
    const findId = (code)=>accountMap.get(code);
    if (!settings) {
        // Find currency from company_settings if not passed
        const companySettings = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].company_settings.findUnique({
            where: {
                company_id: companyId
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].company_accounting_settings.create({
            data: {
                tenant_id: tenantId,
                company_id: companyId,
                currency_id: companySettings?.currency_id || undefined,
                ar_account_id: findId('1200'),
                ap_account_id: findId('2000') || findId('2001'),
                sales_account_id: findId('4000'),
                purchase_account_id: findId('5000') || findId('5100'),
                output_tax_account_id: findId('2200'),
                input_tax_account_id: findId('2210'),
                fiscal_year_start: new Date(new Date().getFullYear(), 3, 1),
                fiscal_year_end: new Date(new Date().getFullYear() + 1, 2, 31)
            }
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"0084944294869cb8b4434babef93dc48d5753dadf6":"logout","606e3e7a5e134743dc9da6334a1f1334fef80e91dd":"signup"},"",""] */ __turbopack_context__.s([
    "logout",
    ()=>logout,
    "signup",
    ()=>signup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$tenant$2d$init$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services/tenant-init.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2d$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/currency-constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/account-seeder.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$tenant$2d$init$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$tenant$2d$init$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
async function logout() {
    console.log("[Auth Action] Logging out...");
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"])({
            redirectTo: '/login'
        });
    } catch (err) {
        // Next.js redirects act as errors, so we need to rethrow them if it's a redirect
        if (err.message === 'NEXT_REDIRECT') {
            throw err;
        }
        console.error("[Auth Action] Logout failed:", err);
        throw err;
    }
}
async function signup(prevState, formData) {
    const rawData = Object.fromEntries(formData.entries());
    const email = (rawData.email || '').toLowerCase();
    const password = rawData.password;
    const name = rawData.name;
    const companyName = rawData.companyName;
    const countryId = rawData.countryId;
    const currencyId = rawData.currencyId;
    const industry = rawData.industry;
    const selectedModules = (rawData.modules || '').split(',').filter(Boolean);
    const taxId = rawData.taxId// Optional tax ID if they selected one
    ;
    if (!email || !password || !name || !companyName) {
        return {
            error: "Missing required fields"
        };
    }
    try {
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].app_user.findFirst({
            where: {
                email
            }
        });
        const inputCountryId = rawData.countryId;
        let resolvedCountryId = inputCountryId;
        // Defensive check: if countryId is an ISO code (e.g. "IN"), resolve it to UUID
        if (countryId && (countryId.length === 2 || countryId.length === 3)) {
            const countryDoc = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].countries.findFirst({
                where: {
                    OR: [
                        {
                            iso2: countryId
                        },
                        {
                            iso3: countryId
                        }
                    ]
                },
                select: {
                    id: true
                }
            });
            if (countryDoc) resolvedCountryId = countryDoc.id;
            else resolvedCountryId = ""; // Invalid ISO code
        }
        const inputCurrencyId = rawData.currencyId;
        let resolvedCurrencyId = inputCurrencyId;
        // Defensive check: if currencyId is a code (e.g. "INR"), resolve it to UUID
        if (currencyId && currencyId.length === 3 && !/^[0-9a-fA-F-]{36}$/.test(currencyId)) {
            const currencyDoc = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].currencies.findFirst({
                where: {
                    code: currencyId
                },
                select: {
                    id: true
                }
            });
            if (currencyDoc) resolvedCurrencyId = currencyDoc.id;
        }
        if (existing) return {
            error: "User already exists"
        };
        const tenantId = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID();
        const companyId = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID();
        const branchId = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID();
        const userId = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID();
        // [NEW] Resolve Currency Code for Seeding (Dynamic - No Hardcoding)
        let resolvedCurrencyCode = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2d$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYSTEM_DEFAULT_CURRENCY_CODE"];
        if (resolvedCurrencyId) {
            const cur = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].currencies.findUnique({
                where: {
                    id: resolvedCurrencyId
                },
                select: {
                    code: true
                }
            });
            if (cur) resolvedCurrencyCode = cur.code;
        }
        // PHASE 1: CORE IDENTITY (Sequential - bypassing transaction for pooler stability)
        console.log(`[AUTH] Starting Core Creation for ${email}`);
        // 1. Create Tenant
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].tenant.create({
            data: {
                id: tenantId,
                name: `${companyName} (Tenant)`,
                slug: companyName.toLowerCase().replace(/[^a-z0-9]/g, '-')
            }
        });
        // 2. Create Company
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].company.create({
            data: {
                id: companyId,
                tenant_id: tenantId,
                name: companyName,
                country_id: resolvedCountryId || undefined,
                industry: industry,
                enabled: true
            }
        });
        // 3. Create Default Main Branch
        const isHms = selectedModules.includes('hms');
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_branch.create({
            data: {
                id: branchId,
                tenant_id: tenantId,
                company_id: companyId,
                name: isHms ? "Main Clinic" : "Head Office",
                code: "MAIN",
                is_active: true,
                type: isHms ? "clinic" : "office"
            }
        });
        // 4. Create App User
        const hashedPassword = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].app_user.create({
            data: {
                id: userId,
                tenant_id: tenantId,
                company_id: companyId,
                current_branch_id: branchId,
                email: email.toLowerCase(),
                password: hashedPassword,
                name: name,
                is_admin: true,
                is_active: true
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user_branch.create({
            data: {
                user_id: userId,
                branch_id: branchId,
                is_default: true
            }
        });
        // 5. Create Default Roles
        const superAdminRoleId = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID();
        const defaultRoles = [
            {
                id: superAdminRoleId,
                key: 'super_admin',
                name: 'Super Administrator',
                permissions: [
                    '*'
                ]
            },
            {
                key: 'admin',
                name: 'Administrator',
                permissions: [
                    'users:view',
                    'users:create',
                    'users:edit',
                    'hms:admin',
                    'crm:admin'
                ]
            },
            {
                key: 'hms_admin',
                name: 'HMS Administrator',
                permissions: [
                    'hms:view',
                    'patients:view',
                    'billing:view'
                ]
            },
            {
                key: 'doctor',
                name: 'Doctor',
                permissions: [
                    'patients:view',
                    'appointments:view',
                    'prescriptions:create'
                ]
            },
            {
                key: 'nurse',
                name: 'Nurse',
                permissions: [
                    'patients:view',
                    'vitals:create'
                ]
            },
            {
                key: 'receptionist',
                name: 'Receptionist',
                permissions: [
                    'patients:create',
                    'appointments:create',
                    'billing:create'
                ]
            },
            {
                key: 'sales_executive',
                name: 'Sales Executive',
                permissions: [
                    'crm:view_own',
                    'leads:create'
                ]
            }
        ];
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].role.createMany({
            data: defaultRoles.map((r)=>({
                    id: r.id || __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                    tenant_id: tenantId,
                    key: r.key,
                    name: r.name,
                    permissions: r.permissions
                }))
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user_role.create({
            data: {
                id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                user_id: userId,
                role_id: superAdminRoleId,
                tenant_id: tenantId
            }
        });
        // PHASE 2: DOMAIN INITIALIZATION (Background/Secondary)
        console.log(`[AUTH] Core Creation Successful. Starting Background Init for ${email}`);
        try {
            // 6. Settings & Tax
            if (resolvedCurrencyId) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].company_settings.create({
                    data: {
                        tenant_id: tenantId,
                        company_id: companyId,
                        currency_id: resolvedCurrencyId
                    }
                });
                if (resolvedCountryId) {
                    const defaultMappings = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].country_tax_mappings.findMany({
                        where: {
                            country_id: resolvedCountryId,
                            is_active: true
                        }
                    });
                    if (defaultMappings.length > 0) {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].company_tax_maps.createMany({
                            data: defaultMappings.map((dm)=>({
                                    id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                                    tenant_id: tenantId,
                                    company_id: companyId,
                                    country_id: resolvedCountryId,
                                    tax_type_id: dm.tax_type_id,
                                    tax_rate_id: dm.tax_rate_id,
                                    is_default: false,
                                    is_active: true
                                }))
                        });
                    }
                }
            }
            // 7. Chart of Accounts (World-Standard Seeding)
            if (resolvedCurrencyId) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureDefaultAccounts"])(companyId, tenantId);
            }
            // 8. Modules
            let modulesToEnable = new Set([
                'system',
                ...selectedModules
            ]);
            const validModules = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].modules.findMany({
                where: {
                    module_key: {
                        in: Array.from(modulesToEnable)
                    }
                }
            });
            if (validModules.length > 0) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].tenant_module.createMany({
                    data: validModules.map((m)=>({
                            id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                            tenant_id: tenantId,
                            module_key: m.module_key,
                            module_id: m.id,
                            enabled: true
                        })),
                    skipDuplicates: true
                });
            }
            // 9. Master Seeding (Standard UOMs, Roles, etc.)
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$tenant$2d$init$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initializeTenantMasters"])(tenantId, companyId, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"]);
            const { seedCompanyTaxes } = await __turbopack_context__.A("[project]/src/lib/services/tax-seed.ts [app-rsc] (ecmascript, async loader)");
            await seedCompanyTaxes(companyId, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"]);
            // 10. Default Products (HMS Only)
            if (modulesToEnable.has('hms')) {
                const standardProducts = [
                    {
                        sku: 'REG-FEE',
                        name: 'Patient Registration Fee',
                        uom: 'EACH',
                        price: 100,
                        is_service: true,
                        stockable: false
                    },
                    {
                        sku: 'CONS-GEN',
                        name: 'General Consultation',
                        uom: 'VISIT',
                        price: 250,
                        is_service: true,
                        stockable: false
                    },
                    {
                        sku: 'CONS-SPEC',
                        name: 'Specialist Consultation',
                        uom: 'VISIT',
                        price: 500,
                        is_service: true,
                        stockable: false
                    },
                    {
                        sku: 'PARA-500',
                        name: 'Paracetamol 500mg',
                        uom: 'TAB',
                        price: 5,
                        is_service: false,
                        stockable: true
                    },
                    {
                        sku: 'AMOX-500',
                        name: 'Amoxicillin 500mg Strip',
                        uom: 'STRIP',
                        price: 85,
                        is_service: false,
                        stockable: true
                    },
                    {
                        sku: 'SYR-5ML',
                        name: 'Disposable Syringe 5ml',
                        uom: 'PCS',
                        price: 15,
                        is_service: false,
                        stockable: true
                    },
                    {
                        sku: 'CBC-TEST',
                        name: 'Complete Blood Count (CBC)',
                        uom: 'TEST',
                        price: 450,
                        is_service: true,
                        stockable: false
                    },
                    {
                        sku: 'CXR-SCAN',
                        name: 'Chest X-Ray',
                        uom: 'SCAN',
                        price: 1200,
                        is_service: true,
                        stockable: false
                    }
                ];
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product.createMany({
                    data: standardProducts.map((p)=>({
                            id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                            tenant_id: tenantId,
                            company_id: companyId,
                            sku: p.sku,
                            name: p.name,
                            is_service: p.is_service,
                            is_stockable: p.stockable,
                            price: p.price,
                            currency: resolvedCurrencyCode,
                            is_active: true,
                            uom: p.uom,
                            metadata: {
                                tax_exempt: true
                            }
                        }))
                });
            }
        } catch (initError) {
            console.error("[AUTH] Domain Initialization failed, but User exists:", initError);
        }
        return {
            success: true
        };
    } catch (error) {
        // WORLD-CLASS ERROR REPORTING: Prevent generic 500s
        const err = error;
        console.error("[AUTH] Fatal signup error:", err);
        return {
            error: `Registration failed: ${err.message || "Unknown error"}. Please check server logs for Digest: 1401391270 correlate.`
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    logout,
    signup
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logout, "0084944294869cb8b4434babef93dc48d5753dadf6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signup, "606e3e7a5e134743dc9da6334a1f1334fef80e91dd", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions/settings.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"0017bc7bd76d12c4fa0332c041f8dc72f971161904":"getPaymentMappings","00e1e20b68fcf111e2adb0663e0e74e48a42a2e964":"getHMSSettings","00ee7cb30127714f93eb99d84e6378a1b9d5f71a82":"getUserProfile","401fbfa1dcf731b9d7863ef7a624aabc6f9c601520":"updateGlobalSettings","4031046d1e88ab01ac04a97d7373e9b675b9b2102e":"updateHMSSettings","4033f0ad3178ccda49f8634ca8f6313b462889bdb0":"updateWhatsAppSettings","405d8eea04931e98fb50c32271a9ab145ae6f8d465":"createDesignation","4098cc338ddde8532ea628809839b63f72ed6e703e":"updatePaymentGatewaySettings","40a7cbc7ead7d5b16b572a614a4c8efe2adb0bc2aa":"updatePDFSettings","40a8bd885a0cd875baf554e077e97cf0bb7d9b36b6":"updateTenantSettings","40c1ce8bac6bd0294860e6dbb06e4ca911bd121437":"createBranch","40c78bda30257384bf051704051785bf4620f8ae50":"getDesignation","40ce49ea4b7050e0573cddcba444e4d9ead38f4ab9":"updatePaymentMappings","40f5ad1ddc48abb6f590059867aca153fb43763d61":"deleteDesignation","6003ffc1bf6ab8e030685a3abb1a7068aa1ba3b43c":"updateBranch","600c71b7b282fbbb6d8a0e50a2d2a6f639c02fa506":"getPDFSettings","604fe2a8b690164f5a32f5338e5b0d30ffabfde0c0":"getPaymentGatewayConfig","6061fbcb1a881f4e8692dead2c43587d3634d83fe1":"getWhatsAppSettings","60660fbc726854ba5c95d6c1506c1006864e56857e":"getPDFConfig","60825e363deb70c92d1882c2041a21532c1b8cea9a":"getWhatsAppConfig","60978e108f0c867559c6c352cdc1209191fb6cd822":"updateDesignation","60af4c4a57d0c5c26681b16bf66e53126bb318bbab":"updateProfile","60fdc4f0ccdb38a549b5cb4bebf4efac172e58c775":"getPaymentGatewaySettings"},"",""] */ __turbopack_context__.s([
    "createBranch",
    ()=>createBranch,
    "createDesignation",
    ()=>createDesignation,
    "deleteDesignation",
    ()=>deleteDesignation,
    "getDesignation",
    ()=>getDesignation,
    "getHMSSettings",
    ()=>getHMSSettings,
    "getPDFConfig",
    ()=>getPDFConfig,
    "getPDFSettings",
    ()=>getPDFSettings,
    "getPaymentGatewayConfig",
    ()=>getPaymentGatewayConfig,
    "getPaymentGatewaySettings",
    ()=>getPaymentGatewaySettings,
    "getPaymentMappings",
    ()=>getPaymentMappings,
    "getUserProfile",
    ()=>getUserProfile,
    "getWhatsAppConfig",
    ()=>getWhatsAppConfig,
    "getWhatsAppSettings",
    ()=>getWhatsAppSettings,
    "updateBranch",
    ()=>updateBranch,
    "updateDesignation",
    ()=>updateDesignation,
    "updateGlobalSettings",
    ()=>updateGlobalSettings,
    "updateHMSSettings",
    ()=>updateHMSSettings,
    "updatePDFSettings",
    ()=>updatePDFSettings,
    "updatePaymentGatewaySettings",
    ()=>updatePaymentGatewaySettings,
    "updatePaymentMappings",
    ()=>updatePaymentMappings,
    "updateProfile",
    ()=>updateProfile,
    "updateTenantSettings",
    ()=>updateTenantSettings,
    "updateWhatsAppSettings",
    ()=>updateWhatsAppSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
// === HMS SETTINGS LOGIC ===
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/rbac.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
async function updateProfile(prevState, formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id) {
        return {
            error: "Not authenticated"
        };
    }
    const name = formData.get('name');
    const email = formData.get('email');
    const avatarUrl = formData.get('avatar_url');
    // Basic Validation
    if (!name || name.length < 2) {
        return {
            error: "Name must be at least 2 characters"
        };
    }
    try {
        // Update user
        // We might want to update email, but that usually requires verification. 
        // For now, let's allow updating name and avatar (metadata).
        // If email is changed, we should probably check uniqueness, but let's stick to name/avatar for MVP "production ready" visual.
        const updateData = {
            name
        };
        // Handle Avatar
        if (avatarUrl) {
            // SECURITY: Prevent massive base64 strings from bloating DB and Cookies
            if (avatarUrl.length > 1000000) {
                return {
                    error: "Image is too large. Please use a smaller photo (max 1MB)"
                };
            }
            // Fetch current metadata to merge
            const currentUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].app_user.findUnique({
                where: {
                    id: session.user.id
                },
                select: {
                    metadata: true
                }
            });
            const currentMeta = currentUser?.metadata || {};
            updateData.metadata = {
                ...currentMeta,
                avatar_url: avatarUrl
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].app_user.update({
            where: {
                id: session.user.id
            },
            data: updateData
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/settings/profile');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/', 'layout'); // Update sidebar avatar
        return {
            success: true,
            message: "Profile updated successfully"
        };
    } catch (error) {
        console.error("Profile update error:", error);
        return {
            error: "Failed to update profile"
        };
    }
}
async function getUserProfile() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id) return null;
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].app_user.findUnique({
        where: {
            id: session.user.id
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            metadata: true,
            created_at: true
        }
    });
    return user;
}
async function updateGlobalSettings(data) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id) return {
        error: "Not authenticated"
    };
    // Basic RBAC check
    if (!session.user.isAdmin && !session.user.isTenantAdmin) {
    // return { error: "Unauthorized" }
    }
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
            // Fetch current metadata to merge
            const currentCompany = await tx.company.findUnique({
                where: {
                    id: data.companyId
                },
                select: {
                    metadata: true
                }
            });
            const currentMeta = currentCompany?.metadata || {};
            // Update Company Basics & Metadata
            await tx.company.update({
                where: {
                    id: data.companyId
                },
                data: {
                    name: data.name,
                    industry: data.industry,
                    logo_url: data.logoUrl,
                    metadata: {
                        ...currentMeta,
                        address: data.address,
                        phone: data.phone,
                        email: data.email,
                        gstin: data.gstin
                    }
                }
            });
            // Update Company Settings (Currency)
            // Upsert because it might not exist
            // Update Company Settings (Currency & Invoice Prefix)
            // Upsert because it might not exist
            const existingSettings = await tx.company_settings.findUnique({
                where: {
                    company_id: data.companyId
                }
            });
            if (existingSettings) {
                await tx.company_settings.update({
                    where: {
                        id: existingSettings.id
                    },
                    data: {
                        currency_id: data.currencyId,
                        numbering_prefix: data.invoicePrefix
                    }
                });
            } else {
                // Should exist ideally, but fallback create
                await tx.company_settings.create({
                    data: {
                        tenant_id: session.user.tenantId,
                        company_id: data.companyId,
                        currency_id: data.currencyId,
                        numbering_prefix: data.invoicePrefix || 'INV'
                    }
                });
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/settings/global');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/', 'layout'); // Update logo in sidebar
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to update global settings:", error);
        return {
            error: "Failed to update settings"
        };
    }
}
async function updateTenantSettings(data) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id || !session.user.isTenantAdmin) {
        return {
            error: "Unauthorized. Tenant Admin access required."
        };
    }
    try {
        // Fetch current tenant for metadata
        const currentTenant = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].tenant.findUnique({
            where: {
                id: data.tenantId
            }
        });
        const currentMeta = currentTenant?.metadata || {};
        // Only allow updating registration_enabled if the user is a Global Admin (Developer)
        const updatedMeta = {
            ...currentMeta
        };
        if (session.user.isAdmin && data.registrationEnabled !== undefined) {
            updatedMeta.registration_enabled = data.registrationEnabled;
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].tenant.update({
            where: {
                id: data.tenantId
            },
            data: {
                app_name: data.appName,
                logo_url: data.logoUrl,
                db_url: data.dbUrl,
                metadata: updatedMeta
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/settings/global');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/', 'layout');
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to update tenant settings:", error);
        return {
            error: "Failed to update tenant settings. Please check your DB connection string format."
        };
    }
}
;
async function getHMSSettings() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId || !session?.user?.tenantId) return {
        error: "Unauthorized"
    };
    try {
        const companyId = session.user.companyId;
        const tenantId = session.user.tenantId;
        // 1. Fetch Registration Fee Product (Master definition)
        let regFeeProduct = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product.findFirst({
            where: {
                company_id: companyId,
                name: {
                    contains: 'Registration Fee',
                    mode: 'insensitive'
                },
                is_active: true
            }
        });
        if (!regFeeProduct) {
            regFeeProduct = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product.findFirst({
                where: {
                    company_id: companyId,
                    name: {
                        contains: 'Registration',
                        mode: 'insensitive'
                    },
                    description: {
                        contains: 'fee',
                        mode: 'insensitive'
                    },
                    is_active: true
                }
            });
        }
        const finalProduct = regFeeProduct;
        // 2. Fetch HMS Specific Settings (Config JSON)
        const hmsConfigRecord = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.findFirst({
            where: {
                company_id: companyId,
                tenant_id: tenantId,
                key: 'registration_config'
            }
        });
        const configData = hmsConfigRecord?.value || {};
        // 3. Fetch Registration Fee History (The "Amount and Date" part)
        const feeHistory = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_patient_registration_fees.findMany({
            where: {
                tenant_id: tenantId,
                company_id: companyId
            },
            orderBy: {
                created_at: 'desc'
            },
            take: 20
        });
        const activeFee = feeHistory.find((f)=>f.is_active);
        console.log(`HMS Settings Audit [${companyId}]: Found ${feeHistory.length} history records, active=${!!activeFee}`);
        // 4. Finalize Fee (Priority: Active Table Entry > Config JSON Value > Product Price > Fallback 100)
        let finalFee = 100;
        if (activeFee) {
            finalFee = Number(activeFee.fee_amount);
        } else if (configData.fee !== undefined) {
            finalFee = Number(configData.fee);
        } else if (finalProduct) {
            finalFee = Number(finalProduct.price || '100');
        }
        // 4. Fetch All Available Service Products (for mapping)
        const availableProducts = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product.findMany({
            where: {
                company_id: companyId,
                is_service: true,
                is_active: true
            },
            select: {
                id: true,
                name: true,
                sku: true,
                price: true
            },
            orderBy: {
                name: 'asc'
            }
        });
        const serializedProducts = availableProducts.map((p)=>({
                ...p,
                price: Number(p.price || 0)
            }));
        return {
            success: true,
            settings: {
                registrationFee: finalFee,
                registrationProductId: configData.productId || finalProduct?.id || null,
                registrationProductName: finalProduct?.name || 'Patient Registration Fee',
                registrationProductDescription: finalProduct?.description || 'Standard Registration Service',
                registrationValidity: activeFee?.validity_days || configData.validity || 7,
                enableCardIssuance: configData.enableCardIssuance ?? true,
                consultationBillingMode: configData.consultationBillingMode || 'post_visit',
                defaultDoctorId: configData.defaultDoctorId || null,
                feeHistory: feeHistory.map((f)=>({
                        id: f.id,
                        amount: Number(f.fee_amount),
                        validity: f.validity_days,
                        active: f.is_active,
                        date: f.created_at
                    }))
            },
            availableProducts: serializedProducts
        };
    } catch (error) {
        return {
            error: error.message
        };
    }
}
async function updateHMSSettings(data) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    const companyId = session?.user?.companyId;
    const tenantId = session?.user?.tenantId;
    const userId = session?.user?.id;
    if (!companyId || !tenantId) {
        return {
            error: "Session expired. Please log in again."
        };
    }
    // Permission Check
    const canManage = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkPermission"])('hms:admin');
    if (!canManage) {
        return {
            error: "Unauthorized: You do not have permission to manage clinical settings."
        };
    }
    try {
        const feeAmount = parseFloat(String(data.registrationFee || '0'));
        const validityDays = parseInt(String(data.registrationValidity || '7'));
        console.log(`[HMS SAVE DIAGNOSTIC] User: ${userId} | Co: ${companyId} | Ten: ${tenantId}`);
        console.log(`[HMS SAVE DIAGNOSTIC] Types: Co=${typeof companyId} | Ten=${typeof tenantId} | User=${typeof userId}`);
        console.log(`[HMS SAVE DIAGNOSTIC] Data: Fee=${feeAmount} | Valid=${validityDays}`);
        if (isNaN(feeAmount) || isNaN(validityDays)) {
            return {
                error: "Invalid registration fee or validity period."
            };
        }
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
            // STEP 1: Manage the Registration Fee Product
            let regProduct = null;
            // 1a. Check if an explicit product was selected in the UI
            if (data.productId && data.productId.length > 20) {
                console.log(`[HMS SETTINGS SAVE] Using explicitly selected product: ${data.productId}`);
                regProduct = await tx.hms_product.findUnique({
                    where: {
                        id: data.productId
                    }
                });
            }
            // 1b. If no explicit product (or not found), find/create standard SKU
            if (!regProduct) {
                const branchSuffix = companyId.slice(-6).toUpperCase();
                const targetSku = `REG-FEE-${branchSuffix}`;
                regProduct = await tx.hms_product.findFirst({
                    where: {
                        company_id: companyId,
                        OR: [
                            {
                                sku: targetSku
                            },
                            {
                                sku: {
                                    startsWith: 'REG-FEE'
                                }
                            },
                            {
                                name: {
                                    contains: 'Registration Fee',
                                    mode: 'insensitive'
                                }
                            }
                        ]
                    }
                });
                if (regProduct) {
                    console.log(`[HMS SETTINGS SAVE] Updating existing product: ${regProduct.id} (${regProduct.sku})`);
                    regProduct = await tx.hms_product.update({
                        where: {
                            id: regProduct.id
                        },
                        data: {
                            price: feeAmount,
                            sku: targetSku,
                            is_service: true,
                            is_stockable: false,
                            is_active: true,
                            updated_at: new Date()
                        }
                    });
                } else {
                    console.log(`[HMS SETTINGS SAVE] Creating new Registration Fee product for company ${companyId}`);
                    regProduct = await tx.hms_product.create({
                        data: {
                            tenant_id: tenantId,
                            company_id: companyId,
                            name: "Patient Registration Fee",
                            sku: targetSku,
                            description: "Standard fee for new patient registration",
                            price: feeAmount,
                            is_service: true,
                            is_stockable: false,
                            uom: 'unit',
                            is_active: true,
                            created_at: new Date()
                        }
                    });
                }
            } else {
                // UPDATE EXPLICIT PRODUCT price to match the setting
                regProduct = await tx.hms_product.update({
                    where: {
                        id: regProduct.id
                    },
                    data: {
                        price: feeAmount,
                        is_service: true,
                        is_active: true,
                        updated_at: new Date()
                    }
                });
            }
            // STEP 2: Manage HMS Configuration JSON (Reset & Create Pattern)
            const configValue = JSON.stringify({
                validity: validityDays,
                enableCardIssuance: !!data.enableCardIssuance,
                consultationBillingMode: data.consultationBillingMode || 'post_visit',
                fee: feeAmount,
                productId: regProduct.id,
                defaultDoctorId: data.defaultDoctorId || null,
                lastUpdated: new Date().toISOString()
            });
            console.log(`[HMS SETTINGS SAVE] Wiping old config for ${companyId}`);
            // Delete any existing config for this company to avoid unique constraint issues
            await tx.hms_settings.deleteMany({
                where: {
                    tenant_id: tenantId,
                    company_id: companyId,
                    key: 'registration_config'
                }
            });
            console.log(`[HMS SETTINGS SAVE] Creating fresh config via Raw SQL for ${companyId}`);
            // USE RAW SQL to bypass any Prisma mapping bugs or null constraint false-positives
            const configId = (await tx.$queryRaw`SELECT gen_random_uuid()`)[0].gen_random_uuid;
            await tx.$executeRaw`
                INSERT INTO hms_settings (
                    id, tenant_id, company_id, key, value, scope, version, is_active, created_at, updated_at, created_by, updated_by
                ) VALUES (
                    ${configId}::uuid, ${tenantId}::uuid, ${companyId}::uuid, 'registration_config', ${configValue}::jsonb, 'company', 1, true, now(), now(), ${userId}::uuid, ${userId}::uuid
                )
            `;
            console.log(`[HMS SETTINGS SAVE] Created config ID: ${configId}`);
            // STEP 3: Log Fee History (Audit Trail)
            // Deactivate all old fees for this branch
            await tx.hms_patient_registration_fees.updateMany({
                where: {
                    company_id: companyId,
                    is_active: true
                },
                data: {
                    is_active: false,
                    updated_at: new Date()
                }
            });
            // Create new audit record with explicit UUID
            const historyId = (await tx.$queryRaw`SELECT gen_random_uuid()`)[0].gen_random_uuid;
            await tx.$executeRaw`
                INSERT INTO hms_patient_registration_fees (
                    id, tenant_id, company_id, fee_amount, validity_days, is_active, created_at, updated_at
                ) VALUES (
                    ${historyId}::uuid, ${tenantId}::uuid, ${companyId}::uuid, ${feeAmount}, ${validityDays}, true, now(), now()
                )
            `;
            return {
                success: true,
                productId: regProduct.id
            };
        }, {
            timeout: 15000
        }); // High timeout for concurrent production writes
        console.log(`[HMS SETTINGS SAVE] COMPLETED SUCCESSFULLY for ${companyId}`);
        // Flush all relevant caches
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/settings/hms');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/patients/new');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/reception/dashboard');
        return {
            success: true
        };
    } catch (error) {
        console.error("CRITICAL PERSISTENCE ERROR in HMS Settings:", error);
        let userMessage = "Database error while saving. Please try again in 30 seconds.";
        if (error.code === 'P2002') userMessage = "Data collision error (SKU/Key already exists). Retrying might fix this.";
        return {
            error: userMessage,
            debug: error.message
        };
    }
}
async function createBranch(data) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id || !session.user.companyId || !session.user.tenantId) {
        return {
            error: "Unauthorized"
        };
    }
    try {
        const branch = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_branch.create({
            data: {
                id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                tenant_id: session.user.tenantId,
                company_id: session.user.companyId,
                name: data.name,
                code: data.code.toUpperCase(),
                type: data.type,
                phone: data.phone,
                email: data.email,
                address: data.address,
                city: data.city,
                state: data.state,
                country: data.country,
                district: data.district,
                pincode: data.pincode,
                is_active: true
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/settings/branches');
        return {
            success: true,
            branchId: branch.id
        };
    } catch (error) {
        console.error("Failed to create branch:", error);
        return {
            error: "Failed to create branch. Branch code must be unique within company."
        };
    }
}
async function updateBranch(id, data) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id || !session.user.companyId || !session.user.tenantId) {
        return {
            error: "Unauthorized"
        };
    }
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_branch.update({
            where: {
                id,
                company_id: session.user.companyId // Security: Ensure it belongs to current company
            },
            data: {
                name: data.name,
                code: data.code.toUpperCase(),
                type: data.type,
                phone: data.phone,
                email: data.email,
                address: data.address,
                city: data.city,
                state: data.state,
                country: data.country,
                district: data.district,
                pincode: data.pincode,
                is_active: data.is_active ?? true
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/settings/branches');
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to update branch:", error);
        return {
            error: "Failed to update branch."
        };
    }
}
async function createDesignation(data) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id || !session.user.tenantId) {
        return {
            error: "Unauthorized"
        };
    }
    try {
        const designation = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].crm_designation.create({
            data: {
                tenant_id: session.user.tenantId,
                name: data.name,
                description: data.description,
                department_id: data.department_id || null,
                parent_id: data.parent_id || null,
                is_active: true
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/settings/designations');
        return {
            success: true,
            designationId: designation.id
        };
    } catch (error) {
        console.error("Failed to create designation:", error);
        return {
            error: "Failed to create designation. Name must be unique."
        };
    }
}
async function getDesignation(id) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id || !session.user.tenantId) return null;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].crm_designation.findUnique({
        where: {
            id,
            tenant_id: session.user.tenantId
        },
        include: {
            department: true,
            parent: true
        }
    });
}
async function updateDesignation(id, data) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id || !session.user.tenantId) {
        return {
            error: "Unauthorized"
        };
    }
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].crm_designation.update({
            where: {
                id,
                tenant_id: session.user.tenantId
            },
            data: {
                name: data.name,
                description: data.description,
                department_id: data.department_id || null,
                parent_id: data.parent_id || null,
                is_active: data.is_active ?? true
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/settings/designations');
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to update designation:", error);
        return {
            error: "Failed to update designation."
        };
    }
}
async function deleteDesignation(id) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id || !session.user.tenantId) {
        return {
            error: "Unauthorized"
        };
    }
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].crm_designation.delete({
            where: {
                id,
                tenant_id: session.user.tenantId
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/settings/designations');
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to delete designation:", error);
        return {
            error: "Failed to delete designation. It might be in use by employees."
        };
    }
}
async function getPaymentGatewaySettings(providedCompanyId, providedTenantId) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    const companyId = providedCompanyId || session?.user?.companyId;
    const tenantId = providedTenantId || session?.user?.tenantId;
    if (!companyId || !tenantId) return {
        success: false,
        error: 'Unauthorized'
    };
    try {
        let record = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.findFirst({
            where: {
                company_id: companyId,
                tenant_id: tenantId,
                key: 'payment_gateway_config'
            }
        });
        if (!record) {
            record = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.findFirst({
                where: {
                    tenant_id: tenantId,
                    key: 'payment_gateway_config'
                }
            });
        }
        const data = record?.value || {};
        return {
            success: true,
            settings: {
                enabled: data.enabled ?? false,
                provider: data.provider ?? 'razorpay',
                keyId: data.keyId ?? '',
                hasKeySecret: !!data.keySecret,
                upiVpa: data.upiVpa ?? '',
                businessName: data.businessName ?? ''
            }
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function updatePaymentGatewaySettings(data) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    const companyId = session?.user?.companyId;
    const tenantId = session?.user?.tenantId;
    const userId = session?.user?.id;
    if (!companyId || !tenantId || !userId) return {
        success: false,
        error: 'Session expired.'
    };
    const canManage = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkPermission"])('hms:admin');
    if (!canManage) return {
        success: false,
        error: 'Unauthorized: HMS Admin permission required.'
    };
    try {
        let existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.findFirst({
            where: {
                company_id: companyId,
                tenant_id: tenantId,
                key: 'payment_gateway_config'
            }
        });
        if (!existing) {
            existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.findFirst({
                where: {
                    tenant_id: tenantId,
                    key: 'payment_gateway_config'
                }
            });
        }
        const existingData = existing?.value || {};
        const configValue = {
            enabled: data.enabled,
            provider: 'razorpay',
            keyId: data.keyId,
            keySecret: data.keySecret && data.keySecret.trim() !== '' ? data.keySecret.trim() : existingData.keySecret ?? '',
            upiVpa: data.upiVpa,
            businessName: data.businessName,
            lastUpdated: new Date().toISOString()
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.deleteMany({
                where: {
                    company_id: companyId,
                    tenant_id: tenantId,
                    key: 'payment_gateway_config'
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.create({
                data: {
                    id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                    tenant_id: tenantId,
                    company_id: companyId,
                    key: 'payment_gateway_config',
                    value: configValue,
                    scope: 'company',
                    is_active: true,
                    created_by: userId,
                    updated_by: userId
                }
            })
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/settings/hms');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/settings/global');
        return {
            success: true
        };
    } catch (error) {
        console.error('Failed to save payment gateway settings:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getPaymentMappings() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId || !session?.user?.tenantId) return {
        success: false,
        error: 'Unauthorized'
    };
    try {
        let record = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.findFirst({
            where: {
                company_id: session.user.companyId,
                tenant_id: session.user.tenantId,
                key: 'payment_method_mapping'
            }
        });
        if (!record) {
            record = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.findFirst({
                where: {
                    tenant_id: session.user.tenantId,
                    key: 'payment_method_mapping'
                }
            });
        }
        const mappings = record?.value || {
            cash: '',
            upi: '',
            card: '',
            bank_transfer: ''
        };
        return {
            success: true,
            mappings
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function updatePaymentMappings(mappings) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    const companyId = session?.user?.companyId;
    const tenantId = session?.user?.tenantId;
    const userId = session?.user?.id;
    if (!companyId || !tenantId || !userId) return {
        success: false,
        error: 'Session expired.'
    };
    const canManage = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkPermission"])('hms:admin');
    if (!canManage) return {
        success: false,
        error: 'Unauthorized: HMS Admin permission required.'
    };
    try {
        const configValue = JSON.stringify(mappings);
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.deleteMany({
            where: {
                company_id: companyId,
                tenant_id: tenantId,
                key: 'payment_method_mapping'
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.create({
            data: {
                id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                tenant_id: tenantId,
                company_id: companyId,
                key: 'payment_method_mapping',
                value: mappings,
                scope: 'company',
                version: 1,
                is_active: true,
                created_by: userId,
                updated_by: userId
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/settings/accounting');
        return {
            success: true
        };
    } catch (error) {
        console.error('Failed to save payment mappings:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getPaymentGatewayConfig(companyId, tenantId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_noStore"])();
    const record = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.findFirst({
        where: {
            company_id: companyId,
            tenant_id: tenantId,
            key: 'payment_gateway_config'
        }
    });
    return record?.value || null;
}
async function getWhatsAppSettings(providedCompanyId, providedTenantId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_noStore"])();
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    const companyId = providedCompanyId || session?.user?.companyId;
    const tenantId = providedTenantId || session?.user?.tenantId;
    if (!companyId || !tenantId) return {
        success: false,
        error: 'Unauthorized'
    };
    try {
        console.log(`[WHATSAPP FETCH] Searching for: Co: ${companyId}, Te: ${tenantId}`);
        let record = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.findFirst({
            where: {
                company_id: companyId,
                tenant_id: tenantId,
                key: 'whatsapp_config'
            }
        });
        if (!record) {
            console.log(`[WHATSAPP FETCH] Company record not found. Trying tenant fallback: ${tenantId}`);
            record = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.findFirst({
                where: {
                    tenant_id: tenantId,
                    key: 'whatsapp_config'
                }
            });
        }
        const data = record?.value || {};
        const hasToken = !!(data.token && data.token.length > 0);
        console.log(`[WHATSAPP FETCH] Final: Found=${!!record}, HasToken=${hasToken}, Key=${record?.id || 'N/A'}`);
        return {
            success: true,
            settings: {
                enabled: data.enabled ?? false,
                instanceId: data.instanceId ?? '',
                hasToken: hasToken,
                autoSendBill: data.autoSendBill ?? false
            }
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function updateWhatsAppSettings(data) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    const companyId = data.companyId || session?.user?.companyId;
    const tenantId = session?.user?.tenantId;
    const userId = session?.user?.id;
    if (!companyId || !tenantId || !userId) return {
        success: false,
        error: 'Session expired.'
    };
    console.log(`[WHATSAPP SAVE] Updating config for ${companyId} (Tenant: ${tenantId})`);
    const canManage = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkPermission"])('hms:admin');
    if (!canManage) return {
        success: false,
        error: 'Unauthorized: HMS Admin permission required.'
    };
    try {
        // Try to find existing by company specifically first, then fallback to tenant-wide search for this key
        let existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.findFirst({
            where: {
                company_id: companyId,
                tenant_id: tenantId,
                key: 'whatsapp_config'
            }
        });
        if (!existing) {
            existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.findFirst({
                where: {
                    tenant_id: tenantId,
                    key: 'whatsapp_config'
                }
            });
        }
        const existingData = existing?.value || {};
        console.log(`[WHATSAPP SAVE] Existing record found: ${!!existing}, Has Token: ${!!existingData.token}`);
        let cleanInstanceId = (data.instanceId ?? '').trim().toLowerCase();
        if (cleanInstanceId.startsWith('instance')) {
            cleanInstanceId = cleanInstanceId.substring(8);
        }
        const formattedInstanceId = `instance${cleanInstanceId}`;
        const configValue = {
            enabled: data.enabled,
            instanceId: formattedInstanceId,
            token: data.token && data.token.trim() !== '' ? data.token.trim() : existingData.token || '',
            autoSendBill: data.autoSendBill,
            lastUpdated: new Date().toISOString()
        };
        console.log(`[WHATSAPP SAVE] Final Token Length: ${configValue.token?.length || 0}`);
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.deleteMany({
                where: {
                    company_id: companyId,
                    tenant_id: tenantId,
                    key: 'whatsapp_config'
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.create({
                data: {
                    id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                    tenant_id: tenantId,
                    company_id: companyId,
                    key: 'whatsapp_config',
                    value: configValue,
                    scope: 'company',
                    is_active: true,
                    created_by: userId,
                    updated_by: userId
                }
            })
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/settings/hms');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/settings/global');
        return {
            success: true
        };
    } catch (error) {
        console.error('Failed to save WhatsApp settings:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getWhatsAppConfig(companyId, tenantId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_noStore"])();
    // 1. Specific Company Lookup
    let record = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.findFirst({
        where: {
            company_id: companyId,
            tenant_id: tenantId,
            key: 'whatsapp_config'
        }
    });
    // 2. Tenant Fallback
    if (!record) {
        record = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.findFirst({
            where: {
                tenant_id: tenantId,
                key: 'whatsapp_config'
            }
        });
    }
    return record?.value || null;
}
async function getPDFSettings(providedCompanyId, providedTenantId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_noStore"])();
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    const companyId = providedCompanyId || session?.user?.companyId;
    const tenantId = providedTenantId || session?.user?.tenantId;
    if (!companyId || !tenantId) return {
        success: false,
        error: 'Unauthorized'
    };
    try {
        let record = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.findFirst({
            where: {
                company_id: companyId,
                tenant_id: tenantId,
                key: 'pdf_print_config'
            }
        });
        if (!record) {
            record = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.findFirst({
                where: {
                    tenant_id: tenantId,
                    key: 'pdf_print_config'
                }
            });
        }
        const data = record?.value || {};
        return {
            success: true,
            settings: {
                headerAlignment: data.headerAlignment || 'right',
                showLogo: data.showLogo ?? true,
                hospitalNameSize: data.hospitalNameSize || 16,
                addressSize: data.addressSize || 10,
                showContactInfo: data.showContactInfo ?? true,
                autoPrint: data.autoPrint ?? false
            }
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function updatePDFSettings(data) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    const companyId = session?.user?.companyId;
    const tenantId = session?.user?.tenantId;
    const userId = session?.user?.id;
    if (!companyId || !tenantId || !userId) return {
        success: false,
        error: 'Session expired.'
    };
    const canManage = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkPermission"])('hms:admin');
    if (!canManage) return {
        success: false,
        error: 'Unauthorized: HMS Admin permission required.'
    };
    try {
        let existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.findFirst({
            where: {
                company_id: companyId,
                tenant_id: tenantId,
                key: 'pdf_print_config'
            }
        });
        if (!existing) {
            existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.findFirst({
                where: {
                    tenant_id: tenantId,
                    key: 'pdf_print_config'
                }
            });
        }
        const configValue = {
            ...data,
            lastUpdated: new Date().toISOString()
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.deleteMany({
                where: {
                    company_id: companyId,
                    tenant_id: tenantId,
                    key: 'pdf_print_config'
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.create({
                data: {
                    id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                    tenant_id: tenantId,
                    company_id: companyId,
                    key: 'pdf_print_config',
                    value: configValue,
                    scope: 'company',
                    is_active: true,
                    created_by: userId,
                    updated_by: userId
                }
            })
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/settings/hms');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/settings/global');
        return {
            success: true
        };
    } catch (error) {
        console.error('Failed to save PDF settings:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getPDFConfig(companyId, tenantId) {
    try {
        const record = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_settings.findFirst({
            where: {
                company_id: companyId,
                tenant_id: tenantId,
                key: 'pdf_print_config'
            }
        });
        return record?.value || null;
    } catch (err) {
        return null;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    updateProfile,
    getUserProfile,
    updateGlobalSettings,
    updateTenantSettings,
    getHMSSettings,
    updateHMSSettings,
    createBranch,
    updateBranch,
    createDesignation,
    getDesignation,
    updateDesignation,
    deleteDesignation,
    getPaymentGatewaySettings,
    updatePaymentGatewaySettings,
    getPaymentMappings,
    updatePaymentMappings,
    getPaymentGatewayConfig,
    getWhatsAppSettings,
    updateWhatsAppSettings,
    getWhatsAppConfig,
    getPDFSettings,
    updatePDFSettings,
    getPDFConfig
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProfile, "60af4c4a57d0c5c26681b16bf66e53126bb318bbab", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserProfile, "00ee7cb30127714f93eb99d84e6378a1b9d5f71a82", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateGlobalSettings, "401fbfa1dcf731b9d7863ef7a624aabc6f9c601520", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateTenantSettings, "40a8bd885a0cd875baf554e077e97cf0bb7d9b36b6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getHMSSettings, "00e1e20b68fcf111e2adb0663e0e74e48a42a2e964", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateHMSSettings, "4031046d1e88ab01ac04a97d7373e9b675b9b2102e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createBranch, "40c1ce8bac6bd0294860e6dbb06e4ca911bd121437", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBranch, "6003ffc1bf6ab8e030685a3abb1a7068aa1ba3b43c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createDesignation, "405d8eea04931e98fb50c32271a9ab145ae6f8d465", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDesignation, "40c78bda30257384bf051704051785bf4620f8ae50", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateDesignation, "60978e108f0c867559c6c352cdc1209191fb6cd822", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteDesignation, "40f5ad1ddc48abb6f590059867aca153fb43763d61", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPaymentGatewaySettings, "60fdc4f0ccdb38a549b5cb4bebf4efac172e58c775", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updatePaymentGatewaySettings, "4098cc338ddde8532ea628809839b63f72ed6e703e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPaymentMappings, "0017bc7bd76d12c4fa0332c041f8dc72f971161904", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updatePaymentMappings, "40ce49ea4b7050e0573cddcba444e4d9ead38f4ab9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPaymentGatewayConfig, "604fe2a8b690164f5a32f5338e5b0d30ffabfde0c0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getWhatsAppSettings, "6061fbcb1a881f4e8692dead2c43587d3634d83fe1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateWhatsAppSettings, "4033f0ad3178ccda49f8634ca8f6313b462889bdb0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getWhatsAppConfig, "60825e363deb70c92d1882c2041a21532c1b8cea9a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPDFSettings, "600c71b7b282fbbb6d8a0e50a2d2a6f639c02fa506", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updatePDFSettings, "40a7cbc7ead7d5b16b572a614a4c8efe2adb0bc2aa", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPDFConfig, "60660fbc726854ba5c95d6c1506c1006864e56857e", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions/doctor.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"400fa8ee7cabfe9a55ba2d853cc1ee196f7f6ae1cd":"createDoctor","4012898d30a4f6e85544c81daeb508749b1675c219":"deleteClinician","4071e2ecc474d111c8fd5fb6c8b7ab034260a8b7fc":"initializeDoctorProfile","40de81ef90a964c22f614c4f0ef646bbb51107c858":"updateDoctor"},"",""] */ __turbopack_context__.s([
    "createDoctor",
    ()=>createDoctor,
    "deleteClinician",
    ()=>deleteClinician,
    "initializeDoctorProfile",
    ()=>initializeDoctorProfile,
    "updateDoctor",
    ()=>updateDoctor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
async function createDoctor(formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    const tenantId = session?.user?.tenantId;
    const companyId = session?.user?.companyId;
    if (!tenantId || !companyId) {
        return {
            error: "Unauthorized: Missing session context"
        };
    }
    const firstName = formData.get("first_name");
    const lastName = formData.get("last_name");
    const email = formData.get("email");
    const employeeId = formData.get("employee_id");
    const designation = formData.get("designation");
    const roleId = formData.get("role_id");
    const specializationId = formData.get("specialization_id");
    const departmentId = formData.get("department_id");
    const licenseNo = formData.get("license_no");
    const experienceYears = parseInt(formData.get("experience_years")) || 0;
    const qualification = formData.get("qualification")// UI only for now as schema lacks it
    ;
    const consultationStartTime = formData.get("consultation_start_time") || "09:00";
    const consultationEndTime = formData.get("consultation_end_time") || "17:00";
    const consultationSlotDuration = parseInt(formData.get("consultation_slot_duration")) || 30;
    const consultationFee = parseFloat(formData.get("consultation_fee")) || 0;
    const workingDays = formData.getAll("working_days");
    const profileImageUrl = formData.get("profile_image_url");
    const signatureUrl = formData.get("signature_url");
    const documentUrlsStr = formData.get("document_urls");
    const documentUrls = documentUrlsStr ? JSON.parse(documentUrlsStr) : [];
    if (!firstName) return {
        error: "First Name is required"
    };
    if (!lastName) return {
        error: "Last Name is required"
    };
    if (!email) return {
        error: "Professional Email is required"
    };
    if (!roleId) return {
        error: "Institutional Role is required"
    };
    try {
        // WORLD-CLASS: Link to Accounts Head (Employee Payables)
        // We look for the Employee Payable or Salary Payable account for this tenant
        const employeePayableAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].account_chart.findFirst({
            where: {
                tenant_id: tenantId,
                name: {
                    contains: 'Employee Payable',
                    mode: 'insensitive'
                }
            }
        });
        // Create Clinician
        const newClinician = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_clinicians.create({
            data: {
                id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
                tenant_id: tenantId,
                company_id: companyId,
                first_name: firstName,
                last_name: lastName,
                email: email,
                employee_id: employeeId || null,
                designation: designation || null,
                qualification: qualification || null,
                license_no: licenseNo || null,
                experience_years: experienceYears,
                role_id: roleId,
                specialization_id: specializationId || null,
                department_id: departmentId || null,
                consultation_start_time: consultationStartTime,
                consultation_end_time: consultationEndTime,
                consultation_slot_duration: consultationSlotDuration,
                consultation_fee: consultationFee,
                // @ts-ignore
                working_days: Array.isArray(workingDays) && workingDays.length > 0 ? workingDays.filter((d)=>!!d) : [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                profile_image_url: profileImageUrl || null,
                signature_url: signatureUrl || null,
                document_urls: Array.isArray(documentUrls) ? documentUrls : [],
                is_active: true
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/hms/doctors");
        return {
            success: true,
            clinicianId: newClinician.id
        };
    } catch (error) {
        console.error("Failed to create world-class clinician:", error);
        return {
            error: error.message || "Failed to create clinician"
        };
    }
}
async function updateDoctor(formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    const tenantId = session?.user?.tenantId;
    if (!tenantId) return {
        error: "Unauthorized"
    };
    const id = formData.get("id");
    const firstName = formData.get("first_name");
    const lastName = formData.get("last_name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const employeeId = formData.get("employee_id");
    const designation = formData.get("designation");
    const licenseNo = formData.get("license_no");
    const roleId = formData.get("role_id");
    const specializationId = formData.get("specialization_id");
    const departmentId = formData.get("department_id");
    const experienceYears = parseInt(formData.get("experience_years")) || 0;
    const consultationStartTime = formData.get("consultation_start_time");
    const consultationEndTime = formData.get("consultation_end_time");
    const consultationSlotDuration = parseInt(formData.get("consultation_slot_duration"));
    const consultationFee = parseFloat(formData.get("consultation_fee")) || 0;
    const workingDays = formData.getAll("working_days");
    const profileImageUrl = formData.get("profile_image_url");
    const signatureUrl = formData.get("signature_url");
    const documentUrlsStr = formData.get("document_urls");
    const documentUrls = documentUrlsStr ? JSON.parse(documentUrlsStr) : [];
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_clinicians.update({
            where: {
                id,
                tenant_id: tenantId
            },
            data: {
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone: phone,
                employee_id: employeeId || null,
                designation: designation || null,
                qualification: formData.get("qualification") || null,
                license_no: licenseNo,
                role_id: roleId,
                specialization_id: specializationId || null,
                department_id: departmentId || null,
                experience_years: experienceYears,
                consultation_start_time: consultationStartTime,
                consultation_end_time: consultationEndTime,
                consultation_slot_duration: consultationSlotDuration,
                consultation_fee: consultationFee,
                // @ts-ignore
                working_days: Array.isArray(workingDays) && workingDays.length > 0 ? workingDays.filter((d)=>!!d) : [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                profile_image_url: profileImageUrl || null,
                signature_url: signatureUrl || null,
                document_urls: Array.isArray(documentUrls) ? documentUrls : [],
                updated_at: new Date()
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/hms/doctors");
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to update clinician:", error);
        return {
            error: error.message || "Failed to update clinician"
        };
    }
}
async function initializeDoctorProfile(_formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.email || !session?.user?.tenantId) {
        return {
            error: "Unauthorized"
        };
    }
    // 🚨 EMERGENCY DATABASE REPAIR (On-the-fly)
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$executeRawUnsafe(`
            ALTER TABLE hms_clinicians ALTER COLUMN working_days DROP DEFAULT;
            ALTER TABLE hms_clinicians ALTER COLUMN working_days SET DEFAULT ARRAY['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']::text[];
            ALTER TABLE hms_clinicians ALTER COLUMN working_days DROP NOT NULL;
        `);
    } catch (e) {
        console.log('Database repair shim skipped or already patched');
    }
    const { email, name, tenantId, companyId, id: userId } = session.user;
    // Safety check: Logic Updated for World Class Linkage
    // 1. Try finding by user_id first (Immutable Link)
    let existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_clinicians.findFirst({
        where: {
            user_id: userId,
            tenant_id: tenantId
        }
    });
    // 2. If not linked, try finding by Email (Legacy/First-time Link)
    if (!existing) {
        existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_clinicians.findFirst({
            where: {
                email: {
                    equals: email,
                    mode: 'insensitive'
                },
                tenant_id: tenantId
            }
        });
        // If found by email but not linked, LINK IT NOW (Lazy Migration)
        if (existing && !existing.user_id) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_clinicians.update({
                where: {
                    id: existing.id
                },
                data: {
                    user_id: userId
                }
            });
        }
    }
    if (existing) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/doctor/dashboard');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/hms/doctor/dashboard');
    }
    // Attempt to get a default role
    const defaultRole = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_roles.findFirst({
        where: {
            tenant_id: tenantId,
            name: {
                contains: 'Doctor',
                mode: 'insensitive'
            }
        }
    });
    const [firstName, ...rest] = (name || 'New Doctor').split(' ');
    const lastName = rest.join(' ') || '';
    try {
        // WORLD-CLASS FIX: Use tagged template literal $executeRaw for safety
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$executeRaw`
            INSERT INTO hms_clinicians (
                id, tenant_id, company_id, first_name, last_name, 
                email, user_id, is_active, consultation_fee, 
                consultation_slot_duration, consultation_start_time, 
                consultation_end_time, working_days
            ) VALUES (
                ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])()}, 
                ${tenantId}, 
                ${companyId || tenantId}, 
                ${firstName}, 
                ${lastName}, 
                ${email}, 
                ${userId}, 
                true, 
                500, 
                30, 
                "09:00", 
                "17:00",
                ${[
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday'
        ]}
            )
        `;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/doctor/dashboard');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/hms/doctor/dashboard');
    } catch (error) {
        console.error("Failed to auto-init doctor:", error);
        return {
            error: "Failed to initialize profile. " + error.message
        };
    }
}
async function deleteClinician(id) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    const tenantId = session?.user?.tenantId;
    const isAdmin = session?.user?.isAdmin;
    if (!tenantId || !isAdmin) {
        return {
            error: "Unauthorized: Admin access required for permanent removal"
        };
    }
    try {
        // WORLD-CLASS SAFETY: Check for transaction history
        const [appointmentCount, encounterCount] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_appointments.count({
                where: {
                    clinician_id: id,
                    tenant_id: tenantId
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_encounter.count({
                where: {
                    clinician_id: id,
                    tenant_id: tenantId
                }
            })
        ]);
        if (appointmentCount > 0 || encounterCount > 0) {
            return {
                error: "This personnel has clinical history (appointments/encounters). Permanent deletion is blocked to maintain record integrity. Please use 'Inactive' status instead."
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_clinicians.delete({
            where: {
                id,
                tenant_id: tenantId
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/hms/doctors");
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to delete clinician:", error);
        return {
            error: "Internal Error: Could not remove record. They may have linked metadata."
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createDoctor,
    updateDoctor,
    initializeDoctorProfile,
    deleteClinician
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createDoctor, "400fa8ee7cabfe9a55ba2d853cc1ee196f7f6ae1cd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateDoctor, "40de81ef90a964c22f614c4f0ef646bbb51107c858", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(initializeDoctorProfile, "4071e2ecc474d111c8fd5fb6c8b7ab034260a8b7fc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteClinician, "4012898d30a4f6e85544c81daeb508749b1675c219", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions/doctor-notes.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"4026ef664a53bcfdde41354e07e03fcaca9b58890a":"saveDoctorNote","40be2b6f42b47441c2a4da663f3392fd8a361a789a":"getDoctorNotes"},"",""] */ __turbopack_context__.s([
    "getDoctorNotes",
    ()=>getDoctorNotes,
    "saveDoctorNote",
    ()=>saveDoctorNote
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
async function saveDoctorNote(data) {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) {
            return {
                error: "Unauthorized"
            };
        }
        const note = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].doctor_note.create({
            data: {
                doctor_id: data.doctorId,
                patient_id: data.patientId,
                appointment_id: data.appointmentId,
                content: data.content,
                pdf_data: data.pdfBase64
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/doctor/dashboard');
        return {
            success: true,
            note
        };
    } catch (error) {
        console.error("Error saving doctor note:", error);
        return {
            error: error.message || "Failed to save note"
        };
    }
}
async function getDoctorNotes(patientId) {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) return {
            error: "Unauthorized"
        };
        const notes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].doctor_note.findMany({
            where: {
                patient_id: patientId
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                doctor: {
                    select: {
                        name: true
                    }
                }
            }
        });
        return {
            success: true,
            notes
        };
    } catch (error) {
        return {
            error: "Failed to fetch notes"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    saveDoctorNote,
    getDoctorNotes
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveDoctorNote, "4026ef664a53bcfdde41354e07e03fcaca9b58890a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDoctorNotes, "40be2b6f42b47441c2a4da663f3392fd8a361a789a", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/hms/doctor/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/branding.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/actions/navigation.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/app/actions/rbac.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/app/actions/company.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/src/app/actions/tenant.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE6 => \"[project]/src/app/actions/settings.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE7 => \"[project]/src/app/actions/doctor.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE8 => \"[project]/src/app/actions/doctor-notes.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/branding.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/navigation.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/rbac.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/company.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/tenant.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/settings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$doctor$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/doctor.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$doctor$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/doctor-notes.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$doctor$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$doctor$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$doctor$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$doctor$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/hms/doctor/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/branding.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/actions/navigation.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/app/actions/rbac.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/app/actions/company.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/src/app/actions/tenant.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE6 => \"[project]/src/app/actions/settings.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE7 => \"[project]/src/app/actions/doctor.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE8 => \"[project]/src/app/actions/doctor-notes.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "000f1e53f3d721e8e3eafebdfaacde020ba810013e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantCompanies"],
    "001d846c340e0b0dc03631f5abb6a919b37618be0c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auditAndFixMenuPermissions"],
    "007da8a383d393bc3e0c883ec0243c8394a0988218",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMenuItems"],
    "0080b205f1acae75e69db7a6bcb4173b5d3e51a5dc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllPermissions"],
    "0084944294869cb8b4434babef93dc48d5753dadf6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
    "00a5b65af8017d39c7ba824646cee4cc0be7500946",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentCompany"],
    "00a6f84a8e6477a0104223506d74bc4dfe9481b3d4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRoles"],
    "00b3d4806a5f0a59b1ba375ae313a48c60867df645",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedRolesAndPermissions"],
    "00c43413ab5f835c1eea3961fbd59612ae369029fa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenant"],
    "00ee7cb30127714f93eb99d84e6378a1b9d5f71a82",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserProfile"],
    "4007ccdb75d82f2c333a0ba67acb0596c56de86a40",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantBrandingByHost"],
    "400aea7f551c1a892a3af07602f3d22df1ae8396ce",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["switchCompany"],
    "40169b5368e6475727db0c91f5d04fe6addcb062f6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBranches"],
    "4026ef664a53bcfdde41354e07e03fcaca9b58890a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$doctor$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveDoctorNote"],
    "404f8eef86e7a928257f21d02e0dcb5aeb8922daf9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRole"],
    "4071e2ecc474d111c8fd5fb6c8b7ab034260a8b7fc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$doctor$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initializeDoctorProfile"],
    "407793196ca4fd907dc854c625b75c571dcc2579b3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkPermission"],
    "407d6ddb5b17871ab747ad147174fb46838dba5d10",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["switchBranch"],
    "408f1a5020e6ba461ea2ab0f6cc2c241264c88fb87",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteRole"],
    "40a18ef6ef9ff95f524a8fc838c6be9565ccc80335",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserPermissions"],
    "40be938594ca7001681ec054bce9804c80446e2204",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCompany"],
    "6079b9612e1fe52d990c15df9204be8bd86d38ceb2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateRole"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$hms$2f$doctor$2f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$doctor$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE8__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$doctor$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/hms/doctor/dashboard/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions/branding.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/actions/navigation.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/app/actions/rbac.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/app/actions/company.ts [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/src/app/actions/tenant.ts [app-rsc] (ecmascript)", ACTIONS_MODULE5 => "[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE6 => "[project]/src/app/actions/settings.ts [app-rsc] (ecmascript)", ACTIONS_MODULE7 => "[project]/src/app/actions/doctor.ts [app-rsc] (ecmascript)", ACTIONS_MODULE8 => "[project]/src/app/actions/doctor-notes.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/branding.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/navigation.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/rbac.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/company.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/tenant.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/settings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$doctor$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/doctor.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$doctor$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/doctor-notes.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$hms$2f$doctor$2f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$doctor$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE8__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$doctor$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$doctor$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$doctor$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$hms$2f$doctor$2f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$doctor$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE8__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$doctor$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$doctor$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$doctor$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=_4d81b696._.js.map