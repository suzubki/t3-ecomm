import { createTRPCRouter, publicProcedure } from "../../trpc";
import type { Product } from "~/interfaces";

export const productsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = res.json() as Promise<Product[]>;
    return data;
  }),
});
