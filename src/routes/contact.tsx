import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Sponsor — Sonic Bots FTC" },
      { name: "description", content: "Get in touch with or sponsor the Sonic Bots FIRST Tech Challenge team." },
      { property: "og:title", content: "Contact & Sponsor — Sonic Bots FTC" },
      { property: "og:description", content: "Support the Sonic Bots robotics team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="hero-drop text-sm font-semibold uppercase tracking-[0.3em] text-primary" style={{ animationDelay: "0.05s" }}>Get in touch</p>
      <h1 className="hero-drop mt-3 text-5xl font-extrabold md:text-6xl" style={{ animationDelay: "0.2s" }}>Join, support or sponsor</h1>
      <p className="hero-drop mt-6 text-lg text-muted-foreground" style={{ animationDelay: "0.4s" }}>
        Sponsors help us buy parts, travel to events and run outreach. We'd love to hear from you.
      </p>
      <a href="mailto:sonicbots@example.com" className="hero-drop mt-10 inline-block rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground hover:opacity-90" style={{ animationDelay: "0.55s" }}>
        sonicbots@example.com
      </a>
    </section>
  );
}
