import { auth } from "@/auth";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";

const schema = z.object({
  currentPassword: z.string().min(1),
  newPassword:     z.string().min(8),
});

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body   = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const { currentPassword, newPassword } = parsed.data;
    const email = session.user.email!;

    const result = await sql`SELECT password_hash FROM admin_users WHERE email = ${email} LIMIT 1`;
    const user   = result.rows[0];
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    const valid = await bcrypt.compare(currentPassword, String(user.password_hash));
    if (!valid) return NextResponse.json({ error: "Current password is incorrect" }, { status: 400 });

    const hash = await bcrypt.hash(newPassword, 12);
    await sql`UPDATE admin_users SET password_hash = ${hash} WHERE email = ${email}`;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("change-password:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
