import type { Series } from "../../data/dailyNexus";
import { useElementWidth } from "../../hooks/useElementWidth";
import { CHART_COLORS, formatCompact, niceScale } from "./chartScale";

type Props = {
  series: Series[];
  labels: readonly string[];
  /** Short sentence describing the chart for screen readers. */
  summary: string;
  height?: number;
};

/**
 * Multi-series line chart. `null` values break the line rather than reading as
 * zero, which matters here because two majors simply did not exist for part of
 * the range.
 */
export default function LineChart({ series, labels, summary, height = 360 }: Props) {
  const [ref, measured] = useElementWidth<HTMLDivElement>();

  const width = measured || 760;
  const compact = width < 560;

  const padLeft = compact ? 34 : 46;
  const padRight = 10;
  const padTop = 14;
  const padBottom = compact ? 28 : 32;

  const chartHeight = compact ? Math.max(230, height - 90) : height;
  const innerW = Math.max(10, width - padLeft - padRight);
  const innerH = Math.max(10, chartHeight - padTop - padBottom);

  const values = series.flatMap((s) => s.values).filter((v): v is number => v !== null);
  const { top, ticks } = niceScale(Math.max(...values, 1));

  const x = (i: number) => padLeft + (innerW * i) / Math.max(1, labels.length - 1);
  const y = (v: number) => padTop + innerH * (1 - v / top);

  return (
    <figure className="m-0">
      {/* Legend lives in HTML so long series names wrap naturally. */}
      <ul className="mb-5 flex flex-wrap gap-x-5 gap-y-2">
        {series.map((s, i) => (
          <li
            key={s.name}
            className="inline-flex items-center gap-2 mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--color-muted)]"
          >
            <span
              aria-hidden="true"
              className="inline-block h-[2px] w-4 shrink-0 rounded-full"
              style={{ background: CHART_COLORS[i % CHART_COLORS.length] }}
            />
            {s.name}
          </li>
        ))}
      </ul>

      <div ref={ref} className="w-full">
        <svg
          width={width}
          height={chartHeight}
          viewBox={`0 0 ${width} ${chartHeight}`}
          role="img"
          aria-label={summary}
          className="overflow-visible"
        >
          {/* Horizontal gridlines + y labels */}
          {ticks.map((t) => (
            <g key={t}>
              <line
                x1={padLeft}
                x2={padLeft + innerW}
                y1={y(t)}
                y2={y(t)}
                stroke="var(--color-line)"
                strokeWidth={1}
              />
              <text
                x={padLeft - 8}
                y={y(t)}
                textAnchor="end"
                dominantBaseline="middle"
                className="mono"
                fontSize={compact ? 8.5 : 9.5}
                fill="var(--color-muted)"
              >
                {formatCompact(t)}
              </text>
            </g>
          ))}

          {/* X labels — thinned on narrow screens so they never collide */}
          {labels.map((label, i) => {
            if (compact && i % 3 !== 0 && i !== labels.length - 1) return null;
            return (
              <text
                key={label}
                x={x(i)}
                y={chartHeight - padBottom + 16}
                textAnchor="middle"
                className="mono"
                fontSize={compact ? 8 : 9}
                fill="var(--color-muted)"
              >
                {compact ? `’${label.slice(5)}` : label}
              </text>
            );
          })}

          {/* One path per contiguous run of real values */}
          {series.map((s, si) => {
            const color = CHART_COLORS[si % CHART_COLORS.length];
            const runs: { i: number; v: number }[][] = [];
            let run: { i: number; v: number }[] = [];

            s.values.forEach((v, i) => {
              if (v === null) {
                if (run.length) runs.push(run);
                run = [];
              } else {
                run.push({ i, v });
              }
            });
            if (run.length) runs.push(run);

            return (
              <g key={s.name}>
                {runs.map((points, ri) => (
                  <path
                    key={ri}
                    d={points
                      .map((p, pi) => `${pi === 0 ? "M" : "L"}${x(p.i)},${y(p.v)}`)
                      .join(" ")}
                    fill="none"
                    stroke={color}
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ))}
                {!compact &&
                  runs.flat().map((p) => (
                    <circle
                      key={p.i}
                      cx={x(p.i)}
                      cy={y(p.v)}
                      r={2.1}
                      fill="var(--color-bg)"
                      stroke={color}
                      strokeWidth={1.4}
                    />
                  ))}
              </g>
            );
          })}

          {/* Baseline */}
          <line
            x1={padLeft}
            x2={padLeft + innerW}
            y1={y(0)}
            y2={y(0)}
            stroke="var(--color-ink)"
            strokeWidth={1}
          />
        </svg>
      </div>
    </figure>
  );
}
