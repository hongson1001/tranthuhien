"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

type Stat = { value: string; label: string };

type PlatformHeroProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  icon: ReactNode;
  stats?: Stat[];
};

export function PlatformHero({
  eyebrow,
  title,
  description,
  icon,
  stats,
}: PlatformHeroProps) {
  return (
    <section className="relative isolate overflow-hidden pt-24 pb-12 sm:pt-28 lg:pt-32">
      <AuroraBackground intensity={0.85} />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-xl border border-cinema-gold/30 bg-cinema-gold/10 text-cinema-gold">
              {icon}
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-cinema-gold">
              <span className="h-px w-8 bg-cinema-gold/60" />
              {eyebrow}
            </span>
          </div>

          <h1 className="font-display text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
            {title}
          </h1>

          <p className="max-w-2xl text-base text-muted sm:text-lg">
            {description}
          </p>

          {stats && stats.length > 0 && (
            <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-black/10 pt-6 sm:gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-xs uppercase tracking-[0.18em] text-cinema-faint sm:text-sm">
                    {s.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl text-foreground sm:text-4xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </motion.div>
      </div>
    </section>
  );
}
