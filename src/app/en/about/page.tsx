import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Wuji Technology and the Planck Life Frequency Research Institute",
};

export default function EnAbout() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Wuji Technology</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#0d5e4a] mb-4">
          Company Profile
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Guangzhou Wuji Technology Co., Ltd. (“Wuji Technology”) is a
          high-tech enterprise focused on the research and development of
          digital TCM entropy-reduction systems. Guided by the mission of
          “injecting negative entropy into life, returning from chaos to
          order,” the company deeply integrates the traditional Chinese
          philosophy of Yin-Yang and Five Elements with modern AI technology,
          building a complete health-management loop from perception to
          intervention.
        </p>
        <p className="text-gray-700 leading-relaxed">
          In close partnership with the Guangzhou Planck Life Frequency
          Research Institute, we share R&amp;D resources and a big-data
          platform to jointly drive the industrial application of digital TCM
          technology.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#0d5e4a] mb-4">
          Partners
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-gray-100">
            <h3 className="font-semibold mb-2">
              Yi Shentong Digital TCM (Shenzhen)
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Strategic partner. Its “Bio-Resonance Digital Health Monitoring
              System” has passed national scientific and technological
              achievement evaluation, reaching internationally advanced levels.
              Technology is exported to Hong Kong Runshengtang and US-listed
              company Dole&apos;s Doctor.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-100">
            <h3 className="font-semibold mb-2">Ganzhou Zhongkang Xinglin</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Demonstration base for the digital TCM entropy-reduction system.
              Its product line covers full scenarios from home care to
              critical rehabilitation, drawing attention from national AI
              authorities and the All-China Federation of Trade Unions.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#0d5e4a] mb-4">
          Big-Data Platform
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our independently developed health big-data platform has monitored
          more than 4.35 million people, covering 122 million body-part
          detections and accumulating 217 million risk data points across 392
          health categories.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Big-data platform:{" "}
          <a
            href="https://www.it-dragon.com:8443/Enterprise/ServletControl?_NAME_=qy.information.home"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1a8a6e] underline break-all"
          >
            www.it-dragon.com:8443/Enterprise/ServletControl?_NAME_=qy.information.home
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#0d5e4a] mb-4">
          Core Philosophy
        </h2>
        <div className="bg-[#0d5e4a]/5 rounded-2xl p-8">
          <blockquote className="text-lg text-[#0d5e4a] font-medium text-center leading-relaxed">
            “Digital TCM entropy reduction — inject negative entropy into
            life, return from chaos to order.”
          </blockquote>
          <div className="flex justify-center gap-6 mt-6 text-sm text-gray-600">
            <span>Yin-Yang Balance</span>
            <span>·</span>
            <span>Five Elements</span>
            <span>·</span>
            <span>Visceral Coordination</span>
          </div>
        </div>
      </section>
    </div>
  );
}
