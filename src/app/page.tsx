import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0d5e4a]/5 to-transparent">
        <div className="max-w-6xl mx-auto px-4 pt-24 pb-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d5e4a]/10 text-[#0d5e4a] text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0d5e4a] animate-pulse" />
            数字中医 · 减熵科技
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            为生命体
            <span className="text-[#0d5e4a]">注入负熵</span>
            <br />
            从无序回归有序
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            三维框架：物质感知 → 信息能量分析 → 意识干预
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
          <div className="grid md:grid-cols-4 gap-8 text-center">
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
                <div className="text-sm text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">产品系列</h2>
          <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto">
            覆盖家庭、康复中心到专业医疗机构的多层次解决方案
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "智能坐垫", price: "¥980", yearly: "¥365/年", tag: "家庭" },
              { name: "中医手表", price: "¥2,000", yearly: "含首年", tag: "随身" },
              { name: "单机手环", price: "¥5,000起", yearly: "专业版", tag: "机构" },
              { name: "四手环联动", price: "¥19,800", yearly: "含技术服务", tag: "医疗" },
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
              href="/products"
              className="text-[#0d5e4a] font-medium hover:underline"
            >
              查看全部产品 →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d5e4a]/5">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">数字中医 · 减熵哲学</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            系统思维：阴阳平衡 · 五行生克 · 五脏六腑协调
            <br />
            以频率疗法为手段，以AI大模型为核心，以专家经验为保障
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["阴阳平衡", "五行生克", "经络调理", "频率疗法", "AI辨证", "专家干预"].map(
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
