import { useMemo } from "react";

export function GoldDust({ count = 26 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: 40 + Math.random() * 60,
        size: 1 + Math.random() * 2.4,
        delay: Math.random() * 14,
        duration: 16 + Math.random() * 16,
      })),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            background: "oklch(0.85 0.09 88)",
            boxShadow: "0 0 6px oklch(0.85 0.1 88 / 0.8)",
            animation: `drift ${d.duration}s linear ${d.delay}s infinite`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
