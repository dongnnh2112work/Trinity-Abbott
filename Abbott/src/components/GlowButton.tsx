"use client";

import { ButtonHTMLAttributes } from "react";

type GlowButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

/** Nút confirm — loe sáng trắng, breath motion. */
export function GlowButton({
  label = "Xác nhận đồng hành",
  className = "",
  type = "button",
  ...props
}: GlowButtonProps) {
  return (
    <button
      type={type}
      className={`animate-breath-glow inline-flex min-h-[3.1rem] w-full max-w-[20rem] items-center justify-center rounded-[1.15rem] bg-[linear-gradient(180deg,#3d2278_0%,#2a1558_100%)] px-6 py-3 text-center text-[clamp(0.82rem,3.4vw,1rem)] font-bold uppercase leading-snug tracking-[0.08em] text-[#f0d48a] transition duration-200 hover:brightness-110 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0d48a] disabled:opacity-50 ${className}`}
      {...props}
    >
      <span className="max-w-full text-balance">{label}</span>
    </button>
  );
}
