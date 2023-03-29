import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../../trpc";

import { compare } from "bcrypt";

export const userRouter = createTRPCRouter({
  create: publicProcedure.input(z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
  })).mutation(async ({ ctx, input }) => {
    const { email, password, name } = input;
    const user = await ctx.prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });

    return user;
  }),
  // Login with email and password
  login: publicProcedure.input(z.object({
    email: z.string().email(),
    password: z.string().min(8),
  })).mutation(async ({ ctx, input }) => {
    const { email, password } = input;
    const user = await ctx.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) return null

    // Compare password with hash
    const isPasswordOk = await compare(password, user.password!)
    if (!isPasswordOk) return null

    return user;
  }),
})