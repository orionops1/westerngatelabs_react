import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Western Gate Labs",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#03050f]">
      {children}
    </div>
  );
}
