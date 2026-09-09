# FAIO

Marketing site for **FAIO**, a branding studio. A bilingual (EN/ES) one-pager
plus per-project case-study pages, built with Astro and Tailwind and shipped as
static files.

- **Framework:** [Astro 5](https://astro.build) — static output, zero client JS
  except two small inline scripts (locale redirect, contact form)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com) via `@tailwindcss/vite`,
  with brand tokens declared in `@theme`
- **Package manager:** pnpm
- **Node:** 18.20.8, ^20.3, or >=22

---

## Quick start

```sh
pnpm install
cp .env.example .env     # then fill in PUBLIC_WEB3FORMS_KEY (see below)
pnpm dev                 # http://localhost:4321
```

| Command        | Action                                        |
| :------------- | :-------------------------------------------- |
| `pnpm dev`     | Dev server at `localhost:4321`                |
| `pnpm build`   | Static build to `./dist/`                     |
| `pnpm preview` | Serve `./dist/` locally                       |
| `pnpm astro …` | Astro CLI (`add`, `sync`, …)                  |

> `pnpm astro check` needs `@astrojs/check` + `typescript` installed first —
> neither is a dependency yet, so there is currently no typecheck step in CI.

---

## Environment

| Variable                | Required | Purpose                                        |
| :---------------------- | :------- | :--------------------------------------------- |
| `PUBLIC_WEB3FORMS_KEY`  | yes      | Where the contact form delivers. See below.    |

`.env` is gitignored; `.env.example` documents the shape. Whatever host you
deploy to needs the same variable set at build time — the value is baked into
the HTML.

---

## Project structure

```text
src/
├── components/          One component per page section
│   ├── Home.astro       Composes the whole one-pager
│   ├── CaseStudy.astro  Composes a /work/<slug> page
│   ├── Nav · Hero · Process · About · Services · Contact · Footer
│   └── Work · Testimonials · ClientMarquee   (parked — see "Parked sections")
├── data/work.ts         Case-study catalogue + locale-resolution helpers
├── i18n/
│   ├── en.ts            English copy — source of truth for the dictionary type
│   ├── es.ts            Spanish copy — typed against `en.ts`
│   ├── index.ts         Locale helpers (getLangFromUrl, localizePath, …)
│   └── detect.ts        Inline pre-paint locale redirect script
├── layouts/Layout.astro `<head>`, fonts, hreflang tags, locale redirect
├── pages/
│   ├── index.astro          /
│   ├── work/[slug].astro    /work/<slug>
│   └── es/…                 the same two routes under /es/
└── styles/global.css    Brand tokens (`@theme`) + base layer
```

---

## Internationalisation

English is served from `/`, Spanish from `/es/` — configured in
`astro.config.mjs` with `prefixDefaultLocale: false`.

**Copy lives in the dictionaries, not in the components.** `src/i18n/en.ts`
exports the `Dictionary` type via `typeof en`, and `es.ts` is annotated
`: Dictionary` — so adding a key to English and forgetting it in Spanish is a
type error rather than an English string leaking onto the Spanish page.

Components never hardcode a locale:

```astro
const lang = getLangFromUrl(Astro.url);   // reads the URL, defaults to 'en'
const t = useTranslations(lang);          // the dictionary for that locale
```

Helpers in `src/i18n/index.ts`:

| Helper                  | Use                                                     |
| :---------------------- | :------------------------------------------------------ |
| `getLangFromUrl(url)`   | Active locale from the path                              |
| `useTranslations(lang)` | That locale's dictionary                                 |
| `localizePath(p, lang)` | `/work/5lc` → `/es/work/5lc`; passes `#hash` through     |
| `switchLang(url, lang)` | Same page, other locale — powers the switcher + hreflang |
| `stripLang(pathname)`   | Drops a leading locale segment                           |

### Locale auto-detection

The site is static, so there is no server to read an IP from. `i18n/detect.ts`
exports a render-blocking inline script that picks a locale in the browser,
cheapest signal first:

1. An explicit pick in the language switcher (`localStorage`) always wins.
2. IANA timezone — `America/Santiago` / `Pacific/Easter` means Chile → Spanish.
3. `navigator.languages` — any `es-*` tag → Spanish, otherwise English.

It runs before first paint so a redirected visitor never sees the wrong
language. **If this ever moves to a host with SSR**, swap step 2 for the
platform's country header (`x-vercel-ip-country`, `CF-IPCountry`, …) and drop
the script.

### Adding a locale

1. Add the code to `locales` in `astro.config.mjs` and to `languages` in
   `src/i18n/index.ts`.
2. Copy `src/i18n/en.ts` to `<code>.ts`, annotate it `: Dictionary`, translate.
3. Register it in the `ui` map in `src/i18n/index.ts`.
4. Add `src/pages/<code>/index.astro` and `src/pages/<code>/work/[slug].astro`
   mirroring the `es/` versions.
5. Extend the detection rules in `src/i18n/detect.ts` if it needs one.

---

## Content

### Copy

All of it is in `src/i18n/en.ts` and `src/i18n/es.ts`, keyed by section
(`hero`, `process`, `services`, `contact`, …). Edit there — not in the
components.

### Case studies

`src/data/work.ts` holds the catalogue. Each entry drives both the work grid and
its `/work/<slug>` page:

```ts
{
  slug: "5lc",
  title: "5LC",                    // proper noun — not localised
  type:    { en: "…", es: "…" },   // Localized: one variant per locale
  tag:     { en: "…", es: "…" },
  outcome: { en: "…", es: "…" },
  color: "#231a10",                // page background
  accent: "#D85A30",               // per-project accent
}
```

`resolveWork(work, lang)` flattens the `Localized` fields down to one language
before rendering. Routes are generated from `works` by `getStaticPaths`, so
adding an entry is enough to create the page.

### Design tokens

Brand colours, fonts and animations are declared once in `src/styles/global.css`
under `@theme`, which is what makes `bg-panel`, `text-crema`, `text-tierra`, and
friends resolve as Tailwind utilities.

| Token                         | Value               | Role                          |
| :---------------------------- | :------------------ | :---------------------------- |
| `--color-tierra` / `-dark`    | `#D85A30` `#be4e28` | Primary brand — tierra quemada |
| `--color-fractura` / `-dark`  | `#EF9F27` `#d4891a` | Accent, CTAs only              |
| `--color-antracita`           | `#2C2C2A`           | Page ground                    |
| `--color-panel` / `-2`        | `#343431` `#3c3c39` | Cards, borders                 |
| `--color-crema`               | `#F1EFE8`           | Primary text                   |
| `--color-muted` / `-2`        | `#909090` `#a0a09a` | Secondary text                 |
| `--font-display` / `--font-body` | Syne / Inter     | Loaded from Google Fonts       |

---

## Contact form

`src/components/Contact.astro` posts JSON to
[Web3Forms](https://web3forms.com), which forwards the submission to the inbox
its key is registered to. That keeps the site fully static — no adapter, no
server, no API route.

**Setup:** get a free key at web3forms.com (you enter the destination address
and they email you the key), then set `PUBLIC_WEB3FORMS_KEY`. Without it the
form renders and validates but every submission fails, and the build prints a
warning.

`PUBLIC_` is deliberate: the key ships in the HTML and only ever grants
*sending* to that one inbox, so it is not a secret.

The form handles, all localised: inline validation that only starts correcting
people after the first submit attempt, a disabled/"Sending…" button state, a
success panel that replaces the fields, a retry-able error message, and a
hidden `botcheck` honeypot whose submissions are silently dropped. A `locale`
field rides along so you can see which language a lead came from.

---

## Parked sections

Some sections are built but commented out until the real content exists. Each
is tagged with a `hidden-*` marker so every related site can be found at once:

| Marker            | What is parked                         | Waiting on                 |
| :---------------- | :------------------------------------- | :------------------------- |
| `hidden-sections` | Work grid, Testimonials                | Real case studies + quotes |
| `hidden-prices`   | Price figures in Services and Contact  | Pricing decision           |
| `hidden-sprint`   | The Brand Sprint service card + option | Whether it is offered      |

To restore one, `grep -rn "hidden-sections" src/` and uncomment every hit —
they intentionally span components *and* both dictionaries.

`ClientMarquee` is also commented out in `Home.astro`, but carries no marker —
it is a single line, and its import is still live.

---

## Deploying

`pnpm build` emits plain static files to `dist/`; any static host works. Set
`PUBLIC_WEB3FORMS_KEY` in the host's build environment.

---

## Known gaps

- `site` is not set in `astro.config.mjs`, so `hreflang` tags are relative
  rather than absolute URLs. Set it before launch.
- Case-study page bodies (`src/components/CaseStudy.astro` + the `caseStudy`
  dictionary keys) are placeholder copy, and the `year`/`timeline`/`role` facts
  are hardcoded.
- The `outcome` lines in `src/data/work.ts` are drafts written from each brief —
  they need real metrics before publishing.
- `package.json` has an empty `name`.
- No typecheck, lint, or test setup.
