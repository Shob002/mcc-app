export default function AdminPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <p className="mt-2 text-slate-500">Welcome to Admin Panel</p>

      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {[
          ["1000+", "Farmers"],
          ["250+", "Products"],
          ["15+", "Years"],
          ["99%", "Uptime"],
        ].map(([num, label]) => (
          <div key={label} className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold text-emerald-600">{num}</h2>
            <p className="text-sm text-slate-500">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}