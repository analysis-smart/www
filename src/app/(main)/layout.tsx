import { SiteFooter } from "~/components/site-footer";
import { SiteHeader } from "~/components/site-header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative flex h-screen flex-col bg-background antialiased">
      <SiteHeader />
      <main className="flex-1">
        <section className="container relative h-full flex-1 items-start pt-40 md:grid md:grid-cols-[14rem_minmax(0,1fr)] md:gap-6 lg:grid-cols-[17.5rem_minmax(0,1fr)] lg:gap-10">
          {children}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
