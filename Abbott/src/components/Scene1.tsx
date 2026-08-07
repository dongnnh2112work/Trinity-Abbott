"use client";

import Image from "next/image";
import {
  FormEvent,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { GlowButton } from "./GlowButton";
import { MobileStage } from "./MobileStage";
import { NameFrame } from "./NameFrame";

type Scene1Props = {
  onConfirm: (name: string) => void;
};

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function Scene1({ onConfirm }: Scene1Props) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const fontSize = useMemo(() => {
    const len = name.trim().length;
    if (len > 28) return "clamp(0.85rem, 3.2vw, 1.05rem)";
    if (len > 18) return "clamp(0.95rem, 3.6vw, 1.15rem)";
    return "clamp(1.05rem, 4vw, 1.25rem)";
  }, [name]);

  useIsomorphicLayoutEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 88)}px`;
  }, [name, fontSize]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = name.trim().replace(/\s+/g, " ");

    if (!trimmed) {
      setError("Vui lòng nhập Họ & Tên");
      return;
    }

    setError("");
    onConfirm(trimmed);
  }

  return (
    <MobileStage
      layers={[
        {
          src: "/assets/scene1/bg.png",
          alt: "Nền scene 1",
          priority: true,
        },
      ]}
    >
      <form
        onSubmit={handleSubmit}
        className="relative h-full w-full"
        noValidate
      >
        {/* 1. Input card — ~18%–37% như mockup */}
        <div className="absolute top-[17%] left-[14%] right-[14%] z-[2] min-h-[19%]">
          <NameFrame
            tone="gold"
            className="flex h-full min-h-[9.5rem] flex-col px-5 py-5"
          >
            <label className="sr-only" htmlFor="guest-name">
              Họ & Tên
            </label>
            <div className="flex min-h-[9.5rem] flex-1 flex-col">
              <div className="flex-1" aria-hidden />
              <textarea
                id="guest-name"
                ref={textareaRef}
                rows={1}
                autoComplete="name"
                autoFocus
                value={name}
                onChange={(event) => {
                  setName(event.target.value.replace(/\n/g, " "));
                  if (error) setError("");
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    event.currentTarget.form?.requestSubmit();
                  }
                }}
                maxLength={80}
                placeholder=" "
                style={{ fontSize }}
                className="w-full resize-none overflow-hidden border-0 border-b border-white/80 bg-transparent pb-2 text-center font-semibold uppercase leading-snug tracking-[0.04em] text-white caret-[#e8c96a] outline-none placeholder:text-transparent"
              />
              <p className="mt-3 text-center text-[clamp(0.72rem,2.8vw,0.88rem)] leading-relaxed text-white/90">
                Vui lòng nhập Họ &amp; Tên tại đây
              </p>
              {error ? (
                <p
                  className="mt-2 text-center text-[11px] text-amber-200"
                  role="alert"
                >
                  {error}
                </p>
              ) : null}
              <div className="flex-[0.55]" aria-hidden />
            </div>
          </NameFrame>
        </div>

        {/* 2. Slogan — khoảng giữa màn hình */}
        <div className="absolute top-[40.5%] left-[10%] right-[10%] z-[1] flex justify-center">
          <Image
            src="/assets/scene1/slogan-crop.png"
            alt="Cùng đồng hành xây nền tảng tăng trưởng cho thế hệ tương lai Việt Nam"
            width={469}
            height={123}
            className="h-auto w-full max-w-[22rem] object-contain select-none"
            priority
          />
        </div>

        {/* 3. Button — khoảng 64%–72% */}
        <div className="absolute top-[63.5%] left-[16%] right-[16%] z-[2] flex justify-center">
          <GlowButton
            type="submit"
            label="Xác nhận đồng hành"
            className="max-w-[18.5rem] rounded-[1.15rem] py-3.5"
          />
        </div>
      </form>
    </MobileStage>
  );
}
