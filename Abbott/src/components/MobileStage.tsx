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
 * Full-bleed mobile stage for iPhone Safari.
 * Fills the visible viewport; art covers without letterboxing.
 */
export function MobileStage({ layers, children }: MobileStageProps) {
  return (
    <div className="relative h-dvh w-full overflow-hidden bg-[#070212]">
      <div className="animate-scene-in absolute inset-0">
        {layers.map((layer) => (
          <Image
            key={layer.src}
            src={layer.src}
            alt={layer.alt ?? ""}
            fill
            priority={layer.priority}
            sizes="100vw"
            className={`pointer-events-none object-cover object-center select-none ${layer.className ?? ""}`}
            aria-hidden={layer.alt ? undefined : true}
          />
        ))}
        <div className="absolute inset-0 z-10">{children}</div>
      </div>
    </div>
  );
}
