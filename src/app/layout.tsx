import "../styles/globals.css";

import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const metadata: Metadata = {
  title: "Master Crop Care",
  description: "Supreme Crop Care Solutions Powered by Innovation.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[#efe3cf] font-sans text-[#2b1a10] antialiased">
        <TRPCReactProvider>
          <div className="flex min-h-screen flex-col">

            {/* HEADER */}
            <header className="sticky top-0 z-50 border-b border-[#5b351c]/20 bg-[#efe3cf]/95 backdrop-blur">
              <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

                {/* LOGO (UPDATED BIGGER) */}
                <Link href="/" className="flex items-center gap-4">
                  
                  <div className="relative h-14 w-14">
                    <Image
                      src="/logo.png"
                      alt="Master Crop Care logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>

                  <span className="text-lg font-black uppercase tracking-wide text-[#5b351c]">
                    Master Crop Care
                  </span>

                </Link>

                {/* NAV */}
                <nav className="hidden items-center gap-8 text-sm font-bold text-[#3c2414] md:flex">
                  {navLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="hover:text-[#2f6b2f]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="rounded-full bg-[#2f6b2f] px-5 py-2 text-sm font-black text-[#f4e7cf] hover:bg-[#5b351c]"
                >
                  Get in Touch
                </Link>
              </div>
            </header>

            {/* MAIN */}
            <main className="flex-1">{children}</main>

            {/* FOOTER */}
            <footer className="bg-gradient-to-br from-[#2b1a10] via-[#5b351c] to-[#1f4f2a] px-6 py-12 text-center text-[#f4e7cf]">
              
              <div className="relative mx-auto h-20 w-20">
                <Image
                  src="/logo.png"
                  alt="Master Crop Care logo"
                  fill
                  className="object-contain"
                />
              </div>

              <h2 className="mt-5 text-xl font-black">
                MASTER CROP CARE LLP
              </h2>

              <p className="mt-3 text-sm text-[#d8c09a]">
                Supreme Crop Care Solutions Powered by Innovation
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-[#ead6b7]">
                <span className="rounded-full bg-[#efe3cf]/10 px-4 py-2">
                  📞 +91 8147341645
                </span>
                <span className="rounded-full bg-[#efe3cf]/10 px-4 py-2">
                  📞 +91 9310908084
                </span>
                <span className="rounded-full bg-[#efe3cf]/10 px-4 py-2">
                  ✉️ info@themasterbag.com
                </span>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {navLinks.slice(1).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-[#d8c09a]/50 px-6 py-2 text-sm font-bold hover:bg-[#efe3cf] hover:text-[#5b351c]"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/admin/login"
                  className="rounded-full bg-[#efe3cf] px-6 py-2 text-sm font-bold text-[#5b351c] hover:bg-[#d8c09a]"
                >
                  Admin Login
                </Link>
              </div>

              <p className="mt-8 border-t border-[#f4e7cf]/15 pt-6 text-xs text-[#d8c09a]">
                © {new Date().getFullYear()} Master Crop Care LLP. All rights
                reserved.
              </p>
            </footer>

          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}