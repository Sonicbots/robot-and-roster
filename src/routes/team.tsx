import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Sonic Bots FTC" },
      { name: "description", content: "Meet the builders, programmers and outreach crew of the Sonic Bots FTC team." },
      { property: "og:title", content: "Team — Sonic Bots FTC" },
      { property: "og:description", content: "Meet the members of the Sonic Bots robotics team." },
    ],
  }),
  component: Team,
});

const members = [
  { n: "Dharun", r: "Goal: Design a faster, more reliable robot in CAD" },
  { n: "Dheechu", r: "Goal: Working Cad, while learning, pocketing and mastering, goal: Build a fully constrained, parametric. Robot model" },
  { n: "Hasini", r: "Goal: Tune pid every meeting and design decision" },
  { n: "Kavin", r: "Goal: Use odometry for accurate field position" },
  { n: "Nick", r: "Goal: Ensure models are accurate and manufacturable" },
  { n: "Pranay", r: "Goal: Use AprilTags for vision-based alignment" },
  { n: "Pranesh", r: "Goal: Grow leadership roles and advocate for first" },
  { n: "Sanjay", r: "Goal: Focus on documentation and mechanical" },
  { n: "Sumedh", r: "Goal: Write a consistent, accurate, autonomous program using Pedro Pathing" },
  { n: "Varnika", r: "Goal: Tune pid control for shooting consistency" },
  { n: "Viswa", r: "Goal: Design a every sub system as its own assembly" },
];

function Team() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">The crew</p>
      <h1 className="mt-3 text-5xl font-extrabold md:text-6xl">Meet the team</h1>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((m) => (
          <div key={m.n} className="rounded-xl border bg-card p-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-navy font-display text-2xl font-extrabold text-accent">
              {m.n.split(" ").map((w) => w[0]).join("")}
            </div>
            <h3 className="mt-5 text-xl font-bold">{m.n}</h3>
            <p className="text-sm text-muted-foreground">{m.r}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
