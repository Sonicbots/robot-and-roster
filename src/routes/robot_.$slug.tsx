import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import decodePhoto from "@/assets/decode-season-robot.png.asset.json";
import { findRobotDetail } from "@/lib/robot-details";

export const Route = createFileRoute("/robot_/$slug")({
  loader: ({ params }) => {
    const detail = findRobotDetail(params.slug);
    if (!detail) throw notFound();
    return detail;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Robot detail unavailable"} — Sonic Bots FTC` },
      { name: "description", content: loaderData?.intro ?? "Explore the Sonic Bots robot." },
      { property: "og:title", content: `${loaderData?.title ?? "Robot detail unavailable"} — Sonic Bots FTC` },
      { property: "og:description", content: loaderData?.intro ?? "Explore the Sonic Bots robot." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(loaderData ? [] : [{ name: "robots", content: "noindex" }]),
    ],
  }),
  component: RobotDetail,
});

function RobotDetail() {
  const detail = Route.useLoaderData();
  return (
    <>
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <Link to="/robot" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline focus-visible:outline-2 focus-visible:outline-ring">
            <ArrowLeft className="size-4" aria-hidden="true" /> Our robot
          </Link>
          <p className="hero-drop mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-accent">Sonic Bots · #31944</p>
          <h1 className="hero-drop mt-3 text-4xl font-extrabold md:text-6xl">{detail.title}</h1>
          <p className="hero-drop mt-5 max-w-3xl text-lg leading-relaxed text-navy-foreground/80">{detail.intro}</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <figure>
          <img src={decodePhoto.url} alt="Sonic Bots DECODE robot with its front intake and team number 31944 on an arena floor" className="aspect-[3/2] w-full rounded-lg object-cover md:aspect-[16/9]" />
          <figcaption className="mt-3 text-sm text-muted-foreground">DECODE robot · Team 31944</figcaption>
        </figure>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {detail.sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-bold">{section.title}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{section.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}