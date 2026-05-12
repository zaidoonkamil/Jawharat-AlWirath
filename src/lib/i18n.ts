export type Locale = 'ar' | 'en';

export const defaultLocale: Locale = 'ar';
export const locales: Locale[] = ['ar', 'en'];

export function getDirection(locale: Locale): 'rtl' | 'ltr' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}
