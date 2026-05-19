import { useMemo } from "react";

const PETAL_COLORS = [
  "oklch(0.91 0.04 18)",
  "oklch(0.9 0.06 50)",
  "oklch(0.86 0.07 82)",
  "oklch(0.88 0.045 305)",
  "oklch(0.95 0.02 25)",
];

export function FloatingPetals({ count = 18 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 8 + Math.random() * 18,
        delay: Math.random() * 12,
        duration: 12 + Math.random() * 14,
        drift: (Math.random() - 0.5) * 220,
        color: PETAL_COLORS[i % PETAL_COLORS.length],
        rotate: Math.random() * 360,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">
      {petals.map((p) => (
        <svg
          key={p.id}
          viewBox="0 0 32 32"
          className="absolute animate-petal"
          style={{
            left: `${p.left}%`,
            top: "-10vh",
            width: p.size,
            height: p.size,
            color: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            ["--drift" as string]: `${p.drift}px`,
            transform: `rotate(${p.rotate}deg)`,
            filter: "drop-shadow(0 2px 4px oklch(0.55 0.13 18 / 0.25))",
          }}
        >
          <path
            d="M16 2 C 22 8, 28 14, 16 30 C 4 14, 10 8, 16 2 Z"
            fill="currentColor"
            opacity="0.85"
          />
        </svg>
      ))}
    </div>
  );
}

export function Sparkles({ count = 24 }: { count?: number }) {
  const sparkles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 3,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-gold animate-sparkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            boxShadow: "0 0 8px oklch(0.86 0.07 82 / 0.9), 0 0 16px oklch(0.74 0.105 78 / 0.6)",
          }}
        />
      ))}
    </div>
  );
}
