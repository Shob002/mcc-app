"use client";

import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
    setSuccess("");
  };

  const validateForm = () => {
    const name = form.name.trim();
    const phone = form.phone.trim();
    const message = form.message.trim();

    if (name.length < 2) return "Please enter a valid name.";
    if (!/^[6-9]\d{9}$/.test(phone)) {
      return "Please enter a valid 10-digit Indian phone number.";
    }
    if (message.length < 10) {
      return "Message must be at least 10 characters.";
    }

    return "";
  };

  const submit = () => {
    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    const saved = localStorage.getItem("messages");
    const messages = saved ? JSON.parse(saved) : [];

    messages.unshift({
      id: crypto.randomUUID(),
      name: form.name.trim(),
      phone: form.phone.trim(),
      message: form.message.trim(),
      createdAt: new Date().toISOString(),
      status: "New",
    });

    localStorage.setItem("messages", JSON.stringify(messages));

    setForm(initialForm);
    setSuccess("Your message has been sent successfully.");
  };

  return (
    <main className="min-h-screen bg-[#f6f8f1] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="font-black text-green-700">CONTACT US</p>

          <h1 className="mt-3 text-4xl font-black text-green-950 sm:text-5xl">
            Get in Touch with Master Crop Care
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Share your requirement and our team will connect with you for crop
            care solutions, products, and business enquiries.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-4xl bg-green-950 p-8 text-white shadow-xl">
            <h2 className="text-2xl font-black">Contact Details</h2>

            <div className="mt-6 space-y-4 text-sm text-green-100">
              <p>📞 +91 8147341645</p>
              <p>📞 +91 9310908084</p>
              <p>✉️ mastercropcare.5@gmail.com</p>
              <p>
                📍 MCC Unit 1, Tumakuru, Karnataka – 572106, India
              </p>
            </div>
          </div>

          <div className="rounded-4xl bg-white p-8 shadow-xl">
            <div className="space-y-5">
              <div>
                <label className="text-sm font-bold text-green-950">
                  Full Name
                </label>
                <input
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-green-950">
                  Phone Number
                </label>
                <input
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={(e) =>
                    updateField("phone", e.target.value.replace(/\D/g, ""))
                  }
                  maxLength={10}
                  className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-green-950">
                  Message
                </label>
                <textarea
                  placeholder="Tell us your requirement"
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  rows={5}
                  className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:border-green-700"
                />
              </div>

              {error && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {error}
                </p>
              )}

              {success && (
                <p className="rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                  {success}
                </p>
              )}

              <button
                onClick={submit}
                className="w-full rounded-xl bg-green-900 py-3 font-bold text-white hover:bg-green-800"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}