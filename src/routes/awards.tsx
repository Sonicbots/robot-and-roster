import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "Awards — Sonic Bots FTC" },
      { name: "description", content: "Awards and recognition earned by the Sonic Bots FIRST Tech Challenge team." },
      { property: "og:title", content: "Awards — Sonic Bots FTC" },
      { property: "og:description", content: "Recognition earned by the Sonic Bots robotics team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Awards,
});

const awards = [
  { t: "Think Award", d: "Awarded for the engineering notebook and design process." },
  { t: "Control Award", d: "Awarded for strong, reliable software and autonomous work." },
  { t: "Connect Award", d: "Awarded for outreach and inspiring the local community." },
];

function Awards() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Recognition</p>
      <h1 className="mt-3 text-5xl font-extrabold md:text-6xl">Awards</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        A placeholder list — send me the awards you have actually won and the year for each.
      </p>
      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {awards.map((a) => (
          <div key={a.t} className="rounded-xl border bg-card p-6">
            <h3 className="text-xl font-bold text-accent">{a.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
