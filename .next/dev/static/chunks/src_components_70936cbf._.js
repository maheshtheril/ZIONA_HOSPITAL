(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/searchable-select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchableSelect",
    ()=>SearchableSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js [app-client] (ecmascript) <export default as ChevronsUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
// import { Portal } from '@radix-ui/react-portal'; // If utilizing Radix
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
function useDebouncedCallback(callback, delay) {
    _s();
    const timeoutRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useDebouncedCallback.useCallback": (...args)=>{
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout({
                "useDebouncedCallback.useCallback": ()=>{
                    callback(...args);
                }
            }["useDebouncedCallback.useCallback"], delay);
        }
    }["useDebouncedCallback.useCallback"], [
        callback,
        delay
    ]);
}
_s(useDebouncedCallback, "aX3H9w8I659ydesPwuJ+mASHjvQ=");
function SearchableSelect({ value, valueLabel, onChange, onSearch, placeholder = "Select...", options: propOptions = [], onCreate, label, className = "", disabled = false, variant = 'default', isDark = false, inputId, usePortal = true, autoFocus = false, onKeyDown }) {
    _s1();
    const [open, setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [query, setQuery] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [options, setOptions] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](propOptions);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [creating, setCreating] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [selectedOption, setSelectedOption] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [activeIndex, setActiveIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [position, setPosition] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        top: 0,
        left: 0,
        width: 0
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SearchableSelect.useEffect": ()=>{
            // Stop updating if user is searching. 
            // We only want to sync options with propOptions when search is cleared/idle.
            if (query) return;
            setOptions(propOptions);
        }
    }["SearchableSelect.useEffect"], [
        propOptions,
        query
    ]);
    // Reset active index when options change
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SearchableSelect.useEffect": ()=>{
            setActiveIndex(0);
        }
    }["SearchableSelect.useEffect"], [
        options
    ]);
    const containerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const inputRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const listRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    // Initial value handling
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SearchableSelect.useEffect": ()=>{
            // If the dropdown is open (user is interacting/searching), DO NOT touch the query.
            if (open) return;
            if (!value) {
                setSelectedOption(null);
                setQuery(valueLabel || "");
                return;
            }
            // Try finding in current options or default options
            const found = options.find({
                "SearchableSelect.useEffect": (o)=>o.id === value
            }["SearchableSelect.useEffect"]) || propOptions.find({
                "SearchableSelect.useEffect": (o)=>o.id === value
            }["SearchableSelect.useEffect"]);
            if (found) {
                setSelectedOption(found);
                if (variant === 'ghost') {
                    setQuery(found.label);
                } else {
                    setQuery("");
                }
            } else if (valueLabel) {
                // Fallback to valueLabel if provided
                const fallbackOption = {
                    id: value,
                    label: valueLabel
                };
                setSelectedOption(fallbackOption);
                if (variant === 'ghost') setQuery(valueLabel);
                else setQuery("");
            }
        }
    }["SearchableSelect.useEffect"], [
        value,
        valueLabel,
        options,
        propOptions,
        variant,
        open
    ]);
    // Close on disable
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SearchableSelect.useEffect": ()=>{
            if (disabled && open) {
                setOpen(false);
            }
        }
    }["SearchableSelect.useEffect"], [
        disabled,
        open
    ]);
    // Calculate position for portal
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SearchableSelect.useEffect": ()=>{
            if (usePortal && open && containerRef.current) {
                const updatePosition = {
                    "SearchableSelect.useEffect.updatePosition": ()=>{
                        const rect = containerRef.current?.getBoundingClientRect();
                        if (rect) {
                            setPosition({
                                top: rect.bottom + window.scrollY,
                                left: rect.left + window.scrollX,
                                width: rect.width
                            });
                        }
                    }
                }["SearchableSelect.useEffect.updatePosition"];
                updatePosition();
                window.addEventListener('resize', updatePosition);
                window.addEventListener('scroll', updatePosition, true); // true for capture (all scrollable ancestors)
                return ({
                    "SearchableSelect.useEffect": ()=>{
                        window.removeEventListener('resize', updatePosition);
                        window.removeEventListener('scroll', updatePosition, true);
                    }
                })["SearchableSelect.useEffect"];
            }
        }
    }["SearchableSelect.useEffect"], [
        open,
        usePortal
    ]);
    // Handle clicks outside - modified for Portal
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SearchableSelect.useEffect": ()=>{
            const handleClickOutside = {
                "SearchableSelect.useEffect.handleClickOutside": (event)=>{
                    const target = event.target;
                    // Check if click is inside container (input) OR inside dropdown (portal)
                    if (containerRef.current && !containerRef.current.contains(target) && listRef.current && !listRef.current.parentElement?.contains(target) // check portal wrapper
                    ) {
                        setOpen(false);
                    }
                }
            }["SearchableSelect.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "SearchableSelect.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["SearchableSelect.useEffect"];
        }
    }["SearchableSelect.useEffect"], []);
    // Scroll active item into view
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SearchableSelect.useEffect": ()=>{
            if (open && listRef.current) {
                const activeItem = listRef.current.children[activeIndex];
                if (activeItem) {
                    activeItem.scrollIntoView({
                        block: 'nearest'
                    });
                }
            }
        }
    }["SearchableSelect.useEffect"], [
        activeIndex,
        open
    ]);
    // Handle initial focus
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SearchableSelect.useEffect": ()=>{
            if (autoFocus && inputRef.current) {
                inputRef.current.focus();
            }
        }
    }["SearchableSelect.useEffect"], [
        autoFocus
    ]);
    const performSearch = useDebouncedCallback({
        "SearchableSelect.useDebouncedCallback[performSearch]": async (searchTerm)=>{
            setLoading(true);
            try {
                const results = await onSearch(searchTerm);
                setOptions(results);
            } catch (err) {
                console.error(err);
                setOptions([]);
            } finally{
                setLoading(false);
            }
        }
    }["SearchableSelect.useDebouncedCallback[performSearch]"], 300);
    const handleInputChange = (e)=>{
        const val = e.target.value;
        setQuery(val);
        setOpen(true);
        performSearch(val);
    };
    const handleSelect = (option)=>{
        setSelectedOption(option);
        onChange(option.id, option);
        setOpen(false);
        setQuery("");
    };
    const handleCreate = async ()=>{
        if (!onCreate || !query) return;
        setCreating(true);
        try {
            const newOption = await onCreate(query);
            if (newOption) {
                handleSelect(newOption);
            }
        } catch (err) {
            console.error(err);
        } finally{
            setCreating(false);
        }
    };
    const handleKeyDown = (e)=>{
        // Bubble up to parent if provided
        if (onKeyDown) onKeyDown(e);
        if (!open) {
            if (e.key === 'ArrowDown' || e.key === 'Enter') {
                setOpen(true);
                performSearch(query);
            }
            return;
        }
        switch(e.key){
            case 'ArrowDown':
                e.preventDefault();
                setActiveIndex((prev)=>prev < options.length - 1 ? prev + 1 : prev);
                break;
            case 'ArrowUp':
                e.preventDefault();
                setActiveIndex((prev)=>prev > 0 ? prev - 1 : prev);
                break;
            case 'Enter':
                e.preventDefault();
                if (options[activeIndex]) {
                    handleSelect(options[activeIndex]);
                } else if (onCreate && query && options.length === 0) {
                    handleCreate();
                }
                break;
            case 'Escape':
                setOpen(false);
                break;
        }
    };
    const handleClear = (e)=>{
        e.stopPropagation();
        setSelectedOption(null);
        onChange(null, null);
        setQuery("");
    };
    const baseStyles = variant === 'default' ? "bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 rounded-lg px-3" : "bg-transparent border-none shadow-none focus-within:ring-0 focus-within:bg-gray-50/50 dark:focus-within:bg-white/5 rounded-md px-1";
    const dropdownContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
                ${usePortal ? 'fixed' : 'absolute'} 
                z-[99999] mt-1 overflow-hidden rounded-xl py-1 text-base shadow-2xl ring-1 ring-black/5 focus:outline-none sm:text-sm 
                ${isDark ? 'bg-neutral-900 border border-white/10 text-white shadow-black' : 'bg-white border border-gray-100 text-gray-900 shadow-lg'}
                ${usePortal ? '' : 'w-full top-full left-0'}
            `,
        style: {
            top: usePortal ? position.top : undefined,
            left: usePortal ? position.left : undefined,
            width: usePortal ? position.width : undefined,
            maxHeight: '240px',
            pointerEvents: 'auto'
        },
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 text-center text-gray-500 dark:text-neutral-500 flex items-center justify-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-4 w-4 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/searchable-select.tsx",
                        lineNumber: 300,
                        columnNumber: 21
                    }, this),
                    " Loading..."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/searchable-select.tsx",
                lineNumber: 299,
                columnNumber: 17
            }, this),
            !loading && options.length === 0 && !query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 text-center text-gray-500 dark:text-neutral-500",
                children: "Start typing to search..."
            }, void 0, false, {
                fileName: "[project]/src/components/ui/searchable-select.tsx",
                lineNumber: 305,
                columnNumber: 17
            }, this),
            !loading && options.length === 0 && query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-2 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-2 py-2 text-gray-500 dark:text-neutral-500 text-center text-sm",
                        children: "No results found."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/searchable-select.tsx",
                        lineNumber: 312,
                        columnNumber: 21
                    }, this),
                    onCreate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleCreate,
                        disabled: creating,
                        className: "w-full text-left flex items-center gap-2 px-3 py-2 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 rounded-md transition-colors",
                        children: [
                            creating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "h-4 w-4 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/searchable-select.tsx",
                                lineNumber: 320,
                                columnNumber: 41
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/searchable-select.tsx",
                                lineNumber: 320,
                                columnNumber: 88
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: [
                                    'Create "',
                                    query,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/searchable-select.tsx",
                                lineNumber: 321,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/searchable-select.tsx",
                        lineNumber: 314,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/searchable-select.tsx",
                lineNumber: 311,
                columnNumber: 17
            }, this),
            !loading && options.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "py-1 overflow-auto max-h-[240px]",
                ref: listRef,
                children: options.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        onMouseDown: (e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                            handleSelect(option);
                        },
                        className: `
                                relative cursor-pointer select-none py-2.5 pl-3 pr-9 
                                ${index === activeIndex ? isDark ? 'bg-white/10' : 'bg-indigo-50 dark:bg-white/10' : ''}
                                ${isDark ? 'text-white hover:bg-white/10' : 'text-gray-900 dark:text-neutral-200 hover:bg-indigo-50 dark:hover:bg-white/5'}
                                transition-colors flex flex-col
                            `,
                        onMouseEnter: ()=>setActiveIndex(index),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block truncate font-medium",
                                children: option.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/searchable-select.tsx",
                                lineNumber: 345,
                                columnNumber: 29
                            }, this),
                            option.subLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block truncate text-xs text-gray-500 dark:text-neutral-500 mt-0.5",
                                children: option.subLabel
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/searchable-select.tsx",
                                lineNumber: 347,
                                columnNumber: 33
                            }, this),
                            value === option.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 dark:text-indigo-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/searchable-select.tsx",
                                    lineNumber: 352,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/searchable-select.tsx",
                                lineNumber: 351,
                                columnNumber: 33
                            }, this)
                        ]
                    }, option.id, true, {
                        fileName: "[project]/src/components/ui/searchable-select.tsx",
                        lineNumber: 330,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/searchable-select.tsx",
                lineNumber: 328,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/searchable-select.tsx",
        lineNumber: 283,
        columnNumber: 9
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative ${className}`,
                ref: containerRef,
                children: [
                    label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-700 dark:text-neutral-400 mb-1",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/searchable-select.tsx",
                        lineNumber: 365,
                        columnNumber: 27
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `
                        relative w-full cursor-text text-left transition-all duration-200
                        ${baseStyles}
                        ${disabled ? 'opacity-70 cursor-not-allowed bg-gray-50 dark:bg-neutral-800' : ''}
                    `,
                        tabIndex: disabled ? -1 : 0,
                        onFocus: ()=>{
                            if (disabled) return;
                            if (selectedOption && !open) {
                                setOpen(true);
                            }
                            setTimeout(()=>inputRef.current?.focus(), 0);
                        },
                        onClick: ()=>{
                            if (disabled) return;
                            if (selectedOption && !open) {
                                setOpen(true);
                                // Small timeout to allow render to happen so input exists
                                setTimeout(()=>inputRef.current?.focus(), 0);
                            } else {
                                inputRef.current?.focus();
                            }
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center min-h-[40px] gap-2",
                            children: [
                                variant === 'default' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "h-4 w-4 text-gray-400 dark:text-neutral-500 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/searchable-select.tsx",
                                    lineNumber: 393,
                                    columnNumber: 51
                                }, this),
                                selectedOption && !open && variant === 'default' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `block truncate font-medium text-gray-900 dark:text-neutral-200`,
                                                    children: selectedOption.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/searchable-select.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 37
                                                }, this),
                                                selectedOption.subLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `block truncate text-xs text-gray-500 dark:text-neutral-500`,
                                                    children: selectedOption.subLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/searchable-select.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/searchable-select.tsx",
                                            lineNumber: 397,
                                            columnNumber: 33
                                        }, this),
                                        !disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleClear,
                                            className: "text-gray-400 hover:text-gray-600 dark:hover:text-neutral-300 p-1 shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/searchable-select.tsx",
                                                lineNumber: 405,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/searchable-select.tsx",
                                            lineNumber: 404,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/searchable-select.tsx",
                                    lineNumber: 396,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: inputRef,
                                    id: inputId,
                                    type: "text",
                                    className: `w-full border-none p-0 focus:ring-0 bg-transparent ${variant === 'ghost' ? `${isDark ? 'text-white dark:text-white' : 'text-gray-900 dark:text-white'} font-inherit placeholder:text-inherit placeholder:opacity-30` : `text-sm ${isDark ? 'text-white dark:text-white' : 'text-gray-900 dark:text-white'} placeholder:text-gray-400 dark:placeholder:text-neutral-600`}`,
                                    placeholder: selectedOption && variant === 'default' ? selectedOption.label : placeholder,
                                    value: query,
                                    onChange: handleInputChange,
                                    onKeyDown: handleKeyDown,
                                    onFocus: ()=>{
                                        if (!disabled) {
                                            setOpen(true);
                                            performSearch(query);
                                        }
                                    },
                                    autoFocus: autoFocus,
                                    disabled: disabled,
                                    onBlur: ()=>{
                                        setOpen(false);
                                    },
                                    autoComplete: "off"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/searchable-select.tsx",
                                    lineNumber: 410,
                                    columnNumber: 29
                                }, this),
                                selectedOption && variant === 'ghost' && !disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleClear,
                                    className: "text-neutral-500 hover:text-neutral-300 p-1 shrink-0 mr-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/searchable-select.tsx",
                                        lineNumber: 436,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/searchable-select.tsx",
                                    lineNumber: 435,
                                    columnNumber: 29
                                }, this),
                                !selectedOption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "shrink-0 text-gray-400 dark:text-neutral-600",
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-4 w-4 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/searchable-select.tsx",
                                        lineNumber: 442,
                                        columnNumber: 44
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__["ChevronsUpDown"], {
                                        className: "h-4 w-4 opacity-50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/searchable-select.tsx",
                                        lineNumber: 442,
                                        columnNumber: 91
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/searchable-select.tsx",
                                    lineNumber: 441,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/searchable-select.tsx",
                            lineNumber: 392,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/searchable-select.tsx",
                        lineNumber: 367,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/searchable-select.tsx",
                lineNumber: 364,
                columnNumber: 13
            }, this),
            open && !disabled && (usePortal && typeof document !== 'undefined' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(dropdownContent, document.body) : dropdownContent)
        ]
    }, void 0, true);
}
_s1(SearchableSelect, "iaRFNumTMLt5uOv5cT//pGATCf8=", false, function() {
    return [
        useDebouncedCallback
    ];
});
_c = SearchableSelect;
var _c;
__turbopack_context__.k.register(_c, "SearchableSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Label;
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const DialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c = DialogOverlay;
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 48,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 49,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/dialog.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = DialogContent;
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c3 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c4 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c6 = DialogTitle;
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c8 = DialogDescription;
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "DialogOverlay");
__turbopack_context__.k.register(_c1, "DialogContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "DialogContent");
__turbopack_context__.k.register(_c3, "DialogHeader");
__turbopack_context__.k.register(_c4, "DialogFooter");
__turbopack_context__.k.register(_c5, "DialogTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "DialogTitle");
__turbopack_context__.k.register(_c7, "DialogDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            success: "border-transparent bg-emerald-500 text-white hover:bg-emerald-600",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const ScrollArea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                className: "h-full w-full rounded-[inherit]",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = ScrollArea;
ScrollArea.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const ScrollBar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, orientation = "vertical", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        ref: ref,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            className: "relative flex-1 rounded-full bg-border"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 43,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = ScrollBar;
ScrollBar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"].displayName;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ScrollArea$React.forwardRef");
__turbopack_context__.k.register(_c1, "ScrollArea");
__turbopack_context__.k.register(_c2, "ScrollBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/billing/batch-selector-dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BatchSelectorDialog",
    ()=>BatchSelectorDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/table.js [app-client] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
;
;
;
function BatchSelectorDialog({ isOpen, onClose, productName, batches, onSelect, currency = '₹' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: (open)=>!open && onClose(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-xl p-0 overflow-hidden bg-white dark:bg-[#0a0f1e] border-none shadow-[0_40px_100px_rgba(0,0,0,0.3)] rounded-[2.5rem] ring-1 ring-slate-200 dark:ring-white/10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    className: "px-8 py-6 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-white/5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-12 w-12 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                        className: "text-[14px] font-black text-slate-900 dark:text-white uppercase tracking-tight",
                                        children: "Select Active Batch"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-100/50 dark:bg-slate-800/30 rounded-2xl p-4 mb-4 flex items-center justify-between border border-slate-200/50 dark:border-white/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                                            className: "h-4 w-4 text-slate-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                            className: "h-[300px] pr-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: batches.map((batch)=>{
                                    const isExpired = batch.expiry_date && new Date(batch.expiry_date) < new Date();
                                    const stockQty = Number(batch.qty_on_hand);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            onSelect(batch);
                                            onClose();
                                        },
                                        className: "w-full group relative p-5 bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 rounded-[1.5rem] text-left transition-all hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-500/10 active:scale-[0.98] overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-0 p-3 flex flex-col items-end gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                                        children: "Available"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-slate-100 dark:bg-slate-950 p-2 rounded-xl border border-slate-200/50 dark:border-white/10 group-hover:bg-indigo-600 transition-colors",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5",
                                                                        children: "Batch Number"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                                                        lineNumber: 94,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                        className: `h-3 w-3 ${isExpired ? 'text-rose-500' : 'text-slate-400'}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                                                        lineNumber: 101,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5",
                                                                                children: "Expiry"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                                                                lineNumber: 103,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `text-[10px] font-black tracking-tight ${isExpired ? 'text-rose-500 underline' : 'text-slate-600 dark:text-slate-300'}`,
                                                                                children: batch.expiry_date ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(batch.expiry_date), 'MMM yyyy').toUpperCase() : 'N/A'
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
                                                            batch.mrp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5",
                                                                        children: "MRP"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                                                                        lineNumber: 112,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    className: "px-8 py-6 bg-slate-50 dark:bg-slate-900/10 border-t border-slate-100 dark:border-white/5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            onClick: onClose,
                            className: "text-[9px] font-black uppercase tracking-widest h-12 px-8 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all",
                            children: "Cancel Node"
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/batch-selector-dialog.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-[8px] font-black text-slate-400 uppercase tracking-[0.3em] opacity-40",
                            children: [
                                "Secure Inventory Protocol Enabled ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c = BatchSelectorDialog;
var _c;
__turbopack_context__.k.register(_c, "BatchSelectorDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/billing/invoice-editor-compact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompactInvoiceEditor",
    ()=>CompactInvoiceEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/banknote.js [app-client] (ecmascript) <export default as Banknote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/qr-code.js [app-client] (ecmascript) <export default as QrCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.js [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/qrcode.react/lib/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$pos$2d$device$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services/pos-device.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$f9eaae__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:f9eaae [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$1e1724__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:1e1724 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$94aa05__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:94aa05 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$18d66f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:18d66f [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$3d4820__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:3d4820 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$e624b4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:e624b4 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$38ba97__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:38ba97 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$5b977c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:5b977c [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$8313d4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:8313d4 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$16a8ef__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:16a8ef [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$891dab__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:891dab [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$searchable$2d$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/searchable-select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$billing$2f$batch$2d$selector$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/billing/batch-selector-dialog.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function CompactInvoiceEditor({ patients, billableItems, uoms = [], taxConfig, initialPatientId, initialMedicines, appointmentId, initialInvoice, onClose, onPaymentSuccess, currency = '₹', isRegistrationFee = false, gatewayConfig = null, defaultTaxMode }) {
    _s();
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
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const isAdmin = session?.user?.isAdmin;
    const tenantId = session?.user?.tenantId;
    const companyId = session?.user?.companyId;
    // Active persistence state
    const [activeInvoice, setActiveInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialInvoice);
    // UI State
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pricingMode, setPricingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('standard');
    const [taxMode, setTaxMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultTaxMode || 'exempt');
    const [isMaximized, setIsMaximized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isQuickPatientOpen, setIsQuickPatientOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isWalkIn, setIsWalkIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSuccess, setIsSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastSavedId, setLastSavedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [patientBalance, setPatientBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [includePrevBalance, setIncludePrevBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLedgerOpen, setIsLedgerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ledgerData, setLedgerData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isFetchingLedger, setIsFetchingLedger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [provisionalNo, setProvisionalNo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("...");
    const amountInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const finalizeButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isErrorDialogOpen, setIsErrorDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorDetails, setErrorDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        message: ''
    });
    const [pdfConfig, setPdfConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [posStatus, setPosStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('searching');
    const [isPOSLoading, setIsPOSLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Razorpay UPI QR State
    const [isRazorpayQROpen, setIsRazorpayQROpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [razorpayOrderId, setRazorpayOrderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [razorpayQRAmount, setRazorpayQRAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [razorpayStatus, setRazorpayStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('loading');
    const [razorpayPaymentId, setRazorpayPaymentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [razorpayQRUrl, setRazorpayQRUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSendingLink, setIsSendingLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCustomerDisplayOpen, setIsCustomerDisplayOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const razorpayPollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompactInvoiceEditor.useEffect": ()=>{
            if (isPaymentModalOpen) {
                setTimeout({
                    "CompactInvoiceEditor.useEffect": ()=>amountInputRef.current?.focus()
                }["CompactInvoiceEditor.useEffect"], 150);
                setPosStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$pos$2d$device$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["posService"].getStatus());
            }
        }
    }["CompactInvoiceEditor.useEffect"], [
        isPaymentModalOpen
    ]);
    // Form State
    const [quickPatientName, setQuickPatientName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [quickPatientPhone, setQuickPatientPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isCreatingPatient, setIsCreatingPatient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [walkInName, setWalkInName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [walkInPhone, setWalkInPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedPatientId, setSelectedPatientId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(activeInvoice?.patient_id || initialPatientId || '');
    const patientOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompactInvoiceEditor.useMemo[patientOptions]": ()=>patients.map({
                "CompactInvoiceEditor.useMemo[patientOptions]": (p)=>({
                        id: p.id,
                        label: p.label || p.name || `${p.first_name || ''} ${p.last_name || ''}`.trim() || 'Unnamed Patient',
                        subLabel: `${p.phone || p.contact || ''} ${p.patient_number ? `• UID: ${p.patient_number}` : ''}`
                    })
            }["CompactInvoiceEditor.useMemo[patientOptions]"])
    }["CompactInvoiceEditor.useMemo[patientOptions]"], [
        patients
    ]);
    const itemOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompactInvoiceEditor.useMemo[itemOptions]": ()=>billableItems.map({
                "CompactInvoiceEditor.useMemo[itemOptions]": (i)=>({
                        id: i.id,
                        label: i.label || i.name,
                        subLabel: `[${(i.type || 'item').toUpperCase()}] ${i.sku ? `SKU: ${i.sku} | ` : ''}${currency}${i.price}`
                    })
            }["CompactInvoiceEditor.useMemo[itemOptions]"])
    }["CompactInvoiceEditor.useMemo[itemOptions]"], [
        billableItems,
        currency
    ]);
    // Auto-select patient from URL if coming back from registration
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompactInvoiceEditor.useEffect": ()=>{
            const pId = searchParams.get('patientId');
            if (pId) {
                setSelectedPatientId(pId);
                setIsWalkIn(false);
            } else if (initialPatientId && !selectedPatientId) {
                // [FIX] Sync with prop if state is empty (handles late-bind mapping)
                setSelectedPatientId(initialPatientId);
                setIsWalkIn(false);
            }
        }
    }["CompactInvoiceEditor.useEffect"], [
        searchParams,
        initialPatientId,
        selectedPatientId
    ]);
    const selectedPatientLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompactInvoiceEditor.useMemo[selectedPatientLabel]": ()=>{
            if (!selectedPatientId) return '';
            const p = patientOptions.find({
                "CompactInvoiceEditor.useMemo[selectedPatientLabel].p": (p)=>p.id === selectedPatientId
            }["CompactInvoiceEditor.useMemo[selectedPatientLabel].p"]);
            if (p) return p.label;
            // Fallback to initial invoice patient name if available
            const inv = initialInvoice;
            return inv?.hms_patient?.full_name || `${inv?.hms_patient?.first_name || ''} ${inv?.hms_patient?.last_name || ''}`.trim() || inv?.patient_name || '';
        }
    }["CompactInvoiceEditor.useMemo[selectedPatientLabel]"], [
        selectedPatientId,
        patientOptions,
        initialInvoice
    ]);
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(activeInvoice?.invoice_date ? new Date(activeInvoice.invoice_date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]);
    // Fetch provisional number on mount and date change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompactInvoiceEditor.useEffect": ()=>{
            if (!activeInvoice?.invoice_number) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$38ba97__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getNextVoucherNumber"])(date).then({
                    "CompactInvoiceEditor.useEffect": (res)=>{
                        if (res.success && res.data) setProvisionalNo(res.data);
                    }
                }["CompactInvoiceEditor.useEffect"]);
            } else {
                setProvisionalNo(activeInvoice.invoice_number);
            }
        }
    }["CompactInvoiceEditor.useEffect"], [
        date,
        activeInvoice
    ]);
    // AUTO-LOAD INITIAL DATA FROM APPOINTMENT (Registration Fee, etc)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompactInvoiceEditor.useEffect": ()=>{
            if (appointmentId && !activeInvoice && (!initialMedicines || initialMedicines.length === 0)) {
                __turbopack_context__.A("[project]/src/app/actions/billing.ts [app-client] (ecmascript, async loader)").then({
                    "CompactInvoiceEditor.useEffect": (mod)=>{
                        mod.getInitialInvoiceData(appointmentId).then({
                            "CompactInvoiceEditor.useEffect": (res)=>{
                                if (res?.success && res.data) {
                                    const { initialItems, initialInvoice: foundInvoice, patientId } = res.data;
                                    // If we found an existing draft invoice, lock on to it
                                    if (foundInvoice) {
                                        setActiveInvoice(foundInvoice);
                                        if (!selectedPatientId) setSelectedPatientId(foundInvoice.patient_id);
                                        // Load lines from existing invoice
                                        if (foundInvoice.hms_invoice_lines) {
                                            const invLines = foundInvoice.hms_invoice_lines.map({
                                                "CompactInvoiceEditor.useEffect.invLines": (l)=>({
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
                                                        item_type: l.product_id ? billableItems.find({
                                                            "CompactInvoiceEditor.useEffect.invLines": (bi)=>bi.id === l.product_id
                                                        }["CompactInvoiceEditor.useEffect.invLines"])?.type || 'item' : 'item',
                                                        isFromInvoice: true
                                                    })
                                            }["CompactInvoiceEditor.useEffect.invLines"]);
                                            setLines(invLines);
                                        }
                                        return;
                                    }
                                    // Fallback to initialItems if no invoice exists
                                    if (Array.isArray(initialItems) && initialItems.length > 0) {
                                        const newLines = initialItems.map({
                                            "CompactInvoiceEditor.useEffect.newLines": (m)=>{
                                                const billable = billableItems.find({
                                                    "CompactInvoiceEditor.useEffect.newLines.billable": (bi)=>bi.id === (m.id || m.product_id) || bi.label === m.name
                                                }["CompactInvoiceEditor.useEffect.newLines.billable"]);
                                                const taxId = billable?.categoryTaxId !== undefined ? billable.categoryTaxId : defaultTaxId;
                                                const finalPrice = billable?.price || Number(m.price || 0);
                                                const taxRateObj = taxConfig.taxRates.find({
                                                    "CompactInvoiceEditor.useEffect.newLines.taxRateObj": (t)=>t.id === taxId
                                                }["CompactInvoiceEditor.useEffect.newLines.taxRateObj"]);
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
                                            }
                                        }["CompactInvoiceEditor.useEffect.newLines"]);
                                        setLines(newLines);
                                    }
                                }
                            }
                        }["CompactInvoiceEditor.useEffect"]);
                    }
                }["CompactInvoiceEditor.useEffect"]);
            }
        }
    }["CompactInvoiceEditor.useEffect"], [
        appointmentId,
        activeInvoice,
        initialMedicines,
        billableItems
    ]);
    // Fetch PDF config on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompactInvoiceEditor.useEffect": ()=>{
            const loadConfig = {
                "CompactInvoiceEditor.useEffect.loadConfig": async ()=>{
                    try {
                        if (tenantId && companyId) {
                            const pdf = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$8313d4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getPDFConfig"])(companyId, tenantId);
                            if (pdf) setPdfConfig(pdf);
                        }
                    } catch (e) {
                        console.error('Failed to load PDF config', e);
                    }
                }
            }["CompactInvoiceEditor.useEffect.loadConfig"];
            loadConfig();
        }
    }["CompactInvoiceEditor.useEffect"], [
        tenantId,
        companyId
    ]);
    const extendedTaxRates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompactInvoiceEditor.useMemo[extendedTaxRates]": ()=>{
            const rates = [
                ...taxConfig.taxRates || []
            ];
            // Scan all billable items for missing rates
            billableItems.forEach({
                "CompactInvoiceEditor.useMemo[extendedTaxRates]": (item)=>{
                    const rate = Number(item.categoryTaxRate || 0);
                    if (rate > 0) {
                        const exists = rates.find({
                            "CompactInvoiceEditor.useMemo[extendedTaxRates].exists": (r)=>Math.abs(Number(r.rate) - rate) < 0.1
                        }["CompactInvoiceEditor.useMemo[extendedTaxRates].exists"]);
                        if (!exists) {
                            // Check if we already added it
                            const alreadyAdded = rates.find({
                                "CompactInvoiceEditor.useMemo[extendedTaxRates].alreadyAdded": (r)=>r.id === `AUTO_${rate}`
                            }["CompactInvoiceEditor.useMemo[extendedTaxRates].alreadyAdded"]);
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
                }
            }["CompactInvoiceEditor.useMemo[extendedTaxRates]"]);
            return rates.sort({
                "CompactInvoiceEditor.useMemo[extendedTaxRates]": (a, b)=>Number(a.rate) - Number(b.rate)
            }["CompactInvoiceEditor.useMemo[extendedTaxRates]"]);
        }
    }["CompactInvoiceEditor.useMemo[extendedTaxRates]"], [
        taxConfig.taxRates,
        billableItems
    ]);
    const defaultTaxId = taxConfig.defaultTax?.id || '';
    // Robust Line Item State
    const [lines, setLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CompactInvoiceEditor.useState": ()=>{
            let combinedLines = [];
            // 1. If we are editing an existing invoice (or draft), load those lines first
            if (initialInvoice?.hms_invoice_lines) {
                combinedLines = initialInvoice.hms_invoice_lines.map({
                    "CompactInvoiceEditor.useState": (l)=>({
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
                            item_type: l.product_id ? billableItems.find({
                                "CompactInvoiceEditor.useState": (bi)=>bi.id === l.product_id
                            }["CompactInvoiceEditor.useState"])?.type || 'item' : 'item',
                            isFromInvoice: true
                        })
                }["CompactInvoiceEditor.useState"]);
            }
            // 2. If we have initial items passed (doctor prescriptions, nurse items, cons. fees)
            if (initialMedicines && initialMedicines.length > 0) {
                const initialMapped = initialMedicines.map({
                    "CompactInvoiceEditor.useState.initialMapped": (m)=>{
                        const billable = billableItems.find({
                            "CompactInvoiceEditor.useState.initialMapped.billable": (bi)=>bi.id === (m.id || m.product_id) || bi.label === m.name
                        }["CompactInvoiceEditor.useState.initialMapped.billable"]);
                        // FIX: Do not auto-exempt services. Trust the Billable Item's tax ID, or fall back to Default Tax.
                        const taxId = billable?.categoryTaxId !== undefined ? billable.categoryTaxId : defaultTaxId;
                        const finalPrice = billable?.price || Number(m.price || 0);
                        // Calculate initial tax
                        const taxRateObj = taxConfig.taxRates.find({
                            "CompactInvoiceEditor.useState.initialMapped.taxRateObj": (t)=>t.id === taxId
                        }["CompactInvoiceEditor.useState.initialMapped.taxRateObj"]);
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
                    }
                }["CompactInvoiceEditor.useState.initialMapped"]);
                // Merge: Add if not already in the draft invoice
                initialMapped.forEach({
                    "CompactInvoiceEditor.useState": (m)=>{
                        const exists = combinedLines.some({
                            "CompactInvoiceEditor.useState.exists": (cl)=>{
                                const productMatch = cl.product_id && m.product_id && cl.product_id === m.product_id;
                                const descMatch = (cl.description?.toLowerCase() || '').trim() === (m.description?.toLowerCase() || '').trim();
                                return productMatch || descMatch;
                            }
                        }["CompactInvoiceEditor.useState.exists"]);
                        if (!exists) {
                            combinedLines.push(m);
                        }
                    }
                }["CompactInvoiceEditor.useState"]);
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
        }
    }["CompactInvoiceEditor.useState"]);
    // Sync lines when initial props change (e.g. after async fetch in parent)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompactInvoiceEditor.useEffect": ()=>{
            if (initialInvoice?.hms_invoice_lines || initialMedicines && initialMedicines.length > 0) {
                // [WORLD CLASS] Lock on to the invoice if it arrived asynchronously
                if (initialInvoice && !activeInvoice) {
                    console.log("[INVOICE-SYNC] Locking on to asynchronously arrived invoice:", initialInvoice.invoice_number);
                    setActiveInvoice(initialInvoice);
                }
                let combined = [];
                if (initialInvoice?.hms_invoice_lines) {
                    combined = initialInvoice.hms_invoice_lines.map({
                        "CompactInvoiceEditor.useEffect": (l)=>({
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
                                item_type: l.product_id ? billableItems.find({
                                    "CompactInvoiceEditor.useEffect": (bi)=>bi.id === l.product_id
                                }["CompactInvoiceEditor.useEffect"])?.type || 'item' : 'item',
                                isFromInvoice: true
                            })
                    }["CompactInvoiceEditor.useEffect"]);
                }
                if (initialMedicines && initialMedicines.length > 0) {
                    initialMedicines.forEach({
                        "CompactInvoiceEditor.useEffect": (m)=>{
                            // [WORLD CLASS AUTO-POPULATE]
                            // Find the real catalog item by ID or exact Name match
                            const billable = billableItems.find({
                                "CompactInvoiceEditor.useEffect.billable": (bi)=>bi.id === (m.id || m.product_id) || bi.label === m.name || bi.name === m.name || isRegistrationFee && (bi.label === "Patient Registration Fee" || bi.name === "Patient Registration Fee")
                            }["CompactInvoiceEditor.useEffect.billable"]);
                            const taxId = billable?.categoryTaxId !== undefined ? billable.categoryTaxId : defaultTaxId;
                            const finalPrice = billable?.price || Number(m.price || 0);
                            const taxRateObj = taxConfig.taxRates.find({
                                "CompactInvoiceEditor.useEffect.taxRateObj": (t)=>t.id === taxId
                            }["CompactInvoiceEditor.useEffect.taxRateObj"]);
                            const rate = taxRateObj ? Number(taxRateObj.rate) : 0;
                            const lineNet = Number(m.quantity || 1) * finalPrice;
                            const taxAmt = Math.max(0, lineNet) * rate / 100;
                            const exists = combined.some({
                                "CompactInvoiceEditor.useEffect.exists": (cl)=>{
                                    const productMatch = cl.product_id && (billable?.id || m.id) && cl.product_id === (billable?.id || m.id);
                                    const descMatch = (cl.description?.toLowerCase() || '').trim() === (m.name?.toLowerCase() || m.description?.toLowerCase() || '').trim();
                                    return productMatch || descMatch;
                                }
                            }["CompactInvoiceEditor.useEffect.exists"]);
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
                        }
                    }["CompactInvoiceEditor.useEffect"]);
                }
                if (combined.length > 0) setLines(combined);
            }
        }
    }["CompactInvoiceEditor.useEffect"], [
        initialInvoice,
        initialMedicines,
        billableItems,
        defaultTaxId,
        taxConfig.taxRates,
        isRegistrationFee
    ]);
    // Sync Tax Amounts on Mount for initial items
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompactInvoiceEditor.useEffect": ()=>{
            if (lines.length > 0) {
                const updatedLines = lines.map({
                    "CompactInvoiceEditor.useEffect.updatedLines": (line)=>{
                        const taxRateObj = taxConfig.taxRates.find({
                            "CompactInvoiceEditor.useEffect.updatedLines.taxRateObj": (t)=>t.id === line.tax_rate_id
                        }["CompactInvoiceEditor.useEffect.updatedLines.taxRateObj"]);
                        const rate = taxRateObj ? Number(taxRateObj.rate) : 0;
                        const lineNet = line.quantity * line.unit_price - (line.discount_amount || 0);
                        return {
                            ...line,
                            tax_amount: Math.max(0, lineNet) * rate / 100
                        };
                    }
                }["CompactInvoiceEditor.useEffect.updatedLines"]);
                // Only update if changes detected to avoid infinite loop
                const hasChanges = updatedLines.some({
                    "CompactInvoiceEditor.useEffect.hasChanges": (l, idx)=>l.tax_amount !== lines[idx].tax_amount
                }["CompactInvoiceEditor.useEffect.hasChanges"]);
                if (hasChanges) {
                    setLines(updatedLines);
                }
            }
        }
    }["CompactInvoiceEditor.useEffect"], []);
    // WORLD CLASS FEFO: Auto-resolve batches for initial medicines
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompactInvoiceEditor.useEffect": ()=>{
            const items = lines.filter({
                "CompactInvoiceEditor.useEffect.items": (l)=>l.product_id && !l.batch_id && l.item_type === 'item'
            }["CompactInvoiceEditor.useEffect.items"]);
            items.forEach({
                "CompactInvoiceEditor.useEffect": (line)=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$16a8ef__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getBestBatch"])(line.product_id).then({
                        "CompactInvoiceEditor.useEffect": (batch)=>{
                            if (batch) {
                                setLines({
                                    "CompactInvoiceEditor.useEffect": (current)=>current.map({
                                            "CompactInvoiceEditor.useEffect": (l)=>l.id === line.id ? {
                                                    ...l,
                                                    batch_id: batch.id,
                                                    batch_no: batch.batch_no,
                                                    unit_price: pricingMode === 'mrp' && batch.mrp ? Number(batch.mrp) : l.unit_price
                                                } : l
                                        }["CompactInvoiceEditor.useEffect"])
                                }["CompactInvoiceEditor.useEffect"]);
                            }
                        }
                    }["CompactInvoiceEditor.useEffect"]);
                }
            }["CompactInvoiceEditor.useEffect"]);
        }
    }["CompactInvoiceEditor.useEffect"], [
        lines.length
    ]);
    const [payments, setPayments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isFinalizing, setIsFinalizing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showUPIQR, setShowUPIQR] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activePaymentAmount, setActivePaymentAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [globalDiscount, setGlobalDiscount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Number(initialInvoice?.total_discount || 0));
    // Batch Selection State
    const [selectedLineForBatch, setSelectedLineForBatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeBatches, setActiveBatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isBatchSelectorOpen, setIsBatchSelectorOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [batchProductName, setBatchProductName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Totals
    const subtotal = Number(lines.reduce((sum, line)=>sum + (line.quantity * line.unit_price - (line.discount_amount || 0)), 0).toFixed(2));
    // World Standard Tax Logic
    const totalTax = taxMode === 'exempt' ? 0 : Number(lines.reduce((sum, line)=>{
        if (taxMode === 'inclusive') {
            // Calculate tax from inclusive price
            const taxRateObj = extendedTaxRates.find((t)=>t.id === line.tax_rate_id);
            const rate = taxRateObj ? Number(taxRateObj.rate) : 0;
            const lineTotal = line.quantity * line.unit_price - (line.discount_amount || 0);
            const taxAmt = lineTotal - lineTotal / (1 + rate / 100);
            return sum + taxAmt;
        }
        return sum + (line.tax_amount || 0);
    }, 0).toFixed(2));
    const grandTotal = Number(Math.max(0, taxMode === 'inclusive' ? subtotal : subtotal + totalTax - globalDiscount).toFixed(2));
    const totalPaid = Number(payments.reduce((sum, p)=>sum + (p.amount || 0), 0).toFixed(2));
    const balanceDue = Number(Math.max(0, grandTotal - totalPaid).toFixed(2));
    // Reliable Settlement Flags (handles floating point precision for currency)
    const settlementTarget = Number((grandTotal + (includePrevBalance ? patientBalance : 0)).toFixed(2));
    const isSurplus = totalPaid - settlementTarget > 0.005;
    const isDeficit = settlementTarget - totalPaid > 0.005;
    const isBalanced = !isSurplus && !isDeficit;
    // World Class Debt Awareness & Autofocus Node
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompactInvoiceEditor.useEffect": ()=>{
            if (selectedPatientId) {
                setIsWalkIn(false);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$3d4820__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getPatientOutstandingBalance"])(selectedPatientId).then({
                    "CompactInvoiceEditor.useEffect": (res)=>{
                        if (res.success) setPatientBalance(res.balance || 0);
                    }
                }["CompactInvoiceEditor.useEffect"]);
                // AUTO FOCUS TO PRODUCT SEARCH
                // We use a slight delay to ensure the patient select dropdown has closed and the grid is interactive
                setTimeout({
                    "CompactInvoiceEditor.useEffect": ()=>{
                        const firstItemSearch = document.getElementById('item-search-0');
                        if (firstItemSearch) {
                            firstItemSearch.focus();
                        }
                    }
                }["CompactInvoiceEditor.useEffect"], 400);
            } else {
                setPatientBalance(0);
            }
        }
    }["CompactInvoiceEditor.useEffect"], [
        selectedPatientId
    ]);
    // World Class Focus Management: Clear any active focus when loading starts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompactInvoiceEditor.useEffect": ()=>{
            if (loading && typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
                if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'SELECT') {
                    document.activeElement.blur();
                }
            }
        }
    }["CompactInvoiceEditor.useEffect"], [
        loading
    ]);
    const handleQuickPatientCreate = async ()=>{
        if (!quickPatientName || !quickPatientPhone) return;
        setIsCreatingPatient(true);
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$18d66f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createQuickPatient"])(quickPatientName, quickPatientPhone);
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
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$16a8ef__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getBestBatch"])(item.id).then((batch)=>{
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
            line_items: lines.filter((l)=>l.description || l.product_id).map((l)=>{
                if (taxMode === 'exempt') return {
                    ...l,
                    tax_amount: 0,
                    tax_rate_id: null
                };
                if (taxMode === 'inclusive') {
                    const taxRateObj = extendedTaxRates.find((t)=>t.id === l.tax_rate_id);
                    const rate = taxRateObj ? Number(taxRateObj.rate) : 0;
                    const lineNet = l.quantity * l.unit_price - (l.discount_amount || 0);
                    const baseValue = lineNet / (1 + rate / 100);
                    const taxValue = lineNet - baseValue;
                    // For inclusive, the unit_price is already the "net" (gross - tax) or we store original price?
                    // Standard practice: unit_price should be the base (pre-tax) price.
                    return {
                        ...l,
                        unit_price: l.unit_price / (1 + rate / 100),
                        tax_amount: taxValue
                    };
                }
                return l;
            }),
            status: effectiveStatus,
            total_discount: globalDiscount,
            payments: finalPayments,
            billing_metadata: {
                ...isWalkIn ? {
                    is_walk_in: true,
                    patient_name: walkInName,
                    patient_phone: walkInPhone
                } : {},
                tax_mode: taxMode
            }
        };
        try {
            // Create or update based on activeInvoice state (which handles post-initial-fetch resolution)
            const res = await (activeInvoice?.id ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$1e1724__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateInvoice"])(activeInvoice.id, payload) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$f9eaae__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createInvoice"])(payload));
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
                    const iframe = document.createElement('iframe');
                    iframe.style.display = 'none';
                    iframe.src = `/api/billing/${invoiceId}/pdf?autoPrint=true`;
                    document.body.appendChild(iframe);
                    setTimeout(()=>{
                        if (document.body.contains(iframe)) document.body.removeChild(iframe);
                    }, 10000);
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$94aa05__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["cancelInvoice"])(initialInvoice.id);
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
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$pos$2d$device$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["posService"].initiatePayment({
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
                    const batch = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$16a8ef__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getBestBatch"])(m.id);
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[300] bg-slate-950 flex items-center justify-center p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl w-full bg-white dark:bg-slate-900 rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden border border-white/5 animate-in zoom-in-95 duration-500",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-16 flex flex-col items-center text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/20 mb-8 animate-bounce",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "h-12 w-12 text-white stroke-[3px]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                lineNumber: 1025,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1024,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl font-black italic tracking-tighter text-slate-900 dark:text-white mb-4",
                            children: "TRANSACTION FINALIZED"
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1027,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-black uppercase tracking-[0.6em] text-slate-500 mb-12",
                            children: [
                                "Serial: ",
                                initialInvoice?.invoice_number || 'NEW_ENTRY',
                                " | Ledger Node Synced"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1028,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-5 gap-4 w-full mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        const iframe = document.createElement('iframe');
                                        iframe.style.display = 'none';
                                        iframe.src = `/api/billing/${lastSavedId}/pdf?autoPrint=true`;
                                        document.body.appendChild(iframe);
                                        setTimeout(()=>{
                                            if (document.body.contains(iframe)) document.body.removeChild(iframe);
                                        }, 10000);
                                    },
                                    className: "group p-6 bg-slate-50 dark:bg-slate-800/50 rounded-[2.5rem] border border-slate-100 dark:border-white/5 hover:border-indigo-500 transition-all text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-indigo-600 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-xl shadow-indigo-600/20 group-hover:scale-110 transition-transform",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                                className: "h-6 w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1043,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1042,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] font-black uppercase tracking-widest text-slate-400",
                                            children: "Print node"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1045,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-black text-slate-900 dark:text-white mt-1",
                                            children: "RECEIPT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1046,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 1032,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: async ()=>{
                                        if (!lastSavedId) return;
                                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$5b977c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["shareInvoiceWhatsapp"])(lastSavedId);
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-emerald-500 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-xl shadow-emerald-500/20 group-hover:scale-110 transition-transform",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                className: "h-6 w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1070,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1069,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] font-black uppercase tracking-widest text-slate-400",
                                            children: "Share Node"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1072,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-black text-slate-900 dark:text-white mt-1",
                                            children: "WHATSAPP"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1073,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 1050,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleNextBill,
                                    className: "group p-8 bg-slate-50 dark:bg-slate-800/50 rounded-[2.5rem] border border-slate-100 dark:border-white/5 hover:border-emerald-500 transition-all text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-emerald-600 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-xl shadow-emerald-600/20 group-hover:scale-110 transition-transform",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "h-6 w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1082,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1081,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] font-black uppercase tracking-widest text-slate-400",
                                            children: "New Sync"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1084,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-black text-slate-900 dark:text-white mt-1",
                                            children: "NEXT BILL"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1085,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 1077,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.push(`/hms/billing/${lastSavedId}`),
                                    className: "group p-8 bg-slate-50 dark:bg-slate-800/50 rounded-[2.5rem] border border-slate-100 dark:border-white/5 hover:border-blue-500 transition-all text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-xl shadow-blue-600/20 group-hover:scale-110 transition-transform",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "h-6 w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1094,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1093,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] font-black uppercase tracking-widest text-slate-400",
                                            children: "Audit Node"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1096,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-black text-slate-900 dark:text-white mt-1",
                                            children: "LEDGER"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1097,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 1089,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: async ()=>{
                                        router.push('/hms/billing');
                                        router.refresh();
                                        if (onClose) onClose();
                                    },
                                    className: "group p-8 bg-slate-900 dark:bg-white rounded-[2.5rem] border-4 border-white/10 hover:border-indigo-500 transition-all text-center shadow-2xl shadow-slate-900/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-indigo-500 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-xl shadow-indigo-500/30 group-hover:rotate-12 transition-transform",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "h-6 w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1111,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1110,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] font-black uppercase tracking-widest text-slate-400 opacity-60",
                                            children: "Complete"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1113,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-black text-white dark:text-slate-900 mt-1",
                                            children: "EXIT TO HUB"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1114,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 1101,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1030,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 italic",
                            children: "Financial Cycle Closed • Identity Node Deselected"
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1118,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                    lineNumber: 1023,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                lineNumber: 1022,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
            lineNumber: 1021,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$billing$2f$batch$2d$selector$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BatchSelectorDialog"], {
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
                lineNumber: 1129,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-[200] bg-slate-900/40 backdrop-blur-sm flex flex-col items-center justify-center gap-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl border border-white/10 flex flex-col items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "h-12 w-12 animate-spin text-indigo-600"
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1154,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-black uppercase tracking-[0.4em] text-slate-500 animate-pulse",
                            children: "Syncing Ledger Node..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1155,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                    lineNumber: 1153,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                lineNumber: 1152,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300 no-print",
                onClick: ()=>onClose ? onClose() : router.back(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `relative flex flex-col bg-white dark:bg-slate-900 shadow-[2xl] overflow-hidden border border-slate-200 dark:border-slate-800 transition-all duration-500 ease-out ${isMaximized ? 'w-full h-full' : 'w-full max-w-[98vw] h-[95vh] rounded-[2.5rem]'}`,
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-6 py-2 border-b border-[#006666] bg-[#004d4d] z-20 no-print",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-[12px] font-black text-[#ffffcc] tracking-tight truncate",
                                                children: "FINANCIAL BILLING TERMINAL - Ziona HMS v4.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1169,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mt-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] font-black uppercase tracking-[0.2em] text-[#64ffff]",
                                                        children: "GATEWAY OF BILLING"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1171,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-1 w-1 rounded-full bg-[#006666]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1172,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[9px] font-black uppercase tracking-[0.2em] text-[#ffffcc]/60",
                                                        children: "Transaction Mode: Standard Ledger Node"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1173,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1170,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                        lineNumber: 1168,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 1167,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: loadPrescriptionItems,
                                                    disabled: !selectedPatientId || loading,
                                                    className: "flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-100 transition-all",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1182,
                                                            columnNumber: 17
                                                        }, this),
                                                        " Pull Prescription"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1181,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-4 w-[1px] bg-slate-200 mx-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1185,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center h-10 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>applyPricingMode('standard'),
                                                            className: `h-full px-3 text-[8px] font-black rounded-md transition-all ${pricingMode === 'standard' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`,
                                                            children: "INTELLIGENT"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1188,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>applyPricingMode('mrp'),
                                                            className: `h-full px-3 text-[8px] font-black rounded-md transition-all ${pricingMode === 'mrp' ? 'bg-amber-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`,
                                                            children: "MRP MODE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1194,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1187,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1180,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center h-10 bg-slate-200/50 dark:bg-slate-800/50 p-1 rounded-xl border border-slate-200/50 dark:border-slate-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsWalkIn(false),
                                                    className: `h-full px-4 text-[9px] font-black rounded-lg transition-all ${!isWalkIn ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' : 'text-slate-500'}`,
                                                    children: "REGISTERED"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1204,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setIsWalkIn(true);
                                                        setSelectedPatientId('');
                                                    },
                                                    className: `h-full px-4 text-[9px] font-black rounded-lg transition-all ${isWalkIn ? 'bg-white dark:bg-slate-700 text-pink-600 shadow-sm' : 'text-slate-500'}`,
                                                    children: "WALK-IN GUEST"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1205,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1203,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[400px]",
                                                    children: isWalkIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2 animate-in slide-in-from-right-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                value: walkInPhone,
                                                                onChange: (e)=>e.target.value.length <= 10 ? setWalkInPhone(e.target.value) : null,
                                                                disabled: isPaymentModalOpen || loading,
                                                                placeholder: "MOBILE...",
                                                                className: "h-10 bg-white dark:bg-slate-950 border-transparent focus:border-pink-500 rounded-xl text-[10px] font-black tracking-widest uppercase"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1212,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                value: walkInName,
                                                                onChange: (e)=>setWalkInName(e.target.value),
                                                                disabled: isPaymentModalOpen || loading,
                                                                placeholder: "NAME...",
                                                                className: "h-10 bg-white dark:bg-slate-950 border-transparent focus:border-pink-500 rounded-xl text-[10px] font-black tracking-widest uppercase"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1213,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1211,
                                                        columnNumber: 19
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$searchable$2d$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchableSelect"], {
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
                                                        lineNumber: 1216,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1209,
                                                    columnNumber: 15
                                                }, this),
                                                !isWalkIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>router.push(`/hms/patients/new?returnPath=${encodeURIComponent(window.location.pathname)}&autoSelect=true`),
                                                    disabled: isPaymentModalOpen || loading,
                                                    className: "h-10 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-indigo-500/20 active:scale-95 shrink-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1240,
                                                            columnNumber: 19
                                                        }, this),
                                                        " New Patient"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1235,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1208,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 border-l border-slate-200 dark:border-slate-800 pl-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsMaximized(!isMaximized),
                                                    className: "p-3 text-slate-400 hover:text-slate-900 transition-all rounded-xl hover:bg-slate-100",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1245,
                                                        columnNumber: 165
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1245,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>onClose ? onClose() : router.back(),
                                                    className: "p-2 bg-red-50 hover:bg-red-500 text-red-500 hover:text-white transition-all rounded-xl border border-red-200 hover:border-red-500 shadow-sm",
                                                    title: "Close",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1247,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1246,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1244,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 1178,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1166,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-6 py-2 bg-[#003333] border-b border-[#006666] z-10 transition-all no-print",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] font-black uppercase tracking-widest text-[#64ffff]",
                                                    children: "VOUCHER NO:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1257,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-mono font-black text-[#ffffcc] bg-[#002b2b] border border-[#006666] px-2 py-0.5 rounded",
                                                    children: provisionalNo
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1258,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1256,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-3 w-[1px] bg-[#006666]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1262,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] font-black uppercase tracking-widest text-[#64ffff]",
                                                    children: "DATE:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1264,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: date,
                                                    onChange: (e)=>setDate(e.target.value),
                                                    className: "bg-transparent border-none text-[10px] font-black text-[#ffffcc] focus:ring-0 cursor-pointer p-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1265,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1263,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-3 w-[1px] bg-[#006666]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1272,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] font-black uppercase tracking-widest text-[#64ffff]",
                                                    children: "PARTICULARS:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1274,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-black text-[#ffffcc]",
                                                    children: (isWalkIn ? walkInName || 'WALK-IN PATIENT' : selectedPatientLabel || 'WALK-IN PATIENT').toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1275,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1273,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 1255,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-6 animate-in slide-in-from-right-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#002b2b] p-1 rounded-xl flex items-center gap-2 border border-[#006666]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[8px] font-black uppercase tracking-widest text-[#64ffff] px-2 italic",
                                                    children: "GST Mode:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1283,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-1",
                                                    children: [
                                                        {
                                                            m: 'exempt',
                                                            l: 'Unregistered'
                                                        },
                                                        {
                                                            m: 'inclusive',
                                                            l: 'B2C (Incl)'
                                                        },
                                                        {
                                                            m: 'exclusive',
                                                            l: 'B2B (Excl)'
                                                        }
                                                    ].map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setTaxMode(opt.m),
                                                            className: `px-3 py-1.5 rounded-lg text-[9px] font-black uppercase transition-all ${taxMode === opt.m ? 'bg-[#64ffff] text-[#003333] shadow-lg scale-105' : 'text-[#64ffff]/50 hover:text-[#64ffff] hover:bg-[#004d4d]'}`,
                                                            children: opt.l
                                                        }, opt.m, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1290,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1284,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1282,
                                            columnNumber: 13
                                        }, this),
                                        patientBalance > 0 && !isWalkIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 bg-amber-500/10 border border-amber-500/20 px-4 py-1 rounded-full animate-in slide-in-from-right-4 duration-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "relative flex h-2 w-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1307,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "relative inline-flex rounded-full h-2 w-2 bg-amber-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1308,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1306,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] font-black uppercase tracking-[0.2em] text-amber-600",
                                                            children: "Previous Balance Detected:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1310,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1305,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-black text-amber-700 bg-amber-500/20 px-2 rounded-md",
                                                    children: [
                                                        currency,
                                                        patientBalance.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1312,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setIsFetchingLedger(true);
                                                        setIsLedgerOpen(true);
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$e624b4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getPatientLedger"])(selectedPatientId).then((res)=>{
                                                            if (res.success) setLedgerData(res.data || []);
                                                            setIsFetchingLedger(false);
                                                        });
                                                    },
                                                    className: "text-[8px] font-black uppercase tracking-[0.2em] text-amber-600 hover:text-amber-800 underline active:scale-95 transition-all",
                                                    children: "View Ledger Node"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1313,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1304,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 opacity-60",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-1 w-1 rounded-full bg-emerald-500 animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1330,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[8px] font-black uppercase tracking-widest text-emerald-600",
                                                    children: "Secure Node Enabled"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1331,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1329,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 1281,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1254,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-auto p-6 bg-slate-50/20 dark:bg-slate-950/20 space-y-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-[1400px] mx-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white dark:bg-slate-950 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "bg-[#006666] text-[9px] font-black uppercase tracking-[0.3em] text-[#64ffff] border-b border-[#008080]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-8 py-2",
                                                                children: "Item Description"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1343,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-2 w-24",
                                                                children: "Type"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1344,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-2 w-28 text-center",
                                                                children: "Qty"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1345,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-2 w-32",
                                                                children: "UOM"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1346,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-2 w-32",
                                                                children: "Rate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1347,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-2 w-36",
                                                                children: "Tax %"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1348,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-8 py-2 w-36 text-right",
                                                                children: "Total"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1349,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-2 w-12"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1350,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1342,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1341,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "divide-y divide-[#003333] border-b border-[#006666] bg-[#004d4d] text-[#ffffcc] [&_input]:text-[#ffffcc] [&_select]:text-[#ffffcc]",
                                                    children: lines.map((line, index)=>{
                                                        const lineTotal = line.quantity * line.unit_price;
                                                        const isZeroLine = (line.product_id || line.description) && lineTotal === 0;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: `group transition-all relative ${isZeroLine ? 'bg-rose-500/[0.03] dark:bg-rose-500/[0.05]' : 'hover:bg-slate-50/50 dark:hover:bg-slate-900/50'}`,
                                                            children: [
                                                                isZeroLine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute left-0 top-0 bottom-0 w-1 bg-rose-500 animate-pulse z-10"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1364,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-8 py-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$searchable$2d$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchableSelect"], {
                                                                        inputId: index === 0 ? 'item-search-0' : `item-search-${index}`,
                                                                        value: line.product_id,
                                                                        valueLabel: line.description,
                                                                        options: itemOptions.slice(0, 20),
                                                                        onChange: (v)=>updateLine(line.id, 'product_id', v),
                                                                        disabled: isPaymentModalOpen || loading,
                                                                        variant: "ghost",
                                                                        isDark: true,
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
                                                                        lineNumber: 1367,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1366,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col gap-1 items-start",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                                                lineNumber: 1399,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            line.batch_no && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: async ()=>{
                                                                                    if (!line.product_id) return;
                                                                                    const batches = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$891dab__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getProductBatches"])(line.product_id);
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
                                                                                lineNumber: 1416,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1398,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1397,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
                                                                        lineNumber: 1438,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1437,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        className: "w-full h-10 bg-[#003333] text-[#ffffcc] border border-[#006666] rounded-lg px-2 text-[9px] font-black tracking-widest outline-none focus:ring-1 focus:ring-[#64ffff]",
                                                                        value: line.uom || '',
                                                                        onChange: (e)=>updateLine(line.id, 'uom', e.target.value),
                                                                        disabled: isPaymentModalOpen || loading,
                                                                        children: getUomOptions(line.item_type, line.uom).map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: u,
                                                                                children: u
                                                                            }, u, false, {
                                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                lineNumber: 1462,
                                                                                columnNumber: 31
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1460,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1459,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                        type: "number",
                                                                        value: line.unit_price,
                                                                        onChange: (e)=>updateLine(line.id, 'unit_price', parseFloat(e.target.value) || 0),
                                                                        disabled: isPaymentModalOpen || loading,
                                                                        className: "h-10 bg-transparent border-none font-mono font-black text-[#ffffcc] text-sm focus:ring-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1466,
                                                                        columnNumber: 51
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1466,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                className: "w-full h-8 bg-[#003333] text-[#ffffcc] border border-[#006666] rounded-lg px-2 text-[8px] font-black outline-none focus:ring-1 focus:ring-[#64ffff] disabled:opacity-50",
                                                                                value: taxMode === 'exempt' ? '' : line.tax_rate_id || '',
                                                                                onChange: (e)=>updateLine(line.id, 'tax_rate_id', e.target.value),
                                                                                disabled: isPaymentModalOpen || loading || taxMode === 'exempt',
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "",
                                                                                        children: "0% (No Tax)"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                        lineNumber: 1475,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    extendedTaxRates.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: t.id,
                                                                                            children: t.name.includes(t.rate.toString()) ? t.name : `${t.name} (${t.rate}%)`
                                                                                        }, t.id, false, {
                                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                            lineNumber: 1477,
                                                                                            columnNumber: 33
                                                                                        }, this))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                lineNumber: 1469,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            line.tax_amount > 0 && taxMode !== 'exempt' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[9px] font-bold text-emerald-600 text-right pr-1 italic",
                                                                                children: taxMode === 'inclusive' ? '(Incl)' : `+ ${currency}${line.tax_amount.toFixed(2)} Tax`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                lineNumber: 1483,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1468,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1467,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-8 py-3 text-right font-black text-lg italic tracking-tighter text-[#ffffcc]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: isZeroLine ? 'text-rose-500 animate-pulse' : '',
                                                                        children: [
                                                                            currency,
                                                                            (taxMode === 'inclusive' || taxMode === 'exempt' ? lineTotal : lineTotal + (line.tax_amount || 0)).toFixed(2)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1490,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1489,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleRemoveItem(line.id),
                                                                        disabled: isPaymentModalOpen || loading,
                                                                        className: "text-slate-300 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1495,
                                                                            columnNumber: 213
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1495,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1494,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, line.id, true, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1359,
                                                            columnNumber: 23
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1353,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1340,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-900",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleAddItem,
                                                disabled: isPaymentModalOpen || loading,
                                                className: "flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] text-indigo-600 hover:text-indigo-800 transition-all group disabled:opacity-50 disabled:cursor-not-allowed",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white dark:bg-slate-800 p-1.5 rounded-lg border border-indigo-200 dark:border-indigo-900/40 shadow-sm group-hover:rotate-90 transition-transform",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1504,
                                                            columnNumber: 184
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1504,
                                                        columnNumber: 19
                                                    }, this),
                                                    "ADD LINE"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1503,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1502,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 1339,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                lineNumber: 1338,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1337,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-[#0c1222] border-t border-slate-100 dark:border-slate-800 px-10 py-6 z-20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-[1400px] mx-auto flex flex-col xl:flex-row justify-between items-center gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 bg-indigo-500/10 rounded-2xl border border-indigo-500/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                                            className: "h-6 w-6 text-indigo-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1518,
                                                            columnNumber: 97
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1518,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1",
                                                                children: "Queue Load"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1520,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xl font-black text-slate-900 dark:text-white italic tracking-tighter",
                                                                children: [
                                                                    lines.filter((l)=>l.description || l.product_id).length,
                                                                    " Active"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1521,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1519,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1517,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                            className: "h-6 w-6 text-emerald-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1525,
                                                            columnNumber: 99
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1525,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1",
                                                                children: "Settlement Total"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1527,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-4xl font-black text-emerald-600 tracking-tighter italic drop-shadow-[0_0_20px_rgba(5,150,105,0.1)]",
                                                                children: [
                                                                    currency,
                                                                    grandTotal.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1528,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1526,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1524,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                        lineNumber: 1516,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-4 w-full xl:w-auto",
                                        children: initialInvoice?.status === 'cancelled' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-10 py-4 bg-rose-500/10 border-2 border-rose-500/20 rounded-2xl flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "h-6 w-6 text-rose-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1537,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-rose-600 font-black italic tracking-wider uppercase",
                                                    children: "VOIDED TRANSACTION • NO EDITS PERMITTED"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1538,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1536,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                isAdmin && initialInvoice?.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleCancelBill,
                                                    disabled: loading,
                                                    className: "px-6 py-4 text-[10px] font-black text-rose-500 uppercase tracking-widest hover:bg-rose-500/10 border border-rose-500/20 rounded-2xl transition-all mr-2",
                                                    children: "Void / Cancel Node"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1543,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-x-0 bottom-0 h-0.5 bg-white/20 animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1578,
                                                            columnNumber: 21
                                                        }, this),
                                                        "COLLECT SETTLEMENT ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "h-6 w-6 group-hover:translate-x-1 transition-transform"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1579,
                                                            columnNumber: 40
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1552,
                                                    columnNumber: 19
                                                }, this),
                                                !isRegistrationFee && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                            lineNumber: 1583,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                            lineNumber: 1591,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1582,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                        lineNumber: 1534,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                lineNumber: 1514,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1513,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                            open: isPaymentModalOpen,
                            onOpenChange: setIsPaymentModalOpen,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                                onInteractOutside: (e)=>e.preventDefault(),
                                onPointerDownOutside: (e)=>e.preventDefault(),
                                onEscapeKeyDown: (e)=>e.preventDefault(),
                                className: "z-[400] max-w-4xl p-0 overflow-hidden bg-white dark:bg-[#0a0f1e] border-none shadow-[0_60px_200px_rgba(0,0,0,0.2)] dark:shadow-[0_60px_200px_rgba(0,0,0,1)] rounded-[3rem] ring-1 ring-slate-200 dark:ring-white/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row min-h-[500px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 bg-slate-50 dark:bg-slate-900 border-r border-slate-100 dark:border-white/5 p-10 flex flex-col gap-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-slate-400 font-black tracking-[0.4em] text-[8px] uppercase mb-6",
                                                            children: "Financial Audit Node"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1619,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                                                            children: "Bill Total"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1622,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xl font-black text-slate-900 dark:text-white italic",
                                                                            children: [
                                                                                currency,
                                                                                grandTotal.toFixed(2)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1623,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1621,
                                                                    columnNumber: 21
                                                                }, this),
                                                                patientBalance > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-center bg-amber-500/5 p-4 rounded-2xl border border-amber-500/10",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-[9px] font-black text-amber-600 uppercase tracking-widest",
                                                                                    children: "Previous Debt"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                    lineNumber: 1628,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-black text-amber-700",
                                                                                    children: [
                                                                                        currency,
                                                                                        patientBalance.toFixed(2)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                    lineNumber: 1629,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1627,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>setIncludePrevBalance(!includePrevBalance),
                                                                            className: `px-4 py-2 rounded-xl text-[8px] font-black uppercase tracking-widest transition-all ${includePrevBalance ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20' : 'bg-white dark:bg-slate-800 text-amber-600 border border-amber-200 dark:border-amber-900'}`,
                                                                            children: includePrevBalance ? 'INCLUDED' : 'ADD TO TALLY'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1631,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1626,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-px bg-slate-200 dark:bg-slate-800 w-full"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1639,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] font-black text-indigo-600 uppercase tracking-widest",
                                                                            children: "Settlement Target"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1641,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-3xl font-black text-slate-900 dark:text-white italic tracking-tighter",
                                                                            children: [
                                                                                currency,
                                                                                (grandTotal + (includePrevBalance ? patientBalance : 0)).toFixed(2)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1642,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1640,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1620,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1618,
                                                    columnNumber: 17
                                                }, this),
                                                payments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3 flex-1 overflow-auto max-h-[180px] pr-2 custom-scrollbar",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[8px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2",
                                                            children: "Payment Stream"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1652,
                                                            columnNumber: 21
                                                        }, this),
                                                        payments.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between bg-white dark:bg-slate-800/40 p-3 rounded-2xl border border-slate-100 dark:border-white/5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "p-2 rounded-xl bg-slate-100 dark:bg-slate-900",
                                                                                children: [
                                                                                    p.method === 'cash' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__["Banknote"], {
                                                                                        className: "h-3 w-3 text-emerald-500"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                        lineNumber: 1657,
                                                                                        columnNumber: 53
                                                                                    }, this),
                                                                                    p.method === 'upi' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__["QrCode"], {
                                                                                        className: "h-3 w-3 text-indigo-500"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                        lineNumber: 1658,
                                                                                        columnNumber: 52
                                                                                    }, this),
                                                                                    p.method === 'card' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                                                                        className: "h-3 w-3 text-blue-500"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                        lineNumber: 1659,
                                                                                        columnNumber: 53
                                                                                    }, this),
                                                                                    p.method === 'bank_transfer' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                                        className: "h-3 w-3 text-amber-500"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                        lineNumber: 1660,
                                                                                        columnNumber: 62
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                lineNumber: 1656,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[9px] font-black uppercase tracking-widest text-slate-500",
                                                                                children: p.method
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                lineNumber: 1662,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1655,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs font-black text-slate-900 dark:text-white",
                                                                                children: [
                                                                                    currency,
                                                                                    p.amount.toFixed(2)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                lineNumber: 1665,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>setPayments(payments.filter((_, i)=>i !== idx)),
                                                                                className: "text-slate-300 hover:text-red-500 transition-colors",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                    className: "h-3 w-3"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                    lineNumber: 1666,
                                                                                    columnNumber: 165
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                lineNumber: 1666,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1664,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1654,
                                                                columnNumber: 23
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1651,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `mt-auto p-6 rounded-3xl border transition-all duration-500 ${!isBalanced ? 'bg-amber-500/10 border-amber-500/30 animate-pulse' : 'bg-slate-200/50 dark:bg-slate-800/50 border-white/5'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${isDeficit ? 'bg-amber-100 text-amber-700' : isSurplus ? 'bg-emerald-100 text-emerald-700' : 'bg-indigo-100 text-indigo-700'}`,
                                                            children: isDeficit ? 'Partial / Credit' : isSurplus ? 'Advance / Excess' : 'Balanced'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1675,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-bold text-slate-600 dark:text-slate-400 mt-4 leading-relaxed tracking-tight underline-offset-4 decoration-dotted decoration-slate-300",
                                                            children: isDeficit ? `Deficit: ${currency}${Math.max(0, settlementTarget - totalPaid).toFixed(2)} to be carried as debt.` : isSurplus ? `Surplus: ${currency}${(totalPaid - settlementTarget).toFixed(2)} will be credited.` : `Transaction perfectly tallied. Ready for sync.`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1678,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1674,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1617,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-[1.2] p-10 flex flex-col gap-10 bg-white dark:bg-[#0a0f1e]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group/input relative",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-700 font-black text-xl italic",
                                                                    children: currency
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1697,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                                    lineNumber: 1698,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1696,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1695,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1694,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
                                                    children: [
                                                        {
                                                            id: 'cash',
                                                            label: 'CASH',
                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__["Banknote"],
                                                            color: 'text-emerald-500 dark:text-emerald-400'
                                                        },
                                                        {
                                                            id: 'upi',
                                                            label: 'UPI / QR',
                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__["QrCode"],
                                                            color: 'text-indigo-600 dark:text-indigo-400'
                                                        },
                                                        {
                                                            id: 'card',
                                                            label: 'CARD',
                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
                                                            color: 'text-blue-600 dark:text-blue-400'
                                                        },
                                                        {
                                                            id: 'bank_transfer',
                                                            label: 'BANK TRANSFER',
                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"],
                                                            color: 'text-amber-600 dark:text-amber-400'
                                                        }
                                                    ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                                posStatus === 'connected' && (m.id === 'card' || m.id === 'upi') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute -top-2 -right-2 bg-emerald-500 text-white text-[6px] font-black px-1.5 py-0.5 rounded-full shadow-lg animate-pulse uppercase",
                                                                    children: "Device Active"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1778,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-white/10 group-hover:border-current transition-all",
                                                                    children: isPOSLoading && (m.id === 'card' || m.id === 'upi') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                        className: "h-4 w-4 animate-spin text-indigo-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1782,
                                                                        columnNumber: 80
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(m.icon, {
                                                                        className: `h-4 w-4 ${m.color}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 1782,
                                                                        columnNumber: 143
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1781,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[8px] font-black tracking-[0.2em] text-slate-500 dark:text-white opacity-60 group-hover:opacity-100 uppercase",
                                                                    children: isPOSLoading && (m.id === 'card' || m.id === 'upi') ? 'PROCESSING...' : m.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1784,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, m.id, true, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1745,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1738,
                                                    columnNumber: 17
                                                }, this),
                                                gatewayConfig?.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-8 w-8 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                                className: "h-4 w-4 text-yellow-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1809,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1808,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] font-black uppercase tracking-[0.2em] opacity-80 leading-none mb-1",
                                                                    children: "Active Gateway"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1812,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-black tracking-tight uppercase leading-none",
                                                                    children: "Pay via Razorpay QR (Auto-Confirmed)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1813,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1811,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1794,
                                                    columnNumber: 19
                                                }, this),
                                                gatewayConfig?.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-8 w-8 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors",
                                                            children: isSendingLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                className: "h-4 w-4 animate-spin text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1836,
                                                                columnNumber: 40
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                                                className: "h-4 w-4 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1836,
                                                                columnNumber: 98
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1835,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] font-black uppercase tracking-[0.2em] opacity-80 leading-none mb-1",
                                                                    children: "Contact-less Pay"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1839,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-black tracking-tight uppercase leading-none",
                                                                    children: isSendingLink ? 'Requesting...' : 'Send Payment Link to WhatsApp'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1840,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1838,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1820,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-3 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                            lineNumber: 1850,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                            lineNumber: 1857,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                className: "h-5 w-5 animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1894,
                                                                columnNumber: 32
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: isDeficit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        "POST AS CREDIT ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1897,
                                                                            columnNumber: 44
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true) : isSurplus ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        "RECEIVE ADVANCE ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1899,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        "FINALIZE SETTLEMENT ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                            className: "h-5 w-5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1901,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true)
                                                            }, void 0, false)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1869,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1849,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[8px] font-black text-center text-slate-600 uppercase tracking-[0.4em] opacity-40",
                                                    children: "Standard Institutional Billing & Settlement Node"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1907,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1690,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 1615,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                lineNumber: 1609,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1608,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                            open: isRazorpayQROpen,
                            onOpenChange: setIsRazorpayQROpen,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                                className: "z-[500] max-w-md p-8 bg-white dark:bg-slate-900 rounded-[3rem] border-none shadow-2xl overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 mb-6 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-800/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                    className: "h-3 w-3 text-indigo-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1918,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400",
                                                    children: "Dynamic Payment Gateway"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1919,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1917,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-black text-slate-900 dark:text-white italic mb-2",
                                            children: "SCAN TO PAY"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1922,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium text-slate-500 mb-8",
                                            children: [
                                                "Pay precisely ",
                                                currency,
                                                (razorpayQRAmount || 0).toFixed(2),
                                                " to avoid payment failure"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1923,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative mb-8 flex justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `transition-all duration-300 ${razorpayStatus === 'loading' ? 'blur-md opacity-50' : ''}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-6 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] inline-block",
                                                        children: razorpayQRUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QRCodeSVG"], {
                                                            value: razorpayQRUrl,
                                                            size: 180,
                                                            level: "H",
                                                            includeMargin: false
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1929,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-[180px] w-[180px] flex items-center justify-center bg-slate-50 rounded-xl",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                className: "h-8 w-8 text-indigo-400 animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 1932,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1931,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1927,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1926,
                                                    columnNumber: 17
                                                }, this),
                                                razorpayStatus === 'loading' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex flex-col items-center justify-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "h-10 w-10 text-indigo-600 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1940,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-black uppercase tracking-widest text-indigo-600",
                                                            children: "Generating QR..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1941,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1939,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1925,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-100 dark:border-white/5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[8px] font-black text-slate-400 uppercase tracking-widest",
                                                                    children: "Order ID"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1949,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] font-mono font-bold text-slate-600 dark:text-slate-300",
                                                                    children: razorpayOrderId || 'PENDING'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1950,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1948,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center bg-indigo-500/10 p-3 rounded-2xl",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[9px] font-black text-indigo-600 uppercase tracking-widest flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                            className: "h-3 w-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 1954,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        " Waiting for Payment"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1953,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-black text-indigo-700 animate-pulse",
                                                                    children: "LIVE"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 1956,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1952,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1947,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            onClick: ()=>setIsRazorpayQROpen(false),
                                                            className: "h-14 rounded-2xl font-black uppercase text-[10px] tracking-widest border-slate-200 dark:border-slate-800 focus:ring-0",
                                                            children: "Cancel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1961,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            onClick: handleRazorpayManualConfirm,
                                                            className: "h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-lg shadow-emerald-600/20 active:scale-95 border-none",
                                                            children: "I have Paid"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1964,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1960,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                        handlePopOutDisplay();
                                                    },
                                                    className: "w-full h-12 rounded-xl text-[9px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 flex items-center justify-center gap-3 transition-all border border-indigo-100 dark:border-indigo-900/40 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                            className: `h-4 w-4 ${isCustomerDisplayOpen ? 'animate-pulse text-emerald-500' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1977,
                                                            columnNumber: 19
                                                        }, this),
                                                        isCustomerDisplayOpen ? 'MIRROR ACTIVE (PATIENT SCREEN)' : 'MIRROR TO PATIENT DISPLAY'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1972,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 p-4 bg-amber-50 dark:bg-amber-900/10 rounded-2xl border border-amber-100 dark:border-amber-900/20",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                            className: "h-4 w-4 text-amber-600 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1982,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-left leading-relaxed text-amber-700 dark:text-amber-400 font-medium italic",
                                                            children: "Open any UPI App (PhonePe, GPay, Paytm) and scan this QR code. The system will automatically detect the payment via cloud hook."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 1983,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 1981,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 1946,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                    lineNumber: 1916,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                lineNumber: 1915,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1914,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                            open: isQuickPatientOpen,
                            onOpenChange: setIsQuickPatientOpen,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                                className: "z-[400] max-w-md bg-white dark:bg-[#0a0f1e] text-slate-900 dark:text-white rounded-[2rem] border-none p-12 shadow-[0_50px_100px_rgba(0,0,0,0.5)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                className: "text-3xl font-black italic tracking-tighter text-slate-900 dark:text-white",
                                                children: "Quick Identification"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1995,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                                className: "text-xs font-black uppercase tracking-[0.2em] text-slate-500",
                                                children: [
                                                    "Register new medical identity node for ",
                                                    quickPatientName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1995,
                                                columnNumber: 161
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                        lineNumber: 1995,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-8 py-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 pl-2",
                                                        children: "Patient Full Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1998,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: quickPatientName,
                                                        onChange: (e)=>setQuickPatientName(e.target.value),
                                                        className: "h-14 bg-slate-50 dark:bg-slate-950 border-slate-100 dark:border-slate-800 rounded-2xl text-lg font-black tracking-widest transition-all focus:ring-4 focus:ring-indigo-500/10",
                                                        placeholder: "NAME...",
                                                        autoFocus: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 1999,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 1997,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 pl-2",
                                                        children: "Sync Mobile Terminal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2002,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: quickPatientPhone,
                                                        onChange: (e)=>setQuickPatientPhone(e.target.value),
                                                        className: "h-14 bg-slate-50 dark:bg-slate-950 border-slate-100 dark:border-slate-800 rounded-2xl text-lg font-black tracking-widest transition-all focus:ring-4 focus:ring-indigo-500/10",
                                                        placeholder: "+91..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2003,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2001,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                        lineNumber: 1996,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                onClick: ()=>setIsQuickPatientOpen(false),
                                                className: "text-[10px] font-black uppercase tracking-widest py-6",
                                                children: "Abort"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2006,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleQuickPatientCreate,
                                                disabled: !quickPatientPhone || isCreatingPatient,
                                                className: "bg-indigo-600 hover:bg-indigo-700 h-14 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] px-12 text-white shadow-2xl shadow-indigo-500/30 transition-all flex items-center gap-3",
                                                children: isCreatingPatient ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "h-5 w-5 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 2006,
                                                    columnNumber: 492
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        "Verify & Initialize ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 2006,
                                                            columnNumber: 561
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2006,
                                                columnNumber: 176
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                        lineNumber: 2006,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                lineNumber: 1994,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 1993,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                            open: isLedgerOpen,
                            onOpenChange: setIsLedgerOpen,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                                className: "z-[400] max-w-4xl p-6 bg-white dark:bg-[#0a0f1e] text-slate-900 dark:text-white rounded-[2rem] border-none p-0 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.4)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                                className: "mb-8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                                    className: "4xl font-black italic tracking-tighter text-slate-900 dark:text-white",
                                                                    children: "Patient Ledger Audit"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 2017,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                                                    className: "text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mt-2",
                                                                    children: "Full financial reconciliation for patient identity node"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 2018,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 2016,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-2xl text-right",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[9px] font-black text-amber-600 uppercase tracking-widest",
                                                                    children: "Total Liability"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 2021,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-2xl font-black text-amber-700",
                                                                    children: [
                                                                        currency,
                                                                        patientBalance.toFixed(2)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 2022,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 2020,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 2015,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2014,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "max-h-[500px] overflow-y-auto pr-4 custom-scrollbar",
                                                children: isFetchingLedger ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center justify-center py-20 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "h-10 w-10 text-indigo-500 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 2030,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-black uppercase tracking-[0.4em] text-slate-400",
                                                            children: "Syncing Ledger Node..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 2031,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 2029,
                                                    columnNumber: 19
                                                }, this) : ledgerData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center py-20",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-black uppercase tracking-widest text-slate-400 italic",
                                                        children: "No financial movements found for this identity node."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2035,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 2034,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    className: "w-full text-left border-collapse",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "border-b border-slate-100 dark:border-white/5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "py-4 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400",
                                                                        children: "Date/Time"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 2041,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "py-4 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400",
                                                                        children: "Reference"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 2042,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "py-4 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400",
                                                                        children: "Account Node"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 2043,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "py-4 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-right",
                                                                        children: "Debit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 2044,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "py-4 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-right",
                                                                        children: "Credit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                        lineNumber: 2045,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 2040,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 2039,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            className: "divide-y divide-slate-50 dark:divide-white/5",
                                                            children: ledgerData.map((line, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    className: "group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-4 font-mono text-[10px] text-slate-500",
                                                                            children: new Date(line.journal_entries?.date).toLocaleDateString()
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 2051,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-[11px] font-black text-slate-900 dark:text-white uppercase truncate max-w-[150px]",
                                                                                    children: line.journal_entries?.ref || 'N/A'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                    lineNumber: 2055,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-[8px] font-black text-slate-400 uppercase tracking-widest",
                                                                                    children: line.journal_entries?.journals?.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                    lineNumber: 2056,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 2054,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-4",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] font-black text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-2 py-0.5 rounded uppercase",
                                                                                children: line.accounts?.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                                lineNumber: 2059,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 2058,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-4 text-right font-mono text-xs font-black text-rose-500",
                                                                            children: line.debit > 0 ? `${currency}${Number(line.debit).toFixed(2)}` : '-'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 2061,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-4 text-right font-mono text-xs font-black text-emerald-500",
                                                                            children: line.credit > 0 ? `${currency}${Number(line.credit).toFixed(2)}` : '-'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                            lineNumber: 2064,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, idx, true, {
                                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                    lineNumber: 2050,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 2048,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 2038,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2027,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                        lineNumber: 2013,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-8 bg-slate-50 dark:bg-slate-900 flex justify-end",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>setIsLedgerOpen(false),
                                            variant: "secondary",
                                            className: "px-8 rounded-2xl font-black text-[10px] uppercase tracking-widest py-6",
                                            children: "Close Audit Terminal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                            lineNumber: 2075,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                        lineNumber: 2074,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                lineNumber: 2012,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 2011,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                            open: !!showUPIQR,
                            onOpenChange: ()=>setShowUPIQR(null),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                                className: "z-[500] max-w-sm p-0 bg-white dark:bg-[#0a0f1e] rounded-[2.5rem] border-none shadow-[0_50px_100px_rgba(99,102,241,0.2)] overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-indigo-600 to-purple-700 p-8 text-center relative overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-spin-slow bg-[radial-gradient(circle,white_0%,transparent_70%)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 2088,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2087,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white/20 p-3 rounded-2xl backdrop-blur-md inline-flex mb-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__["QrCode"], {
                                                            className: "h-6 w-6 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                            lineNumber: 2092,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2091,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-black text-white italic tracking-tighter uppercase mb-1",
                                                        children: "UPI Smart Pay"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2094,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-black text-indigo-100 uppercase tracking-widest opacity-80",
                                                        children: "Scan with any UPI App"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2095,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2090,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                        lineNumber: 2086,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-10 flex flex-col items-center gap-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50 relative group",
                                                children: [
                                                    showUPIQR && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QRCodeSVG"], {
                                                        value: `upi://pay?pa=${showUPIQR.vpa}&pn=Hospital&am=${showUPIQR.amount}&cu=INR&tn=Invoice`,
                                                        size: 220,
                                                        level: "H",
                                                        includeMargin: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2102,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2109,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2100,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2",
                                                        children: "Settlement Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2113,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-4xl font-black text-slate-900 dark:text-white tracking-tighter italic",
                                                        children: [
                                                            currency,
                                                            showUPIQR?.amount.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2114,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2112,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowUPIQR(null),
                                                className: "w-full h-14 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all",
                                                children: "Done / Paid"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2119,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9px] font-bold text-slate-400 max-w-[200px] text-center uppercase tracking-tight leading-relaxed",
                                                children: "Please verify payment success on your mobile / machine before closing this terminal."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2126,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                        lineNumber: 2099,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                lineNumber: 2085,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 2084,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                            open: isErrorDialogOpen,
                            onOpenChange: setIsErrorDialogOpen,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                                className: "z-[400] max-w-md p-6 bg-white dark:bg-slate-900 border-rose-500/30 rounded-[2rem] shadow-2xl shadow-rose-500/20 text-center flex flex-col items-center border-none overflow-hidden shadow-[0_50px_100px_rgba(255,0,0,0.5)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-rose-600 p-8 flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white/20 p-3 rounded-2xl backdrop-blur-md",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                    className: "h-8 w-8 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 2138,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2137,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-black text-white italic tracking-tighter uppercase",
                                                        children: errorDetails.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2141,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-black text-rose-100 uppercase tracking-widest",
                                                        children: "System Sync Failure"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2142,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2140,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                        lineNumber: 2136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-white/5 mb-8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-mono font-medium text-slate-600 dark:text-slate-300 break-words select-text",
                                                    children: errorDetails.message
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                    lineNumber: 2147,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2146,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            navigator.clipboard.writeText(errorDetails.message);
                                                            toast({
                                                                title: "Copied!",
                                                                description: "Error message copied to clipboard."
                                                            });
                                                        },
                                                        className: "flex-1 flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 h-14 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                                lineNumber: 2159,
                                                                columnNumber: 19
                                                            }, this),
                                                            " Copy Error Code"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2152,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setIsErrorDialogOpen(false),
                                                        className: "px-8 bg-slate-100 dark:bg-slate-800 text-slate-500 h-14 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all",
                                                        children: "Close"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                        lineNumber: 2161,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                                lineNumber: 2151,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                        lineNumber: 2145,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                                lineNumber: 2135,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                            lineNumber: 2134,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                    lineNumber: 1162,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/billing/invoice-editor-compact.tsx",
                lineNumber: 1161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(CompactInvoiceEditor, "YJi/UN5ETc9k9VgzE3/KH1hxLSc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = CompactInvoiceEditor;
var _c;
__turbopack_context__.k.register(_c, "CompactInvoiceEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_70936cbf._.js.map