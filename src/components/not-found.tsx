import { Link } from "@tanstack/react-router";
import { GoldRule, SiteHeader, SiteShell } from "@/components/chrome";

export function NotFoundPage() {
  return (
    <SiteShell>
      <SiteHeader />
      <main className="flex min-h-[70dvh] flex-col items-center justify-center px-6 text-center">
        <p className="kicker mb-6">404</p>
        <h1 className="font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl">
          Strony nie odnaleziono
        </h1>
        <GoldRule className="mx-auto my-8 w-40" />
        <p className="max-w-sm font-display text-lg italic text-muted">
          Ten wiersz nie istnieje w tomie — albo jeszcze nie został zapisany.
        </p>
        <Link
          to="/wiersze"
          className="mt-10 inline-flex min-h-11 items-center rounded-full bg-fg px-7 font-sans text-sm font-medium text-ink transition-[opacity,scale] duration-150 ease-out hover:opacity-90 active:scale-[0.96]"
        >
          Przejdź do wierszy
        </Link>
      </main>
    </SiteShell>
  );
}
