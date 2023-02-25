import { Product } from "~/interfaces";
import { createTRPCRouter, publicProcedure } from "../../trpc";

export const productsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = res.json() as Promise<Product[]>;
    return data;
  }),
});
