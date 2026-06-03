import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { sql } from "@vercel/postgres";
import bcrypt from "bcryptjs";
import { z } from "zod";

const loginSchema = z.object({
  email:    z.string().email(),
  password: z.string().min(8),
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id   = user.id;
        token.role = (user as { role?: string }).role ?? "editor";
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        (session.user as { id?: string; role?: string }).id   = token.id as string;
        (session.user as { id?: string; role?: string }).role = token.role as string;
      }
      return session;
    },
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email:    { label: "Email",    type: "email"    },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsed = loginSchema.safeParse(credentials);
        if (!parsed.success) return null;

        const { email, password } = parsed.data;

        try {
          const result = await sql`
            SELECT id, name, email, password_hash, role
            FROM admin_users
            WHERE email = ${email}
            LIMIT 1
          `;

          const user = result.rows[0];
          if (!user) return null;

          const valid = await bcrypt.compare(password, user.password_hash as string);
          if (!valid) return null;

          return {
            id:    String(user.id),
            name:  user.name  as string,
            email: user.email as string,
            role:  user.role  as string,
          };
        } catch {
          return null;
        }
      },
    }),
  ],
});
