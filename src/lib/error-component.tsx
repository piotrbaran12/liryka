import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

const FALLBACK_MESSAGE = "Wystąpił nieoczekiwany błąd. Odśwież stronę.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-bg px-6 text-center text-fg">
      <span className="text-gold" aria-hidden="true">
        <TriangleAlert className="size-10" strokeWidth={1.5} />
      </span>
      <h1 className="font-display text-2xl font-medium">Coś poszło nie tak</h1>
      <p className="max-w-md font-sans text-sm break-words text-muted">{errorMessage(error)}</p>
    </main>
  );
}
