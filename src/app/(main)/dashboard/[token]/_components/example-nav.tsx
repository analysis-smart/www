"use client";

import Link from "next/link";

import { cn } from "~/lib/utils";
import { usePathname } from "next/navigation";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";

const examples = [
  {
    name: "btc",
    href: "/dashboard/btc",
  },
  {
    name: "sol",
    href: "/dashboard/sol",
  },
  {
    name: "jup",
    href: "/dashboard/jup",
  },
  {
    name: "zeus",
    href: "/dashboard/zeus",
  },
  {
    name: "w",
    href: "/dashboard/w",
  },
];

export function ExampleNav() {
  const pathname = usePathname();
  return (
    <div className="relative">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn("mb-4 flex items-center")}>
          {examples.map((example, index) => (
            <Link
              href={example.href}
              key={example.href}
              className={cn(
                "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
                pathname?.startsWith(example.href) ||
                  (index === 0 && pathname === "/")
                  ? "bg-muted font-medium text-primary"
                  : "text-foreground",
              )}
            >
              <span className="uppercase">{example.name}</span>
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  );
}
