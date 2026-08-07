"use client";

import { useMemo } from "react";

type WhiteParticlesProps = {
  count?: number;
};

/** Soft white particles — ambient motion for Scene 2. */
export function WhiteParticles({ count = 36 }: WhiteParticlesProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const seed = (i * 47) % 100;
        return {
          id: i,
          left: `${(seed * 1.37) % 100}%`,
          top: `${(i * 19 + 7) % 100}%`,
          size: 1.5 + (i % 4) * 0.7,
          delay: `${(i % 10) * 0.35}s`,
          duration: `${3.8 + (i % 6) * 0.55}s`,
          drift: `${6 + (i % 5) * 3}px`,
        };
      }),
    [count],
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle-float absolute rounded-full bg-white"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            ["--drift" as string]: p.drift,
            animationDuration: p.duration,
            animationDelay: p.delay,
            boxShadow: "0 0 6px rgba(255,255,255,0.85)",
          }}
        />
      ))}
    </div>
  );
}
