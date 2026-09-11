import { createFileRoute, notFound } from "@tanstack/react-router";
import { PoemReader } from "@/components/poem-reader";
import { SiteHeader, SiteShell } from "@/components/chrome";
import { getPoemBySlug, poemLabel } from "@/lib/poems";

export const Route = createFileRoute("/wiersze/$slug")({
  loader: ({ params }) => {
    const poem = getPoemBySlug(params.slug);
    if (!poem) throw notFound();
    return poem;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${poemLabel(loaderData)} — Piotr Baran`
          : "Wiersz — Piotr Baran",
      },
    ],
  }),
  component: PoemPage,
});

function PoemPage() {
  const poem = Route.useLoaderData();
  return (
    <SiteShell>
      <SiteHeader />
      <main className="pt-2">
        <PoemReader poem={poem} />
      </main>
    </SiteShell>
  );
}
