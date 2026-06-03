import { auth } from "@/auth";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function POST(_req: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    await sql`
      UPDATE contact_messages
      SET read = NOT read
      WHERE id = ${id}
    `;
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("POST mark-read:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
