"use client";

import Image from "next/image";
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
      <div className="relative h-full w-full">
        {/* Cảm ơn → tên → Đã xác nhận → slogan (gom gần nhau) */}
        <div className="absolute top-[15%] left-[10%] right-[10%] z-[2] flex flex-col items-center gap-2.5">
          <p className="text-center text-[clamp(1rem,4vw,1.25rem)] font-bold uppercase tracking-[0.18em] text-white">
            Cảm ơn
          </p>

          <NameFrame tone="glow" className="w-full max-w-[19rem] px-5 py-3.5">
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

          <div className="mt-1 flex w-full justify-center">
            <Image
              src="/assets/scene2/slogan-crop.png"
              alt="Đồng hành cùng ba mẹ xây nền tảng tăng trưởng cho thế hệ tương lai Việt Nam"
              width={424}
              height={122}
              className="h-auto w-full max-w-[21rem] object-contain select-none"
              priority
            />
          </div>
        </div>

        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className="absolute bottom-[2.5%] left-1/2 z-[2] -translate-x-1/2 rounded-full px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] text-white/40 transition hover:text-white/80"
          >
            Nhập lại tên
          </button>
        ) : null}
      </div>
    </MobileStage>
  );
}
