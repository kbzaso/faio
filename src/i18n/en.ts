// English dictionary. This file is the source of truth for the shape of every
// other locale — `src/i18n/es.ts` is typed against it, so a missing key there
// is a build error rather than a blank spot on the page.
export const en = {
  meta: {
    title: "FAIO — Branding Studio",
    description:
      "FAIO is a branding studio that helps ambitious companies build identities worth remembering — from strategy to execution.",
  },

  langSwitcher: {
    label: "Language",
    en: "English",
    es: "Español",
    enShort: "EN",
    esShort: "ES",
  },

  nav: {
    work: "Work",
    process: "Process",
    services: "Services",
    about: "About",
    contact: "Contact",
    cta: "Start a project",
    ctaShort: "Start",
  },

  hero: {
    eyebrow: "Branding studio — Strategy-first",
    titleLine1: "Brands that make",
    titleHighlight: "people choose you",
    titleLine2: "before they compare.",
    body: "We build brand identities for ambitious companies — from positioning to visual system to launch. Strategy-led, design-executed, results-measured.",
    ctaPrimary: "Start a project",
    ctaSecondary: "See our work",
    scroll: "Scroll",
  },

  work: {
    eyebrow: "Selected work",
    titleLine1: "Results, not",
    titleLine2: "just aesthetics.",
    note: "Every project starts with a business problem. The visual work comes after we've solved it.",
    viewCase: "View case study →",
  },

  process: {
    eyebrow: "How we work",
    titleLine1: "A process built",
    titleLine2: "to reduce risk.",
    steps: [
      {
        num: "01",
        title: "Discovery",
        desc: "We learn your business, your audience, and what makes you different. Interviews, audits, and research — so we build on truth, not assumptions.",
        duration: "1–2 weeks",
      },
      {
        num: "02",
        title: "Strategy",
        desc: "Before design touches a screen, we define your positioning, brand voice, and visual direction. This is the foundation everything is built on.",
        duration: "1–2 weeks",
      },
      {
        num: "03",
        title: "Design",
        desc: "We build your identity system — logo, typography, color, motion principles, and every touchpoint your audience will encounter.",
        duration: "3–5 weeks",
      },
      {
        num: "04",
        title: "Handoff",
        desc: "Full brand guidelines, file libraries, and implementation support. You leave with everything you need to run the brand — and a team to call when you grow.",
        duration: "1 week",
      },
    ],
    footnote: {
      pre: "Total engagement: typically ",
      strong: "8–12 weeks",
      post: " from kickoff to full handoff.",
    },
  },

  about: {
    since: "Since 2019",
    studio: "FAIO Studio",
    badgeStat: "40+",
    badgeLabel: "brands launched",
    eyebrow: "About the studio",
    titleLine1: "We think before",
    titleLine2: "we draw.",
    paragraphs: [
      "FAIO is a boutique branding studio founded on a single conviction: that design without strategy is decoration. We've built identities for SaaS companies raising Series B, consumer brands launching into new categories, and founders who know exactly who they are — they just need the world to see it too.",
      "We're a small team by design. Every project gets senior attention from day one. No hand-offs to junior designers six weeks in. You talk to the people doing the work.",
      "Our process is rigorous and our opinions are strong. We'll push back when something isn't right — because our job is to protect your brand, not to make you feel comfortable.",
    ],
    stats: [
      { stat: "40+", label: "Brands built" },
      { stat: "8", label: "Industries" },
      { stat: "92%", label: "Client retention" },
    ],
  },

  // Prices are currently hidden site-wide (grep "hidden-prices").
  // These are USD; `es.ts` keeps a separate CLP list. Update both together.
  services: {
    eyebrow: "What we offer",
    titleLine1: "Scoped to what",
    titleLine2: "you actually need.",
    popular: "Most popular",
    quote: "Get a quote →",
    items: [
      {
        title: "Brand Identity",
        // hidden-prices: restore with the price block in Services.astro
        // pricePrefix: "From",
        // priceAmount: "$18k",
        desc: "Logo system, typography, color, brand guidelines, and asset library. Everything to build and run a consistent identity.",
        features: ["Logo & lockups", "Color & typography", "Brand guidelines", "Asset library"],
      },
      {
        title: "Brand Strategy",
        // hidden-prices: restore with the price block in Services.astro
        // pricePrefix: "From",
        // priceAmount: "$8k",
        desc: "Positioning, messaging framework, and voice guidelines. For companies that need to know who they are before they design anything.",
        features: ["Positioning", "Messaging framework", "Voice & tone", "Competitive audit"],
      },
      {
        title: "Digital Design",
        // hidden-prices: restore with the price block in Services.astro
        // pricePrefix: "From",
        // priceAmount: "$22k",
        desc: "Website design, UI systems, and digital brand implementation. Strategy-led and built to convert.",
        features: ["Website design", "UI/component system", "Responsive specs", "Developer handoff"],
      },
      /* hidden-sprint: Brand Sprint is parked. Restore this entry, its
         `contact.form.serviceOptions.sprint` option, and switch the services
         grid in Services.astro back to four columns.
      {
        title: "Brand Sprint",
        pricePrefix: "",
        priceAmount: "$4,500",
        desc: "A focused 2-week engagement for early-stage founders. Core positioning + a visual direction to move forward with.",
        features: ["2-week timeline", "Positioning draft", "Visual direction", "1 revision round"],
      },
      */
    ],
    footnote: {
      pre: "Not sure which fits? ",
      link: "Let's talk",
      post: " — we'll scope it together.",
    },
  },

  testimonials: {
    eyebrow: "What clients say",
    titleLine1: "Don't take",
    titleLine2: "our word for it.",
    items: [
      {
        quote:
          "FAIO didn't just design a logo — they figured out what we were actually trying to say, and then built everything around that. It changed how we talk about ourselves internally too.",
        author: "Sara M.",
        role: "Co-founder, Orka",
        initial: "S",
      },
      {
        quote:
          "We'd worked with two other studios before FAIO. The difference was the strategy upfront. By the time we saw design concepts, they already felt inevitable.",
        author: "James R.",
        role: "CMO, Meridian Group",
        initial: "J",
      },
      {
        quote:
          "Fast, sharp, and zero hand-holding needed. They asked the right questions and ran with it. The brand they delivered is better than what I had in my head.",
        author: "Lena K.",
        role: "Founder, Halo",
        initial: "L",
      },
    ],
  },

  contact: {
    eyebrow: "Start a project",
    titleLine1: "Let's build something",
    titleHighlight: "worth remembering.",
    body: "Tell us about your project. We'll respond within 48 hours with a brief assessment and, if it's a good fit, a proposal call.",
    bullets: [
      // hidden-prices: this quoted the Brand Sprint price, so it goes with both.
      // { pre: "Projects start at ", strong: "$4,500", post: "" },
      { pre: "Response within ", strong: "48 hours", post: "" },
      { pre: "Free 30-min discovery call", strong: "", post: "" },
    ],
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      company: "Company",
      companyPlaceholder: "Your company",
      email: "Email",
      emailPlaceholder: "you@company.com",
      service: "Service",
      servicePlaceholder: "What are you looking for?",
      serviceOptions: {
        identity: "Brand Identity",
        strategy: "Brand Strategy",
        digital: "Digital Design",
        // hidden-sprint: no Brand Sprint card, so nothing to pick here.
        // sprint: "Brand Sprint",
        unsure: "Not sure yet",
      },
      message: "Brief",
      messagePlaceholder: "Tell us about your brand, your goals, and your timeline...",
      submit: "Send inquiry →",
    },
  },

  footer: {
    tagline: "Branding studio — Strategy-first",
    rights: "All rights reserved.",
  },

  caseStudy: {
    back: "← Back to work",
    facts: {
      client: "Client",
      type: "Type",
      sector: "Sector",
      year: "Year",
      timeline: "Timeline",
      role: "Role",
    },
    factValues: {
      timeline: "Placeholder — 6 weeks",
      role: "Placeholder — Strategy, design & build",
    },
    sections: [
      {
        heading: "The challenge",
        body: "Placeholder copy. Describe the business problem the client came to us with, the constraints, and what was at stake if it went unsolved.",
      },
      {
        heading: "The approach",
        body: "Placeholder copy. Walk through the strategy we set, the decisions that shaped the work, and how we moved from problem to direction.",
      },
      {
        heading: "The outcome",
        body: "Placeholder copy. Show the results with concrete metrics — revenue, cost, time saved, conversion — and what changed for the client after launch.",
      },
    ],
    ctaTitle: "Have a problem worth solving?",
    ctaButton: "Start a project",
  },
};

export type Dictionary = typeof en;
