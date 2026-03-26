module.exports = [
"[project]/src/components/billing/batch-selector-dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BatchSelectorDialog",
    ()=>BatchSelectorDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/table.js [app-ssr] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
;
;
;
;
function BatchSelectorDialog({ isOpen, onClose, productName, batches, onSelect, currency = '₹' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: (open)=>!open && onClose(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-xl p-0 overflow-hidden bg-white dark:bg-[#0a0f1e] border-none shadow-[0_40px_100px_rgba(0,0,0,0.3)] rounded-[2.5rem] ring-1 ring-slate-200 dark:ring-white/10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    className: "px-8 py-6 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-white/5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-12 w-12 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                    className: "h-6 w-6 text-amber-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                        className: "text-[14px] font-black text-slate-900 dark:text-white uppercase tracking-tight",
                                        children: "Select Active Batch"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] font-black mt-1",
                                        children: productName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-100/50 dark:bg-slate-800/30 rounded-2xl p-4 mb-4 flex items-center justify-between border border-slate-200/50 dark:border-white/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                                            className: "h-4 w-4 text-slate-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] font-black uppercase tracking-widest text-slate-500",
                                            children: "Inventory Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "outline",
                                    className: "text-[9px] font-black uppercase tracking-widest bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800",
                                    children: [
                                        batches.length,
                                        " BATCHES FOUND"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                            className: "h-[300px] pr-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: batches.map((batch)=>{
                                    const isExpired = batch.expiry_date && new Date(batch.expiry_date) < new Date();
                                    const stockQty = Number(batch.qty_on_hand);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            onSelect(batch);
                                            onClose();
                                        },
                                        className: "w-full group relative p-5 bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 rounded-[1.5rem] text-left transition-all hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-500/10 active:scale-[0.98] overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-0 p-3 flex flex-col items-end gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                                        children: "Available"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-lg font-black italic tracking-tighter ${stockQty < 10 ? 'text-rose-500' : 'text-slate-900 dark:text-white'}`,
                                                        children: [
                                                            stockQty,
                                                            " Units"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                                lineNumber: 81,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-slate-100 dark:bg-slate-950 p-2 rounded-xl border border-slate-200/50 dark:border-white/10 group-hover:bg-indigo-600 transition-colors",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                                    className: "h-4 w-4 text-slate-500 group-hover:text-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                                                    lineNumber: 91,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                                                lineNumber: 90,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5",
                                                                        children: "Batch Number"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                                                        lineNumber: 94,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-black text-slate-900 dark:text-white font-mono tracking-tight",
                                                                        children: batch.batch_no
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                                                        lineNumber: 95,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                                                lineNumber: 93,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                        className: `h-3 w-3 ${isExpired ? 'text-rose-500' : 'text-slate-400'}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                                                        lineNumber: 101,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5",
                                                                                children: "Expiry"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                                                                lineNumber: 103,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `text-[10px] font-black tracking-tight ${isExpired ? 'text-rose-500 underline' : 'text-slate-600 dark:text-slate-300'}`,
                                                                                children: batch.expiry_date ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(batch.expiry_date), 'MMM yyyy').toUpperCase() : 'N/A'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                                                                lineNumber: 104,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                                                        lineNumber: 102,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 25
                                                            }, this),
                                                            batch.mrp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5",
                                                                        children: "MRP"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                                                        lineNumber: 112,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-black text-slate-900 dark:text-white tracking-tight",
                                                                        children: [
                                                                            currency,
                                                                            Number(batch.mrp).toFixed(2)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                                                        lineNumber: 113,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                                                lineNumber: 111,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                                lineNumber: 88,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, batch.id, true, {
                                        fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                        lineNumber: 73,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    className: "px-8 py-6 bg-slate-50 dark:bg-slate-900/10 border-t border-slate-100 dark:border-white/5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            onClick: onClose,
                            className: "text-[9px] font-black uppercase tracking-widest h-12 px-8 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all",
                            children: "Cancel Node"
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-[8px] font-black text-slate-400 uppercase tracking-[0.3em] opacity-40",
                            children: [
                                "Secure Inventory Protocol Enabled ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-1 w-1 bg-indigo-500 rounded-full animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                    lineNumber: 136,
                                    columnNumber: 47
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/billing/invoice-editor-compact.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompactInvoiceEditor",
    ()=>CompactInvoiceEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-ssr] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-ssr] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/banknote.js [app-ssr] (ecmascript) <export default as Banknote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-ssr] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-ssr] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/qr-code.js [app-ssr] (ecmascript) <export default as QrCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.js [app-ssr] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/qrcode.react/lib/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$pos$2d$device$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services/pos-device.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$6335bb__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:6335bb [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$2457fa__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:2457fa [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$fee684__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:fee684 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$fd9a5f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:fd9a5f [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$8064f2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:8064f2 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$df4fdc__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:df4fdc [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$f5f068__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:f5f068 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$3ee254__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:3ee254 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$f3acff__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:f3acff [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$04c07f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:04c07f [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$50403d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:50403d [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$searchable$2d$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/searchable-select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$branding$2f$ziona$2d$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/branding/ziona-logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$billing$2f$batch$2d$selector$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/billing/batch-selector-dialog.tsx [app-ssr] (ecmascript)");
'use client';
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
function CompactInvoiceEditor({ patients, billableItems, uoms = [], taxConfig, initialPatientId, initialMedicines, appointmentId, initialInvoice, onClose, onPaymentSuccess, currency = '₹', isRegistrationFee = false, gatewayConfig = null }) {
    const getUomOptions = (itemType, currentUom)=>{
        // Enforce world standard: only use UOMs from the database master table
        const dbUnitNames = uoms.map((u)=>u.name.toUpperCase());
        // Always include the current UOM so existing/legacy lines don't break visually
        const allUnits = Array.from(new Set([
            ...dbUnitNames,
            (currentUom || '').toUpperCase()
        ])).filter(Boolean);
        if (itemType === 'service') {
            // For services, only show service-type UOMs or the currently selected one
            return allUnits.filter((u)=>u === currentUom?.toUpperCase() || uoms.find((du)=>du.name.toUpperCase() === u && du.uom_type === 'service'));
        }
        // For items/products, show all UOMs or the currently selected one
        return allUnits.filter((u)=>u === currentUom?.toUpperCase() || dbUnitNames.includes(u));
    };
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const isAdmin = session?.user?.isAdmin;
    const tenantId = session?.user?.tenantId;
    const companyId = session?.user?.companyId;
    // Active persistence state
    const [activeInvoice, setActiveInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialInvoice);
    // UI State
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pricingMode, setPricingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('standard');
    const [isMaximized, setIsMaximized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isQuickPatientOpen, setIsQuickPatientOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isWalkIn, setIsWalkIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSuccess, setIsSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastSavedId, setLastSavedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [patientBalance, setPatientBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [includePrevBalance, setIncludePrevBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLedgerOpen, setIsLedgerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ledgerData, setLedgerData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isFetchingLedger, setIsFetchingLedger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [provisionalNo, setProvisionalNo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("...");
    const amountInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const finalizeButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isErrorDialogOpen, setIsErrorDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorDetails, setErrorDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        message: ''
    });
    const [pdfConfig, setPdfConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [posStatus, setPosStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('searching');
    const [isPOSLoading, setIsPOSLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Razorpay UPI QR State
    const [isRazorpayQROpen, setIsRazorpayQROpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [razorpayOrderId, setRazorpayOrderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [razorpayQRAmount, setRazorpayQRAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [razorpayStatus, setRazorpayStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('loading');
    const [razorpayPaymentId, setRazorpayPaymentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [razorpayQRUrl, setRazorpayQRUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSendingLink, setIsSendingLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCustomerDisplayOpen, setIsCustomerDisplayOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const razorpayPollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isPaymentModalOpen) {
            setTimeout(()=>amountInputRef.current?.focus(), 150);
            setPosStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$pos$2d$device$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["posService"].getStatus());
        }
    }, [
        isPaymentModalOpen
    ]);
    // Form State
    const [quickPatientName, setQuickPatientName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [quickPatientPhone, setQuickPatientPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isCreatingPatient, setIsCreatingPatient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [walkInName, setWalkInName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [walkInPhone, setWalkInPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedPatientId, setSelectedPatientId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(activeInvoice?.patient_id || initialPatientId || '');
    const patientOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>patients.map((p)=>({
                id: p.id,
                label: p.label || p.name || `${p.first_name || ''} ${p.last_name || ''}`.trim() || 'Unnamed Patient',
                subLabel: `${p.phone || p.contact || ''} ${p.patient_number ? `• UID: ${p.patient_number}` : ''}`
            })), [
        patients
    ]);
    const itemOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>billableItems.map((i)=>({
                id: i.id,
                label: i.label || i.name,
                subLabel: `[${(i.type || 'item').toUpperCase()}] ${i.sku ? `SKU: ${i.sku} | ` : ''}${currency}${i.price}`
            })), [
        billableItems,
        currency
    ]);
    // Auto-select patient from URL if coming back from registration
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const pId = searchParams.get('patientId');
        if (pId) {
            setSelectedPatientId(pId);
            setIsWalkIn(false);
        } else if (initialPatientId && !selectedPatientId) {
            // [FIX] Sync with prop if state is empty (handles late-bind mapping)
            setSelectedPatientId(initialPatientId);
            setIsWalkIn(false);
        }
    }, [
        searchParams,
        initialPatientId,
        selectedPatientId
    ]);
    const selectedPatientLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!selectedPatientId) return '';
        const p = patientOptions.find((p)=>p.id === selectedPatientId);
        if (p) return p.label;
        // Fallback to initial invoice patient name if available
        const inv = initialInvoice;
        return inv?.hms_patient?.full_name || `${inv?.hms_patient?.first_name || ''} ${inv?.hms_patient?.last_name || ''}`.trim() || inv?.patient_name || '';
    }, [
        selectedPatientId,
        patientOptions,
        initialInvoice
    ]);
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(activeInvoice?.invoice_date ? new Date(activeInvoice.invoice_date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]);
    // Fetch provisional number on mount and date change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!activeInvoice?.invoice_number) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$f5f068__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getNextVoucherNumber"])(date).then((res)=>{
                if (res.success && res.data) setProvisionalNo(res.data);
            });
        } else {
            setProvisionalNo(activeInvoice.invoice_number);
        }
    }, [
        date,
        activeInvoice
    ]);
    // AUTO-LOAD INITIAL DATA FROM APPOINTMENT (Registration Fee, etc)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (appointmentId && !activeInvoice && (!initialMedicines || initialMedicines.length === 0)) {
            __turbopack_context__.A("[project]/src/app/actions/billing.ts [app-ssr] (ecmascript, async loader)").then((mod)=>{
                mod.getInitialInvoiceData(appointmentId).then((res)=>{
                    if (res?.success && res.data) {
                        const { initialItems, initialInvoice: foundInvoice, patientId } = res.data;
                        // If we found an existing draft invoice, lock on to it
                        if (foundInvoice) {
                            setActiveInvoice(foundInvoice);
                            if (!selectedPatientId) setSelectedPatientId(foundInvoice.patient_id);
                            // Load lines from existing invoice
                            if (foundInvoice.hms_invoice_lines) {
                                const invLines = foundInvoice.hms_invoice_lines.map((l)=>({
                                        id: l.id || Date.now() + Math.random(),
                                        product_id: l.product_id || '',
                                        description: l.description,
                                        quantity: Number(l.quantity),
                                        uom: l.uom || 'PCS',
                                        unit_price: Number(l.unit_price),
                                        tax_rate_id: l.tax_rate_id,
                                        tax_amount: Number(l.tax_amount),
                                        discount_amount: Number(l.discount_amount),
                                        base_price: l.unit_price,
                                        item_type: l.product_id ? billableItems.find((bi)=>bi.id === l.product_id)?.type || 'item' : 'item',
                                        isFromInvoice: true
                                    }));
                                setLines(invLines);
                            }
                            return;
                        }
                        // Fallback to initialItems if no invoice exists
                        if (Array.isArray(initialItems) && initialItems.length > 0) {
                            const newLines = initialItems.map((m)=>{
                                const billable = billableItems.find((bi)=>bi.id === (m.id || m.product_id) || bi.label === m.name);
                                const taxId = billable?.categoryTaxId !== undefined ? billable.categoryTaxId : defaultTaxId;
                                const finalPrice = billable?.price || Number(m.price || 0);
                                const taxRateObj = taxConfig.taxRates.find((t)=>t.id === taxId);
                                const rate = taxRateObj ? Number(taxRateObj.rate) : 0;
                                const lineNet = Number(m.quantity || 1) * finalPrice;
                                const taxAmt = Math.max(0, lineNet) * rate / 100;
                                return {
                                    id: Math.random() + Date.now(),
                                    product_id: billable?.id || m.id || '',
                                    description: m.name || m.description || '',
                                    quantity: Number(m.quantity || 1),
                                    uom: m.uom || billable?.uom || 'PCS',
                                    unit_price: finalPrice,
                                    tax_rate_id: taxId,
                                    tax_amount: taxAmt,
                                    discount_amount: 0,
                                    base_price: finalPrice,
                                    item_type: m.type || billable?.type || 'item',
                                    metadata: billable?.metadata || {}
                                };
                            });
                            setLines(newLines);
                        }
                    }
                });
            });
        }
    }, [
        appointmentId,
        activeInvoice,
        initialMedicines,
        billableItems
    ]);
    // Fetch PDF config on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadConfig = async ()=>{
            try {
                if (tenantId && companyId) {
                    const pdf = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$f3acff__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getPDFConfig"])(companyId, tenantId);
                    if (pdf) setPdfConfig(pdf);
                }
            } catch (e) {
                console.error('Failed to load PDF config', e);
            }
        };
        loadConfig();
    }, [
        tenantId,
        companyId
    ]);
    const extendedTaxRates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const rates = [
            ...taxConfig.taxRates || []
        ];
        // Scan all billable items for missing rates
        billableItems.forEach((item)=>{
            const rate = Number(item.categoryTaxRate || 0);
            if (rate > 0) {
                const exists = rates.find((r)=>Math.abs(Number(r.rate) - rate) < 0.1);
                if (!exists) {
                    // Check if we already added it
                    const alreadyAdded = rates.find((r)=>r.id === `AUTO_${rate}`);
                    if (!alreadyAdded) {
                        rates.push({
                            id: `AUTO_${rate}`,
                            name: `${rate}% (Detected)`,
                            rate: rate,
                            is_active: true
                        });
                    }
                }
            }
        });
        return rates.sort((a, b)=>Number(a.rate) - Number(b.rate));
    }, [
        taxConfig.taxRates,
        billableItems
    ]);
    const defaultTaxId = taxConfig.defaultTax?.id || '';
    // Robust Line Item State
    const [lines, setLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        let combinedLines = [];
        // 1. If we are editing an existing invoice (or draft), load those lines first
        if (initialInvoice?.hms_invoice_lines) {
            combinedLines = initialInvoice.hms_invoice_lines.map((l)=>({
                    id: l.id || Date.now() + Math.random(),
                    product_id: l.product_id || '',
                    description: l.description,
                    quantity: Number(l.quantity),
                    uom: l.uom || 'PCS',
                    unit_price: Number(l.unit_price),
                    tax_rate_id: l.tax_rate_id,
                    tax_amount: Number(l.tax_amount),
                    discount_amount: Number(l.discount_amount),
                    base_price: l.unit_price,
                    item_type: l.product_id ? billableItems.find((bi)=>bi.id === l.product_id)?.type || 'item' : 'item',
                    isFromInvoice: true
                }));
        }
        // 2. If we have initial items passed (doctor prescriptions, nurse items, cons. fees)
        if (initialMedicines && initialMedicines.length > 0) {
            const initialMapped = initialMedicines.map((m)=>{
                const billable = billableItems.find((bi)=>bi.id === (m.id || m.product_id) || bi.label === m.name);
                // FIX: Do not auto-exempt services. Trust the Billable Item's tax ID, or fall back to Default Tax.
                const taxId = billable?.categoryTaxId !== undefined ? billable.categoryTaxId : defaultTaxId;
                const finalPrice = billable?.price || Number(m.price || 0);
                // Calculate initial tax
                const taxRateObj = taxConfig.taxRates.find((t)=>t.id === taxId);
                const rate = taxRateObj ? Number(taxRateObj.rate) : 0;
                const lineNet = Number(m.quantity || 1) * finalPrice - 0; // No discount initially
                const taxAmt = Math.max(0, lineNet) * rate / 100;
                return {
                    id: Math.random() + Date.now(),
                    product_id: billable?.id || m.id || '',
                    description: m.name || m.description || '',
                    quantity: Number(m.quantity || 1),
                    uom: m.uom || billable?.uom || 'PCS',
                    unit_price: finalPrice,
                    tax_rate_id: taxId,
                    tax_amount: taxAmt,
                    discount_amount: 0,
                    base_price: finalPrice,
                    item_type: m.type || billable?.type || 'item',
                    metadata: billable?.metadata || {}
                };
            });
            // Merge: Add if not already in the draft invoice
            initialMapped.forEach((m)=>{
                const exists = combinedLines.some((cl)=>{
                    const productMatch = cl.product_id && m.product_id && cl.product_id === m.product_id;
                    const descMatch = (cl.description?.toLowerCase() || '').trim() === (m.description?.toLowerCase() || '').trim();
                    return productMatch || descMatch;
                });
                if (!exists) {
                    combinedLines.push(m);
                }
            });
        }
        if (combinedLines.length > 0) return combinedLines;
        // 3. Absolute Default: Single empty line
        return [
            {
                id: 1,
                product_id: '',
                description: '',
                quantity: 1,
                uom: 'PCS',
                unit_price: 0,
                tax_rate_id: defaultTaxId,
                tax_amount: 0,
                discount_amount: 0,
                item_type: 'item'
            }
        ];
    });
    // Sync lines when initial props change (e.g. after async fetch in parent)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initialInvoice?.hms_invoice_lines || initialMedicines && initialMedicines.length > 0) {
            // [WORLD CLASS] Lock on to the invoice if it arrived asynchronously
            if (initialInvoice && !activeInvoice) {
                console.log("[INVOICE-SYNC] Locking on to asynchronously arrived invoice:", initialInvoice.invoice_number);
                setActiveInvoice(initialInvoice);
            }
            let combined = [];
            if (initialInvoice?.hms_invoice_lines) {
                combined = initialInvoice.hms_invoice_lines.map((l)=>({
                        id: l.id || Date.now() + Math.random(),
                        product_id: l.product_id || '',
                        description: l.description,
                        quantity: Number(l.quantity),
                        uom: l.uom || 'PCS',
                        unit_price: Number(l.unit_price),
                        tax_rate_id: l.tax_rate_id,
                        tax_amount: Number(l.tax_amount),
                        discount_amount: Number(l.discount_amount),
                        base_price: l.unit_price,
                        item_type: l.product_id ? billableItems.find((bi)=>bi.id === l.product_id)?.type || 'item' : 'item',
                        isFromInvoice: true
                    }));
            }
            if (initialMedicines && initialMedicines.length > 0) {
                initialMedicines.forEach((m)=>{
                    // [WORLD CLASS AUTO-POPULATE]
                    // Find the real catalog item by ID or exact Name match
                    const billable = billableItems.find((bi)=>bi.id === (m.id || m.product_id) || bi.label === m.name || bi.name === m.name || isRegistrationFee && (bi.label === "Patient Registration Fee" || bi.name === "Patient Registration Fee"));
                    const taxId = billable?.categoryTaxId !== undefined ? billable.categoryTaxId : defaultTaxId;
                    const finalPrice = billable?.price || Number(m.price || 0);
                    const taxRateObj = taxConfig.taxRates.find((t)=>t.id === taxId);
                    const rate = taxRateObj ? Number(taxRateObj.rate) : 0;
                    const lineNet = Number(m.quantity || 1) * finalPrice;
                    const taxAmt = Math.max(0, lineNet) * rate / 100;
                    const exists = combined.some((cl)=>{
                        const productMatch = cl.product_id && (billable?.id || m.id) && cl.product_id === (billable?.id || m.id);
                        const descMatch = (cl.description?.toLowerCase() || '').trim() === (m.name?.toLowerCase() || m.description?.toLowerCase() || '').trim();
                        return productMatch || descMatch;
                    });
                    if (!exists) {
                        combined.push({
                            id: Math.random() + Date.now(),
                            product_id: billable?.id || m.id || '',
                            description: billable?.label || billable?.name || m.name || m.description || '',
                            quantity: Number(m.quantity || 1),
                            uom: m.uom || billable?.uom || 'PCS',
                            unit_price: finalPrice,
                            tax_rate_id: taxId,
                            tax_amount: taxAmt,
                            discount_amount: 0,
                            base_price: finalPrice,
                            item_type: m.type || billable?.type || 'item',
                            metadata: billable?.metadata || {}
                        });
                    }
                });
            }
            if (combined.length > 0) setLines(combined);
        }
    }, [
        initialInvoice,
        initialMedicines,
        billableItems,
        defaultTaxId,
        taxConfig.taxRates,
        isRegistrationFee
    ]);
    // Sync Tax Amounts on Mount for initial items
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (lines.length > 0) {
            const updatedLines = lines.map((line)=>{
                const taxRateObj = taxConfig.taxRates.find((t)=>t.id === line.tax_rate_id);
                const rate = taxRateObj ? Number(taxRateObj.rate) : 0;
                const lineNet = line.quantity * line.unit_price - (line.discount_amount || 0);
                return {
                    ...line,
                    tax_amount: Math.max(0, lineNet) * rate / 100
                };
            });
            // Only update if changes detected to avoid infinite loop
            const hasChanges = updatedLines.some((l, idx)=>l.tax_amount !== lines[idx].tax_amount);
            if (hasChanges) {
                setLines(updatedLines);
            }
        }
    }, []);
    // WORLD CLASS FEFO: Auto-resolve batches for initial medicines
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const items = lines.filter((l)=>l.product_id && !l.batch_id && l.item_type === 'item');
        items.forEach((line)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$04c07f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getBestBatch"])(line.product_id).then((batch)=>{
                if (batch) {
                    setLines((current)=>current.map((l)=>l.id === line.id ? {
                                ...l,
                                batch_id: batch.id,
                                batch_no: batch.batch_no,
                                unit_price: pricingMode === 'mrp' && batch.mrp ? Number(batch.mrp) : l.unit_price
                            } : l));
                }
            });
        });
    }, [
        lines.length
    ]);
    const [payments, setPayments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isFinalizing, setIsFinalizing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showUPIQR, setShowUPIQR] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activePaymentAmount, setActivePaymentAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [globalDiscount, setGlobalDiscount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Number(initialInvoice?.total_discount || 0));
    // Batch Selection State
    const [selectedLineForBatch, setSelectedLineForBatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeBatches, setActiveBatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isBatchSelectorOpen, setIsBatchSelectorOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [batchProductName, setBatchProductName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Totals
    const subtotal = Number(lines.reduce((sum, line)=>sum + (line.quantity * line.unit_price - (line.discount_amount || 0)), 0).toFixed(2));
    const totalTax = Number(lines.reduce((sum, line)=>sum + (line.tax_amount || 0), 0).toFixed(2));
    const grandTotal = Number(Math.max(0, subtotal + totalTax - globalDiscount).toFixed(2));
    const totalPaid = Number(payments.reduce((sum, p)=>sum + (p.amount || 0), 0).toFixed(2));
    const balanceDue = Number(Math.max(0, grandTotal - totalPaid).toFixed(2));
    // Reliable Settlement Flags (handles floating point precision for currency)
    const settlementTarget = Number((grandTotal + (includePrevBalance ? patientBalance : 0)).toFixed(2));
    const isSurplus = totalPaid - settlementTarget > 0.005;
    const isDeficit = settlementTarget - totalPaid > 0.005;
    const isBalanced = !isSurplus && !isDeficit;
    // World Class Debt Awareness & Autofocus Node
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedPatientId) {
            setIsWalkIn(false);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$8064f2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getPatientOutstandingBalance"])(selectedPatientId).then((res)=>{
                if (res.success) setPatientBalance(res.balance || 0);
            });
            // AUTO FOCUS TO PRODUCT SEARCH
            // We use a slight delay to ensure the patient select dropdown has closed and the grid is interactive
            setTimeout(()=>{
                const firstItemSearch = document.getElementById('item-search-0');
                if (firstItemSearch) {
                    firstItemSearch.focus();
                }
            }, 400);
        } else {
            setPatientBalance(0);
        }
    }, [
        selectedPatientId
    ]);
    // World Class Focus Management: Clear any active focus when loading starts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (loading && typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
            if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'SELECT') {
                document.activeElement.blur();
            }
        }
    }, [
        loading
    ]);
    const handleQuickPatientCreate = async ()=>{
        if (!quickPatientName || !quickPatientPhone) return;
        setIsCreatingPatient(true);
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$fd9a5f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createQuickPatient"])(quickPatientName, quickPatientPhone);
        if (res.success && res.data) {
            setSelectedPatientId(res.data.id);
            setIsQuickPatientOpen(false);
        }
        setIsCreatingPatient(false);
    };
    const handleAddItem = ()=>{
        setLines([
            ...lines,
            {
                id: Date.now(),
                product_id: '',
                description: '',
                quantity: 1,
                uom: 'PCS',
                unit_price: 0,
                tax_rate_id: defaultTaxId,
                tax_amount: 0,
                discount_amount: 0,
                item_type: 'item'
            }
        ]);
    };
    const handleRemoveItem = (id)=>{
        if (lines.length > 1) {
            setLines(lines.filter((l)=>l.id !== id));
        }
    };
    const updateLine = (id, field, value)=>{
        setLines(lines.map((line)=>{
            if (line.id === id) {
                const updated = {
                    ...line,
                    [field]: value
                };
                // Logic for Product/Service Selection
                if (field === 'product_id') {
                    const item = billableItems.find((bi)=>bi.id === value);
                    if (item) {
                        // Description Polish: Override generic auto-created labels
                        const rawDescription = item.description || item.label || item.name;
                        updated.description = rawDescription?.includes('Auto-created from') ? item.label || item.name : rawDescription;
                        updated.item_type = item.type || 'item';
                        // Extract Prices (Support for packing metadata)
                        const basePrice = item.metadata?.basePrice || item.price || 0;
                        updated.base_price = basePrice;
                        updated.unit_price = basePrice;
                        updated.uom = item.metadata?.baseUom || 'PCS';
                        // INTELLIGENT TAX RESOLUTION (UI side fallback)
                        let resolvedTaxId = item.categoryTaxId;
                        if (!resolvedTaxId && item.categoryTaxRate > 0) {
                            const match = extendedTaxRates.find((tr)=>Math.abs(Number(tr.rate) - Number(item.categoryTaxRate)) < 0.1);
                            if (match) resolvedTaxId = match.id;
                        }
                        updated.tax_rate_id = resolvedTaxId || defaultTaxId;
                        // Metadata for complex items
                        updated.metadata = item.metadata;
                        // WORLD CLASS FEFO: Auto-select best batch
                        if (item.type === 'item' || !item.type) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$04c07f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getBestBatch"])(item.id).then((batch)=>{
                                if (batch) {
                                    setLines((current)=>current.map((l)=>l.id === id ? {
                                                ...l,
                                                batch_id: batch.id,
                                                batch_no: batch.batch_no,
                                                // If MRP mode or if batch has MRP, use it
                                                unit_price: pricingMode === 'mrp' ? Number(batch.mrp || l.unit_price) : l.unit_price
                                            } : l));
                                }
                            });
                        }
                        // World Class UX: After item selection, move focus to quantity
                        setTimeout(()=>{
                            const lineIndex = lines.findIndex((l)=>l.id === id);
                            const qtyInput = document.getElementById(`qty-input-${lineIndex}`);
                            if (qtyInput) qtyInput.focus();
                        }, 100);
                    }
                }
                // Logic for UOM Changes (strips vs pieces)
                if (field === 'uom' && updated.metadata) {
                    const selectedUom = (value || '').toUpperCase();
                    const meta = updated.metadata;
                    if (selectedUom === (meta.packUom || 'STRIP').toUpperCase() && meta.packPrice) {
                        updated.unit_price = meta.packPrice;
                    } else if (selectedUom === (meta.baseUom || 'PCS').toUpperCase()) {
                        updated.unit_price = updated.base_price;
                    }
                }
                // Recalculate Tax
                const taxRateObj = extendedTaxRates.find((t)=>t.id === updated.tax_rate_id);
                const rate = taxRateObj ? taxRateObj.rate : 0;
                const lineNet = updated.quantity * updated.unit_price - (updated.discount_amount || 0);
                updated.tax_amount = Math.max(0, lineNet) * rate / 100;
                return updated;
            }
            return line;
        }));
    };
    const handleSave = async (status, paymentsOverride)=>{
        if (loading) return;
        const finalPayments = paymentsOverride || payments.filter((p)=>p.amount > 0);
        // Auto-paid if fully settled
        const effectiveStatus = status === 'paid' && totalPaid < grandTotal ? 'posted' : status;
        if (effectiveStatus === 'paid' && finalPayments.length === 0) {
            return toast({
                title: "Payment Required",
                description: "Apply at least one payment method to mark as paid.",
                variant: "destructive"
            });
        }
        // Focus cleanup on sync
        if (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
        setLoading(true);
        const payload = {
            patient_id: isWalkIn ? null : selectedPatientId,
            appointment_id: appointmentId || searchParams.get('appointmentId') || undefined,
            date,
            line_items: lines.filter((l)=>l.description || l.product_id),
            status: effectiveStatus,
            total_discount: globalDiscount,
            payments: finalPayments,
            billing_metadata: isWalkIn ? {
                is_walk_in: true,
                patient_name: walkInName,
                patient_phone: walkInPhone
            } : {}
        };
        try {
            // Create or update based on activeInvoice state (which handles post-initial-fetch resolution)
            const res = await (activeInvoice?.id ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$2457fa__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateInvoice"])(activeInvoice.id, payload) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$6335bb__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createInvoice"])(payload));
            if (res.success) {
                let tallyMsg = `Transaction serialized as ${effectiveStatus}.`;
                if (totalPaid > 0) {
                    if (totalPaid < grandTotal) {
                        tallyMsg = `Partial settlement of ${currency}${totalPaid.toFixed(2)} recorded. Balance ${currency}${balanceDue.toFixed(2)} posted to Patient Credit ledger.`;
                    } else if (totalPaid > grandTotal) {
                        tallyMsg = `Full settlement recorded with ${currency}${(totalPaid - grandTotal).toFixed(2)} advance deposit detected.`;
                    } else {
                        tallyMsg = `Invoice fully settled for ${currency}${grandTotal.toFixed(2)}. Connection closed.`;
                    }
                }
                toast({
                    title: "Sync Successful",
                    description: tallyMsg
                });
                setIsSuccess(true);
                setLoading(false);
                setIsPaymentModalOpen(false); // [FIX] Ensure payment modal is closed upon success
                const invoiceId = res.data?.id;
                setLastSavedId(invoiceId || null);
                // WORLD CLASS: Auto-Print Trigger (Trigger on Paid or Posted settlement)
                if ((effectiveStatus === 'paid' || effectiveStatus === 'posted') && pdfConfig?.autoPrint && invoiceId) {
                    // Trigger IMMEDIATELY to bypass popup blockers (most browsers allow window.open if it's "close enough" to the click)
                    window.open(`/hms/billing/${invoiceId}/print`, '_blank');
                }
                // [WORLD CLASS STABILITY] Delay the parent callback to allow success screen to mount first
                // and ensure the terminal doesn't unmount due to parent state updates immediately.
                if (onPaymentSuccess) {
                    setTimeout(()=>{
                        onPaymentSuccess(res.data);
                    }, 500);
                }
            // Do NOT close modal automatically if success screen is desired.
            // But if onPaymentSuccess is provided (like in popup mode), we might want to auto-close or show success within the popup?
            // The current design shows a "Transaction Finalized" screen within the editor.
            // So we keep it open to show that screen.
            // setIsPaymentModalOpen(false) // This closes the payment sub-modal, not the EDITOR.
            } else {
                setLoading(false);
                const errorMsg = res.error || "The server rejected the transaction. Please check your data and retry.";
                console.error("Sync Interrupted:", errorMsg);
                setErrorDetails({
                    title: 'Critical Save Failure',
                    message: errorMsg
                });
                setIsPaymentModalOpen(false); // nuking this modal first to be sure
                setIsErrorDialogOpen(true);
                toast({
                    title: "Sync Interrupted",
                    description: errorMsg,
                    variant: "destructive"
                });
            }
        } catch (error) {
            setLoading(false);
            const errorMsg = error.message || "A network or engine failure occurred.";
            console.error("Terminal Sync Error:", error);
            setErrorDetails({
                title: 'Network / Engine Failure',
                message: errorMsg
            });
            setIsPaymentModalOpen(false); // nuking this modal first to be sure
            setIsErrorDialogOpen(true);
            toast({
                title: "Network / Engine Failure",
                description: errorMsg,
                variant: "destructive"
            });
        }
    };
    const handleCancelBill = async ()=>{
        if (!initialInvoice?.id || loading) return;
        if (!isAdmin) return toast({
            title: "Access Denied",
            description: "Only financial administrators can void saved transactions.",
            variant: "destructive"
        });
        const confirmed = window.confirm("WORLD CLASS SECURITY ALERT: Are you sure you want to VOID this transaction? This will invalidate the ledger node and cannot be undone.");
        if (!confirmed) return;
        setLoading(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$fee684__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["cancelInvoice"])(initialInvoice.id);
            if (res.success) {
                toast({
                    title: "Node Invalidated",
                    description: res.message
                });
                router.push('/hms/billing');
                router.refresh();
            } else {
                toast({
                    title: "Validation Failed",
                    description: res.error,
                    variant: "destructive"
                });
            }
        } catch (error) {
            toast({
                title: "System Error",
                description: "Failed to communicate with settlement engine.",
                variant: "destructive"
            });
        } finally{
            setLoading(false);
        }
    };
    const handlePOSPayment = async (method, amount)=>{
        setIsPOSLoading(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$pos$2d$device$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["posService"].initiatePayment({
                amount,
                invoiceId: provisionalNo || 'BILL-TEMP',
                method
            });
            if (res.success) {
                toast({
                    title: "Payment Successful",
                    description: `Received ${currency}${amount} via Device`
                });
                setPayments((prev)=>{
                    const newPayments = [
                        ...prev,
                        {
                            method: method.toLowerCase(),
                            amount,
                            reference: res.reference
                        }
                    ];
                    const currentTotalPaid = newPayments.reduce((sum, p)=>sum + p.amount, 0);
                    const remaining = Math.max(0, grandTotal - currentTotalPaid);
                    setTimeout(()=>setActivePaymentAmount(remaining > 0 ? remaining.toFixed(2) : ''), 0);
                    return newPayments;
                });
            } else {
                toast({
                    title: "Device Error",
                    description: res.error || "Transaction failed on machine",
                    variant: "destructive"
                });
                if (method === 'UPI') {
                    // Fallback to static QR
                    setShowUPIQR({
                        amount,
                        vpa: 'hospital@upi'
                    });
                }
            }
        } catch (err) {
            toast({
                title: "Sync Error",
                description: "Could not reach POS service",
                variant: "destructive"
            });
        } finally{
            setIsPOSLoading(false);
        }
    };
    const handleRazorpayQR = async (amount)=>{
        if (!gatewayConfig?.enabled || !gatewayConfig?.keyId) {
            toast({
                title: 'Gateway Not Ready',
                description: 'Configure Razorpay in Settings → HMS Configuration.',
                variant: 'destructive'
            });
            return;
        }
        setRazorpayQRAmount(amount);
        setRazorpayStatus('loading');
        setRazorpayOrderId(null);
        setRazorpayQRUrl(null);
        setRazorpayPaymentId(null);
        setIsRazorpayQROpen(true);
        // Clear any existing poll
        if (razorpayPollRef.current) clearInterval(razorpayPollRef.current);
        try {
            const res = await fetch('/api/razorpay/create-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount,
                    invoiceId: initialInvoice?.id || 'NEW_BILL'
                })
            });
            const data = await res.json();
            if (!res.ok || !data.orderId) {
                setRazorpayStatus('error');
                toast({
                    title: 'Order Failed',
                    description: data.error || 'Failed to create payment order.',
                    variant: 'destructive'
                });
                return;
            }
            setRazorpayOrderId(data.orderId);
            const upiUrl = `upi://pay?pa=${encodeURIComponent(data.upiVpa || gatewayConfig.upiVpa)}&pn=${encodeURIComponent(data.businessName || gatewayConfig.businessName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(`HMS Bill ${data.orderId}`)}`;
            setRazorpayQRUrl(upiUrl);
            setRazorpayStatus('waiting');
        } catch (err) {
            setRazorpayStatus('error');
            toast({
                title: 'Gateway Error',
                description: err.message,
                variant: 'destructive'
            });
        }
    };
    const handleRazorpayManualConfirm = ()=>{
        if (razorpayPollRef.current) clearInterval(razorpayPollRef.current);
        setRazorpayStatus('confirmed');
        const amt = razorpayQRAmount;
        setPayments((prev)=>[
                ...prev,
                {
                    method: 'upi',
                    amount: amt,
                    reference: razorpayOrderId || 'RAZORPAY'
                }
            ]);
        setIsRazorpayQROpen(false);
        setActivePaymentAmount('');
        toast({
            title: '✅ Payment Recorded',
            description: `₹${amt.toFixed(2)} via Razorpay recorded. Click Save to finalize.`
        });
    };
    const handleSendPaymentLink = async (amount)=>{
        if (!gatewayConfig?.enabled || !gatewayConfig?.keyId) {
            toast({
                title: 'Gateway Not Ready',
                description: 'Configure Razorpay in Settings → HMS Configuration.',
                variant: 'destructive'
            });
            return;
        }
        if (!selectedPatientId) {
            toast({
                title: 'Select Patient',
                description: 'Cannot send link without a patient context.',
                variant: 'destructive'
            });
            return;
        }
        const patient = patients.find((p)=>p.id === selectedPatientId);
        if (!patient) return;
        setIsSendingLink(true);
        try {
            const res = await fetch('/api/razorpay/payment-link', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount,
                    patientId: selectedPatientId,
                    customerName: `${patient.first_name} ${patient.last_name}`,
                    customerPhone: patient.contact?.phone || patient.contact?.mobile || patient.contact?.primary_phone
                })
            });
            const data = await res.json();
            if (res.ok && data.success) {
                toast({
                    title: '🚀 Payment Link Sent',
                    description: data.whatsappSent ? 'Link delivered to patient\'s WhatsApp.' : 'Link generated successfully.'
                });
            } else {
                toast({
                    title: 'Delivery Failed',
                    description: data.error || 'Check server logs.',
                    variant: 'destructive'
                });
            }
        } catch (err) {
            toast({
                title: 'System Error',
                description: err.message,
                variant: 'destructive'
            });
        } finally{
            setIsSendingLink(false);
        }
    };
    const handlePopOutDisplay = ()=>{
        if (!razorpayQRUrl) return;
        const url = `/hms/billing/qr?url=${encodeURIComponent(razorpayQRUrl)}&amount=${razorpayQRAmount}&bn=${encodeURIComponent(gatewayConfig?.businessName || 'Our Facility')}`;
        window.open(url, 'CustomerDisplay', 'width=800,height=1000,menubar=no,toolbar=no,location=no,status=no');
        setIsCustomerDisplayOpen(true);
    };
    const applyPricingMode = (mode)=>{
        setPricingMode(mode);
        const newLines = lines.map((line)=>{
            if (!line.product_id) return line;
            const billable = billableItems.find((bi)=>bi.id === line.product_id);
            if (!billable) return line;
            let newPrice = line.unit_price;
            if (mode === 'mrp' && billable.metadata?.lastMrp) {
                newPrice = Number(billable.metadata.lastMrp);
            } else if (mode === 'standard') {
                newPrice = Number(billable.price);
            }
            // Sync tax for the new price
            const taxRateObj = extendedTaxRates.find((t)=>t.id === line.tax_rate_id);
            const rate = taxRateObj ? Number(taxRateObj.rate) : 0;
            const lineNet = line.quantity * newPrice - (line.discount_amount || 0);
            const newTax = Math.max(0, lineNet) * rate / 100;
            return {
                ...line,
                unit_price: newPrice,
                tax_amount: newTax
            };
        });
        setLines(newLines);
        toast({
            title: "Pricing Updated",
            description: `Switched all lines to ${mode === 'mrp' ? 'MRP' : 'Standard'} pricing.`
        });
    };
    // Auto-load Logic for prescriptions
    const loadPrescriptionItems = async ()=>{
        if (!selectedPatientId) return toast({
            title: "Identify Patient",
            description: "Select a patient to pull records."
        });
        setLoading(true);
        try {
            const res = await fetch(`/api/prescriptions/by-patient/${selectedPatientId}`);
            const data = await res.json();
            if (data.success && data.latest?.medicines?.length > 0) {
                const newLines = await Promise.all(data.latest.medicines.map(async (m)=>{
                    const billable = billableItems.find((bi)=>bi.id === m.id);
                    const taxId = billable?.categoryTaxId !== undefined ? billable.categoryTaxId : defaultTaxId;
                    const finalPrice = billable?.price || Number(m.price || 0);
                    // FEFO Batch Selection
                    const batch = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$04c07f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getBestBatch"])(m.id);
                    // Calculate tax
                    const taxRateObj = extendedTaxRates.find((t)=>t.id === taxId);
                    const rate = taxRateObj ? Number(taxRateObj.rate) : 0;
                    const lineNet = Number(m.quantity || 1) * finalPrice;
                    const taxAmt = Math.max(0, lineNet) * rate / 100;
                    return {
                        id: Math.random() + Date.now(),
                        product_id: m.id,
                        description: m.name || m.description,
                        quantity: m.quantity || 1,
                        unit_price: pricingMode === 'mrp' && batch?.mrp ? Number(batch.mrp) : finalPrice,
                        uom: billable?.uom || 'PCS',
                        tax_rate_id: taxId,
                        tax_amount: taxAmt,
                        item_type: 'item',
                        batch_id: batch?.id || null,
                        batch_no: batch?.batch_no || null,
                        metadata: billable?.metadata || {}
                    };
                }));
                setLines(newLines);
                toast({
                    title: "History Loaded",
                    description: "Pulled medicines from latest prescription with FEFO batch selection."
                });
            } else {
                toast({
                    title: "No Records",
                    description: "No unbilled prescriptions found for this patient."
                });
            }
        } catch (e) {
            console.error(e);
            toast({
                title: "Load Failed",
                description: "A system error occurred while fetching prescriptions.",
                variant: "destructive"
            });
        }
        setLoading(false);
    };
    if (isSuccess) {
        // Reset function for "NEXT BILL"
        const handleNextBill = ()=>{
            setLines([
                {
                    id: Date.now(),
                    product_id: '',
                    description: '',
                    quantity: 1,
                    uom: 'PCS',
                    unit_price: 0,
                    tax_rate_id: defaultTaxId,
                    tax_amount: 0,
                    discount_amount: 0,
                    item_type: 'item'
                }
            ]);
            setPayments([]);
            setGlobalDiscount(0);
            setSelectedPatientId('');
            setIsWalkIn(false);
            setWalkInName('');
            setWalkInPhone('');
            setIsSuccess(false);
            setIsPaymentModalOpen(false); // [FIX] Explicitly close payment terminal
            setLastSavedId(null);
            // If we are in a modal/intercepted route, stay here. Otherwise reset path.
            if (!onClose) {
                router.replace('/hms/billing/new');
            }
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[300] bg-slate-950 flex items-center justify-center p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl w-full bg-white dark:bg-slate-900 rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden border border-white/5 animate-in zoom-in-95 duration-500",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-16 flex flex-col items-center text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/20 mb-8 animate-bounce",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "h-12 w-12 text-white stroke-[3px]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                lineNumber: 986,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 985,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl font-black italic tracking-tighter text-slate-900 dark:text-white mb-4",
                            children: "TRANSACTION FINALIZED"
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 988,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-black uppercase tracking-[0.6em] text-slate-500 mb-12",
                            children: [
                                "Serial: ",
                                initialInvoice?.invoice_number || 'NEW_ENTRY',
                                " | Ledger Node Synced"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 989,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-5 gap-4 w-full mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>window.open(`/hms/billing/${lastSavedId}/print`, '_blank'),
                                    className: "group p-6 bg-slate-50 dark:bg-slate-800/50 rounded-[2.5rem] border border-slate-100 dark:border-white/5 hover:border-indigo-500 transition-all text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-indigo-600 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-xl shadow-indigo-600/20 group-hover:scale-110 transition-transform",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                                className: "h-6 w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 998,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 997,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] font-black uppercase tracking-widest text-slate-400",
                                            children: "Print node"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1000,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-black text-slate-900 dark:text-white mt-1",
                                            children: "RECEIPT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1001,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 993,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: async ()=>{
                                        if (!lastSavedId) return;
                                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$3ee254__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["shareInvoiceWhatsapp"])(lastSavedId);
                                        if (res.success) {
                                            toast({
                                                title: "WhatsApp Sent",
                                                description: "Receipt shared with patient."
                                            });
                                        } else {
                                            const error = res.error || "System error";
                                            const isUltraMsgStopped = error.toLowerCase().includes("instance stopped") || error.toLowerCase().includes("non-payment");
                                            toast({
                                                title: "WhatsApp Failed",
                                                description: isUltraMsgStopped ? "Your WhatsApp service (UltraMsg) is stopped. Please check your billing/subscription." : error,
                                                variant: "destructive"
                                            });
                                        }
                                    },
                                    className: "group p-6 bg-slate-50 dark:bg-slate-800/50 rounded-[2.5rem] border border-slate-100 dark:border-white/5 hover:border-emerald-500 transition-all text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-emerald-500 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-xl shadow-emerald-500/20 group-hover:scale-110 transition-transform",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                className: "h-6 w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1025,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1024,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] font-black uppercase tracking-widest text-slate-400",
                                            children: "Share Node"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1027,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-black text-slate-900 dark:text-white mt-1",
                                            children: "WHATSAPP"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1028,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 1005,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleNextBill,
                                    className: "group p-8 bg-slate-50 dark:bg-slate-800/50 rounded-[2.5rem] border border-slate-100 dark:border-white/5 hover:border-emerald-500 transition-all text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-emerald-600 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-xl shadow-emerald-600/20 group-hover:scale-110 transition-transform",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "h-6 w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1037,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1036,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] font-black uppercase tracking-widest text-slate-400",
                                            children: "New Sync"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1039,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-black text-slate-900 dark:text-white mt-1",
                                            children: "NEXT BILL"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1040,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 1032,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.push(`/hms/billing/${lastSavedId}`),
                                    className: "group p-8 bg-slate-50 dark:bg-slate-800/50 rounded-[2.5rem] border border-slate-100 dark:border-white/5 hover:border-blue-500 transition-all text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-xl shadow-blue-600/20 group-hover:scale-110 transition-transform",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "h-6 w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1049,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1048,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] font-black uppercase tracking-widest text-slate-400",
                                            children: "Audit Node"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1051,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-black text-slate-900 dark:text-white mt-1",
                                            children: "LEDGER"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1052,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 1044,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: async ()=>{
                                        router.push('/hms/billing');
                                        router.refresh();
                                        if (onClose) onClose();
                                    },
                                    className: "group p-8 bg-slate-900 dark:bg-white rounded-[2.5rem] border-4 border-white/10 hover:border-indigo-500 transition-all text-center shadow-2xl shadow-slate-900/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-indigo-500 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-xl shadow-indigo-500/30 group-hover:rotate-12 transition-transform",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "h-6 w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1066,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1065,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] font-black uppercase tracking-widest text-slate-400 opacity-60",
                                            children: "Complete"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1068,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-black text-white dark:text-slate-900 mt-1",
                                            children: "EXIT TO HUB"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1069,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 1056,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 991,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 italic",
                            children: "Financial Cycle Closed • Identity Node Deselected"
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1073,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                    lineNumber: 984,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                lineNumber: 983,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
            lineNumber: 982,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$billing$2f$batch$2d$selector$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BatchSelectorDialog"], {
                isOpen: isBatchSelectorOpen,
                onClose: ()=>setIsBatchSelectorOpen(false),
                productName: batchProductName,
                batches: activeBatches,
                currency: currency,
                onSelect: (batch)=>{
                    if (selectedLineForBatch) {
                        setLines((current)=>current.map((l)=>l.id === selectedLineForBatch ? {
                                    ...l,
                                    batch_id: batch.id,
                                    batch_no: batch.batch_no,
                                    // Update price if in MRP mode or if current price is 0
                                    unit_price: (pricingMode === 'mrp' || l.unit_price === 0) && batch.mrp ? Number(batch.mrp) : l.unit_price
                                } : l));
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                lineNumber: 1084,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-[200] bg-slate-900/40 backdrop-blur-sm flex flex-col items-center justify-center gap-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl border border-white/10 flex flex-col items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "h-12 w-12 animate-spin text-indigo-600"
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1109,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-black uppercase tracking-[0.4em] text-slate-500 animate-pulse",
                            children: "Syncing Ledger Node..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1110,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                    lineNumber: 1108,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                lineNumber: 1107,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300 no-print",
                onClick: ()=>onClose ? onClose() : router.back(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `relative flex flex-col bg-white dark:bg-slate-900 shadow-[2xl] overflow-hidden border border-slate-200 dark:border-slate-800 transition-all duration-500 ease-out ${isMaximized ? 'w-full h-full' : 'w-full max-w-[98vw] h-[95vh] rounded-[2.5rem]'}`,
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onClose ? onClose() : router.back(),
                            className: "absolute top-3 right-3 z-[500] flex items-center gap-1.5 px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg shadow-red-600/40 transition-all active:scale-95 no-print",
                            title: "Close Billing Terminal",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 1125,
                                    columnNumber: 11
                                }, this),
                                "CLOSE"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1120,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-6 py-2 border-b border-[#006666] bg-[#004d4d] z-20 no-print",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#002b2b] p-1.5 rounded border border-[#008080]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$branding$2f$ziona$2d$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZionaLogo"], {
                                                size: 20,
                                                variant: "icon",
                                                theme: "dark",
                                                speed: "slow",
                                                colorScheme: "signature"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1133,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1132,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-[12px] font-black text-[#ffffcc] tracking-tight truncate",
                                                    children: "FINANCIAL BILLING TERMINAL - Ziona HMS v4.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1136,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mt-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] font-black uppercase tracking-[0.2em] text-[#64ffff]",
                                                            children: "GATEWAY OF BILLING"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1138,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-1 w-1 rounded-full bg-[#006666]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1139,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[9px] font-black uppercase tracking-[0.2em] text-[#ffffcc]/60",
                                                            children: "Transaction Mode: Standard Ledger Node"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1140,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1137,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1135,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 1131,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: loadPrescriptionItems,
                                                    disabled: !selectedPatientId || loading,
                                                    className: "flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-100 transition-all",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1149,
                                                            columnNumber: 17
                                                        }, this),
                                                        " Pull Prescription"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1148,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-4 w-[1px] bg-slate-200 mx-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1152,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>applyPricingMode('standard'),
                                                            className: `px-3 py-1.5 text-[8px] font-black rounded-md transition-all ${pricingMode === 'standard' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`,
                                                            children: "INTELLIGENT"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1155,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>applyPricingMode('mrp'),
                                                            className: `px-3 py-1.5 text-[8px] font-black rounded-md transition-all ${pricingMode === 'mrp' ? 'bg-amber-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`,
                                                            children: "MRP MODE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1161,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1154,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1147,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center bg-slate-200/50 dark:bg-slate-800/50 p-1 rounded-xl border border-slate-200/50 dark:border-slate-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsWalkIn(false),
                                                    className: `px-4 py-1.5 text-[9px] font-black rounded-lg transition-all ${!isWalkIn ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' : 'text-slate-500'}`,
                                                    children: "REGISTERED"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1172,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setIsWalkIn(true);
                                                        setSelectedPatientId('');
                                                    },
                                                    className: `px-4 py-1.5 text-[9px] font-black rounded-lg transition-all ${isWalkIn ? 'bg-white dark:bg-slate-700 text-pink-600 shadow-sm' : 'text-slate-500'}`,
                                                    children: "WALK-IN GUEST"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1173,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1171,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[400px]",
                                                    children: isWalkIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2 animate-in slide-in-from-right-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                value: walkInPhone,
                                                                onChange: (e)=>e.target.value.length <= 10 ? setWalkInPhone(e.target.value) : null,
                                                                disabled: isPaymentModalOpen || loading,
                                                                placeholder: "MOBILE...",
                                                                className: "h-10 bg-white dark:bg-slate-950 border-transparent focus:border-pink-500 rounded-xl text-[10px] font-black tracking-widest uppercase"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1180,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                value: walkInName,
                                                                onChange: (e)=>setWalkInName(e.target.value),
                                                                disabled: isPaymentModalOpen || loading,
                                                                placeholder: "NAME...",
                                                                className: "h-10 bg-white dark:bg-slate-950 border-transparent focus:border-pink-500 rounded-xl text-[10px] font-black tracking-widest uppercase"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1181,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1179,
                                                        columnNumber: 19
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$searchable$2d$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchableSelect"], {
                                                        value: selectedPatientId,
                                                        valueLabel: selectedPatientLabel,
                                                        options: patientOptions.slice(0, 20),
                                                        onChange: (id)=>setSelectedPatientId(id || ''),
                                                        onCreate: (q)=>{
                                                            setQuickPatientName(q);
                                                            setIsQuickPatientOpen(true);
                                                            return Promise.resolve(null);
                                                        },
                                                        onSearch: async (q)=>{
                                                            const search = q.toLowerCase();
                                                            return patientOptions.filter((p)=>p.label.toLowerCase().includes(search) || p.subLabel.toLowerCase().includes(search));
                                                        },
                                                        placeholder: "IDENTIFY PATIENT...",
                                                        disabled: isPaymentModalOpen || loading
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1184,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1177,
                                                    columnNumber: 15
                                                }, this),
                                                !isWalkIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>router.push(`/hms/patients/new?returnPath=${encodeURIComponent(window.location.pathname)}&autoSelect=true`),
                                                    disabled: isPaymentModalOpen || loading,
                                                    className: "h-10 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-indigo-500/20 active:scale-95 shrink-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1208,
                                                            columnNumber: 19
                                                        }, this),
                                                        " New Patient"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1203,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1176,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 border-l border-slate-200 dark:border-slate-800 pl-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsMaximized(!isMaximized),
                                                    className: "p-3 text-slate-400 hover:text-slate-900 transition-all rounded-xl hover:bg-slate-100",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1213,
                                                        columnNumber: 165
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1213,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>onClose ? onClose() : router.back(),
                                                    className: "p-2 bg-red-50 hover:bg-red-500 text-red-500 hover:text-white transition-all rounded-xl border border-red-200 hover:border-red-500 shadow-sm",
                                                    title: "Close",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1215,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1214,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1212,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 1145,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1130,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-6 py-2 bg-[#003333] border-b border-[#006666] z-10 transition-all no-print",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] font-black uppercase tracking-widest text-[#64ffff]",
                                                    children: "VOUCHER NO:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1225,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-mono font-black text-[#ffffcc] bg-[#002b2b] border border-[#006666] px-2 py-0.5 rounded",
                                                    children: provisionalNo
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1226,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1224,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-3 w-[1px] bg-[#006666]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1230,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] font-black uppercase tracking-widest text-[#64ffff]",
                                                    children: "DATE:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1232,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: date,
                                                    onChange: (e)=>setDate(e.target.value),
                                                    className: "bg-transparent border-none text-[10px] font-black text-[#ffffcc] focus:ring-0 cursor-pointer p-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1233,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1231,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-3 w-[1px] bg-[#006666]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1240,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] font-black uppercase tracking-widest text-[#64ffff]",
                                                    children: "PARTICULARS:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1242,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-black text-[#ffffcc]",
                                                    children: patients.find((p)=>p.id === selectedPatientId)?.label?.toUpperCase() || 'WALK-IN PATIENT'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1243,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1241,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 1223,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        patientBalance > 0 && !isWalkIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 bg-amber-500/10 border border-amber-500/20 px-4 py-1 rounded-full animate-in slide-in-from-right-4 duration-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "relative flex h-2 w-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1253,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "relative inline-flex rounded-full h-2 w-2 bg-amber-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1254,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1252,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] font-black uppercase tracking-[0.2em] text-amber-600",
                                                            children: "Previous Balance Detected:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1256,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1251,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-black text-amber-700 bg-amber-500/20 px-2 rounded-md",
                                                    children: [
                                                        currency,
                                                        patientBalance.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1258,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setIsFetchingLedger(true);
                                                        setIsLedgerOpen(true);
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$df4fdc__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getPatientLedger"])(selectedPatientId).then((res)=>{
                                                            if (res.success) setLedgerData(res.data || []);
                                                            setIsFetchingLedger(false);
                                                        });
                                                    },
                                                    className: "text-[8px] font-black uppercase tracking-[0.2em] text-amber-600 hover:text-amber-800 underline active:scale-95 transition-all",
                                                    children: "View Ledger Node"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1259,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1250,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 opacity-60",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-1 w-1 rounded-full bg-emerald-500 animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1276,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[8px] font-black uppercase tracking-widest text-emerald-600",
                                                    children: "Secure Node Enabled"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1277,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1275,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 1247,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1222,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-auto p-6 bg-slate-50/20 dark:bg-slate-950/20 space-y-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-[1400px] mx-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white dark:bg-slate-950 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "bg-[#006666] text-[9px] font-black uppercase tracking-[0.3em] text-[#64ffff] border-b border-[#008080]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-8 py-2",
                                                                children: "Item Description"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1289,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-2 w-24",
                                                                children: "Type"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1290,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-2 w-28 text-center",
                                                                children: "Qty"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1291,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-2 w-32",
                                                                children: "UOM"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1292,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-2 w-32",
                                                                children: "Rate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1293,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-2 w-36",
                                                                children: "Tax %"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1294,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-8 py-2 w-36 text-right",
                                                                children: "Total"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1295,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-2 w-12"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1296,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1288,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1287,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "divide-y divide-[#003333] border-b border-[#006666] bg-[#004d4d] text-[#ffffcc] [&_input]:text-[#ffffcc] [&_select]:text-[#ffffcc]",
                                                    children: lines.map((line, index)=>{
                                                        const lineTotal = line.quantity * line.unit_price;
                                                        const isZeroLine = (line.product_id || line.description) && lineTotal === 0;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: `group transition-all relative ${isZeroLine ? 'bg-rose-500/[0.03] dark:bg-rose-500/[0.05]' : 'hover:bg-slate-50/50 dark:hover:bg-slate-900/50'}`,
                                                            children: [
                                                                isZeroLine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute left-0 top-0 bottom-0 w-1 bg-rose-500 animate-pulse z-10"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1310,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-8 py-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$searchable$2d$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchableSelect"], {
                                                                        inputId: index === 0 ? 'item-search-0' : `item-search-${index}`,
                                                                        value: line.product_id,
                                                                        valueLabel: line.description,
                                                                        options: itemOptions.slice(0, 20),
                                                                        onChange: (v)=>updateLine(line.id, 'product_id', v),
                                                                        disabled: isPaymentModalOpen || loading,
                                                                        onSearch: async (q)=>{
                                                                            const search = q.toLowerCase();
                                                                            return itemOptions.filter((i)=>i.label.toLowerCase().includes(search) || i.subLabel.toLowerCase().includes(search));
                                                                        },
                                                                        placeholder: "SEARCH...",
                                                                        onKeyDown: (e)=>{
                                                                            if (e.key === 'Enter' && !line.product_id && lines.some((l)=>l.product_id)) {
                                                                                e.preventDefault();
                                                                                // Automate cleanup: Remove the empty line before settling
                                                                                handleRemoveItem(line.id);
                                                                                setTimeout(()=>{
                                                                                    const settleBtn = document.getElementById('settle-button');
                                                                                    if (settleBtn) settleBtn.focus();
                                                                                }, 100);
                                                                            }
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1313,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1312,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col gap-1 items-start",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                disabled: isPaymentModalOpen || loading,
                                                                                onClick: ()=>{
                                                                                    const newType = line.item_type === 'service' ? 'item' : 'service';
                                                                                    setLines((prev)=>prev.map((l)=>l.id === line.id ? {
                                                                                                ...l,
                                                                                                item_type: newType
                                                                                            } : l));
                                                                                },
                                                                                className: `text-[8px] font-black px-2 py-1 rounded-md transition-all active:scale-95 border ${line.item_type === 'service' ? 'bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 border-indigo-500/30' : 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border-emerald-500/30'}`,
                                                                                children: (line.item_type || 'ITEM').toUpperCase()
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                lineNumber: 1343,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            line.batch_no && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: async ()=>{
                                                                                    if (!line.product_id) return;
                                                                                    const batches = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$50403d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getProductBatches"])(line.product_id);
                                                                                    const availableBatches = batches.filter((b)=>Number(b.qty_on_hand) > 0);
                                                                                    if (availableBatches.length > 0) {
                                                                                        setBatchProductName(line.description || '');
                                                                                        setActiveBatches(availableBatches);
                                                                                        setSelectedLineForBatch(line.id);
                                                                                        setIsBatchSelectorOpen(true);
                                                                                    }
                                                                                },
                                                                                className: "text-[8px] font-mono font-bold text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-1 rounded animate-in fade-in zoom-in-95 hover:bg-amber-100 hover:text-amber-700 transition-colors",
                                                                                title: "Click to Change Batch",
                                                                                children: [
                                                                                    "Lot: ",
                                                                                    line.batch_no
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                lineNumber: 1360,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1342,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1341,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                        id: `qty-input-${index}`,
                                                                        type: "number",
                                                                        value: line.quantity,
                                                                        onFocus: (e)=>e.target.select(),
                                                                        onKeyDown: (e)=>{
                                                                            if (e.key === 'Enter') {
                                                                                e.preventDefault();
                                                                                handleAddItem();
                                                                                // Wait for state update to focus the new search terminal
                                                                                setTimeout(()=>{
                                                                                    const nextItemSearch = document.getElementById(`item-search-${index + 1}`);
                                                                                    if (nextItemSearch) nextItemSearch.focus();
                                                                                }, 150);
                                                                            }
                                                                        },
                                                                        onChange: (e)=>updateLine(line.id, 'quantity', parseFloat(e.target.value) || 0),
                                                                        disabled: isPaymentModalOpen || loading,
                                                                        className: "h-10 bg-transparent border-none text-center font-black text-base focus:ring-0 text-[#ffffcc] placeholder:text-[#ffffcc]/40"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1382,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1381,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        className: "w-full h-10 bg-[#003333] text-[#ffffcc] border border-[#006666] rounded-lg px-2 text-[9px] font-black tracking-widest outline-none focus:ring-1 focus:ring-[#64ffff]",
                                                                        value: line.uom || '',
                                                                        onChange: (e)=>updateLine(line.id, 'uom', e.target.value),
                                                                        disabled: isPaymentModalOpen || loading,
                                                                        children: getUomOptions(line.item_type, line.uom).map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: u,
                                                                                children: u
                                                                            }, u, false, {
                                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                lineNumber: 1406,
                                                                                columnNumber: 31
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1404,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1403,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                        type: "number",
                                                                        value: line.unit_price,
                                                                        onChange: (e)=>updateLine(line.id, 'unit_price', parseFloat(e.target.value) || 0),
                                                                        disabled: isPaymentModalOpen || loading,
                                                                        className: "h-10 bg-transparent border-none font-mono font-black text-[#ffffcc] text-sm focus:ring-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1410,
                                                                        columnNumber: 51
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1410,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                className: "w-full h-8 bg-[#003333] text-[#ffffcc] border border-[#006666] rounded-lg px-2 text-[8px] font-black outline-none focus:ring-1 focus:ring-[#64ffff]",
                                                                                value: line.tax_rate_id || '',
                                                                                onChange: (e)=>updateLine(line.id, 'tax_rate_id', e.target.value),
                                                                                disabled: isPaymentModalOpen || loading,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "",
                                                                                        children: "0% (No Tax)"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                        lineNumber: 1414,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    extendedTaxRates.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: t.id,
                                                                                            children: t.name.includes(t.rate.toString()) ? t.name : `${t.name} (${t.rate}%)`
                                                                                        }, t.id, false, {
                                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                            lineNumber: 1416,
                                                                                            columnNumber: 33
                                                                                        }, this))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                lineNumber: 1413,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            line.tax_amount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[9px] font-bold text-emerald-600 text-right pr-1",
                                                                                children: [
                                                                                    "+ ",
                                                                                    currency,
                                                                                    line.tax_amount.toFixed(2),
                                                                                    " Tax"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                lineNumber: 1422,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1412,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1411,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-8 py-3 text-right font-black text-lg italic tracking-tighter text-[#ffffcc]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: isZeroLine ? 'text-rose-500 animate-pulse' : '',
                                                                        children: [
                                                                            currency,
                                                                            (lineTotal + (line.tax_amount || 0)).toFixed(2)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1429,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1428,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleRemoveItem(line.id),
                                                                        disabled: isPaymentModalOpen || loading,
                                                                        className: "text-slate-300 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1434,
                                                                            columnNumber: 213
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1434,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1433,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, line.id, true, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1305,
                                                            columnNumber: 23
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1299,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1286,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-900",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleAddItem,
                                                disabled: isPaymentModalOpen || loading,
                                                className: "flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] text-indigo-600 hover:text-indigo-800 transition-all group disabled:opacity-50 disabled:cursor-not-allowed",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white dark:bg-slate-800 p-1.5 rounded-lg border border-indigo-200 dark:border-indigo-900/40 shadow-sm group-hover:rotate-90 transition-transform",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1443,
                                                            columnNumber: 184
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1443,
                                                        columnNumber: 19
                                                    }, this),
                                                    "ADD LINE"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1442,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1441,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 1285,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                lineNumber: 1284,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1283,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-[#0c1222] border-t border-slate-100 dark:border-slate-800 px-10 py-6 z-20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-[1400px] mx-auto flex flex-col xl:flex-row justify-between items-center gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 bg-indigo-500/10 rounded-2xl border border-indigo-500/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                                            className: "h-6 w-6 text-indigo-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1458,
                                                            columnNumber: 95
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1458,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1",
                                                                children: "Queue Load"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1460,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xl font-black text-slate-900 dark:text-white italic tracking-tighter",
                                                                children: [
                                                                    lines.filter((l)=>l.description || l.product_id).length,
                                                                    " Active"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1461,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1459,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1457,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                            className: "h-6 w-6 text-emerald-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1465,
                                                            columnNumber: 97
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1465,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1",
                                                                children: "Settlement Total"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1467,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-4xl font-black text-emerald-600 tracking-tighter italic drop-shadow-[0_0_20px_rgba(5,150,105,0.1)]",
                                                                children: [
                                                                    currency,
                                                                    grandTotal.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1468,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1466,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1464,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                        lineNumber: 1456,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-4 w-full xl:w-auto",
                                        children: initialInvoice?.status === 'cancelled' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-10 py-4 bg-rose-500/10 border-2 border-rose-500/20 rounded-2xl flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "h-6 w-6 text-rose-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1477,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-rose-600 font-black italic tracking-wider uppercase",
                                                    children: "VOIDED TRANSACTION • NO EDITS PERMITTED"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1478,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1476,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                isAdmin && initialInvoice?.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleCancelBill,
                                                    disabled: loading,
                                                    className: "px-6 py-4 text-[10px] font-black text-rose-500 uppercase tracking-widest hover:bg-rose-500/10 border border-rose-500/20 rounded-2xl transition-all mr-2",
                                                    children: "Void / Cancel Node"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1483,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    id: "settle-button",
                                                    type: "button",
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                        // WORLD STANDARD VALIDATION: Prevent settlement if zero-price items exist
                                                        const zeroLines = lines.filter((l)=>(l.product_id || l.description) && l.quantity * l.unit_price === 0 && l.product_id !== 'REG-FEE');
                                                        if (zeroLines.length > 0) {
                                                            return toast({
                                                                title: "Settlement Blocked",
                                                                description: `You have ${zeroLines.length} item(s) with zero total. Please update the price/quantity or remove them before proceeding.`,
                                                                variant: "destructive"
                                                            });
                                                        }
                                                        // World Class Focus Management: Clear cursor and lists before overlaying
                                                        if (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
                                                            document.activeElement.blur();
                                                        }
                                                        setActivePaymentAmount(grandTotal.toFixed(2));
                                                        setIsPaymentModalOpen(true);
                                                    },
                                                    disabled: loading || lines.filter((l)=>l.description || l.product_id).length === 0,
                                                    className: "group relative px-10 py-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-white/20 outline-none text-white rounded-2xl shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 text-lg font-black italic uppercase tracking-tighter overflow-hidden focus:translate-y-[-2px] border-2 border-transparent focus:border-white/50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-x-0 bottom-0 h-0.5 bg-white/20 animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1518,
                                                            columnNumber: 21
                                                        }, this),
                                                        "COLLECT SETTLEMENT ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "h-6 w-6 group-hover:translate-x-1 transition-transform"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1519,
                                                            columnNumber: 40
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1492,
                                                    columnNumber: 19
                                                }, this),
                                                !isRegistrationFee && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                handleSave('draft');
                                                            },
                                                            disabled: loading || lines.filter((l)=>l.product_id || l.description).length === 0,
                                                            className: "px-6 py-4 bg-slate-100 dark:bg-slate-800 border border-transparent hover:border-slate-300 dark:hover:border-slate-600 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-500 transition-all",
                                                            children: "Save Draft"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1523,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                handleSave('posted');
                                                            },
                                                            disabled: loading || lines.filter((l)=>l.product_id || l.description).length === 0,
                                                            className: "px-8 py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all shadow-lg",
                                                            children: "Post Credit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1531,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1522,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                        lineNumber: 1474,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                lineNumber: 1453,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1452,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                            open: isPaymentModalOpen,
                            onOpenChange: setIsPaymentModalOpen,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                                onInteractOutside: (e)=>e.preventDefault(),
                                onPointerDownOutside: (e)=>e.preventDefault(),
                                onEscapeKeyDown: (e)=>e.preventDefault(),
                                className: "z-[400] max-w-4xl p-0 overflow-hidden bg-white dark:bg-[#0a0f1e] border-none shadow-[0_60px_200px_rgba(0,0,0,0.2)] dark:shadow-[0_60px_200px_rgba(0,0,0,1)] rounded-[3rem] ring-1 ring-slate-200 dark:ring-white/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row min-h-[500px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 bg-slate-50 dark:bg-slate-900 border-r border-slate-100 dark:border-white/5 p-10 flex flex-col gap-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-slate-400 font-black tracking-[0.4em] text-[8px] uppercase mb-6",
                                                            children: "Financial Audit Node"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1559,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                                                            children: "Bill Total"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1562,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xl font-black text-slate-900 dark:text-white italic",
                                                                            children: [
                                                                                currency,
                                                                                grandTotal.toFixed(2)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1563,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1561,
                                                                    columnNumber: 21
                                                                }, this),
                                                                patientBalance > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-center bg-amber-500/5 p-4 rounded-2xl border border-amber-500/10",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-[9px] font-black text-amber-600 uppercase tracking-widest",
                                                                                    children: "Previous Debt"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                    lineNumber: 1568,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-black text-amber-700",
                                                                                    children: [
                                                                                        currency,
                                                                                        patientBalance.toFixed(2)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                    lineNumber: 1569,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1567,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>setIncludePrevBalance(!includePrevBalance),
                                                                            className: `px-4 py-2 rounded-xl text-[8px] font-black uppercase tracking-widest transition-all ${includePrevBalance ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20' : 'bg-white dark:bg-slate-800 text-amber-600 border border-amber-200 dark:border-amber-900'}`,
                                                                            children: includePrevBalance ? 'INCLUDED' : 'ADD TO TALLY'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1571,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1566,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-px bg-slate-200 dark:bg-slate-800 w-full"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1579,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] font-black text-indigo-600 uppercase tracking-widest",
                                                                            children: "Settlement Target"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1581,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-3xl font-black text-slate-900 dark:text-white italic tracking-tighter",
                                                                            children: [
                                                                                currency,
                                                                                (grandTotal + (includePrevBalance ? patientBalance : 0)).toFixed(2)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1582,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1580,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1560,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1558,
                                                    columnNumber: 17
                                                }, this),
                                                payments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3 flex-1 overflow-auto max-h-[180px] pr-2 custom-scrollbar",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[8px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2",
                                                            children: "Payment Stream"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1592,
                                                            columnNumber: 21
                                                        }, this),
                                                        payments.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between bg-white dark:bg-slate-800/40 p-3 rounded-2xl border border-slate-100 dark:border-white/5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "p-2 rounded-xl bg-slate-100 dark:bg-slate-900",
                                                                                children: [
                                                                                    p.method === 'cash' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__["Banknote"], {
                                                                                        className: "h-3 w-3 text-emerald-500"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                        lineNumber: 1597,
                                                                                        columnNumber: 53
                                                                                    }, this),
                                                                                    p.method === 'upi' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__["QrCode"], {
                                                                                        className: "h-3 w-3 text-indigo-500"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                        lineNumber: 1598,
                                                                                        columnNumber: 52
                                                                                    }, this),
                                                                                    p.method === 'card' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                                                                        className: "h-3 w-3 text-blue-500"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                        lineNumber: 1599,
                                                                                        columnNumber: 53
                                                                                    }, this),
                                                                                    p.method === 'bank_transfer' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                                        className: "h-3 w-3 text-amber-500"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                        lineNumber: 1600,
                                                                                        columnNumber: 62
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                lineNumber: 1596,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[9px] font-black uppercase tracking-widest text-slate-500",
                                                                                children: p.method
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                lineNumber: 1602,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1595,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs font-black text-slate-900 dark:text-white",
                                                                                children: [
                                                                                    currency,
                                                                                    p.amount.toFixed(2)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                lineNumber: 1605,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>setPayments(payments.filter((_, i)=>i !== idx)),
                                                                                className: "text-slate-300 hover:text-red-500 transition-colors",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                    className: "h-3 w-3"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                    lineNumber: 1606,
                                                                                    columnNumber: 165
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                lineNumber: 1606,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1604,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1594,
                                                                columnNumber: 23
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1591,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `mt-auto p-6 rounded-3xl border transition-all duration-500 ${!isBalanced ? 'bg-amber-500/10 border-amber-500/30 animate-pulse' : 'bg-slate-200/50 dark:bg-slate-800/50 border-white/5'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${isDeficit ? 'bg-amber-100 text-amber-700' : isSurplus ? 'bg-emerald-100 text-emerald-700' : 'bg-indigo-100 text-indigo-700'}`,
                                                            children: isDeficit ? 'Partial / Credit' : isSurplus ? 'Advance / Excess' : 'Balanced'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1615,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-bold text-slate-600 dark:text-slate-400 mt-4 leading-relaxed tracking-tight underline-offset-4 decoration-dotted decoration-slate-300",
                                                            children: isDeficit ? `Deficit: ${currency}${Math.max(0, settlementTarget - totalPaid).toFixed(2)} to be carried as debt.` : isSurplus ? `Surplus: ${currency}${(totalPaid - settlementTarget).toFixed(2)} will be credited.` : `Transaction perfectly tallied. Ready for sync.`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1618,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1614,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1557,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-[1.2] p-10 flex flex-col gap-10 bg-white dark:bg-[#0a0f1e]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group/input relative",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-700 font-black text-xl italic",
                                                                    children: currency
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1637,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    ref: amountInputRef,
                                                                    type: "number",
                                                                    className: "w-full bg-white dark:bg-slate-950/50 border border-slate-200 dark:border-white/10 h-16 rounded-2xl pl-12 pr-6 text-slate-900 dark:text-white font-black text-2xl focus:border-indigo-600 outline-none transition-all placeholder:text-slate-300",
                                                                    value: activePaymentAmount,
                                                                    onChange: (e)=>setActivePaymentAmount(e.target.value),
                                                                    placeholder: "Enter Amount...",
                                                                    onFocus: (e)=>{
                                                                        e.target.select();
                                                                        e.stopPropagation();
                                                                    },
                                                                    onClick: (e)=>e.stopPropagation(),
                                                                    onKeyDown: (e)=>{
                                                                        e.stopPropagation();
                                                                        if (e.key === 'Enter') {
                                                                            e.preventDefault();
                                                                            e.stopPropagation();
                                                                            const amt = parseFloat(activePaymentAmount) || 0;
                                                                            const target = grandTotal + (includePrevBalance ? patientBalance : 0);
                                                                            if (amt > 0) {
                                                                                setPayments((prev)=>{
                                                                                    const newPayments = [
                                                                                        ...prev,
                                                                                        {
                                                                                            method: 'cash',
                                                                                            amount: amt
                                                                                        }
                                                                                    ];
                                                                                    const currentTotalPaid = newPayments.reduce((sum, p)=>sum + p.amount, 0);
                                                                                    const remaining = Math.max(0, target - currentTotalPaid);
                                                                                    if (remaining === 0) {
                                                                                        setTimeout(()=>finalizeButtonRef.current?.focus(), 100);
                                                                                    }
                                                                                    setTimeout(()=>setActivePaymentAmount(remaining > 0 ? remaining.toFixed(2) : ''), 0);
                                                                                    return newPayments;
                                                                                });
                                                                            } else if (totalPaid >= target || payments.length === 0 && amt === 0) {
                                                                                // If already tallied or user wants to post as credit with 0 paid
                                                                                finalizeButtonRef.current?.focus();
                                                                            }
                                                                        }
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1638,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1636,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1635,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1634,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
                                                    children: [
                                                        {
                                                            id: 'cash',
                                                            label: 'CASH',
                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__["Banknote"],
                                                            color: 'text-emerald-500 dark:text-emerald-400'
                                                        },
                                                        {
                                                            id: 'upi',
                                                            label: 'UPI / QR',
                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__["QrCode"],
                                                            color: 'text-indigo-600 dark:text-indigo-400'
                                                        },
                                                        {
                                                            id: 'card',
                                                            label: 'CARD',
                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
                                                            color: 'text-blue-600 dark:text-blue-400'
                                                        },
                                                        {
                                                            id: 'bank_transfer',
                                                            label: 'BANK TRANSFER',
                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"],
                                                            color: 'text-amber-600 dark:text-amber-400'
                                                        }
                                                    ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            disabled: isPOSLoading,
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                const amt = parseFloat(activePaymentAmount) || 0;
                                                                if (amt > 0) {
                                                                    // Plug-n-Play Logic: If device is connected and it's Card/UPI, try POS first
                                                                    if (posStatus === 'connected' && (m.id === 'card' || m.id === 'upi')) {
                                                                        handlePOSPayment(m.id.toUpperCase(), amt);
                                                                        return;
                                                                    }
                                                                    if (m.id === 'upi') {
                                                                        setShowUPIQR({
                                                                            amount: amt,
                                                                            vpa: 'hospital@upi'
                                                                        }); // Default VPA, ideally from settings
                                                                    }
                                                                    setPayments((prev)=>{
                                                                        const newPayments = [
                                                                            ...prev,
                                                                            {
                                                                                method: m.id,
                                                                                amount: amt
                                                                            }
                                                                        ];
                                                                        const currentTotalPaid = newPayments.reduce((sum, p)=>sum + p.amount, 0);
                                                                        const remaining = Math.max(0, grandTotal + (includePrevBalance ? patientBalance : 0) - currentTotalPaid);
                                                                        setTimeout(()=>setActivePaymentAmount(remaining > 0 ? remaining.toFixed(2) : ''), 0);
                                                                        return newPayments;
                                                                    });
                                                                } else {
                                                                    toast({
                                                                        title: "Amount Required",
                                                                        description: "Enter an amount before selecting a payment method.",
                                                                        variant: "destructive"
                                                                    });
                                                                }
                                                            },
                                                            className: `group relative py-4 bg-white dark:bg-slate-900/50 border rounded-2xl flex flex-col items-center justify-center gap-2 transition-all hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95 shadow-sm dark:shadow-none ${isPOSLoading ? 'opacity-50 cursor-not-allowed' : 'border-slate-200 dark:border-white/5 hover:border-indigo-600'}`,
                                                            children: [
                                                                posStatus === 'connected' && (m.id === 'card' || m.id === 'upi') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute -top-2 -right-2 bg-emerald-500 text-white text-[6px] font-black px-1.5 py-0.5 rounded-full shadow-lg animate-pulse uppercase",
                                                                    children: "Device Active"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1718,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-white/10 group-hover:border-current transition-all",
                                                                    children: isPOSLoading && (m.id === 'card' || m.id === 'upi') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                        className: "h-4 w-4 animate-spin text-indigo-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1722,
                                                                        columnNumber: 80
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(m.icon, {
                                                                        className: `h-4 w-4 ${m.color}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1722,
                                                                        columnNumber: 143
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1721,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[8px] font-black tracking-[0.2em] text-slate-500 dark:text-white opacity-60 group-hover:opacity-100 uppercase",
                                                                    children: isPOSLoading && (m.id === 'card' || m.id === 'upi') ? 'PROCESSING...' : m.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1724,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, m.id, true, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1685,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1678,
                                                    columnNumber: 17
                                                }, this),
                                                gatewayConfig?.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        const amt = parseFloat(activePaymentAmount) || 0;
                                                        if (amt > 0) {
                                                            handleRazorpayQR(amt);
                                                        } else {
                                                            toast({
                                                                title: "Amount Required",
                                                                description: "Enter an amount before starting Razorpay payment.",
                                                                variant: "destructive"
                                                            });
                                                        }
                                                    },
                                                    className: "w-full h-16 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white rounded-2xl flex items-center justify-center gap-4 transition-all active:scale-[0.98] shadow-lg shadow-indigo-500/20 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-8 w-8 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                                className: "h-4 w-4 text-yellow-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1749,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1748,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] font-black uppercase tracking-[0.2em] opacity-80 leading-none mb-1",
                                                                    children: "Active Gateway"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1752,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-black tracking-tight uppercase leading-none",
                                                                    children: "Pay via Razorpay QR (Auto-Confirmed)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1753,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1751,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1734,
                                                    columnNumber: 19
                                                }, this),
                                                gatewayConfig?.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    disabled: isSendingLink,
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        const amt = parseFloat(activePaymentAmount) || 0;
                                                        if (amt > 0) {
                                                            handleSendPaymentLink(amt);
                                                        } else {
                                                            toast({
                                                                title: "Amount Required",
                                                                description: "Enter an amount before sending payment link.",
                                                                variant: "destructive"
                                                            });
                                                        }
                                                    },
                                                    className: "w-full h-16 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl flex items-center justify-center gap-4 transition-all active:scale-[0.98] shadow-lg shadow-emerald-500/20 group disabled:opacity-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-8 w-8 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors",
                                                            children: isSendingLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                className: "h-4 w-4 animate-spin text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1776,
                                                                columnNumber: 40
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                                                className: "h-4 w-4 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1776,
                                                                columnNumber: 98
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1775,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] font-black uppercase tracking-[0.2em] opacity-80 leading-none mb-1",
                                                                    children: "Contact-less Pay"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1779,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-black tracking-tight uppercase leading-none",
                                                                    children: isSendingLink ? 'Requesting...' : 'Send Payment Link to WhatsApp'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1780,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1778,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1760,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-3 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                setIsPaymentModalOpen(false);
                                                            },
                                                            className: "px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors border border-slate-200 dark:border-white/5 rounded-2xl",
                                                            children: "Cancel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1790,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                setPayments([]);
                                                                setActivePaymentAmount(grandTotal.toFixed(2));
                                                            },
                                                            className: "px-6 py-4 text-[10px] font-black text-rose-400 uppercase tracking-widest hover:text-rose-600 transition-colors border border-rose-200/50 dark:border-rose-500/20 rounded-2xl",
                                                            children: "Reset"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1797,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            ref: finalizeButtonRef,
                                                            type: "button",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                const floatingAmt = parseFloat(activePaymentAmount) || 0;
                                                                // World Class Auto-Apply: If only one payment node is expected and amount is typed but not applied
                                                                if (floatingAmt > 0 && payments.length === 0) {
                                                                    const autoPayments = [
                                                                        {
                                                                            method: 'cash',
                                                                            amount: floatingAmt
                                                                        }
                                                                    ];
                                                                    setPayments(autoPayments);
                                                                    handleSave('paid', autoPayments);
                                                                    return;
                                                                }
                                                                handleSave('paid');
                                                            },
                                                            disabled: loading || payments.length === 0 && (parseFloat(activePaymentAmount) || 0) === 0,
                                                            className: `flex-1 h-16 rounded-2xl text-white font-black text-[10px] uppercase tracking-[0.3em] transition-all active:scale-[0.98] shadow-xl flex items-center justify-center gap-3 col-span-1 ${isDeficit ? 'bg-amber-600 hover:bg-amber-700 shadow-amber-600/20' : isSurplus ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20'}`,
                                                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                className: "h-5 w-5 animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1834,
                                                                columnNumber: 32
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: isDeficit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        "POST AS CREDIT ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1837,
                                                                            columnNumber: 44
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true) : isSurplus ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        "RECEIVE ADVANCE ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1839,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        "FINALIZE SETTLEMENT ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                            className: "h-5 w-5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1841,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true)
                                                            }, void 0, false)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1809,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1789,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[8px] font-black text-center text-slate-600 uppercase tracking-[0.4em] opacity-40",
                                                    children: "Standard Institutional Billing & Settlement Node"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1847,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1630,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 1555,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                lineNumber: 1549,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1548,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                            open: isRazorpayQROpen,
                            onOpenChange: setIsRazorpayQROpen,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                                className: "z-[500] max-w-md p-8 bg-white dark:bg-slate-900 rounded-[3rem] border-none shadow-2xl overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 mb-6 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-800/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                    className: "h-3 w-3 text-indigo-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1858,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400",
                                                    children: "Dynamic Payment Gateway"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1859,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1857,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-black text-slate-900 dark:text-white italic mb-2",
                                            children: "SCAN TO PAY"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1862,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium text-slate-500 mb-8",
                                            children: [
                                                "Pay precisely ",
                                                currency,
                                                (razorpayQRAmount || 0).toFixed(2),
                                                " to avoid payment failure"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1863,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative mb-8 flex justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `transition-all duration-300 ${razorpayStatus === 'loading' ? 'blur-md opacity-50' : ''}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-6 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] inline-block",
                                                        children: razorpayQRUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QRCodeSVG"], {
                                                            value: razorpayQRUrl,
                                                            size: 180,
                                                            level: "H",
                                                            includeMargin: false
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1869,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-[180px] w-[180px] flex items-center justify-center bg-slate-50 rounded-xl",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                className: "h-8 w-8 text-indigo-400 animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1872,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1871,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1867,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1866,
                                                    columnNumber: 17
                                                }, this),
                                                razorpayStatus === 'loading' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex flex-col items-center justify-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "h-10 w-10 text-indigo-600 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1880,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-black uppercase tracking-widest text-indigo-600",
                                                            children: "Generating QR..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1881,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1879,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1865,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-100 dark:border-white/5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[8px] font-black text-slate-400 uppercase tracking-widest",
                                                                    children: "Order ID"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1889,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] font-mono font-bold text-slate-600 dark:text-slate-300",
                                                                    children: razorpayOrderId || 'PENDING'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1890,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1888,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center bg-indigo-500/10 p-3 rounded-2xl",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[9px] font-black text-indigo-600 uppercase tracking-widest flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                            className: "h-3 w-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1894,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        " Waiting for Payment"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1893,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-black text-indigo-700 animate-pulse",
                                                                    children: "LIVE"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1896,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1892,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1887,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            onClick: ()=>setIsRazorpayQROpen(false),
                                                            className: "h-14 rounded-2xl font-black uppercase text-[10px] tracking-widest border-slate-200 dark:border-slate-800 focus:ring-0",
                                                            children: "Cancel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1901,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            onClick: handleRazorpayManualConfirm,
                                                            className: "h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-lg shadow-emerald-600/20 active:scale-95 border-none",
                                                            children: "I have Paid"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1904,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1900,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                        handlePopOutDisplay();
                                                    },
                                                    className: "w-full h-12 rounded-xl text-[9px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 flex items-center justify-center gap-3 transition-all border border-indigo-100 dark:border-indigo-900/40 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                            className: `h-4 w-4 ${isCustomerDisplayOpen ? 'animate-pulse text-emerald-500' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1917,
                                                            columnNumber: 19
                                                        }, this),
                                                        isCustomerDisplayOpen ? 'MIRROR ACTIVE (PATIENT SCREEN)' : 'MIRROR TO PATIENT DISPLAY'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1912,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 p-4 bg-amber-50 dark:bg-amber-900/10 rounded-2xl border border-amber-100 dark:border-amber-900/20",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                            className: "h-4 w-4 text-amber-600 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1922,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-left leading-relaxed text-amber-700 dark:text-amber-400 font-medium italic",
                                                            children: "Open any UPI App (PhonePe, GPay, Paytm) and scan this QR code. The system will automatically detect the payment via cloud hook."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1923,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1921,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1886,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 1856,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                lineNumber: 1855,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1854,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                            open: isQuickPatientOpen,
                            onOpenChange: setIsQuickPatientOpen,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                                className: "z-[400] max-w-md bg-white dark:bg-[#0a0f1e] text-slate-900 dark:text-white rounded-[2rem] border-none p-12 shadow-[0_50px_100px_rgba(0,0,0,0.5)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                className: "text-3xl font-black italic tracking-tighter text-slate-900 dark:text-white",
                                                children: "Quick Identification"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1935,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                                className: "text-xs font-black uppercase tracking-[0.2em] text-slate-500",
                                                children: [
                                                    "Register new medical identity node for ",
                                                    quickPatientName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1935,
                                                columnNumber: 161
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                        lineNumber: 1935,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-8 py-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 pl-2",
                                                        children: "Patient Full Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1938,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: quickPatientName,
                                                        onChange: (e)=>setQuickPatientName(e.target.value),
                                                        className: "h-14 bg-slate-50 dark:bg-slate-950 border-slate-100 dark:border-slate-800 rounded-2xl text-lg font-black tracking-widest transition-all focus:ring-4 focus:ring-indigo-500/10",
                                                        placeholder: "NAME...",
                                                        autoFocus: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1939,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1937,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 pl-2",
                                                        children: "Sync Mobile Terminal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1942,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: quickPatientPhone,
                                                        onChange: (e)=>setQuickPatientPhone(e.target.value),
                                                        className: "h-14 bg-slate-50 dark:bg-slate-950 border-slate-100 dark:border-slate-800 rounded-2xl text-lg font-black tracking-widest transition-all focus:ring-4 focus:ring-indigo-500/10",
                                                        placeholder: "+91..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1943,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1941,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                        lineNumber: 1936,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                onClick: ()=>setIsQuickPatientOpen(false),
                                                className: "text-[10px] font-black uppercase tracking-widest py-6",
                                                children: "Abort"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1946,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleQuickPatientCreate,
                                                disabled: !quickPatientPhone || isCreatingPatient,
                                                className: "bg-indigo-600 hover:bg-indigo-700 h-14 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] px-12 text-white shadow-2xl shadow-indigo-500/30 transition-all flex items-center gap-3",
                                                children: isCreatingPatient ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "h-5 w-5 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1946,
                                                    columnNumber: 492
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        "Verify & Initialize ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1946,
                                                            columnNumber: 561
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1946,
                                                columnNumber: 176
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                        lineNumber: 1946,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                lineNumber: 1934,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1933,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                            open: isLedgerOpen,
                            onOpenChange: setIsLedgerOpen,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                                className: "z-[400] max-w-4xl p-6 bg-white dark:bg-[#0a0f1e] text-slate-900 dark:text-white rounded-[2rem] border-none p-0 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.4)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                                className: "mb-8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                                    className: "4xl font-black italic tracking-tighter text-slate-900 dark:text-white",
                                                                    children: "Patient Ledger Audit"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1957,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                                                    className: "text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mt-2",
                                                                    children: "Full financial reconciliation for patient identity node"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1958,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1956,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-2xl text-right",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[9px] font-black text-amber-600 uppercase tracking-widest",
                                                                    children: "Total Liability"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1961,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-2xl font-black text-amber-700",
                                                                    children: [
                                                                        currency,
                                                                        patientBalance.toFixed(2)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1962,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1960,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1955,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1954,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "max-h-[500px] overflow-y-auto pr-4 custom-scrollbar",
                                                children: isFetchingLedger ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center justify-center py-20 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "h-10 w-10 text-indigo-500 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1970,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-black uppercase tracking-[0.4em] text-slate-400",
                                                            children: "Syncing Ledger Node..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1971,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1969,
                                                    columnNumber: 19
                                                }, this) : ledgerData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center py-20",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-black uppercase tracking-widest text-slate-400 italic",
                                                        children: "No financial movements found for this identity node."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1975,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1974,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    className: "w-full text-left border-collapse",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "border-b border-slate-100 dark:border-white/5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "py-4 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400",
                                                                        children: "Date/Time"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1981,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "py-4 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400",
                                                                        children: "Reference"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1982,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "py-4 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400",
                                                                        children: "Account Node"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1983,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "py-4 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-right",
                                                                        children: "Debit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1984,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "py-4 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-right",
                                                                        children: "Credit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1985,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1980,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1979,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            className: "divide-y divide-slate-50 dark:divide-white/5",
                                                            children: ledgerData.map((line, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    className: "group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-4 font-mono text-[10px] text-slate-500",
                                                                            children: new Date(line.journal_entries?.date).toLocaleDateString()
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1991,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-[11px] font-black text-slate-900 dark:text-white uppercase truncate max-w-[150px]",
                                                                                    children: line.journal_entries?.ref || 'N/A'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                    lineNumber: 1995,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-[8px] font-black text-slate-400 uppercase tracking-widest",
                                                                                    children: line.journal_entries?.journals?.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                    lineNumber: 1996,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1994,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-4",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] font-black text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-2 py-0.5 rounded uppercase",
                                                                                children: line.accounts?.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                lineNumber: 1999,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1998,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-4 text-right font-mono text-xs font-black text-rose-500",
                                                                            children: line.debit > 0 ? `${currency}${Number(line.debit).toFixed(2)}` : '-'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 2001,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-4 text-right font-mono text-xs font-black text-emerald-500",
                                                                            children: line.credit > 0 ? `${currency}${Number(line.credit).toFixed(2)}` : '-'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 2004,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, idx, true, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1990,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1988,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1978,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1967,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                        lineNumber: 1953,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-8 bg-slate-50 dark:bg-slate-900 flex justify-end",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>setIsLedgerOpen(false),
                                            variant: "secondary",
                                            className: "px-8 rounded-2xl font-black text-[10px] uppercase tracking-widest py-6",
                                            children: "Close Audit Terminal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 2015,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                        lineNumber: 2014,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                lineNumber: 1952,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1951,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                            open: !!showUPIQR,
                            onOpenChange: ()=>setShowUPIQR(null),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                                className: "z-[500] max-w-sm p-0 bg-white dark:bg-[#0a0f1e] rounded-[2.5rem] border-none shadow-[0_50px_100px_rgba(99,102,241,0.2)] overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-indigo-600 to-purple-700 p-8 text-center relative overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-spin-slow bg-[radial-gradient(circle,white_0%,transparent_70%)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 2028,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2027,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white/20 p-3 rounded-2xl backdrop-blur-md inline-flex mb-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__["QrCode"], {
                                                            className: "h-6 w-6 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 2032,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2031,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-black text-white italic tracking-tighter uppercase mb-1",
                                                        children: "UPI Smart Pay"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2034,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-black text-indigo-100 uppercase tracking-widest opacity-80",
                                                        children: "Scan with any UPI App"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2035,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2030,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                        lineNumber: 2026,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-10 flex flex-col items-center gap-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50 relative group",
                                                children: [
                                                    showUPIQR && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QRCodeSVG"], {
                                                        value: `upi://pay?pa=${showUPIQR.vpa}&pn=Hospital&am=${showUPIQR.amount}&cu=INR&tn=Invoice`,
                                                        size: 220,
                                                        level: "H",
                                                        includeMargin: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2042,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2049,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2040,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2",
                                                        children: "Settlement Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2053,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-4xl font-black text-slate-900 dark:text-white tracking-tighter italic",
                                                        children: [
                                                            currency,
                                                            showUPIQR?.amount.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2054,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2052,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowUPIQR(null),
                                                className: "w-full h-14 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all",
                                                children: "Done / Paid"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2059,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9px] font-bold text-slate-400 max-w-[200px] text-center uppercase tracking-tight leading-relaxed",
                                                children: "Please verify payment success on your mobile / machine before closing this terminal."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2066,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                        lineNumber: 2039,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                lineNumber: 2025,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 2024,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                            open: isErrorDialogOpen,
                            onOpenChange: setIsErrorDialogOpen,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                                className: "z-[400] max-w-md p-6 bg-white dark:bg-slate-900 border-rose-500/30 rounded-[2rem] shadow-2xl shadow-rose-500/20 text-center flex flex-col items-center border-none overflow-hidden shadow-[0_50px_100px_rgba(255,0,0,0.5)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-rose-600 p-8 flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white/20 p-3 rounded-2xl backdrop-blur-md",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                    className: "h-8 w-8 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 2078,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2077,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-black text-white italic tracking-tighter uppercase",
                                                        children: errorDetails.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2081,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-black text-rose-100 uppercase tracking-widest",
                                                        children: "System Sync Failure"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2082,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2080,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                        lineNumber: 2076,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-white/5 mb-8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-mono font-medium text-slate-600 dark:text-slate-300 break-words select-text",
                                                    children: errorDetails.message
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 2087,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2086,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            navigator.clipboard.writeText(errorDetails.message);
                                                            toast({
                                                                title: "Copied!",
                                                                description: "Error message copied to clipboard."
                                                            });
                                                        },
                                                        className: "flex-1 flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 h-14 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 2099,
                                                                columnNumber: 19
                                                            }, this),
                                                            " Copy Error Code"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2092,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setIsErrorDialogOpen(false),
                                                        className: "px-8 bg-slate-100 dark:bg-slate-800 text-slate-500 h-14 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all",
                                                        children: "Close"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2101,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2091,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                        lineNumber: 2085,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                lineNumber: 2075,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 2074,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                    lineNumber: 1117,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                lineNumber: 1116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=src_components_billing_fd52b089._.js.map