import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Sponsor — Sonic Bots FTC" },
      { name: "description", content: "Get in touch with or sponsor the Sonic Bots FIRST Tech Challenge team." },
      { property: "og:title", content: "Contact & Sponsor — Sonic Bots FTC" },
      { property: "og:description", content: "Support the Sonic Bots robotics team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Get in touch</p>
      <h1 className="mt-3 text-5xl font-extrabold md:text-6xl">Join, support or sponsor</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        Sponsors help us buy parts, travel to events and run outreach. We'd love to hear from you.
      </p>
      <a href="mailto:sonicbots@example.com" className="mt-10 inline-block rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground hover:opacity-90">
        sonicbots@example.com
      </a>
    </section>
  );
}
