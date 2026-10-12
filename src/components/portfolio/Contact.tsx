import { useState } from "react";
import { CheckCircle2, Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

const empty = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof typeof empty, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
    setSent(false);
  };

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email address.";
    if (values.subject.trim().length < 3) next.subject = "Add a short subject.";
    if (values.message.trim().length < 10) next.message = "Tell me a little more (10+ characters).";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      setValues(empty);
    }
  };

  const details = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    { icon: MapPin, label: "Location", value: profile.location },
    { icon: Github, label: "GitHub", value: "github.com/shivamgarg", href: profile.github },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/shivamgarg", href: profile.linkedin },
    { icon: Instagram, label: "Instagram", value: "@shivamgarg", href: profile.instagram },
  ];

  const field =
    "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30";

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Get In Touch"
          description="Have an idea, an opportunity or just want to say hello? Send a message."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
          <Reveal className="glass rounded-3xl p-6 sm:p-8">
            <p className="font-display text-xl font-semibold">{profile.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{profile.subtitle}</p>
            <ul className="mt-6 space-y-4">
              {details.map((item) => (
                <li key={item.label} className="flex min-w-0 items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="block truncate text-sm font-medium hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="truncate text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="glass rounded-3xl p-6 sm:p-8">
            <form onSubmit={submit} noValidate className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    className={field}
                    value={values.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your name"
                  />
                  {errors.name ? (
                    <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={field}
                    value={values.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@example.com"
                  />
                  {errors.email ? (
                    <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                  ) : null}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  className={field}
                  value={values.subject}
                  onChange={(e) => update("subject", e.target.value)}
                  placeholder="What is this about?"
                />
                {errors.subject ? (
                  <p className="mt-1 text-xs text-destructive">{errors.subject}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={field}
                  value={values.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Write your message..."
                />
                {errors.message ? (
                  <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                ) : null}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setValues(empty);
                    setErrors({});
                    setSent(false);
                  }}
                  className="rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  Reset Form
                </button>
              </div>

              {sent ? (
                <p
                  role="status"
                  className="flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-3 text-sm font-medium text-primary"
                >
                  <CheckCircle2 className="h-4 w-4" /> Thanks! Your message has been recorded — I'll
                  reply by email soon.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
