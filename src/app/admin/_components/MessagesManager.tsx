"use client";

import { useEffect, useState } from "react";

type Message = {
  id: string;
  name: string;
  phone: string;
  message: string;
  createdAt: string;
};

export default function MessagesManager() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("messages");
    setMessages(saved ? JSON.parse(saved) : []);
  }, []);

  const saveMessages = (items: Message[]) => {
    setMessages(items);
    localStorage.setItem("messages", JSON.stringify(items));
  };

  const deleteMessage = (id: string) => {
    saveMessages(messages.filter((msg) => msg.id !== id));
  };

  const clearAll = () => {
    if (!confirm("Delete all messages?")) return;
    saveMessages([]);
  };

  return (
    <section>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-bold text-green-700">CUSTOMER ENQUIRIES</p>
          <h1 className="text-3xl font-black text-green-950">
            Contact Messages
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            View customer leads submitted from the website contact form.
          </p>
        </div>

        {messages.length > 0 && (
          <button
            onClick={clearAll}
            className="rounded-full bg-red-600 px-5 py-2 text-sm font-bold text-white hover:bg-red-700"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="mt-8 grid gap-6">
        {messages.length === 0 && (
          <div className="rounded-3xl bg-white p-10 text-center shadow">
            <p className="text-lg font-bold text-green-950">No messages yet</p>
            <p className="mt-2 text-sm text-slate-500">
              New contact form submissions will appear here.
            </p>
          </div>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className="rounded-4xl bg-white p-6 shadow transition hover:shadow-xl"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-black text-green-950">
                  {msg.name}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  📞 {msg.phone}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {new Date(msg.createdAt).toLocaleString()}
                </p>
              </div>

              <a
                href={`tel:${msg.phone}`}
                className="rounded-full bg-green-900 px-5 py-2 text-sm font-bold text-white hover:bg-green-800"
              >
                Call
              </a>
            </div>

            <div className="mt-5 rounded-2xl bg-green-50 p-5">
              <p className="text-sm leading-7 text-slate-700">
                {msg.message}
              </p>
            </div>

            <button
              onClick={() => deleteMessage(msg.id)}
              className="mt-5 rounded-full bg-red-600 px-5 py-2 text-sm font-bold text-white hover:bg-red-700"
            >
              Delete Message
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}