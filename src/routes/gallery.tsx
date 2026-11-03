import { createFileRoute } from "@tanstack/react-router";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

const seasons = [
  {
    name: "Season One",
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
    name: "Season Two",
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

const slots = [
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
        <Dialog>
          <DialogTrigger className="group flex aspect-video cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-primary/40 bg-card text-sm font-semibold uppercase tracking-widest text-primary transition-colors hover:bg-primary/10">
            Build season
            <span className="text-[11px] font-medium normal-case tracking-normal text-muted-foreground group-hover:text-primary">
              Press to see both seasons
            </span>
          </DialogTrigger>
          <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle className="font-display text-3xl font-extrabold">Build season</DialogTitle>
              <DialogDescription>
                Two season categories, each with their own information.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-5 sm:grid-cols-2">
              {seasons.map((s) => (
                <div key={s.name} className="rounded-xl border bg-card p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{s.tag}</p>
                  <h3 className="mt-2 font-display text-xl font-bold">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
                  <dl className="mt-4 space-y-3">
                    {s.facts.map(([label, value]) => (
                      <div key={label}>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</dt>
                        <dd className="mt-0.5 text-sm">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-4 flex aspect-video items-center justify-center rounded-lg border border-dashed text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Photos
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>

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
