"use client";

import * as React from "react";

import type { DialogProps } from "@radix-ui/react-alert-dialog";

import { cn } from "~/lib/utils";

import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "~/components/ui/command";

import { Button } from "./ui/button";
import { Search } from "lucide-react";

export function CommandMenu({ ...props }: DialogProps) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative hidden h-10 w-auto items-center justify-start gap-2 rounded-[0.5rem] bg-background font-normal text-muted-foreground shadow-none sm:pr-12 lg:flex lg:w-96",
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <Search className="h-5 w-5" />
        <span className="hidden lg:inline-flex">Search...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.5rem] top-1/2 hidden  -translate-y-1/2 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <Button
        variant="ghost"
        className={cn(
          "relative h-10 w-auto items-center justify-start gap-2 rounded-[0.5rem] bg-background font-normal text-muted-foreground shadow-none sm:pr-12 lg:hidden lg:w-96",
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <Search className="h-5 w-5" />
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>Coming soon...</CommandEmpty>
        </CommandList>
      </CommandDialog>
    </>
  );
}
