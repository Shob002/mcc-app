import type { ReactNode } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import LogoutButton from "../_components/logout-button";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/admin/login");
  }

  if (session.user.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen bg-[#f6f8f6]">
      <aside className="w-64 border-r bg-white p-6">
        <h1 className="text-lg font-bold text-emerald-700">MCC Admin</h1>

        <nav className="mt-8 flex flex-col gap-4 text-sm text-slate-700">
          <Link href="/admin" className="hover:text-emerald-700">
            Dashboard
          </Link>
          <Link href="/admin/products" className="hover:text-emerald-700">
            Products
          </Link>
          <Link href="/admin/users" className="hover:text-emerald-700">
            Users
          </Link>
          <Link href="/" className="hover:text-emerald-700">
            ← Back
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}