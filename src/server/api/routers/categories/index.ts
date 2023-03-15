import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../../trpc";

import type { Category, Product } from "~/interfaces";

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
  getAll: publicProcedure.query(async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = res.json() as Promise<Category[]>;
    return data;
  }),
});
