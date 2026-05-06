import Image from "next/image";
import Link from "next/link";

const partners = ["/p1.png", "/p2.png", "/p1.png", "/p2.png"];

const categories = [
  {
    title: "Pheromone Lures",
    text: "Species-focused lure solutions for monitoring and managing crop pests through IPM practices.",
    image: "/lure.png",
  },
  {
    title: "Trap Systems",
    text: "Field-ready traps designed to support pest surveillance, mass trapping, and crop protection.",
    image: "/trap.png",
  },
  {
    title: "Agri Inputs",
    text: "Essential agricultural inputs designed to enhance crop protection, soil health, and overall farm productivity.",
    image: "/input.png",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#f7f3ec]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-amber-950 to-green-900 px-6 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,119,6,0.25),transparent_30%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-amber-200">
              Supreme Crop Care Solutions ; Powered by Innovation
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight sm:text-7xl">
              Brown Roots. <br /> Green Futures.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-amber-100">
              Master Crop Care brings together the strength of soil, the promise
              of growth, and science-driven crop care through pheromone lures,
              traps, seeds, and sustainable agri inputs.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-full bg-white px-8 py-4 font-black text-amber-950 hover:bg-amber-100"
              >
                Explore Products
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/40 px-8 py-4 font-black text-white hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative rounded-[3rem] bg-white/10 p-6 shadow-2xl">
            <Image
              src="/brand.png"
              alt="Master Crop Care brand"
              width={700}
              height={500}
              priority
              className="rounded-[2rem] bg-[#f7f3ec] p-6 object-contain"
            />
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="overflow-hidden bg-white py-14">
        <div className="mb-8 text-center">
          <p className="font-black text-amber-800">ASSOCIATED PARTNERS</p>
          <h2 className="mt-2 text-3xl font-black text-green-950">
            Trusted Collaborations
          </h2>
        </div>

        <div className="flex w-max animate-scroll gap-8">
          {[...partners, ...partners, ...partners].map((src, index) => (
            <div
              key={index}
              className="flex h-24 w-56 shrink-0 items-center justify-center rounded-2xl border border-amber-900/10 bg-white p-4 shadow"
            >
              <Image
                src={src}
                alt="Associated partner"
                width={180}
                height={80}
              />
            </div>
          ))}
        </div>
      </section>

      {/* BRAND MEANING */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-black text-amber-800">OUR BRAND LANGUAGE</p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-green-950 sm:text-5xl">
              Brown represents soil. Green represents growth.
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-700">
              The Master Crop Care brand uses brown and green to reflect the two
              foundations of agriculture: healthy earth and thriving crops.
              Brown stands for soil, roots, stability, and farmer trust. Green
              stands for plant health, productivity, sustainability, and future
              growth.
            </p>

            <p className="mt-4 text-lg leading-8 text-stone-700">
              Together, these colors define MCC’s purpose: practical,
              field-ready crop care solutions powered by innovation.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-block rounded-full bg-amber-900 px-7 py-3 font-black text-white hover:bg-green-900"
            >
              Learn More
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[2rem] bg-amber-900 p-7 text-white shadow-xl">
              <p className="text-sm font-black text-amber-200">BROWN</p>
              <h3 className="mt-3 text-2xl font-black">Soil & Stability</h3>
              <p className="mt-3 leading-7 text-amber-100">
                Represents roots, farming ground, reliability, and practical
                field understanding.
              </p>
            </div>

            <div className="rounded-[2rem] bg-green-950 p-7 text-white shadow-xl">
              <p className="text-sm font-black text-green-200">GREEN</p>
              <h3 className="mt-3 text-2xl font-black">Growth & Health</h3>
              <p className="mt-3 leading-7 text-green-100">
                Represents crop vitality, sustainability, plant protection, and
                better farming outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-black text-amber-800">CORE CATEGORIES</p>

          <h2 className="mt-3 text-4xl font-black text-green-950">
            Crop Care Technologies We Focus On
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-stone-600">
            MCC focuses on practical agricultural categories that support modern
            IPM, crop protection, seed performance, and sustainable farming.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-amber-900/10 bg-[#f7f3ec] p-7 text-left shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-40 w-full items-center justify-center overflow-hidden rounded-xl bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={220}
                    height={160}
                    className="h-full w-full object-contain p-3 transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-black text-green-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-[3rem] bg-gradient-to-br from-green-950 via-amber-950 to-green-900 p-12 text-center text-white">
          <h2 className="text-4xl font-black">
            Ready to explore MCC crop care solutions?
          </h2>

          <p className="mt-4 text-amber-100">
            Connect with Master Crop Care for pheromone IPM, traps, seeds, and
            sustainable agri-input support.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-black text-amber-950 hover:bg-amber-100"
          >
            Contact Now
          </Link>
        </div>
      </section>
    </main>
  );
}