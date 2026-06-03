import type { NextAuthConfig } from "next-auth";

/**
 * Edge-safe auth config — no Node.js-only modules.
 * Used by middleware.ts for session checking at the edge.
 */
export const authConfig: NextAuthConfig = {
  session: { strategy: "jwt" },
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn   = !!auth?.user;
      const isAdminRoute = nextUrl.pathname.startsWith("/admin");
      const isLoginPage  = nextUrl.pathname === "/admin/login";

      if (isAdminRoute && !isLoginPage && !isLoggedIn) return false;
      return true;
    },
  },
  providers: [],
};
