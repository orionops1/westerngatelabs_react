import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";
import Link from "next/link";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { Plus, Pencil, Trash2, Eye } from "lucide-react";

async function getPosts() {
  try {
    const result = await sql`
      SELECT id, title, slug, category, published, created_at
      FROM blog_posts
      ORDER BY created_at DESC
    `;
    return result.rows;
  } catch {
    return [];
  }
}

export default async function AdminPostsPage() {
  const session = await auth();
  if (!session?.user) redirect("/admin/login");

  const posts = await getPosts();

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 p-6 sm:p-8 overflow-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-xl font-bold text-white mb-1">Blog Posts</h1>
              <p className="text-sm text-slate-500">{posts.length} total posts</p>
            </div>
            <Link
              href="/admin/posts/new"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 hover:brightness-110 transition"
            >
              <Plus className="w-4 h-4" />
              New post
            </Link>
          </div>

          <div className="glass rounded-xl overflow-hidden">
            {posts.length === 0 ? (
              <div className="text-center py-16 text-slate-500">
                <p className="text-sm mb-3">No posts yet.</p>
                <Link href="/admin/posts/new" className="text-blue-400 text-sm hover:underline">
                  Create your first post
                </Link>
              </div>
            ) : (
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-widest">Title</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-widest hidden sm:table-cell">Category</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-widest hidden md:table-cell">Date</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-widest">Status</th>
                    <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-widest">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr key={String(post.id)} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition">
                      <td className="px-5 py-4">
                        <p className="text-sm font-medium text-white truncate max-w-xs">{String(post.title)}</p>
                        <p className="text-xs text-slate-600 truncate">/blog/{String(post.slug)}</p>
                      </td>
                      <td className="px-5 py-4 hidden sm:table-cell">
                        <span className="px-2.5 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">{String(post.category)}</span>
                      </td>
                      <td className="px-5 py-4 text-xs text-slate-500 hidden md:table-cell">
                        {new Date(String(post.created_at)).toLocaleDateString()}
                      </td>
                      <td className="px-5 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          post.published
                            ? "bg-green-500/10 text-green-400"
                            : "bg-slate-500/10 text-slate-400"
                        }`}>
                          {post.published ? "Published" : "Draft"}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2 justify-end">
                          <Link
                            href={`/blog/${String(post.slug)}`}
                            target="_blank"
                            className="p-1.5 text-slate-500 hover:text-white hover:bg-white/5 rounded-md transition"
                            title="View post"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>
                          <Link
                            href={`/admin/posts/${String(post.id)}/edit`}
                            className="p-1.5 text-slate-500 hover:text-blue-400 hover:bg-blue-500/10 rounded-md transition"
                            title="Edit"
                          >
                            <Pencil className="w-4 h-4" />
                          </Link>
                          <form action={`/api/admin/posts/${String(post.id)}/delete`} method="POST">
                            <button
                              type="submit"
                              className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-md transition"
                              title="Delete"
                              onClick={(e) => {
                                if (!confirm("Delete this post?")) e.preventDefault();
                              }}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
