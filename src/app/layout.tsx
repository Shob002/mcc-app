import "../styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Master Crop Care",
  description: "Smart agriculture platform for modern farming solutions.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[#f6f8f6] font-sans text-slate-900 antialiased">
        <Providers>
          <div className="flex min-h-screen flex-col">
            {children}

            {/* FOOTER */}
            <footer className="mt-auto bg-green-900 px-6 py-8 text-center text-white">
              <p className="font-semibold">MASTER CROP CARE LLP</p>
              <p className="mt-2 text-sm text-green-100">
                +91 8147341645 / +91 9310908084
              </p>
              <p className="mt-1 text-sm text-green-100">
                mastercropcare.5@gmail.com
              </p>
              <p className="mt-4 text-xs text-green-300">
                © {new Date().getFullYear()} Master Crop Care LLP
              </p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
