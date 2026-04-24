import { productRouter } from "~/server/api/routers/product";
import { contactRouter } from "~/server/api/routers/contact";

import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  product: productRouter,
  contact: contactRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);