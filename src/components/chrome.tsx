import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const DUST = [
  { left: "8%", delay: "0s", duration: "16s", size: 2 },
  { left: "18%", delay: "3s", duration: "18s", size: 1 },
  { left: "27%", delay: "7s", duration: "14s", size: 2 },
  { left: "41%", delay: "1s", duration: "20s", size: 1 },
  { left: "52%", delay: "9s", duration: "15s", size: 2 },
  { left: "63%", delay: "4s", duration: "19s", size: 1 },
  { left: "74%", delay: "11s", duration: "17s", size: 2 },
  { left: "86%", delay: "2s", duration: "21s", size: 1 },
  { left: "93%", delay: "6s", duration: "13s", size: 2 },
  { left: "34%", delay: "12s", duration: "16s", size: 1 },
];

export function Atmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="atmosphere-vignette" />
      <div className="atmosphere-grain" />
      <div className="dust">
        {DUST.map((spec, i) => (
          <span
            key={i}
            style={{
              left: spec.left,
              bottom: "-8px",
              width: spec.size,
              height: spec.size,
              animationDelay: spec.delay,
              animationDuration: spec.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-dvh bg-bg text-fg">
      <Atmosphere />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function GoldRule({ className }: { className?: string }) {
  return (
    <div className={cn("gold-rule", className)} aria-hidden>
      <span className="ornament-diamond" />
    </div>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", shown && "is-in", className)}
      style={{ transitionDelay: `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function SiteHeader({
  tone = "default",
}: {
  tone?: "default" | "overlay";
}) {
  return (
    <header
      className={cn(
        "flex items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12",
        tone === "overlay" && "absolute inset-x-0 top-0 z-20",
      )}
    >
      <Link
        to="/"
        className="font-display text-lg tracking-wide text-fg transition-[color,opacity] duration-200 ease-out hover:text-gold"
      >
        Piotr Baran
      </Link>
      <nav className="flex items-center gap-1">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center px-3 font-sans text-xs font-medium tracking-[0.18em] uppercase text-muted transition-[color] duration-200 ease-out hover:text-fg"
        >
          Start
        </Link>
        <Link
          to="/wiersze"
          className="inline-flex min-h-11 items-center px-3 font-sans text-xs font-medium tracking-[0.18em] uppercase text-muted transition-[color] duration-200 ease-out hover:text-fg"
        >
          Wiersze
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="px-5 pb-10 pt-16 sm:px-8 lg:px-12">
      <GoldRule className="mx-auto mb-8 max-w-xs" />
      <p className="text-center font-display text-lg italic text-muted">Piotr Baran</p>
      <p className="mt-2 text-center font-sans text-xs tracking-[0.22em] uppercase text-subtle">
        tom poezji · 2023—2026
      </p>
    </footer>
  );
}
