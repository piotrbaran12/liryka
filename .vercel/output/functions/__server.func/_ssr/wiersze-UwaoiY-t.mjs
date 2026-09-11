import { i as __toESM } from "../_runtime.mjs";
import { _ as Link, y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteShell, d as yearAnchor, f as yearSections, i as SiteHeader, l as poemLabel, n as Reveal, r as SiteFooter, t as GoldRule } from "./poems-DuU_utuo.mjs";
import { r as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wiersze-UwaoiY-t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PoemsIndex() {
	(0, import_react.useEffect)(() => {
		const hash = window.location.hash.replace(/^#/, "");
		if (!hash) return;
		const el = document.getElementById(hash);
		if (!el) return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		el.scrollIntoView({
			behavior: reduce ? "auto" : "smooth",
			block: "start"
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto w-full max-w-5xl px-5 pb-8 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl pb-12 pt-6 text-center sm:pt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker mb-5",
						children: "wybierz wiersz"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl",
						children: "Wiersze"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "mx-auto my-7 w-36" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg italic text-muted",
						children: "Kliknij tytuł, aby otworzyć pełny tekst."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-14",
				children: yearSections.map((section, si) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: `rok-${yearAnchor(section.year)}`,
					className: "scroll-mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5 flex items-end justify-between gap-4 border-b border-line pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-medium tracking-tight text-fg",
							children: section.year
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-sans text-[0.65rem] tracking-[0.24em] uppercase text-subtle tabular-nums",
							children: section.poems.length
						})]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
						children: section.poems.map((poem, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 60 + si * 20,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/wiersze/$slug",
								params: { slug: poem.slug },
								className: "group flex min-h-20 items-center justify-between gap-4 rounded-2xl bg-surface px-5 py-4 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-out hover:shadow-[var(--shadow-border-hover)] active:scale-[0.96]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block font-sans text-[0.62rem] tracking-[0.28em] uppercase text-gold",
										children: ["wiersz ", String(poem.id).padStart(2, "0")]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block truncate font-display text-xl leading-snug text-fg sm:text-[1.35rem]",
										children: poemLabel(poem)
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "size-4 shrink-0 text-gold-dim transition-[color,transform] duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold",
									strokeWidth: 1.5
								})]
							})
						}) }, poem.slug))
					})]
				}, section.year))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
	] });
}
//#endregion
export { PoemsIndex as component };
