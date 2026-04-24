export default function Hero() {
  return (
    <section className="text-center py-20 bg-linear-to-b from-green-50 to-white">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Empowering Farmers. Enhancing Growth.
      </h1>

      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        Sustainable crop solutions for modern agriculture and better yield.
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
          Explore Products
        </button>

        <button className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
}