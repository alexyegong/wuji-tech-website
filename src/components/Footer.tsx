export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-[#c8a96e] flex items-center justify-center">
                <span className="text-white text-xs font-bold">無</span>
              </div>
              <span className="text-white font-semibold">无疾科技</span>
            </div>
            <p className="text-sm leading-relaxed">
              广州无疾科技有限公司 — 数字中医引领者。
              <br />
              为生命体注入负熵，从无序回归有序。
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">产品</h4>
            <div className="space-y-2 text-sm">
              <p>智能坐垫</p>
              <p>中医手表</p>
              <p>单机手环</p>
              <p>四手环联动系统</p>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">联系</h4>
            <div className="space-y-2 text-sm">
              <p>广州无疾科技有限公司</p>
              <p>广州普朗克生命频率研究院</p>
              <p>大数据平台: www.it-dragon.com:8443</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs">
          &copy; {new Date().getFullYear()} 广州无疾科技有限公司. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
