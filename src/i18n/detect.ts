import { defaultLang, languages } from "./index";

/** Where an explicit choice from the language switcher is remembered. */
export const LANG_STORAGE_KEY = "faio:lang";

/**
 * Inline, render-blocking locale redirect.
 *
 * The site builds to static files, so there is no server to read an IP from.
 * Country is inferred in the browser instead, cheapest signal first:
 *
 *   1. An explicit choice from the language switcher always wins.
 *   2. IANA timezone — `America/Santiago` / `Pacific/Easter` means Chile -> Spanish.
 *      This is the closest stand-in for "which country is this request from"
 *      that is available without a network call.
 *   3. Browser language — any `es-*` tag -> Spanish, anything else -> English,
 *      which lands English-speaking countries on the default locale.
 *
 * If this ever moves to a host with SSR, swap step 2 for the platform's
 * country header (`x-vercel-ip-country`, `CF-IPCountry`, ...) and drop the script.
 */
export const localeRedirectScript = `
(function () {
  var KEY = ${JSON.stringify(LANG_STORAGE_KEY)};
  var LOCALES = ${JSON.stringify(Object.keys(languages))};
  var DEFAULT = ${JSON.stringify(defaultLang)};
  var CHILE_TZ = ["America/Santiago", "Pacific/Easter"];

  function localeOf(pathname) {
    var seg = pathname.split("/")[1];
    return LOCALES.indexOf(seg) > -1 ? seg : DEFAULT;
  }

  function stripLocale(pathname) {
    var parts = pathname.split("/");
    if (LOCALES.indexOf(parts[1]) > -1) {
      parts.splice(1, 1);
      return parts.join("/") || "/";
    }
    return pathname || "/";
  }

  function withLocale(pathname, locale) {
    var base = stripLocale(pathname);
    if (locale === DEFAULT) return base;
    return base === "/" ? "/" + locale + "/" : "/" + locale + base;
  }

  function detect() {
    try {
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      if (CHILE_TZ.indexOf(tz) > -1) return "es";
    } catch (e) {}

    var tags = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language];
    for (var i = 0; i < tags.length; i++) {
      var tag = String(tags[i] || "").toLowerCase();
      if (tag.indexOf("es") === 0) return "es";
      if (tag.indexOf("en") === 0) return "en";
    }
    return DEFAULT;
  }

  // An explicit pick in the language switcher is remembered, which is what
  // stops auto-detection from bouncing the visitor straight back.
  document.addEventListener("click", function (ev) {
    var el = ev.target && ev.target.closest ? ev.target.closest("[data-set-lang]") : null;
    if (!el) return;
    var picked = el.getAttribute("data-set-lang");
    if (LOCALES.indexOf(picked) > -1) {
      try { localStorage.setItem(KEY, picked); } catch (e) {}
    }
  });

  try {
    var stored = null;
    try { stored = localStorage.getItem(KEY); } catch (e) {}

    var wanted = LOCALES.indexOf(stored) > -1 ? stored : detect();
    var current = localeOf(location.pathname);

    if (wanted !== current) {
      location.replace(withLocale(location.pathname, wanted) + location.search + location.hash);
    }
  } catch (e) {}
})();
`;
