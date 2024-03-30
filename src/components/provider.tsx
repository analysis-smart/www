"use client";

import React from "react";
import NextTopLoader from "nextjs-toploader";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { WalletConnectProvider } from "./wallet/wallet-connection-provider";
import { TooltipProvider } from "./ui/tooltip";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <WalletConnectProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
        storageKey="jotion-theme"
        {...props}
      >
        <NextTopLoader color="#979A9A"/>
        <TooltipProvider>{children}</TooltipProvider>
      </NextThemesProvider>
    </WalletConnectProvider>
  );
}
