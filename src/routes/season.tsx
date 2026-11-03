import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/season")({
  head: () => ({
    meta: [
      { title: "Seasons — Sonic Bots FTC" },
      { name: "description", content: "Season 1 and Season 2 of Sonic Bots FIRST Tech Challenge Team 31944 — what we built, coded and competed." },
      { property: "og:title", content: "Seasons — Sonic Bots FTC" },
      { property: "og:description", content: "Season 1 and Season 2 of Sonic Bots Team 31944." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Season,
});

const seasons = [
  {
    id: "1",
    name: "Season 1",
    tag: "Build Season",
    blurb:
      "Where the robot starts: CAD sketches, part lists, and long nights in the shop getting the first drivetrain rolling.",
    facts: [
      ["Kickoff", "Week 1 — rules revealed, ideas on the whiteboard"],
      ["Build focus", "Drivetrain, intake and lift assembled and tested"],
      ["Code focus", "Autonomous routines written and tuned on the field"],
    ],
  },
  {
    id: "2",
    name: "Season 2",
    tag: "Competition Season",
    blurb:
      "Where it gets proven: practice matches, driver practice, and the robot on the competition floor.",
    facts: [
      ["Practice", "Weekly scrimmages and driver handoffs"],
      ["Events", "Qualifiers, then the championship run"],
      ["Pit work", "Checklists, spare parts and quick repairs between matches"],
    ],
  },
];

function Season() {
  const [open, setOpen] = useState<string | null>(null);
  const active = seasons.find((s) => s.id === open);

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <p className="hero-drop text-sm font-semibold uppercase tracking-[0.3em] text-primary" style={{ animationDelay: "0.05s" }}>
        Team 31944
      </p>
      <h1 className="hero-drop mt-3 text-5xl font-extrabold md:text-6xl" style={{ animationDelay: "0.2s" }}>
        Seasons
      </h1>

      <div className="hero-drop mt-12 flex flex-wrap gap-5" style={{ animationDelay: "0.4s" }}>
        {seasons.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setOpen(s.id)}
            aria-pressed={open === s.id}
            className={
              open === s.id
                ? "rounded-xl border-2 border-primary bg-primary px-8 py-5 font-display text-xl font-extrabold text-primary-foreground"
                : "rounded-xl border-2 border-primary/40 bg-card px-8 py-5 font-display text-xl font-extrabold text-primary transition-colors hover:bg-primary/10"
            }
          >
            {s.name}
          </button>
        ))}
      </div>

      {active ? (
        <div key={active.id} className="hero-drop mt-12 rounded-2xl border bg-card p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{active.tag}</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold">{active.name}</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">{active.blurb}</p>
          <dl className="mt-6 grid gap-6 sm:grid-cols-3">
            {active.facts.map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</dt>
                <dd className="mt-1 text-sm">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex aspect-video items-center justify-center rounded-xl border border-dashed text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Photos
          </div>
        </div>
      ) : (
        <p className="mt-12 text-sm text-muted-foreground">Pick a season above to see what we did.</p>
      )}
    </section>
  );
}
