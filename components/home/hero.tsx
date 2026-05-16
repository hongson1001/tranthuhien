"use client";

import { motion } from "framer-motion";
import { ArrowRight, CirclePlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SITE } from "@/lib/site";

const stats = [
  { value: "3+", label: "Năm kinh nghiệm", approximate: false },
  { value: "100+", label: "Dự án đã nhận", approximate: true },
  { value: "30M+", label: "Lượt xem tích luỹ", approximate: true },
];

const headingWords = ["Phim.", "Nhịp.", "Cảm xúc."];

export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-28 lg:pt-32"
    >
      <AuroraBackground />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-xs text-muted backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Đang nhận dự án toàn quốc · Làm việc tại Hà Nội
            </div>

            <h1 className="mt-6 font-display text-6xl leading-[1.05] text-foreground sm:text-7xl md:text-8xl lg:text-[8.5rem]">
              {headingWords.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mr-3 inline-block"
                >
                  {i === 2 ? (
                    <span className="bg-linear-to-br from-cinema-gold-soft via-cinema-gold to-[#7a6312] bg-clip-text text-transparent">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </h1>

            <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">
              <span className="font-serif italic text-foreground">
                {SITE.name}
              </span>{" "}
              — {SITE.role.toLowerCase()}. {SITE.bio}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#featured"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-cinema-gold hover:text-white"
              >
                <CirclePlay size={18} />
                Xem dự án nổi bật
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:border-cinema-gold/60 hover:bg-cinema-gold/10 hover:text-cinema-gold"
              >
                Hợp tác cùng tôi
              </Link>
            </div>
          </div>

          <PortraitCard />
        </div>

        <div className="mt-14 grid grid-cols-3 gap-4 border-t border-black/10 pt-8 sm:gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl text-foreground sm:text-5xl">
                {s.approximate && (
                  <span className="mr-2 align-baseline font-sans text-sm font-normal italic text-cinema-faint sm:text-base">
                    Khoảng
                  </span>
                )}
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-cinema-faint sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortraitCard() {
  return (
    <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
      <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-black/10 bg-cinema-surface shadow-2xl shadow-black/20 ring-1 ring-black/5">
        <Image
          src={SITE.avatar}
          alt={`${SITE.name} — ${SITE.role}`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 80vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/85 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-cinema-gold-soft" />
          {SITE.role}
        </div>

        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">
              Dựng phim
            </div>
            <div className="mt-1 font-display text-2xl text-white">
              {SITE.name}
            </div>
          </div>
          <div className="rounded-md border border-white/15 bg-black/30 px-2 py-1 font-mono text-[10px] text-white/70 backdrop-blur">
            Hà Nội · VN
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-cinema-gold/15 blur-2xl"
      />
    </div>
  );
}

