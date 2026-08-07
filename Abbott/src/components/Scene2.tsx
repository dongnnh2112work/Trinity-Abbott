"use client";

import { useMemo } from "react";
import { MobileStage } from "./MobileStage";
import { NameFrame } from "./NameFrame";

type Scene2Props = {
  name: string;
  onBack?: () => void;
};

export function Scene2({ name, onBack }: Scene2Props) {
  const fontSize = useMemo(() => {
    const len = name.trim().length;
    if (len > 28) return "clamp(0.82rem, 3vw, 1rem)";
    if (len > 18) return "clamp(0.92rem, 3.4vw, 1.1rem)";
    return "clamp(1rem, 3.8vw, 1.2rem)";
  }, [name]);

  return (
    <MobileStage
      layers={[
        {
          src: "/assets/scene2/bg.png",
          alt: "Nền scene 2",
          priority: true,
        },
      ]}
    >
      <div className="relative flex h-full w-full flex-col items-center px-[10%] pt-[14%]">
        {/* Một cụm duy nhất — không để khoảng trống lớn giữa các dòng */}
        <div className="flex w-full max-w-[22rem] flex-col items-center gap-2">
          <p className="text-center text-[clamp(1rem,4vw,1.25rem)] font-bold uppercase tracking-[0.18em] text-white">
            Cảm ơn
          </p>

          <NameFrame tone="glow" className="w-full px-5 py-3.5">
            <p
              style={{ fontSize }}
              className="break-words text-center font-bold uppercase leading-snug tracking-[0.06em] text-white text-balance"
            >
              {name}
            </p>
          </NameFrame>

          <p className="text-center text-[clamp(0.7rem,2.6vw,0.82rem)] font-semibold uppercase tracking-[0.14em] text-white/95">
            Đã xác nhận
          </p>

          <div className="mt-1 space-y-0.5 text-center">
            <p className="text-[clamp(0.95rem,3.8vw,1.15rem)] font-bold uppercase leading-snug tracking-[0.04em] text-[#e8c96a]">
              Đồng hành cùng ba mẹ
            </p>
            <p className="text-[clamp(0.95rem,3.8vw,1.15rem)] font-bold uppercase leading-snug tracking-[0.04em] text-[#e8c96a]">
              Xây nền tảng tăng trưởng
            </p>
            <p className="text-[clamp(0.78rem,3.2vw,0.95rem)] font-semibold uppercase leading-snug tracking-[0.04em] text-white">
              Cho thế hệ tương lai Việt Nam
            </p>
          </div>
        </div>

        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className="mt-auto mb-[3%] rounded-full px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] text-white/40 transition hover:text-white/80"
          >
            Nhập lại tên
          </button>
        ) : null}
      </div>
    </MobileStage>
  );
}
