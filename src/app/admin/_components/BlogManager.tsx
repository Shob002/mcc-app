"use client";

import { useEffect, useState } from "react";

type Blog = {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  createdAt: string;
};

const initialForm = {
  title: "",
  category: "",
  summary: "",
  content: "",
};

function readBlogs(): Blog[] {
  const saved = localStorage.getItem("blogs");
  if (!saved) return [];

  try {
    return JSON.parse(saved) as Blog[];
  } catch {
    return [];
  }
}

export default function BlogManager() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    setBlogs(readBlogs());
  }, []);

  const saveBlogs = (items: Blog[]) => {
    setBlogs(items);
    localStorage.setItem("blogs", JSON.stringify(items));
  };

  const addBlog = () => {
    if (!form.title.trim() || !form.summary.trim() || !form.content.trim()) {
      alert("Please fill title, summary, and content");
      return;
    }

    const newBlog: Blog = {
      id: crypto.randomUUID(),
      title: form.title.trim(),
      category: form.category.trim() || "Crop Care",
      summary: form.summary.trim(),
      content: form.content.trim(),
      createdAt: new Date().toISOString(),
    };

    saveBlogs([newBlog, ...blogs]);
    setForm(initialForm);
  };

  const deleteBlog = (id: string) => {
    saveBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <section className="mt-10 grid gap-8 lg:grid-cols-[420px_1fr]">
      <div className="rounded-4xl bg-white p-6 shadow-xl">
        <h2 className="text-xl font-black text-green-950">Add Blog</h2>

        <div className="mt-6 space-y-4">
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Blog title"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-amber-800"
          />

          <input
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            placeholder="Category e.g. Pheromone IPM"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-amber-800"
          />

          <textarea
            value={form.summary}
            onChange={(e) => setForm({ ...form, summary: e.target.value })}
            placeholder="Short summary"
            rows={3}
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-amber-800"
          />

          <textarea
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            placeholder="Full blog content"
            rows={8}
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-amber-800"
          />

          <button
            onClick={addBlog}
            className="w-full rounded-xl bg-amber-900 px-6 py-3 font-bold text-white hover:bg-green-900"
          >
            Publish Blog
          </button>
        </div>
      </div>

      <div>
        <h2 className="mb-5 text-2xl font-black text-green-950">
          Blogs ({blogs.length})
        </h2>

        <div className="grid gap-5">
          {blogs.length === 0 && (
            <div className="rounded-3xl bg-white p-8 text-stone-600 shadow">
              No blogs added yet.
            </div>
          )}

          {blogs.map((blog) => (
            <article key={blog.id} className="rounded-4xl bg-white p-6 shadow">
              <p className="text-xs font-black uppercase tracking-wide text-amber-800">
                {blog.category}
              </p>

              <h3 className="mt-2 text-2xl font-black text-green-950">
                {blog.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-stone-600">
                {blog.summary}
              </p>

              <button
                onClick={() => deleteBlog(blog.id)}
                className="mt-5 rounded-full bg-red-600 px-5 py-2 text-sm font-bold text-white hover:bg-red-700"
              >
                Delete
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}