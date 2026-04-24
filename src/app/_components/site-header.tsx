"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function SiteHeader() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  const isAdmin = session?.user?.role === "ADMIN";

  return (
    <>
      <div className="w-full bg-emerald-700 px-4 py-2 text-center text-xs font-medium tracking-wide text-white">
        🌿 MASTER CROP CARE • SUPREME AGRICULTURE INTELLIGENCE PLATFORM
      </div>

      <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm sm:h-16 sm:w-16">
              <Image
                src="/logo.png"
                alt="Master Crop Care logo"
                width={80}
                height={80}
                className="h-full w-full object-contain"
                priority
              />
            </div>

            <div>
              <h1 className="text-base font-bold text-slate-900 sm:text-lg">
                Master Crop Care
              </h1>
              <p className="text-xs text-slate-500 sm:text-sm">
                Smart Agriculture Platform
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <Link href="/" className="transition hover:text-emerald-700">
              Home
            </Link>
            <Link href="/products" className="transition hover:text-emerald-700">
              Products
            </Link>
            <Link href="/solutions" className="transition hover:text-emerald-700">
              Solutions
            </Link>
            <Link href="/contact" className="transition hover:text-emerald-700">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {isAdmin ? (
              <Link
                href="/admin"
                className="rounded-lg border border-emerald-200 px-4 py-2 text-sm font-medium text-emerald-700 transition hover:bg-emerald-50"
              >
                Admin
              </Link>
            ) : null}

            <Link
              href="/products"
              className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}