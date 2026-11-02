import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-robot.jpg";
import { FallingTools } from "@/components/FallingTools";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sonic Bots — FIRST Tech Challenge Team" },
      { name: "description", content: "Sonic Bots is a FIRST Tech Challenge robotics team building, coding and competing together." },
      { property: "og:title", content: "Sonic Bots — FIRST Tech Challenge Team" },
      { property: "og:description", content: "Meet the Sonic Bots FTC robotics team, our robot and our season." },
    ],
  }),
  component: Index,
});

const stats = [
  { n: "FTC", l: "FIRST Tech Challenge" },
  { n: "  11", l: "Team members" },
  { n: "6", l: "CAD Members" },
  { n: "5", l: "Programming Members" },
];

const cards = [
  { t: "Build", d: "We design, CAD and machine every part of our competition robot.", to: "/robot" },
  { t: "Code", d: "Autonomous paths, sensors and driver controls written in Java.", to: "/robot" },
  { t: "Team", d: "Builders, programmers and outreach leads working as one.", to: "/team" },
  { t: "Outreach", d: "Demos and workshops to bring STEM to our community.", to: "/contact" },
  { t: "Compete", d: "Qualifiers, league meets and — we hope — states.", to: "/robot" },
  { t: "Sponsor us", d: "Help fund parts, travel and registration fees.", to: "/contact" },
] as const;

function Index() {
  return (
    <>
      <section className="relative isolate min-h-[85vh] overflow-hidden bg-ink text-navy-foreground">
        <img src={hero} alt="Sonic Bots robot on the competition field" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-fade" />
        <FallingTools variant="hero" />
        <div className="mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-end px-6 pb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">FIRST Tech Challenge</p>
          <h1 className="text-6xl font-extrabold leading-none md:text-8xl">
            Sonic<br /><span className="text-primary">Bots</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg opacity-80">A team consisting of 11 members each with their own job and role in creating the overall robot.</p>
          <div className="mt-8 flex gap-3">
            <Link to="/team" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">Meet the team</Link>
            <Link to="/robot" className="rounded-full border border-navy-foreground/30 px-6 py-3 font-semibold hover:bg-navy-foreground/10">See the robot</Link>
          </div>
        </div>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl font-extrabold text-accent">{s.n}</div>
              <div className="mt-1 text-sm opacity-70">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-4xl font-extrabold md:text-5xl">What we do</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Link key={c.t} to={c.to} className="group rounded-xl border bg-card p-7 transition hover:-translate-y-1 hover:border-primary">
              <span className="font-display text-sm text-primary">0{i + 1}</span>
              <h3 className="mt-3 text-2xl font-bold group-hover:text-primary">{c.t}</h3>
              <p className="mt-2 text-muted-foreground">{c.d}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
