"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  // auto redirect if already logged in
  useEffect(() => {
    if (localStorage.getItem("admin")) {
      router.replace("/admin");
    }
  }, [router]);

  const login = () => {
    const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if (!ADMIN_PASSWORD) {
      alert("Admin password not configured");
      return;
    }

    if (password.trim() === ADMIN_PASSWORD) {
      localStorage.setItem("admin", "true");
      router.push("/admin");
      return;
    }

    alert("Wrong password");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f3ec] px-6">
      <div className="w-full max-w-sm rounded-[2rem] bg-white p-8 shadow-xl">
        <p className="font-black text-amber-800">MASTER CROP CARE</p>

        <h1 className="mt-2 text-3xl font-black text-green-950">
          Admin Login
        </h1>

        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") login();
          }}
          className="mt-6 w-full rounded-xl border px-4 py-3 outline-none focus:border-amber-800"
        />

        <button
          onClick={login}
          className="mt-6 w-full rounded-xl bg-amber-900 py-3 font-bold text-white hover:bg-green-900"
        >
          Login
        </button>

        <p className="mt-4 text-center text-xs text-stone-500">
          Secure admin access
        </p>
      </div>
    </main>
  );
}