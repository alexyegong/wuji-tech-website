import Link from "next/link";

export default function EnHomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <section className="py-20 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Wuji Technology — Digital TCM Entropy Reduction System
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Three-Dimensional Framework: Material, Information-Energy, Consciousness. Injecting negative entropy into living systems.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/en/products"
            className="bg-[#0d5e4a] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0a4b3b] transition-colors"
          >
            Explore Products
          </Link>
          <Link
            href="/en/about"
            className="border border-gray-300 px-6 py-3 rounded-full font-medium hover:border-[#0d5e4a] hover:text-[#0d5e4a] transition-colors"
          >
            About Us
          </Link>
        </div>
      </section>
    </div>
  );
}