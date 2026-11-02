# 国际站内容审计清单

| 页面/路径 | 类型 | 中文硬编码 | 英文现状 | 需重写文案/调整架构 | 备注 |
|---|---|---|---|---|---|
| / (Home) | 首页 | 是 | 缺失 | 是 | 需对齐品牌主张 |
| /about | 页面 | 是 | 缺失 | 是 | 增加团队使命与合作方式 |
| /products | 页面 | 是 | 缺失 | 是 | 转化为任务导向路径 |
| /blog | 索引 | 是 | 部分 | 是 | 需独立英文分类 |
| /contact | 页面 | 是 | 缺失 | 是 | 明确隐私与回复预期 |
| Footer | 组件 | 是 | 已有 | 是 | 术语对齐 |


## 自动审计：检测到的中文硬编码线索

/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:10 - 数字中医 · 减熵科技
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:13 - 为生命体
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:14 - <span className="text-[#0d5e4a]">注入负熵</span>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:16 - 从无序回归有序
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:19 - 三维框架：物质感知 → 信息能量分析 → 意识干预
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:21 - 将中华阴阳五行哲学与现代AI技术深度融合
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:28 - 了解产品
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:34 - 关于我们
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:42 - <h2 className="text-3xl font-bold text-center mb-4">三维减熵引擎</h2>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:44 - 三层递进架构，从感知到干预的完整闭环
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:50 - title: "物质 · 感知层",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:51 - desc: "高精度生物传感器实时采集人体生理信号，包括心率、体表温度、生物电等多项指标",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:56 - title: "信息能量 · 分析层",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:57 - desc: "AI辨证大模型基于中医五行生克理论，对采集数据深度分析，辨识体质与失衡状态",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:62 - title: "意识 · 干预层",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:63 - desc: "专家系统生成个性化干预方案，通过频率疗法、经络调理等手段恢复机体平衡",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:89 - { num: "435万+", label: "监测人数" },
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:90 - { num: "1.22亿", label: "检测部位" },
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:91 - { num: "2.17亿", label: "风险数据" },
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:92 - { num: "392类", label: "健康分类" },
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:107 - <h2 className="text-3xl font-bold text-center mb-4">产品系列</h2>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:109 - 覆盖家庭、康复中心到专业医疗机构的多层次解决方案
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:113 - { name: "智能坐垫", price: "¥980", yearly: "¥365/年", tag: "家庭" },
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:114 - { name: "中医手表", price: "¥2,000", yearly: "含首年", tag: "随身" },
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:115 - { name: "单机手环", price: "¥5,000起", yearly: "专业版", tag: "机构" },
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:116 - { name: "四手环联动", price: "¥19,800", yearly: "含技术服务", tag: "医疗" },
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:138 - 查看全部产品 →
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:146 - <h2 className="text-3xl font-bold mb-4">数字中医 · 减熵哲学</h2>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:148 - 系统思维：阴阳平衡 · 五行生克 · 五脏六腑协调
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:150 - 以频率疗法为手段，以AI大模型为核心，以专家经验为保障
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/page.tsx:153 - {["阴阳平衡", "五行生克", "经络调理", "频率疗法", "AI辨证", "专家干预"].map(
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/layout.tsx:12 - default: "无疾科技 — 数字中医减熵系统",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/layout.tsx:13 - template: "%s | 无疾科技",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/layout.tsx:16 - "广州无疾科技有限公司，数字中医引领者。三维框架：物质·信息能量·意识，为生命体注入负熵。大数据平台覆盖435万+人群。",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/layout.tsx:17 - authors: [{ name: "无疾科技" }],
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/layout.tsx:19 - "数字中医",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/layout.tsx:20 - "减熵系统",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/layout.tsx:21 - "三维框架",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/layout.tsx:22 - "无疾科技",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/layout.tsx:23 - "普朗克研究院",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/layout.tsx:24 - "中医AI",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/layout.tsx:25 - "频率疗法",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/layout.tsx:26 - "生物传感器",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/layout.tsx:29 - title: "无疾科技 — 数字中医减熵系统",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/layout.tsx:30 - description: "为生命体注入负熵，从无序回归有序。三维框架 × 数字技术 × 中医智慧。",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/layout.tsx:33 - siteName: "无疾科技",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/layout.tsx:39 - alt: "无疾科技 — 数字中医减熵系统",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/layout.tsx:45 - title: "无疾科技 — 数字中医减熵系统",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/layout.tsx:46 - description: "为生命体注入负熵，从无序回归有序。",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/layout.tsx:63 - {/* 结构化数据 */}
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/layout.tsx:70 - name: "广州无疾科技有限公司",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/layout.tsx:71 - alternateName: "无疾科技",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/layout.tsx:74 - description: "数字中医减熵系统研发企业",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/layout.tsx:77 - addressLocality: "广州",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:5 - title: "关于我们",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:6 - description: "了解广州无疾科技有限公司和普朗克生命频率研究院",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:14 - <h1 className="text-4xl font-bold mb-8">关于无疾科技</h1>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:17 - <h2 className="text-2xl font-semibold text-[#0d5e4a] mb-4">公司简介</h2>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:19 - 广州无疾科技有限公司（简称"无疾科技"）是一家专注于数字中医减熵系统研发的高科技企业。
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:20 - 公司以"为生命体注入负熵，从无序回归有序"为使命，将中华传统中医阴阳五行哲学与现代
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:21 - AI技术深度融合，打造从感知到干预的完整健康管理闭环。
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:24 - 与广州普朗克生命频率研究院深度合作，共享研发资源与大数据平台，
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:25 - 共同推动数字中医技术的产业化落地。
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:30 - <h2 className="text-2xl font-semibold text-[#0d5e4a] mb-4">合作伙伴</h2>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:33 - <h3 className="font-semibold mb-2">易神通数字中医（深圳）</h3>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:35 - 战略合作伙伴。其"生物共振数字健康监测系统"已通过国家级科技成果评价，
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:36 - 达到国际先进水平。技术输出至香港润生堂、美国上市公司盗龄医生。
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:40 - <h3 className="font-semibold mb-2">赣州中康杏林</h3>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:42 - 数字中医减熵系统示范基地。产品线覆盖从居家到重症康复的全场景，
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:43 - 受到国家AI部门和国家总工会的关注。
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:50 - <h2 className="text-2xl font-semibold text-[#0d5e4a] mb-4">大数据平台</h2>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:52 - 自主研发的健康大数据平台已累计监测超过 435万人，覆盖 1.22亿 检测部位，
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:53 - 积累 2.17亿 条风险数据，涵盖 392类 健康分类。
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:56 - 大数据平台:{" "}
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:69 - <h2 className="text-2xl font-semibold text-[#0d5e4a] mb-4">核心哲学</h2>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:72 - "数字中医减熵 — 为生命体注入负熵，从无序回归有序。"
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:75 - <span>阴阳平衡</span>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:77 - <span>五行生克</span>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/about/page.tsx:79 - <span>五脏六腑协调</span>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/blog/page.tsx:6 - title: "博客",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/blog/page.tsx:7 - description: "无疾科技官方博客 — 数字中医前沿动态",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/blog/page.tsx:15 - <h1 className="text-4xl font-bold mb-4">博客</h1>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/blog/page.tsx:16 - <p className="text-gray-500 mb-12">数字中医前沿动态与技术分享</p>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/blog/page.tsx:20 - <p className="text-lg">暂无博文</p>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/blog/page.tsx:21 - <p className="text-sm mt-2">内容即将上线，敬请期待</p>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/blog/[slug]/page.tsx:38 - &larr; 返回博客
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/contact/page.tsx:4 - title: "联系我们",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/contact/page.tsx:5 - description: "联系广州无疾科技有限公司 — 商务合作、产品代理、技术输出",
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/contact/page.tsx:11 - <h1 className="text-4xl font-bold mb-4">联系我们</h1>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/contact/page.tsx:13 - 欢迎洽谈合作，我们期待与您携手推进数字中医事业发展
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/contact/page.tsx:18 - <h2 className="text-lg font-semibold mb-4">公司信息</h2>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/contact/page.tsx:21 - <dt className="text-gray-500">公司</dt>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/contact/page.tsx:22 - <dd className="font-medium">广州无疾科技有限公司</dd>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/contact/page.tsx:25 - <dt className="text-gray-500">研究院</dt>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/contact/page.tsx:26 - <dd className="font-medium">广州普朗克生命频率研究院</dd>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/contact/page.tsx:29 - <dt className="text-gray-500">大数据平台</dt>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/contact/page.tsx:42 - <dt className="text-gray-500">商标</dt>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/contact/page.tsx:43 - <dd className="font-medium">平人@i于室® (第44类)</dd>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/contact/page.tsx:49 - <h2 className="text-lg font-semibold mb-4">合作伙伴</h2>
/home/mac-linux/桌面/Projects/wuji-tech-website/src/app/contact/page.tsx:52 - <dt className="text-gray-500">战略合作</dt>
