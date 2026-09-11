import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { GoldRule, Reveal, SiteFooter, SiteHeader, SiteShell } from "@/components/chrome";
import { poemLabel, yearAnchor, yearSections } from "@/lib/poems";

export const Route = createFileRoute("/wiersze/")({ component: PoemsIndex });

function PoemsIndex() {
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;
    const el = document.getElementById(hash);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }, []);

  return (
    <SiteShell>
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl px-5 pb-8 sm:px-8">
        <div className="mx-auto max-w-2xl pb-12 pt-6 text-center sm:pt-10">
          <p className="kicker mb-5">wybierz wiersz</p>
          <h1 className="font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl">
            Wiersze
          </h1>
          <GoldRule className="mx-auto my-7 w-36" />
          <p className="font-display text-lg italic text-muted">
            Kliknij tytuł, aby otworzyć pełny tekst.
          </p>
        </div>

        <div className="space-y-14">
          {yearSections.map((section, si) => (
            <section
              key={section.year}
              id={`rok-${yearAnchor(section.year)}`}
              className="scroll-mt-8"
            >
              <Reveal>
                <div className="mb-5 flex items-end justify-between gap-4 border-b border-line pb-3">
                  <h2 className="font-display text-2xl font-medium tracking-tight text-fg">
                    {section.year}
                  </h2>
                  <span className="font-sans text-[0.65rem] tracking-[0.24em] uppercase text-subtle tabular-nums">
                    {section.poems.length}
                  </span>
                </div>
              </Reveal>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {section.poems.map((poem, i) => (
                  <li key={poem.slug}>
                    <Reveal delay={i * 60 + si * 20}>
                      <Link
                        to="/wiersze/$slug"
                        params={{ slug: poem.slug }}
                        className="group flex min-h-20 items-center justify-between gap-4 rounded-2xl bg-surface px-5 py-4 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-out hover:shadow-[var(--shadow-border-hover)] active:scale-[0.96]"
                      >
                        <span className="min-w-0">
                          <span className="block font-sans text-[0.62rem] tracking-[0.28em] uppercase text-gold">
                            wiersz {String(poem.id).padStart(2, "0")}
                          </span>
                          <span className="mt-1 block truncate font-display text-xl leading-snug text-fg sm:text-[1.35rem]">
                            {poemLabel(poem)}
                          </span>
                        </span>
                        <ArrowUpRight
                          className="size-4 shrink-0 text-gold-dim transition-[color,transform] duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold"
                          strokeWidth={1.5}
                        />
                      </Link>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </SiteShell>
  );
}
