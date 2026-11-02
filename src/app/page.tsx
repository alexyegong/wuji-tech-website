import Link from "next/link";
import terms from "@/lib/i18n/terminology.json";

export default function Home() {
  const getTerm = (key: string) => (terms as any)[key] || { en: key, cn: key };

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0d5e4a]/5 to-transparent">
        <div className="max-w-6xl mx-auto px-4 pt-24 pb-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d5e4a]/10 text-[#0d5e4a] text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0d5e4a] animate-pulse" />
            {getTerm("digital_tcm").cn} · {getTerm("entropy_reduction").cn}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            为生命体
            <span className="text-[#0d5e4a]">注入负熵</span>
            <br />
            从无序回归有序
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            {getTerm("three_dimensional_framework").cn}：物质感知 → 信息能量分析 → 意识干预
            <br />
            将中华阴阳五行哲学与现代AI技术深度融合
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="px-8 py-3 rounded-xl bg-[#0d5e4a] text-white font-medium hover:bg-[#0d5e4a]/90 transition-colors"
            >
              了解产品
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:border-[#0d5e4a] hover:text-[#0d5e4a] transition-colors"
            >
              关于我们
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">三维减熵引擎</h2>
          <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto">
            三层递进架构，从感知到干预的完整闭环
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "物质 · 感知层",
                desc: "高精度生物传感器实时采集人体生理信号，包括心率、体表温度、生物电等多项指标",
                icon: "⊚",
              },
              {
                step: "02",
                title: "信息能量 · 分析层",
                desc: "AI辨证大模型基于中医五行生克理论，对采集数据深度分析，辨识体质与失衡状态",
                icon: "◎",
              },
              {
                step: "03",
                title: "意识 · 干预层",
                desc: "专家系统生成个性化干预方案，通过频率疗法、经络调理等手段恢复机体平衡",
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
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {[
              { num: "435万+", label: "监测人数" },
              { num: "1.22亿", label: "检测部位" },
              { num: "2.17亿", label: "风险数据" },
              { num: "392类", label: "健康分类" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold text-[#c8a96e] mb-2">
                  {s.num}
                </div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
