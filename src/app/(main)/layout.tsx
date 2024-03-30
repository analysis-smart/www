import { SiteFooter } from "~/components/site-footer";
import { SiteHeader } from "~/components/site-header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative flex h-screen flex-col bg-background antialiased">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
