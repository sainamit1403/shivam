import { motion } from "motion/react";
import { skillGroups } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What I Bring"
          title="Skills"
          description="A snapshot of where I am today — and everything is still improving week by week."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.1}>
              <div className="glass h-full rounded-3xl p-6 sm:p-8">
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <div className="mt-6 space-y-5">
                  {group.skills.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between gap-3 text-sm">
                        <span className="min-w-0 truncate font-medium">{skill.name}</span>
                        <span className="shrink-0 text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: 1, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
