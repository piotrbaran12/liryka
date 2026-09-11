import { i as __toESM } from "./_runtime.mjs";
import { _ as Link, y as require_jsx_runtime, z as require_react } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as SiteShell, i as SiteHeader, l as poemLabel, o as adjacentPoems, s as cn, t as GoldRule } from "./_ssr/poems-DuU_utuo.mjs";
import { a as ArrowLeft, i as ArrowRight, n as ChevronLeft } from "./_libs/lucide-react.mjs";
import { n as Route } from "./_ssr/router-CRLtLhuE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-D0GsQdsY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PoemReader({ poem }) {
	const scrollerRef = (0, import_react.useRef)(null);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [needsSlider, setNeedsSlider] = (0, import_react.useState)(false);
	const { prev, next } = adjacentPoems(poem.slug);
	const sync = (0, import_react.useCallback)(() => {
		const el = scrollerRef.current;
		if (!el) return;
		const max = el.scrollHeight - el.clientHeight;
		setNeedsSlider(max > 24);
		setProgress(max <= 0 ? 0 : Math.min(100, Math.max(0, el.scrollTop / max * 100)));
	}, []);
	(0, import_react.useEffect)(() => {
		const el = scrollerRef.current;
		if (!el) return;
		el.scrollTop = 0;
		const id = requestAnimationFrame(sync);
		const ro = new ResizeObserver(sync);
		ro.observe(el);
		return () => {
			cancelAnimationFrame(id);
			ro.disconnect();
		};
	}, [poem.slug, sync]);
	const onSlider = (value) => {
		const el = scrollerRef.current;
		if (!el) return;
		const max = el.scrollHeight - el.clientHeight;
		el.scrollTop = value / 100 * max;
		setProgress(value);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto flex min-h-[calc(100dvh-5.5rem)] w-full max-w-3xl flex-col px-5 pb-8 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/wiersze",
					className: "inline-flex min-h-11 items-center gap-1.5 pr-3.5 font-sans text-xs font-medium tracking-[0.16em] uppercase text-muted transition-[color] duration-200 ease-out hover:text-gold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
						className: "size-4",
						strokeWidth: 1.6
					}), "Wiersze"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-[0.65rem] tracking-[0.28em] uppercase text-subtle tabular-nums",
					children: poem.year ? `rok ${poem.year}` : "tom"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b border-line pb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl font-medium leading-tight tracking-tight text-fg sm:text-4xl",
						children: poemLabel(poem)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "shrink-0 font-display text-xl italic text-gold sm:pb-0.5",
						children: "Piotr Baran"
					})]
				}), poem.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-sans text-xs tracking-wide text-muted",
					children: poem.note
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-6 flex min-h-0 flex-1 flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: scrollerRef,
					onScroll: sync,
					className: "poem-scroll max-h-[min(62dvh,560px)] overflow-y-auto overscroll-contain pr-3 sm:max-h-none sm:overflow-visible sm:pr-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-[1.2rem] leading-[1.7] text-fg sm:text-[1.35rem] sm:leading-[1.75]",
						children: poem.lines.map((line, i) => line === "" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-5 sm:h-6" }, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "whitespace-pre-wrap",
							children: line
						}, i))
					})
				}), needsSlider ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 sm:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "mb-1 block text-center font-sans text-[0.62rem] tracking-[0.28em] uppercase text-subtle",
						children: "Przesuń wiersz"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: 0,
						max: 100,
						step: .1,
						value: progress,
						"aria-label": "Przewiń tekst wiersza",
						className: "poem-slider",
						onChange: (e) => onSlider(Number(e.target.value))
					})]
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "mx-auto my-10 w-36" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "grid grid-cols-2 gap-3 pb-[env(safe-area-inset-bottom)]",
				children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/wiersze/$slug",
					params: { slug: prev.slug },
					className: "group col-start-1 flex min-h-14 items-center gap-2 rounded-2xl bg-surface px-4 py-3 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-out hover:shadow-[var(--shadow-border-hover)] active:scale-[0.96]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						className: "size-4 shrink-0 text-gold",
						strokeWidth: 1.5
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-sans text-[0.62rem] tracking-[0.2em] uppercase text-subtle",
							children: "Poprzedni"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate font-display text-base text-fg",
							children: poemLabel(prev)
						})]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/wiersze/$slug",
					params: { slug: next.slug },
					className: cn("group flex min-h-14 items-center justify-end gap-2 rounded-2xl bg-surface px-4 py-3 text-right shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-out hover:shadow-[var(--shadow-border-hover)] active:scale-[0.96]", prev ? "col-start-2" : "col-span-2"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-sans text-[0.62rem] tracking-[0.2em] uppercase text-subtle",
							children: "Następny"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate font-display text-base text-fg",
							children: poemLabel(next)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "size-4 shrink-0 text-gold",
						strokeWidth: 1.5
					})]
				}) : null]
			})
		]
	});
}
function PoemPage() {
	const poem = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "pt-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PoemReader, { poem })
	})] });
}
//#endregion
export { PoemPage as component };
