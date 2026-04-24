"use client";

import { useState } from "react";
import SiteHeader from "../_components/site-header";
import { api } from "~/trpc/react";

export default function ContactPage() {
  const [success, setSuccess] = useState("");

  const sendMessage = api.contact.sendMessage.useMutation({
    onSuccess: () => {
      setSuccess("✅ Message sent successfully!");
    },
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSuccess("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    sendMessage.mutate(
      {
        name: String(formData.get("name") ?? ""),
        email: String(formData.get("email") ?? ""),
        phone: String(formData.get("phone") ?? ""),
        message: String(formData.get("message") ?? ""),
      },
      {
        onSuccess: () => form.reset(),
      },
    );
  }

  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="mb-6 text-3xl font-bold">Contact Master Crop Care</h1>

        <form onSubmit={handleSubmit} className="max-w-md space-y-4">
          <input
            name="name"
            required
            placeholder="Name"
            className="w-full rounded border p-3"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full rounded border p-3"
          />

          <input
            name="phone"
            placeholder="Phone"
            className="w-full rounded border p-3"
          />

          <textarea
            name="message"
            required
            placeholder="Message"
            className="w-full rounded border p-3"
          />

          <button
            type="submit"
            disabled={sendMessage.isPending}
            className="w-full rounded bg-green-700 px-4 py-3 text-white"
          >
            {sendMessage.isPending ? "Sending..." : "Send Message"}
          </button>

          {success && <p className="text-sm text-green-700">{success}</p>}

          {sendMessage.error && (
            <p className="text-sm text-red-600">
              ❌ {sendMessage.error.message}
            </p>
          )}
        </form>
      </main>
    </>
  );
}