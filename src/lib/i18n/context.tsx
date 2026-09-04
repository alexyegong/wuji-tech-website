"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Locale = "zh" | "en";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const messages: Record<Locale, Record<string, string>> = {
  zh: {
    "Footer.brand": "无疾科技",
    "Footer.title": "数字中医减熵系统引领者",
    "Footer.subtitle": "三维框架 × 数字技术 × 中医智慧",
    "Footer.products": "核心产品",
    "Footer.prod_1": "生物共振健康监测",
    "Footer.prod_2": "数字中医减熵系统",
    "Footer.prod_3": "频率疗法设备",
    "Footer.prod_4": "健康大数据平台",
    "Footer.contact": "联系我们",
    "Footer.addr_1": "广州市天河区珠江新城",
    "Footer.addr_2": "广州普朗克生命频率研究院",
    "Footer.platform": "企业微信 | 微信公众号",
    "Footer.wechat_work": "企业微信",
    "Footer.wechat_official": "微信公众号",
    "Footer.copyright": "无疾科技 版权所有",
  },
  en: {
    "Footer.brand": "Wuji Technology",
    "Footer.title": "Digital TCM Entropy-Reduction Pioneer",
    "Footer.subtitle": "3D Framework × Digital Tech × TCM Wisdom",
    "Footer.products": "Core Products",
    "Footer.prod_1": "Bio-Resonance Health Monitoring",
    "Footer.prod_2": "Digital TCM Entropy-Reduction System",
    "Footer.prod_3": "Frequency Therapy Devices",
    "Footer.prod_4": "Health Big Data Platform",
    "Footer.contact": "Contact Us",
    "Footer.addr_1": "Zhujiang New Town, Tianhe, Guangzhou",
    "Footer.addr_2": "Guangzhou Planck Life Frequency Research Institute",
    "Footer.platform": "Enterprise WeChat | Official Account",
    "Footer.wechat_work": "Enterprise WeChat",
    "Footer.wechat_official": "Official Account",
    "Footer.copyright": "© Wuji Technology All Rights Reserved",
  },
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children, locale: initialLocale = "zh" }: { children: ReactNode; locale?: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  const t = (key: string): string => {
    return messages[locale][key] || key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}