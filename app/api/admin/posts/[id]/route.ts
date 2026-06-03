import { auth } from "@/auth";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { z } from "zod";

const updateSchema = z.object({
  title:     z.string().min(1).max(200),
  slug:      z.string().min(1).max(200).regex(/^[a-z0-9-]+$/),
  excerpt:   z.string().min(1).max(500),
  content:   z.string().min(1),
  category:  z.string().min(1),
  image:     z.string().max(50),
  published: z.boolean(),
});

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function PUT(req: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const body   = await req.json();
    const parsed = updateSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const { title, slug, excerpt, content, category, image, published } = parsed.data;

    await sql`
      UPDATE blog_posts
      SET title     = ${title},
          slug      = ${slug},
          excerpt   = ${excerpt},
          content   = ${content},
          category  = ${category},
          image     = ${image},
          published = ${published},
          read_time = ${Math.ceil(content.split(" ").length / 200) + " min read"},
          updated_at = NOW()
      WHERE id = ${id}
    `;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("PUT /api/admin/posts/[id]:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    await sql`DELETE FROM blog_posts WHERE id = ${id}`;
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DELETE /api/admin/posts/[id]:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
