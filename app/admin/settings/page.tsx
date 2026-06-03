import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import ChangePasswordForm from "@/components/admin/ChangePasswordForm";

export default async function SettingsPage() {
  const session = await auth();
  if (!session?.user) redirect("/admin/login");

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 p-6 sm:p-8 overflow-auto">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-xl font-bold text-white mb-1">Settings</h1>
            <p className="text-sm text-slate-500">Manage your admin account.</p>
          </div>

          <div className="glass rounded-xl p-6 sm:p-8">
            <h2 className="text-sm font-semibold text-white mb-6">Change password</h2>
            <ChangePasswordForm />
          </div>
        </div>
      </main>
    </div>
  );
}
