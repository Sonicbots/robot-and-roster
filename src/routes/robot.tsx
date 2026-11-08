import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { robotDetails } from "@/lib/robot-details";

export const Route = createFileRoute("/robot")({
  head: () => ({
    meta: [
      { title: "Our Robot — Sonic Bots FTC" },
      { name: "description", content: "Drivetrain, mechanisms and code behind the Sonic Bots competition robot." },
      { property: "og:title", content: "Our Robot — Sonic Bots FTC" },
      { property: "og:description", content: "How the Sonic Bots built this season's FTC robot." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Robot,
});

function Robot() {
  return (
    <>
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="hero-drop text-sm font-semibold uppercase tracking-[0.3em] text-accent" style={{ animationDelay: "0.05s" }}>This season</p>
          <h1 className="hero-drop mt-3 text-5xl font-extrabold md:text-6xl" style={{ animationDelay: "0.2s" }}>The robot</h1>
          <p className="hero-drop mt-4 max-w-xl opacity-80" style={{ animationDelay: "0.4s" }}>Every season starts from scratch. Here's what went into this year's machine.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-5 px-6 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {robotDetails.map((s) => (
          <Link key={s.slug} to="/robot/$slug" params={{ slug: s.slug }} className="group rounded-lg border-l-4 border-primary bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-2xl font-bold group-hover:text-primary">{s.title}</h3>
              <ArrowUpRight className="size-5 shrink-0 text-primary" aria-hidden="true" />
            </div>
            <p className="mt-2 text-muted-foreground">{s.summary}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
