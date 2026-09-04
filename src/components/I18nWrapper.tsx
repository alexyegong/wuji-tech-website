"use client";

import { I18nProvider } from "@/lib/i18n/context";
import { ReactNode } from "react";

export function I18nWrapper({ children, locale = "zh" }: { children: ReactNode; locale?: "zh" | "en" }) {
  return <I18nProvider locale={locale}>{children}</I18nProvider>;
}