import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/robot")({
  head: () => ({
    meta: [
      { title: "Our Robot — Sonic Bots FTC" },
      { name: "description", content: "Drivetrain, mechanisms and code behind the Sonic Bots competition robot." },
      { property: "og:title", content: "Our Robot — Sonic Bots FTC" },
      { property: "og:description", content: "How the Sonic Bots built this season's FTC robot." },
    ],
  }),
  component: Robot,
});

const specs = [
  { t: "Drivetrain", d: "Mecanum drive for full omnidirectional movement." },
  { t: "Intake", d: "Fast active intake to grab game elements in one pass." },
  { t: "Lift", d: "Linear slide system to reach the highest scoring zones." },
  { t: "Autonomous", d: "Encoder and vision-based paths for consistent auto points." },
  { t: "Software", d: "Java with the FTC SDK, tuned PID control and driver assists." },
  { t: "Design", d: "Fully modeled in CAD before a single part is cut." },
];

function Robot() {
  return (
    <>
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">This season</p>
          <h1 className="mt-3 text-5xl font-extrabold md:text-6xl">The robot</h1>
          <p className="mt-4 max-w-xl opacity-80">Every season starts from scratch. Here's what went into this year's machine.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-5 px-6 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {specs.map((s) => (
          <div key={s.t} className="rounded-xl border-l-4 border-primary bg-card p-7 shadow-sm">
            <h3 className="text-2xl font-bold">{s.t}</h3>
            <p className="mt-2 text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </section>
    </>
  );
}
