import type { Dictionary } from "./en";

// Typed as `Dictionary`, so any key added to `en.ts` and forgotten here is a
// compile error instead of an English string leaking into the Spanish site.
export const es: Dictionary = {
  meta: {
    title: "FAIO — Estudio de Branding",
    description:
      "FAIO es un estudio de branding que ayuda a empresas ambiciosas a construir identidades que se recuerdan — desde la estrategia hasta la ejecución.",
  },

  langSwitcher: {
    label: "Idioma",
    en: "English",
    es: "Español",
    enShort: "EN",
    esShort: "ES",
  },

  nav: {
    work: "Trabajo",
    process: "Proceso",
    services: "Servicios",
    about: "Estudio",
    contact: "Contacto",
    cta: "Comenzar un proyecto",
    ctaShort: "Comenzar",
  },

  hero: {
    eyebrow: "Estudio de branding — Estrategia primero",
    titleLine1: "Marcas que hacen",
    titleHighlight: "que te elijan",
    titleLine2: "antes de comparar.",
    body: "Construimos identidades de marca para empresas ambiciosas — desde el posicionamiento hasta el sistema visual y el lanzamiento. Guiadas por estrategia, ejecutadas con diseño, medidas por resultados.",
    ctaPrimary: "Comenzar un proyecto",
    ctaSecondary: "Ver nuestro trabajo",
    scroll: "Desliza",
  },

  work: {
    eyebrow: "Trabajo seleccionado",
    titleLine1: "Resultados, no",
    titleLine2: "solo estética.",
    note: "Cada proyecto parte de un problema de negocio. El trabajo visual viene después de resolverlo.",
    viewCase: "Ver caso de estudio →",
  },

  process: {
    eyebrow: "Cómo trabajamos",
    titleLine1: "Un proceso hecho",
    titleLine2: "para reducir riesgos.",
    steps: [
      {
        num: "01",
        title: "Descubrimiento",
        desc: "Conocemos tu negocio, tu audiencia y lo que te hace diferente. Entrevistas, auditorías e investigación — para construir sobre hechos, no sobre supuestos.",
        duration: "1–2 semanas",
      },
      {
        num: "02",
        title: "Estrategia",
        desc: "Antes de que el diseño toque una pantalla, definimos tu posicionamiento, tu voz de marca y la dirección visual. Esta es la base sobre la que se construye todo.",
        duration: "1–2 semanas",
      },
      {
        num: "03",
        title: "Diseño",
        desc: "Construimos tu sistema de identidad — logo, tipografía, color, principios de movimiento y cada punto de contacto con tu audiencia.",
        duration: "3–5 semanas",
      },
      {
        num: "04",
        title: "Entrega",
        desc: "Manual de marca completo, librerías de archivos y soporte de implementación. Te vas con todo lo necesario para gestionar la marca — y un equipo al que llamar cuando crezcas.",
        duration: "1 semana",
      },
    ],
    footnote: {
      pre: "Duración total: normalmente ",
      strong: "8–12 semanas",
      post: " desde el kickoff hasta la entrega final.",
    },
  },

  about: {
    since: "Desde 2019",
    studio: "FAIO Studio",
    badgeStat: "40+",
    badgeLabel: "marcas lanzadas",
    eyebrow: "Sobre el estudio",
    titleLine1: "Pensamos antes",
    titleLine2: "de dibujar.",
    paragraphs: [
      "FAIO es un estudio de branding boutique fundado sobre una sola convicción: que el diseño sin estrategia es decoración. Hemos construido identidades para empresas SaaS levantando su Serie B, marcas de consumo entrando en nuevas categorías y fundadores que saben exactamente quiénes son — solo necesitan que el mundo también lo vea.",
      "Somos un equipo pequeño por decisión propia. Cada proyecto recibe atención senior desde el primer día. Nada de traspasos a diseñadores junior a las seis semanas. Hablas con las personas que hacen el trabajo.",
      "Nuestro proceso es riguroso y nuestras opiniones son firmes. Te vamos a contradecir cuando algo no esté bien — porque nuestro trabajo es proteger tu marca, no hacerte sentir cómodo.",
    ],
    stats: [
      { stat: "40+", label: "Marcas construidas" },
      { stat: "8", label: "Industrias" },
      { stat: "92%", label: "Retención de clientes" },
    ],
  },

  // Prices are currently hidden site-wide (grep "hidden-prices").
  // Prices are quoted in CLP here and in USD in `en.ts` — they are separate
  // price lists, not a live conversion. Current figures were derived at roughly
  // 950 CLP/USD and rounded. When one list changes, change the other:
  //   Identidad de Marca  $17.000.000  <->  From $18k
  //   Estrategia de Marca  $7.500.000  <->  From $8k
  //   Diseño Digital      $21.000.000  <->  From $22k
  //   Brand Sprint         $4.300.000  <->  $4,500   (also in `contact.bullets`)
  services: {
    eyebrow: "Qué ofrecemos",
    titleLine1: "Dimensionado a lo que",
    titleLine2: "realmente necesitas.",
    popular: "Más popular",
    quote: "Pedir cotización →",
    items: [
      {
        title: "Identidad de Marca",
        // hidden-prices: restore with the price block in Services.astro
        // pricePrefix: "Desde",
        // priceAmount: "$17.000.000",
        desc: "Sistema de logo, tipografía, color, manual de marca y librería de recursos. Todo para construir y mantener una identidad consistente.",
        features: ["Logo y variantes", "Color y tipografía", "Manual de marca", "Librería de recursos"],
      },
      {
        title: "Estrategia de Marca",
        // hidden-prices: restore with the price block in Services.astro
        // pricePrefix: "Desde",
        // priceAmount: "$7.500.000",
        desc: "Posicionamiento, marco de mensajes y guía de voz. Para empresas que necesitan saber quiénes son antes de diseñar nada.",
        features: ["Posicionamiento", "Marco de mensajes", "Voz y tono", "Auditoría competitiva"],
      },
      {
        title: "Diseño Digital",
        // hidden-prices: restore with the price block in Services.astro
        // pricePrefix: "Desde",
        // priceAmount: "$21.000.000",
        desc: "Diseño de sitios web, sistemas de UI e implementación digital de la marca. Guiado por estrategia y construido para convertir.",
        features: ["Diseño de sitio web", "Sistema de UI y componentes", "Especificaciones responsive", "Entrega a desarrollo"],
      },
      /* hidden-sprint: Brand Sprint is parked. Restore this entry, its
         `contact.form.serviceOptions.sprint` option, and switch the services
         grid in Services.astro back to four columns.
      {
        title: "Brand Sprint",
        pricePrefix: "",
        priceAmount: "$4.300.000",
        desc: "Un proyecto enfocado de 2 semanas para fundadores en etapa temprana. Posicionamiento base + una dirección visual para avanzar.",
        features: ["Plazo de 2 semanas", "Borrador de posicionamiento", "Dirección visual", "1 ronda de revisión"],
      },
      */
    ],
    footnote: {
      pre: "¿No sabes cuál te sirve? ",
      link: "Conversemos",
      post: " — lo dimensionamos juntos.",
    },
  },

  testimonials: {
    eyebrow: "Lo que dicen los clientes",
    titleLine1: "No nos creas",
    titleLine2: "solo a nosotros.",
    items: [
      {
        quote:
          "FAIO no solo diseñó un logo — descubrieron lo que de verdad queríamos decir y construyeron todo alrededor de eso. Incluso cambió la forma en que hablamos de nosotros mismos internamente.",
        author: "Sara M.",
        role: "Cofundadora, Orka",
        initial: "S",
      },
      {
        quote:
          "Habíamos trabajado con otros dos estudios antes de FAIO. La diferencia fue la estrategia por delante. Cuando vimos los conceptos de diseño, ya se sentían inevitables.",
        author: "James R.",
        role: "CMO, Meridian Group",
        initial: "J",
      },
      {
        quote:
          "Rápidos, precisos y sin necesidad de supervisión. Hicieron las preguntas correctas y avanzaron solos. La marca que entregaron es mejor que la que tenía en la cabeza.",
        author: "Lena K.",
        role: "Fundadora, Halo",
        initial: "L",
      },
    ],
  },

  contact: {
    eyebrow: "Comenzar un proyecto",
    titleLine1: "Construyamos algo",
    titleHighlight: "que se recuerde.",
    body: "Cuéntanos sobre tu proyecto. Te respondemos en menos de 48 horas con una evaluación breve y, si encaja, una llamada para presentarte una propuesta.",
    bullets: [
      // hidden-prices: this quoted the Brand Sprint price, so it goes with both.
      // { pre: "Los proyectos parten en ", strong: "$4.300.000", post: "" },
      { pre: "Respuesta en menos de ", strong: "48 horas", post: "" },
      { pre: "Llamada de descubrimiento de 30 min gratis", strong: "", post: "" },
    ],
    form: {
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      company: "Empresa",
      companyPlaceholder: "Tu empresa",
      email: "Email",
      emailPlaceholder: "tu@empresa.com",
      service: "Servicio",
      servicePlaceholder: "¿Qué estás buscando?",
      serviceOptions: {
        identity: "Identidad de Marca",
        strategy: "Estrategia de Marca",
        digital: "Diseño Digital",
        // hidden-sprint: no Brand Sprint card, so nothing to pick here.
        // sprint: "Brand Sprint",
        unsure: "Aún no lo sé",
      },
      message: "Brief",
      messagePlaceholder: "Cuéntanos sobre tu marca, tus objetivos y tus plazos...",
      optional: "Opcional",
      submit: "Enviar consulta →",
      submitting: "Enviando…",
      errors: {
        name: "Cuéntanos tu nombre.",
        email: "Ingresa un email válido.",
        service: "Elige qué estás buscando.",
        message: "Con una o dos líneas sobre el proyecto basta.",
        network: "Algo falló de nuestro lado — vuelve a intentarlo en un momento.",
      },
      success: {
        title: "Consulta enviada.",
        body: "Gracias — ya la tenemos. Te respondemos en menos de 48 horas.",
        again: "Enviar otra",
      },
    },
  },

  footer: {
    tagline: "Estudio de branding — Estrategia primero",
    rights: "Todos los derechos reservados.",
  },

  caseStudy: {
    back: "← Volver al trabajo",
    facts: {
      client: "Cliente",
      type: "Tipo",
      sector: "Sector",
      year: "Año",
      timeline: "Plazo",
      role: "Rol",
    },
    factValues: {
      timeline: "Placeholder — 6 semanas",
      role: "Placeholder — Estrategia, diseño y desarrollo",
    },
    sections: [
      {
        heading: "El desafío",
        body: "Texto de ejemplo. Describe el problema de negocio con el que llegó el cliente, las restricciones y qué estaba en juego si no se resolvía.",
      },
      {
        heading: "El enfoque",
        body: "Texto de ejemplo. Recorre la estrategia que definimos, las decisiones que dieron forma al trabajo y cómo pasamos del problema a la dirección.",
      },
      {
        heading: "El resultado",
        body: "Texto de ejemplo. Muestra los resultados con métricas concretas — ingresos, costos, tiempo ahorrado, conversión — y qué cambió para el cliente después del lanzamiento.",
      },
    ],
    ctaTitle: "¿Tienes un problema que valga la pena resolver?",
    ctaButton: "Comenzar un proyecto",
  },
};
