import Link from "next/link";
import { navItems } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/88 backdrop-blur-xl">
      <div className="mx-auto flex h-[var(--header-height)] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex min-w-0 flex-col leading-none"
          aria-label="Localhost Global home"
        >
          <span className="font-serif text-xl text-ink sm:text-2xl">
            Localhost Global
          </span>
          <span className="mt-1 text-[0.65rem] uppercase tracking-[0.24em] text-muted">
            Travel Back Home
          </span>
        </Link>
        <nav
          className="hidden items-center gap-7 text-sm text-muted md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/apply"
          className="inline-flex min-h-10 items-center justify-center border border-ink px-4 text-sm text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Apply
        </Link>
      </div>
    </header>
  );
}
