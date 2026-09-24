export type Project = {
  name: string;
  description: string;
  imgSrc: string;
  link: string;
  linkText?: string;
  secondaryLink?: { href: string; label: string };
  index?: string;
  /** Editorial one-line stat strip rendered under the title. */
  stats?: string[];
  /**
   * One-sentence outcome or takeaway. Rendered under the description so
   * recruiters see *what the project produced*, not just its inputs.
   */
  outcome?: string;
  /** Marks the lead project so the layout can give it more real-estate. */
  featured?: boolean;
  /** Optional object-position override for cover images that need manual framing. */
  imgPosition?: string;
  /** Image fit mode. Defaults to "cover"; use "contain" for logos/marks that shouldn't be cropped. */
  imgFit?: "cover" | "contain";
};

export const PROJECTS: Project[] = [
  {
    index: "01",
    name: "Trinity Interior Design",
    description:
      "A California design studio had a polished site and no way to tell whether it produced business. I designed the GA4 measurement model alongside the build, so both conversion funnels were readable from launch day.",
    imgSrc: "/images/trinity-cover.png",
    link: "/work/trinity",
    linkText: "Read case study",
    secondaryLink: {
      href: "https://trinityinteriordesignstudio.com",
      label: "Live site",
    },
    stats: ["GA4", "Tracking plan", "Conversion UX"],
    outcome:
      "Two funnels mapped to key events — consultation leads and pre-launch waitlist demand — verified firing in Realtime.",
    featured: true,
  },
  {
    index: "02",
    name: "Daily Nexus — UCSB Degree Data",
    description:
      "As a data intern at UCSB's student paper, I turned ten years of degree-conferral records into the three charts behind a published story on which majors are growing, and why.",
    imgSrc: "/images/daily-nexus-cover.svg",
    link: "/work/daily-nexus",
    linkText: "Read case study",
    secondaryLink: {
      href: "https://dailynexus.com/2024-05-16/ucsb-academic-departments-have-seen-growth-in-undergraduate-degrees-conferred-in-recent-years/",
      label: "Published article",
    },
    stats: ["Python", "Plotly", "Data journalism"],
    outcome:
      "The analysis set the reporting: every anomalous line became an interview that explained it.",
  },
  {
    index: "03",
    name: "SQL Marketing Portfolio",
    description:
      "Five SQL analyses on Kaggle's Customer Segmentation Data — acquisition, funnel, cohort retention, revenue ROI, and RFM segmentation. The questions a growth team asks every week.",
    imgSrc: "/images/sql-marketing-portfolio.png",
    link: "https://sql-marketing-portfolio-site.vercel.app",
    linkText: "Open project",
    secondaryLink: {
      href: "https://github.com/nix415/sql-marketing-portfolio-site",
      label: "Source",
    },
    outcome:
      "Isolated high-value RFM segments and flagged at-risk customers for re-activation.",
  },
  {
    index: "04",
    name: "Asian News Aggregator",
    description:
      "Pulls 15+ AAPI news sources and uses Reddit and AI signals to surface what audiences care about — built around audience targeting and content strategy.",
    imgSrc: "/images/asian-news-aggregator.jpg",
    link: "https://asian-news-aggregator.vercel.app",
    linkText: "Visit site",
    secondaryLink: {
      href: "https://github.com/nix415/asian-news-aggregator",
      label: "Source",
    },
    outcome:
      "Cut hours of manual content sourcing out of the weekly social workflow at Asian Founded.",
  },
  {
    index: "05",
    name: "Kyle's Kitchen Marketing Report",
    description:
      "Collegiate marketing report for Kyle's Kitchen — positioning, audience research, and a campaign roadmap built for the American Marketing Association at UCSB.",
    imgSrc: "/images/kyles-kitchen-cover.png",
    link: "/work/kyles-kitchen",
    linkText: "Read case study",
    secondaryLink: {
      href: "/pdfs/kyles-kitchen-marketing-report-2026.pdf",
      label: "Read report",
    },
    outcome:
      "Delivered a full positioning + campaign roadmap for a UCSB AMA client engagement.",
  },
  {
    index: "06",
    name: "UCSB × MLB Case Competition",
    description:
      "National MLB marketing case deck covering audience segmentation, fan engagement strategy, and growth opportunities for a younger demographic.",
    imgSrc: "/images/ucsb-mlb-cover.png",
    imgFit: "contain",
    link: "/work/ucsb-mlb",
    linkText: "Read case study",
    secondaryLink: {
      href: "/pdfs/ucsb-mlb-case-competition.pdf",
      label: "View deck",
    },
    outcome:
      "Audience segmentation + fan-growth strategy aimed at reaching a younger MLB demographic.",
  },
];
