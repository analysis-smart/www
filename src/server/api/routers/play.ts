import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const playRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          name: input.name,
        },
      });
    }),

  getPrice: publicProcedure
    .input(z.object({ token: z.string() }))
    .query(async ({ input }) => {
      const fetchPrice = async () => {
        const response = await fetch(
          "https://www.okx.com/api/v5/market/index-tickers?instId=SOL-USDT",
        );

        return response.json();
      };
      const data = await fetchPrice();

      return data;
    }),
});
