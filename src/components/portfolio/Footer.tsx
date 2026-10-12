import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";

const socials = [
  { icon: Github, href: profile.github, label: "GitHub" },
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: Instagram, href: profile.instagram, label: "Instagram" },
  { icon: Twitter, href: profile.x, label: "X (Twitter)" },
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
];

export function SocialRow() {
  return (
    <ul className="flex flex-wrap gap-3">
      {socials.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={item.label}
            className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/10 hover:text-primary"
          >
            <item.icon className="h-4 w-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold">
            Shivam<span className="text-primary">.</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            B.Tech CSE student building small projects and learning something new every week.
          </p>
        </div>

        <nav aria-label="Quick links">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Quick links</p>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Follow</p>
          <div className="mt-3">
            <SocialRow />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 px-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>Copyright © 2026 Shivam Garg</p>
        <p>Designed &amp; Developed by Shivam Garg</p>
      </div>
    </footer>
  );
}
