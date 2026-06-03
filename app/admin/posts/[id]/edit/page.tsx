import { auth } from "@/auth";
import { redirect, notFound } from "next/navigation";
import { sql } from "@vercel/postgres";
import AdminSidebar from "@/components/admin/AdminSidebar";
import PostEditor from "@/components/admin/PostEditor";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getPost(id: string) {
  try {
    const result = await sql`
      SELECT id, title, slug, excerpt, content, category, image, published
      FROM blog_posts WHERE id = ${id} LIMIT 1
    `;
    return result.rows[0] ?? null;
  } catch {
    return null;
  }
}

export default async function EditPostPage({ params }: PageProps) {
  const session = await auth();
  if (!session?.user) redirect("/admin/login");

  const { id } = await params;
  const post    = await getPost(id);
  if (!post) notFound();

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 sm:p-8 overflow-auto">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h1 className="text-xl font-bold text-white mb-1">Edit Post</h1>
            <p className="text-sm text-slate-500 truncate">{String(post.title)}</p>
          </div>
          <PostEditor
            post={{
              id:        String(post.id),
              title:     String(post.title),
              slug:      String(post.slug),
              excerpt:   String(post.excerpt),
              content:   String(post.content),
              category:  String(post.category),
              image:     String(post.image),
              published: Boolean(post.published),
            }}
          />
        </div>
      </main>
    </div>
  );
}
