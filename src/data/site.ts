export const SITE = {
  name: "Nixon Tse",
  firstName: "Nixon",
  lastName: "Tse",

  nav: ["About", "Work", "Contact"] as const,

  availability: "Available · Spring 2026 · Growth & Marketing Analytics",

  /**
   * Short 2-second identity line under the hero name so recruiters know
   * the school, major, and target roles without reading a paragraph.
   */
  tagline: "UCSB '26 · Communication · Technology Management Certificate",

  /**
   * Short recruiter-facing answers to "is he available / where / what role"
   * rendered as a mono band directly under the tagline.
   */
  quickFacts: ["San Francisco"] as const,

  hero: {
    bio: "One of my deepest joys comes from turning customer curiosity into work people actually notice — across growth marketing, marketing analytics, and small digital experiments.",
    roles: ["Growth Marketing", "Marketing Analytics"] as const,
    currently: [
      "Shipping GA4 conversion tracking for a live client site",
      "Writing SQL analyses for a 1,000-customer dataset",
      "Reading How Brands Grow — Byron Sharp",
      "Studying Communication at UC Santa Barbara",
    ],
  },

  /**
   * In-page anchors for the "WHERE YOU CAN START" list in the hero.
   * `icon` names map to lucide-react exports in <Hero>.
   */
  startHere: [
    { icon: "User", label: "About me", target: "#about" },
    { icon: "FileText", label: "Browse my projects", target: "#work" },
    { icon: "Layers", label: "What I can offer", target: "#skills" },
    { icon: "Send", label: "Get in touch", target: "#contact" },
  ] as const,

  work: {
    title: "Work",
    eyebrow: "Work",
    lede: "Selected work across growth analytics, marketing strategy, and shipped digital experiments.",
  },

  about: {
    title: "About",
    eyebrow: "About",
    body: "I'm focused on growth marketing and marketing analytics, where I get to mix curiosity about people with a love for data. I dig into customer behavior, build dashboards and SQL analyses that drive decisions, and ship small web projects that put those insights to work.",
    closing:
      "Looking for a team where I can help brands understand their audience, sharpen their funnel, and grow with intention.",
  },

  /**
   * Short personality bullets shown near the end of the About section so
   * recruiters see the person behind the resume. Populated from the
   * follow-up Q&A — keep each line under ~18 words.
   */
  funFacts: {
    label: "Fun facts",
    items: [] as readonly string[],
  },

  /**
   * New Skills section (id="skills"): four category cards + a capability
   * chip strip. `icon` maps to a lucide-react icon name registered in
   * <SkillsSection>.
   */
  skills: {
    eyebrow: "Skills",
    title: "Skills",
    categories: [
      {
        icon: "BarChart3",
        name: "Marketing Analytics",
        body: "I pull customer and campaign data with SQL and Python, then turn it into funnels, cohorts, and segments that drive real decisions — not just dashboards that sit on a wall.",
      },
      {
        icon: "TrendingUp",
        name: "Growth Strategy",
        body: "From audience research to positioning and channel planning, I build campaigns that help brands reach the right people — not just more people.",
      },
      {
        icon: "Megaphone",
        name: "Content & Audience",
        body: "Ran social content for AAPI audiences during my internship at Asian Founded. I pair community insight with performance data so posts actually earn attention.",
      },
      {
        icon: "Code2",
        name: "Web & Data Tools",
        body: "Ship small web projects in React + Tailwind, build dashboards, and wire up tracking so the whole team can see what's working in real time.",
      },
    ] as const,
    capabilitiesLabel: "All Capabilities",
    capabilities: [
      "SQL",
      "Python",
      "Tableau",
      "Google Analytics",
      "A/B Testing",
      "HubSpot",
      "Meta Ads",
      "Audience Research",
      "React",
      "Excel",
      "Campaign Strategy",
      "Positioning",
      "Funnel Analysis",
      "RFM Segmentation",
      "Social Content",
      "Dashboards",
    ] as const,
  },

  contact: {
    title: "Let's talk.",
    eyebrow: "Contact",
    lede: "The best places to reach me.",
    email: "nixontse1@gmail.com",
    github: "https://github.com/nix415",
    linkedin: "https://www.linkedin.com/in/nixontse/",
    resumeHref: "/resume.pdf",
  },

  footer: {
    updated: "Last updated — Jul 2026",
  },
} as const;

export type StartHereItem = (typeof SITE.startHere)[number];
