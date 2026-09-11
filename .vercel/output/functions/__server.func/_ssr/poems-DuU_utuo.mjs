import { i as __toESM } from "../_runtime.mjs";
import { _ as Link, y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/poems-DuU_utuo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var DUST = [
	{
		left: "8%",
		delay: "0s",
		duration: "16s",
		size: 2
	},
	{
		left: "18%",
		delay: "3s",
		duration: "18s",
		size: 1
	},
	{
		left: "27%",
		delay: "7s",
		duration: "14s",
		size: 2
	},
	{
		left: "41%",
		delay: "1s",
		duration: "20s",
		size: 1
	},
	{
		left: "52%",
		delay: "9s",
		duration: "15s",
		size: 2
	},
	{
		left: "63%",
		delay: "4s",
		duration: "19s",
		size: 1
	},
	{
		left: "74%",
		delay: "11s",
		duration: "17s",
		size: 2
	},
	{
		left: "86%",
		delay: "2s",
		duration: "21s",
		size: 1
	},
	{
		left: "93%",
		delay: "6s",
		duration: "13s",
		size: 2
	},
	{
		left: "34%",
		delay: "12s",
		duration: "16s",
		size: 1
	}
];
function Atmosphere() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 z-0 overflow-hidden",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "atmosphere-vignette" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "atmosphere-grain" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "dust",
				children: DUST.map((spec, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
					left: spec.left,
					bottom: "-8px",
					width: spec.size,
					height: spec.size,
					animationDelay: spec.delay,
					animationDuration: spec.duration
				} }, i))
			})
		]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Atmosphere, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-10",
			children
		})]
	});
}
function GoldRule({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("gold-rule", className),
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ornament-diamond" })
	});
}
function Reveal({ children, className, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setShown(true);
			return;
		}
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setShown(true);
				io.disconnect();
			}
		}, {
			threshold: .14,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", shown && "is-in", className),
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function SiteHeader({ tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("flex items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12", tone === "overlay" && "absolute inset-x-0 top-0 z-20"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "font-display text-lg tracking-wide text-fg transition-[color,opacity] duration-200 ease-out hover:text-gold",
			children: "Piotr Baran"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "flex items-center gap-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "inline-flex min-h-11 items-center px-3 font-sans text-xs font-medium tracking-[0.18em] uppercase text-muted transition-[color] duration-200 ease-out hover:text-fg",
				children: "Start"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/wiersze",
				className: "inline-flex min-h-11 items-center px-3 font-sans text-xs font-medium tracking-[0.18em] uppercase text-muted transition-[color] duration-200 ease-out hover:text-fg",
				children: "Wiersze"
			})]
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "px-5 pb-10 pt-16 sm:px-8 lg:px-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, { className: "mx-auto mb-8 max-w-xs" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center font-display text-lg italic text-muted",
				children: "Piotr Baran"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-center font-sans text-xs tracking-[0.22em] uppercase text-subtle",
				children: "tom poezji · 2023—2026"
			})
		]
	});
}
var poems = [
	{
		id: 1,
		slug: "bez-tytulu-1",
		title: "Bez tytułu",
		year: "2023",
		lines: [
			"pewnego razu byłem i nie byłem,",
			"nikt mnie nie chce",
			"dlatego się okaleczyłem.",
			"życie jest smutne niczym zimny wiatr",
			"",
			"dręczy mnie i dręczy powiew tatr.",
			"życie jest bez sensu, ręka mi drży,",
			"dlatego coraz więcej jest na niej krwi.",
			"ukojeniu szukać. tylko w końcu gdzie?",
			"",
			"bo ja umiem tylko w okaleczaniu się.",
			"ratunek ten jako lepszy niż nic,",
			"pomaga strasznie lecz dużo jest krwi,",
			"pochodnia ciemna zgasił ją wiatr.",
			"",
			"to jest znowu ten powiew tatr.",
			"gdy pochodnie znowu gasi wiatr,",
			"ręka czerwona tu krew i tam.",
			"życie znowu nie chce mnie.",
			"",
			"a życie? a życie? wykrwawia się."
		]
	},
	{
		id: 2,
		slug: "bez-tytulu-2",
		title: "Bez tytułu",
		year: "2023",
		lines: [
			",,wychodzę do szkoły,",
			"a tam straszny jest tłum.",
			"szary i blady jak żyletka,",
			"mi ,,tzum\".",
			"",
			"jak szary jest chodnik,",
			"tak moje życie jest.",
			"nie wiem co się dzieję,",
			"a głód przytłumia mnie.",
			"",
			"krew taka jasna,",
			"wręcz uszczęśliwia mnie.",
			"jednak boli i boli",
			"lecz jednak się chce.",
			"",
			"ja nie wiem lecz nie wiem,",
			"czy krew krwawi się.",
			"jednak wyjście bez tego,",
			"okalecza mnie.",
			"",
			"żyletka jak pięknie,",
			"zrzera skórę do krwi.",
			"tak serce wskazuje mi,",
			"do nieba drzwi\""
		]
	},
	{
		id: 3,
		slug: "bez-tytulu-3",
		title: "Bez tytułu",
		year: "2023",
		lines: [
			",,Jak życie beznadziejne mnie lubić",
			"nie chce mnie, tak smutno mi jak w tę i we w",
			"tak mój mózg nie rozumie życia w tę tak i we w tę znowu życie dręczy mnie",
			"",
			"nie rozumiem dlaczego tak dzieje się że życie jest złe i złe i złe,",
			"",
			"bez dziewczyny oddechu mi brak tak i jak sensu życia i tak,",
			"szare wspomnienia gdy było tak że dziewczyny nie było mi brak",
			"",
			"tak życie teraz bez sensu, jest tak. szukam dziewczyny którą pokochałbym ją jednak szare duchy krzyczą że to nie czas na tą.",
			"",
			"pocieszać w trudnych chwilach i spędzić te piękne by mógł jednak czuje że te myśli przejedzie pług.\""
		]
	},
	{
		id: 4,
		slug: "bez-tytulu-4",
		title: "Bez tytułu",
		year: "2024",
		lines: [
			"gdy zobaczyłem melsa i paru",
			"innych tu, znowu odzyskałem trochę",
			"tchu, znowu żartować się fajnie",
			"zachciało jednak tego nie było",
			"",
			"mało. za mało? za dużo? za dużo.",
			"skończyło mi szybko się tchu",
			"i znowu mi wykrwawiać się",
			"tu, jak w oddali pociągu widzę",
			"",
			"światło. tak widzę że coś",
			"we mnie trzasło, chciałbym być",
			"informatykiem, muzykiem czy technikiem lecz",
			"pośród pięknych porcelan jestem zwykłym",
			"",
			"wazonikiem. chciałbym być najwyższym",
			"słupem, jednak pozostanę martwym trupem.",
			"jak długo dziewczyny nie znajdę",
			"tyle czasu będę przypominać ciamajdę."
		]
	},
	{
		id: 5,
		slug: "tunczyk",
		title: "tuńczyk",
		year: "2024",
		lines: [
			"tuńczyk. tuńczyk lecz nie tuńczyk.",
			"kiedy tę rybę złowiłem, w magie",
			"świata już nie wierzyłem, złowiłem",
			"i wierzyć przestałem. pod siebie się zapadałem.",
			"",
			"w ciemnościach i tej ryby ościach.",
			"Galaktykach i w wędkowaniu praktykach.",
			"czy nauczyłem się czegoś w tym stratach?",
			"stałem w ogniu w latach. latach które",
			"przeżyłem. przeżyłem, dość fatalnie.",
			"",
			"wcale, nie oryginalnie. widziałem",
			"błąkającego się kota po ulicy, lecz i tak",
			"pomyślałem o tym że jak kota widziałem,",
			"czarny był czy biały. kawałki szkła się rozsypały.",
			"",
			"w głębinach morzy potwór płynie lecz",
			"ma światło ale i tak wyginie. to nie wojenne",
			"klimaty, a z tego i tak same straty.",
			"więc wierszu morałem, jest tuńczyk. który nie",
			"rybą lecz szafy regałem."
		]
	},
	{
		id: 6,
		slug: "jak-moglas",
		title: "jak mogłaś",
		year: "2024 / 2025",
		lines: [
			"kiedy starej szafy otworzyłem drzwi, zobaczyłem że coś we mnie tkwi, nie był to organ czy inna przestroga, - to była po prostu moja osoba, brzydki, nie fajny, nie za ciekawy lecz idealny do kopania murawy",
			"",
			"ale ten sam chłopak nie chciał murawy, zrobił się łzawy i płakać zaczął do potrawy, nie chciał już jeść ani nic nie robić. kochał tylko kochać lecz nie mógł nic zrobić.",
			"",
			"alternatywko moja, dlaczego mi to zrobiłaś, dlaczego mnie tak onieśmieliłaś, zgasiłaś mi stawiło w mym pokoju, mając pretensję do mego nastroju.",
			"",
			"kiedy drzwi zauważyłem, oj chłopaku za późno już było, coś tu się toż wydarzyło, lina wisi i się kisi a z niej zwisa ciało chłopaka który nie był kwita.",
			"dlatego pamiętajcie drogie osoby, kto żadny fajny nie rwij mu głowy."
		]
	},
	{
		id: 7,
		slug: "grosza-niewiasty",
		title: "grosza niewiasty",
		year: "2025",
		note: "!!! pisane z listą archaizmów !!!",
		lines: [
			"jeno ino grosza chciałem,",
			"lecz gdy spojrzałem to już upadałem.",
			"chciałem jedynej niewiasty,",
			"jednak zaczęły sypać się pyły i nie wiedziałem co mi umyły,",
			"zmyły kolor serca zaiście",
			"",
			"antycznego fotela rytmu,",
			"mi pozostało ino już iście,",
			"waćpan wie że chciałem być rycerzem,",
			"skończyłem pod sklepem nad Sandomierzem,",
			"jednak nici tu kupowałem,",
			"tylko zebrać z chodnika umiałem.",
			"",
			"pomne ci to iżby,",
			"nie zaatakowały mnie nietoperze,",
			"bo ja już po prostu nie wierze - sekty, komary i kleszcze,",
			"Zawżdy już pożreć me dreszcze,",
			"i ciało gdyby tego było iż zbytnio dało.",
			"",
			"wybuchy wulkanów i oweż jest mą miłością to prosto że nie zweż -",
			"już nigdy nie ujrzę światła,",
			"a gdy poraz ostatni je ujrzałem to już,",
			"wiedziałem że umierałem."
		]
	},
	{
		id: 8,
		slug: "biala-smierc",
		title: "Biała śmierć",
		year: "2025 / 2026",
		lines: [
			"jak mi tuż tutaj kichnęła",
			"pojęcia nie miałem kiedy",
			"to przeklęte zwierciadło",
			"wszystko się pod nim zapadło",
			"",
			"moja kochana białogłowa,",
			"to była tragedia duktowa,",
			"torebke złoconą ci zwiało,",
			"ty tu szybko, śmiało",
			"",
			"a woźnica nie był owca,",
			"szybko, błyskawiczne, tu",
			"nie wiara, tylko szybkość",
			"tu się rwała,",
			"życie mi cię odebrało",
			"",
			"zabrało w pędy złe,",
			"na ślubny kobierec",
			"już nigdy nie zaprowadzę",
			"cię, moja kochana",
			"",
			"kochana kontaminacjo",
			"pięknych wrażeń, moja",
			"implikacjo wszystkich",
			"w mym życiu zdarzeń",
			"",
			"tak jak cię tu kochałem",
			"lecz udowodnić tego",
			"nie zdołałem."
		]
	},
	{
		id: 9,
		slug: "czerwien-ust",
		title: "czerwień ust",
		year: "2026",
		lines: [
			"ku kruków wzroku,",
			"łza tkwiła w szklanym oku.",
			"ciemna noc,",
			"ciemna zmora,",
			"obiad nie tknięty stał,",
			"-do wieczora.",
			"",
			"na tym stole,",
			"drewniane myśli.",
			"nie jeden krwawy,",
			"który się domyśli.",
			"",
			"dzbanku porcelanowy,",
			"jak jeszcze chciałem,",
			"-pić ku poranku.",
			"tak teraz już nie.",
			"",
			"równowagi zagłady,",
			"myśli przepadły.",
			"teraz już tylko,",
			"złotej klamki dopowiedzenia,",
			"złotej rudy - złotego kamienia.",
			"",
			"wychodzę z krzemieniem,",
			"w mej dłoni metal,",
			"rzuciłem ją kamieniem.",
			"ku księżycowych cieni,",
			"jej blada skóra się czerwieni.",
			"",
			"wróciłem do domu,",
			"z czerwoną ręką.",
			"czuje inny blask,",
			"niż ten z pod lasu,",
			"swoją sarenką.",
			"",
			"wstaję rano blisko olśnienia,",
			"ktoś dobija się do mego mienia.",
			"sygnały jasne,",
			"to czas niewidzenia.",
			"",
			"a mi tylko.",
			"żegnaj, żegnaj,",
			"a tak cię kochałem",
			"pocałunków ostatnich,",
			"czci się domagałem."
		]
	},
	{
		id: 10,
		slug: "owoce-lesne",
		title: "Owoce leśne",
		year: "2026",
		lines: [
			"Na drewnianej kładce,",
			"w pod krawatce,",
			"eleganckich butów,",
			"utknąłem w klatce,",
			"liści bez rzutów.",
			"",
			"O pomoc wołałem,",
			"magii orzechów,",
			"posmakowałem.",
			"",
			"Kory drzewnej,",
			"serca mego,",
			"któż za jeden,",
			"postawił klatkę,",
			"i złapał mnie - w pułapkę,",
			"krwionośną.",
			"",
			"Dzień za dzień,",
			"coraz mniej sił miałem.",
			"paradygmatu kogoś,",
			"potrzebowałem.",
			"",
			"Gałązko śliczna,",
			"twego piękna,",
			"nic nie pokona,",
			"o ciebie linę oplatam,",
			"będziesz zakrwawiona.",
			"",
			"Leje się, leje,",
			"z dzbanka miłego,",
			"wiśniowy syrop,",
			"i wnętrzności jego.",
			"",
			"Natury płaty,",
			"części odpadają,",
			"nikt chłopaka nie wypuścił.",
			"z klatki w końcu tu puścił,",
			"gdy klatka lecz piersiowa,",
			"już się nie unosiła."
		]
	},
	{
		id: 11,
		slug: "inna-przygoda",
		title: "Inna przygoda",
		year: null,
		lines: [
			"W oddalonej gminie produkcja trwała,",
			"gdy każdy kwadrat przychodził,",
			"to wnet stalowa maszyna się rwała,",
			"skąd ten obiekt się wywodził,",
			"(mówiono do kropki).",
			"",
			"Kropka bardzo chciała być kafelką,",
			"smutna będąc patrzyła na innych.",
			"Widziała, że kwadraty z jej wioski,",
			"robiły to z iskrą staranności niewielką.",
			"",
			"Sama bardzo się starała,",
			"informacje wykuwała,",
			"lecz wyzwaniu temu,",
			"podołać nie zdołała.",
			"",
			"Pewnego razu ścierając troski,",
			"mechanik zawitał do wioski,",
			"smutnej kropce dał swoje ulotki,",
			"widok auta dla niej był boski.",
			"",
			"Kropka za niedługą namową,",
			"choć zmian czegokolwiek się bała,",
			"nie chciała być jednostką losową,",
			"więc szansę przyjęła i ją sobie dała.",
			"",
			"Spróbowała zostać kołem,",
			"znajdując swoje miejsce,",
			"poczuła się własnym aniołem,",
			"bardziej cieszy jedzenie nad stołem.",
			"",
			"Zapisana popiołem w tej historii jest wzorem.",
			"Nie trzeba być jak inni by szczęśliwym się stać."
		]
	},
	{
		id: 12,
		slug: "chlopak-wierny-wiosce",
		title: "Chłopak wierny wiosce",
		year: null,
		lines: [
			"W czci jednej drużyny,",
			"zadość uczyniłem,",
			"ja żem nie jedyny,",
			"szarość zbrązowiłem.",
			"",
			"Długo się utrzymywałem,",
			"z miłości do wioski,",
			"Serce zatrzymałem,",
			"osobistej jednostki.",
			"",
			"Zanim duch odleciał,",
			"honor poświęciłem,",
			"emblemat mój poleciał,",
			"już nic nie mówiłem.",
			"",
			"Żadnej siekiery,",
			"spalili w moją duszę,",
			"jakie to maniery,",
			"już jej o rękę nie poproszę.",
			"",
			"Bardzo do domu,",
			"wrócić chciałem,",
			"nie mówiłem nikomu,",
			"pod koniec zrozumiałem."
		]
	},
	{
		id: 13,
		slug: "mdla-konewka",
		title: "Mdła konewka",
		year: null,
		lines: [
			"Ma wybitna drużyno,",
			"jak ja bardzo cię miłuje,",
			"świecka i stara ojczyzno,",
			"o honor u ciebie nocami pracuje.",
			"",
			"Nic mi w życiu nie jest miłe,",
			"ale dzięki tobie tyle już nie płaczę,",
			"choćbym głowę miał na pile,",
			"to ciebie pocałuje choć się stracę.",
			"",
			"Od małego chłopaka,",
			"jak zdrowie zatrzymać chce,",
			"dostanę się do nieba,",
			"a bić do ciebie będzie serce me.",
			"",
			"Pamięci tobie dałem,",
			"jak chcę żebyś nie zapominała,",
			"pamięci ci dostarczyłem,",
			"zanim moja zawieszka się wykrwawiała.",
			"",
			"Strasznie się boje,",
			"lecz mam ciebie przy sobie,",
			"czy napadną trupy moje,",
			"moja dusza w twojej osobie."
		]
	}
];
function poemLabel(poem) {
	return `(${poem.title}) - ${poem.id} Wiersz`;
}
function getPoemBySlug(slug) {
	return poems.find((p) => p.slug === slug);
}
function adjacentPoems(slug) {
	const i = poems.findIndex((p) => p.slug === slug);
	if (i < 0) return {
		prev: null,
		next: null
	};
	return {
		prev: i > 0 ? poems[i - 1] ?? null : null,
		next: i < poems.length - 1 ? poems[i + 1] ?? null : null
	};
}
function yearAnchor(year) {
	return year.toLowerCase().replace(/\s*\/\s*/g, "-").replace(/\s+/g, "-");
}
var yearSections = (() => {
	const order = [];
	const map = /* @__PURE__ */ new Map();
	for (const poem of poems) {
		const key = poem.year ?? "Późniejsze";
		if (!map.has(key)) {
			map.set(key, []);
			order.push(key);
		}
		map.get(key).push(poem);
	}
	return order.map((year) => ({
		year,
		poems: map.get(year)
	}));
})();
//#endregion
export { SiteShell as a, getPoemBySlug as c, yearAnchor as d, yearSections as f, SiteHeader as i, poemLabel as l, Reveal as n, adjacentPoems as o, SiteFooter as r, cn as s, GoldRule as t, poems as u };
