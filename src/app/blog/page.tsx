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

function readBlogs(): Blog[] {
  const saved = localStorage.getItem("blogs");
  if (!saved) return [];

  try {
    return JSON.parse(saved) as Blog[];
  } catch {
    return [];
  }
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    setBlogs(readBlogs());
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f3ec]">
      <section className="bg-gradient-to-br from-green-950 via-amber-950 to-green-900 px-6 py-20 text-center text-white">
        <p className="font-black text-amber-200">MCC BLOG</p>

        <h1 className="mt-4 text-4xl font-black sm:text-6xl">
          Crop Care Insights
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-amber-100">
          Articles on pheromone IPM, traps, seeds, sustainable farming, and
          modern crop care practices.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        {blogs.length === 0 ? (
          <div className="rounded-[2rem] bg-white p-10 text-center shadow">
            <p className="text-xl font-black text-green-950">
              No blogs published yet
            </p>
            <p className="mt-2 text-stone-500">
              Blogs added from admin dashboard will appear here.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="rounded-[2rem] border border-amber-900/10 bg-white p-7 shadow transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs font-black uppercase tracking-wide text-amber-800">
                  {blog.category}
                </p>

                <h2 className="mt-3 text-2xl font-black text-green-950">
                  {blog.title}
                </h2>

                <p className="mt-3 text-sm text-stone-400">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>

                <p className="mt-4 text-sm leading-7 text-stone-600">
                  {blog.summary}
                </p>

                <details className="mt-5">
                  <summary className="cursor-pointer font-bold text-amber-900">
                    Read More
                  </summary>
                  <p className="mt-4 whitespace-pre-line text-sm leading-7 text-stone-700">
                    {blog.content}
                  </p>
                </details>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}