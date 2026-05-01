"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("admin")) {
      router.replace("/admin/login");
    }
  }, [router]);

  const logout = () => {
    localStorage.removeItem("admin");
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-[#f7f3ec] px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-black text-amber-800">MASTER CROP CARE</p>
            <h1 className="text-3xl font-black text-green-950">
              Admin Dashboard
            </h1>
          </div>

          <button
            onClick={logout}
            className="rounded-full bg-red-600 px-5 py-2 text-sm font-bold text-white hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/admin/products"
            className="rounded-[2rem] bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-4xl">📦</p>
            <h2 className="mt-4 text-2xl font-black text-green-950">
              Products
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Add, upload images, and manage products.
            </p>
          </Link>

          <Link
            href="/admin/blog"
            className="rounded-[2rem] bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-4xl">📝</p>
            <h2 className="mt-4 text-2xl font-black text-green-950">
              Blog
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Publish crop care articles and updates.
            </p>
          </Link>

          <Link
            href="/admin/messages"
            className="rounded-[2rem] bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-4xl">📩</p>
            <h2 className="mt-4 text-2xl font-black text-green-950">
              Messages
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              View customer enquiries from contact form.
            </p>
          </Link>

          <Link
            href="/"
            className="rounded-[2rem] bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-4xl">🏠</p>
            <h2 className="mt-4 text-2xl font-black text-green-950">
              Website
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Go back to public website.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}