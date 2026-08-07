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
      ? "border-transparent bg-[#2a1458]/90 shadow-[0_0_18px_rgba(160,220,255,0.55),0_0_42px_rgba(120,170,255,0.35),inset_0_0_20px_rgba(80,40,160,0.35)] animate-pulse-glow"
      : "border-[#d4af37]/90 bg-[#1a0a3e]/55 shadow-[0_0_20px_rgba(212,175,55,0.22),inset_0_0_24px_rgba(40,20,80,0.35)]";

  return (
    <div
      className={`w-full rounded-[1.35rem] border px-4 py-4 sm:px-5 sm:py-5 ${toneClass} ${className}`}
    >
      {children}
    </div>
  );
}
