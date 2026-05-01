"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("products");
    setProducts(saved ? JSON.parse(saved) : []);
  }, []);

  return (
    <main className="min-h-screen bg-[#f6f8f6] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-bold text-green-700">OUR PRODUCTS</p>
          <h1 className="mt-3 text-4xl font-black text-green-950">
            Master Crop Care Products
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Explore our crop care solutions for plant health, crop protection,
            and sustainable farming.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.length === 0 && (
            <div className="rounded-3xl bg-white p-8 text-center shadow">
              <p className="font-bold text-green-950">No products added yet</p>
              <p className="mt-2 text-sm text-slate-500">
                Products added from admin dashboard will appear here.
              </p>
            </div>
          )}

          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-4xl bg-white shadow transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-64 items-center justify-center bg-green-50 p-5">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={350}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span className="text-sm text-slate-400">No image</span>
                )}
              </div>

              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-green-700">
                  {product.category}
                </p>

                <h2 className="mt-2 text-2xl font-black text-green-950">
                  {product.name}
                </h2>

                {product.price && (
                  <p className="mt-2 font-bold text-green-700">
                    {product.price}
                  </p>
                )}

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}