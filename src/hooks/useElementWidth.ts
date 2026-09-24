import { useEffect, useRef, useState } from "react";

/**
 * Tracks the rendered width of an element. Charts use this to lay out in real
 * pixels rather than scaling a fixed viewBox, which would shrink axis labels
 * into illegibility on phones.
 */
export function useElementWidth<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    setWidth(el.getBoundingClientRect().width);

    const observer = new ResizeObserver((entries) => {
      const next = entries[0]?.contentRect.width;
      if (typeof next === "number") setWidth(next);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, width] as const;
}
