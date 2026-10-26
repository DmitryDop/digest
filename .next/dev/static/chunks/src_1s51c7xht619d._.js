(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/src/components/article-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArticleCard",
    ()=>ArticleCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2d$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format-date.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$article$2d$cover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/article-cover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$article$2d$card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/article-card.module.css [app-client] (css module)");
;
;
;
;
function ArticleCard({ article, index }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$article$2d$card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
        style: {
            "--index": index
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$article$2d$card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
                href: article.url,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": `${article.title} — открыть статью в новой вкладке`
            }, void 0, false, {
                fileName: "[project]/src/components/article-card.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$article$2d$card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inner,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$article$2d$cover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArticleCover"], {
                        src: article.cover,
                        alt: article.coverAlt,
                        source: article.source,
                        priority: index < 3
                    }, void 0, false, {
                        fileName: "[project]/src/components/article-card.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$article$2d$card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].body,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$article$2d$card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].meta,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$article$2d$card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].source,
                                        children: article.source
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/article-card.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$article$2d$card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/article-card.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                        dateTime: article.publishedAt,
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2d$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatShortDate"])(article.publishedAt)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/article-card.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$article$2d$card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/article-card.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            article.readingTime,
                                            " мин"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/article-card.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/article-card.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$article$2d$card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: article.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/article-card.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$article$2d$card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summary,
                                children: article.summary
                            }, void 0, false, {
                                fileName: "[project]/src/components/article-card.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$article$2d$card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tags,
                                "aria-label": "Темы материала",
                                children: article.topics.map((topic)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$article$2d$card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tag,
                                        children: topic
                                    }, topic, false, {
                                        fileName: "[project]/src/components/article-card.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/article-card.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/article-card.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/article-card.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/article-card.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = ArticleCard;
var _c;
__turbopack_context__.k.register(_c, "ArticleCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/article-cover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArticleCover",
    ()=>ArticleCover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$article$2d$card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/article-card.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ArticleCover({ src, alt, source, priority }) {
    _s();
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const imageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleCover.useEffect": ()=>{
            const image = imageRef.current;
            if (image?.complete && image.naturalWidth > 0) {
                setLoaded(true);
            }
        }
    }["ArticleCover.useEffect"], [
        src
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$article$2d$card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].media,
        "data-state": failed ? "failed" : loaded ? "loaded" : "loading",
        children: [
            !failed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                ref: imageRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$article$2d$card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cover,
                "data-loaded": loaded,
                src: src,
                alt: alt,
                fill: true,
                sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
                priority: priority,
                onLoad: ()=>setLoaded(true),
                onError: ()=>setFailed(true)
            }, void 0, false, {
                fileName: "[project]/src/components/article-cover.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this),
            !failed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$article$2d$card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skeleton,
                "data-hidden": loaded,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/article-cover.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this),
            failed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$article$2d$card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fallback,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$article$2d$card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fallbackSource,
                        children: source
                    }, void 0, false, {
                        fileName: "[project]/src/components/article-cover.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$article$2d$card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fallbackText,
                        children: "Обложка недоступна"
                    }, void 0, false, {
                        fileName: "[project]/src/components/article-cover.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/article-cover.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/article-cover.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(ArticleCover, "MasEnabvVz/Ey5L9h0IHxrWrUUA=");
_c = ArticleCover;
var _c;
__turbopack_context__.k.register(_c, "ArticleCover");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/digest-experience.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DigestExperience",
    ()=>DigestExperience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/site-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/toolbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$article$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/article-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/empty-state.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/site-footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$digest$2d$experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/digest-experience.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const INITIAL_COUNT = 12;
const PAGE_SIZE = 6;
function normalize(value) {
    return value.toLocaleLowerCase("ru-RU").replace(/ё/g, "е").trim();
}
function DigestExperience({ articles }) {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const deferredQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(query);
    const [selectedTopics, setSelectedTopics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_COUNT);
    const filteredArticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DigestExperience.useMemo[filteredArticles]": ()=>{
            const normalizedQuery = normalize(deferredQuery);
            return articles.filter({
                "DigestExperience.useMemo[filteredArticles]": (article)=>{
                    const matchesTopic = selectedTopics.length === 0 || selectedTopics.some({
                        "DigestExperience.useMemo[filteredArticles]": (topic)=>article.topics.includes(topic)
                    }["DigestExperience.useMemo[filteredArticles]"]);
                    if (!matchesTopic) return false;
                    if (!normalizedQuery) return true;
                    const haystack = normalize([
                        article.title,
                        article.summary,
                        article.source,
                        ...article.topics
                    ].join(" "));
                    return haystack.includes(normalizedQuery);
                }
            }["DigestExperience.useMemo[filteredArticles]"]);
        }
    }["DigestExperience.useMemo[filteredArticles]"], [
        articles,
        deferredQuery,
        selectedTopics
    ]);
    const visibleArticles = filteredArticles.slice(0, visibleCount);
    const hasFilters = selectedTopics.length > 0 || query.trim().length > 0;
    const remaining = filteredArticles.length - visibleArticles.length;
    const sourcesCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DigestExperience.useMemo[sourcesCount]": ()=>new Set(articles.map({
                "DigestExperience.useMemo[sourcesCount]": (article)=>article.source
            }["DigestExperience.useMemo[sourcesCount]"])).size
    }["DigestExperience.useMemo[sourcesCount]"], [
        articles
    ]);
    const resetPaging = ()=>setVisibleCount(INITIAL_COUNT);
    const handleQueryChange = (value)=>{
        setQuery(value);
        resetPaging();
    };
    const handleToggleTopic = (topic)=>{
        setSelectedTopics((current)=>current.includes(topic) ? current.filter((item)=>item !== topic) : [
                ...current,
                topic
            ]);
        resetPaging();
    };
    const handleClearTopics = ()=>{
        setSelectedTopics([]);
        resetPaging();
    };
    const handleReset = ()=>{
        setQuery("");
        setSelectedTopics([]);
        resetPaging();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "top",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$digest$2d$experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#catalog",
                className: "skipLink",
                children: "Перейти к материалам"
            }, void 0, false, {
                fileName: "[project]/src/components/digest-experience.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteHeader"], {
                activeTopics: selectedTopics,
                onSelectTopics: (topics)=>{
                    setSelectedTopics(topics);
                    setQuery("");
                    resetPaging();
                }
            }, void 0, false, {
                fileName: "[project]/src/components/digest-experience.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hero"], {
                        articleCount: articles.length,
                        sourceCount: sourcesCount,
                        latestDate: articles[0]?.publishedAt ?? new Date().toISOString()
                    }, void 0, false, {
                        fileName: "[project]/src/components/digest-experience.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "catalog",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$digest$2d$experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].catalog,
                        "aria-labelledby": "catalog-title",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$digest$2d$experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].head,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$digest$2d$experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heading,
                                            id: "catalog-title",
                                            children: "Материалы"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/digest-experience.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$digest$2d$experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headNote,
                                            children: "Ручной отбор, без алгоритмической ленты"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/digest-experience.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/digest-experience.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toolbar"], {
                                    query: query,
                                    onQueryChange: handleQueryChange,
                                    selectedTopics: selectedTopics,
                                    onToggleTopic: handleToggleTopic,
                                    onClearTopics: handleClearTopics,
                                    onReset: handleReset,
                                    hasFilters: hasFilters,
                                    visibleCount: visibleArticles.length,
                                    filteredCount: filteredArticles.length
                                }, void 0, false, {
                                    fileName: "[project]/src/components/digest-experience.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                filteredArticles.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                                    total: articles.length,
                                    onReset: handleReset
                                }, void 0, false, {
                                    fileName: "[project]/src/components/digest-experience.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$digest$2d$experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                                            children: visibleArticles.map((article, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$article$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArticleCard"], {
                                                    article: article,
                                                    index: index
                                                }, article.id, false, {
                                                    fileName: "[project]/src/components/digest-experience.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 21
                                                }, this))
                                        }, selectedTopics.join("|") || "all", false, {
                                            fileName: "[project]/src/components/digest-experience.tsx",
                                            lineNumber: 142,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$digest$2d$experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].more,
                                            children: remaining > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$digest$2d$experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].moreButton,
                                                onClick: ()=>setVisibleCount((count)=>count + PAGE_SIZE),
                                                children: [
                                                    "Показать ещё",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$digest$2d$experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].moreCount,
                                                        children: Math.min(PAGE_SIZE, remaining)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/digest-experience.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/digest-experience.tsx",
                                                lineNumber: 157,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$digest$2d$experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].end,
                                                children: hasFilters ? "Это все материалы по вашему запросу." : "Это все материалы подборки."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/digest-experience.tsx",
                                                lineNumber: 170,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/digest-experience.tsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/digest-experience.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/digest-experience.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/digest-experience.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/digest-experience.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteFooter"], {}, void 0, false, {
                fileName: "[project]/src/components/digest-experience.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/digest-experience.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_s(DigestExperience, "RFPbKfww9UnFP4ehd9pKFv68eK8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"]
    ];
});
_c = DigestExperience;
var _c;
__turbopack_context__.k.register(_c, "DigestExperience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/empty-state.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyState",
    ()=>EmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2d$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format-date.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$empty$2d$state$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/empty-state.module.css [app-client] (css module)");
;
;
;
function EmptyState({ total, onReset }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$empty$2d$state$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$empty$2d$state$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker,
                children: "0 результатов"
            }, void 0, false, {
                fileName: "[project]/src/components/empty-state.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$empty$2d$state$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: "Ничего не нашлось"
            }, void 0, false, {
                fileName: "[project]/src/components/empty-state.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$empty$2d$state$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                children: [
                    "Попробуйте изменить запрос или снять часть фильтров. В дайджесте",
                    " ",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2d$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluralizeMaterials"])(total),
                    " — можно вернуться ко всей подборке."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/empty-state.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$empty$2d$state$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].action,
                onClick: onReset,
                children: "Сбросить поиск и фильтры"
            }, void 0, false, {
                fileName: "[project]/src/components/empty-state.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/empty-state.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = EmptyState;
var _c;
__turbopack_context__.k.register(_c, "EmptyState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2d$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format-date.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/hero.module.css [app-client] (css module)");
;
;
;
function Hero({ articleCount, sourceCount, latestDate }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero,
        "aria-labelledby": "page-title",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker,
                    children: "AI · UX/UI · дизайн-системы · инструменты"
                }, void 0, false, {
                    fileName: "[project]/src/components/hero.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                            id: "page-title",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Продуктовый"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/hero.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "дайджест"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/hero.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/hero.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aside,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lead,
                                    children: "Самое интересное об AI, UX/UI и продуктовом дизайне. Идеи, инструменты и исследования, которые стоит прочитать."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/hero.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stats,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stat,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                                    children: "материалов"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/hero.tsx",
                                                    lineNumber: 30,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
                                                    children: articleCount
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/hero.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/hero.tsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stat,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                                    children: "изданий"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/hero.tsx",
                                                    lineNumber: 34,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
                                                    children: sourceCount
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/hero.tsx",
                                                    lineNumber: 35,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/hero.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stat,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                                    children: "обновлено"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/hero.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statDate,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2d$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumericDate"])(latestDate)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/hero.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/hero.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/hero.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/hero.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/hero.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/hero.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/hero.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/icons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloseIcon",
    ()=>CloseIcon,
    "SearchIcon",
    ()=>SearchIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SearchIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "7",
                cy: "7",
                r: "4.75",
                stroke: "currentColor",
                strokeWidth: "1.3"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.6 10.6 13.8 13.8",
                stroke: "currentColor",
                strokeWidth: "1.3",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 5,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = SearchIcon;
function CloseIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 3 11 11M11 3 3 11",
            stroke: "currentColor",
            strokeWidth: "1.3",
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c1 = CloseIcon;
var _c, _c1;
__turbopack_context__.k.register(_c, "SearchIcon");
__turbopack_context__.k.register(_c1, "CloseIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/site-footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteFooter",
    ()=>SiteFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/site-footer.module.css [app-client] (css module)");
;
;
function SiteFooter() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `container ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inner}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].about,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brand,
                            children: "Продуктовый дайджест"
                        }, void 0, false, {
                            fileName: "[project]/src/components/site-footer.tsx",
                            lineNumber: 8,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].purpose,
                            children: "Отбираем материалы об AI, интерфейсах и инструментах, которые помогают принимать продуктовые решения."
                        }, void 0, false, {
                            fileName: "[project]/src/components/site-footer.tsx",
                            lineNumber: 9,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site-footer.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rights,
                    children: "Права на тексты и изображения принадлежат оригинальным авторам и изданиям. Дайджест не претендует на их исключительные права."
                }, void 0, false, {
                    fileName: "[project]/src/components/site-footer.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].year,
                    children: [
                        "© ",
                        new Date().getFullYear()
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site-footer.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/site-footer.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/site-footer.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = SiteFooter;
var _c;
__turbopack_context__.k.register(_c, "SiteFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/site-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/site-header.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const NAV_ITEMS = [
    {
        label: "Все материалы",
        topics: []
    },
    {
        label: "AI",
        topics: [
            "AI"
        ]
    },
    {
        label: "UX/UI",
        topics: [
            "UX",
            "UI"
        ]
    },
    {
        label: "Дизайн-системы",
        topics: [
            "Design Systems"
        ]
    },
    {
        label: "Инструменты",
        topics: [
            "Tools"
        ]
    }
];
function isSameSelection(active, target) {
    return active.length === target.length && target.every((topic)=>active.includes(topic));
}
function SiteHeader({ activeTopics, onSelectTopics }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            if (!isOpen) return;
            const handleKeyDown = {
                "SiteHeader.useEffect.handleKeyDown": (event)=>{
                    if (event.key === "Escape") {
                        setIsOpen(false);
                        menuButtonRef.current?.focus();
                    }
                }
            }["SiteHeader.useEffect.handleKeyDown"];
            document.addEventListener("keydown", handleKeyDown);
            return ({
                "SiteHeader.useEffect": ()=>document.removeEventListener("keydown", handleKeyDown)
            })["SiteHeader.useEffect"];
        }
    }["SiteHeader.useEffect"], [
        isOpen
    ]);
    const handleSelect = (topics)=>{
        onSelectTopics(topics);
        setIsOpen(false);
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.requestAnimationFrame(()=>{
            document.getElementById("catalog")?.scrollIntoView({
                behavior: reduceMotion ? "auto" : "smooth",
                block: "start"
            });
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `container ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inner}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#top",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brand,
                        children: "Продуктовый дайджест"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-header.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].desktopNav,
                        "aria-label": "Разделы дайджеста",
                        children: NAV_ITEMS.map((item)=>{
                            const isActive = isSameSelection(activeTopics, item.topics);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLink,
                                "data-active": isActive,
                                "aria-pressed": isActive,
                                onClick: ()=>handleSelect(item.topics),
                                children: item.label
                            }, item.label, false, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-header.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        ref: menuButtonRef,
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuButton,
                        "aria-expanded": isOpen,
                        "aria-controls": "mobile-navigation",
                        onClick: ()=>setIsOpen((open)=>!open),
                        children: isOpen ? "Закрыть" : "Меню"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-header.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site-header.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobilePanel,
                id: "mobile-navigation",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: `container ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileNav}`,
                    "aria-label": "Разделы дайджеста",
                    children: NAV_ITEMS.map((item)=>{
                        const isActive = isSameSelection(activeTopics, item.topics);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileNavLink,
                            "data-active": isActive,
                            "aria-pressed": isActive,
                            onClick: ()=>handleSelect(item.topics),
                            children: item.label
                        }, item.label, false, {
                            fileName: "[project]/src/components/site-header.tsx",
                            lineNumber: 108,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/site-header.tsx",
                    lineNumber: 104,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/site-header.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site-header.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(SiteHeader, "7Ppv9Pj5oIb4WvhnExg+9ZIYZSY=");
_c = SiteHeader;
var _c;
__turbopack_context__.k.register(_c, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/toolbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toolbar",
    ()=>Toolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$article$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/article.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2d$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format-date.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$toolbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/toolbar.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Toolbar({ query, onQueryChange, selectedTopics, onToggleTopic, onClearTopics, onReset, hasFilters, visibleCount, filteredCount }) {
    _s();
    const searchId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$toolbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbar,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$toolbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$toolbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].search,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$toolbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchIcon,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchIcon"], {}, void 0, false, {
                                    fileName: "[project]/src/components/toolbar.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/toolbar.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "srOnly",
                                htmlFor: searchId,
                                children: "Поиск по заголовкам, описаниям, темам и источникам"
                            }, void 0, false, {
                                fileName: "[project]/src/components/toolbar.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: searchId,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$toolbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                type: "search",
                                value: query,
                                onChange: (event)=>onQueryChange(event.target.value),
                                placeholder: "Поиск по материалам",
                                autoComplete: "off",
                                spellCheck: false
                            }, void 0, false, {
                                fileName: "[project]/src/components/toolbar.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$toolbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].clearSearch,
                                "aria-label": "Очистить поиск",
                                onClick: ()=>onQueryChange(""),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseIcon"], {}, void 0, false, {
                                    fileName: "[project]/src/components/toolbar.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/toolbar.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/toolbar.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$toolbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sort,
                        children: [
                            "Сначала новые",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$toolbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sortHint,
                                children: "по дате публикации"
                            }, void 0, false, {
                                fileName: "[project]/src/components/toolbar.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/toolbar.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/toolbar.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$toolbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$toolbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chipsViewport,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$toolbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chips,
                            role: "group",
                            "aria-label": "Фильтр по темам",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$toolbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chip,
                                    "aria-pressed": selectedTopics.length === 0,
                                    onClick: onClearTopics,
                                    children: "Все"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/toolbar.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$article$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOPICS"].map((topic)=>{
                                    const isActive = selectedTopics.includes(topic);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$toolbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chip,
                                        "aria-pressed": isActive,
                                        onClick: ()=>onToggleTopic(topic),
                                        children: topic
                                    }, topic, false, {
                                        fileName: "[project]/src/components/toolbar.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/toolbar.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/toolbar.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    hasFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$toolbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reset,
                        onClick: onReset,
                        children: "Сбросить"
                    }, void 0, false, {
                        fileName: "[project]/src/components/toolbar.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/toolbar.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$toolbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].count,
                "aria-live": "polite",
                "aria-atomic": "true",
                children: filteredCount === 0 ? "Ничего не найдено" : visibleCount < filteredCount ? `${visibleCount} из ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2d$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluralizeMaterials"])(filteredCount)}` : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2d$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pluralizeMaterials"])(filteredCount)
            }, void 0, false, {
                fileName: "[project]/src/components/toolbar.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/toolbar.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(Toolbar, "UUycQP3LsdCRW/XK3NKXaBNJCtY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = Toolbar;
var _c;
__turbopack_context__.k.register(_c, "Toolbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/format-date.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatLongDate",
    ()=>formatLongDate,
    "formatNumericDate",
    ()=>formatNumericDate,
    "formatShortDate",
    ()=>formatShortDate,
    "pluralizeMaterials",
    ()=>pluralizeMaterials
]);
const MONTHS_SHORT = [
    "янв",
    "фев",
    "мар",
    "апр",
    "мая",
    "июн",
    "июл",
    "авг",
    "сен",
    "окт",
    "ноя",
    "дек"
];
const MONTHS_FULL = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
];
function parseUtc(iso) {
    const date = new Date(iso);
    return {
        day: date.getUTCDate(),
        month: date.getUTCMonth(),
        year: date.getUTCFullYear()
    };
}
function formatShortDate(iso) {
    const { day, month, year } = parseUtc(iso);
    return `${day} ${MONTHS_SHORT[month]} ${year}`;
}
function formatLongDate(iso) {
    const { day, month, year } = parseUtc(iso);
    return `${day} ${MONTHS_FULL[month]} ${year}`;
}
function formatNumericDate(iso) {
    const { day, month, year } = parseUtc(iso);
    const pad = (value)=>String(value).padStart(2, "0");
    return `${pad(day)}.${pad(month + 1)}.${year}`;
}
function pluralizeMaterials(count) {
    const mod10 = count % 10;
    const mod100 = count % 100;
    if (mod10 === 1 && mod100 !== 11) return `${count} материал`;
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
        return `${count} материала`;
    }
    return `${count} материалов`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/types/article.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TOPICS",
    ()=>TOPICS
]);
const TOPICS = [
    "AI",
    "UX",
    "UI",
    "Product Design",
    "Design Systems",
    "Research",
    "Tools"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/src/components/article-card.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "body": "article-card-module__F1Hz5q__body",
  "card": "article-card-module__F1Hz5q__card",
  "cardIn": "article-card-module__F1Hz5q__cardIn",
  "cover": "article-card-module__F1Hz5q__cover",
  "dot": "article-card-module__F1Hz5q__dot",
  "fallback": "article-card-module__F1Hz5q__fallback",
  "fallbackSource": "article-card-module__F1Hz5q__fallbackSource",
  "fallbackText": "article-card-module__F1Hz5q__fallbackText",
  "inner": "article-card-module__F1Hz5q__inner",
  "media": "article-card-module__F1Hz5q__media",
  "meta": "article-card-module__F1Hz5q__meta",
  "overlay": "article-card-module__F1Hz5q__overlay",
  "shimmer": "article-card-module__F1Hz5q__shimmer",
  "skeleton": "article-card-module__F1Hz5q__skeleton",
  "source": "article-card-module__F1Hz5q__source",
  "summary": "article-card-module__F1Hz5q__summary",
  "tag": "article-card-module__F1Hz5q__tag",
  "tags": "article-card-module__F1Hz5q__tags",
  "title": "article-card-module__F1Hz5q__title",
});
}),
"[project]/src/components/digest-experience.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "catalog": "digest-experience-module__h4ij0G__catalog",
  "end": "digest-experience-module__h4ij0G__end",
  "grid": "digest-experience-module__h4ij0G__grid",
  "head": "digest-experience-module__h4ij0G__head",
  "headNote": "digest-experience-module__h4ij0G__headNote",
  "heading": "digest-experience-module__h4ij0G__heading",
  "more": "digest-experience-module__h4ij0G__more",
  "moreButton": "digest-experience-module__h4ij0G__moreButton",
  "moreCount": "digest-experience-module__h4ij0G__moreCount",
  "page": "digest-experience-module__h4ij0G__page",
});
}),
"[project]/src/components/empty-state.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "action": "empty-state-module__Lqvm3q__action",
  "empty": "empty-state-module__Lqvm3q__empty",
  "emptyIn": "empty-state-module__Lqvm3q__emptyIn",
  "kicker": "empty-state-module__Lqvm3q__kicker",
  "text": "empty-state-module__Lqvm3q__text",
  "title": "empty-state-module__Lqvm3q__title",
});
}),
"[project]/src/components/hero.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "aside": "hero-module__NVBTOW__aside",
  "grid": "hero-module__NVBTOW__grid",
  "hero": "hero-module__NVBTOW__hero",
  "kicker": "hero-module__NVBTOW__kicker",
  "lead": "hero-module__NVBTOW__lead",
  "stat": "hero-module__NVBTOW__stat",
  "statDate": "hero-module__NVBTOW__statDate",
  "statLabel": "hero-module__NVBTOW__statLabel",
  "statValue": "hero-module__NVBTOW__statValue",
  "stats": "hero-module__NVBTOW__stats",
  "title": "hero-module__NVBTOW__title",
});
}),
"[project]/src/components/site-footer.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "brand": "site-footer-module__STLB6W__brand",
  "footer": "site-footer-module__STLB6W__footer",
  "inner": "site-footer-module__STLB6W__inner",
  "purpose": "site-footer-module__STLB6W__purpose",
  "rights": "site-footer-module__STLB6W__rights",
  "year": "site-footer-module__STLB6W__year",
});
}),
"[project]/src/components/site-header.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "brand": "site-header-module__wBaYfG__brand",
  "desktopNav": "site-header-module__wBaYfG__desktopNav",
  "header": "site-header-module__wBaYfG__header",
  "inner": "site-header-module__wBaYfG__inner",
  "menuButton": "site-header-module__wBaYfG__menuButton",
  "mobileNav": "site-header-module__wBaYfG__mobileNav",
  "mobileNavLink": "site-header-module__wBaYfG__mobileNavLink",
  "mobilePanel": "site-header-module__wBaYfG__mobilePanel",
  "navLink": "site-header-module__wBaYfG__navLink",
  "panelIn": "site-header-module__wBaYfG__panelIn",
});
}),
"[project]/src/components/toolbar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "chip": "toolbar-module__3cXtBq__chip",
  "chips": "toolbar-module__3cXtBq__chips",
  "chipsViewport": "toolbar-module__3cXtBq__chipsViewport",
  "clearSearch": "toolbar-module__3cXtBq__clearSearch",
  "count": "toolbar-module__3cXtBq__count",
  "filterRow": "toolbar-module__3cXtBq__filterRow",
  "input": "toolbar-module__3cXtBq__input",
  "reset": "toolbar-module__3cXtBq__reset",
  "search": "toolbar-module__3cXtBq__search",
  "searchIcon": "toolbar-module__3cXtBq__searchIcon",
  "searchRow": "toolbar-module__3cXtBq__searchRow",
  "sort": "toolbar-module__3cXtBq__sort",
  "sortHint": "toolbar-module__3cXtBq__sortHint",
  "toolbar": "toolbar-module__3cXtBq__toolbar",
});
}),
]);

//# sourceMappingURL=src_1s51c7xht619d._.js.map