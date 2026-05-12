'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { Locale, defaultLocale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

interface LanguageContextType {
  locale: Locale;
  t: typeof translations.ar;
  toggleLocale: () => void;
  dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  const toggleLocale = useCallback(() => {
    setLocale(prev => prev === 'ar' ? 'en' : 'ar');
  }, []);

  const value: LanguageContextType = {
    locale,
    t: translations[locale],
    toggleLocale,
    dir: locale === 'ar' ? 'rtl' : 'ltr',
  };

  return (
    <LanguageContext.Provider value={value}>
      <div dir={value.dir} lang={locale}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
