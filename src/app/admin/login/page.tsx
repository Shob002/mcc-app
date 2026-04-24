import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Admin Login</h1>
        <p className="mt-2 text-sm text-slate-600">
          Sign in to continue to the admin dashboard.
        </p>

        <div className="mt-6 space-y-4">
          <Link
            href="/api/auth/signin"
            className="block w-full rounded-xl bg-emerald-600 px-4 py-3 text-center font-medium text-white transition hover:bg-emerald-700"
          >
            Sign in with Discord
          </Link>

          <Link
            href="/"
            className="block text-center text-sm text-slate-600 hover:text-emerald-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}