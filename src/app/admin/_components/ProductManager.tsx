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

const emptyForm = {
  id: "",
  name: "",
  category: "",
  price: "",
  image: "",
  description: "",
};

export default function ProductManager() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState<Product>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("products");
    setProducts(saved ? JSON.parse(saved) : []);
  }, []);

  const saveProducts = (items: Product[]) => {
    setProducts(items);
    localStorage.setItem("products", JSON.stringify(items));
  };

  const handleSubmit = () => {
    if (!form.name || !form.category || !form.description) {
      alert("Please fill product name, category and description");
      return;
    }

    if (editingId) {
      // UPDATE
      const updated = products.map((p) =>
        p.id === editingId ? { ...form, id: editingId } : p,
      );
      saveProducts(updated);
    } else {
      // ADD
      const newProduct: Product = {
        ...form,
        id: crypto.randomUUID(),
      };
      saveProducts([newProduct, ...products]);
    }

    setForm(emptyForm);
    setEditingId(null);
  };

  const handleEdit = (product: Product) => {
    setForm(product);
    setEditingId(product.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const deleteProduct = (id: string) => {
    saveProducts(products.filter((p) => p.id !== id));
  };

  return (
    <section className="mt-10 grid gap-8 lg:grid-cols-[420px_1fr]">
      {/* FORM */}
      <div className="rounded-4xl bg-white p-6 shadow-xl">
        <h2 className="text-xl font-black text-green-950">
          {editingId ? "Edit Product" : "Add Product"}
        </h2>

        <div className="mt-6 space-y-4">
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Product name"
            className="w-full rounded-xl border px-4 py-3"
          />

          <input
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            placeholder="Category"
            className="w-full rounded-xl border px-4 py-3"
          />

          <input
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            placeholder="Price / Pack size"
            className="w-full rounded-xl border px-4 py-3"
          />

          {/* IMAGE UPLOAD */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;

              const reader = new FileReader();
              reader.onloadend = () => {
                setForm((prev) => ({
                  ...prev,
                  image: reader.result as string,
                }));
              };
              reader.readAsDataURL(file);
            }}
            className="w-full rounded-xl border px-4 py-3"
          />

          {form.image && (
            <Image
              src={form.image}
              alt="preview"
              width={400}
              height={240}
              className="h-48 w-full rounded-xl object-contain"
              unoptimized
            />
          )}

          <textarea
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            placeholder="Description"
            rows={5}
            className="w-full rounded-xl border px-4 py-3"
          />

          <button
            onClick={handleSubmit}
            className="w-full rounded-xl bg-green-900 px-6 py-3 font-bold text-white"
          >
            {editingId ? "Update Product" : "Add Product"}
          </button>

          {editingId && (
            <button
              onClick={cancelEdit}
              className="w-full rounded-xl border px-6 py-3"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </div>

      {/* LIST */}
      <div>
        <h2 className="mb-5 text-2xl font-black text-green-950">
          Products ({products.length})
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-4xl bg-white p-4 shadow"
            >
              {product.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={360}
                  height={240}
                  className="h-40 w-full object-contain"
                  unoptimized
                />
              )}

              <h3 className="mt-3 font-bold">{product.name}</h3>
              <p className="text-sm text-green-700">{product.category}</p>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleEdit(product)}
                  className="rounded bg-blue-600 px-3 py-1 text-white"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteProduct(product.id)}
                  className="rounded bg-red-600 px-3 py-1 text-white"
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