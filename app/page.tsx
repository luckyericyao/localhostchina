import { arrangements, journeys } from "@/lib/content";
import { ButtonLink } from "@/components/button-link";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";

export default function Home() {
  const signals = [
    "Private routes",
    "Trusted hosts",
    "Local context",
    "Human access"
  ];

  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-line bg-paper">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-16 sm:px-8 sm:pb-28 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-32 lg:pt-28">
          <div className="fade-up max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-clay">
              Localhost Global
            </p>
            <h1 className="mt-8 max-w-5xl font-serif text-6xl leading-[0.95] text-balance text-ink sm:text-7xl lg:text-8xl">
              Travel Back Home.
            </h1>
            <p className="mt-8 font-serif text-3xl leading-tight text-coffee sm:text-4xl">
              Every place is someone&apos;s home.
            </p>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted sm:text-xl sm:leading-9">
              Localhost connects thoughtful travelers with trusted local hosts,
              private routes, and seamless local support, starting with China.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/china">Explore China</ButtonLink>
              <ButtonLink href="/hosts" variant="secondary">
                Become a Host
              </ButtonLink>
            </div>
          </div>
          <div className="lg:flex lg:items-end lg:justify-end">
            <div className="w-full border-y border-line py-8 lg:max-w-md">
              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                {signals.map((item, index) => (
                  <div key={item}>
                    <p className="font-serif text-4xl text-clay">
                      0{index + 1}
                    </p>
                    <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading title="A different way to travel">
            <p>Standard travel shows you places. Localhost helps you enter them.</p>
          </SectionHeading>
          <div className="space-y-7 text-pretty text-xl leading-9 text-ink sm:text-2xl sm:leading-10">
            <p>
              We pair travelers with local hosts who understand the city, the
              culture, the food, the roads, and the small decisions that make a
              place feel real.
            </p>
            <p className="font-serif text-3xl leading-tight text-clay sm:text-4xl">
              Not a tour group. Not a checklist. A local way in.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10 lg:py-28">
          <SectionHeading eyebrow="First launch market" title="Starting with China">
            <p>China is easy to visit. It is harder to understand.</p>
          </SectionHeading>
          <div className="space-y-7 text-pretty text-lg leading-8 text-muted">
            <p>
              From ancient towns and mountain temples to modern streets, private
              dining rooms, night markets, local trains, and family-style
              hospitality, China opens differently when someone local brings you
              in.
            </p>
            <p>
              Localhost begins with curated China journeys for travelers who
              want more than standard tourism.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading title="What we arrange" />
          <div className="grid gap-px overflow-hidden border-y border-line bg-line md:grid-cols-2">
            {arrangements.map((item) => (
              <article key={item.title} className="bg-ivory p-7 sm:p-9">
                <h3 className="font-serif text-3xl text-ink">{item.title}</h3>
                <p className="mt-5 text-pretty text-base leading-7 text-muted">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-coffee text-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.24em] text-paper/55">
                Signature China journeys
              </p>
              <h2 className="max-w-3xl font-serif text-4xl leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
                Four ways into the first home.
              </h2>
            </div>
            <ButtonLink href="/china" variant="dark">
              Explore China
            </ButtonLink>
          </div>
          <div className="mt-14 grid border-t border-paper/20 md:grid-cols-2">
            {journeys.map((journey) => (
              <article
                key={journey.city}
                className="border-b border-paper/20 py-9 md:odd:border-r md:odd:pr-10 md:even:pl-10"
              >
                <p className="font-serif text-4xl">{journey.city}</p>
                <p className="mt-4 text-lg text-paper">{journey.line}</p>
                <p className="mt-5 text-pretty text-base leading-7 text-paper/68">
                  {journey.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-28">
        <article className="border-t border-line pt-10">
          <SectionHeading eyebrow="For travelers" title="Come with curiosity.">
            <p>We handle the local complexity.</p>
            <p>
              Whether it is your first time in China or your tenth, Localhost
              helps you move through the country with confidence, context, and a
              real human connection.
            </p>
          </SectionHeading>
          <div className="mt-9">
            <ButtonLink href="/china">Plan a China Trip</ButtonLink>
          </div>
        </article>
        <article className="border-t border-line pt-10">
          <SectionHeading eyebrow="For local hosts" title="Show your city.">
            <p>Show your city to people who are genuinely curious.</p>
            <p>
              Localhost is for people with local taste, cultural awareness, and
              the ability to make a traveler feel welcomed, not processed.
            </p>
          </SectionHeading>
          <ul className="mt-8 space-y-3 text-lg text-ink">
            {[
              "Host travelers.",
              "Earn income.",
              "Build global connections.",
              "Collect Host Credits for your own future trips."
            ].map((item) => (
              <li key={item} className="border-t border-line py-3">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <ButtonLink href="/apply">Apply to Become a Host</ButtonLink>
          </div>
        </article>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:py-28">
          <SectionHeading eyebrow="Host Credits" title="Hospitality should travel." />
          <div className="space-y-7 text-pretty text-xl leading-9 text-ink">
            <p>
              When you host someone in your city, you earn Host Credits. In the
              future, you can use them to be hosted by trusted locals elsewhere
              in the world.
            </p>
            <p className="font-serif text-3xl leading-tight text-clay sm:text-4xl">
              Host at home. Travel back home somewhere else.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs uppercase tracking-[0.24em] text-clay">
            Our first home is China
          </p>
          <h2 className="font-serif text-5xl leading-[1.02] text-balance text-ink sm:text-6xl lg:text-7xl">
            A worldwide local-host network, beginning with one of the most
            rewarding places to understand deeply.
          </h2>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-muted">
            Localhost Global is building a worldwide local-host network. We are
            starting with China because it rewards depth, context, patience, and
            a real person beside you.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/china">Explore China</ButtonLink>
            <ButtonLink href="/hosts" variant="secondary">
              Join the Host Network
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
