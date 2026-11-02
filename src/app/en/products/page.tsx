import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "产品中心",
  description: "数字中医减熵系统产品系列",
};

const products = [
  {
    name: "智能坐垫",
    price: "¥980",
    yearly: "¥365/年",
    tag: "家庭",
    desc: "集成高精度生物传感器的智能坐垫，实时监测坐姿、心率、体表温度等健康数据，通过AI分析生成个性化调理建议。适合家庭日常使用。",
    features: ["高精度生物传感器", "实时健康监测", "AI体质分析", "个性化调理建议"],
  },
  {
    name: "中医手表",
    price: "¥2,000",
    yearly: "含首年服务",
    tag: "随身",
    desc: "全天候随身健康监测设备，融合中医脉诊理论与现代传感器技术，24小时追踪用户健康状态，异常情况及时预警。",
    features: ["24小时健康监测", "中医脉诊分析", "异常预警", "云端健康报告"],
  },
  {
    name: "单机手环",
    price: "¥5,000 ~ ¥19,800",
    yearly: "专业版",
    tag: "机构",
    desc: "面向康复中心、会所、养老院等机构的专业健康监测设备。提供深度健康数据分析，支持多人轮换使用，性价比极高。",
    features: ["专业级传感器", "多人轮换使用", "深度数据分析", "机构管理后台"],
  },
  {
    name: "四手环联动系统",
    price: "¥19,800",
    yearly: "含技术服务费",
    tag: "医疗",
    desc: "面向诊所、康复中心、重症基地的专业级系统。四手环同时监测，支持多维度数据融合分析，含¥1万/患者技术服务费。",
    features: ["四手环同步监测", "多维数据融合", "专家远程会诊", "专属技术服务"],
  },
];

export default function Products() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">产品中心</h1>
      <p className="text-gray-500 mb-12 max-w-2xl">
        覆盖家庭、随身、机构、医疗四层次场景，满足不同用户群体的健康管理需求
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
