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
      ? "border-transparent bg-[#2a1458]/92 shadow-[0_0_14px_rgba(160,200,255,0.4)]"
      : "border-[#d4af37]/90 bg-[#1a0a3e]/55 shadow-[0_0_16px_rgba(212,175,55,0.18)]";

  return (
    <div
      className={`w-full rounded-[1.35rem] border px-4 py-4 sm:px-5 sm:py-5 ${toneClass} ${className}`}
    >
      {children}
    </div>
  );
}
