import type { Project } from "@/data/profile";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-lg border border-zinc-200 p-6 transition-colors hover:border-accent dark:border-zinc-800">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <span className="shrink-0 font-mono text-sm text-zinc-500">
          {project.year}
        </span>
      </div>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">{project.summary}</p>
      <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
        {project.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent"
          >
            {tech}
          </li>
        ))}
      </ul>
      {(project.repoUrl || project.demoUrl) && (
        <div className="mt-5 flex gap-4 text-sm font-medium">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              Link to Repository →
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              Live Demo →
            </a>
          )}
        </div>
      )}
    </article>
  );
}
