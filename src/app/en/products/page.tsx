import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Digital TCM entropy-reduction system product line",
};

const products = [
  {
    name: "Smart Cushion",
    price: "$138",
    yearly: "$51/yr",
    tag: "Home",
    desc: "A smart cushion integrating high-precision biosensors that monitors posture, heart rate, body surface temperature and other health data in real time, generating personalized conditioning recommendations through AI analysis. Ideal for everyday home use.",
    features: ["High-precision biosensors", "Real-time health monitoring", "AI constitution analysis", "Personalized recommendations"],
  },
  {
    name: "TCM Watch",
    price: "$280",
    yearly: "1st-yr service incl.",
    tag: "Wearable",
    desc: "An all-day wearable health monitoring device that fuses TCM pulse diagnosis theory with modern sensor technology, tracking user health around the clock with timely anomaly warnings.",
    features: ["24-hour health monitoring", "TCM pulse diagnosis", "Anomaly alerts", "Cloud health reports"],
  },
  {
    name: "Standalone Band",
    price: "$700 – $2,790",
    yearly: "Pro edition",
    tag: "Institution",
    desc: "Professional health monitoring equipment for rehabilitation centers, clubs and nursing homes. Provides in-depth health data analysis, supports multi-user rotation, and offers excellent value.",
    features: ["Professional-grade sensors", "Multi-user rotation", "Deep data analysis", "Institution admin console"],
  },
  {
    name: "4-Band Linked System",
    price: "$2,790",
    yearly: "incl. tech service",
    tag: "Medical",
    desc: "A professional-grade system for clinics, rehabilitation centers and critical-care bases. Four bands monitor simultaneously with multi-dimensional data fusion, including a per-patient technical service fee.",
    features: ["4-band simultaneous monitoring", "Multi-dimensional fusion", "Remote specialist consultation", "Dedicated tech service"],
  },
];

export default function EnProducts() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Products</h1>
      <p className="text-gray-500 mb-12 max-w-2xl">
        Covering home, wearable, institutional and medical scenarios to meet
        the health-management needs of diverse user groups
      </p>

      <div className="space-y-8">
        {products.map((p) => (
          <div
            key={p.name}
            className="p-8 rounded-2xl bg-white border border-gray-100"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-[#0d5e4a]/10 text-[#0d5e4a]">
                    {p.tag}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-[#c8a96e]/10 text-[#c8a96e]">
                    {p.yearly}
                  </span>
                </div>
                <h2 className="text-2xl font-semibold mb-2">{p.name}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {p.desc}
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {p.features.map((f) => (
                    <li key={f} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0d5e4a] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-right shrink-0">
                <div className="text-3xl font-bold text-[#0d5e4a]">{p.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
