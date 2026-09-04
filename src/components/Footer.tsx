"use client";

import { useI18n } from "@/lib/i18n/context";

export default function Footer() {
  const { t, locale } = useI18n();

  return (
    <footer className="bg-[#1a1a2e] text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-[#c8a96e] flex items-center justify-center">
                <span className="text-white text-xs font-bold">無</span>
              </div>
              <span className="text-white font-semibold">{t("Footer.brand")}</span>
            </div>
            <p className="text-sm leading-relaxed">
              {t("Footer.title")}
              <br />
              {t("Footer.subtitle")}
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">{t("Footer.products")}</h4>
            <div className="space-y-2 text-sm">
              <p>{t("Footer.prod_1")}</p>
              <p>{t("Footer.prod_2")}</p>
              <p>{t("Footer.prod_3")}</p>
              <p>{t("Footer.prod_4")}</p>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">{t("Footer.contact")}</h4>
            <div className="space-y-2 text-sm">
              <p>{t("Footer.addr_1")}</p>
              <p>{t("Footer.addr_2")}</p>
              <p>{t("Footer.platform")}</p>
            </div>
            <div className="flex gap-4 mt-4">
              <div className="text-center">
                <img src="/qr-wechat-work.png" alt={t("Footer.wechat_work")} className="w-24 h-24" />
                <p className="text-xs mt-1">{t("Footer.wechat_work")}</p>
              </div>
              <div className="text-center">
                <img src="/qr-wechat-official.png" alt={t("Footer.wechat_official")} className="w-24 h-24" />
                <p className="text-xs mt-1">{t("Footer.wechat_official")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs">
          &copy; {new Date().getFullYear()} {t("Footer.copyright")}
        </div>
      </div>
    </footer>
  );
}