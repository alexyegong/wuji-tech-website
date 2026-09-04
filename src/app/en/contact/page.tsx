import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Wuji Technology — business cooperation, distribution, technology licensing",
};

export default function EnContact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-500 mb-12">
        We welcome cooperation inquiries and look forward to advancing the
        digital TCM industry together with you
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="p-6 rounded-2xl bg-white border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Company Information</h2>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-gray-500">Company</dt>
              <dd className="font-medium">Guangzhou Wuji Technology Co., Ltd.</dd>
            </div>
            <div>
              <dt className="text-gray-500">Research Institute</dt>
              <dd className="font-medium">Guangzhou Planck Life Frequency Research Institute</dd>
            </div>
            <div>
              <dt className="text-gray-500">Big-Data Platform</dt>
              <dd className="font-medium">
                <a
                  href="https://www.it-dragon.com:8443/Enterprise/ServletControl?_NAME_=qy.information.home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a8a6e] underline break-all"
                >
                  www.it-dragon.com:8443/Enterprise/ServletControl?_NAME_=qy.information.home
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-gray-500">Trademark</dt>
              <dd className="font-medium">平人@i于室® (Class 44)</dd>
            </div>
          </dl>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Partners</h2>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-gray-500">Strategic partner</dt>
              <dd className="font-medium">Yi Shentong Digital TCM (Shenzhen)</dd>
            </div>
            <div>
              <dt className="text-gray-500">Demo base</dt>
              <dd className="font-medium">Ganzhou Zhongkang Xinglin</dd>
            </div>
            <div>
              <dt className="text-gray-500">Technology export</dt>
              <dd className="font-medium">Hong Kong Runshengtang</dd>
            </div>
            <div>
              <dt className="text-gray-500">Overseas partner</dt>
              <dd className="font-medium">Dole&apos;s Doctor (US listed)</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="p-8 rounded-2xl bg-[#0d5e4a]/5 text-center mb-8">
        <h2 className="text-xl font-semibold mb-2">Business Cooperation</h2>
        <p className="text-gray-600 text-sm mb-4">
          We welcome all forms of cooperation in digital TCM: distribution,
          technology licensing, and joint projects
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <a
            href="mailto:bd@wjkj-prys.com"
            className="text-[#0d5e4a] font-medium hover:underline"
          >
            📧 bd@wjkj-prys.com
          </a>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">📍 Guangzhou, China</span>
        </div>
      </div>
    </div>
  );
}
