import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/team", label: "About" },
  { to: "/robot", label: "Robot" },
  { to: "/gallery", label: "Season" },
  { to: "/outreach", label: "Outreach" },
  { to: "/awards", label: "Sponsors" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-ink/90 text-navy-foreground backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-10 px-6 py-4">
        <Link to="/" className="font-display text-xl font-extrabold">
          SONIC<span className="text-primary"> BOTS</span>
        </Link>
        <nav className="flex gap-5 text-sm">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="opacity-70 hover:opacity-100" activeProps={{ className: "opacity-100 text-accent" }} activeOptions={{ exact: true }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <span className="-ml-6 inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-display text-lg font-extrabold tracking-wider text-primary sm:text-xl">
          #31944
        </span>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink py-10 text-center text-sm text-navy-foreground/60">
      Sonic Bots · FIRST Tech Challenge Team · {new Date().getFullYear()}
    </footer>
  );
}
