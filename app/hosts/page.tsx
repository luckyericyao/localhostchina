import { ButtonLink } from "@/components/button-link";
import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Hosts | Localhost Global"
};

export default function HostsPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <p className="text-sm uppercase tracking-[0.28em] text-clay">
          Host network
        </p>
        <h1 className="mt-7 max-w-4xl font-serif text-6xl leading-[0.98] text-balance text-ink sm:text-7xl">
          Show your city to people who are genuinely curious.
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-muted">
          Localhost is for people with local taste, cultural awareness, and the
          ability to make a traveler feel welcomed, not processed.
        </p>
        <div className="mt-10">
          <ButtonLink href="/apply">Apply to Become a Host</ButtonLink>
        </div>
      </section>
    </PageShell>
  );
}
