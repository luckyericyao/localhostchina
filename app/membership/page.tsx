import { ButtonLink } from "@/components/button-link";
import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Membership | Localhost Global"
};

export default function MembershipPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <p className="text-sm uppercase tracking-[0.28em] text-clay">
          Host Credits
        </p>
        <h1 className="mt-7 max-w-4xl font-serif text-6xl leading-[0.98] text-balance text-ink sm:text-7xl">
          Hospitality should travel.
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-muted">
          When you host someone in your city, you earn Host Credits. In the
          future, you can use them to be hosted by trusted locals elsewhere in
          the world.
        </p>
        <p className="mt-8 font-serif text-3xl text-clay">
          Host at home. Travel back home somewhere else.
        </p>
        <div className="mt-10">
          <ButtonLink href="/hosts">Join the Host Network</ButtonLink>
        </div>
      </section>
    </PageShell>
  );
}
