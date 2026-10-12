import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Download, FileText, Mail } from "lucide-react";
import { counters, profile, typingRoles } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

function useTyping(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length] ?? "";
    const done = text === word;
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (done) setDeleting(true);
          else setText(word.slice(0, text.length + 1));
        } else if (text === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        } else {
          setText(word.slice(0, text.length - 1));
        }
      },
      deleting ? 45 : done ? 1400 : 85,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1400;
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setShown(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <span className="font-display text-2xl font-bold sm:text-3xl">
      {shown}
      {suffix}
    </span>
  );
}

export function Hero() {
  const typed = useTyping(typingRoles);

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/25 blur-3xl animate-float"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-float"
        style={{ animationDelay: "-3s" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="glass rounded-[2rem] p-3">
            <img
              src={profile.portrait}
              alt="Portrait of Shivam Garg standing beside a horse"
              width={800}
              height={620}
              className="aspect-[4/5] w-full rounded-[1.6rem] object-cover object-top"
            />
          </div>
          <div className="glass absolute -bottom-5 left-6 rounded-2xl px-4 py-3">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Based in</p>
            <p className="text-sm font-semibold">{profile.location}</p>
          </div>
        </motion.div>

        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Personal Portfolio
            </p>
            <h1 className="mt-4 text-4xl font-bold sm:text-6xl">
              <span className="text-gradient">{profile.name}</span>
            </h1>
            <p className="mt-3 text-base font-medium text-muted-foreground sm:text-lg">
              {profile.subtitle}
            </p>
            <p className="mt-5 font-display text-xl font-semibold sm:text-2xl">
              <span className="text-accent">{typed}</span>
              <span className="ml-0.5 animate-blink text-primary">|</span>
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              {profile.intro}
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <FileText className="h-4 w-4" /> View Resume
            </a>
            <a
              href={profile.resume}
              download="Shivam_Garg_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </Reveal>

          <Reveal delay={0.25} className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {counters.map((item) => (
              <div key={item.label} className="glass rounded-2xl p-4">
                <Counter value={item.value} suffix={item.suffix} />
                <p className="mt-1 text-xs leading-snug text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
