import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.product.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        scientific: z.string().min(1),
        category: z.string().min(1),
        image: z.string().min(1),
        alt: z.string().min(1),
        description: z.string().min(1),
        featured: z.boolean(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.product.create({
        data: input,
      });
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.string().min(1),
        title: z.string().min(1),
        scientific: z.string().min(1),
        category: z.string().min(1),
        image: z.string().min(1),
        alt: z.string().min(1),
        description: z.string().min(1),
        featured: z.boolean(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.product.update({
        where: { id: input.id },
        data: {
          title: input.title,
          scientific: input.scientific,
          category: input.category,
          image: input.image,
          alt: input.alt,
          description: input.description,
          featured: input.featured,
        },
      });
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.product.delete({
        where: { id: input.id },
      });
    }),
});