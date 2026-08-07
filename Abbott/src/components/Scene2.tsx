"use client";

import Image from "next/image";
import { useMemo } from "react";
import { MobileStage } from "./MobileStage";
import { NameFrame } from "./NameFrame";
import { WhiteParticles } from "./WhiteParticles";

type Scene2Props = {
  name: string;
  onBack?: () => void;
};

/**
 * ====== SCENE 2 LAYOUT KNOBS (chỉnh tại đây) ======
 * Đơn vị % chiều cao màn hình (iPhone 9:19 ≈ 390×823).
 * - Tăng số → cụm text đi XUỐNG
 * - Giảm số → cụm text đi LÊN
 */
const LAYOUT = {
  /** Khoảng cách từ mép trên tới cụm Cảm ơn / Tên / Slogan */
  clusterTopPct: 29,
  /** Gap dưới khung tên → "Đã xác nhận" (px-ish via rem) */
  confirmedMtRem: 0.8,
  /** Gap dưới "Đã xác nhận" → slogan asset */
  sloganMtRem: 0.3,
} as const;

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
      <WhiteParticles count={48} />

      <div
        className="relative z-[2] flex h-full w-full flex-col items-center px-[10%]"
        style={{ paddingTop: `${LAYOUT.clusterTopPct}%` }}
      >
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

          <p
            className="text-center text-[clamp(0.7rem,2.6vw,0.82rem)] font-semibold uppercase tracking-[0.14em] text-white/95"
            style={{ marginTop: `${LAYOUT.confirmedMtRem}rem` }}
          >
            Đã xác nhận
          </p>

          <div
            className="flex w-full justify-center"
            style={{ marginTop: `${LAYOUT.sloganMtRem}rem` }}
          >
            <Image
              src="/assets/scene2/slogan-crop.png"
              alt="Đồng hành cùng ba mẹ xây nền tảng tăng trưởng cho thế hệ tương lai Việt Nam"
              width={962}
              height={254}
              className="h-auto w-full max-w-[21rem] object-contain select-none"
              priority
            />
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
