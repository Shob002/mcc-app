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

export default function ProductManager() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("products");
    setProducts(saved ? JSON.parse(saved) : []);
  }, []);

  const saveProducts = (items: Product[]) => {
    setProducts(items);
    localStorage.setItem("products", JSON.stringify(items));
  };

  const addProduct = () => {
    if (!form.name || !form.category || !form.description) {
      alert("Please fill product name, category and description");
      return;
    }

    const newProduct: Product = {
      id: crypto.randomUUID(),
      ...form,
    };

    saveProducts([newProduct, ...products]);

    setForm({
      name: "",
      category: "",
      price: "",
      image: "",
      description: "",
    });
  };

  const deleteProduct = (id: string) => {
    saveProducts(products.filter((product) => product.id !== id));
  };

  return (
    <section className="mt-10 grid gap-8 lg:grid-cols-[420px_1fr]">
      <div className="rounded-4xl bg-white p-6 shadow-xl">
        <h2 className="text-xl font-black text-green-950">Add Product</h2>

        <div className="mt-6 space-y-4">
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Product name"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-700"
          />

          <input
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            placeholder="Category"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-700"
          />

          <input
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            placeholder="Price / Pack size / Optional"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-700"
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;

              const reader = new FileReader();

              reader.onloadend = () => {
                setForm((current) => ({
                  ...current,
                  image: reader.result as string,
                }));
              };

              reader.readAsDataURL(file);
            }}
            className="w-full rounded-xl border px-4 py-3"
          />

          {form.image && (
            <div className="rounded-2xl border bg-green-50 p-3">
              <Image
                src={form.image}
                alt="Product preview"
                width={400}
                height={240}
                className="h-48 w-full rounded-xl object-contain"
              />
            </div>
          )}

          <textarea
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            placeholder="Product description"
            rows={5}
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-700"
          />

          <button
            onClick={addProduct}
            className="w-full rounded-xl bg-green-900 px-6 py-3 font-bold text-white hover:bg-green-800"
          >
            Add Product
          </button>
        </div>
      </div>

      <div>
        <h2 className="mb-5 text-2xl font-black text-green-950">
          Products ({products.length})
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.length === 0 && (
            <div className="rounded-3xl bg-white p-8 text-slate-600 shadow">
              No products added yet.
            </div>
          )}

          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-4xl bg-white shadow transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-56 items-center justify-center bg-green-50 p-4">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={360}
                    height={240}
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

                <h3 className="mt-2 text-xl font-black text-green-950">
                  {product.name}
                </h3>

                {product.price && (
                  <p className="mt-2 font-bold text-green-700">
                    {product.price}
                  </p>
                )}

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {product.description}
                </p>

                <button
                  onClick={() => deleteProduct(product.id)}
                  className="mt-5 rounded-full bg-red-600 px-5 py-2 text-sm font-bold text-white hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}