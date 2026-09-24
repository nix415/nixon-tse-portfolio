/** Shared scale + palette helpers for the hand-rolled SVG charts. */

/** Muted editorial palette that reads on the cream background. */
export const CHART_COLORS = [
  "#2f4739",
  "#9a6a3f",
  "#44597a",
  "#8c4a4a",
  "#6f8f7a",
  "#b2934f",
] as const;

export type Scale = {
  top: number;
  ticks: number[];
};

/**
 * Rounds an axis maximum up to a readable step (1, 2, 2.5, or 5 × a power of
 * ten) so gridline labels land on round numbers instead of raw data maxima.
 */
export function niceScale(max: number, tickCount = 4): Scale {
  if (!isFinite(max) || max <= 0) return { top: 1, ticks: [0, 1] };

  const rough = max / tickCount;
  const magnitude = Math.pow(10, Math.floor(Math.log10(rough)));
  const normalized = rough / magnitude;
  const stepFactor =
    normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 2.5 ? 2.5 : normalized <= 5 ? 5 : 10;
  const step = stepFactor * magnitude;
  const top = Math.ceil(max / step) * step;

  const ticks: number[] = [];
  for (let v = 0; v <= top + step / 2; v += step) ticks.push(Math.round(v * 100) / 100);

  return { top, ticks };
}

export function formatCompact(n: number): string {
  return n >= 1000 ? `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k` : String(n);
}
