"use client";

import { ReactNode } from "react";

type NameFrameProps = {
  children: ReactNode;
  className?: string;
  tone?: "gold" | "glow";
};

/** Soft frame that grows with content — không cố định chiều cao. */
export function NameFrame({
  children,
  className = "",
  tone = "gold",
}: NameFrameProps) {
  const toneClass =
    tone === "glow"
      ? "animate-breath-glow border-transparent bg-[linear-gradient(180deg,#3d2278_0%,#2a1558_100%)]"
      : "border-[#d4af37]/90 bg-[#1a0a3e]/55 shadow-[0_0_16px_rgba(212,175,55,0.18)]";

  return (
    <div
      className={`w-full rounded-[1.35rem] border px-4 py-4 sm:px-5 sm:py-5 ${toneClass} ${className}`}
    >
      {children}
    </div>
  );
}
