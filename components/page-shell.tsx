import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
