// NOTE: `outcome` lines below are drafts based on each project's brief.
// Replace with real metrics before publishing.
export type Work = {
  slug: string;
  title: string;
  type: string;
  tag: string;
  outcome: string;
  color: string;
  accent: string;
};

export const works: Work[] = [
  {
    slug: "5lc",
    title: "5LC",
    type: "Ecommerce & Ticketing Platform",
    tag: "Ecommerce / Events",
    outcome:
      "Full ecommerce and ticketing platform for pro-wrestling in Chile. Increased sales, cut operating costs and took ownership of every step of the fan experience.",
    color: "#231a10",
    accent: "#D85A30",
  },
  {
    slug: "ticket-validator",
    title: "Ticket Validator",
    type: "Real-time Operations Tool",
    tag: "SaaS / Events",
    outcome:
      "Real-time ticket validation and payment control system for live events, replacing a manual door process with instant verification.",
    color: "#1f1009",
    accent: "#EF9F27",
  },
  {
    slug: "boveda-secreta",
    title: "Bóveda Secreta",
    type: "Landing Page & Booking",
    tag: "Education / Sports",
    outcome:
      "Site for a wrestling training center: class booking, full service catalogue and trainer profiles in one place.",
    color: "#1a1208",
    accent: "#D85A30",
  },
  {
    slug: "viviana-palominos",
    title: "Viviana Palominos",
    type: "Landing Page & Brand",
    tag: "Travel / Services",
    outcome:
      "Landing page for an independent travel agent — presents her services and turns visits into direct contact requests.",
    color: "#231a10",
    accent: "#EF9F27",
  },
  {
    slug: "vge",
    title: "VGE",
    type: "Landing Page",
    tag: "Engineering / B2B",
    outcome:
      "Corporate landing page for a civil engineering and architecture firm, presenting their services and a direct contact channel.",
    color: "#1f1009",
    accent: "#D85A30",
  },
];

export const getWork = (slug: string) => works.find((w) => w.slug === slug);
