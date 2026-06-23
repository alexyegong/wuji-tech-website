import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们",
  description: "联系广州无疾科技有限公司 — 商务合作、产品代理、技术输出",
};

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">联系我们</h1>
      <p className="text-gray-500 mb-12">
        欢迎洽谈合作，我们期待与您携手推进数字中医事业发展
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="p-6 rounded-2xl bg-white border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">公司信息</h2>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-gray-500">公司</dt>
              <dd className="font-medium">广州无疾科技有限公司</dd>
            </div>
            <div>
              <dt className="text-gray-500">研究院</dt>
              <dd className="font-medium">广州普朗克生命频率研究院</dd>
            </div>
            <div>
              <dt className="text-gray-500">大数据平台</dt>
              <dd className="font-medium">
                <a
                  href="https://www.it-dragon.com:8443"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a8a6e] underline"
                >
                  www.it-dragon.com:8443
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-gray-500">商标</dt>
              <dd className="font-medium">平人@i于室® (第44类)</dd>
            </div>
          </dl>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">合作伙伴</h2>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-gray-500">战略合作</dt>
              <dd className="font-medium">易神通数字中医（深圳）</dd>
            </div>
            <div>
              <dt className="text-gray-500">示范基地</dt>
              <dd className="font-medium">赣州中康杏林</dd>
            </div>
            <div>
              <dt className="text-gray-500">技术输出</dt>
              <dd className="font-medium">香港润生堂</dd>
            </div>
            <div>
              <dt className="text-gray-500">海外合作</dt>
              <dd className="font-medium">美国盗龄医生（上市公司）</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="p-8 rounded-2xl bg-[#0d5e4a]/5 text-center mb-8">
        <h2 className="text-xl font-semibold mb-2">商务合作咨询</h2>
        <p className="text-gray-600 text-sm mb-4">
          欢迎数字中医领域的各类合作：产品代理、技术输出、项目共建
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <a
            href="mailto:bd@wujitech.com"
            className="text-[#0d5e4a] font-medium hover:underline"
          >
            📧 bd@wujitech.com
          </a>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">📍 广州市</span>
        </div>
      </div>
    </div>
  );
}
