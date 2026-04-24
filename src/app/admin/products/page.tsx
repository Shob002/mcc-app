import Link from "next/link";

export default function AdminProductsPage() {
  const products = [
    {
      id: 1,
      name: "Bio Fertilizer",
      category: "Fertilizer",
      status: "Active",
    },
    {
      id: 2,
      name: "Neem Pest Control",
      category: "Pesticide",
      status: "Active",
    },
    {
      id: 3,
      name: "Plant Growth Booster",
      category: "Growth Promoter",
      status: "Draft",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Products</h1>
          <p className="mt-2 text-slate-500">
            Manage your agricultural products
          </p>
        </div>

        <Link
          href="/admin/products/new"
          className="rounded-lg bg-emerald-600 px-5 py-2 text-sm text-white shadow-sm hover:bg-emerald-700"
        >
          + Add Product
        </Link>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-emerald-50 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-emerald-50 text-slate-700">
            <tr>
              <th className="px-6 py-4 font-semibold">ID</th>
              <th className="px-6 py-4 font-semibold">Product Name</th>
              <th className="px-6 py-4 font-semibold">Category</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="px-6 py-4">{product.id}</td>
                <td className="px-6 py-4 font-medium text-slate-900">
                  {product.name}
                </td>
                <td className="px-6 py-4 text-slate-600">{product.category}</td>
                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      product.status === "Active"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-emerald-600 hover:underline">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}