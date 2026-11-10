import EducationList from "@/components/EducationList";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import SkillGroups from "@/components/SkillGroups";
import { about, basics, projects } from "@/data/profile";
import { withBasePath } from "@/lib/paths";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6">
        <Hero />

        <Section id="about" title="About">
          <div className="max-w-3xl space-y-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <EducationList />
        </Section>

        <Section id="experience" title="Experience">
          <ExperienceTimeline />
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <SkillGroups />
        </Section>

        <Section id="contact" title="Contact">
          <div className="max-w-2xl">
            <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
              I&apos;m currently open to software engineering internships and
              new-grad opportunities. The best way to reach me is by email.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${basics.email}`}
                className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:text-zinc-950"
              >
                {basics.email}
              </a>
              <a
                href={withBasePath(basics.resumePath)}
                download
                className="rounded-md border border-zinc-300 px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent dark:border-zinc-700"
              >
                Download Resume
              </a>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
