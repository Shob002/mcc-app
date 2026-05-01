import "../styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Master Crop Care",
  description: "Smart agriculture platform for modern farming solutions.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[#f7f3ec] font-sans text-stone-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 border-b border-amber-900/10 bg-[#f7f3ec]/90 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Master Crop Care logo"
                  width={44}
                  height={44}
                  className="rounded-xl bg-white p-1 shadow"
                />
                <span className="font-black text-green-950">
                  Master Crop Care
                </span>
              </Link>

              <nav className="hidden items-center gap-8 text-sm font-bold md:flex">
                <Link href="/" className="hover:text-amber-800">
                  Home
                </Link>
                <Link href="/products" className="hover:text-amber-800">
                  Products
                </Link>
                <Link href="/blog" className="hover:text-amber-800">
                  Blog
                </Link>
                <Link href="/about" className="hover:text-amber-800">
                  About
                </Link>
                <Link href="/contact" className="hover:text-amber-800">
                  Contact
                </Link>
              </nav>

              <Link
                href="/contact"
                className="rounded-full bg-amber-900 px-5 py-2 text-sm font-bold text-white hover:bg-green-900"
              >
                Get in Touch
              </Link>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="bg-linear-to-br from-green-950 via-amber-950 to-stone-950 px-6 py-12 text-center text-white">
            <Image
              src="/logo.png"
              alt="Master Crop Care logo"
              width={80}
              height={80}
              className="mx-auto rounded-2xl bg-white p-2 shadow-xl"
            />

            <h2 className="mt-5 text-xl font-black">MASTER CROP CARE LLP</h2>

            <p className="mt-3 text-sm text-amber-100">
              Supreme Crop Care Solutions Powered by Innovation
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-amber-100">
              <span className="rounded-full bg-white/10 px-4 py-2">
                📞 +91 8147341645
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2">
                📞 +91 9310908084
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2">
                ✉️ mastercropcare.5@gmail.com
              </span>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="rounded-full border border-amber-200/50 px-6 py-2 text-sm font-bold hover:bg-white hover:text-amber-950"
              >
                Products
              </Link>

              <Link
                href="/blog"
                className="rounded-full border border-amber-200/50 px-6 py-2 text-sm font-bold hover:bg-white hover:text-amber-950"
              >
                Blog
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-amber-200/50 px-6 py-2 text-sm font-bold hover:bg-white hover:text-amber-950"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-amber-200/50 px-6 py-2 text-sm font-bold hover:bg-white hover:text-amber-950"
              >
                Contact
              </Link>

              <Link
                href="/admin/login"
                className="rounded-full bg-white px-6 py-2 text-sm font-bold text-amber-950 hover:bg-amber-100"
              >
                Admin Login
              </Link>
            </div>

            <p className="mt-8 border-t border-white/10 pt-6 text-xs text-amber-200">
              © {new Date().getFullYear()} Master Crop Care LLP. All rights
              reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
  )
}
