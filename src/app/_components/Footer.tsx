export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-20 border-t">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <h2 className="font-bold text-green-600 text-lg">MCC</h2>
          <p className="mt-2 text-gray-600">
            Master Crop Care – Empowering sustainable agriculture.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-gray-600">info@mcc.com</p>
          <p className="text-gray-600">+91 90000 00000</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 pb-4">
        © {new Date().getFullYear()} MCC. All rights reserved.
      </div>
    </footer>
  );
}