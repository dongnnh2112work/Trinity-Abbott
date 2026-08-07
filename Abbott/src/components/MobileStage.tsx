"use client";

import Image from "next/image";
import { ReactNode } from "react";

type Layer = {
  src: string;
  alt?: string;
  className?: string;
  priority?: boolean;
};

type MobileStageProps = {
  layers: Layer[];
  children: ReactNode;
};

/**
 * Mobile-first stage locked to artboard 576×1024.
 * Layers stack full-bleed; UI children sit on top in normal flow.
 */
export function MobileStage({ layers, children }: MobileStageProps) {
  return (
    <div className="flex h-dvh w-full items-center justify-center bg-[#070212]">
      <div
        className="animate-scene-in relative overflow-hidden shadow-[0_0_60px_rgba(80,40,160,0.35)]"
        style={{
          aspectRatio: "576 / 1024",
          width: "min(100vw, calc(100dvh * 576 / 1024))",
          maxHeight: "100dvh",
        }}
      >
        {layers.map((layer) => (
          <Image
            key={layer.src}
            src={layer.src}
            alt={layer.alt ?? ""}
            fill
            priority={layer.priority}
            sizes="(max-width: 430px) 100vw, 430px"
            className={`pointer-events-none object-fill select-none ${layer.className ?? ""}`}
            aria-hidden={layer.alt ? undefined : true}
          />
        ))}
        <div className="absolute inset-0 z-10">{children}</div>
      </div>
    </div>
  );
}
