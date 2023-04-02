import { hash } from "bcrypt";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  create: publicProcedure.input(z.object({
    name: z.string().min(4),
    email: z.string().email(),
    password: z.string().min(8),
  })).mutation(async ({ ctx, input }) => {
    const { email, password, name } = input;
    // encrypt
    const hashedPassword = await hash(password, Number(process.env.SALT_ROUNDS) || 10);

    const user = await ctx.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    return user;
  }),
})