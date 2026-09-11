import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteShell, d as yearAnchor, f as yearSections, i as SiteHeader, n as Reveal, r as SiteFooter, t as GoldRule, u as poems } from "./poems-DuU_utuo.mjs";
import { i as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DKe0XIgU.js
var import_jsx_runtime = require_jsx_runtime();
var HERO = [
	"Wiersze",
	"autorstwa",
	"Piotra Barana"
];
var YEAR_COPY = {
	"2023": "Pierwsze zapisy",
	"2024": "Głos się formuje",
	"2024 / 2025": "Przełom lat",
	"2025": "Archaizmy",
	"2025 / 2026": "Biała śmierć",
	"2026": "Czerwień i las",
	Późniejsze: "Dalsze karty"
};
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { tone: "overlay" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative flex min-h-dvh flex-col items-center justify-center px-6 pt-16 pb-20 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker mb-8 hero-word",
					style: { animationDelay: "80ms" },
					children: "tom poezji · 2023—2026"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "max-w-4xl font-display text-[clamp(2.6rem,9vw,6.4rem)] font-medium leading-[0.95] tracking-[-0.03em] text-fg",
					children: HERO.map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hero-word",
							style: { animationDelay: `${180 + i * 140}ms` },
							children: word
						})
					}, word))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hero-word mx-auto mt-10 w-44",
					style: { animationDelay: "720ms" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hero-word mt-8 max-w-md font-display text-lg italic leading-relaxed text-muted sm:text-xl",
					style: { animationDelay: "840ms" },
					children: "Trzynaście wierszy zebranych w jednym, cichym tomie."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hero-word mt-12",
					style: { animationDelay: "980ms" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/wiersze",
						className: "inline-flex min-h-12 items-center gap-2 rounded-full bg-fg pl-7 pr-6 font-sans text-sm font-medium tracking-wide text-ink transition-[opacity,transform] duration-150 ease-out hover:opacity-90 active:scale-[0.96]",
						children: ["Przejdź do wierszy", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4",
							strokeWidth: 1.75
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "zbior",
			className: "mx-auto max-w-3xl px-6 py-20 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker mb-5 text-center",
					children: "o tomie"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-center font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl",
					children: "Zbiór, nie szkicownik"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "mx-auto my-8 w-36" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-center font-display text-xl leading-relaxed text-muted sm:text-[1.35rem] sm:leading-relaxed",
						children: [
							"Wiersze autorstwa Piotra Barana układają się w cztery lata głosu: od pierwszych, surowych zapisów po utwory, w których język szuka już formy. Wiersze bez tytułu noszą w tym wydaniu miano",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-fg",
								children: "Bez tytułu"
							}),
							"."
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 180,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-center font-sans text-sm tracking-[0.22em] uppercase text-subtle",
						children: [poems.length, " wierszy · jeden autor"]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "lata",
			className: "mx-auto max-w-5xl px-5 pb-8 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker mb-4 text-center",
				children: "lata"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-12 text-center font-display text-3xl font-medium tracking-tight sm:text-4xl",
				children: "Chronologia tomu"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: yearSections.map((section, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/wiersze",
						hash: `rok-${yearAnchor(section.year)}`,
						className: "group flex min-h-32 flex-col justify-between rounded-2xl bg-surface p-6 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-out hover:shadow-[var(--shadow-border-hover)] active:scale-[0.96]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-[0.65rem] tracking-[0.28em] uppercase text-gold",
							children: YEAR_COPY[section.year] ?? "Karty"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-3xl font-medium tracking-tight text-fg",
							children: section.year
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 font-sans text-xs tracking-wide text-muted",
							children: [
								section.poems.length,
								" ",
								pluralWiersze(section.poems.length)
							]
						})]
					})
				}, section.year))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-center px-6 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/wiersze",
				className: "inline-flex min-h-12 items-center gap-2 rounded-full border border-line px-7 font-sans text-sm font-medium tracking-wide text-fg transition-[border-color,transform] duration-200 ease-out hover:border-gold active:scale-[0.96]",
				children: ["Przejdź do wierszy", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
					className: "size-4 text-gold",
					strokeWidth: 1.75
				})]
			})
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
	] });
}
function pluralWiersze(n) {
	if (n === 1) return "wiersz";
	const mod10 = n % 10;
	const mod100 = n % 100;
	if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "wiersze";
	return "wierszy";
}
//#endregion
export { Home as component };
