import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import PostEditor from "@/components/admin/PostEditor";

export default async function NewPostPage() {
  const session = await auth();
  if (!session?.user) redirect("/admin/login");

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 sm:p-8 overflow-auto">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h1 className="text-xl font-bold text-white mb-1">New Blog Post</h1>
            <p className="text-sm text-slate-500">Write and publish a new article.</p>
          </div>
          <PostEditor />
        </div>
      </main>
    </div>
  );
}
