"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MessagesManager from "../_components/MessagesManager";

export default function AdminMessagesPage() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("admin")) {
      router.replace("/admin/login");
    }
  }, [router]);

  return (
    <main className="min-h-screen bg-[#f6f8f6] px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <MessagesManager />
      </div>
    </main>
  );
}