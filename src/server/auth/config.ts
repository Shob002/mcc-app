import { PrismaAdapter } from "@auth/prisma-adapter";
import { type NextAuthConfig } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

import { db } from "~/server/db";

export const authConfig = {
  providers: [DiscordProvider],
  adapter: PrismaAdapter(db),

  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
        role: (user.role ?? "USER") as "ADMIN" | "USER",
      },
    }),
  },
} satisfies NextAuthConfig;