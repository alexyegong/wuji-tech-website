import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "关于我们",
  description: "了解广州无疾科技有限公司和普朗克生命频率研究院",
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">关于无疾科技</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#0d5e4a] mb-4">公司简介</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          广州无疾科技有限公司（简称"无疾科技"）是一家专注于数字中医减熵系统研发的高科技企业。
          公司以"为生命体注入负熵，从无序回归有序"为使命，将中华传统中医阴阳五行哲学与现代
          AI技术深度融合，打造从感知到干预的完整健康管理闭环。
        </p>
        <p className="text-gray-700 leading-relaxed">
          与广州普朗克生命频率研究院深度合作，共享研发资源与大数据平台，
          共同推动数字中医技术的产业化落地。
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#0d5e4a] mb-4">合作伙伴</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-gray-100">
            <h3 className="font-semibold mb-2">易神通数字中医（深圳）</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              战略合作伙伴。其"生物共振数字健康监测系统"已通过国家级科技成果评价，
              达到国际先进水平。技术输出至香港润生堂、美国上市公司盗龄医生。
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-100">
            <h3 className="font-semibold mb-2">赣州中康杏林</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              数字中医减熵系统示范基地。产品线覆盖从居家到重症康复的全场景，
              受到国家AI部门和国家总工会的关注。
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#0d5e4a] mb-4">大数据平台</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          自主研发的健康大数据平台已累计监测超过 &nbsp;435万人，覆盖 1.22亿 检测部位，
          积累 2.17亿 条风险数据，涵盖 392类 健康分类。
        </p>
        <p className="text-gray-700 leading-relaxed">
          大数据平台:{" "}
          <a
            href="https://www.it-dragon.com:8443"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1a8a6e] underline"
          >
            www.it-dragon.com:8443
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#0d5e4a] mb-4">核心哲学</h2>
        <div className="bg-[#0d5e4a]/5 rounded-2xl p-8">
          <blockquote className="text-lg text-[#0d5e4a] font-medium text-center leading-relaxed">
            "数字中医减熵 — 为生命体注入负熵，从无序回归有序。"
          </blockquote>
          <div className="flex justify-center gap-6 mt-6 text-sm text-gray-600">
            <span>阴阳平衡</span>
            <span>·</span>
            <span>五行生克</span>
            <span>·</span>
            <span>五脏六腑协调</span>
          </div>
        </div>
      </section>
    </div>
  );
}
