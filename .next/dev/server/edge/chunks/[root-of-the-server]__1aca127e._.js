(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__1aca127e._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/src/auth.config.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.config.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
;
;
const { auth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["authConfig"]);
const __TURBOPACK__default__export__ = auth((req)=>{
    const url = new URL(req.url);
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('x-pathname', url.pathname);
    // --- GLOBAL READ-ONLY LOCK ---
    // If the app is running in the Cloud (Vercel) OR explicitly set to Read-Only
    const isCloud = process.env.VERCEL === '1';
    const forceReadOnly = process.env.NEXT_PUBLIC_READ_ONLY_MODE === 'true';
    if ((isCloud || forceReadOnly) && [
        'POST',
        'PUT',
        'DELETE'
    ].includes(req.method)) {
        // Allow ONLY Auth and specific non-data routes if needed
        const isAuthRoute = url.pathname.startsWith('/api/auth') || url.pathname.startsWith('/login');
        if (!isAuthRoute) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"](JSON.stringify({
                error: "This is a Mirror Site (View-Only). Please make changes on the Hospital Server."
            }), {
                status: 403,
                headers: {
                    'content-type': 'application/json'
                }
            });
        }
    }
    // ----------------------------
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
        request: {
            headers: requestHeaders
        }
    });
});
const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__1aca127e._.js.map