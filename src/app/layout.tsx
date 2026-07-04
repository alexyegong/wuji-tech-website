import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = { variable: "--font-geist-sans" };
const geistMono = { variable: "--font-geist-mono" };

export const metadata: Metadata = {
  title: {
    default: "无疾科技 — 数字中医减熵系统",
    template: "%s | 无疾科技",
  },
  description:
    "广州无疾科技有限公司，数字中医引领者。三维框架：物质·信息能量·意识，为生命体注入负熵。大数据平台覆盖435万+人群。",
  authors: [{ name: "无疾科技" }],
  keywords: [
    "数字中医",
    "减熵系统",
    "三维框架",
    "无疾科技",
    "普朗克研究院",
    "中医AI",
    "频率疗法",
    "生物传感器",
  ],
  openGraph: {
    title: "无疾科技 — 数字中医减熵系统",
    description: "为生命体注入负熵，从无序回归有序。三维框架 × 数字技术 × 中医智慧。",
    type: "website",
    locale: "zh_CN",
    siteName: "无疾科技",
    images: [
      {
        url: "https://wjkj-prys.com/og-image.svg",
        width: 1200,
        height: 630,
        alt: "无疾科技 — 数字中医减熵系统",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "无疾科技 — 数字中医减熵系统",
    description: "为生命体注入负熵，从无序回归有序。",
    images: ["https://wjkj-prys.com/og-image.svg"],
  },
  metadataBase: new URL("https://wjkj-prys.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* 结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "广州无疾科技有限公司",
              alternateName: "无疾科技",
              url: "https://wjkj-prys.com",
              logo: "https://wjkj-prys.com/logo.png",
              description: "数字中医减熵系统研发企业",
              address: {
                "@type": "PostalAddress",
                addressLocality: "广州",
                addressCountry: "CN",
              },
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "business",
                availableLanguage: "Chinese",
              },
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
