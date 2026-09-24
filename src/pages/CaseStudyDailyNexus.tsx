import type { CSSProperties } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Code,
  MessageSquareQuote,
  Search,
  Split,
  TrendingUp,
  Users,
} from "lucide-react";
import Section from "../components/Section";
import LetterRise from "../components/LetterRise";
import LineChart from "../components/charts/LineChart";
import StackedBarChart from "../components/charts/StackedBarChart";
import { DIVISIONS, ECONOMICS, MAJORS, YEARS } from "../data/dailyNexus";
import { useInView } from "../hooks/useInView";

const ARTICLE_URL =
  "https://dailynexus.com/2024-05-16/ucsb-academic-departments-have-seen-growth-in-undergraduate-degrees-conferred-in-recent-years/";

const HEADLINE_STATS = [
  {
    value: "7,061",
    label: "Degrees conferred in 2022-23",
    note: "Up from 5,339 a decade earlier",
  },
  {
    value: "+32%",
    label: "Decade-long growth",
    note: "Most of it arriving in a single year",
  },
  {
    value: "93%",
    label: "Share from Letters & Science",
    note: "Effectively unchanged across ten years",
  },
  {
    value: "3",
    label: "Charts published",
    note: "Built in Python and Plotly for the story page",
  },
];

const CRAFT_NOTES = [
  {
    icon: Split,
    title: "Gaps, not zeros",
    body: "Statistics & Data Science has no figures before 2019-20 and Psychological & Brain Sciences none before 2017-18, because the programs didn't exist in their current form. Plotting those years as zero would have invented a collapse that never happened, so the lines break instead.",
  },
  {
    icon: TrendingUp,
    title: "Shape follows question",
    body: "Stacked bars for the division view, because the question was composition — who makes up the total. Lines for the major view, because the question was trajectory. Same dataset, two different questions, two different marks.",
  },
  {
    icon: Code,
    title: "Built to sit inside an article",
    body: "Transparent plot and paper backgrounds so the charts inherited the Nexus page rather than sitting on a white card, plus unified hover so readers could compare every major at a given year in one tooltip.",
  },
  {
    icon: Search,
    title: "The outlier check",
    body: "Psychological & Brain Sciences shows 4 degrees in 2017-18 and 476 by 2022-23. That first number looks like an error until you learn the major was created in 2016 to replace the B.A. in Psychology — the tiny cohort is real, and it's the story.",
  },
];

const IMPROVEMENTS = [
  {
    title: "Normalize against enrollment",
    body: "Degree counts rise partly because the university got bigger. A rate per 1,000 enrolled students would separate “more students” from “students choosing differently,” which is the claim the headline actually makes.",
  },
  {
    title: "Report ratios, not percent change",
    body: "“Nearly tripled” is harder to misread than a percent increase, where the difference between 185% growth and 285% of baseline trips up writers and readers alike.",
  },
  {
    title: "Ship the data with the story",
    body: "A linked CSV and a cleaned-up notebook would let any reader reproduce the chart — cheap to do, and it raises the trust ceiling on every future data story the desk publishes.",
  },
];

export default function CaseStudyDailyNexus() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const [heroRef, heroInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <main>
      {/* ── Top utility row ───────────────────────────────────── */}
      <div className="px-6 pt-24 sm:pt-28">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/#work"
            className="press inline-flex items-center gap-2 mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="link-ink">Back to work</span>
          </Link>
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className={`reveal ${heroInView ? "is-visible" : ""} px-6 pt-10 pb-16 sm:pt-14 md:pb-20`}
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="dash" aria-hidden="true" />
            <span className="mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
              Case Study · The Daily Nexus · 2024
            </span>
          </div>

          <h1 className="display leading-[1.02] tracking-[-0.02em] text-[clamp(2.25rem,7vw,5.25rem)]">
            <span className="block">
              <LetterRise text="Finding the story inside" baseDelay={120} />
            </span>
            <span className="block">
              <LetterRise text="a decade of degree data." baseDelay={260} />
            </span>
          </h1>

          <p
            className="hero-rise mt-8 display text-[16px] sm:text-[18px] leading-[1.55] text-[color:var(--color-ink)] max-w-[62ch]"
            style={{ ["--hero-delay" as never]: "650ms" } as CSSProperties}
          >
            As a data intern at UC Santa Barbara's student newspaper, I took ten
            years of degree-conferral records from the Office of Budget &amp;
            Planning, found the trend hiding in them, and built the three charts
            that anchor the published story.
          </p>

          <dl
            className="hero-rise mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 border-t border-[color:var(--color-line)] pt-6"
            style={{ ["--hero-delay" as never]: "780ms" } as CSSProperties}
          >
            {[
              { label: "Brief", value: "Find the trend in UCSB degree data" },
              { label: "Format", value: "Student newsroom · published article" },
              { label: "Role", value: "Analysis · Visualization · Reporting" },
              { label: "Year", value: "2024" },
            ].map((row) => (
              <div key={row.label}>
                <dt className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
                  {row.label}
                </dt>
                <dd className="mt-2 display text-[14px] leading-[1.4] text-[color:var(--color-ink)]">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>

          <div
            className="hero-rise mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            style={{ ["--hero-delay" as never]: "900ms" } as CSSProperties}
          >
            <a
              href={ARTICLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="press group inline-flex items-center gap-2 mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--color-ink)]"
            >
              <span className="link-ink">Read the published article</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#analysis"
              className="press inline-flex items-center gap-2 mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
            >
              <span className="link-ink">Skip to the charts</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── The assignment ────────────────────────────────────── */}
      <Section
        id="assignment"
        eyebrow="The Assignment"
        title="A spreadsheet, and the question of whether it said anything."
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-7 space-y-5">
            <p
              className="stagger-item display text-[15px] sm:text-[17px] leading-[1.6] text-[color:var(--color-ink)] max-w-[58ch]"
              style={{ ["--stagger-delay" as never]: "120ms" } as CSSProperties}
            >
              The raw material was ten years of undergraduate degree counts from
              the UCSB Office of Budget &amp; Planning, broken out by division
              and by major. Public, unglamorous, and not a story on its own —
              every number in it goes up, because the university got bigger.
            </p>
            <p
              className="stagger-item display text-[14.5px] leading-[1.6] text-[color:var(--color-muted)] max-w-[58ch]"
              style={{ ["--stagger-delay" as never]: "240ms" } as CSSProperties}
            >
              The job was to find the movement that wasn't just growth. That
              meant asking the data three questions in sequence: where does the
              total come from, which majors move faster than the total, and
              where do two similar programs disagree with each other. Each
              question produced one chart, and the three together produced the
              article.
            </p>
            <p
              className="stagger-item display text-[14.5px] leading-[1.6] text-[color:var(--color-muted)] max-w-[58ch]"
              style={{ ["--stagger-delay" as never]: "360ms" } as CSSProperties}
            >
              Every figure below is the published data, replotted here from the
              same numbers.
            </p>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-x-6 gap-y-8">
            {HEADLINE_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="stagger-item border-t border-[color:var(--color-line)] pt-4"
                style={
                  {
                    ["--stagger-delay" as never]: `${160 + i * 80}ms`,
                  } as CSSProperties
                }
              >
                <div className="display text-[clamp(1.5rem,2.6vw,2rem)] leading-none tracking-[-0.02em] text-[color:var(--color-ink)]">
                  {stat.value}
                </div>
                <div className="mt-2.5 mono text-[9.5px] uppercase tracking-[0.18em] text-[color:var(--color-ink)]">
                  {stat.label}
                </div>
                <p className="mt-1.5 display text-[12.5px] leading-[1.45] text-[color:var(--color-muted)]">
                  {stat.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── The analysis (charts) ─────────────────────────────── */}
      <Section
        id="analysis"
        eyebrow="The Analysis"
        title="Three questions, three charts."
        lede="Replotted from the published figures. Data: UCSB Office of Budget & Planning."
      >
        <div className="space-y-24">
          {/* Chart 1 */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
              <div className="md:col-span-4">
                <div className="mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
                  Question 01
                </div>
                <h3 className="mt-3 display text-[clamp(1.25rem,2.2vw,1.6rem)] leading-[1.2] text-[color:var(--color-ink)]">
                  Where does the total actually come from?
                </h3>
              </div>
              <p className="md:col-span-8 display text-[14.5px] leading-[1.6] text-[color:var(--color-muted)] max-w-[62ch]">
                Total degrees rose from 5,339 to 7,061, but the mix barely
                moved: Letters &amp; Science accounted for roughly 93% of
                degrees at both ends of the decade. That's the useful negative
                result. It rules out a shift between divisions and says the real
                story has to be happening <em>inside</em> Letters &amp; Science
                — which is what sent me to the major-level data.
              </p>
            </div>
            <div className="mt-10 rounded-md border border-[color:var(--color-line)] p-5 sm:p-8">
              <StackedBarChart
                series={DIVISIONS}
                labels={YEARS}
                summary="Stacked bar chart of UCSB degrees conferred by college division from 2013-14 to 2022-23. Letters and Science accounts for roughly 93 percent of degrees in every year, rising from 4,951 to 6,557, while Engineering stays near 400 and Creative Studies near 100."
              />
              <p className="mt-6 mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                Degrees conferred by college division, 2013-14 to 2022-23
              </p>
            </div>
          </div>

          {/* Chart 2 */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
              <div className="md:col-span-4">
                <div className="mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
                  Question 02
                </div>
                <h3 className="mt-3 display text-[clamp(1.25rem,2.2vw,1.6rem)] leading-[1.2] text-[color:var(--color-ink)]">
                  Which majors outrun the university?
                </h3>
              </div>
              <p className="md:col-span-8 display text-[14.5px] leading-[1.6] text-[color:var(--color-muted)] max-w-[62ch]">
                Against a 32% baseline, six majors pull away. Statistics &amp;
                Data Science nearly triples in three years, from 124 degrees to
                354. Psychological &amp; Brain Sciences goes from 4 to 476.
                Communication adds 240 degrees and stays the largest of the set.
                The steepest segment for almost every line is 2018-19 to
                2019-20, the year the total itself jumped nearly 12%.
              </p>
            </div>
            <div className="mt-10 rounded-md border border-[color:var(--color-line)] p-5 sm:p-8">
              <LineChart
                series={MAJORS}
                labels={YEARS}
                summary="Line chart of degrees conferred by major from 2013-14 to 2022-23. Communication rises from 380 to 620, Psychological and Brain Sciences from 4 in 2017-18 to 476, Economics from 154 to 418, Biological Sciences from 196 to 373, Statistics and Data Science from 124 in 2019-20 to 354, and Physics from 59 to 183."
              />
              <p className="mt-6 mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                Fastest-growing majors, 2013-14 to 2022-23
              </p>
            </div>
          </div>

          {/* Chart 3 */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
              <div className="md:col-span-4">
                <div className="mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
                  Question 03
                </div>
                <h3 className="mt-3 display text-[clamp(1.25rem,2.2vw,1.6rem)] leading-[1.2] text-[color:var(--color-ink)]">
                  Where do neighbors disagree?
                </h3>
              </div>
              <p className="md:col-span-8 display text-[14.5px] leading-[1.6] text-[color:var(--color-muted)] max-w-[62ch]">
                The sharpest finding came from narrowing down rather than
                zooming out. Two degrees in the same department move in opposite
                directions: Economics &amp; Accounting peaks at 379 in 2019-20
                and falls to 278, while Economics climbs to 418. They cross in
                2021-22. Because both sit under one department facing one set of
                enrollment pressures, the divergence can't be explained by the
                university growing — which is exactly why it was worth a chart
                of its own.
              </p>
            </div>
            <div className="mt-10 rounded-md border border-[color:var(--color-line)] p-5 sm:p-8">
              <LineChart
                series={ECONOMICS}
                labels={YEARS}
                summary="Line chart comparing two economics degrees from 2013-14 to 2022-23. Economics and Accounting peaks at 379 degrees in 2019-20 then declines to 278, while Economics rises from 154 to 418, overtaking it in 2021-22."
                height={320}
              />
              <p className="mt-6 mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                Economics vs. Economics &amp; Accounting, 2013-14 to 2022-23
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Craft notes ──────────────────────────────────────── */}
      <Section
        id="craft"
        eyebrow="Charting Decisions"
        title="The choices that decide whether a chart lies."
        lede="Built in Python with Plotly. Most of the work in a news graphic is not drawing it — it's the handful of decisions that determine what a reader concludes at a glance."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
          {CRAFT_NOTES.map((note, i) => {
            const Icon = note.icon;
            return (
              <div
                key={note.title}
                className="stagger-item flex items-start gap-4"
                style={
                  {
                    ["--stagger-delay" as never]: `${120 + i * 100}ms`,
                  } as CSSProperties
                }
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-surface)] text-[color:var(--color-ink)]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="display text-[16px] leading-[1.3] text-[color:var(--color-ink)]">
                    {note.title}
                  </h3>
                  <p className="mt-2 display text-[14px] leading-[1.6] text-[color:var(--color-muted)] max-w-[46ch]">
                    {note.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── Reporting ────────────────────────────────────────── */}
      <Section
        id="reporting"
        eyebrow="Beyond the Numbers"
        title="The data found the pattern. Reporting explained it."
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-7 space-y-5">
            <p
              className="stagger-item display text-[15px] leading-[1.6] text-[color:var(--color-ink)] max-w-[58ch]"
              style={{ ["--stagger-delay" as never]: "120ms" } as CSSProperties}
            >
              A chart can show that Statistics &amp; Data Science tripled. It
              cannot say why, and a story that stops at the chart is just a
              number with a headline on it. So the analysis set the interview
              list: every line that behaved strangely became a question for
              someone who would know.
            </p>
            <p
              className="stagger-item display text-[14.5px] leading-[1.6] text-[color:var(--color-muted)] max-w-[58ch]"
              style={{ ["--stagger-delay" as never]: "240ms" } as CSSProperties}
            >
              The economics divergence turned out to be about flexibility —
              students choosing the broader degree over the specialized one, and
              a department short on upper-division seats. The communication
              surge traced back to deliberate department investment in research
              placements, internship credit, and transfer-student onboarding.
              The data science climb was described as the same demand curve
              computer science rode two decades ago.
            </p>
            <p
              className="stagger-item display text-[14.5px] leading-[1.6] text-[color:var(--color-muted)] max-w-[58ch]"
              style={{ ["--stagger-delay" as never]: "360ms" } as CSSProperties}
            >
              One source didn't respond, and the published piece says so. In a
              newsroom the gap in your evidence gets printed alongside the
              evidence — a habit worth carrying into any analysis.
            </p>
          </div>

          <aside
            className="stagger-item md:col-span-5 rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"
            style={{ ["--stagger-delay" as never]: "320ms" } as CSSProperties}
          >
            <div className="mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
              Who the charts sent us to
            </div>
            <ul className="mt-5 space-y-4">
              {[
                {
                  icon: Users,
                  who: "Data Science UCSB",
                  why: "Why the newest major climbed fastest",
                },
                {
                  icon: MessageSquareQuote,
                  who: "Department of Communication advising",
                  why: "What was behind the largest absolute gain",
                },
                {
                  icon: Split,
                  who: "The Finance Connection",
                  why: "Why two economics degrees split apart",
                },
              ].map((row) => {
                const Icon = row.icon;
                return (
                  <li key={row.who} className="flex items-start gap-3">
                    <Icon
                      className="mt-[3px] h-3.5 w-3.5 shrink-0 text-[color:var(--color-muted)]"
                      aria-hidden="true"
                    />
                    <div>
                      <div className="display text-[14px] leading-[1.4] text-[color:var(--color-ink)]">
                        {row.who}
                      </div>
                      <div className="mt-1 display text-[13px] leading-[1.45] text-[color:var(--color-muted)]">
                        {row.why}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </Section>

      {/* ── What I'd change ──────────────────────────────────── */}
      <Section
        id="next"
        eyebrow="What I'd Do Differently"
        title="Three things I'd change on the next one."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {IMPROVEMENTS.map((item, i) => (
            <div
              key={item.title}
              className="stagger-item rounded-md border border-[color:var(--color-line)] p-6"
              style={
                {
                  ["--stagger-delay" as never]: `${120 + i * 90}ms`,
                } as CSSProperties
              }
            >
              <div className="mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 display text-[17px] leading-[1.3] text-[color:var(--color-ink)]">
                {item.title}
              </h3>
              <p className="mt-3 display text-[14px] leading-[1.6] text-[color:var(--color-muted)]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Published CTA ────────────────────────────────────── */}
      <section className="px-6 py-20 md:py-28 border-t border-[color:var(--color-line)]">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
              Published
            </div>
            <h2 className="mt-3 display text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] text-[color:var(--color-ink)] max-w-[24ch]">
              Read the story these charts were built for.
            </h2>
            <p className="mt-4 display text-[13.5px] leading-[1.55] text-[color:var(--color-muted)] max-w-[52ch]">
              The Daily Nexus · May 16, 2024 · by Annaka Lee and Nixon Tse
            </p>
          </div>
          <a
            href={ARTICLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="press group inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-ink)]"
          >
            <span className="link-ink">dailynexus.com</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>

      {/* ── Footer nav ───────────────────────────────────────── */}
      <div className="border-t border-[color:var(--color-line)] px-6 py-12">
        <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-6">
          <Link
            to="/#work"
            className="press inline-flex items-center gap-2 mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="link-ink">Back to work</span>
          </Link>
          <Link
            to="/#contact"
            className="press inline-flex items-center gap-2 mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-ink)]"
          >
            <span className="link-ink">Get in touch</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  );
}
