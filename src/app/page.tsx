import Image from "next/image";
import Link from "next/link";

const partners = ["/p1.png", "/p2.png", "/p1.png", "/p2.png"];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#f6f8f1]">
      <section className="relative bg-green-950 px-6 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(132,204,22,0.25),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-lime-200">
              Supreme Crop Care Solutions
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight sm:text-7xl">
              Smart Crop Care <br /> For Modern Farming
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-green-100">
              Professional agriculture solutions for crop protection, plant
              health, nutrition, and sustainable farming growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/products" className="rounded-full bg-white px-8 py-4 font-black text-green-950 hover:bg-lime-100">
                Explore Products
              </Link>
              <Link href="/contact" className="rounded-full border border-white/40 px-8 py-4 font-black text-white hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="rounded-[3rem] bg-white/10 p-6 shadow-2xl">
            <Image
              src="/brand.png"
              alt="Master Crop Care brand"
              width={700}
              height={500}
              priority
              className="rounded-4xl bg-white p-6 object-contain"
            />
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-14">
        <div className="mb-8 text-center">
          <p className="font-black text-green-700">ASSOCIATED PARTNERS</p>
          <h2 className="mt-2 text-3xl font-black text-green-950">
            Trusted Collaborations
          </h2>
        </div>

        <div className="flex w-max animate-scroll gap-8">
          {[...partners, ...partners, ...partners].map((src, index) => (
            <div
              key={index}
              className="flex h-24 w-56 shrink-0 items-center justify-center rounded-2xl border bg-white p-4 shadow"
            >
              <Image src={src} alt="Associated partner" width={180} height={80} />
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="font-black text-green-700">ABOUT MASTER CROP CARE</p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-green-950 sm:text-5xl">
              Built for modern agriculture. Designed for real farmers.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Master Crop Care LLP focuses on practical crop care solutions that
              improve plant health, productivity, and sustainable farming outcomes.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <span className="rounded-xl bg-white px-5 py-3 font-bold shadow">
                🌱 Crop Protection
              </span>
              <span className="rounded-xl bg-white px-5 py-3 font-bold shadow">
                🌿 Plant Nutrition
              </span>
              <span className="rounded-xl bg-white px-5 py-3 font-bold shadow">
                🚜 Farmer Support
              </span>
            </div>

            <Link
              href="/about"
              className="mt-8 inline-block rounded-full bg-green-900 px-7 py-3 font-black text-white hover:bg-green-800"
            >
              Read More About Us
            </Link>
          </div>

          <div className="rounded-[3rem] bg-white p-6 shadow-2xl">
            <Image
              src="/brand.png"
              alt="About Master Crop Care"
              width={700}
              height={500}
              className="rounded-4xl object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-black text-green-700">OUR EXPERTISE</p>

          <h2 className="mt-3 text-4xl font-black text-green-950">
            Crop Care Built for India
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["Crop Protection", "Plant Health", "Sustainable Growth"].map((item) => (
              <div key={item} className="rounded-2xl bg-[#f6f8f1] p-6 shadow hover:shadow-xl">
                <div className="mb-4 text-3xl">🌱</div>
                <h3 className="font-black text-green-950">{item}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Reliable solutions for better yield and farming success.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-[3rem] bg-green-950 p-12 text-center text-white">
          <h2 className="text-4xl font-black">Ready to improve your farming?</h2>
          <p className="mt-4 text-green-100">
            Connect with Master Crop Care for smart agriculture solutions.
          </p>
          <Link href="/contact" className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-black text-green-950">
            Contact Now
          </Link>
        </div>
      </section>
    </main>
  );
}