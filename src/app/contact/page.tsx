"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);

  const sendMessage = api.contact.sendMessage.useMutation({
    onSuccess: () => {
      setSuccess(true);
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const getValue = (key: string) => {
      const value = formData.get(key);
      return typeof value === "string" ? value : "";
    };

    const name = getValue("name");
    const email = getValue("email");
    const phone = getValue("phone");
    const message = getValue("message");

    sendMessage.mutate({
      name,
      email,
      phone,
      message,
    });

    event.currentTarget.reset();
  }

  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-4 text-4xl font-bold text-green-800">Contact Us</h1>

        <p className="mb-8 text-gray-600">
          Get in touch with us for product enquiries, support, or business
          collaboration.
        </p>

        {success && (
          <div className="mb-6 rounded-lg bg-green-100 p-4 text-green-800">
            Message sent successfully.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full rounded-lg border p-3"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full rounded-lg border p-3"
          />

          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            className="w-full rounded-lg border p-3"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full rounded-lg border p-3"
          />

          <button
            type="submit"
            disabled={sendMessage.isPending}
            className="rounded-lg bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800 disabled:opacity-60"
          >
            {sendMessage.isPending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </main>
  );
}