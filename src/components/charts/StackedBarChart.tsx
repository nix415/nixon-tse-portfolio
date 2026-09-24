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

/** Stacked bars: one bar per year, one band per college division. */
export default function StackedBarChart({
  series,
  labels,
  summary,
  height = 360,
}: Props) {
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

  const totals = labels.map((_, i) =>
    series.reduce((sum, s) => sum + (s.values[i] ?? 0), 0),
  );
  const { top, ticks } = niceScale(Math.max(...totals, 1));

  const band = innerW / labels.length;
  const barW = Math.min(band * 0.62, 46);
  const y = (v: number) => padTop + innerH * (1 - v / top);

  return (
    <figure className="m-0">
      <ul className="mb-5 flex flex-wrap gap-x-5 gap-y-2">
        {series.map((s, i) => (
          <li
            key={s.name}
            className="inline-flex items-center gap-2 mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--color-muted)]"
          >
            <span
              aria-hidden="true"
              className="inline-block h-2.5 w-2.5 shrink-0 rounded-[2px]"
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

          {labels.map((label, i) => {
            const cx = padLeft + band * i + band / 2;
            let cursor = 0;

            return (
              <g key={label}>
                {series.map((s, si) => {
                  const v = s.values[i] ?? 0;
                  const yTop = y(cursor + v);
                  const yBottom = y(cursor);
                  cursor += v;
                  return (
                    <rect
                      key={s.name}
                      x={cx - barW / 2}
                      y={yTop}
                      width={barW}
                      height={Math.max(0, yBottom - yTop)}
                      fill={CHART_COLORS[si % CHART_COLORS.length]}
                    />
                  );
                })}
                {compact && i % 3 !== 0 && i !== labels.length - 1 ? null : (
                  <text
                    x={cx}
                    y={chartHeight - padBottom + 16}
                    textAnchor="middle"
                    className="mono"
                    fontSize={compact ? 8 : 9}
                    fill="var(--color-muted)"
                  >
                    {compact ? `’${label.slice(5)}` : label}
                  </text>
                )}
              </g>
            );
          })}

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
