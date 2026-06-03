import { auth } from "@/auth";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { z } from "zod";

const postSchema = z.object({
  title:     z.string().min(1).max(200),
  slug:      z.string().min(1).max(200).regex(/^[a-z0-9-]+$/),
  excerpt:   z.string().min(1).max(500),
  content:   z.string().min(1),
  category:  z.string().min(1),
  image:     z.string().max(50),
  published: z.boolean(),
});

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body   = await req.json();
    const parsed = postSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const { title, slug, excerpt, content, category, image, published } = parsed.data;

    // Check slug uniqueness
    const existing = await sql`SELECT id FROM blog_posts WHERE slug = ${slug}`;
    if (existing.rows.length > 0) {
      return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
    }

    const result = await sql`
      INSERT INTO blog_posts (title, slug, excerpt, content, category, image, published, read_time, author)
      VALUES (
        ${title}, ${slug}, ${excerpt}, ${content}, ${category}, ${image},
        ${published},
        ${Math.ceil(content.split(" ").length / 200) + " min read"},
        ${(session.user as { name?: string }).name ?? "WGL Team"}
      )
      RETURNING id
    `;

    return NextResponse.json({ id: result.rows[0].id }, { status: 201 });
  } catch (err) {
    console.error("POST /api/admin/posts:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
