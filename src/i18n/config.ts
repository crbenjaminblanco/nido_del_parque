export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";
export const localeCookie = "NEXT_LOCALE";

/** Etiqueta BCP 47 completa para <html lang>, Open Graph y hreflang. */
export const localeTags: Record<Locale, string> = {
  es: "es-CR",
  en: "en-US",
};

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);
