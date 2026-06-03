import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";

/**
 * Middleware uses only the edge-safe authConfig (no bcryptjs).
 * Full auth with Credentials provider lives in auth.ts (Node.js runtime only).
 */
export const { auth: middleware } = NextAuth(authConfig);

export default middleware;

export const config = {
  matcher: ["/admin/:path*"],
};
