"use client";

import React from "react";

import { Logo } from "./logo";
import { CommandMenu } from "./command-menu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import { WalletButton } from "./wallet/wallet-button";

interface TabProps {
  name: string;
  link: string;
}

const tabs: TabProps[] = [
  {
    name: "Over view",
    link: "overview",
  },
  {
    name: "Dashboard",
    link: "dashboard/btc",
  },
];

export function SiteHeader() {
  const ref = React.useRef<HTMLElement>(null);

  const pathname = usePathname();

  return (
    <header
      ref={ref}
      className="fixed top-0 z-50 w-screen flex-none backdrop-blur transition-colors duration-500 supports-[backdrop-filter]:bg-background/95"
    >
      <div className="h-20 border-border/40 bg-background/95">
        <div className="container grid h-full grid-cols-3 items-center py-4">
          <Logo />
          <div className="col-span-2 flex items-center justify-end lg:justify-between">
            <CommandMenu />
            <WalletButton />
          </div>
        </div>
        <div className="container z-50 mx-auto  items-center space-x-6 border-b border-border bg-background px-12  pt-2.5 text-sm lg:flex">
          {tabs.map((tab) => (
            <Link
              href={tab.link}
              className={cn(
                "group border-foreground/50 pb-[6px] first:-ml-3 hover:border-b",
                tab.link === pathname.replace(/^\/+/, "") &&
                  "border-b border-foreground",
              )}
              key={tab.name.toLowerCase()}
            >
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "inline-flex items-center rounded-lg px-3 py-1 text-base font-light text-foreground/90 transition-colors duration-300 hover:bg-transparent focus-visible:ring-0",
                  tab.link === pathname.replace(/^\/+/, "") && "",
                )}
              >
                {tab.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
