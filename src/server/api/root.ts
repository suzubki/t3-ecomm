import { createTRPCRouter } from "~/server/api/trpc";

// Routers
import { exampleRouter } from "~/server/api/routers/example";
import { productsRouter } from "~/server/api/routers/products";
import { categoryRouter } from "~/server/api/routers/categories";
import { userRouter } from "~/server/api/routers/users";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  products: productsRouter,
  category: categoryRouter,
  users: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
