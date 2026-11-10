import { experience } from "@/data/profile";

export default function ExperienceTimeline() {
  return (
    <ol className="relative space-y-10 border-l border-zinc-200 pl-6 dark:border-zinc-800">
      {experience.map((item) => (
        <li key={`${item.role}-${item.organization}`} className="relative">
          <span className="absolute top-1.5 -left-[31px] h-3 w-3 rounded-full border-2 border-background bg-accent" />
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-semibold">
              {item.role}{" "}
              <span className="text-accent">@ {item.organization}</span>
            </h3>
            <p className="shrink-0 font-mono text-sm text-zinc-500">
              {item.period}
            </p>
          </div>
          <p className="text-sm text-zinc-500">{item.location}</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-zinc-600 dark:text-zinc-400">
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
