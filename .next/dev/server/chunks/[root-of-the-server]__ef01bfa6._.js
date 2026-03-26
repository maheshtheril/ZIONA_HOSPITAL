module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/auth.config.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authConfig",
    ()=>authConfig
]);
const isProd = ("TURBOPACK compile-time value", "development") === 'production';
const isVercel = !!process.env.VERCEL;
const authConfig = {
    trustHost: true,
    cookies: {
        sessionToken: {
            name: 'auth.session-token',
            options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: false
            }
        }
    },
    pages: {
        signIn: '/login'
    },
    callbacks: {
        authorized ({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            // const user = auth?.user as any; 
            // const isOnHMS = nextUrl.pathname.startsWith("/hms");
            // const isOnCRM = nextUrl.pathname.startsWith("/crm");
            const isOnRoot = nextUrl.pathname === "/";
            const isProtected = nextUrl.pathname.startsWith("/hms") || nextUrl.pathname.startsWith("/crm") || nextUrl.pathname.startsWith("/settings");
            const isAuthPage = nextUrl.pathname.startsWith("/login");
            // 1. If on protected route (HMS, CRM, Settings, Root)
            if (isProtected || isOnRoot) {
                if (isLoggedIn) {
                    // Logic moved to page.tsx to prevent middleware loops
                    return true;
                }
                return false; // Redirect to login
            }
            // 2. If logged in and on login page, send to root (and let page.tsx handle it)
            if (isLoggedIn && isAuthPage) {
                if (nextUrl.searchParams.has("reauth")) return true;
                return Response.redirect(new URL("/", nextUrl));
            }
            return true;
        }
    },
    providers: []
};
}),
"[externals]/pg [external] (pg, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("pg");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/src/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/adapter-pg/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const prismaClientSingleton = ()=>{
    const connectionString = process.env.DATABASE_URL || 'postgresql://hms_admin:password@127.0.0.1:5432/hms_prod';
    const isLocal = connectionString.includes('localhost') || connectionString.includes('127.0.0.1');
    // [PERFORMANCE] Serverless-optimized pool settings for Vercel + Neon
    // max: 3 is correct for serverless (each lambda gets its own pool)
    // keepAlive prevents TCP timeout on idle connections, reducing Neon cold-starts
    const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__["Pool"]({
        connectionString,
        connectionTimeoutMillis: 5000,
        idleTimeoutMillis: 10000,
        max: isLocal ? 10 : 3,
        keepAlive: true,
        ssl: isLocal ? false : {
            rejectUnauthorized: false
        }
    });
    pool.on('error', (err)=>console.error('\x1b[31m[PRISMA] Pool Error:\x1b[0m', err.message));
    const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PrismaPg"](pool);
    return new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
        adapter,
        log: [
            'error'
        ]
    });
};
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
if ("TURBOPACK compile-time truthy", 1) globalThis.prismaGlobal = prisma;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "handlers",
    ()=>handlers,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/core/providers/credentials.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const { handlers, signIn, signOut, auth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authConfig"],
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
            credentials: {
                email: {
                    label: "Email",
                    type: "email"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            authorize: async (credentials)=>{
                if (!credentials?.email || !credentials?.password) return null;
                try {
                    const email = (credentials.email || '').toLowerCase();
                    console.log("[AUTH] Authorizing user:", email);
                    // 2. Database Lookup
                    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].app_user.findFirst({
                        where: {
                            email: email,
                            is_active: true
                        }
                    });
                    console.log("[AUTH] User found in DB:", user ? "YES (ID: " + user.id + ")" : "NO");
                    if (!user) {
                        console.log("[AUTH] REJECTED: User not found or not active.");
                        return null;
                    }
                    // 3. Password Verification
                    console.log("[AUTH] Comparing passwords...");
                    let passwordsMatch = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(credentials.password, user.password);
                    console.log("[AUTH] Passwords match:", passwordsMatch);
                    if (!passwordsMatch) {
                        console.log("[AUTH] REJECTED: Password mismatch.");
                        return null;
                    }
                    // 4. Session Enrichment (Robust)
                    try {
                        // [PERFORMANCE] Parallel Session Enrichment — all DB calls fire simultaneously
                        const [branchResult, tenantInfo, company, tenantModules] = await Promise.all([
                            // Branch name
                            user.current_branch_id ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].hms_branch.findUnique({
                                where: {
                                    id: user.current_branch_id
                                },
                                select: {
                                    name: true
                                }
                            }) : Promise.resolve(null),
                            // Tenant details
                            user.tenant_id ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].tenant.findUnique({
                                where: {
                                    id: user.tenant_id
                                },
                                select: {
                                    db_url: true,
                                    slug: true,
                                    name: true,
                                    metadata: true
                                }
                            }) : Promise.resolve(null),
                            // Company + currency
                            user.company_id ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].company.findFirst({
                                where: {
                                    id: user.company_id
                                },
                                include: {
                                    company_settings: {
                                        include: {
                                            currencies: true
                                        }
                                    }
                                }
                            }) : Promise.resolve(null),
                            // Enabled modules
                            user.tenant_id ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].tenant_module.findMany({
                                where: {
                                    tenant_id: user.tenant_id,
                                    enabled: true
                                },
                                select: {
                                    module_key: true
                                }
                            }) : Promise.resolve([])
                        ]);
                        const moduleKeys = tenantModules.map((m)=>m.module_key);
                        const branchName = branchResult?.name || 'Main Branch';
                        // Self-heal missing company (rare path — don't block normal logins)
                        if (user.tenant_id && !user.company_id && !company) {
                            try {
                                let defaultCompany = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].company.findFirst({
                                    where: {
                                        tenant_id: user.tenant_id
                                    }
                                });
                                if (!defaultCompany) {
                                    defaultCompany = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].company.create({
                                        data: {
                                            tenant_id: user.tenant_id,
                                            name: "Default Company",
                                            industry: "General"
                                        }
                                    });
                                }
                                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].app_user.update({
                                    where: {
                                        id: user.id
                                    },
                                    data: {
                                        company_id: defaultCompany.id
                                    }
                                });
                                user.company_id = defaultCompany.id;
                            } catch (e) {
                                console.error("[AUTH] Self-healing failed:", e);
                            }
                        }
                        const metadata = user.metadata;
                        const avatarUrl = metadata?.avatar_url || null;
                        const safeImage = avatarUrl?.startsWith('data:') ? null : avatarUrl;
                        return {
                            id: user.id,
                            email: user.email,
                            name: user.name,
                            role: user.role,
                            isAdmin: user.is_admin,
                            isTenantAdmin: user.is_tenant_admin,
                            tenantId: user.tenant_id,
                            companyId: user.company_id,
                            companyName: company?.name || tenantInfo?.name || 'My Business',
                            current_branch_id: user.current_branch_id,
                            current_branch_name: branchName,
                            modules: moduleKeys,
                            image: safeImage,
                            dbUrl: tenantInfo?.db_url,
                            currencyCode: company?.company_settings?.currencies?.code || 'INR',
                            currencySymbol: company?.company_settings?.currencies?.symbol || '₹',
                            dateFormat: tenantInfo?.metadata?.date_format || 'dd/MM/yyyy',
                            precision: company?.company_settings?.rounding_precision ?? 2,
                            industry: company?.industry || 'General',
                            hasCRM: moduleKeys.includes('crm'),
                            hasHMS: moduleKeys.includes('hms')
                        };
                    } catch (enrichError) {
                        console.error("[AUTH] Enrichment error:", enrichError);
                        // Fallback to basic user if enhancement fails
                        return {
                            id: user.id,
                            email: user.email,
                            name: user.name,
                            role: user.role,
                            tenantId: user.tenant_id,
                            companyId: user.company_id,
                            modules: [],
                            currencyCode: 'INR',
                            currencySymbol: '₹'
                        };
                    }
                } catch (error) {
                    console.error("[AUTH] outer Error:", error);
                    return null;
                }
            }
        })
    ],
    callbacks: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authConfig"].callbacks,
        async jwt ({ token, user, trigger, session }) {
            if (user) {
                const u = user;
                token.id = u.id;
                token.tenantId = u.tenantId;
                token.companyId = u.companyId;
                token.role = u.role;
                token.modules = u.modules;
                token.isAdmin = u.isAdmin;
                token.isTenantAdmin = u.isTenantAdmin;
                token.industry = u.industry;
                token.hasCRM = u.hasCRM;
                token.hasHMS = u.hasHMS;
                token.dbUrl = u.dbUrl;
                token.current_branch_id = u.current_branch_id;
                token.current_branch_name = u.current_branch_name;
                token.currencyCode = u.currencyCode;
                token.currencySymbol = u.currencySymbol;
                token.dateFormat = u.dateFormat;
                token.precision = u.precision;
            }
            if (trigger === "update" && session) {
                if (session.companyId) token.companyId = session.companyId;
                if (session.branchId) token.current_branch_id = session.branchId;
                if (session.branchName) token.current_branch_name = session.branchName;
            }
            return token;
        },
        async session ({ session, token }) {
            if (token && session.user) {
                session.user.id = token.id;
                const u = session.user;
                u.tenantId = token.tenantId;
                u.companyId = token.companyId;
                u.role = token.role;
                u.modules = token.modules;
                u.isAdmin = token.isAdmin;
                u.isTenantAdmin = token.isTenantAdmin;
                u.industry = token.industry;
                u.hasCRM = token.hasCRM;
                u.hasHMS = token.hasHMS;
                u.dbUrl = token.dbUrl;
                u.current_branch_id = token.current_branch_id;
                u.current_branch_name = token.current_branch_name;
                u.currencyCode = token.currencyCode;
                u.currencySymbol = token.currencySymbol;
                u.dateFormat = token.dateFormat;
                u.precision = token.precision;
            }
            return session;
        }
    }
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/api/auth/[...nextauth]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
// NextAuth strictly validates the Origin against the Vercel primary domain (seeakk.com).
// To allow logins from cloud-hms.vercel.app without crashing the Edge runtime
// (which happens if you mutate process.env directly), we intercept the request headers
// to trick NextAuth's internal host resolution.
const wrappedHandler = async (req)=>{
    const host = req.headers.get("x-forwarded-host") || req.headers.get("host");
    const proto = req.headers.get("x-forwarded-proto") || "https";
    // Create a new request with rewritten headers to force NextAuth to use the dynamic host
    const headers = new Headers(req.headers);
    headers.set("x-forwarded-host", host || "");
    // In NextAuth v5, passing a manipulated request with AUTH_TRUST_HOST logic enabled 
    // natively resolves the callback URL securely without globally overwriting env vars.
    const newReq = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextRequest"](`${proto}://${host}${new URL(req.url).pathname}`, {
        method: req.method,
        headers: headers,
        body: req.body,
        duplex: 'half'
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handlers"][req.method](newReq);
};
const GET = wrappedHandler;
const POST = wrappedHandler;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ef01bfa6._.js.map