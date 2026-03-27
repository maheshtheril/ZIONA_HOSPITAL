module.exports = [
"[project]/src/components/appointments/patient-doctor-selectors.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PatientDoctorSelectors",
    ()=>PatientDoctorSelectors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$searchable$2d$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/searchable-select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-ssr] (ecmascript) <export default as Stethoscope>");
'use client';
;
;
;
function PatientDoctorSelectors({ patients, doctors, selectedPatientId, selectedClinicianId, onClinicianSelect, onPatientSelect, onNewPatientClick }) {
    const patientOptions = patients.map((p)=>({
            id: p.id,
            label: `${p.first_name} ${p.last_name || ''}`.trim(),
            subLabel: `${p.patient_number || 'No Number'} • ${p.gender || 'N/A'}`
        }));
    const doctorOptions = doctors.map((d)=>({
            id: d.id,
            label: `Dr. ${d.first_name} ${d.last_name}`.trim() + (doctors.filter((doc)=>doc.first_name === d.first_name && doc.last_name === d.last_name).length > 1 ? ` (${d.id.slice(-4)})` : ''),
            subLabel: d.hms_specializations?.[0]?.name || d.role || 'General Practice'
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm p-4 ring-2 ring-indigo-500/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-slate-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-8 w-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"], {
                                    className: "h-4 w-4 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                                    lineNumber: 58,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base font-black text-gray-900 dark:text-white uppercase tracking-tighter",
                                        children: "Primary Provider"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                                        lineNumber: 61,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none",
                                        children: "Select Attending Doctor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                                        lineNumber: 62,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                                lineNumber: 60,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-black text-slate-400 uppercase tracking-widest mb-1.5 ml-1",
                                children: [
                                    "Doctor / Clinician ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-indigo-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                                        lineNumber: 68,
                                        columnNumber: 44
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$searchable$2d$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchableSelect"], {
                                options: doctorOptions,
                                onSearch: async (q)=>{
                                    const lower = q.toLowerCase();
                                    return doctorOptions.filter((d)=>d.label.toLowerCase().includes(lower) || d.subLabel.toLowerCase().includes(lower));
                                },
                                value: selectedClinicianId,
                                onChange: (e)=>onClinicianSelect?.(e || ''),
                                placeholder: "Search doctor...",
                                inputId: "clinician_select",
                                autoFocus: false
                            }, void 0, false, {
                                fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                                lineNumber: 71,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "hidden",
                                name: "clinician_id",
                                value: selectedClinicianId || ''
                            }, void 0, false, {
                                fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                                lineNumber: 83,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                        lineNumber: 66,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-slate-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-8 w-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                    className: "h-4 w-4 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                                    lineNumber: 91,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                                lineNumber: 90,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base font-black text-gray-900 dark:text-white uppercase tracking-tighter",
                                        children: "Patient Record"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                                        lineNumber: 94,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none",
                                        children: "Find or Register Patient"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                                        lineNumber: 95,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                                lineNumber: 93,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                        lineNumber: 89,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-black text-slate-400 uppercase tracking-widest ml-1",
                                            children: [
                                                "Patient ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-blue-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                                            lineNumber: 102,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: onNewPatientClick,
                                            className: "flex items-center gap-1 px-2.5 py-1 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 33
                                                }, this),
                                                "Add New"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                                            lineNumber: 105,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                                    lineNumber: 101,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$searchable$2d$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchableSelect"], {
                                    options: patientOptions,
                                    onSearch: async (q)=>{
                                        const lower = q.toLowerCase();
                                        return patientOptions.filter((p)=>p.label.toLowerCase().includes(lower) || p.subLabel.toLowerCase().includes(lower));
                                    },
                                    value: selectedPatientId,
                                    onChange: (id)=>onPatientSelect?.(id || ''),
                                    placeholder: "Search by Name, Mob or ID (Alt+S)",
                                    inputId: "patient_select",
                                    autoFocus: true,
                                    onCreate: async (q)=>{
                                        onNewPatientClick?.();
                                        return null;
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                                    lineNumber: 115,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "hidden",
                                    name: "patient_id",
                                    value: selectedPatientId
                                }, void 0, false, {
                                    fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                                    lineNumber: 131,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                            lineNumber: 100,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                        lineNumber: 99,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
                lineNumber: 88,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/appointments/patient-doctor-selectors.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/appointments/appointment-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppointmentForm",
    ()=>AppointmentForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$49ccea__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:49ccea [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$18e332__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:18e332 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$appointments$2f$patient$2d$doctor$2d$selectors$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/appointments/patient-doctor-selectors.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hms$2f$create$2d$patient$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/hms/create-patient-form.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-ssr] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-ssr] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-ssr] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-check.js [app-ssr] (ecmascript) <export default as BadgeCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$7ed7b4__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:7ed7b4 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$e3bc50__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:e3bc50 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hms$2f$billing$2f$patient$2d$payment$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/hms/billing/patient-payment-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$446eea__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:446eea [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-ssr] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-ssr] (ecmascript) <export default as Receipt>");
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
function AppointmentForm({ patients, doctors, appointments = [], billableItems = [], taxConfig = {
    defaultTax: null,
    taxRates: []
}, uoms = [], currency = '₹', initialData = {}, editingAppointment, onClose, onMinimize, hospitalInfo = null }) {
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    console.log("DEBUG: Appointment Form Component Loaded - VERSION-FIX-APPLIED");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { patient_id: initialPatientId, date: initialDate, time: initialTime } = initialData;
    // Derived values for initial state
    const defaultPatientId = editingAppointment?.patient?.id || editingAppointment?.patient_id || initialPatientId || '';
    const defaultDate = editingAppointment ? new Date(editingAppointment.start_time).toISOString().split('T')[0] : initialDate || new Date().toISOString().split('T')[0];
    const defaultTime = editingAppointment ? new Date(editingAppointment.start_time).toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit'
    }) : initialTime || '';
    const defaultClinicianId = editingAppointment?.clinician?.id || editingAppointment?.clinician_id || '';
    // State
    const [localPatients, setLocalPatients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(patients);
    const [selectedPatientId, setSelectedPatientId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultPatientId);
    const [selectedPatientData, setSelectedPatientData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showNewPatientModal, setShowNewPatientModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedClinicianId, setSelectedClinicianId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultClinicianId);
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultDate);
    const [suggestedTime, setSuggestedTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultTime);
    const [isMaximized, setIsMaximized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hmsSettings, setHmsSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(editingAppointment?.notes || '');
    const [isPending, setIsPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoadingPatient, setIsLoadingPatient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saveSuccess, setSaveSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null) // [NEW] Track save results
    ;
    const [paidInvoiceId, setPaidInvoiceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null) // [NEW] Capture reg fee ID
    ;
    // RCM States
    const [isRCMProcessing, setIsRCMProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingFormData, setPendingFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCollectingReg, setIsCollectingReg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [regInvoice, setRegInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCheckingRegInvoice, setIsCheckingRegInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGeneratingReg, setIsGeneratingReg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [companyInfo, setCompanyInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // [HOSPITAL INFO] from global settings
    // [FETCH COMPANY INFO] for OP Slip letterhead
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$e3bc50__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCurrentCompany"])().then((res)=>{
            if (res) setCompanyInfo(res);
        }).catch(()=>{});
    }, []);
    // Sync state when editingAppointment changes or prop updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (editingAppointment) {
            setSelectedPatientId(editingAppointment.patient?.id || editingAppointment.patient_id || '');
            setSelectedClinicianId(editingAppointment.clinician?.id || editingAppointment.clinician_id || '');
            setSelectedDate(new Date(editingAppointment.start_time).toISOString().split('T')[0]);
            setSuggestedTime(new Date(editingAppointment.start_time).toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit'
            }));
        }
    }, [
        editingAppointment
    ]);
    // Load Initial Patient Data for registration status checks
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedPatientId) {
            // Avoid redundant fetch if we already have the data (e.g. from handlePatientCreated)
            if (selectedPatientData?.id === selectedPatientId) return;
            // Clear stale data, lock button while loading
            setSelectedPatientData(null);
            setIsLoadingPatient(true);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$446eea__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getPatientById"])(selectedPatientId).then((res)=>{
                if (res.success) setSelectedPatientData(res.data);
                else {
                    toast({
                        title: "Data Error",
                        description: "Could not sync patient record.",
                        variant: "destructive"
                    });
                    setSelectedPatientData({
                        id: selectedPatientId,
                        metadata: {},
                        error: true
                    });
                }
            }).catch((err)=>{
                setSelectedPatientData({
                    id: selectedPatientId,
                    metadata: {},
                    error: true
                });
            }).finally(()=>{
                setIsLoadingPatient(false);
            });
        } else {
            setSelectedPatientData(null);
            setIsLoadingPatient(false);
        }
    }, [
        selectedPatientId
    ]);
    // [NEW] Check for Registration Invoice when fee is due
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkRegFee = async ()=>{
            const id = selectedPatientId?.toString().trim();
            if (!id || id === 'undefined' || id === 'null') {
                setRegInvoice(null);
                return;
            }
            const status = checkRegistrationStatus();
            if (status.shouldCharge) {
                setIsCheckingRegInvoice(true);
                try {
                    const { getOpenRegistrationInvoice } = await __turbopack_context__.A("[project]/src/app/actions/billing.ts [app-ssr] (ecmascript, async loader)");
                    const res = await getOpenRegistrationInvoice(id);
                    if (res.success) {
                        setRegInvoice(res.data);
                    } else {
                        setRegInvoice(null);
                    }
                } catch (err) {
                    console.error("Failed to check reg invoice", err);
                } finally{
                    setIsCheckingRegInvoice(false);
                }
            } else {
                setRegInvoice(null);
            }
        };
        checkRegFee();
    }, [
        selectedPatientId,
        selectedPatientData,
        hmsSettings
    ]);
    // [DEFAULT DOCTOR] Load HMS settings once on mount and auto-select default doctor for new bookings
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (editingAppointment) return; // Don't override when editing an existing appointment
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$7ed7b4__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getHMSSettings"])().then((res)=>{
            if (res.success && res.settings?.defaultDoctorId) {
                // Only pre-select if receptionist hasn't already picked a doctor
                setSelectedClinicianId((prev)=>prev || res.settings.defaultDoctorId);
            }
        }).catch(()=>{}); // Silent fail — never break the form
    }, []); // Run only once on mount
    const [appointmentsList, setAppointmentsList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(appointments);
    // [FIX] Fetch Appointments Dynamically when Doctor/Date changes
    // This is crucial because "appointments" prop is static and empty in new/page.tsx
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedClinicianId && selectedDate) {
            __turbopack_context__.A("[project]/src/app/actions/appointment.ts [app-ssr] (ecmascript, async loader)").then((mod)=>{
                mod.getAppointmentsByClinician(selectedClinicianId, selectedDate).then((res)=>{
                    if (res && res.success && Array.isArray(res.data)) {
                        console.log("DEBUG: Dynamic Appointments Fetched", res.data.length);
                        setAppointmentsList(res.data);
                    }
                });
            });
        }
    }, [
        selectedClinicianId,
        selectedDate
    ]);
    // CORE: Dynamic Time Selection Engine (Reactive Triage)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Only run for new appointments. If editing, we respect current time unless manually changed.
        if (editingAppointment || !selectedClinicianId || !selectedDate || !doctors.length) return;
        const doctor = doctors.find((d)=>d.id === selectedClinicianId);
        if (!doctor) return;
        const defaultStart = doctor.consultation_start_time || "09:00";
        const defaultEnd = doctor.consultation_end_time || "17:00";
        // Filter for this doctor on selected day
        // Filter for this doctor on selected day using DYNAMIC LIST
        const doctorApts = appointmentsList.filter((a)=>{
            const aptDate = new Date(a.starts_at).toISOString().split('T')[0];
            return a.clinician_id === selectedClinicianId && aptDate === selectedDate && a.status !== 'cancelled';
        });
        const now = new Date();
        const localDateStr = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
        const isToday = selectedDate === localDateStr;
        // Match Date Safely (Local Time to avoid UTC shift)
        const [year, month, dayOfMonth] = selectedDate.split('-').map(Number);
        const dayStart = new Date(year, month - 1, dayOfMonth);
        const [startH, startM] = defaultStart.split(':').map(Number);
        dayStart.setHours(startH, startM, 0, 0);
        let nextSlotTime;
        // DYNAMIC SLOT DURATION
        const slotDuration = Number(doctor.consultation_slot_duration) || 15;
        const slotMs = slotDuration * 60 * 1000;
        if (doctorApts.length === 0) {
            // BASE: Start at doctor's official start time
            let baseTime = dayStart;
            // IF TODAY: Don't suggest past times. Jump to "Now" rounded up to next slot
            if (isToday) {
                const nowMs = new Date().getTime();
                const nowRound = new Date(Math.ceil(nowMs / slotMs) * slotMs);
                if (nowRound > dayStart) {
                    baseTime = nowRound;
                }
            }
            nextSlotTime = baseTime;
        } else {
            // Find the latest ending appointment
            const lastEndApt = doctorApts.reduce((latest, current)=>{
                const latestEnd = new Date(latest.ends_at).getTime();
                const currentEnd = new Date(current.ends_at).getTime();
                return currentEnd > latestEnd ? current : latest;
            }, doctorApts[0]);
            // Start AFTER the last one finishes
            nextSlotTime = new Date(lastEndApt.ends_at);
        }
        // Final Safety: If for some reason nextSlotTime < now (on today), bump it
        if (isToday) {
            const nowMs = new Date().getTime();
            if (nextSlotTime.getTime() < nowMs) {
                nextSlotTime = new Date(Math.ceil(nowMs / slotMs) * slotMs);
            }
        }
        const [endH, endM] = defaultEnd.split(':').map(Number);
        const dayEnd = new Date(year, month - 1, dayOfMonth);
        dayEnd.setHours(endH, endM, 0, 0);
        // Debug Log to reveal mismatch
        console.log(`Slotting Logic [${selectedDate}]:`, {
            slotDuration,
            nextSlot: nextSlotTime.toLocaleTimeString(),
            dayEnd: dayEnd.toLocaleTimeString(),
            isFullyBooked: nextSlotTime >= dayEnd
        });
        if (nextSlotTime >= dayEnd && isToday) {
            setSuggestedTime('Fully Booked');
        } else {
            // Round up to nearest slot duration (e.g. 10m, 15m, 20m)
            const roundedMs = Math.ceil(nextSlotTime.getTime() / slotMs) * slotMs;
            const finalTime = new Date(roundedMs);
            // If rounding pushed us past dayEnd, mark booked
            if (finalTime >= dayEnd) {
                setSuggestedTime('Fully Booked');
            } else {
                const hours = finalTime.getHours().toString().padStart(2, '0');
                const minutes = finalTime.getMinutes().toString().padStart(2, '0');
                setSuggestedTime(`${hours}:${minutes}`);
            }
        }
    }, [
        selectedClinicianId,
        selectedDate,
        appointmentsList,
        doctors,
        editingAppointment
    ]);
    // HMS Settings (Reg Fee, etc.)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$7ed7b4__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getHMSSettings"])().then((res)=>{
            if (res.success) setHmsSettings(res.settings);
        });
    }, []);
    const checkRegistrationStatus = ()=>{
        // [FIX] Ensure we are checking the CURRENTLY selected patient data
        const id = selectedPatientId?.toString().trim();
        if (!id || id === 'undefined' || id === 'null') return {
            shouldCharge: false,
            status: 'none'
        };
        if (!selectedPatientData || selectedPatientData.id !== selectedPatientId) {
            console.log("DEBUG: checkRegistrationStatus - LOADING/MISMATCH", {
                hasData: !!selectedPatientData,
                targetId: selectedPatientId,
                currentDataId: selectedPatientData?.id
            });
            return {
                shouldCharge: false,
                status: 'loading'
            };
        }
        const metadata = selectedPatientData.metadata || {};
        const createdAt = new Date(selectedPatientData.created_at);
        const validityDays = hmsSettings?.registrationValidity || 7;
        // [AUDIT] Explicit check for 'awaiting_payment' status set during creation
        if (metadata.status === 'awaiting_payment') {
            return {
                shouldCharge: true,
                status: 'awaiting_payment',
                expiryDate: null
            };
        }
        // Check for the explicit flag first
        if (metadata.registration_fees_paid === false) {
            return {
                shouldCharge: true,
                status: 'not_paid',
                expiryDate: null
            };
        }
        const expiryDateStr = metadata.registration_expiry;
        if (!expiryDateStr) {
            // [LEGACY-FIX] If there's no expiry date and no 'registration_fees_paid' flag:
            // 1. If the record is very new (created today), it's a NEW PATIENT -> CHARGE.
            const startOfToday = new Date();
            startOfToday.setHours(0, 0, 0, 0);
            if (createdAt >= startOfToday) {
                return {
                    shouldCharge: true,
                    status: 'new_patient',
                    expiryDate: null
                };
            }
            // 2. Otherwise, check validity period (default 7 days)
            const cutoffDate = new Date();
            cutoffDate.setDate(cutoffDate.getDate() - validityDays);
            if (createdAt > cutoffDate) {
                return {
                    shouldCharge: false,
                    status: 'valid',
                    expiryDate: null
                };
            }
            return {
                shouldCharge: true,
                status: 'expired',
                expiryDate: null,
                reason: `Legacy record (${validityDays} days+)`
            };
        }
        const expiryDate = new Date(expiryDateStr);
        // Handle Invalid Date strings
        if (isNaN(expiryDate.getTime())) return {
            shouldCharge: true,
            status: 'invalid_date',
            expiryDate: null
        };
        const isExpired = expiryDate < new Date();
        const result = {
            shouldCharge: isExpired,
            status: isExpired ? 'expired' : 'valid',
            expiryDate: expiryDateStr,
            debug: {
                metadataStatus: metadata.status,
                regFeesPaid: metadata.registration_fees_paid,
                validityDays,
                createdAt: createdAt.toISOString()
            }
        };
        console.log("DEBUG: checkRegistrationStatus Result", JSON.stringify(result, null, 2));
        return result;
    };
    const handlePatientCreated = (newPatient)=>{
        console.log("Terminal: Patient created, linking to session...", newPatient.id);
        // 1. Update list and selection
        setLocalPatients((prev)=>{
            const exists = prev.some((p)=>p.id === newPatient.id);
            if (exists) return prev;
            return [
                newPatient,
                ...prev
            ];
        });
        setSelectedPatientId(newPatient.id);
        setSelectedPatientData(newPatient); // [FIX] Set data immediately to avoid stale checks
        // 2. SUCCESS-EXIT: Modal Closure
        setShowNewPatientModal(false);
        // 3. User Feedback
        toast({
            title: "Patient Linked",
            description: `${newPatient.first_name} is now active in the terminal.`,
            className: "bg-indigo-600 text-white shadow-2xl"
        });
        // 4. Focus Management: Shift focus to the clinician selector for faster flow
        setTimeout(()=>{
            const clinicianSelect = document.querySelector('[name="clinician_id"]');
            clinicianSelect?.focus();
        }, 300);
    };
    const executeSave = async (data)=>{
        setIsPending(true);
        try {
            const res = editingAppointment ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$18e332__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateAppointmentDetails"])(data) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$49ccea__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createAppointment"])(data);
            if (res?.error) {
                toast({
                    title: "Action Failed",
                    description: res.error,
                    variant: "destructive"
                });
            } else {
                const aptId = editingAppointment?.id || res.data?.id;
                // [WORLD CLASS] Show Success Stage
                setSaveSuccess(editingAppointment ? {
                    ...editingAppointment,
                    id: aptId,
                    patient: res.data?.patient
                } : res.data);
                toast({
                    title: "Medical Record Finalized",
                    description: editingAppointment ? "Clinical encounter updated." : "Session finalized.",
                    className: "bg-emerald-600 text-white"
                });
            }
        } catch (error) {
            toast({
                title: "Terminal Crash",
                description: error.message,
                variant: "destructive"
            });
        } finally{
            setIsPending(false);
        }
    };
    async function handleSubmit(formData) {
        if (!selectedPatientId) {
            toast({
                title: "Patient Missing",
                description: "Select a patient to finalize the session.",
                variant: "destructive"
            });
            return;
        }
        // [REG-FEE GUARD] Block save if registration fee is outstanding
        const regStatus = checkRegistrationStatus();
        if (regStatus.shouldCharge) {
            const msg = regStatus.status === 'awaiting_payment' ? "Registration fee is pending. Please collect the registration fee before booking this appointment." : regStatus.status === 'expired' ? "Patient's registration has expired. Please renew the registration fee before booking." : "Registration fee is unpaid. Please collect it before saving this appointment.";
            toast({
                title: "⛔ Registration Fee Required",
                description: msg,
                variant: "destructive",
                duration: 6000
            });
            return;
        }
        setIsPending(true);
        try {
            await executeSave(formData);
        } catch (error) {
            toast({
                title: "Finalization Error",
                description: error.message,
                variant: "destructive"
            });
            setIsPending(false);
        }
    }
    const [selectedPriority, setSelectedPriority] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(editingAppointment?.priority || 'normal');
    const refreshPatientData = async ()=>{
        if (!selectedPatientId) return;
        // setIsCheckingRegInvoice(true); // Assuming this state exists elsewhere
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$446eea__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getPatientById"])(selectedPatientId);
        if (res.success && res.data) {
            setSelectedPatientData(res.data);
        // Re-check reg status via side effect or direct call
        }
    // setIsCheckingRegInvoice(false); // Assuming this state exists elsewhere
    };
    const selectedPatient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return localPatients.find((p)=>p.id === selectedPatientId);
    }, [
        selectedPatientId,
        localPatients
    ]);
    const activeRegStatus = checkRegistrationStatus();
    // [PRINT HELPER] Uses hidden iframe to bypass popup blockers (window.open is blocked by Chrome on HTTPS)
    const printHtml = (html)=>{
        const iframe = document.createElement('iframe');
        iframe.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;border:0;';
        document.body.appendChild(iframe);
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!doc) {
            document.body.removeChild(iframe);
            return;
        }
        doc.open();
        doc.write(html);
        doc.close();
        // Wait for fonts/images then print
        setTimeout(()=>{
            try {
                iframe.contentWindow?.focus();
                iframe.contentWindow?.print();
            } catch (e) {}
            setTimeout(()=>{
                try {
                    document.body.removeChild(iframe);
                } catch (e) {}
            }, 1000);
        }, 500);
    };
    // [NEW] SUCCESS STAGE VIEW (REFACTORED: Moved inside main return to survive billing terminal)
    const renderSuccessView = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[200] bg-slate-950 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-xl bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden border border-white/10 p-10 text-center animate-in zoom-in-95 duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-24 w-24 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-500/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                            className: "h-12 w-12 text-emerald-600 dark:text-emerald-400 animate-bounce"
                        }, void 0, false, {
                            fileName: "[project]/src/components/appointments/appointment-form.tsx",
                            lineNumber: 506,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                        lineNumber: 505,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-2",
                        children: [
                            "Appointment ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-emerald-600",
                                children: "Finalized"
                            }, void 0, false, {
                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                lineNumber: 509,
                                columnNumber: 135
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                        lineNumber: 509,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500 font-bold uppercase tracking-widest text-xs mb-8",
                        children: "Patient flow initiated for OP Consultation"
                    }, void 0, false, {
                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                        lineNumber: 510,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-10 text-slate-400 font-medium",
                        children: "The medical record has been securely saved and synchronized with the clinical terminal."
                    }, void 0, false, {
                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                        lineNumber: 512,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            const appt = {
                                                ...saveSuccess,
                                                patient: saveSuccess.patient || selectedPatientData || selectedPatient,
                                                clinician: saveSuccess.clinician || doctors.find((d)=>d.id === selectedClinicianId)
                                            };
                                            const patientName = `${appt.patient?.first_name || ''} ${appt.patient?.last_name || ''}`;
                                            const doctorName = `Dr. ${appt.clinician?.first_name || ''} ${appt.clinician?.last_name || ''}`;
                                            const date = new Date(appt.start_time || appt.starts_at).toLocaleDateString('en-IN', {
                                                day: '2-digit',
                                                month: 'short',
                                                year: 'numeric'
                                            });
                                            const time = new Date(appt.start_time || appt.starts_at).toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            });
                                            // 3-digit numeric token (001-999) derived from appointment UUID
                                            const tokenRaw = parseInt(appt.id.replace(/-/g, '').slice(0, 8), 16) % 999 + 1;
                                            const tokenNumber = String(tokenRaw).padStart(3, '0');
                                            const logo = companyInfo?.logo_url || '';
                                            const hospName = companyInfo?.name || '';
                                            const hospAddress = companyInfo?.metadata?.address || '';
                                            const hospPhone = companyInfo?.metadata?.phone || '';
                                            printHtml(`<!DOCTYPE html><html><head><title>OP Slip - ${patientName}</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Arial, sans-serif; background: white; color: #1a202c; padding: 2cm; }
  @media print { @page { margin: 0; size: A4; } body { padding: 2cm; } }
  .header { display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 1px solid #e2e8f0; padding-bottom: 15px; margin-bottom: 25px; }
  .header-left { display: flex; align-items: center; gap: 15px; }
  .header-logo { height: 60px; width: 60px; object-fit: contain; }
  .header-info h1 { font-size: 18px; font-weight: 700; text-transform: uppercase; color: #1a202c; margin: 0 0 2px 0; }
  .header-info p { font-size: 10px; color: #64748b; font-weight: 500; margin: 0; }
  .header-right { text-align: right; }
  .header-right p { margin: 0; font-size: 10px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; }

  .slip { background: #f8fafc; border-radius: 8px; padding: 15px 20px; border: 1px solid #f1f5f9; }
  .slip-row { display: flex; justify-content: space-between; align-items: center; }
  .token-box { text-align: right; }
  .lbl { font-size: 9px; font-weight: 700; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 2px; }
  .patient-name { font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 2px; }
  .patient-meta { font-size: 11px; font-weight: 500; color: #64748b; margin-top: 2px; }
  .token-num { font-size: 24px; font-weight: 800; color: #1e293b; line-height: 1; }
  .divider { border: none; border-top: 1px solid #f1f5f9; margin: 12px 0; }
  .info-row { display: flex; gap: 30px; }
  .info-block { flex: 1; }
  .val-md { font-size: 13px; font-weight: 700; color: #334155; margin-top: 2px; }
</style></head><body>
${hmsSettings?.opSlipPreprintedLetterhead ? `<div style="height: ${hmsSettings?.opSlipHeaderHeight || '4.5'}cm;"></div>` : `<div class="header">
  <div class="header-left">
      ${logo ? `<img src="${logo}" class="header-logo" />` : ''}
      <div class="header-info">
          ${hospName ? `<h1>${hospName}</h1>` : ''}
          <p>${hospAddress || ''} ${hospPhone ? ' | ' + hospPhone : ''}</p>
      </div>
  </div>
  <div class="header-right">
      <p>OP VISIT SLIP</p>
      <p style="margin-top:2px;">${date}</p>
  </div>
</div>`}
<div class="slip">
  <div class="slip-row">
    <div>
      <span class="lbl">Patient Details</span>
      <div class="patient-name">${patientName}</div>
      <div class="patient-meta">
        ID: ${appt.patient?.patient_number || 'N/A'} &nbsp;|&nbsp; 
        ${appt.patient?.gender || ''} &nbsp;|&nbsp; 
        Age: ${appt.patient?.age || (appt.patient?.dob ? new Date().getFullYear() - new Date(appt.patient.dob).getFullYear() : 'N/A')}
      </div>
    </div>
    <div class="token-box">
      <span class="lbl">TOKEN NO</span>
      <div class="token-num">#${tokenNumber}</div>
    </div>
  </div>
  <hr class="divider" />
  <div class="info-row">
    <div class="info-block">
      <span class="lbl">Consulting Clinician</span>
      <div class="val-md">${doctorName}</div>
    </div>
    <div class="info-block" style="text-align:right;">
      <span class="lbl">Encounter Time</span>
      <div class="val-md">${time}</div>
    </div>
  </div>
</div></div>
</body></html>`);
                                        },
                                        className: "w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-3xl shadow-xl shadow-emerald-600/20 font-black uppercase text-[10px] tracking-[0.2em] transition-all active:scale-95 flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                lineNumber: 611,
                                                columnNumber: 29
                                            }, this),
                                            " OP Slip (A4)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                        lineNumber: 519,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            const appt = {
                                                ...saveSuccess,
                                                patient: saveSuccess.patient || selectedPatientData || selectedPatient,
                                                clinician: saveSuccess.clinician || doctors.find((d)=>d.id === selectedClinicianId)
                                            };
                                            const patientName = `${appt.patient?.first_name || ''} ${appt.patient?.last_name || ''}`;
                                            const doctorName = `Dr. ${appt.clinician?.first_name || ''} ${appt.clinician?.last_name || ''}`;
                                            const date = new Date(appt.start_time || appt.starts_at).toLocaleDateString();
                                            const tokenNumber = appt.id.split('-')[0].toUpperCase();
                                            printHtml(`<!DOCTYPE html><html><head><title>Label - ${patientName}</title>
<style>
  @page { margin: 0; size: 50mm 25mm; }
  body { font-family: Arial,sans-serif; width: 46mm; margin: 0 auto; padding: 2mm 0; font-size: 8pt; }
  .name { font-weight: 900; font-size: 10pt; text-transform: uppercase; }
  .id { font-weight: bold; border-bottom: 1px solid black; padding-bottom: 1px; margin-bottom: 2px; }
  .meta { font-size: 7pt; display: flex; justify-content: space-between; }
</style></head><body>
<div class="name">${patientName}</div>
<div class="id">ID: ${appt.patient?.patient_number || 'N/A'}</div>
<div class="meta"><span>${appt.patient?.gender || ''}</span><span>${date}</span></div>
<div class="meta" style="margin-top:2px;"><span>T:#${tokenNumber}</span><span style="font-weight:bold;">${doctorName.slice(0, 15)}</span></div>
</body></html>`);
                                        },
                                        className: "w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-3xl shadow-xl shadow-indigo-600/20 font-black uppercase text-[10px] tracking-[0.2em] transition-all active:scale-95 flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                lineNumber: 642,
                                                columnNumber: 29
                                            }, this),
                                            " Patient Label"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                        lineNumber: 614,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                lineNumber: 518,
                                columnNumber: 21
                            }, this),
                            paidInvoiceId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>window.open(`/hms/billing/${paidInvoiceId}/print`, '_blank'),
                                className: "w-full py-5 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 rounded-3xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-indigo-100 transition-all flex items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                        lineNumber: 653,
                                        columnNumber: 29
                                    }, this),
                                    " Print Registration Receipt"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                lineNumber: 648,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setSaveSuccess(null);
                                    setSelectedPatientId('');
                                    setSelectedPatientData(null);
                                    setNotes('');
                                },
                                className: "w-full py-5 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-3xl font-black uppercase text-[10px] tracking-[0.2em] hover:opacity-90 transition-all flex items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                        lineNumber: 666,
                                        columnNumber: 25
                                    }, this),
                                    " Register New Patient"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                lineNumber: 657,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push('/reception'),
                                className: "w-full py-4 text-slate-400 font-bold uppercase text-[9px] tracking-[0.3em] hover:text-slate-600 transition-all",
                                children: "Return to Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                lineNumber: 669,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                        lineNumber: 517,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                lineNumber: 504,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/appointments/appointment-form.tsx",
            lineNumber: 503,
            columnNumber: 9
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative bg-slate-900 border border-white/20 shadow-2xl overflow-hidden transition-all duration-500 ease-in-out ${isMaximized ? 'fixed inset-0 z-[100]' : 'w-full h-full relative'}`,
        children: [
            saveSuccess && renderSuccessView(),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-white/10 shrink-0 shadow-2xl relative z-30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "p-2 hover:bg-white/10 rounded-xl transition-all group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "h-6 w-6 text-white/70 group-hover:text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                        lineNumber: 689,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                    lineNumber: 688,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                lineNumber: 687,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-black tracking-tight italic uppercase flex items-center gap-2 text-white",
                                        children: [
                                            "OP Clinical Terminal ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                className: "h-4 w-4 text-indigo-400 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                lineNumber: 694,
                                                columnNumber: 50
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                        lineNumber: 693,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mt-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold text-indigo-400 tracking-[0.3em] uppercase bg-indigo-500/10 px-2 py-0.5 rounded shadow-inner tracking-widest",
                                                children: "Active Encounter"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                lineNumber: 697,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-1 w-1 rounded-full bg-white/20"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                lineNumber: 698,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-medium text-white/50 tracking-widest uppercase",
                                                children: "ZIONA-HMS Deployment: V10.2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                lineNumber: 699,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                        lineNumber: 696,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                lineNumber: 692,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                        lineNumber: 686,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center bg-white/5 border border-white/10 p-1 rounded-xl mr-2 gap-1 px-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onMinimize || onClose,
                                        className: "p-2 hover:bg-white/10 rounded-lg text-white/50 transition-all",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                            lineNumber: 706,
                                            columnNumber: 153
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                        lineNumber: 706,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 w-[1px] bg-white/10"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                        lineNumber: 707,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setIsMaximized(!isMaximized),
                                        className: "p-2 hover:bg-white/10 rounded-lg text-white/70 transition-all flex items-center gap-2 text-[10px] font-black uppercase tracking-widest",
                                        children: [
                                            isMaximized ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                                className: "h-3.5 w-3.5 text-indigo-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                lineNumber: 709,
                                                columnNumber: 44
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                lineNumber: 709,
                                                columnNumber: 100
                                            }, this),
                                            isMaximized ? 'Dock Terminal' : 'Fullscreen'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                        lineNumber: 708,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                lineNumber: 705,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    const form = document.getElementById('appointment-terminal-form');
                                    if (form) form.requestSubmit();
                                },
                                disabled: isPending || isLoadingPatient || activeRegStatus.shouldCharge || activeRegStatus.status === 'loading',
                                title: isLoadingPatient ? 'Loading patient...' : activeRegStatus.shouldCharge ? 'Collect registration fee first' : '',
                                className: "px-8 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white rounded-2xl shadow-xl shadow-indigo-500/20 font-black text-xs uppercase tracking-[0.2em] transition-all active:scale-95 flex items-center gap-3 border border-indigo-400/20 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
                                children: [
                                    isPending || isLoadingPatient ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-5 w-5 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                        lineNumber: 724,
                                        columnNumber: 60
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                        lineNumber: 724,
                                        columnNumber: 107
                                    }, this),
                                    editingAppointment ? 'Update Encounter' : 'Save'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                lineNumber: 714,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                        lineNumber: 704,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                lineNumber: 685,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                id: "appointment-terminal-form",
                onSubmit: (e)=>{
                    e.preventDefault();
                    handleSubmit(new FormData(e.currentTarget));
                },
                className: "flex flex-col h-[calc(100%-88px)] overflow-hidden bg-white dark:bg-slate-950",
                children: [
                    editingAppointment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "hidden",
                        name: "id",
                        value: editingAppointment.id
                    }, void 0, false, {
                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                        lineNumber: 735,
                        columnNumber: 40
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "hidden",
                        name: "source",
                        value: "dashboard"
                    }, void 0, false, {
                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                        lineNumber: 736,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-0 flex-1 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-8 p-6 space-y-6 overflow-y-auto border-r border-gray-100 dark:border-white/5 custom-scrollbar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-500/5 dark:to-slate-900 rounded-2xl p-4 flex items-center justify-between border border-indigo-100 dark:border-indigo-500/10 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-12 w-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-xs shadow-lg shadow-indigo-500/30 font-mono",
                                                        children: "OP"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                        lineNumber: 743,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-[120px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-0.5",
                                                                children: "Patient Number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                lineNumber: 745,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2",
                                                                children: [
                                                                    selectedPatient?.patient_number || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-300 dark:text-slate-700 italic animate-pulse",
                                                                        children: "PENDING"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                        lineNumber: 747,
                                                                        columnNumber: 77
                                                                    }, this),
                                                                    selectedPatient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                                                                        className: "h-5 w-5 text-emerald-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                        lineNumber: 748,
                                                                        columnNumber: 61
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                lineNumber: 746,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                        lineNumber: 744,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                lineNumber: 742,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-10 w-[1px] bg-slate-200 dark:bg-white/10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                        lineNumber: 754,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-right",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5 flex items-center justify-end gap-1",
                                                                children: "Registration Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                lineNumber: 756,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `text-sm font-black tracking-tight ${activeRegStatus.status === 'loading' ? 'text-slate-400 animate-pulse' : activeRegStatus.status === 'none' ? 'text-slate-300' : activeRegStatus.shouldCharge ? 'text-red-500' : 'text-emerald-500'}`,
                                                                children: activeRegStatus.status === 'loading' ? 'AUDITING...' : activeRegStatus.status === 'none' ? 'UNLINKED' : activeRegStatus.shouldCharge ? 'EXPIRED / DUE' : 'LIFETIME VALID'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                lineNumber: 757,
                                                                columnNumber: 37
                                                            }, this),
                                                            activeRegStatus.status !== 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[9px] font-bold text-slate-400 leading-none mt-1 uppercase tracking-tighter",
                                                                children: activeRegStatus.expiryDate ? `Ends: ${new Date(activeRegStatus.expiryDate).toLocaleDateString()}` : activeRegStatus.status === 'expired' ? 'Action Required: Renew Fee' : 'Valid Protocol Active'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                lineNumber: 761,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                        lineNumber: 755,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-right",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5 uppercase",
                                                                children: "Audit Timestamp"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                lineNumber: 768,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `text-xs font-bold ${activeRegStatus.status === 'loading' ? 'text-slate-400 animate-pulse' : 'text-slate-500 font-mono italic'}`,
                                                                children: activeRegStatus.status === 'loading' ? 'SYNCING...' : new Date().toLocaleTimeString([], {
                                                                    hour: '2-digit',
                                                                    minute: '2-digit'
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                lineNumber: 769,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                        lineNumber: 767,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                lineNumber: 753,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                        lineNumber: 741,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$appointments$2f$patient$2d$doctor$2d$selectors$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PatientDoctorSelectors"], {
                                        patients: localPatients,
                                        doctors: doctors,
                                        selectedPatientId: selectedPatientId,
                                        selectedClinicianId: selectedClinicianId,
                                        onClinicianSelect: setSelectedClinicianId,
                                        onPatientSelect: setSelectedPatientId,
                                        onNewPatientClick: ()=>setShowNewPatientModal(true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                        lineNumber: 776,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hms$2f$billing$2f$patient$2d$payment$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PatientPaymentDialog"], {
                                        patientId: selectedPatientId,
                                        patientName: `${selectedPatientData?.first_name || ''} ${selectedPatientData?.last_name || ''}`.trim() || 'Selected Patient',
                                        fixedAmount: 150,
                                        autoOpen: isCollectingReg,
                                        onClose: ()=>setIsCollectingReg(false),
                                        isRegistrationFee: true,
                                        trigger: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                            fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                            lineNumber: 794,
                                            columnNumber: 38
                                        }, void 0),
                                        onPaymentSuccess: (data)=>{
                                            setPaidInvoiceId(data?.id || null);
                                            toast({
                                                title: "Fee Paid",
                                                description: "Registration cleared."
                                            });
                                            refreshPatientData();
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                        lineNumber: 787,
                                        columnNumber: 25
                                    }, this),
                                    activeRegStatus.shouldCharge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900/50 rounded-2xl flex items-center justify-between animate-in slide-in-from-top-2 shadow-inner",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                                        className: "h-5 w-5 text-amber-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                        lineNumber: 806,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] font-black text-amber-600 uppercase tracking-widest",
                                                                children: "Fee Due"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                lineNumber: 808,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-bold text-slate-700 dark:text-slate-300",
                                                                children: "Patient Registration Fee — collect to enable booking"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                lineNumber: 809,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                        lineNumber: 807,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                lineNumber: 805,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setIsCollectingReg(true),
                                                className: "px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-amber-500/20",
                                                children: "Collect"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                lineNumber: 812,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                        lineNumber: 804,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-xl border border-white dark:border-slate-800 shadow-sm p-4 ring-1 ring-slate-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-bold text-gray-900 dark:text-slate-300 mb-1.5 uppercase tracking-tighter",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                    className: "h-3.5 w-3.5 inline mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                    lineNumber: 826,
                                                                    columnNumber: 148
                                                                }, this),
                                                                " Appointment Date"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                            lineNumber: 826,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            name: "date",
                                                            required: true,
                                                            value: selectedDate,
                                                            onChange: (e)=>setSelectedDate(e.target.value),
                                                            className: "w-full p-2.5 bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none font-medium"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                            lineNumber: 827,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                    lineNumber: 825,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-bold text-gray-900 dark:text-slate-300 mb-1.5 uppercase tracking-tighter",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                    className: "h-3.5 w-3.5 inline mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                    lineNumber: 837,
                                                                    columnNumber: 148
                                                                }, this),
                                                                " Estimated Slot"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                            lineNumber: 837,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "time",
                                                            name: "time",
                                                            required: suggestedTime !== 'Fully Booked',
                                                            defaultValue: suggestedTime === 'Fully Booked' ? '' : suggestedTime,
                                                            placeholder: suggestedTime === 'Fully Booked' ? 'Overtime/Booked' : '',
                                                            className: `w-full p-2.5 bg-white dark:bg-slate-950 border ${suggestedTime === 'Fully Booked' ? 'border-amber-500 ring-2 ring-amber-500/20' : 'border-gray-200 dark:border-slate-700'} rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none font-medium`
                                                        }, suggestedTime, false, {
                                                            fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                            lineNumber: 838,
                                                            columnNumber: 37
                                                        }, this),
                                                        suggestedTime === 'Fully Booked' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-black text-amber-600 mt-1 uppercase tracking-widest animate-pulse",
                                                            children: "⚠️ Late Hours / Fully Booked (Override possible)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                            lineNumber: 848,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                    lineNumber: 836,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                            lineNumber: 824,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                        lineNumber: 823,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm p-5 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                className: "h-4 w-4 text-indigo-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                lineNumber: 858,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider",
                                                                children: "Reason for Visit / History"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                lineNumber: 859,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                        lineNumber: 857,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setIsListening(!isListening),
                                                        className: `px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-slate-100 dark:bg-white/5 text-slate-500 hover:bg-indigo-500 hover:text-white'}`,
                                                        children: isListening ? 'Stop Listening' : 'Voice Dictate'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                        lineNumber: 861,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                lineNumber: 856,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                name: "notes",
                                                rows: 4,
                                                value: notes,
                                                onChange: (e)=>setNotes(e.target.value),
                                                className: "w-full p-4 bg-slate-50/50 dark:bg-black/50 border border-gray-100 dark:border-white/5 rounded-2xl focus:ring-indigo-500 focus:bg-white outline-none resize-none font-medium text-sm transition-all",
                                                placeholder: "State symptoms, history, or patient complaint..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                lineNumber: 865,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 flex items-center gap-2 opacity-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        className: "h-3 w-3 text-indigo-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                        lineNumber: 874,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold uppercase tracking-widest",
                                                        children: "Medical Transcription Engine L2 Active"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                        lineNumber: 875,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                lineNumber: 873,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                        lineNumber: 855,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                lineNumber: 739,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-4 p-6 space-y-6 overflow-y-auto bg-slate-50/30 dark:bg-white/[0.02] custom-scrollbar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-xl border border-white dark:border-slate-800 shadow-sm p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-black uppercase tracking-tighter text-slate-400 mb-1.5 ml-1",
                                                            children: "Visit Type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                            lineNumber: 884,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            name: "type",
                                                            defaultValue: editingAppointment?.type || 'consultation',
                                                            className: "w-full p-3 bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-700 rounded-xl outline-none font-bold text-sm tracking-tight text-slate-800",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "consultation",
                                                                    children: "🩺 Consultation Visit"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                    lineNumber: 886,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "follow_up",
                                                                    children: "🔄 Follow-Up Session"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                    lineNumber: 887,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "emergency",
                                                                    children: "🚨 Emergency Admission"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                    lineNumber: 888,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "procedure",
                                                                    children: "💉 Clinical Procedure"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                    lineNumber: 889,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                            lineNumber: 885,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                    lineNumber: 883,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-black uppercase tracking-tighter text-slate-400 mb-1.5 ml-1",
                                                            children: "Encounter Mode"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                            lineNumber: 893,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-3 p-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl cursor-pointer transition-all hover:border-indigo-500 group",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "radio",
                                                                            name: "mode",
                                                                            value: "in_person",
                                                                            defaultChecked: !editingAppointment || editingAppointment.mode === 'in_person',
                                                                            className: "text-indigo-600 focus:ring-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                            lineNumber: 896,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-black uppercase tracking-tighter text-slate-600 group-hover:text-indigo-600",
                                                                            children: "On-Site Clinic Visit"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                            lineNumber: 897,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                    lineNumber: 895,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-3 p-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl cursor-pointer transition-all hover:border-indigo-500 group",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "radio",
                                                                            name: "mode",
                                                                            value: "video",
                                                                            defaultChecked: editingAppointment?.mode === 'video',
                                                                            className: "text-indigo-600 focus:ring-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                            lineNumber: 900,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-black uppercase tracking-tighter text-slate-600 group-hover:text-indigo-600",
                                                                            children: "Video Consultation"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                            lineNumber: 901,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                    lineNumber: 899,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                            lineNumber: 894,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                    lineNumber: 892,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                            lineNumber: 882,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                        lineNumber: 881,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-xl border border-white dark:border-slate-800 shadow-sm p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-black uppercase tracking-[0.2em] mb-3 text-slate-400 ml-1",
                                                children: "Clinical Priority"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                lineNumber: 909,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2",
                                                children: [
                                                    'low',
                                                    'normal',
                                                    'high',
                                                    'urgent'
                                                ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: `flex items-center gap-2 p-3 rounded-xl border-2 transition-all cursor-pointer ${selectedPriority === p ? 'bg-indigo-50 border-indigo-500 shadow-md shadow-indigo-500/10' : 'bg-gray-50 border-gray-100'}`,
                                                        onClick: ()=>setSelectedPriority(p),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "radio",
                                                                name: "priority",
                                                                value: p,
                                                                className: "hidden",
                                                                checked: selectedPriority === p,
                                                                onChange: ()=>{}
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                lineNumber: 913,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-[10px] font-black uppercase tracking-widest ${selectedPriority === p ? 'text-indigo-700' : 'text-slate-400'}`,
                                                                children: p
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                                lineNumber: 914,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, p, true, {
                                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                        lineNumber: 912,
                                                        columnNumber: 37
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                                lineNumber: 910,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                        lineNumber: 908,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                lineNumber: 880,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                        lineNumber: 738,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-slate-50 dark:bg-white/[0.02] border-t border-gray-100 dark:border-white/5 flex flex-col items-end gap-2 shrink-0",
                        children: [
                            activeRegStatus.shouldCharge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-bold text-red-500 uppercase tracking-widest flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "⛔"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                        lineNumber: 926,
                                        columnNumber: 29
                                    }, this),
                                    activeRegStatus.status === 'expired' ? 'Registration expired — renew fee to enable booking' : 'Registration fee pending — collect fee to enable booking'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                lineNumber: 925,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isPending || isLoadingPatient || activeRegStatus.shouldCharge || activeRegStatus.status === 'loading',
                                title: isLoadingPatient ? 'Loading patient data...' : activeRegStatus.shouldCharge ? 'Collect registration fee first' : '',
                                className: "px-10 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-lg shadow-indigo-500/20 font-black text-xs uppercase tracking-widest transition-all active:scale-95 flex items-center gap-3 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
                                children: [
                                    isPending || isLoadingPatient ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-4 w-4 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                        lineNumber: 936,
                                        columnNumber: 60
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                        lineNumber: 936,
                                        columnNumber: 107
                                    }, this),
                                    editingAppointment ? 'Update Record' : 'Finalize & Save'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                lineNumber: 930,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/appointments/appointment-form.tsx",
                        lineNumber: 923,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                lineNumber: 730,
                columnNumber: 13
            }, this),
            showNewPatientModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/80 backdrop-blur-lg p-4 animate-in fade-in duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-5xl shadow-2xl relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowNewPatientModal(false),
                            className: "absolute -top-14 right-0 p-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl flex items-center gap-2 font-black uppercase text-[10px] tracking-widest transition-all backdrop-blur-xl border border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/appointments/appointment-form.tsx",
                                    lineNumber: 950,
                                    columnNumber: 29
                                }, this),
                                " Cancel Overlay (Esc)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/appointments/appointment-form.tsx",
                            lineNumber: 946,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hms$2f$create$2d$patient$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreatePatientForm"], {
                            onClose: ()=>setShowNewPatientModal(false),
                            onSuccess: handlePatientCreated,
                            hideBilling: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/appointments/appointment-form.tsx",
                            lineNumber: 952,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/appointments/appointment-form.tsx",
                    lineNumber: 945,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/appointments/appointment-form.tsx",
                lineNumber: 944,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/appointments/appointment-form.tsx",
        lineNumber: 682,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_components_appointments_cda623fd._.js.map