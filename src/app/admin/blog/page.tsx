"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import BlogManager from "../_components/BlogManager";

export default function AdminBlogPage() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("admin")) {
      router.replace("/admin/login");
    }
  }, [router]);

  return (
    <main className="min-h-screen bg-[#f7f3ec] px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <p className="font-black text-amber-800">ADMIN</p>
        <h1 className="text-3xl font-black text-green-950">Blog Manager</h1>

        <BlogManager />
      </div>
    </main>
  );
}