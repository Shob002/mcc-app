import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f1]">
      <section className="bg-green-950 px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-black text-lime-300">ABOUT US</p>

            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
              Master Crop Care (MCC)
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-green-100">
              “Supreme in Crop Care Solutions, Powered by Innovations”
            </p>

            <p className="mt-5 max-w-2xl text-green-100">
              A modern agriculture company focused on sustainable, science-driven
              crop care technologies for real farming conditions.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="rounded-[3rem] bg-white p-8 shadow-2xl">
              <Image
                src="/logo.png"
                alt="Master Crop Care logo"
                width={420}
                height={420}
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-black text-green-700">OUR COMPANY</p>

            <h2 className="mt-3 text-3xl font-black text-green-950 sm:text-4xl">
              Driving Innovation in Agriculture
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Master Crop Care LLP delivers advanced crop care solutions
              including pheromone IPM technologies, trap systems, OP & hybrid
              seeds, and agricultural field inputs.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Our mission is to support farmers with practical, high-performance
              solutions that improve crop health, yield, and sustainability.
            </p>
          </div>

          <div className="rounded-[3rem] bg-white p-6 shadow-2xl">
            <Image
              src="/brand.png"
              alt="Master Crop Care"
              width={700}
              height={500}
              className="rounded-4xl object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="font-black text-green-700">LEADERSHIP</p>

          <h2 className="mt-3 text-3xl font-black text-green-950">
            Co-Founder & Director
          </h2>

          <div className="mt-8 rounded-4xl bg-[#f6f8f1] p-8 shadow">
            <h3 className="text-2xl font-black text-green-950">
              Asha Palleda
            </h3>

            <p className="mt-2 text-sm font-semibold text-green-700">
              Women Entrepreneur • Co-Founder & Director
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Asha Palleda leads innovation, product development, and market
              expansion at Master Crop Care (MCC). Her focus areas include
              pheromone IPM solutions, trap systems, OP & hybrid seeds, and
              agri-field inputs.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Her vision is to deliver sustainable, high-performance crop care
              technologies that directly benefit farmers and modern agriculture.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-black tracking-wide text-green-700">
            COMPANY PROFILE
          </p>

          <h2 className="mt-4 text-3xl font-black text-green-950 sm:text-4xl">
            A growing agriculture company built on innovation and trust.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Master Crop Care (MCC) is a newly established agriculture enterprise
            focused on delivering practical, science-driven crop care solutions.
            Since its inception, the company has been committed to supporting
            farmers with technologies that improve productivity, crop health,
            and sustainability.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            With a strong foundation and clear vision, MCC continues to expand
            its presence through innovation, field understanding, and
            farmer-centric solutions.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow">
            <p className="font-bold text-green-950">Registered Office</p>
            <p className="mt-2 leading-7 text-slate-600">
              108, Near SC/ST Hostel, Hunasikatti Road, Shabari Nagar,
              Ranebennur, Haveri, Karnataka – 581115, India
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <p className="font-bold text-green-950">
              MCC Unit 1 (Branch Office)
            </p>
            <p className="mt-2 leading-7 text-slate-600">
              1 & 2, First Floor, Seebethota, Antharasanahalli, NH-04,
              Tumakuru, Karnataka – 572106, India
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}