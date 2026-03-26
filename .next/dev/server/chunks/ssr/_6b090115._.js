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
"[project]/src/lib/static-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "countriesList",
    ()=>countriesList,
    "currenciesList",
    ()=>currenciesList,
    "modulesList",
    ()=>modulesList
]);
const currenciesList = [
    {
        code: 'AED',
        name: 'United Arab Emirates Dirham',
        symbol: 'AED'
    },
    {
        code: 'AFN',
        name: 'Afghan Afghani',
        symbol: '؋'
    },
    {
        code: 'ALL',
        name: 'Albanian Lek',
        symbol: 'L'
    },
    {
        code: 'AMD',
        name: 'Armenian Dram',
        symbol: '֏'
    },
    {
        code: 'ANG',
        name: 'Netherlands Antillean Guilder',
        symbol: 'ƒ'
    },
    {
        code: 'AOA',
        name: 'Angolan Kwanza',
        symbol: 'Kz'
    },
    {
        code: 'ARS',
        name: 'Argentine Peso',
        symbol: '$'
    },
    {
        code: 'AUD',
        name: 'Australian Dollar',
        symbol: '$'
    },
    {
        code: 'AWG',
        name: 'Aruban Florin',
        symbol: 'ƒ'
    },
    {
        code: 'AZN',
        name: 'Azerbaijani Manat',
        symbol: '₼'
    },
    {
        code: 'BAM',
        name: 'Bosnia-Herz. Convertible Mark',
        symbol: 'KM'
    },
    {
        code: 'BBD',
        name: 'Barbadian Dollar',
        symbol: '$'
    },
    {
        code: 'BDT',
        name: 'Bangladeshi Taka',
        symbol: '৳'
    },
    {
        code: 'BGN',
        name: 'Bulgarian Lev',
        symbol: 'лв'
    },
    {
        code: 'BHD',
        name: 'Bahraini Dinar',
        symbol: '.د.ب'
    },
    {
        code: 'BIF',
        name: 'Burundian Franc',
        symbol: 'FBu'
    },
    {
        code: 'BMD',
        name: 'Bermudan Dollar',
        symbol: '$'
    },
    {
        code: 'BND',
        name: 'Brunei Dollar',
        symbol: '$'
    },
    {
        code: 'BOB',
        name: 'Bolivian Boliviano',
        symbol: 'Bs.'
    },
    {
        code: 'BRL',
        name: 'Brazilian Real',
        symbol: 'R$'
    },
    {
        code: 'BSD',
        name: 'Bahamian Dollar',
        symbol: '$'
    },
    {
        code: 'BTN',
        name: 'Bhutanese Ngultrum',
        symbol: 'Nu.'
    },
    {
        code: 'BWP',
        name: 'Botswanan Pula',
        symbol: 'P'
    },
    {
        code: 'BYN',
        name: 'Belarusian Ruble',
        symbol: 'Br'
    },
    {
        code: 'BZD',
        name: 'Belize Dollar',
        symbol: 'BZ$'
    },
    {
        code: 'CAD',
        name: 'Canadian Dollar',
        symbol: '$'
    },
    {
        code: 'CDF',
        name: 'Congolese Franc',
        symbol: 'FC'
    },
    {
        code: 'CHF',
        name: 'Swiss Franc',
        symbol: 'CHF'
    },
    {
        code: 'CLP',
        name: 'Chilean Peso',
        symbol: '$'
    },
    {
        code: 'CNY',
        name: 'Chinese Yuan',
        symbol: '¥'
    },
    {
        code: 'COP',
        name: 'Colombian Peso',
        symbol: '$'
    },
    {
        code: 'CRC',
        name: 'Costa Rican Colón',
        symbol: '₡'
    },
    {
        code: 'CUP',
        name: 'Cuban Peso',
        symbol: '₱'
    },
    {
        code: 'CVE',
        name: 'Cape Verdean Escudo',
        symbol: '$'
    },
    {
        code: 'CZK',
        name: 'Czech Koruna',
        symbol: 'Kč'
    },
    {
        code: 'DJF',
        name: 'Djiboutian Franc',
        symbol: 'Fdj'
    },
    {
        code: 'DKK',
        name: 'Danish Krone',
        symbol: 'kr'
    },
    {
        code: 'DOP',
        name: 'Dominican Peso',
        symbol: 'RD$'
    },
    {
        code: 'DZD',
        name: 'Algerian Dinar',
        symbol: 'د.ج'
    },
    {
        code: 'EGP',
        name: 'Egyptian Pound',
        symbol: '£'
    },
    {
        code: 'ERN',
        name: 'Eritrean Nakfa',
        symbol: 'Nfk'
    },
    {
        code: 'ETB',
        name: 'Ethiopian Birr',
        symbol: 'Br'
    },
    {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
    },
    {
        code: 'FJD',
        name: 'Fijian Dollar',
        symbol: '$'
    },
    {
        code: 'FKP',
        name: 'Falkland Islands Pound',
        symbol: '£'
    },
    {
        code: 'GBP',
        name: 'British Pound Sterling',
        symbol: '£'
    },
    {
        code: 'GEL',
        name: 'Georgian Lari',
        symbol: '₾'
    },
    {
        code: 'GHS',
        name: 'Ghanaian Cedi',
        symbol: '₵'
    },
    {
        code: 'GIP',
        name: 'Gibraltar Pound',
        symbol: '£'
    },
    {
        code: 'GMD',
        name: 'Gambian Dalasi',
        symbol: 'D'
    },
    {
        code: 'GNF',
        name: 'Guinean Franc',
        symbol: 'FG'
    },
    {
        code: 'GTQ',
        name: 'Guatemalan Quetzal',
        symbol: 'Q'
    },
    {
        code: 'GYD',
        name: 'Guyanaese Dollar',
        symbol: '$'
    },
    {
        code: 'HKD',
        name: 'Hong Kong Dollar',
        symbol: '$'
    },
    {
        code: 'HNL',
        name: 'Honduran Lempira',
        symbol: 'L'
    },
    {
        code: 'HRK',
        name: 'Croatian Kuna',
        symbol: 'kn'
    },
    {
        code: 'HTG',
        name: 'Haitian Gourde',
        symbol: 'G'
    },
    {
        code: 'HUF',
        name: 'Hungarian Forint',
        symbol: 'Ft'
    },
    {
        code: 'IDR',
        name: 'Indonesian Rupiah',
        symbol: 'Rp'
    },
    {
        code: 'ILS',
        name: 'Israeli New Sheqel',
        symbol: '₪'
    },
    {
        code: 'INR',
        name: 'Indian Rupee',
        symbol: '₹'
    },
    {
        code: 'IQD',
        name: 'Iraqi Dinar',
        symbol: 'ع.د'
    },
    {
        code: 'IRR',
        name: 'Iranian Rial',
        symbol: '﷼'
    },
    {
        code: 'ISK',
        name: 'Icelandic Króna',
        symbol: 'kr'
    },
    {
        code: 'JMD',
        name: 'Jamaican Dollar',
        symbol: 'J$'
    },
    {
        code: 'JOD',
        name: 'Jordanian Dinar',
        symbol: 'د.ا'
    },
    {
        code: 'JPY',
        name: 'Japanese Yen',
        symbol: '¥'
    },
    {
        code: 'KES',
        name: 'Kenyan Shilling',
        symbol: 'KSh'
    },
    {
        code: 'KGS',
        name: 'Kyrgystani Som',
        symbol: 'с'
    },
    {
        code: 'KHR',
        name: 'Cambodian Riel',
        symbol: '៛'
    },
    {
        code: 'KMF',
        name: 'Comorian Franc',
        symbol: 'CF'
    },
    {
        code: 'KPW',
        name: 'North Korean Won',
        symbol: '₩'
    },
    {
        code: 'KRW',
        name: 'South Korean Won',
        symbol: '₩'
    },
    {
        code: 'KWD',
        name: 'Kuwaiti Dinar',
        symbol: 'د.ك'
    },
    {
        code: 'KYD',
        name: 'Cayman Islands Dollar',
        symbol: '$'
    },
    {
        code: 'KZT',
        name: 'Kazakhstani Tenge',
        symbol: '₸'
    },
    {
        code: 'LAK',
        name: 'Laotian Kip',
        symbol: '₭'
    },
    {
        code: 'LBP',
        name: 'Lebanese Pound',
        symbol: 'ل.ل'
    },
    {
        code: 'LKR',
        name: 'Sri Lankan Rupee',
        symbol: 'Rs'
    },
    {
        code: 'LRD',
        name: 'Liberian Dollar',
        symbol: '$'
    },
    {
        code: 'LSL',
        name: 'Lesotho Loti',
        symbol: 'L'
    },
    {
        code: 'LYD',
        name: 'Libyan Dinar',
        symbol: 'ل.د'
    },
    {
        code: 'MAD',
        name: 'Moroccan Dirham',
        symbol: 'd.m.'
    },
    {
        code: 'MDL',
        name: 'Moldovan Leu',
        symbol: 'L'
    },
    {
        code: 'MGA',
        name: 'Malagasy Ariary',
        symbol: 'Ar'
    },
    {
        code: 'MKD',
        name: 'Macedonian Denar',
        symbol: 'ден'
    },
    {
        code: 'MMK',
        name: 'Burmese Kyat',
        symbol: 'K'
    },
    {
        code: 'MNT',
        name: 'Mongolian Tugrik',
        symbol: '₮'
    },
    {
        code: 'MOP',
        name: 'Macanese Pataca',
        symbol: 'P'
    },
    {
        code: 'MRU',
        name: 'Mauritanian Ouguiya',
        symbol: 'UM'
    },
    {
        code: 'MUR',
        name: 'Mauritian Rupee',
        symbol: '₨'
    },
    {
        code: 'MVR',
        name: 'Maldivian Rufiyaa',
        symbol: 'Rf'
    },
    {
        code: 'MWK',
        name: 'Malawian Kwacha',
        symbol: 'MK'
    },
    {
        code: 'MXN',
        name: 'Mexican Peso',
        symbol: '$'
    },
    {
        code: 'MYR',
        name: 'Malaysian Ringgit',
        symbol: 'RM'
    },
    {
        code: 'MZN',
        name: 'Mozambican Metical',
        symbol: 'MT'
    },
    {
        code: 'NAD',
        name: 'Namibian Dollar',
        symbol: '$'
    },
    {
        code: 'NGN',
        name: 'Nigerian Naira',
        symbol: '₦'
    },
    {
        code: 'NIO',
        name: 'Nicaraguan Córdoba',
        symbol: 'C$'
    },
    {
        code: 'NOK',
        name: 'Norwegian Krone',
        symbol: 'kr'
    },
    {
        code: 'NPR',
        name: 'Nepalese Rupee',
        symbol: '₨'
    },
    {
        code: 'NZD',
        name: 'New Zealand Dollar',
        symbol: '$'
    },
    {
        code: 'OMR',
        name: 'Omani Rial',
        symbol: 'ر.ع.'
    },
    {
        code: 'PAB',
        name: 'Panamanian Balboa',
        symbol: 'B/.'
    },
    {
        code: 'PEN',
        name: 'Peruvian Sol',
        symbol: 'S/.'
    },
    {
        code: 'PGK',
        name: 'Papua New Guinean Kina',
        symbol: 'K'
    },
    {
        code: 'PHP',
        name: 'Philippine Peso',
        symbol: '₱'
    },
    {
        code: 'PKR',
        name: 'Pakistani Rupee',
        symbol: '₨'
    },
    {
        code: 'PLN',
        name: 'Polish Zloty',
        symbol: 'zł'
    },
    {
        code: 'PYG',
        name: 'Paraguayan Guarani',
        symbol: '₲'
    },
    {
        code: 'QAR',
        name: 'Qatari Rial',
        symbol: 'ر.ق'
    },
    {
        code: 'RON',
        name: 'Romanian Leu',
        symbol: 'lei'
    },
    {
        code: 'RSD',
        name: 'Serbian Dinar',
        symbol: 'дин.'
    },
    {
        code: 'RUB',
        name: 'Russian Ruble',
        symbol: '₽'
    },
    {
        code: 'RWF',
        name: 'Rwandan Franc',
        symbol: 'FRw'
    },
    {
        code: 'SAR',
        name: 'Saudi Riyal',
        symbol: 'ر.س'
    },
    {
        code: 'SBD',
        name: 'Solomon Islands Dollar',
        symbol: '$'
    },
    {
        code: 'SCR',
        name: 'Seychellois Rupee',
        symbol: '₨'
    },
    {
        code: 'SDG',
        name: 'Sudanese Pound',
        symbol: '£'
    },
    {
        code: 'SEK',
        name: 'Swedish Krona',
        symbol: 'kr'
    },
    {
        code: 'SGD',
        name: 'Singapore Dollar',
        symbol: '$'
    },
    {
        code: 'SHP',
        name: 'Saint Helena Pound',
        symbol: '£'
    },
    {
        code: 'SLL',
        name: 'Sierra Leonean Leone',
        symbol: 'Le'
    },
    {
        code: 'SOS',
        name: 'Somali Shilling',
        symbol: 'S'
    },
    {
        code: 'SRD',
        name: 'Surinamese Dollar',
        symbol: '$'
    },
    {
        code: 'SSP',
        name: 'South Sudanese Pound',
        symbol: '£'
    },
    {
        code: 'STN',
        name: 'São Tomé and Príncipe Dobra',
        symbol: 'Db'
    },
    {
        code: 'SYP',
        name: 'Syrian Pound',
        symbol: '£'
    },
    {
        code: 'SZL',
        name: 'Swazi Lilangeni',
        symbol: 'L'
    },
    {
        code: 'THB',
        name: 'Thai Baht',
        symbol: '฿'
    },
    {
        code: 'TJS',
        name: 'Tajikistani Somoni',
        symbol: 'ЅM'
    },
    {
        code: 'TMT',
        name: 'Turkmenistani Manat',
        symbol: 'm'
    },
    {
        code: 'TND',
        name: 'Tunisian Dinar',
        symbol: 'د.ت'
    },
    {
        code: 'TOP',
        name: 'Tongan Pa\'anga',
        symbol: 'T$'
    },
    {
        code: 'TRY',
        name: 'Turkish Lira',
        symbol: '₺'
    },
    {
        code: 'TTD',
        name: 'Trinidad and Tobago Dollar',
        symbol: 'TT$'
    },
    {
        code: 'TWD',
        name: 'New Taiwan Dollar',
        symbol: 'NT$'
    },
    {
        code: 'TZS',
        name: 'Tanzanian Shilling',
        symbol: 'TSh'
    },
    {
        code: 'UAH',
        name: 'Ukrainian Hryvnia',
        symbol: '₴'
    },
    {
        code: 'UGX',
        name: 'Ugandan Shilling',
        symbol: 'USh'
    },
    {
        code: 'USD',
        name: 'United States Dollar',
        symbol: '$'
    },
    {
        code: 'UYU',
        name: 'Uruguayan Peso',
        symbol: '$U'
    },
    {
        code: 'UZS',
        name: 'Uzbekistan Som',
        symbol: 'so\'m'
    },
    {
        code: 'VES',
        name: 'Venezuelan Bolívar Soberano',
        symbol: 'Bs.S.'
    },
    {
        code: 'VND',
        name: 'Vietnamese Dong',
        symbol: '₫'
    },
    {
        code: 'VUV',
        name: 'Vanuatu Vatu',
        symbol: 'VT'
    },
    {
        code: 'WST',
        name: 'Samoan Tala',
        symbol: 'T'
    },
    {
        code: 'XAF',
        name: 'CFA Franc BEAC',
        symbol: 'FCFA'
    },
    {
        code: 'XCD',
        name: 'East Caribbean Dollar',
        symbol: '$'
    },
    {
        code: 'XOF',
        name: 'CFA Franc BCEAO',
        symbol: 'CFA'
    },
    {
        code: 'XPF',
        name: 'CFP Franc',
        symbol: '₣'
    },
    {
        code: 'YER',
        name: 'Yemeni Rial',
        symbol: '﷼'
    },
    {
        code: 'ZAR',
        name: 'South African Rand',
        symbol: 'R'
    },
    {
        code: 'ZMW',
        name: 'Zambian Kwacha',
        symbol: 'ZK'
    },
    {
        code: 'ZWL',
        name: 'Zimbabwean Dollar',
        symbol: '$'
    }
];
const countriesList = [
    {
        iso2: 'AF',
        iso3: 'AFG',
        name: 'Afghanistan',
        flag: '🇦🇫',
        region: 'Asia'
    },
    {
        iso2: 'AL',
        iso3: 'ALB',
        name: 'Albania',
        flag: '🇦🇱',
        region: 'Europe'
    },
    {
        iso2: 'DZ',
        iso3: 'DZA',
        name: 'Algeria',
        flag: '🇩🇿',
        region: 'Africa'
    },
    {
        iso2: 'AS',
        iso3: 'ASM',
        name: 'American Samoa',
        flag: '🇦🇸',
        region: 'Oceania'
    },
    {
        iso2: 'AD',
        iso3: 'AND',
        name: 'Andorra',
        flag: '🇦🇩',
        region: 'Europe'
    },
    {
        iso2: 'AO',
        iso3: 'AGO',
        name: 'Angola',
        flag: '🇦🇴',
        region: 'Africa'
    },
    {
        iso2: 'AI',
        iso3: 'AIA',
        name: 'Anguilla',
        flag: '🇦🇮',
        region: 'Americas'
    },
    {
        iso2: 'AQ',
        iso3: 'ATA',
        name: 'Antarctica',
        flag: '🇦🇶',
        region: 'Polar'
    },
    {
        iso2: 'AG',
        iso3: 'ATG',
        name: 'Antigua and Barbuda',
        flag: '🇦🇬',
        region: 'Americas'
    },
    {
        iso2: 'AR',
        iso3: 'ARG',
        name: 'Argentina',
        flag: '🇦🇷',
        region: 'Americas'
    },
    {
        iso2: 'AM',
        iso3: 'ARM',
        name: 'Armenia',
        flag: '🇦🇲',
        region: 'Asia'
    },
    {
        iso2: 'AW',
        iso3: 'ABW',
        name: 'Aruba',
        flag: '🇦🇼',
        region: 'Americas'
    },
    {
        iso2: 'AU',
        iso3: 'AUS',
        name: 'Australia',
        flag: '🇦🇺',
        region: 'Oceania'
    },
    {
        iso2: 'AT',
        iso3: 'AUT',
        name: 'Austria',
        flag: '🇦🇹',
        region: 'Europe'
    },
    {
        iso2: 'AZ',
        iso3: 'AZE',
        name: 'Azerbaijan',
        flag: '🇦🇿',
        region: 'Asia'
    },
    {
        iso2: 'BS',
        iso3: 'BHS',
        name: 'Bahamas',
        flag: '🇧🇸',
        region: 'Americas'
    },
    {
        iso2: 'BH',
        iso3: 'BHR',
        name: 'Bahrain',
        flag: '🇧🇭',
        region: 'Asia'
    },
    {
        iso2: 'BD',
        iso3: 'BGD',
        name: 'Bangladesh',
        flag: '🇧🇩',
        region: 'Asia'
    },
    {
        iso2: 'BB',
        iso3: 'BRB',
        name: 'Barbados',
        flag: '🇧🇧',
        region: 'Americas'
    },
    {
        iso2: 'BY',
        iso3: 'BLR',
        name: 'Belarus',
        flag: '🇧🇾',
        region: 'Europe'
    },
    {
        iso2: 'BE',
        iso3: 'BEL',
        name: 'Belgium',
        flag: '🇧🇪',
        region: 'Europe'
    },
    {
        iso2: 'BZ',
        iso3: 'BLZ',
        name: 'Belize',
        flag: '🇧🇿',
        region: 'Americas'
    },
    {
        iso2: 'BJ',
        iso3: 'BEN',
        name: 'Benin',
        flag: '🇧🇯',
        region: 'Africa'
    },
    {
        iso2: 'BM',
        iso3: 'BMU',
        name: 'Bermuda',
        flag: '🇧🇲',
        region: 'Americas'
    },
    {
        iso2: 'BT',
        iso3: 'BTN',
        name: 'Bhutan',
        flag: '🇧🇹',
        region: 'Asia'
    },
    {
        iso2: 'BO',
        iso3: 'BOL',
        name: 'Bolivia',
        flag: '🇧🇴',
        region: 'Americas'
    },
    {
        iso2: 'BA',
        iso3: 'BIH',
        name: 'Bosnia and Herzegovina',
        flag: '🇧🇦',
        region: 'Europe'
    },
    {
        iso2: 'BW',
        iso3: 'BWA',
        name: 'Botswana',
        flag: '🇧🇼',
        region: 'Africa'
    },
    {
        iso2: 'BR',
        iso3: 'BRA',
        name: 'Brazil',
        flag: '🇧🇷',
        region: 'Americas'
    },
    {
        iso2: 'IO',
        iso3: 'IOT',
        name: 'British Indian Ocean Territory',
        flag: '🇮🇴',
        region: 'Africa'
    },
    {
        iso2: 'BN',
        iso3: 'BRN',
        name: 'Brunei Darussalam',
        flag: '🇧🇳',
        region: 'Asia'
    },
    {
        iso2: 'BG',
        iso3: 'BGR',
        name: 'Bulgaria',
        flag: '🇧🇬',
        region: 'Europe'
    },
    {
        iso2: 'BF',
        iso3: 'BFA',
        name: 'Burkina Faso',
        flag: '🇧🇫',
        region: 'Africa'
    },
    {
        iso2: 'BI',
        iso3: 'BDI',
        name: 'Burundi',
        flag: '🇧🇮',
        region: 'Africa'
    },
    {
        iso2: 'KH',
        iso3: 'KHM',
        name: 'Cambodia',
        flag: '🇰🇭',
        region: 'Asia'
    },
    {
        iso2: 'CM',
        iso3: 'CMR',
        name: 'Cameroon',
        flag: '🇨🇲',
        region: 'Africa'
    },
    {
        iso2: 'CA',
        iso3: 'CAN',
        name: 'Canada',
        flag: '🇨🇦',
        region: 'Americas'
    },
    {
        iso2: 'CV',
        iso3: 'CPV',
        name: 'Cape Verde',
        flag: '🇨🇻',
        region: 'Africa'
    },
    {
        iso2: 'KY',
        iso3: 'CYM',
        name: 'Cayman Islands',
        flag: '🇰🇾',
        region: 'Americas'
    },
    {
        iso2: 'CF',
        iso3: 'CAF',
        name: 'Central African Republic',
        flag: '🇨🇫',
        region: 'Africa'
    },
    {
        iso2: 'TD',
        iso3: 'TCD',
        name: 'Chad',
        flag: '🇹🇩',
        region: 'Africa'
    },
    {
        iso2: 'CL',
        iso3: 'CHL',
        name: 'Chile',
        flag: '🇨🇱',
        region: 'Americas'
    },
    {
        iso2: 'CN',
        iso3: 'CHN',
        name: 'China',
        flag: '🇨🇳',
        region: 'Asia'
    },
    {
        iso2: 'CX',
        iso3: 'CXR',
        name: 'Christmas Island',
        flag: '🇨🇽',
        region: 'Oceania'
    },
    {
        iso2: 'CC',
        iso3: 'CCK',
        name: 'Cocos (Keeling) Islands',
        flag: '🇨🇨',
        region: 'Oceania'
    },
    {
        iso2: 'CO',
        iso3: 'COL',
        name: 'Colombia',
        flag: '🇨🇴',
        region: 'Americas'
    },
    {
        iso2: 'KM',
        iso3: 'COM',
        name: 'Comoros',
        flag: '🇰🇲',
        region: 'Africa'
    },
    {
        iso2: 'CG',
        iso3: 'COG',
        name: 'Congo',
        flag: '🇨🇬',
        region: 'Africa'
    },
    {
        iso2: 'CD',
        iso3: 'COD',
        name: 'Congo, Democratic Republic of the',
        flag: '🇨🇩',
        region: 'Africa'
    },
    {
        iso2: 'CK',
        iso3: 'COK',
        name: 'Cook Islands',
        flag: '🇨🇰',
        region: 'Oceania'
    },
    {
        iso2: 'CR',
        iso3: 'CRI',
        name: 'Costa Rica',
        flag: '🇨🇷',
        region: 'Americas'
    },
    {
        iso2: 'CI',
        iso3: 'CIV',
        name: 'Cote D\'Ivoire',
        flag: '🇨🇮',
        region: 'Africa'
    },
    {
        iso2: 'HR',
        iso3: 'HRV',
        name: 'Croatia',
        flag: '🇭🇷',
        region: 'Europe'
    },
    {
        iso2: 'CU',
        iso3: 'CUB',
        name: 'Cuba',
        flag: '🇨🇺',
        region: 'Americas'
    },
    {
        iso2: 'CY',
        iso3: 'CYP',
        name: 'Cyprus',
        flag: '🇨🇾',
        region: 'Asia'
    },
    {
        iso2: 'CZ',
        iso3: 'CZE',
        name: 'Czech Republic',
        flag: '🇨🇿',
        region: 'Europe'
    },
    {
        iso2: 'DK',
        iso3: 'DNK',
        name: 'Denmark',
        flag: '🇩🇰',
        region: 'Europe'
    },
    {
        iso2: 'DJ',
        iso3: 'DJI',
        name: 'Djibouti',
        flag: '🇩🇯',
        region: 'Africa'
    },
    {
        iso2: 'DM',
        iso3: 'DMA',
        name: 'Dominica',
        flag: '🇩🇲',
        region: 'Americas'
    },
    {
        iso2: 'DO',
        iso3: 'DOM',
        name: 'Dominican Republic',
        flag: '🇩🇴',
        region: 'Americas'
    },
    {
        iso2: 'EC',
        iso3: 'ECU',
        name: 'Ecuador',
        flag: '🇪🇨',
        region: 'Americas'
    },
    {
        iso2: 'EG',
        iso3: 'EGY',
        name: 'Egypt',
        flag: '🇪🇬',
        region: 'Africa'
    },
    {
        iso2: 'SV',
        iso3: 'SLV',
        name: 'El Salvador',
        flag: '🇸🇻',
        region: 'Americas'
    },
    {
        iso2: 'GQ',
        iso3: 'GNQ',
        name: 'Equatorial Guinea',
        flag: '🇬🇶',
        region: 'Africa'
    },
    {
        iso2: 'ER',
        iso3: 'ERI',
        name: 'Eritrea',
        flag: '🇪🇷',
        region: 'Africa'
    },
    {
        iso2: 'EE',
        iso3: 'EST',
        name: 'Estonia',
        flag: '🇪🇪',
        region: 'Europe'
    },
    {
        iso2: 'ET',
        iso3: 'ETH',
        name: 'Ethiopia',
        flag: '🇪🇹',
        region: 'Africa'
    },
    {
        iso2: 'FK',
        iso3: 'FLK',
        name: 'Falkland Islands (Malvinas)',
        flag: '🇫🇰',
        region: 'Americas'
    },
    {
        iso2: 'FO',
        iso3: 'FRO',
        name: 'Faroe Islands',
        flag: '🇫🇴',
        region: 'Europe'
    },
    {
        iso2: 'FJ',
        iso3: 'FJI',
        name: 'Fiji',
        flag: '🇫🇯',
        region: 'Oceania'
    },
    {
        iso2: 'FI',
        iso3: 'FIN',
        name: 'Finland',
        flag: '🇫🇮',
        region: 'Europe'
    },
    {
        iso2: 'FR',
        iso3: 'FRA',
        name: 'France',
        flag: '🇫🇷',
        region: 'Europe'
    },
    {
        iso2: 'GF',
        iso3: 'GUF',
        name: 'French Guiana',
        flag: '🇬🇫',
        region: 'Americas'
    },
    {
        iso2: 'PF',
        iso3: 'PYF',
        name: 'French Polynesia',
        flag: '🇵🇫',
        region: 'Oceania'
    },
    {
        iso2: 'GA',
        iso3: 'GAB',
        name: 'Gabon',
        flag: '🇬🇦',
        region: 'Africa'
    },
    {
        iso2: 'GM',
        iso3: 'GMB',
        name: 'Gambia',
        flag: '🇬🇲',
        region: 'Africa'
    },
    {
        iso2: 'GE',
        iso3: 'GEO',
        name: 'Georgia',
        flag: '🇬🇪',
        region: 'Asia'
    },
    {
        iso2: 'DE',
        iso3: 'DEU',
        name: 'Germany',
        flag: '🇩🇪',
        region: 'Europe'
    },
    {
        iso2: 'GH',
        iso3: 'GHA',
        name: 'Ghana',
        flag: '🇬🇭',
        region: 'Africa'
    },
    {
        iso2: 'GI',
        iso3: 'GIB',
        name: 'Gibraltar',
        flag: '🇬🇮',
        region: 'Europe'
    },
    {
        iso2: 'GR',
        iso3: 'GRC',
        name: 'Greece',
        flag: '🇬🇷',
        region: 'Europe'
    },
    {
        iso2: 'GL',
        iso3: 'GRL',
        name: 'Greenland',
        flag: '🇬🇱',
        region: 'Americas'
    },
    {
        iso2: 'GD',
        iso3: 'GRD',
        name: 'Grenada',
        flag: '🇬🇩',
        region: 'Americas'
    },
    {
        iso2: 'GP',
        iso3: 'GLP',
        name: 'Guadeloupe',
        flag: '🇬🇵',
        region: 'Americas'
    },
    {
        iso2: 'GU',
        iso3: 'GUM',
        name: 'Guam',
        flag: '🇬🇺',
        region: 'Oceania'
    },
    {
        iso2: 'GT',
        iso3: 'GTM',
        name: 'Guatemala',
        flag: '🇬🇹',
        region: 'Americas'
    },
    {
        iso2: 'GN',
        iso3: 'GIN',
        name: 'Guinea',
        flag: '🇬🇳',
        region: 'Africa'
    },
    {
        iso2: 'GW',
        iso3: 'GNB',
        name: 'Guinea-Bissau',
        flag: '🇬🇼',
        region: 'Africa'
    },
    {
        iso2: 'GY',
        iso3: 'GUY',
        name: 'Guyana',
        flag: '🇬🇾',
        region: 'Americas'
    },
    {
        iso2: 'HT',
        iso3: 'HTI',
        name: 'Haiti',
        flag: '🇭🇹',
        region: 'Americas'
    },
    {
        iso2: 'HN',
        iso3: 'HND',
        name: 'Honduras',
        flag: '🇭🇳',
        region: 'Americas'
    },
    {
        iso2: 'HK',
        iso3: 'HKG',
        name: 'Hong Kong',
        flag: '🇭🇰',
        region: 'Asia'
    },
    {
        iso2: 'HU',
        iso3: 'HUN',
        name: 'Hungary',
        flag: '🇭🇺',
        region: 'Europe'
    },
    {
        iso2: 'IS',
        iso3: 'ISL',
        name: 'Iceland',
        flag: '🇮🇸',
        region: 'Europe'
    },
    {
        iso2: 'IN',
        iso3: 'IND',
        name: 'India',
        flag: '🇮🇳',
        region: 'Asia'
    },
    {
        iso2: 'ID',
        iso3: 'IDN',
        name: 'Indonesia',
        flag: '🇮🇩',
        region: 'Asia'
    },
    {
        iso2: 'IR',
        iso3: 'IRN',
        name: 'Iran, Islamic Republic of',
        flag: '🇮🇷',
        region: 'Asia'
    },
    {
        iso2: 'IQ',
        iso3: 'IRQ',
        name: 'Iraq',
        flag: '🇮🇶',
        region: 'Asia'
    },
    {
        iso2: 'IE',
        iso3: 'IRL',
        name: 'Ireland',
        flag: '🇮🇪',
        region: 'Europe'
    },
    {
        iso2: 'IL',
        iso3: 'ISR',
        name: 'Israel',
        flag: '🇮🇱',
        region: 'Asia'
    },
    {
        iso2: 'IT',
        iso3: 'ITA',
        name: 'Italy',
        flag: '🇮🇹',
        region: 'Europe'
    },
    {
        iso2: 'JM',
        iso3: 'JAM',
        name: 'Jamaica',
        flag: '🇯🇲',
        region: 'Americas'
    },
    {
        iso2: 'JP',
        iso3: 'JPN',
        name: 'Japan',
        flag: '🇯🇵',
        region: 'Asia'
    },
    {
        iso2: 'JO',
        iso3: 'JOR',
        name: 'Jordan',
        flag: '🇯🇴',
        region: 'Asia'
    },
    {
        iso2: 'KZ',
        iso3: 'KAZ',
        name: 'Kazakhstan',
        flag: '🇰🇿',
        region: 'Asia'
    },
    {
        iso2: 'KE',
        iso3: 'KEN',
        name: 'Kenya',
        flag: '🇰🇪',
        region: 'Africa'
    },
    {
        iso2: 'KI',
        iso3: 'KIR',
        name: 'Kiribati',
        flag: '🇰🇮',
        region: 'Oceania'
    },
    {
        iso2: 'KP',
        iso3: 'PRK',
        name: 'Korea, Democratic People\'s Republic of',
        flag: '🇰🇵',
        region: 'Asia'
    },
    {
        iso2: 'KR',
        iso3: 'KOR',
        name: 'Korea, Republic of',
        flag: '🇰🇷',
        region: 'Asia'
    },
    {
        iso2: 'KW',
        iso3: 'KWT',
        name: 'Kuwait',
        flag: '🇰🇼',
        region: 'Asia'
    },
    {
        iso2: 'KG',
        iso3: 'KGZ',
        name: 'Kyrgyzstan',
        flag: '🇰🇬',
        region: 'Asia'
    },
    {
        iso2: 'LA',
        iso3: 'LAO',
        name: 'Lao People\'s Democratic Republic',
        flag: '🇱🇦',
        region: 'Asia'
    },
    {
        iso2: 'LV',
        iso3: 'LVA',
        name: 'Latvia',
        flag: '🇱🇻',
        region: 'Europe'
    },
    {
        iso2: 'LB',
        iso3: 'LBN',
        name: 'Lebanon',
        flag: '🇱🇧',
        region: 'Asia'
    },
    {
        iso2: 'LS',
        iso3: 'LSO',
        name: 'Lesotho',
        flag: '🇱🇸',
        region: 'Africa'
    },
    {
        iso2: 'LR',
        iso3: 'LBR',
        name: 'Liberia',
        flag: '🇱🇷',
        region: 'Africa'
    },
    {
        iso2: 'LY',
        iso3: 'LBY',
        name: 'Libyan Arab Jamahiriya',
        flag: '🇱🇾',
        region: 'Africa'
    },
    {
        iso2: 'LI',
        iso3: 'LIE',
        name: 'Liechtenstein',
        flag: '🇱🇮',
        region: 'Europe'
    },
    {
        iso2: 'LT',
        iso3: 'LTU',
        name: 'Lithuania',
        flag: '🇱🇹',
        region: 'Europe'
    },
    {
        iso2: 'LU',
        iso3: 'LUX',
        name: 'Luxembourg',
        flag: '🇱🇺',
        region: 'Europe'
    },
    {
        iso2: 'MO',
        iso3: 'MAC',
        name: 'Macao',
        flag: '🇲🇴',
        region: 'Asia'
    },
    {
        iso2: 'MK',
        iso3: 'MKD',
        name: 'Macedonia, the Former Yugoslav Republic of',
        flag: '🇲🇰',
        region: 'Europe'
    },
    {
        iso2: 'MG',
        iso3: 'MDG',
        name: 'Madagascar',
        flag: '🇲🇬',
        region: 'Africa'
    },
    {
        iso2: 'MW',
        iso3: 'MWI',
        name: 'Malawi',
        flag: '🇲🇼',
        region: 'Africa'
    },
    {
        iso2: 'MY',
        iso3: 'MYS',
        name: 'Malaysia',
        flag: '🇲🇾',
        region: 'Asia'
    },
    {
        iso2: 'MV',
        iso3: 'MDV',
        name: 'Maldives',
        flag: '🇲🇻',
        region: 'Asia'
    },
    {
        iso2: 'ML',
        iso3: 'MLI',
        name: 'Mali',
        flag: '🇲🇱',
        region: 'Africa'
    },
    {
        iso2: 'MT',
        iso3: 'MLT',
        name: 'Malta',
        flag: '🇲🇹',
        region: 'Europe'
    },
    {
        iso2: 'MH',
        iso3: 'MHL',
        name: 'Marshall Islands',
        flag: '🇲🇭',
        region: 'Oceania'
    },
    {
        iso2: 'MQ',
        iso3: 'MTQ',
        name: 'Martinique',
        flag: '🇲🇶',
        region: 'Americas'
    },
    {
        iso2: 'MR',
        iso3: 'MRT',
        name: 'Mauritania',
        flag: '🇲🇷',
        region: 'Africa'
    },
    {
        iso2: 'MU',
        iso3: 'MUS',
        name: 'Mauritius',
        flag: '🇲🇺',
        region: 'Africa'
    },
    {
        iso2: 'YT',
        iso3: 'MYT',
        name: 'Mayotte',
        flag: '🇾🇹',
        region: 'Africa'
    },
    {
        iso2: 'MX',
        iso3: 'MEX',
        name: 'Mexico',
        flag: '🇲🇽',
        region: 'Americas'
    },
    {
        iso2: 'FM',
        iso3: 'FSM',
        name: 'Micronesia, Federated States of',
        flag: '🇫🇲',
        region: 'Oceania'
    },
    {
        iso2: 'MD',
        iso3: 'MDA',
        name: 'Moldova, Republic of',
        flag: '🇲🇩',
        region: 'Europe'
    },
    {
        iso2: 'MC',
        iso3: 'MCO',
        name: 'Monaco',
        flag: '🇲🇨',
        region: 'Europe'
    },
    {
        iso2: 'MN',
        iso3: 'MNG',
        name: 'Mongolia',
        flag: '🇲🇳',
        region: 'Asia'
    },
    {
        iso2: 'MS',
        iso3: 'MSR',
        name: 'Montserrat',
        flag: '🇲🇸',
        region: 'Americas'
    },
    {
        iso2: 'MA',
        iso3: 'MAR',
        name: 'Morocco',
        flag: '🇲🇦',
        region: 'Africa'
    },
    {
        iso2: 'MZ',
        iso3: 'MOZ',
        name: 'Mozambique',
        flag: '🇲🇿',
        region: 'Africa'
    },
    {
        iso2: 'MM',
        iso3: 'MMR',
        name: 'Myanmar',
        flag: '🇲🇲',
        region: 'Asia'
    },
    {
        iso2: 'NA',
        iso3: 'NAM',
        name: 'Namibia',
        flag: '🇳🇦',
        region: 'Africa'
    },
    {
        iso2: 'NR',
        iso3: 'NRU',
        name: 'Nauru',
        flag: '🇳🇷',
        region: 'Oceania'
    },
    {
        iso2: 'NP',
        iso3: 'NPL',
        name: 'Nepal',
        flag: '🇳🇵',
        region: 'Asia'
    },
    {
        iso2: 'NL',
        iso3: 'NLD',
        name: 'Netherlands',
        flag: '🇳🇱',
        region: 'Europe'
    },
    {
        iso2: 'AN',
        iso3: 'ANT',
        name: 'Netherlands Antilles',
        flag: '🇳🇱',
        region: 'Americas'
    },
    {
        iso2: 'NC',
        iso3: 'NCL',
        name: 'New Caledonia',
        flag: '🇳🇨',
        region: 'Oceania'
    },
    {
        iso2: 'NZ',
        iso3: 'NZL',
        name: 'New Zealand',
        flag: '🇳🇿',
        region: 'Oceania'
    },
    {
        iso2: 'NI',
        iso3: 'NIC',
        name: 'Nicaragua',
        flag: '🇳🇮',
        region: 'Americas'
    },
    {
        iso2: 'NE',
        iso3: 'NER',
        name: 'Niger',
        flag: '🇳🇪',
        region: 'Africa'
    },
    {
        iso2: 'NG',
        iso3: 'NGA',
        name: 'Nigeria',
        flag: '🇳🇬',
        region: 'Africa'
    },
    {
        iso2: 'NU',
        iso3: 'NIU',
        name: 'Niue',
        flag: '🇳🇺',
        region: 'Oceania'
    },
    {
        iso2: 'NF',
        iso3: 'NFK',
        name: 'Norfolk Island',
        flag: '🇳🇫',
        region: 'Oceania'
    },
    {
        iso2: 'MP',
        iso3: 'MNP',
        name: 'Northern Mariana Islands',
        flag: '🇲🇵',
        region: 'Oceania'
    },
    {
        iso2: 'NO',
        iso3: 'NOR',
        name: 'Norway',
        flag: '🇳🇴',
        region: 'Europe'
    },
    {
        iso2: 'OM',
        iso3: 'OMN',
        name: 'Oman',
        flag: '🇴🇲',
        region: 'Asia'
    },
    {
        iso2: 'PK',
        iso3: 'PAK',
        name: 'Pakistan',
        flag: '🇵🇰',
        region: 'Asia'
    },
    {
        iso2: 'PW',
        iso3: 'PLW',
        name: 'Palau',
        flag: '🇵🇼',
        region: 'Oceania'
    },
    {
        iso2: 'PS',
        iso3: 'PSE',
        name: 'Palestinian Territory, Occupied',
        flag: '🇵🇸',
        region: 'Asia'
    },
    {
        iso2: 'PA',
        iso3: 'PAN',
        name: 'Panama',
        flag: '🇵🇦',
        region: 'Americas'
    },
    {
        iso2: 'PG',
        iso3: 'PNG',
        name: 'Papua New Guinea',
        flag: '🇵🇬',
        region: 'Oceania'
    },
    {
        iso2: 'PY',
        iso3: 'PRY',
        name: 'Paraguay',
        flag: '🇵🇾',
        region: 'Americas'
    },
    {
        iso2: 'PE',
        iso3: 'PER',
        name: 'Peru',
        flag: '🇵🇪',
        region: 'Americas'
    },
    {
        iso2: 'PH',
        iso3: 'PHL',
        name: 'Philippines',
        flag: '🇵🇭',
        region: 'Asia'
    },
    {
        iso2: 'PN',
        iso3: 'PCN',
        name: 'Pitcairn',
        flag: '🇵🇳',
        region: 'Oceania'
    },
    {
        iso2: 'PL',
        iso3: 'POL',
        name: 'Poland',
        flag: '🇵🇱',
        region: 'Europe'
    },
    {
        iso2: 'PT',
        iso3: 'PRT',
        name: 'Portugal',
        flag: '🇵🇹',
        region: 'Europe'
    },
    {
        iso2: 'PR',
        iso3: 'PRI',
        name: 'Puerto Rico',
        flag: '🇵🇷',
        region: 'Americas'
    },
    {
        iso2: 'QA',
        iso3: 'QAT',
        name: 'Qatar',
        flag: '🇶🇦',
        region: 'Asia'
    },
    {
        iso2: 'RE',
        iso3: 'REU',
        name: 'Reunion',
        flag: '🇷🇪',
        region: 'Africa'
    },
    {
        iso2: 'RO',
        iso3: 'ROM',
        name: 'Romania',
        flag: '🇷🇴',
        region: 'Europe'
    },
    {
        iso2: 'RU',
        iso3: 'RUS',
        name: 'Russian Federation',
        flag: '🇷🇺',
        region: 'Europe'
    },
    {
        iso2: 'RW',
        iso3: 'RWA',
        name: 'Rwanda',
        flag: '🇷🇼',
        region: 'Africa'
    },
    {
        iso2: 'SH',
        iso3: 'SHN',
        name: 'Saint Helena',
        flag: '🇸🇭',
        region: 'Africa'
    },
    {
        iso2: 'KN',
        iso3: 'KNA',
        name: 'Saint Kitts and Nevis',
        flag: '🇰🇳',
        region: 'Americas'
    },
    {
        iso2: 'LC',
        iso3: 'LCA',
        name: 'Saint Lucia',
        flag: '🇱🇨',
        region: 'Americas'
    },
    {
        iso2: 'PM',
        iso3: 'SPM',
        name: 'Saint Pierre and Miquelon',
        flag: '🇵🇲',
        region: 'Americas'
    },
    {
        iso2: 'VC',
        iso3: 'VCT',
        name: 'Saint Vincent and the Grenadines',
        flag: '🇻🇨',
        region: 'Americas'
    },
    {
        iso2: 'WS',
        iso3: 'WSM',
        name: 'Samoa',
        flag: '🇼🇸',
        region: 'Oceania'
    },
    {
        iso2: 'SM',
        iso3: 'SMR',
        name: 'San Marino',
        flag: '🇸🇲',
        region: 'Europe'
    },
    {
        iso2: 'ST',
        iso3: 'STP',
        name: 'Sao Tome and Principe',
        flag: '🇸🇹',
        region: 'Africa'
    },
    {
        iso2: 'SA',
        iso3: 'SAU',
        name: 'Saudi Arabia',
        flag: '🇸🇦',
        region: 'Asia'
    },
    {
        iso2: 'SN',
        iso3: 'SEN',
        name: 'Senegal',
        flag: '🇸🇳',
        region: 'Africa'
    },
    {
        iso2: 'CS',
        iso3: 'SCG',
        name: 'Serbia and Montenegro',
        flag: '🇷🇸',
        region: 'Europe'
    },
    {
        iso2: 'SC',
        iso3: 'SYC',
        name: 'Seychelles',
        flag: '🇸🇨',
        region: 'Africa'
    },
    {
        iso2: 'SL',
        iso3: 'SLE',
        name: 'Sierra Leone',
        flag: '🇸🇱',
        region: 'Africa'
    },
    {
        iso2: 'SG',
        iso3: 'SGP',
        name: 'Singapore',
        flag: '🇸🇬',
        region: 'Asia'
    },
    {
        iso2: 'SK',
        iso3: 'SVK',
        name: 'Slovakia',
        flag: '🇸🇰',
        region: 'Europe'
    },
    {
        iso2: 'SI',
        iso3: 'SVN',
        name: 'Slovenia',
        flag: '🇸🇮',
        region: 'Europe'
    },
    {
        iso2: 'SB',
        iso3: 'SLB',
        name: 'Solomon Islands',
        flag: '🇸🇧',
        region: 'Oceania'
    },
    {
        iso2: 'SO',
        iso3: 'SOM',
        name: 'Somalia',
        flag: '🇸🇴',
        region: 'Africa'
    },
    {
        iso2: 'ZA',
        iso3: 'ZAF',
        name: 'South Africa',
        flag: '🇿🇦',
        region: 'Africa'
    },
    {
        iso2: 'GS',
        iso3: 'SGS',
        name: 'South Georgia and the South Sandwich Islands',
        flag: '🇬🇸',
        region: 'Americas'
    },
    {
        iso2: 'ES',
        iso3: 'ESP',
        name: 'Spain',
        flag: '🇪🇸',
        region: 'Europe'
    },
    {
        iso2: 'LK',
        iso3: 'LKA',
        name: 'Sri Lanka',
        flag: '🇱🇰',
        region: 'Asia'
    },
    {
        iso2: 'SD',
        iso3: 'SDN',
        name: 'Sudan',
        flag: '🇸🇩',
        region: 'Africa'
    },
    {
        iso2: 'SR',
        iso3: 'SUR',
        name: 'Suriname',
        flag: '🇸🇷',
        region: 'Americas'
    },
    {
        iso2: 'SJ',
        iso3: 'SJM',
        name: 'Svalbard and Jan Mayen',
        flag: '🇸🇯',
        region: 'Europe'
    },
    {
        iso2: 'SZ',
        iso3: 'SWZ',
        name: 'Swaziland',
        flag: '🇸🇿',
        region: 'Africa'
    },
    {
        iso2: 'SE',
        iso3: 'SWE',
        name: 'Sweden',
        flag: '🇸🇪',
        region: 'Europe'
    },
    {
        iso2: 'CH',
        iso3: 'CHE',
        name: 'Switzerland',
        flag: '🇨🇭',
        region: 'Europe'
    },
    {
        iso2: 'SY',
        iso3: 'SYR',
        name: 'Syrian Arab Republic',
        flag: '🇸🇾',
        region: 'Asia'
    },
    {
        iso2: 'TW',
        iso3: 'TWN',
        name: 'Taiwan, Province of China',
        flag: '🇹🇼',
        region: 'Asia'
    },
    {
        iso2: 'TJ',
        iso3: 'TJK',
        name: 'Tajikistan',
        flag: '🇹🇯',
        region: 'Asia'
    },
    {
        iso2: 'TZ',
        iso3: 'TZA',
        name: 'Tanzania, United Republic of',
        flag: '🇹🇿',
        region: 'Africa'
    },
    {
        iso2: 'TH',
        iso3: 'THA',
        name: 'Thailand',
        flag: '🇹🇭',
        region: 'Asia'
    },
    {
        iso2: 'TL',
        iso3: 'TLS',
        name: 'Timor-Leste',
        flag: '🇹🇱',
        region: 'Asia'
    },
    {
        iso2: 'TG',
        iso3: 'TGO',
        name: 'Togo',
        flag: '🇹🇬',
        region: 'Africa'
    },
    {
        iso2: 'TK',
        iso3: 'TKL',
        name: 'Tokelau',
        flag: '🇹🇰',
        region: 'Oceania'
    },
    {
        iso2: 'TO',
        iso3: 'TON',
        name: 'Tonga',
        flag: '🇹🇴',
        region: 'Oceania'
    },
    {
        iso2: 'TT',
        iso3: 'TTO',
        name: 'Trinidad and Tobago',
        flag: '🇹🇹',
        region: 'Americas'
    },
    {
        iso2: 'TN',
        iso3: 'TUN',
        name: 'Tunisia',
        flag: '🇹🇳',
        region: 'Africa'
    },
    {
        iso2: 'TR',
        iso3: 'TUR',
        name: 'Turkey',
        flag: '🇹🇷',
        region: 'Asia'
    },
    {
        iso2: 'TM',
        iso3: 'TKM',
        name: 'Turkmenistan',
        flag: '🇹🇲',
        region: 'Asia'
    },
    {
        iso2: 'TC',
        iso3: 'TCA',
        name: 'Turks and Caicos Islands',
        flag: '🇹🇨',
        region: 'Americas'
    },
    {
        iso2: 'TV',
        iso3: 'TUV',
        name: 'Tuvalu',
        flag: '🇹🇻',
        region: 'Oceania'
    },
    {
        iso2: 'UG',
        iso3: 'UGA',
        name: 'Uganda',
        flag: '🇺🇬',
        region: 'Africa'
    },
    {
        iso2: 'UA',
        iso3: 'UKR',
        name: 'Ukraine',
        flag: '🇺🇦',
        region: 'Europe'
    },
    {
        iso2: 'UM',
        iso3: 'UMI',
        name: 'United States Minor Outlying Islands',
        flag: '🇺🇸',
        region: 'Oceania'
    },
    {
        iso2: 'UY',
        iso3: 'URY',
        name: 'Uruguay',
        flag: '🇺🇾',
        region: 'Americas'
    },
    {
        iso2: 'UZ',
        iso3: 'UZB',
        name: 'Uzbekistan',
        flag: '🇺🇿',
        region: 'Asia'
    },
    {
        iso2: 'VU',
        iso3: 'VUT',
        name: 'Vanuatu',
        flag: '🇻🇺',
        region: 'Oceania'
    },
    {
        iso2: 'VE',
        iso3: 'VEN',
        name: 'Venezuela',
        flag: '🇻🇪',
        region: 'Americas'
    },
    {
        iso2: 'VN',
        iso3: 'VNM',
        name: 'Viet Nam',
        flag: '🇻🇳',
        region: 'Asia'
    },
    {
        iso2: 'VG',
        iso3: 'VGB',
        name: 'Virgin Islands, British',
        flag: '🇻🇬',
        region: 'Americas'
    },
    {
        iso2: 'VI',
        iso3: 'VIR',
        name: 'Virgin Islands, U.S.',
        flag: '🇻-🇮',
        region: 'Americas'
    },
    {
        iso2: 'WF',
        iso3: 'WLF',
        name: 'Wallis and Futuna',
        flag: '🇼🇫',
        region: 'Oceania'
    },
    {
        iso2: 'EH',
        iso3: 'ESH',
        name: 'Western Sahara',
        flag: '🇪🇭',
        region: 'Africa'
    },
    {
        iso2: 'YE',
        iso3: 'YEM',
        name: 'Yemen',
        flag: '🇾🇪',
        region: 'Asia'
    },
    {
        iso2: 'ZM',
        iso3: 'ZMB',
        name: 'Zambia',
        flag: '🇿🇲',
        region: 'Africa'
    },
    {
        iso2: 'ZW',
        iso3: 'ZWE',
        name: 'Zimbabwe',
        flag: '🇿🇼',
        region: 'Africa'
    },
    {
        iso2: 'US',
        iso3: 'USA',
        name: 'United States',
        flag: '🇺🇸',
        region: 'Americas'
    },
    {
        iso2: 'GB',
        iso3: 'GBR',
        name: 'United Kingdom',
        flag: '🇬🇧',
        region: 'Europe'
    },
    {
        iso2: 'AE',
        iso3: 'ARE',
        name: 'United Arab Emirates',
        flag: '🇦🇪',
        region: 'Asia'
    }
];
const modulesList = [
    {
        key: 'system',
        name: 'System',
        desc: 'System Configuration & Admin'
    },
    {
        key: 'hms',
        name: 'Health Management',
        desc: 'Complete Hospital & Clinical Operations'
    },
    {
        key: 'crm',
        name: 'CRM',
        desc: 'Customer Relationship & Pipeline Management'
    },
    {
        key: 'finance',
        name: 'Finance & Accounting',
        desc: 'General Ledger, Billing, & Financial Reports'
    },
    {
        key: 'inventory',
        name: 'Inventory & SCM',
        desc: 'Supply Chain, Stock, & Procurement'
    },
    {
        key: 'hr',
        name: 'HR & Payroll',
        desc: 'Human Capital Management & Payroll Processing'
    },
    {
        key: 'analytics',
        name: 'Analytics & BI',
        desc: 'Business Intelligence & Data Visualization'
    },
    {
        key: 'projects',
        name: 'Project Management',
        desc: 'Task Tracking, Milestones & Collaboration'
    },
    {
        key: 'assets',
        name: 'Asset Management',
        desc: 'Fixed Asset Tracking & Maintenance'
    },
    {
        key: 'pos',
        name: 'Point of Sale (POS)',
        desc: 'Retail & Pharmacy Billing Terminals'
    },
    {
        key: 'documents',
        name: 'Document Management',
        desc: 'Secure File Storage & Digital Archiving'
    },
    {
        key: 'communication',
        name: 'Communication',
        desc: 'Internal Chat, Email & Notifications'
    },
    {
        key: 'learning',
        name: 'LMS',
        desc: 'Learning Management & Employee Training'
    }
];
}),
"[project]/src/app/actions/public.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"00143f8c84506b69cb73bc68ac91d94d46f27d2df5":"getModules","00b7fe8b05bb8c30e10e03eebc2412071280af754a":"getCountries","00ebd8959c3595874252192e0c421bedda1314781b":"getCurrencies"},"",""] */ __turbopack_context__.s([
    "getCountries",
    ()=>getCountries,
    "getCurrencies",
    ()=>getCurrencies,
    "getModules",
    ()=>getModules
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$static$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/static-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function getCountries() {
    try {
        const count = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].countries.count();
        if (count === 0) {
            console.log("Auto-seeding Countries...");
            // Use fallback mechanism if this fails or takes too long
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].countries.createMany({
                    data: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$static$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["countriesList"].map((c)=>({
                            iso2: c.iso2,
                            iso3: c.iso3,
                            name: c.name,
                            flag: c.flag,
                            region: c.region,
                            is_active: true
                        })),
                    skipDuplicates: true
                });
            } catch (seedError) {
                console.error("Auto-seeding countries failed:", seedError);
            }
        }
        const countries = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].countries.findMany({
            where: {
                is_active: true
            },
            orderBy: {
                name: 'asc'
            },
            select: {
                id: true,
                name: true,
                iso2: true
            }
        });
        if (countries.length === 0) throw new Error("No countries found after seeding attempting");
        return countries;
    } catch (error) {
        console.error("Failed to fetch countries, returning static fallback:", error);
        // Fallback to static data so UI doesn't break
        // NOTE: We return iso2 as 'id' here. Downstream actions (like signup) 
        // must handle these short IDs by resolving them to DB UUIDs.
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$static$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["countriesList"].map((c)=>({
                id: c.iso2,
                name: c.name,
                iso2: c.iso2
            }));
    }
}
async function getCurrencies() {
    try {
        const count = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].currencies.count();
        if (count === 0) {
            console.log("Auto-seeding Currencies...");
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].currencies.createMany({
                    data: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$static$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["currenciesList"].map((c)=>({
                            code: c.code,
                            name: c.name,
                            symbol: c.symbol,
                            is_active: true
                        })),
                    skipDuplicates: true
                });
            } catch (seedError) {
                console.error("Auto-seeding currencies failed:", seedError);
            }
        }
        const currencies = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].currencies.findMany({
            where: {
                is_active: true
            },
            orderBy: {
                code: 'asc'
            },
            select: {
                id: true,
                code: true,
                name: true,
                symbol: true
            }
        });
        if (currencies.length === 0) throw new Error("No currencies found after seeding attempting");
        return currencies;
    } catch (error) {
        console.error("Failed to fetch currencies, returning static fallback:", error);
        // Fallback to static data so UI doesn't break
        // NOTE: We return code as 'id' here. Downstream actions (like signup) 
        // must handle these short IDs by resolving them to DB UUIDs.
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$static$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["currenciesList"].map((c)=>({
                id: c.code,
                code: c.code,
                name: c.name,
                symbol: c.symbol
            }));
    }
}
async function getModules() {
    try {
        const count = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].modules.count();
        if (count === 0) {
            console.log("Auto-seeding Modules...");
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].modules.createMany({
                    data: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$static$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["modulesList"].map((m)=>({
                            module_key: m.key,
                            name: m.name,
                            description: m.desc,
                            is_active: true
                        })),
                    skipDuplicates: true
                });
            } catch (seedError) {
                console.error("Auto-seeding modules failed:", seedError);
            }
        }
        const modules = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].modules.findMany({
            where: {
                is_active: true,
                module_key: {
                    notIn: [
                        'system'
                    ]
                }
            },
            orderBy: {
                name: 'asc'
            },
            select: {
                id: true,
                module_key: true,
                name: true,
                description: true
            }
        });
        if (modules.length === 0) throw new Error("No modules found after seeding attempting");
        return modules;
    } catch (error) {
        console.error("Failed to fetch modules, returning static fallback:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$static$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["modulesList"].filter((m)=>m.key !== 'system').map((m)=>({
                id: m.key,
                module_key: m.key,
                name: m.name,
                description: m.desc
            }));
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getCountries,
    getCurrencies,
    getModules
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCountries, "00b7fe8b05bb8c30e10e03eebc2412071280af754a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCurrencies, "00ebd8959c3595874252192e0c421bedda1314781b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getModules, "00143f8c84506b69cb73bc68ac91d94d46f27d2df5", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/signup/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/branding.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/actions/navigation.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/app/actions/rbac.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/src/app/actions/public.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/branding.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/navigation.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/rbac.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/public.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
"[project]/.next-internal/server/app/signup/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/branding.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/actions/navigation.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/app/actions/rbac.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/src/app/actions/public.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "00143f8c84506b69cb73bc68ac91d94d46f27d2df5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getModules"],
    "001d846c340e0b0dc03631f5abb6a919b37618be0c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auditAndFixMenuPermissions"],
    "007da8a383d393bc3e0c883ec0243c8394a0988218",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMenuItems"],
    "0080b205f1acae75e69db7a6bcb4173b5d3e51a5dc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllPermissions"],
    "00a6f84a8e6477a0104223506d74bc4dfe9481b3d4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRoles"],
    "00b3d4806a5f0a59b1ba375ae313a48c60867df645",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedRolesAndPermissions"],
    "00b7fe8b05bb8c30e10e03eebc2412071280af754a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCountries"],
    "00ebd8959c3595874252192e0c421bedda1314781b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrencies"],
    "4007ccdb75d82f2c333a0ba67acb0596c56de86a40",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantBrandingByHost"],
    "404f8eef86e7a928257f21d02e0dcb5aeb8922daf9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRole"],
    "407793196ca4fd907dc854c625b75c571dcc2579b3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkPermission"],
    "408f1a5020e6ba461ea2ab0f6cc2c241264c88fb87",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteRole"],
    "40a18ef6ef9ff95f524a8fc838c6be9565ccc80335",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserPermissions"],
    "606e3e7a5e134743dc9da6334a1f1334fef80e91dd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signup"],
    "6079b9612e1fe52d990c15df9204be8bd86d38ceb2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateRole"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$signup$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/signup/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions/branding.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/actions/navigation.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/app/actions/rbac.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/src/app/actions/public.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/branding.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/navigation.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/rbac.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/public.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$signup$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$signup$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=_6b090115._.js.map