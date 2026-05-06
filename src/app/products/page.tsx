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

const emptyForm: Product = {
  id: "",
  name: "",
  category: "",
  price: "",
  image: "",
  description: "",
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Product>(emptyForm);

  useEffect(() => {
    const saved = localStorage.getItem("products");
    setProducts(saved ? JSON.parse(saved) : []);
  }, []);

  const saveProducts = (updatedProducts: Product[]) => {
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const startEdit = (product: Product) => {
    setEditingId(product.id);
    setForm(product);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
  };

  const updateProduct = () => {
    const updatedProducts = products.map((product) =>
      product.id === editingId ? form : product,
    );

    saveProducts(updatedProducts);
    cancelEdit();
  };

  const deleteProduct = (id: string) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    saveProducts(updatedProducts);
  };

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
                {editingId === product.id ? (
                  <div className="space-y-3">
                    <input
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Product Name"
                      className="w-full rounded-xl border px-4 py-2"
                    />

                    <input
                      value={form.category}
                      onChange={(e) =>
                        setForm({ ...form, category: e.target.value })
                      }
                      placeholder="Category"
                      className="w-full rounded-xl border px-4 py-2"
                    />

                    <input
                      value={form.price}
                      onChange={(e) =>
                        setForm({ ...form, price: e.target.value })
                      }
                      placeholder="Price"
                      className="w-full rounded-xl border px-4 py-2"
                    />

                    <input
                      value={form.image}
                      onChange={(e) =>
                        setForm({ ...form, image: e.target.value })
                      }
                      placeholder="Image URL"
                      className="w-full rounded-xl border px-4 py-2"
                    />

                    <textarea
                      value={form.description}
                      onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                      }
                      placeholder="Description"
                      rows={4}
                      className="w-full rounded-xl border px-4 py-2"
                    />

                    <div className="flex gap-3">
                      <button
                        onClick={updateProduct}
                        className="rounded-full bg-green-700 px-5 py-2 text-sm font-bold text-white hover:bg-green-800"
                      >
                        Save
                      </button>

                      <button
                        onClick={cancelEdit}
                        className="rounded-full border px-5 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
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

                    <div className="mt-6 flex gap-3">
                      <button
                        onClick={() => startEdit(product)}
                        className="rounded-full bg-blue-600 px-5 py-2 text-sm font-bold text-white hover:bg-blue-700"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="rounded-full bg-red-600 px-5 py-2 text-sm font-bold text-white hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}