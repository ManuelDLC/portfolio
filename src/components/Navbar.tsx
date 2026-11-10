import { basics, navItems } from "@/data/profile";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-background/80 backdrop-blur dark:border-zinc-800/70">
      <nav className="mx-auto flex max-w-4xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="shrink-0 font-semibold tracking-tight">
          {basics.name}
        </a>
        <ul className="flex gap-5 overflow-x-auto text-sm text-zinc-600 dark:text-zinc-400">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="whitespace-nowrap transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
