import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  session: { strategy: "jwt" },
  callbacks: {
    async signIn({ profile }) {
      const emails = process.env.ADMINS!.toLowerCase().split(",");
      const user = emails.includes((profile && profile.email) || "");
      return !!user;
    },
  },
  pages: { error: "/auth/error", signIn: "/auth/signin" },
  providers: [],
} satisfies NextAuthConfig;
