"use client";

import React from "react";

import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

interface PriceProps {
  token: string;
}

export function Price({ token }: PriceProps) {
  return (
    <div className="h-96 w-full border">
      <AdvancedRealTimeChart
        theme="dark"
        autosize
        symbol={`${token.toUpperCase()}USDT`}
      ></AdvancedRealTimeChart>
    </div>
  );
}
