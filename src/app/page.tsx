import Link from "next/link";
import { Background } from "./_components/background";
import { Heading } from "./_components/heading";
import { Button } from "~/components/ui/button";
import { SiteFooter } from "~/components/site-footer";
import { Logo } from "~/components/logo";
import { Spinner } from "~/components/spinner";

export default async function Home() {
  return (
    <div className="relative flex h-screen flex-col overflow-x-hidden bg-background antialiased">
      <header className="z-50 flex w-full items-center border-b border-border bg-background p-6">
        <Logo />
        <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
          <Spinner />
        </div>
      </header>
      <div className="flex flex-1 flex-col bg-background">
        <div className="relative flex flex-1 flex-col items-center justify-center gap-y-8 px-6 pb-10 text-center">
          <Background />
          <Heading />
          <div className="flex items-center gap-2">
            <Link href="/overview" className="z-50">
              <Button className="inline-flex rounded-full border border-background">
                Get Started
              </Button>
            </Link>
            <Link
              href="/overview"
              className="animate-shine z-50 inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-2 text-sm font-medium text-neutral-400 transition-colors"
            >
              <span className="transition-all duration-300 hover:scale-[1.02]">
                Star on solana
              </span>
            </Link>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
