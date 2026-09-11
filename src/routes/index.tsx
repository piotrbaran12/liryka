import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { GoldRule, Reveal, SiteFooter, SiteHeader, SiteShell } from "@/components/chrome";
import { poems, yearAnchor, yearSections } from "@/lib/poems";

export const Route = createFileRoute("/")({ component: Home });

const HERO = ["Wiersze", "autorstwa", "Piotra Barana"];

const YEAR_COPY: Record<string, string> = {
  "2023": "Pierwsze zapisy",
  "2024": "Głos się formuje",
  "2024 / 2025": "Przełom lat",
  "2025": "Archaizmy",
  "2025 / 2026": "Biała śmierć",
  "2026": "Czerwień i las",
  Późniejsze: "Dalsze karty",
};

function Home() {
  return (
    <SiteShell>
      <SiteHeader tone="overlay" />

      <section className="relative flex min-h-dvh flex-col items-center justify-center px-6 pt-16 pb-20 text-center">
        <p
          className="kicker mb-8 hero-word"
          style={{ animationDelay: "80ms" }}
        >
          tom poezji · 2023—2026
        </p>

        <h1 className="max-w-4xl font-display text-[clamp(2.6rem,9vw,6.4rem)] font-medium leading-[0.95] tracking-[-0.03em] text-fg">
          {HERO.map((word, i) => (
            <span key={word} className="block">
              <span className="hero-word" style={{ animationDelay: `${180 + i * 140}ms` }}>
                {word}
              </span>
            </span>
          ))}
        </h1>

        <div
          className="hero-word mx-auto mt-10 w-44"
          style={{ animationDelay: "720ms" }}
        >
          <GoldRule />
        </div>

        <p
          className="hero-word mt-8 max-w-md font-display text-lg italic leading-relaxed text-muted sm:text-xl"
          style={{ animationDelay: "840ms" }}
        >
          Trzynaście wierszy zebranych w jednym, cichym tomie.
        </p>

        <div className="hero-word mt-12" style={{ animationDelay: "980ms" }}>
          <Link
            to="/wiersze"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-fg pl-7 pr-6 font-sans text-sm font-medium tracking-wide text-ink transition-[opacity,transform] duration-150 ease-out hover:opacity-90 active:scale-[0.96]"
          >
            Przejdź do wierszy
            <ArrowRight className="size-4" strokeWidth={1.75} />
          </Link>
        </div>
      </section>

      <section id="zbior" className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <Reveal>
          <p className="kicker mb-5 text-center">o tomie</p>
          <h2 className="text-center font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl">
            Zbiór, nie szkicownik
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <GoldRule className="mx-auto my-8 w-36" />
        </Reveal>
        <Reveal delay={120}>
          <p className="text-center font-display text-xl leading-relaxed text-muted sm:text-[1.35rem] sm:leading-relaxed">
            Wiersze autorstwa Piotra Barana układają się w cztery lata głosu:
            od pierwszych, surowych zapisów po utwory, w których język szuka
            już formy. Wiersze bez tytułu noszą w tym wydaniu miano{" "}
            <em className="text-fg">Bez tytułu</em>.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-6 text-center font-sans text-sm tracking-[0.22em] uppercase text-subtle">
            {poems.length} wierszy · jeden autor
          </p>
        </Reveal>
      </section>

      <section id="lata" className="mx-auto max-w-5xl px-5 pb-8 sm:px-8">
        <Reveal>
          <p className="kicker mb-4 text-center">lata</p>
          <h2 className="mb-12 text-center font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Chronologia tomu
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {yearSections.map((section, i) => (
            <Reveal key={section.year} delay={i * 70}>
              <Link
                to="/wiersze"
                hash={`rok-${yearAnchor(section.year)}`}
                className="group flex min-h-32 flex-col justify-between rounded-2xl bg-surface p-6 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-out hover:shadow-[var(--shadow-border-hover)] active:scale-[0.96]"
              >
                <div>
                  <p className="font-sans text-[0.65rem] tracking-[0.28em] uppercase text-gold">
                    {YEAR_COPY[section.year] ?? "Karty"}
                  </p>
                  <p className="mt-2 font-display text-3xl font-medium tracking-tight text-fg">
                    {section.year}
                  </p>
                </div>
                <p className="mt-6 font-sans text-xs tracking-wide text-muted">
                  {section.poems.length}{" "}
                  {pluralWiersze(section.poems.length)}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <div className="flex justify-center px-6 py-20">
          <Link
            to="/wiersze"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line px-7 font-sans text-sm font-medium tracking-wide text-fg transition-[border-color,transform] duration-200 ease-out hover:border-gold active:scale-[0.96]"
          >
            Przejdź do wierszy
            <ArrowRight className="size-4 text-gold" strokeWidth={1.75} />
          </Link>
        </div>
      </Reveal>

      <SiteFooter />
    </SiteShell>
  );
}

function pluralWiersze(n: number) {
  if (n === 1) return "wiersz";
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "wiersze";
  return "wierszy";
}
