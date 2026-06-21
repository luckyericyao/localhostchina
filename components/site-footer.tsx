import Link from "next/link";
import { navItems } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-coffee text-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr] lg:px-10 lg:py-16">
        <div>
          <p className="font-serif text-3xl">Localhost Global</p>
          <p className="mt-2 text-sm uppercase tracking-[0.26em] text-paper/60">
            Travel Back Home.
          </p>
          <p className="mt-8 max-w-md text-pretty text-base leading-7 text-paper/72">
            Private local hosting, custom routes, and human access to the
            places worth understanding.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-paper/70 md:items-end">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-paper"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
