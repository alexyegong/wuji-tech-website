"use client";
import { createContext, useContext } from 'react';

const I18nContext = createContext({ locale: 'zh', t: (k: string) => k });

export const I18nProvider = ({ children, locale, messages = {} }: { children: React.ReactNode; locale: string; messages?: any }) => {
  const t = (key: string) => messages?.[key] || key;
  return (
    <I18nContext.Provider value={{ locale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);

const TerminologyContext = createContext(null);

export const TerminologyProvider = ({ children, terms }: { children: React.ReactNode; terms: any }) => (
  <TerminologyContext.Provider value={terms}>
    {children}
  </TerminologyContext.Provider>
);

export const useTerm = (key: string) => {
  const terms = useContext(TerminologyContext);
  if (!terms) return { en: key, cn: key };
  return terms[key] || { en: key, cn: key };
};
