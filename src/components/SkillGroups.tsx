import { skills } from "@/data/profile";

export default function SkillGroups() {
  return (
    <dl className="space-y-6">
      {skills.map((group) => (
        <div
          key={group.category}
          className="grid gap-3 sm:grid-cols-[10rem_1fr] sm:gap-6"
        >
          <dt className="pt-1 font-medium">{group.category}</dt>
          <dd className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-zinc-200 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
