import type { Lang } from "../i18n";

// NOTE: `outcome` lines below are drafts based on each project's brief.
// Replace with real metrics before publishing.

/** A string that carries one variant per supported locale. */
export type Localized = Record<Lang, string>;

export type Work = {
  slug: string;
  /** Client names are proper nouns — the same in every locale. */
  title: string;
  type: Localized;
  tag: Localized;
  outcome: Localized;
  color: string;
  accent: string;
};

/** A `Work` flattened to a single locale, ready to render. */
export type ResolvedWork = Omit<Work, "type" | "tag" | "outcome"> & {
  type: string;
  tag: string;
  outcome: string;
};

export const works: Work[] = [
  {
    slug: "5lc",
    title: "5LC",
    type: {
      en: "Ecommerce & Ticketing Platform",
      es: "Plataforma de Ecommerce y Ticketing",
    },
    tag: {
      en: "Ecommerce / Events",
      es: "Ecommerce / Eventos",
    },
    outcome: {
      en: "Full ecommerce and ticketing platform for pro-wrestling in Chile. Increased sales, cut operating costs and took ownership of every step of the fan experience.",
      es: "Plataforma completa de ecommerce y ticketing para lucha libre profesional en Chile. Aumentó las ventas, redujo los costos operativos y tomó control de cada etapa de la experiencia del fan.",
    },
    color: "#231a10",
    accent: "#D85A30",
  },
  {
    slug: "ticket-validator",
    title: "Ticket Validator",
    type: {
      en: "Real-time Operations Tool",
      es: "Herramienta de Operaciones en Tiempo Real",
    },
    tag: {
      en: "SaaS / Events",
      es: "SaaS / Eventos",
    },
    outcome: {
      en: "Real-time ticket validation and payment control system for live events, replacing a manual door process with instant verification.",
      es: "Sistema de validación de entradas y control de pagos en tiempo real para eventos en vivo, que reemplazó el control manual en puerta por verificación instantánea.",
    },
    color: "#1f1009",
    accent: "#EF9F27",
  },
  {
    slug: "boveda-secreta",
    title: "Bóveda Secreta",
    type: {
      en: "Landing Page & Booking",
      es: "Landing Page y Reservas",
    },
    tag: {
      en: "Education / Sports",
      es: "Educación / Deporte",
    },
    outcome: {
      en: "Site for a wrestling training center: class booking, full service catalogue and trainer profiles in one place.",
      es: "Sitio para un centro de entrenamiento de lucha libre: reserva de clases, catálogo completo de servicios y perfiles de entrenadores en un solo lugar.",
    },
    color: "#1a1208",
    accent: "#D85A30",
  },
  {
    slug: "viviana-palominos",
    title: "Viviana Palominos",
    type: {
      en: "Landing Page & Brand",
      es: "Landing Page y Marca",
    },
    tag: {
      en: "Travel / Services",
      es: "Turismo / Servicios",
    },
    outcome: {
      en: "Landing page for an independent travel agent — presents her services and turns visits into direct contact requests.",
      es: "Landing page para una agente de viajes independiente — presenta sus servicios y convierte las visitas en solicitudes de contacto directo.",
    },
    color: "#231a10",
    accent: "#EF9F27",
  },
  {
    slug: "vge",
    title: "VGE",
    type: {
      en: "Landing Page",
      es: "Landing Page",
    },
    tag: {
      en: "Engineering / B2B",
      es: "Ingeniería / B2B",
    },
    outcome: {
      en: "Corporate landing page for a civil engineering and architecture firm, presenting their services and a direct contact channel.",
      es: "Landing page corporativa para una empresa de ingeniería civil y arquitectura, que presenta sus servicios y un canal de contacto directo.",
    },
    color: "#1f1009",
    accent: "#D85A30",
  },
];

export const getWork = (slug: string) => works.find((w) => w.slug === slug);

/** Collapses every `Localized` field down to one language. */
export const resolveWork = (work: Work, lang: Lang): ResolvedWork => ({
  ...work,
  type: work.type[lang],
  tag: work.tag[lang],
  outcome: work.outcome[lang],
});

export const resolveWorks = (lang: Lang): ResolvedWork[] =>
  works.map((w) => resolveWork(w, lang));
