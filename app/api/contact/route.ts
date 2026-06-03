import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name:    z.string().min(1).max(100),
  company: z.string().max(100).optional(),
  email:   z.string().email(),
  phone:   z.string().max(30).optional(),
  service: z.enum(["ai", "cybersecurity", "web", "wordpress", "other"]),
  message: z.string().min(10).max(2000),
});

export async function POST(req: Request) {
  try {
    const body   = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const { name, company, email, phone, service, message } = parsed.data;

    await sql`
      INSERT INTO contact_messages (name, company, email, phone, service, message, read)
      VALUES (
        ${name},
        ${company ?? null},
        ${email},
        ${phone ?? null},
        ${service},
        ${message},
        false
      )
    `;

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("POST /api/contact:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
