import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./_components/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-block rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold text-emerald-700">
              Agriculture • Innovation • Protection
            </div>

            <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Smart Crop Care for Modern Farming
            </h1>

            <p className="mt-5 text-base text-slate-600 sm:text-lg">
              Master Crop Care delivers advanced agricultural solutions for pest
              control, crop monitoring, and sustainable farming practices.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/products"
                className="rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Explore Products
              </Link>

              <Link
                href="/contact"
                className="rounded-lg border px-6 py-3 text-sm font-semibold text-slate-700 hover:border-emerald-400 hover:text-emerald-700"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <div className="relative h-80 w-full sm:h-105">
                <Image
                  src="/hero-brown-green.jpg"
                  alt="Agriculture soil and green crops"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}