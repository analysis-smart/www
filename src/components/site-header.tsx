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
    name: "Home",
    link: "overview",
  },
  {
    name: "Dashboard",
    link: "dashboard",
  },
];

export function SiteHeader() {
  const ref = React.useRef<HTMLElement>(null);

  const pathname = usePathname();

  return (
    <header
      ref={ref}
      className="bg-background-light fixed top-0 z-30 w-screen flex-none bg-background/95 backdrop-blur transition-colors duration-500 supports-[backdrop-filter]:bg-background/60"
    >
      <div className="h-20 space-y-2.5 border-border/40">
        <div className="container grid h-full grid-cols-3 items-center py-4">
          <Logo />
          <div className="col-span-2 flex items-center justify-end lg:justify-between">
            <CommandMenu />
            <WalletButton />
          </div>
        </div>
        <div className="container mx-auto hidden items-center space-x-6 border-b border-border px-12 text-sm lg:flex">
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
