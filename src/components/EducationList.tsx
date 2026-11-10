import { education } from "@/data/profile";

export default function EducationList() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {education.map((item) => (
        <article
          key={item.school}
          className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800"
        >
          <h3 className="font-semibold">{item.school}</h3>
          <p className="mt-1 text-accent">{item.degree}</p>
          <p className="mt-2 text-sm text-zinc-500">
            {item.start} – {item.end}
            {item.location && ` · ${item.location}`}
          </p>
          {item.details && (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}
