import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Sonic Bots FTC" },
      { name: "description", content: "Photos of the Sonic Bots FIRST Tech Challenge robot, build season and competitions." },
      { property: "og:title", content: "Gallery — Sonic Bots FTC" },
      { property: "og:description", content: "Photos from the Sonic Bots robotics season." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Gallery,
});

const slots = [
  "Build season",
  "Competition floor",
  "Robot close-up",
  "Team photo",
  "Outreach event",
  "Pit area",
];

function Gallery() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="hero-drop text-sm font-semibold uppercase tracking-[0.3em] text-primary" style={{ animationDelay: "0.05s" }}>Photos</p>
      <h1 className="hero-drop mt-3 text-5xl font-extrabold md:text-6xl" style={{ animationDelay: "0.2s" }}>Gallery</h1>
      <p className="hero-drop mt-6 max-w-2xl text-lg text-muted-foreground" style={{ animationDelay: "0.4s" }}>
        Send me your photos and I will drop them into these frames.
      </p>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {slots.map((s) => (
          <div
            key={s}
            className="flex aspect-video items-center justify-center rounded-xl border border-dashed bg-card text-sm font-semibold uppercase tracking-widest text-muted-foreground"
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
