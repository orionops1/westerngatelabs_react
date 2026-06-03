import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { Mail, Building2, Phone } from "lucide-react";

async function getMessages() {
  try {
    const result = await sql`
      SELECT id, name, company, email, phone, service, message, read, created_at
      FROM contact_messages
      ORDER BY created_at DESC
    `;
    return result.rows;
  } catch {
    return [];
  }
}

export default async function MessagesPage() {
  const session = await auth();
  if (!session?.user) redirect("/admin/login");

  const messages = await getMessages();

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 p-6 sm:p-8 overflow-auto">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-xl font-bold text-white mb-1">Contact Messages</h1>
            <p className="text-sm text-slate-500">{messages.length} total messages</p>
          </div>

          {messages.length === 0 ? (
            <div className="glass rounded-xl py-16 text-center">
              <Mail className="w-8 h-8 text-slate-600 mx-auto mb-3" />
              <p className="text-sm text-slate-500">No messages yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={String(msg.id)}
                  className={`glass rounded-xl p-6 ${!msg.read ? "border-l-2 border-blue-500" : ""}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-semibold text-white">{String(msg.name)}</p>
                        {!msg.read && (
                          <span className="px-2 py-0.5 bg-blue-500/15 text-blue-400 rounded-full text-xs font-medium">New</span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          <a href={`mailto:${String(msg.email)}`} className="hover:text-white transition">
                            {String(msg.email)}
                          </a>
                        </span>
                        {msg.company && (
                          <span className="flex items-center gap-1">
                            <Building2 className="w-3 h-3" />
                            {String(msg.company)}
                          </span>
                        )}
                        {msg.phone && (
                          <span className="flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            {String(msg.phone)}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="px-2.5 py-1 bg-white/5 text-slate-400 rounded-full text-xs capitalize">
                        {String(msg.service)}
                      </span>
                      <span className="text-xs text-slate-600">
                        {new Date(String(msg.created_at)).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed whitespace-pre-line">
                    {String(msg.message)}
                  </p>
                  <div className="flex gap-3 mt-4 pt-4 border-t border-white/[0.05]">
                    <a
                      href={`mailto:${String(msg.email)}?subject=Re: Your inquiry&body=Hi ${String(msg.name)},%0A%0A`}
                      className="px-4 py-1.5 text-xs font-medium bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 rounded-lg transition"
                    >
                      Reply via email
                    </a>
                    <form action={`/api/admin/messages/${String(msg.id)}/mark-read`} method="POST">
                      <button
                        type="submit"
                        className="px-4 py-1.5 text-xs font-medium bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white rounded-lg transition"
                      >
                        {msg.read ? "Mark unread" : "Mark read"}
                      </button>
                    </form>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
