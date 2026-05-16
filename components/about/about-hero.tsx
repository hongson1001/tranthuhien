"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SITE } from "@/lib/site";

export function AboutHero() {
  return (
    <section
      aria-label="Giới thiệu"
      className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-28 lg:pt-32"
    >
      <AuroraBackground />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-xs lg:max-w-md"
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-black/10 bg-cinema-surface shadow-2xl shadow-black/20 ring-1 ring-black/5">
              <Image
                src={SITE.avatar}
                alt={`${SITE.name} — ${SITE.role}`}
                fill
                sizes="(min-width: 1024px) 40vw, 80vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-5">
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                  {SITE.location}
                </div>
                <div className="mt-1 font-display text-3xl text-white">
                  {SITE.name}
                </div>
              </div>
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-cinema-gold/15 blur-2xl"
            />
          </motion.div>

          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-cinema-gold">
              <span className="h-px w-8 bg-cinema-gold/60" />
              Giới thiệu
            </span>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
              Xin chào,
              <br />
              mình là{" "}
              <span className="italic bg-linear-to-br from-cinema-gold-soft via-cinema-gold to-[#7a6312] bg-clip-text text-transparent">
                {SITE.shortName}.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">
              {SITE.role.toLowerCase()} tự do — làm việc tại Hà Nội, nhận dự án
              trên toàn quốc. {SITE.bio}{" "}
              {`Trên ${SITE.yearsExperience} năm hợp tác cùng các thương hiệu cầu lông, lifestyle, cưới và bất động sản.`}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-cinema-gold hover:text-white"
              >
                <Mail size={16} />
                Liên hệ hợp tác
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:border-cinema-gold/60 hover:bg-cinema-gold/10 hover:text-cinema-gold"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

