import { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig = {
  providers: [
    Credentials({
      name: "Admin Login",
      credentials: {
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        const password = credentials?.password;

        if (
          typeof password === "string" &&
          password === process.env.ADMIN_PASSWORD
        ) {
          return {
            id: "1",
            name: "Admin",
            email: "admin@mcc.com",
            role: "ADMIN",
          };
        }

        return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as any).id;
        token.role = (user as any).role ?? "USER";
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id as string;
        (session.user as any).role = token.role as "ADMIN" | "USER";
      }

      return session;
    },
  },

  pages: {
    signIn: "/admin/login",
  },
} satisfies NextAuthConfig;