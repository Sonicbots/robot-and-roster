import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/outreach")({
  head: () => ({
    meta: [
      { title: "Outreach — Sonic Bots FTC" },
      { name: "description", content: "Community outreach and STEM events run by the Sonic Bots FIRST Tech Challenge team." },
      { property: "og:title", content: "Outreach — Sonic Bots FTC" },
      { property: "og:description", content: "How the Sonic Bots share robotics with their community." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Outreach,
});

const events = [
  { t: "School visits", d: "We show our robot to younger students and answer their questions." },
  { t: "Demo days", d: "Public driving demos at fairs, open houses and community events." },
  { t: "STEM workshops", d: "Hands-on build and drive sessions for kids new to robotics." },
];

function Outreach() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="hero-drop text-sm font-semibold uppercase tracking-[0.3em] text-primary" style={{ animationDelay: "0.05s" }}>Giving back</p>
      <h1 className="hero-drop mt-3 text-5xl font-extrabold md:text-6xl" style={{ animationDelay: "0.2s" }}>Outreach</h1>
      <p className="hero-drop mt-6 max-w-2xl text-lg text-muted-foreground" style={{ animationDelay: "0.4s" }}>
        Robotics is better when more people get to try it. Here is how we share it.
      </p>
      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {events.map((e) => (
          <div key={e.t} className="rounded-xl border bg-card p-6">
            <h3 className="text-xl font-bold">{e.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
