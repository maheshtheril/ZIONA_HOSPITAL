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
"[project]/src/app/actions/appointment.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"400c20c3242d9ec681541ba29d024c15419e6e9923":"updateAppointmentDetails","408286af0dd3bd2d67448b9352533aee38bea53e42":"createAppointment","603265b48c110da148cea32af57be4ad9aa9e022c6":"getAppointmentsByClinician","60784d78965906d3fa7bb25a8e3f7fc16bbb25e266":"updateAppointmentStatus","60c021be98a362a1fe876b51ae89a00102ea0ba49d":"getAppointmentsProp","704260891327b42a52553211f322a7c7c002e3e9d7":"updateAppointmentDate"},"",""] */ __turbopack_context__.s([
    "createAppointment",
    ()=>createAppointment,
    "getAppointmentsByClinician",
    ()=>getAppointmentsByClinician,
    "getAppointmentsProp",
    ()=>getAppointmentsProp,
    "updateAppointmentDate",
    ()=>updateAppointmentDate,
    "updateAppointmentDetails",
    ()=>updateAppointmentDetails,
    "updateAppointmentStatus",
    ()=>updateAppointmentStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-rsc] (ecmascript)"); // Correct auth import
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
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
async function getAppointmentsProp(start, end) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId) return {
        success: false,
        error: "Unauthorized"
    };
    try {
        const appointments = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_appointments.findMany({
            where: {
                tenant_id: session.user.tenantId,
                company_id: session.user.companyId,
                starts_at: {
                    gte: start,
                    lte: end
                },
                deleted_at: null
            }
        });
        // Manual fetch of patients
        const patientIds = appointments.map((a)=>a.patient_id).filter((id)=>id);
        const patients = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_patient.findMany({
            where: {
                id: {
                    in: patientIds
                },
                tenant_id: session.user.tenantId // Filter by tenant
            },
            select: {
                id: true,
                first_name: true,
                last_name: true,
                patient_number: true
            }
        });
        const patientMap = new Map(patients.map((p)=>[
                p.id,
                p
            ]));
        // Transform for calendar
        const events = appointments.map((apt)=>{
            const patient = apt.patient_id ? patientMap.get(apt.patient_id) : null;
            return {
                id: apt.id,
                title: patient ? `${patient.first_name} ${patient.last_name}` : 'Unknown Patient',
                start: apt.starts_at,
                end: apt.ends_at,
                resource: apt,
                status: apt.status
            };
        });
        return {
            success: true,
            data: events
        };
    } catch (error) {
        console.error("Failed to fetch appointments:", error);
        return {
            success: false,
            error: "Failed to fetch appointments"
        };
    }
}
async function createAppointment(formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    // Allow if tenantId is present. Fallback companyId to tenantId if missing.
    if (!session?.user?.id || !session?.user?.tenantId) {
        return {
            error: "Unauthorized"
        };
    }
    const companyId = session.user.companyId || session.user.tenantId;
    const patientId = formData.get("patient_id");
    const clinicianId = formData.get("clinician_id");
    const dateStr = formData.get("date");
    const timeStr = formData.get("time");
    // Advanced Fields
    const type = formData.get("type") || 'consultation';
    const mode = formData.get("mode") || 'in_person';
    const priority = formData.get("priority") || 'normal';
    const notes = formData.get("notes");
    if (!patientId || !clinicianId || !dateStr || !timeStr) {
        return {
            error: "Missing required fields"
        };
    }
    // Combine date and time
    const startsAt = new Date(`${dateStr}T${timeStr}:00`);
    // =====================================================================
    // [SERVER-SIDE REG FEE GUARD]
    // Uses the exact same flags that billing.ts sets when collecting/expiring fees
    // =====================================================================
    const patient = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_patient.findUnique({
        where: {
            id: patientId
        },
        select: {
            metadata: true
        }
    });
    if (patient) {
        const meta = patient.metadata || {};
        // Flag 1: New patient created but fee never collected (set in patient-v10.ts)
        if (meta.status === 'awaiting_payment') {
            return {
                error: '⛔ Registration fee is pending. Collect it before booking.'
            };
        }
        // Flag 2: billing.ts explicitly sets this to false when registration expires
        if (meta.registration_fees_paid === false) {
            return {
                error: '⛔ Patient registration has expired. Renew before booking.'
            };
        }
        // Flag 3: Check the actual expiry date if present
        if (meta.registration_expiry && new Date(meta.registration_expiry) < new Date()) {
            return {
                error: '⛔ Patient registration expired on ' + new Date(meta.registration_expiry).toLocaleDateString('en-IN') + '. Renew before booking.'
            };
        }
    }
    // =====================================================================
    // NUCLEAR LOCK: Prevent concurrent bookings for the same patient/clinician on this day
    const lockKey = `${patientId}_${clinicianId}_${dateStr}`;
    const startOfDay = new Date(`${dateStr}T00:00:00`);
    const endOfDay = new Date(`${dateStr}T23:59:59`);
    let createdApt;
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
            // [ATOMIC-GUARD] Acquire session-level lock for this specific booking context
            await tx.$executeRawUnsafe(`SELECT pg_advisory_xact_lock(hashtext('${lockKey}'))`);
            // 1. DUPLICATE CHECK (Inside lock)
            const existing = await tx.hms_appointments.findFirst({
                where: {
                    patient_id: patientId,
                    clinician_id: clinicianId,
                    starts_at: {
                        gte: startOfDay,
                        lte: endOfDay
                    },
                    status: {
                        notIn: [
                            'cancelled'
                        ]
                    },
                    deleted_at: null
                }
            });
            if (existing) {
                return {
                    _isDuplicate: true,
                    data: existing
                };
            }
            // 2. Fetch doctor's slot duration (using tx)
            const clinician = await tx.hms_clinicians.findUnique({
                where: {
                    id: clinicianId
                },
                select: {
                    consultation_slot_duration: true
                }
            });
            const durationMinutes = clinician?.consultation_slot_duration || 30;
            const endsAt = new Date(startsAt.getTime() + durationMinutes * 60000);
            // 3. Create Appointment
            const created = await tx.$queryRaw`
                INSERT INTO hms_appointments (
                    id, tenant_id, company_id, patient_id, clinician_id,
                    starts_at, ends_at, type, mode, priority, notes, status, created_by, branch_id
                ) VALUES (
                    gen_random_uuid(),
                    ${session.user.tenantId}::uuid,
                    ${companyId}::uuid,
                    ${patientId}::uuid,
                    ${clinicianId}::uuid,
                    ${startsAt}::timestamptz,
                    ${endsAt}::timestamptz,
                    ${type},
                    ${mode},
                    ${priority},
                    ${notes || null},
                    'scheduled',
                    ${session.user.id}::uuid,
                    ${session.user.current_branch_id || null}::uuid
                )
                RETURNING *
            `;
            return created[0];
        });
        if (result._isDuplicate) {
            console.log(`[BOOKING-DEDUPLICATED] Patient ${patientId} already booked for ${dateStr}. Returning existing.`);
            return {
                success: true,
                data: result.data
            };
        }
        createdApt = result;
    } catch (error) {
        console.error("CRITICAL_BOOKING_FAILURE:", error.message);
        return {
            error: `Appointment allocation failed: ${error.message}`
        };
    }
    const source = formData.get("source");
    const nextAction = formData.get("next_action");
    if (nextAction === 'prescribe') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/hms/prescriptions/new?patientId=${patientId}&appointmentId=${createdApt.id}`);
    }
    if (nextAction === 'bill') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/hms/billing/new?patientId=${patientId}&appointmentId=${createdApt.id}`);
    }
    if (source === 'dashboard' || source === 'terminal') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/hms/reception/dashboard");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/hms/dashboard");
        return {
            success: true,
            data: createdApt
        };
    }
    // Default Fallback
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/hms/appointments");
}
async function updateAppointmentDate(id, start, end) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId) return {
        success: false,
        error: "Unauthorized"
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_appointments.update({
            where: {
                id,
                company_id: session.user.companyId
            },
            data: {
                starts_at: start,
                ends_at: end
            }
        });
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to update appointment:", error);
        return {
            success: false,
            error: "Failed to update appointment"
        };
    }
}
async function updateAppointmentStatus(id, status) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id) return {
        success: false,
        error: "Unauthorized"
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_appointments.update({
            where: {
                id,
                tenant_id: session.user.tenantId // Security: Ensure specific tenant
            },
            data: {
                status,
                updated_by: session.user.id,
                updated_at: new Date()
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/hms/reception/dashboard");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/hms/nursing");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/hms/doctor/dashboard");
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to update status:", error);
        return {
            success: false,
            error: "Failed to update status"
        };
    }
}
async function updateAppointmentDetails(formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id) return {
        error: "Unauthorized"
    };
    const id = formData.get("id");
    const patientId = formData.get("patient_id");
    const clinicianId = formData.get("clinician_id");
    const dateStr = formData.get("date");
    const timeStr = formData.get("time");
    const type = formData.get("type");
    const mode = formData.get("mode");
    const priority = formData.get("priority");
    const notes = formData.get("notes");
    if (!id || !clinicianId || !dateStr || !timeStr) {
        return {
            error: "Missing required fields"
        };
    }
    // Combine date and time
    const startsAt = new Date(`${dateStr}T${timeStr}:00`);
    // Fetch doctor's slot duration to recalculate end time
    const clinician = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_clinicians.findUnique({
        where: {
            id: clinicianId
        },
        select: {
            consultation_slot_duration: true
        }
    });
    const durationMinutes = clinician?.consultation_slot_duration || 30;
    const endsAt = new Date(startsAt.getTime() + durationMinutes * 60000);
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_appointments.update({
            where: {
                id,
                tenant_id: session.user.tenantId
            },
            data: {
                patient_id: patientId,
                clinician_id: clinicianId,
                starts_at: startsAt,
                ends_at: endsAt,
                type,
                mode,
                priority,
                notes,
                updated_by: session.user.id,
                updated_at: new Date()
            }
        });
    } catch (error) {
        console.error("Failed to update details:", error);
        return {
            error: "Failed to update appointment details"
        };
    }
    // Handle redirection outside try/catch
    const source = formData.get("source");
    if (source === 'dashboard' || source === 'terminal') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/hms/reception/dashboard");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/hms/dashboard");
        return {
            success: true,
            data: {
                id
            }
        } // editingAppointment was undefined here
        ;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/hms/appointments");
}
async function getAppointmentsByClinician(clinicianId, date) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    // Allow if tenantId is present. Fallback companyId to tenantId if missing.
    if (!session?.user?.id || !session?.user?.tenantId) {
        return {
            success: false,
            error: "Unauthorized"
        };
    }
    try {
        // Parse date for day range (UTC safe approach for local comparison)
        const startOfDay = new Date(`${date}T00:00:00`);
        const endOfDay = new Date(`${date}T23:59:59`);
        const appointments = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_appointments.findMany({
            where: {
                tenant_id: session.user.tenantId,
                clinician_id: clinicianId,
                starts_at: {
                    gte: startOfDay,
                    lte: endOfDay
                },
                status: {
                    not: 'cancelled'
                },
                deleted_at: null
            },
            select: {
                id: true,
                starts_at: true,
                ends_at: true,
                status: true,
                clinician_id: true,
                patient_id: true
            }
        });
        return {
            success: true,
            data: appointments
        };
    } catch (error) {
        console.error("Failed to fetch clinician appointments:", error);
        return {
            success: false,
            error: "Failed to fetch appointments"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getAppointmentsProp,
    createAppointment,
    updateAppointmentDate,
    updateAppointmentStatus,
    updateAppointmentDetails,
    getAppointmentsByClinician
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAppointmentsProp, "60c021be98a362a1fe876b51ae89a00102ea0ba49d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createAppointment, "408286af0dd3bd2d67448b9352533aee38bea53e42", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateAppointmentDate, "704260891327b42a52553211f322a7c7c002e3e9d7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateAppointmentStatus, "60784d78965906d3fa7bb25a8e3f7fc16bbb25e266", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateAppointmentDetails, "400c20c3242d9ec681541ba29d024c15419e6e9923", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAppointmentsByClinician, "603265b48c110da148cea32af57be4ad9aa9e022c6", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions/patient-v10.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"4029c36e9e4cbb469275ea3b8aa688934c39bc7192":"getPatientById","605a1b1564ee1b438dc1de20d9db2102e6ebff257e":"createPatientV10","609644000fc9717ba32a47c8f4a54f0367faed0a69":"createPatientQuick"},"",""] */ __turbopack_context__.s([
    "createPatientQuick",
    ()=>createPatientQuick,
    "createPatientV10",
    ()=>createPatientV10,
    "getPatientById",
    ()=>getPatientById
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-rsc] (ecmascript)");
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
const normalizeGender = (gender)=>{
    if (!gender) return 'unknown';
    const g = gender.toLowerCase().trim();
    if (g === 'm' || g === 'male') return 'male';
    if (g === 'f' || g === 'female') return 'female';
    if (g === 'other') return 'other';
    return 'unknown';
};
async function createPatientV10(patientId, formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id || !session?.user?.tenantId) {
        return {
            error: "SECURITY_AUTH_EXPIRED: Please login to verify clinical credentials."
        };
    }
    const userId = session.user.id;
    const tenantId = session.user.tenantId;
    let companyId = session.user.companyId;
    // 1. DATA SCRUBBING (Standardizing Inputs)
    const firstName = formData.get("first_name")?.trim();
    const lastName = formData.get("last_name")?.trim() || "";
    const phone = formData.get("phone")?.trim();
    if (!firstName || !phone) {
        return {
            error: "VALIDATION_FAILED: Patient Identity (Name/Phone) is mandatory for clinical indexing."
        };
    }
    // 2. CONTEXT RESOLUTION
    if (!companyId) {
        const fallback = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].company.findFirst({
            where: {
                tenant_id: tenantId,
                enabled: true
            }
        });
        companyId = fallback?.id ?? null;
    }
    if (!companyId) return {
        error: "FACILITY_NOT_LINKED: Terminal must be associated with an active medical branch."
    };
    try {
        // 3. DUPLICATE CHECK (Mobile Number)
        const isUpdate = patientId && typeof patientId === 'string' && patientId.length > 30;
        if (!isUpdate) {
            const existingPatient = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_patient.findFirst({
                where: {
                    tenant_id: tenantId,
                    contact: {
                        path: [
                            'phone'
                        ],
                        equals: phone
                    }
                },
                select: {
                    id: true,
                    first_name: true
                }
            });
            if (existingPatient) {
                return {
                    error: `DUPLICATE_FOUND: A patient with this mobile number (${phone}) is already registered as ${existingPatient.first_name}.`,
                    data: existingPatient
                };
            }
        }
        // -----------------------------------------------------------------------------------
        // MASTER PATIENT INDEX (UPSERT) - DIRECT MODE (No Transaction, No Others)
        // -----------------------------------------------------------------------------------
        const registrationDate = new Date();
        const expiryDate = new Date();
        // [AUDIT-FIX] Set to ancient date (10 years ago) so it's clearly expired and not confused with a 1-year cycle
        expiryDate.setFullYear(expiryDate.getFullYear() - 10);
        const address = {
            street: formData.get('street'),
            city: formData.get('city'),
            zip: formData.get('zip')
        };
        const metadata = {
            created_via: 'WorldClass-V10-Atomic-Static',
            registration_date: registrationDate.toISOString(),
            registration_expiry: expiryDate.toISOString(),
            title: formData.get("title"),
            last_rcm_audit: new Date().toISOString(),
            status: 'awaiting_payment',
            accounting_group: formData.get('accounting_group') || 'general'
        };
        const upsertPayload = {
            first_name: firstName,
            last_name: lastName,
            gender: normalizeGender(formData.get('gender')),
            dob: formData.get('dob') ? new Date(formData.get('dob')) : null,
            contact: {
                phone,
                email: formData.get('email'),
                address
            },
            metadata: metadata,
            updated_at: new Date(),
            updated_by: userId
        };
        let patient;
        try {
            let invoiceId = null;
            if (isUpdate) {
                patient = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_patient.update({
                    where: {
                        id: patientId
                    },
                    data: upsertPayload
                });
            } else {
                patient = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_patient.create({
                    data: {
                        ...upsertPayload,
                        id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                        tenant_id: tenantId,
                        company_id: companyId,
                        patient_number: `PAT-${Date.now().toString().slice(-6)}`,
                        created_at: new Date(),
                        created_by: userId,
                        status: 'active'
                    }
                });
            // [RCM-AUDIT] Automatic billing removed. Clinical terminal will now handle registration triggers.
            }
            return {
                success: true,
                message: isUpdate ? "Master Patient Index Updated." : "New Patient Registered.",
                data: patient,
                invoiceId: invoiceId
            };
        } catch (err) {
            throw err; // Let catch block below handle it
        }
    } catch (err) {
        const errorDetail = {
            message: err.message,
            code: err.code,
            meta: err.meta,
            stack: err.stack?.split('\n')[0]
        };
        console.error("CRITICAL_RCM_FAILURE:", JSON.stringify(errorDetail, null, 2));
        return {
            error: `[RCM-FATAL] HMS_CORE_EXCEPTION: ${err.message} (Code: ${err.code || 'N/A'})`,
            details: JSON.stringify(errorDetail)
        };
    }
}
async function getPatientById(id) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.tenantId) return {
        error: "Unauthorized"
    };
    try {
        const patient = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_patient.findUnique({
            where: {
                id,
                tenant_id: session.user.tenantId
            }
        });
        return {
            success: true,
            data: patient
        };
    } catch (err) {
        return {
            error: err.message
        };
    }
}
async function createPatientQuick(name, phone) {
    const formData = new FormData();
    const [first, ...rest] = name.trim().split(' ');
    formData.append('first_name', first);
    formData.append('last_name', rest.join(' ') || '.');
    formData.append('phone', phone);
    // Default dummy address to pass validation/scrubbing
    formData.append('street', 'Walk-in');
    formData.append('city', 'Local');
    formData.append('zip', '000000');
    return await createPatientV10(null, formData);
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createPatientV10,
    getPatientById,
    createPatientQuick
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createPatientV10, "605a1b1564ee1b438dc1de20d9db2102e6ebff257e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPatientById, "4029c36e9e4cbb469275ea3b8aa688934c39bc7192", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createPatientQuick, "609644000fc9717ba32a47c8f4a54f0367faed0a69", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions/upload-file.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"603b64924af9a59930e1af6f2434856fdc89fe2319":"uploadFile"},"",""] */ __turbopack_context__.s([
    "uploadFile",
    ()=>uploadFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function uploadFile(formData, folder = 'documents') {
    // Wrap EVERYTHING in try-catch to prevent 500s from crashing the client
    try {
        console.log("Upload Action Started");
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        console.log("Upload Auth Session (v2):", session?.user?.id);
        if (!session?.user?.id) {
            console.error("Upload Unauthorized: No user ID");
            return {
                error: "Unauthorized"
            };
        }
        const file = formData.get('file');
        if (!file) {
            return {
                error: "No file uploaded"
            };
        }
        console.log(`[Upload] File Received: ${file.name}, Type: ${file.type}, Size: ${(file.size / 1024 / 1024).toFixed(2)} MB`);
        const startTime = Date.now();
        // Validate file type (PDF, Image, CSV, Excel)
        const validTypes = [
            'application/pdf',
            'image/jpeg',
            'image/png',
            'image/webp',
            'text/csv',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ];
        if (!validTypes.includes(file.type)) {
            console.error("Invalid file type:", file.type);
            return {
                error: "Invalid file type. Allowed: PDF, Images, CSV, Excel."
            };
        }
        // Validate size (e.g. 10MB)
        if (file.size > 10 * 1024 * 1024) {
            return {
                error: "File size must be less than 10MB"
            };
        }
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        // Create unique filename
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
        const originalName = file.name.replace(/[^a-zA-Z0-9.-]/g, ''); // Sanitize
        // STRATEGY CHANGE: Use Base64 Data URI instead of File System
        // This is more robust for serverless/container environments like Render
        // where the filesystem might be ephemeral or read-only.
        const base64String = buffer.toString('base64');
        const mimeType = file.type;
        const dataUri = `data:${mimeType};base64,${base64String}`;
        console.log("Upload Success: Converted to Data URI");
        return {
            success: true,
            url: dataUri,
            filename: originalName,
            size: file.size,
            type: file.type
        };
    } catch (error) {
        console.error("Upload Fatal Error:", error);
        return {
            error: `Upload failed: ${error.message}`
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    uploadFile
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(uploadFile, "603b64924af9a59930e1af6f2434856fdc89fe2319", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/currency.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatCurrency",
    ()=>formatCurrency,
    "formatINR",
    ()=>formatINR,
    "getCurrencyCode",
    ()=>getCurrencyCode,
    "getCurrencySymbol",
    ()=>getCurrencySymbol
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2d$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/currency-constants.ts [app-rsc] (ecmascript)");
;
;
function getCurrencySymbol(countryCode) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2d$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CURRENCY_SYMBOLS"][countryCode?.toUpperCase()] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2d$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYSTEM_DEFAULT_CURRENCY_SYMBOL"];
}
function getCurrencyCode(countryCode) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2d$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CURRENCY_CODES"][countryCode?.toUpperCase()] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2d$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYSTEM_DEFAULT_CURRENCY_CODE"];
}
function formatCurrency(amount, currencyOrCountry = 'USD') {
    let symbol = '$';
    const code = currencyOrCountry?.toUpperCase();
    if (code === 'INR' || code === 'IN') symbol = '₹';
    else if (code === 'USD' || code === 'US') symbol = '$';
    else if (code === 'GBP' || code === 'GB') symbol = '£';
    else if (code === 'EUR' || code === 'EU') symbol = '€';
    else if (code === 'AED' || code === 'AE') symbol = 'AED';
    else if (code === 'SAR' || code === 'SA') symbol = 'SAR';
    else if (code === 'AUD' || code === 'AU') symbol = 'A$';
    else if (code === 'CAD' || code === 'CA') symbol = 'C$';
    else symbol = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2d$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CURRENCY_SYMBOLS"][code] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2d$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYSTEM_DEFAULT_CURRENCY_SYMBOL"];
    const formatted = amount.toLocaleString('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    if (symbol.length === 1 || symbol === 'A$' || symbol === 'C$' || symbol === 'S$') {
        return `${symbol}${formatted}`;
    } else {
        return `${formatted} ${symbol}`;
    }
}
function formatINR(amount) {
    return `₹${amount.toLocaleString('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
}
}),
"[project]/src/app/actions/inventory.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"0034f67eeb4402a9e52c1cb7e004952b423c0a2f06":"getUOMs","005142d0a94aa9d10ae5bfe4277a9d724d32d8b1d5":"getInventoryDashboardStats","0066f5b04395e53b78090453ac7141aa0a91827993":"getLocations","008823941ba46327a90626b6578b6bbe0a347a7954":"getTaxRates","008cf95df8c7cd7c9dd0d4cec4bbdf6f528ebefbc1":"getCategories","00a57ecf33125b2134b93b2780a918f2bab25dc7ba":"getUOMCategories","00deec17a90f51ed5be70331723928edcf29ec8e02":"getManufacturers","00e0bbde732274ad8c749dddf99bb0162dd32892df":"getSuppliers","40142bc73045eed4951877f762a8ab4991035d4135":"importProductsCSV","40225acc51348d2b2b038ef6cc9838bc5917557365":"getProductBatches","4033810eacbb3566a4010c3cf91bdbd6ab0d04a7a5":"updateLocation","403dfabd7762c3af12e5a377080f02f595d1ce8bd1":"deleteCategory","405772251548342bf35d8f4344c5cca012a82564c6":"findOrCreateProductsBatch","405af090296d3e1d186c19d84e74d86a699718aeae":"deleteManufacturer","405ea5f61332b87f910801a08e96cc850db1edf06a":"findOrCreateUOM","406246e6eb3eed165d823b9c6d3a4456f110b3ba9d":"getProduct","407e892819e4d55dbcac292ead980e6dad658b5b4e":"findOrCreateUOMsBatch","40af1a8efc986b4cd0b10ca91e837c129c27194257":"createProduct","40bb30e2489683d3e2e4425f1d11b075d8c3b2eae6":"updateManufacturer","40cf043b06ec813c2296effd2efa4a4b8bce461068":"deleteLocation","40e32da27a9dd319487ff23436bc383254aff855fd":"updateProduct","40e88ba52f0e7891f26b7b12f5d2b03953cf0eb32a":"getBestBatch","40ea087eb469d52883501b029f3157c06cb9cd2ba0":"deleteUOM","40fa1cddf21806349414ee6842509e264740bc5257":"getBatchHistory","60265134bd4b9ca77db4d59e6f58f8c80c638404b0":"createCategory","6030b393eccb2a94607b792355933ea0d1d7a942e0":"updateUOM","6035e23407b4df99ef7b061187cc18f9d55474ede3":"createManufacturer","606974da8dd67798b181eb0f13a52f83598addbc3e":"getSuppliersList","607d1a46f57734b2bb5a03a9234ae59728ffd1e04f":"getStockMoves","608d2e9973bc8408fae2ea07918a2ecc50c0abb58a":"adjustStock","608d9c9f3b67f13df0b0f705ee39c75f0fafb90001":"getStockReport","6094ee5da228ee9381bf547282100e1b66dedc866a":"createUOMCategory","60a44f4f08ebdda32538199597a6d8ce1ae8b2d6b5":"updateProductBatch","60be42115a889f22545e6ef659ae39e21afd13fa28":"createUOM","60c7e89b0e3357039ceec6d27e788134a3d1eef0f9":"createLocation","60e2f1339bb04f4a4848366006bbec106990929c19":"findOrCreateProduct","60e380aa5c9dd55db7e9c4662eda057ff0f0d45dba":"updateCategory","704b5927e84e8eae2a32e403917120dde926674933":"getProductsPremium"},"",""] */ __turbopack_context__.s([
    "adjustStock",
    ()=>adjustStock,
    "createCategory",
    ()=>createCategory,
    "createLocation",
    ()=>createLocation,
    "createManufacturer",
    ()=>createManufacturer,
    "createProduct",
    ()=>createProduct,
    "createUOM",
    ()=>createUOM,
    "createUOMCategory",
    ()=>createUOMCategory,
    "deleteCategory",
    ()=>deleteCategory,
    "deleteLocation",
    ()=>deleteLocation,
    "deleteManufacturer",
    ()=>deleteManufacturer,
    "deleteUOM",
    ()=>deleteUOM,
    "findOrCreateProduct",
    ()=>findOrCreateProduct,
    "findOrCreateProductsBatch",
    ()=>findOrCreateProductsBatch,
    "findOrCreateUOM",
    ()=>findOrCreateUOM,
    "findOrCreateUOMsBatch",
    ()=>findOrCreateUOMsBatch,
    "getBatchHistory",
    ()=>getBatchHistory,
    "getBestBatch",
    ()=>getBestBatch,
    "getCategories",
    ()=>getCategories,
    "getInventoryDashboardStats",
    ()=>getInventoryDashboardStats,
    "getLocations",
    ()=>getLocations,
    "getManufacturers",
    ()=>getManufacturers,
    "getProduct",
    ()=>getProduct,
    "getProductBatches",
    ()=>getProductBatches,
    "getProductsPremium",
    ()=>getProductsPremium,
    "getStockMoves",
    ()=>getStockMoves,
    "getStockReport",
    ()=>getStockReport,
    "getSuppliers",
    ()=>getSuppliers,
    "getSuppliersList",
    ()=>getSuppliersList,
    "getTaxRates",
    ()=>getTaxRates,
    "getUOMCategories",
    ()=>getUOMCategories,
    "getUOMs",
    ()=>getUOMs,
    "importProductsCSV",
    ()=>importProductsCSV,
    "updateCategory",
    ()=>updateCategory,
    "updateLocation",
    ()=>updateLocation,
    "updateManufacturer",
    ()=>updateManufacturer,
    "updateProduct",
    ()=>updateProduct,
    "updateProductBatch",
    ()=>updateProductBatch,
    "updateUOM",
    ()=>updateUOM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/currency.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2d$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/currency-constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
// --- Product Management ---
// -- Helpers for Dropdowns --
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
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
;
async function getInventoryDashboardStats() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId) return {
        error: "Unauthorized"
    };
    try {
        const companyId = session.user.companyId;
        // 1. Total Products
        const totalProducts = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product.count({
            where: {
                company_id: companyId,
                is_active: true
            }
        });
        // 2. Low Stock Alerts (Using default threshold of 10)
        const lowStockItems = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_stock_levels.findMany({
            where: {
                company_id: companyId
            }
        });
        const lowStockCount = lowStockItems.filter((item)=>{
            const qty = Number(item.quantity || 0);
            const threshold = 10; // Default threshold
            return qty < threshold;
        }).length;
        // 3. Inventory Value (Sum of Stock * Unit Cost)
        // We'll approximate this by summing hms_stock_ledger current value or
        // by summing stock_levels.quantity * product.price (if cost not available)
        // Let's use hms_stock_levels * product.price (assuming price ~ value for now if cost is missing)
        const stockItems = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_stock_levels.findMany({
            where: {
                company_id: companyId
            },
            include: {
                hms_product: {
                    select: {
                        price: true
                    } // Using selling price as proxy if cost is null
                }
            }
        });
        let totalValue = 0;
        stockItems.forEach((item)=>{
            const qty = Number(item.quantity || 0);
            const price = Number(item.hms_product?.price || 0); // fallback to 0
            totalValue += qty * price;
        });
        // 4. Recent Activity (Stock Moves)
        const recentMoves = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_stock_ledger.findMany({
            where: {
                company_id: companyId
            },
            take: 5,
            orderBy: {
                created_at: 'desc'
            },
            include: {
                hms_product: {
                    select: {
                        name: true,
                        sku: true
                    }
                }
            }
        });
        return {
            success: true,
            data: {
                totalProducts,
                lowStockCount,
                totalValue,
                recentMoves: recentMoves.map((m)=>({
                        id: m.id,
                        product: m.hms_product?.name || 'Unknown',
                        sku: m.hms_product?.sku,
                        type: m.movement_type,
                        qty: Number(m.qty),
                        date: m.created_at
                    }))
            }
        };
    } catch (error) {
        console.error("Failed to fetch inventory stats:", error);
        return {
            error: "Failed to load dashboard data"
        };
    }
}
;
;
function logDebug(message) {
    try {
        const logPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'inventory_debug.log');
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].appendFileSync(logPath, new Date().toISOString() + ': ' + message + '\n');
    } catch (e) {
    // ignore
    }
}
async function getSuppliers() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    // Debug logging
    logDebug(`getSuppliers: companyId=${session?.user?.companyId}, tenantId=${session?.user?.tenantId}`);
    if (!session?.user?.companyId) return [];
    try {
        let suppliers = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_supplier.findMany({
            where: {
                company_id: session.user.companyId,
                is_active: true
            },
            select: {
                id: true,
                name: true
            }
        });
        if (suppliers.length === 0) {
            logDebug('getSuppliers: Seeding default supplier');
            if (session.user.tenantId) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_supplier.create({
                    data: {
                        tenant_id: session.user.tenantId,
                        company_id: session.user.companyId,
                        name: 'General Vendor',
                        is_active: true
                    }
                });
                suppliers = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_supplier.findMany({
                    where: {
                        company_id: session.user.companyId,
                        is_active: true
                    },
                    select: {
                        id: true,
                        name: true
                    }
                });
            } else {
                logDebug('getSuppliers: Missing tenantId, cannot seed');
            }
        }
        return suppliers;
    } catch (error) {
        logDebug(`getSuppliers Error: ${error}`);
        console.error("Failed to fetch suppliers:", error);
        return [];
    }
}
async function getTaxRates() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    logDebug(`getTaxRates: companyId=${session?.user?.companyId}`);
    if (!session?.user?.companyId) return [];
    try {
        const companyId = session.user.companyId;
        // 1. Fetch Company Specific Taxes (Custom Definition)
        const customTaxes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].company_taxes.findMany({
            where: {
                company_id: companyId,
                is_active: true
            },
            select: {
                id: true,
                name: true,
                rate: true
            }
        });
        // 2. Fetch Global Mapped Taxes (Map Table)
        const taxMaps = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].company_tax_maps.findMany({
            where: {
                company_id: companyId,
                is_active: true
            },
            include: {
                tax_rates: {
                    select: {
                        id: true,
                        name: true,
                        rate: true
                    }
                }
            }
        });
        const mappedTaxes = taxMaps.map((tm)=>({
                id: tm.tax_rates.id,
                name: tm.tax_rates.name,
                rate: Number(tm.tax_rates.rate)
            }));
        // 3. Fetch Accounting Settings Defaults (Company Settings)
        const settings = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].company_accounting_settings.findFirst({
            where: {
                company_id: companyId
            },
            include: {
                tax_rates_company_accounting_settings_default_sale_tax_idTotax_rates: true,
                tax_rates_company_accounting_settings_default_purchase_tax_idTotax_rates: true
            }
        });
        const settingTaxes = [];
        if (settings?.tax_rates_company_accounting_settings_default_sale_tax_idTotax_rates) {
            const t = settings.tax_rates_company_accounting_settings_default_sale_tax_idTotax_rates;
            settingTaxes.push({
                id: t.id,
                name: t.name,
                rate: Number(t.rate)
            });
        }
        if (settings?.tax_rates_company_accounting_settings_default_purchase_tax_idTotax_rates) {
            const t = settings.tax_rates_company_accounting_settings_default_purchase_tax_idTotax_rates;
            settingTaxes.push({
                id: t.id,
                name: t.name,
                rate: Number(t.rate)
            });
        }
        // Combine and Deduplicate
        const allTaxesMap = new Map();
        [
            ...customTaxes.map((t)=>({
                    ...t,
                    rate: Number(t.rate)
                })),
            ...mappedTaxes,
            ...settingTaxes
        ].forEach((t)=>{
            allTaxesMap.set(t.id, t);
        });
        // 4. Fallback: Fetch Country Default Taxes if auto-load is true or no taxes found
        const compSettings = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].company_settings.findUnique({
            where: {
                company_id: companyId
            }
        });
        if (allTaxesMap.size === 0 || compSettings?.auto_load_taxes_from_country !== false) {
            const company = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].company.findUnique({
                where: {
                    id: companyId
                },
                select: {
                    country_id: true
                }
            });
            const countryTaxesWhere = {};
            if (company?.country_id) {
                countryTaxesWhere.country_id = company.country_id;
            }
            const countryTaxes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].country_tax_mappings.findMany({
                where: countryTaxesWhere,
                include: {
                    tax_rates: true
                }
            });
            countryTaxes.forEach((ct)=>{
                if (ct.tax_rates && !allTaxesMap.has(ct.tax_rates.id)) {
                    allTaxesMap.set(ct.tax_rates.id, {
                        id: ct.tax_rates.id,
                        name: ct.tax_rates.name,
                        rate: Number(ct.tax_rates.rate)
                    });
                }
            });
        }
        // 5. Final Data-Driven Fallback: If still nothing, seed global rates if empty and try again
        if (allTaxesMap.size === 0) {
            const { ensureGlobalTaxes } = await __turbopack_context__.A("[project]/src/lib/services/tax-seed.ts [app-rsc] (ecmascript, async loader)");
            await ensureGlobalTaxes();
            const globalTaxes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].tax_rates.findMany({
                take: 50
            });
            globalTaxes.forEach((t)=>{
                allTaxesMap.set(t.id, {
                    id: t.id,
                    name: t.name,
                    rate: Number(t.rate)
                });
            });
        }
        let allTaxes = Array.from(allTaxesMap.values());
        return allTaxes;
    } catch (error) {
        logDebug(`getTaxRates Error: ${error}`);
        console.error("Failed to fetch tax rates:", error);
        return [];
    }
}
async function getUOMs() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    logDebug(`getUOMs: companyId=${session?.user?.companyId}`);
    if (!session?.user?.companyId || !session?.user?.tenantId) return [];
    try {
        let uoms = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_uom.findMany({
            where: {
                company_id: session.user.companyId,
                is_active: true
            },
            orderBy: {
                name: 'asc'
            },
            select: {
                id: true,
                name: true,
                category_id: true,
                ratio: true,
                rounding: true,
                uom_type: true
            }
        });
        // Serialization fix: convert Decimals to numbers
        let serializedUoms = uoms.map((u)=>({
                ...u,
                ratio: Number(u.ratio),
                rounding: Number(u.rounding || 0)
            }));
        // --- AUTO-HEAL LEGACY CATEGORIES ---
        // If there are multiple 'reference' units in the same category, extract them into their own categories
        // to comply with Odoo's 1-reference-per-category rule.
        const refUoms = serializedUoms.filter((u)=>u.uom_type === 'reference');
        const refsByCategory = refUoms.reduce((acc, u)=>{
            acc[u.category_id] = acc[u.category_id] || [];
            acc[u.category_id].push(u);
            return acc;
        }, {});
        let needsRefetch = false;
        for (const [catId, refsArray] of Object.entries(refsByCategory)){
            const refs = refsArray;
            if (refs.length > 1) {
                logDebug(`getUOMs: Auto-healing category ${catId}. Found ${refs.length} reference units.`);
                // Keep the first one in the category, move the rest to new categories
                for(let i = 1; i < refs.length; i++){
                    const refToMove = refs[i];
                    let catName = `${refToMove.name} Category`;
                    let newCategory = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_uom_category.findFirst({
                        where: {
                            company_id: session.user.companyId,
                            name: catName
                        }
                    });
                    if (!newCategory) {
                        newCategory = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_uom_category.create({
                            data: {
                                id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                                tenant_id: session.user.tenantId,
                                company_id: session.user.companyId,
                                name: catName
                            }
                        });
                    }
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_uom.update({
                        where: {
                            id: refToMove.id
                        },
                        data: {
                            category_id: newCategory.id
                        }
                    });
                    needsRefetch = true;
                }
            }
        }
        if (needsRefetch) {
            uoms = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_uom.findMany({
                where: {
                    company_id: session.user.companyId,
                    is_active: true
                },
                orderBy: {
                    name: 'asc'
                },
                select: {
                    id: true,
                    name: true,
                    category_id: true,
                    ratio: true,
                    rounding: true,
                    uom_type: true
                }
            });
            serializedUoms = uoms.map((u)=>({
                    ...u,
                    ratio: Number(u.ratio),
                    rounding: Number(u.rounding || 0)
                }));
        }
        // --- END AUTO-HEAL ---
        return serializedUoms;
    } catch (error) {
        logDebug(`getUOMs Error: ${error}`);
        console.error("Failed to fetch UOMs:", error);
        return [];
    }
}
async function getUOMCategories() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId) return [];
    try {
        const categories = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_uom_category.findMany({
            where: {
                company_id: session.user.companyId
            },
            include: {
                hms_uom: true
            }
        });
        // Serialization fix for Nested UOM records
        const serialized = categories.map((cat)=>({
                ...cat,
                hms_uom: cat.hms_uom.map((u)=>({
                        ...u,
                        ratio: Number(u.ratio),
                        rounding: Number(u.rounding || 0)
                    }))
            }));
        // Removed heavy auto-seeding to prevent Serverless/Vercel timeout.
        return serialized;
    } catch (error) {
        console.error("Failed to fetch UOM categories:", error);
        return [];
    }
}
async function createUOMCategory(prevState, formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId || !session?.user?.tenantId) return {
        error: "Unauthorized"
    };
    const name = formData.get("name");
    if (!name) return {
        error: "Name is required"
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_uom_category.create({
            data: {
                id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                tenant_id: session.user.tenantId,
                company_id: session.user.companyId,
                name
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/uom');
        return {
            success: true
        };
    } catch (error) {
        return {
            error: "Failed to create category"
        };
    }
}
async function createUOM(prevState, formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId || !session?.user?.tenantId) return {
        error: "Unauthorized"
    };
    const name = formData.get("name");
    let categoryId = formData.get("categoryId");
    const type = formData.get("type") || 'reference';
    const ratio = Number(formData.get("ratio") || 1);
    const baseUnitId = formData.get("baseUnitId");
    if (!name) return {
        error: "Name is required"
    };
    try {
        if (type === 'derived') {
            if (!baseUnitId) return {
                error: "Base Unit is required for alternative units."
            };
            const baseUnit = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_uom.findUnique({
                where: {
                    id: baseUnitId,
                    company_id: session.user.companyId
                }
            });
            if (!baseUnit) return {
                error: "Selected Base Unit not found."
            };
            categoryId = baseUnit.category_id;
        } else {
            let catName = `${name} Category`;
            let newCategory = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_uom_category.findFirst({
                where: {
                    company_id: session.user.companyId,
                    name: catName
                }
            });
            if (!newCategory) {
                newCategory = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_uom_category.create({
                    data: {
                        id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                        tenant_id: session.user.tenantId,
                        company_id: session.user.companyId,
                        name: catName
                    }
                });
            }
            categoryId = newCategory.id;
        }
        const uomRatio = type === 'reference' ? 1 : ratio;
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_uom.create({
            data: {
                id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                tenant_id: session.user.tenantId,
                company_id: session.user.companyId,
                category_id: categoryId,
                name,
                uom_type: type,
                ratio: new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].Decimal(uomRatio)
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/uom');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/products/new');
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to create UOM:", error);
        return {
            error: "Failed to create UOM: " + error.message
        };
    }
}
async function findOrCreateUOM(name) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId || !session?.user?.tenantId) return "";
    const cleanName = name.trim().toUpperCase() || "PCS";
    try {
        // 1. Search existing
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_uom.findFirst({
            where: {
                company_id: session.user.companyId,
                name: {
                    equals: cleanName,
                    mode: 'insensitive'
                }
            }
        });
        if (existing) return existing.id;
        // 2. Create Category if missing
        let catName = `${cleanName} Category`;
        let category = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_uom_category.findFirst({
            where: {
                company_id: session.user.companyId,
                name: catName
            }
        });
        if (!category) {
            category = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_uom_category.create({
                data: {
                    id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                    tenant_id: session.user.tenantId,
                    company_id: session.user.companyId,
                    name: catName
                }
            });
        }
        // 3. Create UOM
        const newUom = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_uom.create({
            data: {
                id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                tenant_id: session.user.tenantId,
                company_id: session.user.companyId,
                category_id: category.id,
                name: cleanName,
                uom_type: 'reference',
                ratio: 1,
                rounding: 0.01,
                is_active: true
            }
        });
        return newUom.id;
    } catch (error) {
        console.error("findOrCreateUOM Error:", error);
        return "";
    }
}
async function findOrCreateUOMsBatch(names) {
    const results = new Map();
    const uniqueNames = Array.from(new Set(names.filter(Boolean).map((n)=>n.trim().toUpperCase())));
    // Process sequentially to avoid race conditions on category creation for now, 
    // or we could optimize with more complex logic. Given the small number of lines, 
    // sequential is safer and usually fast enough for a single scan.
    for (const name of uniqueNames){
        const id = await findOrCreateUOM(name);
        if (id) results.set(name, id);
    }
    return results;
}
async function updateUOM(prevState, formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId || !session?.user?.tenantId) return {
        error: "Unauthorized"
    };
    const id = formData.get("id");
    const name = formData.get("name");
    let categoryId = formData.get("categoryId");
    const type = formData.get("type") || 'reference';
    const ratio = Number(formData.get("ratio") || 1);
    const baseUnitId = formData.get("baseUnitId");
    if (!id || !name) return {
        error: "ID and Name are required"
    };
    try {
        const uomRatio = type === 'reference' ? 1 : ratio;
        let updateData = {
            name,
            uom_type: type,
            ratio: new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].Decimal(uomRatio)
        };
        const currentUom = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_uom.findUnique({
            where: {
                id,
                company_id: session.user.companyId
            }
        });
        if (type === 'derived') {
            if (!baseUnitId) return {
                error: "Base Unit is required for alternative units."
            };
            const baseUnit = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_uom.findUnique({
                where: {
                    id: baseUnitId,
                    company_id: session.user.companyId
                }
            });
            if (!baseUnit) return {
                error: "Selected Base Unit not found."
            };
            updateData.category_id = baseUnit.category_id;
        } else if (currentUom?.uom_type === 'derived') {
            // Type changed from derived to reference. Needs its own category.
            let catName = `${name} Category`;
            let newCategory = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_uom_category.findFirst({
                where: {
                    company_id: session.user.companyId,
                    name: catName
                }
            });
            if (!newCategory) {
                newCategory = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_uom_category.create({
                    data: {
                        id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                        tenant_id: session.user.tenantId,
                        company_id: session.user.companyId,
                        name: catName
                    }
                });
            }
            updateData.category_id = newCategory.id;
        }
        if (categoryId && !updateData.category_id) {
            updateData.category_id = categoryId;
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_uom.update({
            where: {
                id,
                company_id: session.user.companyId
            },
            data: updateData
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/uom');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/products/new');
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to update UOM:", error);
        return {
            error: "Failed to update UOM"
        };
    }
}
async function deleteUOM(id) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId) return {
        error: "Unauthorized"
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_uom.update({
            where: {
                id,
                company_id: session.user.companyId
            },
            data: {
                is_active: false
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/uom');
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to delete UOM:", error);
        return {
            error: "Failed to delete UOM. It might be in use."
        };
    }
}
async function getCategories() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId || !session?.user?.tenantId) return [];
    try {
        let categories = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product_category.findMany({
            where: {
                company_id: session.user.companyId
            },
            select: {
                id: true,
                name: true,
                default_tax_rate_id: true
            }
        });
        if (categories.length === 0) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product_category.create({
                data: {
                    tenant_id: session.user.tenantId,
                    company_id: session.user.companyId,
                    name: "General"
                }
            });
            categories = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product_category.findMany({
                where: {
                    company_id: session.user.companyId
                },
                select: {
                    id: true,
                    name: true,
                    default_tax_rate_id: true
                }
            });
        }
        return categories;
    } catch (error) {
        console.error("Failed to fetch categories:", error);
        return [];
    }
}
async function createCategory(prevState, formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId || !session?.user?.tenantId) return {
        error: "Unauthorized"
    };
    const name = formData.get("name");
    const taxRateId = formData.get("taxRateId");
    if (!name) return {
        error: "Name is required"
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product_category.create({
            data: {
                tenant_id: session.user.tenantId,
                company_id: session.user.companyId,
                name,
                default_tax_rate_id: taxRateId || null
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/categories');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/products/new');
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to create category:", error);
        return {
            error: "Failed to create category"
        };
    }
}
async function updateCategory(prevState, formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId) return {
        error: "Unauthorized"
    };
    const id = formData.get("id");
    const name = formData.get("name");
    const taxRateId = formData.get("taxRateId");
    if (!id || !name) return {
        error: "ID and Name are required"
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product_category.update({
            where: {
                id,
                company_id: session.user.companyId
            },
            data: {
                name,
                default_tax_rate_id: taxRateId || null
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/categories');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/products/new');
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to update category:", error);
        return {
            error: "Failed to update category"
        };
    }
}
async function deleteCategory(id) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId) return {
        error: "Unauthorized"
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product_category.delete({
            where: {
                id,
                company_id: session.user.companyId
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/categories');
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to delete category:", error);
        return {
            error: "Failed to delete category"
        };
    }
}
async function getManufacturers() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId) return [];
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_manufacturer.findMany({
            where: {
                company_id: session.user.companyId,
                is_active: true
            },
            orderBy: {
                name: 'asc'
            },
            select: {
                id: true,
                name: true,
                description: true,
                website: true
            }
        });
    } catch (error) {
        console.error("Failed to fetch manufacturers:", error);
        return [];
    }
}
async function createManufacturer(prevState, formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId || !session?.user?.tenantId) return {
        error: "Unauthorized"
    };
    const name = formData.get("name");
    const website = formData.get("website");
    const description = formData.get("description");
    if (!name) return {
        error: "Name is required"
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_manufacturer.create({
            data: {
                tenant_id: session.user.tenantId,
                company_id: session.user.companyId,
                name,
                website: website || null,
                description: description || null
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/manufacturers');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/products/new');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/products/[id]', 'page');
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to create manufacturer:", error);
        return {
            error: "Failed to create manufacturer: " + error.message
        };
    }
}
async function updateManufacturer(formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId) return {
        error: "Unauthorized"
    };
    const id = formData.get("id");
    const name = formData.get("name");
    const website = formData.get("website");
    const description = formData.get("description");
    if (!id || !name) return {
        error: "ID and Name are required"
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_manufacturer.update({
            where: {
                id,
                company_id: session.user.companyId
            },
            data: {
                name,
                website,
                description
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/manufacturers');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/products/new');
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to update manufacturer:", error);
        return {
            error: "Failed to update manufacturer"
        };
    }
}
async function deleteManufacturer(id) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId) return {
        error: "Unauthorized"
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_manufacturer.update({
            where: {
                id,
                company_id: session.user.companyId
            },
            data: {
                is_active: false
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/manufacturers');
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to delete manufacturer:", error);
        return {
            error: "Failed to delete manufacturer"
        };
    }
}
async function getLocations() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId) return [];
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].global_stock_location.findMany({
            where: {
                company_id: session.user.companyId,
                is_active: true
            },
            orderBy: {
                name: 'asc'
            },
            select: {
                id: true,
                name: true,
                location_type: true,
                code: true
            }
        });
    } catch (error) {
        console.error("Failed to fetch locations:", error);
        return [];
    }
}
async function createLocation(prevState, formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId || !session?.user?.tenantId) return {
        error: "Unauthorized"
    };
    const name = formData.get("name");
    const code = formData.get("code");
    const type = formData.get("type") || 'internal';
    if (!name) return {
        error: "Name is required"
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].global_stock_location.create({
            data: {
                tenant_id: session.user.tenantId,
                company_id: session.user.companyId,
                name,
                code,
                location_type: type
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/locations');
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to create location:", error);
        return {
            error: "Failed to create location"
        };
    }
}
async function updateLocation(formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId) return {
        error: "Unauthorized"
    };
    const id = formData.get("id");
    const name = formData.get("name");
    const code = formData.get("code");
    const type = formData.get("type");
    if (!id || !name) return {
        error: "ID and Name are required"
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].global_stock_location.update({
            where: {
                id,
                company_id: session.user.companyId
            },
            data: {
                name,
                code,
                location_type: type
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/locations');
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to update location:", error);
        return {
            error: "Failed to update location"
        };
    }
}
async function deleteLocation(id) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId) return {
        error: "Unauthorized"
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].global_stock_location.update({
            where: {
                id,
                company_id: session.user.companyId
            },
            data: {
                is_active: false
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/locations');
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to delete location:", error);
        return {
            error: "Failed to delete location"
        };
    }
}
async function getProductsPremium(query, page = 1, supplierId) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId) return {
        error: "Unauthorized"
    };
    const pageSize = 10;
    const skip = (page - 1) * pageSize;
    try {
        const where = {
            company_id: session.user.companyId,
            is_active: true
        };
        // If supplierId is provided, filter products to only those bought from this supplier before
        if (supplierId) {
            const supplierProductIds = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_purchase_receipt_line.findMany({
                where: {
                    hms_purchase_receipt: {
                        supplier_id: supplierId,
                        company_id: session.user.companyId
                    }
                },
                select: {
                    product_id: true
                }
            });
            const uniqueIds = Array.from(new Set(supplierProductIds.map((sp)=>sp.product_id)));
            if (uniqueIds.length > 0) {
                where.id = {
                    in: uniqueIds
                };
            } else {
                // If no items found for this supplier, we don't apply the filter strictly 
                // but we could. User asked to "filter", but if 0 items, search yields 0.
                // Let's stick to the request: filter.
                where.id = "NOT_FOUND"; // Force zero results if strictly filtering and no purchase history
            }
        }
        if (query) {
            where.OR = [
                {
                    name: {
                        contains: query,
                        mode: 'insensitive'
                    }
                },
                {
                    sku: {
                        contains: query,
                        mode: 'insensitive'
                    }
                },
                {
                    default_barcode: {
                        contains: query,
                        mode: 'insensitive'
                    }
                }
            ];
        }
        const [products, total, companySettings] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: {
                    created_at: 'desc'
                },
                include: {
                    hms_stock_levels: {
                        select: {
                            quantity: true
                        }
                    },
                    hms_product_category_rel: {
                        include: {
                            hms_product_category: true
                        }
                    },
                    hms_uom: true
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product.count({
                where
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].company_settings.findUnique({
                where: {
                    company_id: session.user.companyId
                },
                select: {
                    currencies: {
                        select: {
                            symbol: true
                        }
                    }
                }
            })
        ]);
        const processed = products.map((p)=>{
            const totalStock = p.hms_stock_levels.reduce((sum, lvl)=>sum + Number(lvl.quantity || 0), 0);
            let status = 'In Stock';
            if (totalStock === 0) status = 'Out of Stock';
            else if (totalStock < 10) status = 'Low Stock';
            // Extract brand from metadata if exists
            const metadata = p.metadata || {};
            return {
                ...p,
                price: Number(p.price || 0),
                totalStock,
                stockStatus: status,
                category: p.hms_product_category_rel[0]?.hms_product_category?.name || 'Uncategorized',
                brand: metadata.brand || '',
                uom: p.hms_uom?.name || p.uom,
                default_cost: Number(metadata.cost_price || p.default_cost || 0),
                mrp: Number(metadata.mrp || p.price || 0)
            };
        });
        // Default to system default if not set
        const currencySymbol = companySettings?.currencies?.symbol || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$currency$2d$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYSTEM_DEFAULT_CURRENCY_SYMBOL"];
        return {
            success: true,
            data: processed,
            meta: {
                total,
                page,
                totalPages: Math.ceil(total / pageSize),
                currencySymbol
            }
        };
    } catch (error) {
        console.error("DEBUG: getProductsPremium failed:", error);
        return {
            error: "Failed to fetch products: " + (error instanceof Error ? error.message : String(error))
        };
    }
}
async function createProduct(formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id || !session.user.companyId || !session.user.tenantId) {
        return {
            error: "Unauthorized"
        };
    }
    // Essential Fields
    const name = formData.get("name");
    const sku = formData.get("sku");
    const price = parseFloat(formData.get("price")) || 0;
    const type = formData.get("type") || 'goods';
    const description = formData.get("description");
    // New Fields
    const brand = formData.get("brand");
    const barcode = formData.get("barcode");
    const uomId = formData.get("uomId");
    const supplierId = formData.get("supplierId");
    const taxRateId = formData.get("taxRateId");
    const categoryId = formData.get("categoryId");
    const tracking = formData.get("tracking") || 'none'; // none, batch, serial
    const imageUrl = formData.get("image_url");
    const manufacturerId = formData.get("manufacturerId");
    if (!name || !sku) {
        return {
            error: "Name and SKU are required"
        };
    }
    const costPrice = parseFloat(formData.get("costPrice")) || 0;
    const mrp = parseFloat(formData.get("mrp")) || 0;
    try {
        // Construct Metadata
        const metadata = {
            brand: brand || null,
            tracking: tracking,
            cost_price: costPrice,
            mrp: mrp
        };
        let uomName = 'each';
        if (uomId) {
            const uomData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_uom.findUnique({
                where: {
                    id: uomId
                },
                select: {
                    name: true
                }
            });
            if (uomData) uomName = uomData.name;
        }
        const newProduct = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product.create({
            data: {
                tenant_id: session.user.tenantId,
                company_id: session.user.companyId,
                name,
                sku,
                is_stockable: type === 'goods',
                is_service: type === 'service',
                price,
                description,
                uom: uomName,
                uom_id: uomId || null,
                manufacturer_id: manufacturerId || null,
                default_barcode: barcode || null,
                metadata,
                created_by: session.user.id,
                is_active: true
            }
        });
        // Link Supplier if provided
        if (supplierId) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product_supplier.create({
                data: {
                    tenant_id: session.user.tenantId,
                    company_id: session.user.companyId,
                    product_id: newProduct.id,
                    supplier_id: supplierId,
                    is_primary: true
                }
            });
        }
        // Link Tax Rate if provided
        if (taxRateId) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].product_tax_rules.create({
                data: {
                    tenant_id: session.user.tenantId,
                    company_id: session.user.companyId,
                    product_id: newProduct.id,
                    tax_rate_id: taxRateId,
                    priority: 1
                }
            });
        }
        // Link Image if provided
        if (imageUrl) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product_image.create({
                data: {
                    tenant_id: session.user.tenantId,
                    company_id: session.user.companyId,
                    product_id: newProduct.id,
                    url: imageUrl,
                    created_by: session.user.id
                }
            });
        }
        // Link Category if provided
        if (categoryId) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product_category_rel.create({
                data: {
                    product_id: newProduct.id,
                    category_id: categoryId
                }
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/products');
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to create product:", error);
        return {
            error: "Failed to create product"
        };
    }
}
async function getProduct(id) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId) return null;
    try {
        const product = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product.findUnique({
            where: {
                id,
                company_id: session.user.companyId
            },
            include: {
                hms_product_supplier: {
                    where: {
                        is_primary: true
                    },
                    take: 1
                },
                product_tax_rules: {
                    include: {
                        tax_rates: true
                    },
                    take: 1,
                    orderBy: {
                        priority: 'asc'
                    }
                },
                hms_product_image: {
                    take: 1,
                    orderBy: {
                        created_at: 'desc'
                    }
                },
                hms_product_category_rel: true,
                hms_stock_levels: true
            }
        });
        if (!product) return null;
        const metadata = product.metadata || {};
        return {
            ...product,
            price: Number(product.price || 0),
            mrp: Number(metadata.mrp || product.price || 0),
            hsn: metadata.hsn || '',
            packing: metadata.packing || '',
            brand: metadata.brand || '',
            tracking: metadata.tracking || 'none',
            supplierId: product.hms_product_supplier[0]?.supplier_id || '',
            taxRateId: product.product_tax_rules[0]?.tax_rate_id || '',
            taxRate: Number(product.product_tax_rules[0]?.tax_rates?.rate || 0),
            imageUrl: product.hms_product_image[0]?.url || '',
            default_cost: Number(metadata.cost_price || product.default_cost || 0),
            categoryId: product.hms_product_category_rel[0]?.category_id || '',
            manufacturerId: product.manufacturer_id || '',
            stock_levels: product.hms_stock_levels
        };
    } catch (error) {
        console.error("Failed to fetch product:", error);
        return null;
    }
}
async function updateProduct(formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id || !session.user.companyId) {
        return {
            error: "Unauthorized"
        };
    }
    const id = formData.get("id");
    const name = formData.get("name");
    const sku = formData.get("sku");
    const price = parseFloat(formData.get("price")) || 0;
    const description = formData.get("description");
    const brand = formData.get("brand");
    const barcode = formData.get("barcode");
    const uomId = formData.get("uomId");
    const supplierId = formData.get("supplierId");
    const taxRateId = formData.get("taxRateId");
    const categoryId = formData.get("categoryId");
    const tracking = formData.get("tracking") || 'none';
    const imageUrl = formData.get("image_url");
    const manufacturerId = formData.get("manufacturerId");
    if (!id || !name || !sku) {
        return {
            error: "Missing required fields"
        };
    }
    try {
        const existingProduct = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product.findUnique({
            where: {
                id,
                company_id: session.user.companyId
            },
            select: {
                metadata: true
            }
        });
        const currentMetadata = existingProduct?.metadata || {};
        const costPrice = parseFloat(formData.get("costPrice")) || 0;
        const mrp = parseFloat(formData.get("mrp")) || 0;
        const metadata = {
            ...currentMetadata,
            brand: brand || null,
            tracking: tracking,
            cost_price: costPrice,
            mrp: mrp
        };
        let uomName = 'each';
        if (uomId) {
            const uomData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_uom.findUnique({
                where: {
                    id: uomId
                },
                select: {
                    name: true
                }
            });
            if (uomData) uomName = uomData.name;
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product.update({
            where: {
                id,
                company_id: session.user.companyId
            },
            data: {
                name,
                sku,
                price,
                description,
                uom: uomName,
                uom_id: uomId || null,
                manufacturer_id: manufacturerId || null,
                default_barcode: barcode || null,
                metadata,
                updated_by: session.user.id,
                updated_at: new Date()
            }
        });
        // Update Supplier Link
        // First delete existing primary link (simplification)
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product_supplier.deleteMany({
            where: {
                product_id: id,
                is_primary: true
            }
        });
        if (supplierId) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product_supplier.create({
                data: {
                    tenant_id: session.user.tenantId,
                    company_id: session.user.companyId,
                    product_id: id,
                    supplier_id: supplierId,
                    is_primary: true
                }
            });
        }
        // Update Tax Rule
        // Delete existing rule
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].product_tax_rules.deleteMany({
            where: {
                product_id: id
            }
        });
        if (taxRateId) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].product_tax_rules.create({
                data: {
                    tenant_id: session.user.tenantId,
                    company_id: session.user.companyId,
                    product_id: id,
                    tax_rate_id: taxRateId,
                    priority: 1
                }
            });
        }
        // Add New Image if provided
        if (imageUrl) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product_image.create({
                data: {
                    tenant_id: session.user.tenantId,
                    company_id: session.user.companyId,
                    product_id: id,
                    url: imageUrl,
                    created_by: session.user.id
                }
            });
        }
        // Update Category
        if (categoryId) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product_category_rel.deleteMany({
                where: {
                    product_id: id
                }
            });
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product_category_rel.create({
                data: {
                    product_id: id,
                    category_id: categoryId
                }
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/products');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/hms/inventory/products/${id}/edit`);
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to update product:", error);
        return {
            error: "Failed to update product"
        };
    }
}
async function getProductBatches(productId) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId) return [];
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product_batch.findMany({
            where: {
                product_id: productId,
                company_id: session.user.companyId
            },
            orderBy: {
                expiry_date: 'asc'
            }
        });
    } catch (error) {
        console.error("Failed to fetch product batches:", error);
        return [];
    }
}
async function getBestBatch(productId) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId) return null;
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product_batch.findFirst({
            where: {
                product_id: productId,
                company_id: session.user.companyId,
                qty_on_hand: {
                    gt: 0
                }
            },
            orderBy: [
                {
                    expiry_date: 'asc'
                },
                {
                    created_at: 'asc'
                }
            ]
        });
    } catch (error) {
        console.error("Failed to fetch best batch:", error);
        return null;
    }
}
async function updateProductBatch(prevState, formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id || !session.user.companyId) return {
        error: "Unauthorized"
    };
    const id = formData.get("id");
    const mrp = parseFloat(formData.get("mrp")) || 0;
    const expiryDate = formData.get("expiryDate");
    if (!id) return {
        error: "Batch ID is required"
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product_batch.update({
            where: {
                id,
                company_id: session.user.companyId
            },
            data: {
                mrp,
                expiry_date: expiryDate ? new Date(expiryDate) : null
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/products');
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to update batch:", error);
        return {
            error: "Failed to update batch"
        };
    }
}
async function getSuppliersList(query, page = 1) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId) return {
        error: "Unauthorized"
    };
    const pageSize = 10;
    const skip = (page - 1) * pageSize;
    try {
        const where = {
            company_id: session.user.companyId,
            is_active: true
        };
        if (query) {
            where.name = {
                contains: query,
                mode: 'insensitive'
            };
        }
        const [suppliers, total] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_supplier.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: {
                    created_at: 'desc'
                },
                include: {
                    _count: {
                        select: {
                            hms_product_supplier: true,
                            hms_purchase_order: true
                        }
                    }
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_supplier.count({
                where
            })
        ]);
        return {
            success: true,
            data: suppliers.map((s)=>{
                const meta = s.metadata || {};
                return {
                    id: s.id,
                    name: s.name,
                    gstin: meta.gstin || '',
                    address: meta.address || '',
                    productCount: s._count.hms_product_supplier,
                    orderCount: s._count.hms_purchase_order,
                    createdAt: s.created_at
                };
            }),
            meta: {
                total,
                page,
                totalPages: Math.ceil(total / pageSize)
            }
        };
    } catch (error) {
        console.error("Failed to fetch suppliers list:", error);
        return {
            error: "Failed to fetch suppliers"
        };
    }
}
async function getStockMoves(query, page = 1) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId) return {
        error: "Unauthorized"
    };
    const pageSize = 20;
    const skip = (page - 1) * pageSize;
    try {
        const where = {
            company_id: session.user.companyId
        };
        if (query) {
            const products = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product.findMany({
                where: {
                    company_id: session.user.companyId,
                    name: {
                        contains: query,
                        mode: 'insensitive'
                    }
                },
                select: {
                    id: true
                }
            });
            const productIds = products.map((p)=>p.id);
            where.product_id = {
                in: productIds
            };
        }
        const [moves, total] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_stock_ledger.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: {
                    created_at: 'desc'
                },
                include: {
                    hms_product: {
                        select: {
                            name: true,
                            sku: true,
                            uom: true
                        }
                    }
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_stock_ledger.count({
                where
            })
        ]);
        return {
            success: true,
            data: moves.map((m)=>({
                    id: m.id,
                    date: m.created_at,
                    productName: m.hms_product?.name,
                    sku: m.hms_product?.sku,
                    type: m.movement_type,
                    qty: Number(m.qty),
                    uom: m.uom || m.hms_product?.uom,
                    reference: m.reference
                })),
            meta: {
                total,
                page,
                totalPages: Math.ceil(total / pageSize)
            }
        };
    } catch (error) {
        console.error("Failed to fetch stock moves:", error);
        return {
            error: "Failed to fetch stock moves"
        };
    }
}
async function getStockReport(query, page = 1) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId) return {
        error: "Unauthorized"
    };
    const pageSize = 50;
    const skip = (page - 1) * pageSize;
    try {
        const where = {
            company_id: session.user.companyId,
            is_active: true
        };
        if (query) {
            where.OR = [
                {
                    name: {
                        contains: query,
                        mode: 'insensitive'
                    }
                },
                {
                    sku: {
                        contains: query,
                        mode: 'insensitive'
                    }
                }
            ];
        }
        // 1. Fetch Products
        const [products, total] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product.findMany({
                where,
                select: {
                    id: true,
                    name: true,
                    sku: true,
                    default_cost: true,
                    uom: true,
                    hms_product_category_rel: {
                        include: {
                            hms_product_category: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                },
                take: pageSize,
                skip,
                orderBy: {
                    name: 'asc'
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product.count({
                where
            })
        ]);
        if (products.length === 0) {
            return {
                success: true,
                data: [],
                meta: {
                    total: 0,
                    page,
                    totalPages: 0
                }
            };
        }
        // 3. Aggregate Stock from Ledger (Source of Truth) for the current page
        const productIds = products.map((p)=>p.id);
        const aggregates = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product_stock_ledger.groupBy({
            by: [
                'product_id'
            ],
            where: {
                product_id: {
                    in: productIds
                },
                company_id: session.user.companyId
            },
            _sum: {
                change_qty: true
            }
        });
        const stockMap = new Map();
        aggregates.forEach((agg)=>{
            stockMap.set(agg.product_id, Number(agg._sum.change_qty || 0));
        });
        // 4. Map Results
        const reportData = products.map((p)=>{
            const stock = stockMap.get(p.id) || 0;
            const cost = Number(p.default_cost || 0);
            return {
                id: p.id,
                sku: p.sku,
                name: p.name,
                category: p.hms_product_category_rel[0]?.hms_product_category?.name || 'Uncategorized',
                uom: p.uom,
                stockOnHand: stock,
                stockValue: stock * cost,
                status: stock <= 0 ? 'Out of Stock' : stock < 10 ? 'Low Stock' : 'In Stock'
            };
        });
        // 5. Calculate Global Totals (across all pages)
        // We use hms_stock_levels for global aggregation as it's more efficient than aggregating the entire ledger
        let totalStockOnHand = 0;
        let totalValue = 0;
        try {
            const allMatchingStock = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_stock_levels.findMany({
                where: {
                    company_id: session.user.companyId,
                    hms_product: {
                        is_active: true,
                        ...query ? {
                            OR: [
                                {
                                    name: {
                                        contains: query,
                                        mode: 'insensitive'
                                    }
                                },
                                {
                                    sku: {
                                        contains: query,
                                        mode: 'insensitive'
                                    }
                                }
                            ]
                        } : {}
                    }
                },
                include: {
                    hms_product: {
                        select: {
                            default_cost: true
                        }
                    }
                }
            });
            allMatchingStock.forEach((item)=>{
                const qty = Number(item.quantity || 0);
                const cost = Number(item.hms_product?.default_cost || 0);
                totalStockOnHand += qty;
                totalValue += qty * cost;
            });
        } catch (e) {
            console.error("Failed to calculate global totals:", e);
        // Fail silently on totals if optimization fails
        }
        return {
            success: true,
            data: reportData,
            meta: {
                total,
                page,
                totalPages: Math.ceil(total / pageSize),
                summary: {
                    totalStockOnHand,
                    totalValue
                }
            }
        };
    } catch (error) {
        console.error("Failed to generate stock report:", error);
        return {
            error: "Failed to generate stock report"
        };
    }
}
async function findOrCreateProduct(productName, additionalData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId || !session?.user?.tenantId) {
        return {
            error: "Unauthorized"
        };
    }
    try {
        const companyId = session.user.companyId;
        const tenantId = session.user.tenantId;
        // 1. Try to find existing product by exact name match
        let product = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product.findFirst({
            where: {
                company_id: companyId,
                name: {
                    equals: productName,
                    mode: 'insensitive'
                }
            }
        });
        if (product) {
            // CRITICAL: Even if product exists, ensure it has a Tax Rule if the scan provided one
            if (additionalData?.taxRate) {
                const taxRateVal = Number(additionalData.taxRate);
                if (taxRateVal > 0) {
                    const existingRule = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].product_tax_rules.findFirst({
                        where: {
                            product_id: product.id,
                            is_active: true
                        }
                    });
                    if (!existingRule) {
                        const taxMaps = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].company_tax_maps.findMany({
                            where: {
                                company_id: companyId
                            },
                            include: {
                                tax_rates: true
                            }
                        });
                        const match = taxMaps.find((m)=>Math.abs(Number(m.tax_rates.rate) - taxRateVal) < 0.1);
                        if (match) {
                            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].product_tax_rules.create({
                                data: {
                                    id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                                    tenant_id: tenantId,
                                    company_id: companyId,
                                    product_id: product.id,
                                    tax_rate_id: match.tax_rate_id,
                                    priority: 1,
                                    is_active: true
                                }
                            });
                            console.log(`✅ UPDATE: Auto-created tax rule for EXISTING product (Exact Match): ${product.name}, Rate: ${taxRateVal}%`);
                        }
                    }
                }
            }
            return {
                productId: product.id,
                productName: product.name,
                created: false
            };
        }
        // 2. If not found, try fuzzy match
        const similarProducts = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product.findMany({
            where: {
                company_id: companyId,
                name: {
                    contains: productName,
                    mode: 'insensitive'
                }
            },
            take: 1
        });
        if (similarProducts.length > 0) {
            product = similarProducts[0];
            // CRITICAL: Even if product exists, ensure it has a Tax Rule if the scan provided one
            if (additionalData?.taxRate) {
                const taxRateVal = Number(additionalData.taxRate);
                if (taxRateVal > 0) {
                    const existingRule = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].product_tax_rules.findFirst({
                        where: {
                            product_id: product.id,
                            is_active: true
                        }
                    });
                    if (!existingRule) {
                        const taxMaps = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].company_tax_maps.findMany({
                            where: {
                                company_id: companyId
                            },
                            include: {
                                tax_rates: true
                            }
                        });
                        const match = taxMaps.find((m)=>Math.abs(Number(m.tax_rates.rate) - taxRateVal) < 0.1);
                        if (match) {
                            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].product_tax_rules.create({
                                data: {
                                    id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                                    tenant_id: tenantId,
                                    company_id: companyId,
                                    product_id: product.id,
                                    tax_rate_id: match.tax_rate_id,
                                    priority: 1,
                                    is_active: true
                                }
                            });
                            console.log(`✅ UPDATE: Auto-created tax rule for EXISTING product: ${product.name}, Rate: ${taxRateVal}%`);
                        }
                    }
                }
            }
            return {
                productId: product.id,
                productName: product.name,
                created: false,
                fuzzyMatch: true
            };
        }
        // 3. Auto-create new product
        const newProduct = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product.create({
            data: {
                tenant_id: tenantId,
                company_id: companyId,
                name: productName,
                description: productName,
                price: additionalData?.mrp || 0,
                default_cost: 0,
                sku: `AUTO-${Date.now()}`,
                is_active: true,
                is_service: false,
                is_stockable: true,
                metadata: {
                    ...additionalData?.hsn && {
                        hsn: additionalData.hsn
                    },
                    ...additionalData?.packing && {
                        packing: additionalData.packing
                    },
                    tax_rate: additionalData?.taxRate,
                    autoCreated: true,
                    created_from: 'invoice_scan',
                    scan_details: additionalData
                }
            }
        });
        // 4. IMMEDIATE TAX RULE CREATION (Critical for Billing)
        if (additionalData?.taxRate) {
            const taxRateVal = Number(additionalData.taxRate);
            if (taxRateVal > 0) {
                // Find matching tax ID in company settings
                const taxMaps = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].company_tax_maps.findMany({
                    where: {
                        company_id: companyId
                    },
                    include: {
                        tax_rates: true
                    }
                });
                const match = taxMaps.find((m)=>Math.abs(Number(m.tax_rates.rate) - taxRateVal) < 0.1);
                if (match) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].product_tax_rules.create({
                        data: {
                            id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID(),
                            tenant_id: tenantId,
                            company_id: companyId,
                            product_id: newProduct.id,
                            tax_rate_id: match.tax_rate_id,
                            priority: 1,
                            is_active: true
                        }
                    });
                    console.log(`✅ Auto-created tax rule for product: ${productName}, Rate: ${taxRateVal}%`);
                }
            }
        }
        console.log(`✅ Auto-created product: ${productName}`);
        return {
            productId: newProduct.id,
            productName: newProduct.name,
            created: true
        };
    } catch (error) {
        console.error("Failed to find/create product:", error);
        return {
            error: "Failed to process product"
        };
    }
}
async function findOrCreateProductsBatch(items) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId || !session?.user?.tenantId) return {
        error: "Unauthorized"
    };
    const results = [];
    const companyId = session.user.companyId;
    // Process sequentially but in a single server call from the UI
    for (const item of items){
        const res = await findOrCreateProduct(item.productName, item);
        results.push({
            ...res,
            originalName: item.productName
        });
    }
    return {
        success: true,
        data: results
    };
}
// Helper for CSV Parsing
function parseCSVLine(line) {
    const result = [];
    let start = 0;
    let inQuotes = false;
    for(let i = 0; i < line.length; i++){
        if (line[i] === '"') {
            inQuotes = !inQuotes;
        } else if (line[i] === ',' && !inQuotes) {
            let val = line.substring(start, i).trim();
            if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
            result.push(val.replace(/""/g, '"'));
            start = i + 1;
        }
    }
    let lastVal = line.substring(start).trim();
    if (lastVal.startsWith('"') && lastVal.endsWith('"')) lastVal = lastVal.slice(1, -1);
    result.push(lastVal.replace(/""/g, '"'));
    return result;
}
async function importProductsCSV(formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId || !session?.user?.tenantId) return {
        error: "Unauthorized"
    };
    const companyId = session.user.companyId;
    const tenantId = session.user.tenantId;
    const file = formData.get("file");
    if (!file) return {
        error: "No file uploaded"
    };
    const text = await file.text();
    const lines = text.split(/\r?\n/);
    if (lines.length < 2) return {
        error: "Empty or invalid CSV"
    };
    // 1. Parse Headers
    const headers = parseCSVLine(lines[0]).map((h)=>h.toLowerCase().trim());
    const getIdx = (patterns)=>headers.findIndex((h)=>patterns.some((p)=>h.includes(p)));
    const idxName = getIdx([
        'name',
        'product name'
    ]);
    const idxSku = getIdx([
        'sku',
        'code'
    ]);
    const idxBarcode = getIdx([
        'barcode',
        'ean',
        'upc'
    ]);
    const idxPrice = getIdx([
        'sale price',
        'selling price',
        'price'
    ]);
    const idxMrp = getIdx([
        'mrp',
        'max retail price'
    ]);
    const idxPurchase = getIdx([
        'purchase price',
        'cost',
        'buy price'
    ]);
    const idxTax = getIdx([
        'tax',
        'gst',
        'vat'
    ]);
    const idxCat = getIdx([
        'category',
        'group'
    ]);
    const idxUom = getIdx([
        'uom',
        'unit'
    ]);
    const idxBrand = getIdx([
        'brand'
    ]);
    const idxDesc = getIdx([
        'description',
        'desc',
        'details'
    ]);
    const idxStock = getIdx([
        'stock',
        'quantity',
        'qty',
        'opening'
    ]);
    const idxBatch = getIdx([
        'batch'
    ]);
    const idxExpiry = getIdx([
        'expiry',
        'exp'
    ]);
    const idxManufacturer = getIdx([
        'manufacturer',
        'mfg'
    ]);
    if (idxName === -1 || idxSku === -1) {
        return {
            error: "CSV must contain 'Name' and 'SKU' columns."
        };
    }
    // 2. Pre-fetch Data for mapping
    const [existingCats, existingTaxes] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product_category.findMany({
            where: {
                company_id: companyId
            },
            select: {
                id: true,
                name: true
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].company_taxes.findMany({
            where: {
                company_id: companyId
            },
            select: {
                id: true,
                rate: true
            }
        })
    ]);
    let count = 0;
    const errors = [];
    // 3. Process Rows
    for(let i = 1; i < lines.length; i++){
        const line = lines[i].trim();
        if (!line) continue;
        try {
            const row = parseCSVLine(line);
            // Check row length matches roughly or reuse logic
            // Just access safely
            const name = idxName !== -1 ? row[idxName] : null;
            const sku = idxSku !== -1 ? row[idxSku] : null;
            if (!name || !sku) continue;
            const salePrice = idxPrice !== -1 ? parseFloat(row[idxPrice]) || 0 : 0;
            const mrp = idxMrp !== -1 ? parseFloat(row[idxMrp]) || 0 : 0;
            const purchaseCost = idxPurchase !== -1 ? parseFloat(row[idxPurchase]) || 0 : 0;
            const taxRateVal = idxTax !== -1 ? parseFloat(row[idxTax]) : NaN;
            const openingStock = idxStock !== -1 ? parseFloat(row[idxStock]) || 0 : 0;
            const uomStr = idxUom !== -1 && row[idxUom] ? row[idxUom] : 'UNIT';
            // Resolve Category
            let categoryId = null;
            if (idxCat !== -1 && row[idxCat]) {
                const catName = row[idxCat];
                const existing = existingCats.find((c)=>c.name.toLowerCase() === catName.toLowerCase());
                if (existing) categoryId = existing.id;
                else {
                    const newCat = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product_category.create({
                        data: {
                            tenant_id: tenantId,
                            company_id: companyId,
                            name: catName
                        }
                    });
                    existingCats.push(newCat);
                    categoryId = newCat.id;
                }
            }
            // Upsert Product Logic
            const existingProduct = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product.findFirst({
                where: {
                    company_id: companyId,
                    sku: sku
                }
            });
            let productId;
            const metadata = {
                brand: idxBrand !== -1 ? row[idxBrand] : undefined,
                manufacturer: idxManufacturer !== -1 ? row[idxManufacturer] : undefined,
                mrp: mrp > 0 ? mrp : undefined,
                purchase_price: purchaseCost > 0 ? purchaseCost : undefined
            };
            if (existingProduct) {
                // Update
                const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product.update({
                    where: {
                        id: existingProduct.id
                    },
                    data: {
                        name,
                        price: salePrice > 0 ? salePrice : existingProduct.price,
                        description: idxDesc !== -1 && row[idxDesc] ? row[idxDesc] : existingProduct.description,
                        metadata: {
                            ...existingProduct.metadata,
                            ...metadata
                        }
                    }
                });
                productId = updated.id;
            } else {
                // Create
                const created = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product.create({
                    data: {
                        tenant_id: tenantId,
                        company_id: companyId,
                        name,
                        sku,
                        price: salePrice,
                        description: idxDesc !== -1 ? row[idxDesc] : '',
                        uom: uomStr,
                        is_active: true,
                        is_stockable: true,
                        is_service: false,
                        created_by: session.user.id,
                        default_barcode: idxBarcode !== -1 ? row[idxBarcode] : null,
                        metadata
                    }
                });
                productId = created.id;
                if (categoryId) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product_category_rel.create({
                        data: {
                            product_id: productId,
                            category_id: categoryId
                        }
                    });
                }
            }
            // 4. Handle Tax Rule
            if (!isNaN(taxRateVal)) {
                const match = existingTaxes.find((t)=>Math.abs(Number(t.rate) - taxRateVal) < 0.1);
                if (match) {
                    const existingRule = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].product_tax_rules.findFirst({
                        where: {
                            product_id: productId
                        }
                    });
                    if (!existingRule) {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].product_tax_rules.create({
                            data: {
                                tenant_id: tenantId,
                                company_id: companyId,
                                product_id: productId,
                                tax_rate_id: match.id,
                                priority: 1
                            }
                        });
                    }
                }
            }
            // 5. Handle Opening Stock
            if (openingStock > 0) {
                // Handle Batch
                let batchId = null;
                if (idxBatch !== -1 && row[idxBatch]) {
                    const batchNo = row[idxBatch];
                    const expiry = idxExpiry !== -1 && row[idxExpiry] ? new Date(row[idxExpiry]) : null;
                    // Upsert Batch
                    const batch = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product_batch.upsert({
                        where: {
                            tenant_id_company_id_product_id_batch_no: {
                                tenant_id: tenantId,
                                company_id: companyId,
                                product_id: productId,
                                batch_no: batchNo
                            }
                        },
                        create: {
                            tenant_id: tenantId,
                            company_id: companyId,
                            product_id: productId,
                            batch_no: batchNo,
                            expiry_date: expiry,
                            qty_on_hand: openingStock
                        },
                        update: {
                            qty_on_hand: {
                                increment: openingStock
                            }
                        }
                    });
                    batchId = batch.id;
                }
                // Get Last Balance
                let currentBalance = 0;
                const lastLedger = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product_stock_ledger.findFirst({
                    where: {
                        product_id: productId
                    },
                    orderBy: {
                        created_at: 'desc'
                    }
                });
                if (lastLedger) currentBalance = Number(lastLedger.balance_qty);
                const newBalance = currentBalance + openingStock;
                // Create Ledger Entry
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_product_stock_ledger.create({
                    data: {
                        tenant_id: tenantId,
                        company_id: companyId,
                        product_id: productId,
                        movement_type: 'OPENING',
                        change_qty: openingStock,
                        balance_qty: newBalance,
                        batch_id: batchId,
                        reference: `IMPORT-${Date.now()}-${i}`,
                        cost: purchaseCost > 0 ? purchaseCost : undefined
                    }
                });
            }
            count++;
        } catch (e) {
            const msg = e.message;
            errors.push({
                row: i + 1,
                error: msg
            });
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/products');
    return {
        success: true,
        count,
        errors
    };
}
async function getBatchHistory(batchId) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.companyId) return [];
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].hms_stock_ledger.findMany({
            where: {
                batch_id: batchId,
                company_id: session.user.companyId
            },
            orderBy: {
                created_at: 'desc'
            }
        });
    } catch (error) {
        console.error("Failed to fetch batch history:", error);
        return [];
    }
}
async function adjustStock(prevState, formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id || !session.user.companyId) return {
        error: "Unauthorized"
    };
    const batchId = formData.get("batchId");
    const multiplier = parseFloat(formData.get("multiplier")) || 1;
    const changeQty = (parseFloat(formData.get("changeQty")) || 0) * multiplier;
    const reason = formData.get("reason") || "Manual Adjustment";
    if (!batchId || changeQty === 0) return {
        error: "Invalid data"
    };
    const companyId = session.user.companyId; // Store after null check
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
            // 1. Get current batch and product info
            const batch = await tx.hms_product_batch.findUnique({
                where: {
                    id: batchId,
                    company_id: companyId
                }
            });
            if (!batch) throw new Error("Batch not found");
            // 2. Find Main Warehouse
            let warehouse = await tx.hms_stock_location.findFirst({
                where: {
                    company_id: companyId,
                    code: {
                        equals: 'WH-MAIN'
                    }
                }
            });
            if (!warehouse) {
                warehouse = await tx.hms_stock_location.findFirst({
                    where: {
                        company_id: companyId
                    }
                });
            }
            if (!warehouse) throw new Error("No stock location found");
            // 3. Update Batch Qty
            const updatedBatch = await tx.hms_product_batch.update({
                where: {
                    id: batchId
                },
                data: {
                    qty_on_hand: {
                        increment: changeQty
                    }
                }
            });
            // 4. Update Stock Levels
            const stockLevelWhere = {
                tenant_id: session.user.tenantId,
                company_id: session.user.companyId,
                product_id: batch.product_id,
                location_id: warehouse.id,
                batch_id: batchId
            };
            const existingLevel = await tx.hms_stock_levels.findFirst({
                where: stockLevelWhere
            });
            if (existingLevel) {
                await tx.hms_stock_levels.update({
                    where: {
                        id: existingLevel.id
                    },
                    data: {
                        quantity: {
                            increment: changeQty
                        },
                        updated_at: new Date()
                    }
                });
            } else {
                await tx.hms_stock_levels.create({
                    data: {
                        tenant_id: session.user.tenantId,
                        company_id: session.user.companyId,
                        product_id: batch.product_id,
                        location_id: warehouse.id,
                        batch_id: batchId,
                        quantity: changeQty,
                        reserved: 0
                    }
                });
            }
            // 5. Create Ledger Entry
            await tx.hms_stock_ledger.create({
                data: {
                    tenant_id: session.user.tenantId,
                    company_id: session.user.companyId,
                    product_id: batch.product_id,
                    movement_type: changeQty > 0 ? 'adjustment-in' : 'adjustment-out',
                    qty: Math.abs(changeQty),
                    batch_id: batchId,
                    reference: reason,
                    to_location_id: changeQty > 0 ? warehouse.id : null,
                    from_location_id: changeQty < 0 ? warehouse.id : null,
                    metadata: {
                        previous_qty: Number(batch.qty_on_hand),
                        new_qty: Number(updatedBatch.qty_on_hand),
                        adjusted_by: session.user.name
                    }
                }
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hms/inventory/products');
        return {
            success: true
        };
    } catch (error) {
        console.error("Adjustment failed:", error);
        return {
            error: "Failed to process adjustment"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getInventoryDashboardStats,
    getSuppliers,
    getTaxRates,
    getUOMs,
    getUOMCategories,
    createUOMCategory,
    createUOM,
    findOrCreateUOM,
    findOrCreateUOMsBatch,
    updateUOM,
    deleteUOM,
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    getManufacturers,
    createManufacturer,
    updateManufacturer,
    deleteManufacturer,
    getLocations,
    createLocation,
    updateLocation,
    deleteLocation,
    getProductsPremium,
    createProduct,
    getProduct,
    updateProduct,
    getProductBatches,
    getBestBatch,
    updateProductBatch,
    getSuppliersList,
    getStockMoves,
    getStockReport,
    findOrCreateProduct,
    findOrCreateProductsBatch,
    importProductsCSV,
    getBatchHistory,
    adjustStock
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getInventoryDashboardStats, "005142d0a94aa9d10ae5bfe4277a9d724d32d8b1d5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSuppliers, "00e0bbde732274ad8c749dddf99bb0162dd32892df", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTaxRates, "008823941ba46327a90626b6578b6bbe0a347a7954", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUOMs, "0034f67eeb4402a9e52c1cb7e004952b423c0a2f06", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUOMCategories, "00a57ecf33125b2134b93b2780a918f2bab25dc7ba", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createUOMCategory, "6094ee5da228ee9381bf547282100e1b66dedc866a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createUOM, "60be42115a889f22545e6ef659ae39e21afd13fa28", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(findOrCreateUOM, "405ea5f61332b87f910801a08e96cc850db1edf06a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(findOrCreateUOMsBatch, "407e892819e4d55dbcac292ead980e6dad658b5b4e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateUOM, "6030b393eccb2a94607b792355933ea0d1d7a942e0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteUOM, "40ea087eb469d52883501b029f3157c06cb9cd2ba0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCategories, "008cf95df8c7cd7c9dd0d4cec4bbdf6f528ebefbc1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCategory, "60265134bd4b9ca77db4d59e6f58f8c80c638404b0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCategory, "60e380aa5c9dd55db7e9c4662eda057ff0f0d45dba", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCategory, "403dfabd7762c3af12e5a377080f02f595d1ce8bd1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getManufacturers, "00deec17a90f51ed5be70331723928edcf29ec8e02", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createManufacturer, "6035e23407b4df99ef7b061187cc18f9d55474ede3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateManufacturer, "40bb30e2489683d3e2e4425f1d11b075d8c3b2eae6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteManufacturer, "405af090296d3e1d186c19d84e74d86a699718aeae", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLocations, "0066f5b04395e53b78090453ac7141aa0a91827993", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createLocation, "60c7e89b0e3357039ceec6d27e788134a3d1eef0f9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLocation, "4033810eacbb3566a4010c3cf91bdbd6ab0d04a7a5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteLocation, "40cf043b06ec813c2296effd2efa4a4b8bce461068", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductsPremium, "704b5927e84e8eae2a32e403917120dde926674933", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createProduct, "40af1a8efc986b4cd0b10ca91e837c129c27194257", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProduct, "406246e6eb3eed165d823b9c6d3a4456f110b3ba9d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProduct, "40e32da27a9dd319487ff23436bc383254aff855fd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductBatches, "40225acc51348d2b2b038ef6cc9838bc5917557365", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBestBatch, "40e88ba52f0e7891f26b7b12f5d2b03953cf0eb32a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProductBatch, "60a44f4f08ebdda32538199597a6d8ce1ae8b2d6b5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSuppliersList, "606974da8dd67798b181eb0f13a52f83598addbc3e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getStockMoves, "607d1a46f57734b2bb5a03a9234ae59728ffd1e04f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getStockReport, "608d9c9f3b67f13df0b0f705ee39c75f0fafb90001", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(findOrCreateProduct, "60e2f1339bb04f4a4848366006bbec106990929c19", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(findOrCreateProductsBatch, "405772251548342bf35d8f4344c5cca012a82564c6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(importProductsCSV, "40142bc73045eed4951877f762a8ab4991035d4135", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBatchHistory, "40fa1cddf21806349414ee6842509e264740bc5257", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(adjustStock, "608d2e9973bc8408fae2ea07918a2ecc50c0abb58a", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/hms/appointments/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/branding.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/actions/navigation.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/app/actions/rbac.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/app/actions/company.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/src/app/actions/tenant.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE6 => \"[project]/src/app/actions/settings.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE7 => \"[project]/src/app/actions/billing.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE8 => \"[project]/src/app/actions/appointment.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE9 => \"[project]/src/app/actions/patient-v10.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE10 => \"[project]/src/app/actions/upload-file.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE11 => \"[project]/src/app/actions/inventory.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/billing.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$appointment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/appointment.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$patient$2d$v10$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/patient-v10.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$upload$2d$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/upload-file.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/inventory.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$appointment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$patient$2d$v10$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$upload$2d$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$appointment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$patient$2d$v10$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$upload$2d$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
"[project]/.next-internal/server/app/hms/appointments/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/branding.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/actions/navigation.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/app/actions/rbac.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/app/actions/company.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/src/app/actions/tenant.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE6 => \"[project]/src/app/actions/settings.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE7 => \"[project]/src/app/actions/billing.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE8 => \"[project]/src/app/actions/appointment.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE9 => \"[project]/src/app/actions/patient-v10.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE10 => \"[project]/src/app/actions/upload-file.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE11 => \"[project]/src/app/actions/inventory.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "000f1e53f3d721e8e3eafebdfaacde020ba810013e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantCompanies"],
    "0017bc7bd76d12c4fa0332c041f8dc72f971161904",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPaymentMappings"],
    "001d846c340e0b0dc03631f5abb6a919b37618be0c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auditAndFixMenuPermissions"],
    "00388db89f9409da18e662700d562374d2b270537e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTaxConfiguration"],
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
    "00b946f672ab588457fd6e6a6565ad58637666ab6c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUoms"],
    "00c43413ab5f835c1eea3961fbd59612ae369029fa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenant"],
    "00df4fa4f631e0b8b370cfd768579ca09ddf43b344",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBillableItems"],
    "00e1e20b68fcf111e2adb0663e0e74e48a42a2e964",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHMSSettings"],
    "00ee7cb30127714f93eb99d84e6378a1b9d5f71a82",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserProfile"],
    "4007ccdb75d82f2c333a0ba67acb0596c56de86a40",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantBrandingByHost"],
    "4009c8593066df47cffda086ed40a649d1ee9993f6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cancelInvoice"],
    "400aea7f551c1a892a3af07602f3d22df1ae8396ce",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["switchCompany"],
    "400c20c3242d9ec681541ba29d024c15419e6e9923",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$appointment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAppointmentDetails"],
    "4013ddfdd82a8f5f26ddbd0b4c0b6d0bb8d8768737",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNextVoucherNumber"],
    "401578f3fe96c87480a0867d8d29b9035ebeee1c81",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInitialInvoiceData"],
    "40169b5368e6475727db0c91f5d04fe6addcb062f6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBranches"],
    "401fbfa1dcf731b9d7863ef7a624aabc6f9c601520",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateGlobalSettings"],
    "40225acc51348d2b2b038ef6cc9838bc5917557365",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductBatches"],
    "4029c36e9e4cbb469275ea3b8aa688934c39bc7192",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$patient$2d$v10$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPatientById"],
    "4031046d1e88ab01ac04a97d7373e9b675b9b2102e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateHMSSettings"],
    "4033f0ad3178ccda49f8634ca8f6313b462889bdb0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateWhatsAppSettings"],
    "40433c06c1f4d912be0b688d3b783282a1c33cfc0c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPatientBalance"],
    "404f8eef86e7a928257f21d02e0dcb5aeb8922daf9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRole"],
    "405d8eea04931e98fb50c32271a9ab145ae6f8d465",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDesignation"],
    "407793196ca4fd907dc854c625b75c571dcc2579b3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkPermission"],
    "407d6ddb5b17871ab747ad147174fb46838dba5d10",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["switchBranch"],
    "408286af0dd3bd2d67448b9352533aee38bea53e42",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$appointment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAppointment"],
    "408583314a251e4ab6a1476b75c2a2e19f8b2cb1a3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createInvoice"],
    "408f1a5020e6ba461ea2ab0f6cc2c241264c88fb87",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteRole"],
    "4098cc338ddde8532ea628809839b63f72ed6e703e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updatePaymentGatewaySettings"],
    "40a18ef6ef9ff95f524a8fc838c6be9565ccc80335",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserPermissions"],
    "40a329d95dc3d1a62d1e482a762f87e63308b336de",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPatientLedger"],
    "40a7cbc7ead7d5b16b572a614a4c8efe2adb0bc2aa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updatePDFSettings"],
    "40a8bd885a0cd875baf554e077e97cf0bb7d9b36b6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateTenantSettings"],
    "40be938594ca7001681ec054bce9804c80446e2204",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCompany"],
    "40c1ce8bac6bd0294860e6dbb06e4ca911bd121437",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBranch"],
    "40c78bda30257384bf051704051785bf4620f8ae50",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDesignation"],
    "40ce49ea4b7050e0573cddcba444e4d9ead38f4ab9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updatePaymentMappings"],
    "40e262a8c91eef996f821f1d338179393c646f1ce2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPatientOutstandingBalance"],
    "40e5b9b5d47829439c65d11ea45099f2bddbc1f683",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateConsultationInvoice"],
    "40e88ba52f0e7891f26b7b12f5d2b03953cf0eb32a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBestBatch"],
    "40f587896266518b5850eeacccfc69be5ca0a335ce",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOpenRegistrationInvoice"],
    "40f5ad1ddc48abb6f590059867aca153fb43763d61",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteDesignation"],
    "6001830112147f6a5bd49341fb1cb42196b1bed78c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["voidPayment"],
    "6003ffc1bf6ab8e030685a3abb1a7068aa1ba3b43c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBranch"],
    "600c71b7b282fbbb6d8a0e50a2d2a6f639c02fa506",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPDFSettings"],
    "6012293d892e0a7ee4a8654dd1af202e108dc6debd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateInvoice"],
    "601d2ccdb020eb572cceed0bc295cde4222d7052d5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateInvoiceStatus"],
    "6023de41a288144cc358d4877439ee60e48937cca5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["linkInvoiceToAppointment"],
    "603265b48c110da148cea32af57be4ad9aa9e022c6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$appointment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAppointmentsByClinician"],
    "603b64924af9a59930e1af6f2434856fdc89fe2319",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$upload$2d$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uploadFile"],
    "603ba48760f4106aaa3ced755a007939dec191facf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createQuickPatient"],
    "604fe2a8b690164f5a32f5338e5b0d30ffabfde0c0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPaymentGatewayConfig"],
    "605a1b1564ee1b438dc1de20d9db2102e6ebff257e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$patient$2d$v10$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPatientV10"],
    "606179061d81a683b8b4bdfd15b55a633920f874bb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shareInvoiceWhatsapp"],
    "6061fbcb1a881f4e8692dead2c43587d3634d83fe1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWhatsAppSettings"],
    "60660fbc726854ba5c95d6c1506c1006864e56857e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPDFConfig"],
    "60784d78965906d3fa7bb25a8e3f7fc16bbb25e266",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$appointment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAppointmentStatus"],
    "6079b9612e1fe52d990c15df9204be8bd86d38ceb2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateRole"],
    "60825e363deb70c92d1882c2041a21532c1b8cea9a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWhatsAppConfig"],
    "608349f1b4763265beceb5d9cd891152ef32c6ab68",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateRegistrationInvoice"],
    "60978e108f0c867559c6c352cdc1209191fb6cd822",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateDesignation"],
    "60af4c4a57d0c5c26681b16bf66e53126bb318bbab",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProfile"],
    "60c021be98a362a1fe876b51ae89a00102ea0ba49d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$appointment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAppointmentsProp"],
    "60fdc4f0ccdb38a549b5cb4bebf4efac172e58c775",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPaymentGatewaySettings"],
    "700708bd6a2e5cd22125d980b1f1d664491f5ea502",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordPatientConsumption"],
    "704260891327b42a52553211f322a7c7c002e3e9d7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$appointment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAppointmentDate"],
    "709a787099d74f0a77dcfa251a40d8c26f8b656d08",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordPayment"],
    "78314c67a5a6f8686b0890d6a5d67c91f92e9b7032",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["settlePatientDues"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$hms$2f$appointments$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE8__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$appointment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE9__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$patient$2d$v10$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE10__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$upload$2d$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE11__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/hms/appointments/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions/branding.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/actions/navigation.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/app/actions/rbac.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/app/actions/company.ts [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/src/app/actions/tenant.ts [app-rsc] (ecmascript)", ACTIONS_MODULE5 => "[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE6 => "[project]/src/app/actions/settings.ts [app-rsc] (ecmascript)", ACTIONS_MODULE7 => "[project]/src/app/actions/billing.ts [app-rsc] (ecmascript)", ACTIONS_MODULE8 => "[project]/src/app/actions/appointment.ts [app-rsc] (ecmascript)", ACTIONS_MODULE9 => "[project]/src/app/actions/patient-v10.ts [app-rsc] (ecmascript)", ACTIONS_MODULE10 => "[project]/src/app/actions/upload-file.ts [app-rsc] (ecmascript)", ACTIONS_MODULE11 => "[project]/src/app/actions/inventory.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/branding.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/navigation.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/rbac.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/company.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/tenant.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/settings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/billing.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$appointment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/appointment.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$patient$2d$v10$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/patient-v10.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$upload$2d$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/upload-file.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/inventory.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$hms$2f$appointments$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE8__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$appointment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE9__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$patient$2d$v10$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE10__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$upload$2d$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE11__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$appointment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$patient$2d$v10$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$upload$2d$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$hms$2f$appointments$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE8__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$appointment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE9__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$patient$2d$v10$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE10__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$upload$2d$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE11__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$branding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$billing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$appointment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$patient$2d$v10$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$upload$2d$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=_dd0dfe94._.js.map