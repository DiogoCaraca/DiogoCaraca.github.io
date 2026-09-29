import { en, type Dictionary } from './en';

// Add 'de' and 'pt' here (and in astro.config.mjs) once their dictionaries exist.
const dictionaries: Record<string, Dictionary> = { en };

export const defaultLocale = 'en';
export const locales = Object.keys(dictionaries);

export function useTranslations(locale: string | undefined): Dictionary {
  return dictionaries[locale ?? defaultLocale] ?? dictionaries[defaultLocale];
}

const monthFormatters = new Map<string, Intl.DateTimeFormat>();

/** Formats "2023-05" as "May 2023" in the given locale. */
export function formatMonth(value: string, locale: string = defaultLocale): string {
  const [year, month] = value.split('-').map(Number);
  let formatter = monthFormatters.get(locale);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric', timeZone: 'UTC' });
    monthFormatters.set(locale, formatter);
  }
  return formatter.format(new Date(Date.UTC(year, (month ?? 1) - 1, 1)));
}
