import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { FileText, MessageSquare, Eye, TrendingUp } from "lucide-react";

async function getStats() {
  try {
    const [posts, messages] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM blog_posts`,
      sql`SELECT COUNT(*) as count FROM contact_messages WHERE read = false`,
    ]);
    return {
      totalPosts:      Number(posts.rows[0]?.count   ?? 0),
      unreadMessages:  Number(messages.rows[0]?.count ?? 0),
    };
  } catch {
    return { totalPosts: 0, unreadMessages: 0 };
  }
}

export default async function AdminDashboard() {
  const session = await auth();
  if (!session?.user) redirect("/admin/login");

  const stats = await getStats();

  const cards = [
    { icon: FileText,     label: "Total blog posts",  value: String(stats.totalPosts),     color: "text-blue-400",   bg: "bg-blue-500/10"  },
    { icon: MessageSquare,label: "Unread messages",   value: String(stats.unreadMessages), color: "text-violet-400", bg: "bg-violet-500/10"},
    { icon: Eye,          label: "Site status",       value: "Live",                       color: "text-green-400",  bg: "bg-green-500/10" },
    { icon: TrendingUp,   label: "Services active",   value: "4",                          color: "text-cyan-400",   bg: "bg-cyan-500/10"  },
  ];

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 p-6 sm:p-8 overflow-auto">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-xl font-bold text-white mb-1">
              Welcome back{session.user.name ? `, ${session.user.name.split(" ")[0]}` : ""}
            </h1>
            <p className="text-sm text-slate-500">Here's what's happening on your site.</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.label} className="glass rounded-xl p-5">
                  <div className={`w-9 h-9 rounded-lg ${card.bg} flex items-center justify-center mb-3`}>
                    <Icon className={`w-4 h-4 ${card.color}`} />
                  </div>
                  <p className="text-2xl font-bold text-white mb-0.5">{card.value}</p>
                  <p className="text-xs text-slate-500">{card.label}</p>
                </div>
              );
            })}
          </div>

          {/* Quick actions */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass rounded-xl p-6">
              <h2 className="text-sm font-semibold text-white mb-4">Quick actions</h2>
              <div className="space-y-2">
                {[
                  { label: "Write a new blog post",  href: "/admin/posts/new"  },
                  { label: "View contact messages",  href: "/admin/messages"   },
                  { label: "Edit site settings",     href: "/admin/settings"   },
                ].map((action) => (
                  <a
                    key={action.href}
                    href={action.href}
                    className="flex items-center justify-between px-4 py-3 bg-white/3 hover:bg-white/5 rounded-lg text-sm text-slate-300 hover:text-white transition"
                  >
                    {action.label}
                    <span className="text-slate-600">→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <h2 className="text-sm font-semibold text-white mb-4">Signed in as</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Name</span>
                  <span className="text-white">{session.user.name ?? "—"}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Email</span>
                  <span className="text-white text-xs">{session.user.email ?? "—"}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Role</span>
                  <span className="text-blue-400 text-xs font-medium capitalize">
                    {(session.user as { role?: string }).role ?? "editor"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
