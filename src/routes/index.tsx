import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Journey } from "@/components/portfolio/Journey";
import { Hobbies } from "@/components/portfolio/Hobbies";
import { Skills } from "@/components/portfolio/Skills";
import { ResumeSection } from "@/components/portfolio/ResumeSection";
import { Certifications } from "@/components/portfolio/Certifications";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer, SocialRow } from "@/components/portfolio/Footer";
import { CursorGlow, LoadingScreen, ScrollToTop } from "@/components/portfolio/Extras";
import { Reveal } from "@/components/portfolio/Reveal";

const title = "Shivam Garg | Personal Portfolio";
const description =
  "Portfolio of Shivam Garg, a first-year B.Tech Computer Science student — projects, skills, certifications and resume.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <LoadingScreen />
      <CursorGlow />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Journey />
        <Hobbies />
        <Skills />
        <ResumeSection />
        <Certifications />
        <Projects />
        <Contact />

        <section id="social" className="pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal className="glass flex flex-col gap-6 rounded-3xl p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold">Let's connect</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Find me across the web — I reply fastest on email and LinkedIn.
                </p>
              </div>
              <SocialRow />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
