import { z } from "zod";
import { Product } from "~/interfaces";
import { createTRPCRouter, publicProcedure } from "../../trpc";

export const categoryRouter = createTRPCRouter({
  getIn: publicProcedure
    .input(z.object({ category: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${input.category}?limit=4`
      );
      const data = res.json() as Promise<Product[]>;
      return data;
    }),
});
