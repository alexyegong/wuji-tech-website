import Link from "next/link";

export default function EnHome() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0d5e4a]/5 to-transparent">
        <div className="max-w-6xl mx-auto px-4 pt-24 pb-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d5e4a]/10 text-[#0d5e4a] text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0d5e4a] animate-pulse" />
            Digital TCM · Entropy Reduction Technology
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Injecting <span className="text-[#0d5e4a]">Negative Entropy</span>
            <br />
            into Life — From Chaos to Order
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Three-dimensional framework: Material Perception → Information-Energy
            Analysis → Consciousness Intervention
            <br />
            Deeply integrating Chinese philosophy of Yin-Yang and Five Elements
            with modern AI technology
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/en/products"
              className="px-8 py-3 rounded-xl bg-[#0d5e4a] text-white font-medium hover:bg-[#0d5e4a]/90 transition-colors"
            >
              Explore Products
            </Link>
            <Link
              href="/en/about"
              className="px-8 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:border-[#0d5e4a] hover:text-[#0d5e4a] transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Three-dimensional Entropy Reduction Engine
          </h2>
          <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto">
            A three-tier progressive architecture, a complete closed loop from
            perception to intervention
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Material · Perception Layer",
                desc: "High-precision biosensors capture physiological signals in real time, including heart rate, body surface temperature, bioelectricity and more.",
                icon: "⊚",
              },
              {
                step: "02",
                title: "Info-Energy · Analysis Layer",
                desc: "An AI syndrome-differentiation model based on Five Elements theory deeply analyzes collected data to identify constitution and imbalance.",
                icon: "◎",
              },
              {
                step: "03",
                title: "Consciousness · Intervention Layer",
                desc: "An expert system generates personalized intervention plans, restoring physical balance through frequency therapy and meridian conditioning.",
                icon: "◉",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#c8a96e]/30 hover:shadow-lg transition-all"
              >
                <span className="text-4xl text-[#c8a96e] mb-4 block">
                  {item.icon}
                </span>
                <span className="text-xs font-mono text-[#c8a96e] tracking-widest">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1a1a2e] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { num: "4.35M+", label: "Monitored People" },
              { num: "122M", label: "Body Parts" },
              { num: "217M", label: "Risk Data Points" },
              { num: "392", label: "Health Categories" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold text-[#c8a96e] mb-2">
                  {s.num}
                </div>
                <div className="text-sm text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Product Series</h2>
          <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto">
            Multilayer solutions from home and rehabilitation centers to
            professional medical institutions
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Smart Cushion", price: "$138", yearly: "$51/yr", tag: "Home" },
              { name: "TCM Watch", price: "$280", yearly: "1st yr incl.", tag: "Wearable" },
              { name: "Standalone Band", price: "from $700", yearly: "Pro", tag: "Institution" },
              { name: "4-Band System", price: "$2,790", yearly: "incl. service", tag: "Medical" },
            ].map((p) => (
              <div
                key={p.name}
                className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#0d5e4a]/20 transition-all"
              >
                <span className="text-xs px-2 py-1 rounded-full bg-[#0d5e4a]/10 text-[#0d5e4a]">
                  {p.tag}
                </span>
                <h3 className="text-lg font-semibold mt-3 mb-1">{p.name}</h3>
                <div className="text-2xl font-bold text-[#0d5e4a] mb-1">
                  {p.price}
                </div>
                <div className="text-sm text-gray-500">{p.yearly}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/en/products"
              className="text-[#0d5e4a] font-medium hover:underline"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d5e4a]/5">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Digital TCM · Entropy Reduction Philosophy
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Systemic thinking: Yin-Yang balance · Five Elements interrelation ·
            visceral coordination
            <br />
            Using frequency therapy as the method, AI large models as the core,
            and expert experience as the guarantee
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Yin-Yang Balance", "Five Elements", "Meridian Conditioning", "Frequency Therapy", "AI Diagnosis", "Expert Intervention"].map(
              (t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-700"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
