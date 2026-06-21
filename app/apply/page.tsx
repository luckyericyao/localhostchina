import { ButtonLink } from "@/components/button-link";
import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Apply | Localhost Global"
};

export default function ApplyPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <p className="text-sm uppercase tracking-[0.28em] text-clay">
          Application entry
        </p>
        <h1 className="mt-7 max-w-4xl font-serif text-6xl leading-[0.98] text-balance text-ink sm:text-7xl">
          Start a conversation with Localhost Global.
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-muted">
          Tell us whether you are planning a China trip or applying to host.
          The first version of Localhost keeps this entry simple while the
          network is being curated.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/china">Plan a China Trip</ButtonLink>
          <ButtonLink href="/hosts" variant="secondary">
            Become a Host
          </ButtonLink>
        </div>
      </section>
    </PageShell>
  );
}
