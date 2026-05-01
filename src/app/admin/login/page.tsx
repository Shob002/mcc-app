"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      localStorage.setItem("admin", "true");
      router.push("/admin");
    } else {
      alert("Wrong password");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-green-50">
      <div className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="text-2xl font-black text-green-900">Admin Login</h1>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-6 w-full rounded-xl border px-4 py-3 outline-none focus:border-green-700"
        />

        <button
          onClick={login}
          className="mt-6 w-full rounded-xl bg-green-900 py-3 font-bold text-white hover:bg-green-800"
        >
          Login
        </button>
      </div>
    </div>
  );
}