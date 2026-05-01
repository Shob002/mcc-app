"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ProductManager from "../_components/ProductManager";

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
    <main className="min-h-screen bg-[#f6f8f6] px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-bold text-green-700">MASTER CROP CARE</p>
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

        <ProductManager />
      </div>
    </main>
  );
}