import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";
import { adjacentPoems, poemLabel, type Poem } from "@/lib/poems";
import { cn } from "@/lib/utils";
import { GoldRule } from "@/components/chrome";

export function PoemReader({ poem }: { poem: Poem }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [needsSlider, setNeedsSlider] = useState(false);
  const { prev, next } = adjacentPoems(poem.slug);

  const sync = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    setNeedsSlider(max > 24);
    setProgress(max <= 0 ? 0 : Math.min(100, Math.max(0, (el.scrollTop / max) * 100)));
  }, []);

  useEffect(() => {
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

  const onSlider = (value: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    el.scrollTop = (value / 100) * max;
    setProgress(value);
  };

  return (
    <article className="mx-auto flex min-h-[calc(100dvh-5.5rem)] w-full max-w-3xl flex-col px-5 pb-8 sm:px-8">
      <div className="mb-4 flex items-center justify-between gap-3">
        <Link
          to="/wiersze"
          className="inline-flex min-h-11 items-center gap-1.5 pr-3.5 font-sans text-xs font-medium tracking-[0.16em] uppercase text-muted transition-[color] duration-200 ease-out hover:text-gold"
        >
          <ChevronLeft className="size-4" strokeWidth={1.6} />
          Wiersze
        </Link>
        <p className="font-sans text-[0.65rem] tracking-[0.28em] uppercase text-subtle tabular-nums">
          {poem.year ? `rok ${poem.year}` : "tom"}
        </p>
      </div>

      <header className="border-b border-line pb-6">
        <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
          <h1 className="font-display text-3xl font-medium leading-tight tracking-tight text-fg sm:text-4xl">
            {poemLabel(poem)}
          </h1>
          <p className="shrink-0 font-display text-xl italic text-gold">— Piotr Baran</p>
        </div>
        {poem.note ? (
          <p className="mt-4 font-sans text-xs tracking-wide text-muted">{poem.note}</p>
        ) : null}
      </header>

      <div className="relative mt-6 flex min-h-0 flex-1 flex-col md:flex-none">
        <div
          ref={scrollerRef}
          onScroll={sync}
          className="poem-scroll poem-frame"
        >
          <div className="font-display text-[1.2rem] leading-[1.7] text-fg sm:text-[1.35rem] sm:leading-[1.75]">
            {poem.lines.map((line, i) =>
              line === "" ? (
                <div key={i} className="h-5 sm:h-6" />
              ) : (
                <p key={i} className="whitespace-pre-wrap">
                  {line}
                </p>
              ),
            )}
          </div>
        </div>

        {needsSlider ? (
          <div className="poem-slider-wrap">
            <div className="rounded-full bg-surface px-5 shadow-[var(--shadow-border)]">
              <label className="sr-only" htmlFor={`poem-slider-${poem.slug}`}>
                Przesuń tekst wiersza
              </label>
              <input
                id={`poem-slider-${poem.slug}`}
                type="range"
                min={0}
                max={100}
                step={0.1}
                value={progress}
                aria-label="Przewiń tekst wiersza"
                className="poem-slider"
                onChange={(e) => onSlider(Number(e.target.value))}
              />
            </div>
            <p className="mt-2 text-center font-sans text-xs tracking-[0.28em] uppercase text-gold">
              Przesuń wiersz
            </p>
          </div>
        ) : null}
      </div>

      <GoldRule className="mx-auto my-10 w-36" />

      <nav className="grid grid-cols-2 gap-3 pb-[env(safe-area-inset-bottom)]">
        {prev ? (
          <Link
            to="/wiersze/$slug"
            params={{ slug: prev.slug }}
            className="group col-start-1 flex min-h-14 items-center gap-2 rounded-2xl bg-surface px-4 py-3 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-out hover:shadow-[var(--shadow-border-hover)] active:scale-[0.96]"
          >
            <ArrowLeft className="size-4 shrink-0 text-gold" strokeWidth={1.5} />
            <span className="min-w-0">
              <span className="block font-sans text-[0.62rem] tracking-[0.2em] uppercase text-subtle">
                Poprzedni
              </span>
              <span className="block truncate font-display text-base text-fg">{poemLabel(prev)}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to="/wiersze/$slug"
            params={{ slug: next.slug }}
            className={cn(
              "group flex min-h-14 items-center justify-end gap-2 rounded-2xl bg-surface px-4 py-3 text-right shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-out hover:shadow-[var(--shadow-border-hover)] active:scale-[0.96]",
              prev ? "col-start-2" : "col-span-2",
            )}
          >
            <span className="min-w-0">
              <span className="block font-sans text-[0.62rem] tracking-[0.2em] uppercase text-subtle">
                Następny
              </span>
              <span className="block truncate font-display text-base text-fg">{poemLabel(next)}</span>
            </span>
            <ArrowRight className="size-4 shrink-0 text-gold" strokeWidth={1.5} />
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
