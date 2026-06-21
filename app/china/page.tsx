import { ButtonLink } from "@/components/button-link";
import { PageShell } from "@/components/page-shell";
import { journeys } from "@/lib/content";

export const metadata = {
  title: "China | Localhost Global"
};

export default function ChinaPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <p className="text-sm uppercase tracking-[0.28em] text-clay">
          First launch market
        </p>
        <h1 className="mt-7 max-w-4xl font-serif text-6xl leading-[0.98] text-balance text-ink sm:text-7xl">
          China opens differently with someone local.
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-muted">
          Curated local-host journeys for travelers who want context,
          confidence, and a more human way into the country.
        </p>
        <div className="mt-10">
          <ButtonLink href="/apply">Plan a China Trip</ButtonLink>
        </div>
      </section>
      <section className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-7xl gap-px px-5 py-16 sm:px-8 md:grid-cols-2 lg:px-10">
          {journeys.map((journey) => (
            <article key={journey.city} className="border-t border-line py-8">
              <h2 className="font-serif text-4xl text-ink">{journey.city}</h2>
              <p className="mt-4 text-lg text-ink">{journey.line}</p>
              <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted">
                {journey.copy}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
