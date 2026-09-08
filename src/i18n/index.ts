import { en, type Dictionary } from "./en";
import { es } from "./es";

export const languages = {
  en: "English",
  es: "Español",
} as const;

export type Lang = keyof typeof languages;

/** The locale served from the un-prefixed root (`/`). */
export const defaultLang: Lang = "en";

export const ui: Record<Lang, Dictionary> = { en, es };

export type { Dictionary };

/** Narrows an arbitrary string to a supported locale. */
export function isLang(value: string): value is Lang {
  return value in languages;
}

/**
 * Reads the active locale off the URL. `/es/...` is Spanish, everything else
 * falls back to the default locale.
 */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  return first && isLang(first) ? first : defaultLang;
}

export function useTranslations(lang: Lang): Dictionary {
  return ui[lang];
}

/** Drops a leading locale segment: `/es/work/5lc` -> `/work/5lc`. */
export function stripLang(pathname: string): string {
  const [, first, ...rest] = pathname.split("/");
  if (first && isLang(first)) {
    const remainder = rest.join("/");
    return remainder ? `/${remainder}` : "/";
  }
  return pathname || "/";
}

/**
 * Builds a locale-aware href from a locale-free path.
 * Pure hash links (`#work`) are returned untouched so in-page anchors keep working.
 */
export function localizePath(path: string, lang: Lang): string {
  if (path.startsWith("#")) return path;

  const base = stripLang(path.startsWith("/") ? path : `/${path}`);
  if (lang === defaultLang) return base;
  return base === "/" ? `/${lang}/` : `/${lang}${base}`;
}

/** Same URL, other locale — used by the language switcher and the hreflang tags. */
export function switchLang(url: URL, lang: Lang): string {
  return localizePath(url.pathname, lang) + url.search + url.hash;
}
