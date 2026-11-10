import { basics } from "@/data/profile";
import { withBasePath } from "@/lib/paths";

export default function Hero() {
  return (
    <section id="top" className="pt-20 pb-12 sm:pt-28">
      <p className="mb-3 font-mono text-sm text-accent">Hi, my name is</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        {basics.name}
      </h1>
      <p className="mt-3 text-xl text-zinc-600 sm:text-2xl dark:text-zinc-400">
        {basics.headline}
      </p>
      <p className="mt-6 max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
        {basics.tagline}
      </p>
      <p className="mt-2 text-sm text-zinc-500">{basics.location}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={withBasePath(basics.resumePath)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:text-zinc-950"
        >
          View Resume
        </a>
        <a
          href={`mailto:${basics.email}`}
          className="rounded-md border border-zinc-300 px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent dark:border-zinc-700"
        >
          Email Me
        </a>
        {basics.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-zinc-300 px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent dark:border-zinc-700"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
