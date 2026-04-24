export default function NewProductPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold text-slate-900">Add Product</h1>
      <p className="mt-2 text-slate-500">
        Create a new agricultural product
      </p>

      <form className="mt-8 space-y-6 rounded-xl border border-emerald-50 bg-white p-6 shadow-sm">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Product Title
          </label>
          <input
            type="text"
            placeholder="Enter product title"
            className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Scientific Name
          </label>
          <input
            type="text"
            placeholder="Enter scientific name"
            className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Category
          </label>
          <input
            type="text"
            placeholder="Enter category"
            className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Image Path
          </label>
          <input
            type="text"
            placeholder="/products/product-image.jpg"
            className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Alt Text
          </label>
          <input
            type="text"
            placeholder="Enter alt text"
            className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Description
          </label>
          <textarea
            rows={5}
            placeholder="Enter product description"
            className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
          />
        </div>

        <div className="flex items-center gap-3">
          <input type="checkbox" id="featured" className="h-4 w-4" />
          <label htmlFor="featured" className="text-sm text-slate-700">
            Featured Product
          </label>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="rounded-lg bg-emerald-600 px-6 py-3 text-sm text-white hover:bg-emerald-700"
          >
            Save Product
          </button>

          <button
            type="button"
            className="rounded-lg border border-slate-200 px-6 py-3 text-sm text-slate-700 hover:bg-slate-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
