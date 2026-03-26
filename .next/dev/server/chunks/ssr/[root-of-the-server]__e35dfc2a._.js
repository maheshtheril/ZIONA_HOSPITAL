module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/rbac.ts [app-rsc] (ecmascript)");
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
async function Home() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/login?reauth=1');
    }
    // ROLE & PERMISSION BASED REDIRECTS
    const role = session.user.role?.toLowerCase();
    // 1. Admins should not be auto-redirected to specific functional dashboards (they likely want the Menu)
    if (!session.user.isAdmin && role !== 'admin' && role !== 'super_admin') {
        // 2. Doctor Access
        if (role === 'doctor' || await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkPermission"])('hms:dashboard:doctor')) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/hms/doctor/dashboard');
        }
        // 3. Nurse Access
        if (role === 'nurse' || await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkPermission"])('hms:dashboard:nurse')) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/hms/nursing/dashboard');
        }
        // 4. Reception Access
        if (role === 'receptionist' || await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkPermission"])('hms:dashboard:reception')) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/hms/reception/dashboard');
        }
    }
    console.log('[DEBUG] Root Router:', {
        user: session.user.email,
        tenant: session.user.tenantId,
        sessionFlags: {
            hms: session.user.hasHMS,
            crm: session.user.hasCRM
        }
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { tenantId } = session.user;
    let industry = '';
    // Check Industry
    if (tenantId) {
        const company = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].company.findFirst({
            where: {
                tenant_id: tenantId
            }
        });
        industry = company?.industry || '';
    }
    // Check Active Modules
    const tenantModules = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].tenant_module.findMany({
        where: {
            tenant_id: tenantId,
            enabled: true
        },
        select: {
            module_key: true
        }
    });
    const moduleKeys = tenantModules.map((m)=>m.module_key);
    console.log('[DEBUG] DB Check:', {
        industry,
        moduleKeys
    });
    const isHealthcare = !industry || industry === 'Healthcare' || industry === 'Hospital';
    const hasCRM = moduleKeys.includes('crm');
    const hasHMS = moduleKeys.includes('hms');
    // Decision Logic:
    // Prioritize CRM if explicit, then HMS if explicit.
    // 1. If CRM is present AND User has Access, go CRM.
    if (hasCRM && await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkPermission"])('crm:view')) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/crm/dashboard');
    }
    // 2. If HMS is present AND User has Access, go HMS.
    if (hasHMS && await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkPermission"])('hms:view')) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/hms/dashboard');
    }
    // 3. Fallback based on Industry (Legacy behavior)
    // Only if NO specific module is found in DB.
    if (!hasCRM && !hasHMS) {
        if (isHealthcare) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/hms/dashboard');
    }
    // 4. Default fallback (Safer)
    // If explicitly subscribed modules didn't match permissions above (or were missing), try generic permission checks.
    if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkPermission"])('hms:view')) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/hms/dashboard');
    }
    if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkPermission"])('crm:view')) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/crm/dashboard');
    }
    // 5. Absolute fallback -> Welcome / Home
    // Do NOT redirect to a specific dashboard to avoid 403 loops.
    // We can redirect to a "Select App" page or remain on root (if root serves UI).
    // For now, try HMS as safest bet for hospitals, or login.
    // redirect('/hms/dashboard'); // Dangerous if no HMS.
    // Return empty (renders Children if any, or nothing)
    // Or redirect to a "No Access" error helper?
    // Let's redirect to HMS as it has the best "Empty State" handling usually.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/hms/dashboard');
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e35dfc2a._.js.map