"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SITE } from "@/lib/site";

export function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden pt-24 pb-12 sm:pt-28 lg:pt-32">
      <AuroraBackground intensity={0.85} />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-cinema-gold">
            <span className="h-px w-8 bg-cinema-gold/60" />
            Liên hệ
          </div>

          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
            Cùng tạo nên thước phim
            <br />
            <span className="font-serif italic font-normal bg-linear-to-br from-cinema-gold-soft via-cinema-gold to-[#7a6312] bg-clip-text text-transparent">
              đáng nhớ.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base text-muted sm:text-lg">
            Nhận dự án video TikTok, YouTube, brand film, wedding cinematic và đồ
            hoạ chuyển động. Báo giá theo scope từng dự án, không có khung giá cố
            định — mình tư vấn miễn phí trước khi chốt.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs text-muted backdrop-blur">
            <Clock size={14} className="text-cinema-gold" />
            Phản hồi trong vòng 24h · Làm việc tại Hà Nội, nhận dự án toàn quốc
          </div>
        </motion.div>
      </div>
    </section>
  );
}
