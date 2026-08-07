"use client";

import { useMemo } from "react";

type WhiteParticlesProps = {
  count?: number;
};

/** Tiny glowing white particles — soft ambient sparkle for Scene 2. */
export function WhiteParticles({ count = 48 }: WhiteParticlesProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const seed = (i * 47) % 100;
        return {
          id: i,
          left: `${(seed * 1.37) % 100}%`,
          top: `${(i * 19 + 7) % 100}%`,
          size: 0.7 + (i % 3) * 0.35,
          delay: `${(i % 12) * 0.4}s`,
          duration: `${4.2 + (i % 7) * 0.5}s`,
          drift: `${4 + (i % 4) * 2}px`,
          glow: 3 + (i % 3),
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
            boxShadow: `0 0 ${p.glow}px rgba(255,255,255,0.95), 0 0 ${p.glow * 2.5}px rgba(255,255,255,0.45)`,
          }}
        />
      ))}
    </div>
  );
}
