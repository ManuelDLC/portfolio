import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 py-16 sm:py-20">
      <h2 className="mb-8 flex items-center gap-4 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
        <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
      </h2>
      {children}
    </section>
  );
}
