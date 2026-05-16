"use client";

import { motion } from "framer-motion";
import { Camera, Film, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/section";

const services = [
  {
    icon: Camera,
    title: "Quay",
    subtitle: "Cinematography",
    description:
      "Quay cinematic & wedding, gimbal, tracking, ánh sáng, lựa chọn ống kính phù hợp mood — đảm bảo footage gốc đã đẹp trước khi vào hậu kỳ.",
    skills: ["Cinematic shoot", "Wedding film", "Gimbal · Handheld", "Lighting setup"],
  },
  {
    icon: Film,
    title: "Dựng",
    subtitle: "Editing & Color",
    description:
      "Cắt nhịp short-form TikTok bám hook, dựng long-form YouTube giàu câu chuyện, chỉnh màu mood, thiết kế âm thanh, lồng tiếng.",
    skills: [
      "Short-form TikTok",
      "Long-form YouTube",
      "Color grading",
      "Sound design",
    ],
  },
  {
    icon: Sparkles,
    title: "Motion",
    subtitle: "Motion & Đồ hoạ động",
    description:
      "Đồ hoạ chuyển động, chữ động, đồ hoạ thông tin, logo motion, lower-third — biến số liệu khô khan thành thước phim sống động.",
    skills: ["Kinetic typography", "Infographic động", "Logo motion", "Lower-third"],
  },
];

export function Services() {
  return (
    <Section
      eyebrow="Dịch vụ"
      title="Ba mảng làm trọn — từ máy quay tới khung hình cuối."
      description="Không chỉ ngồi cắt từ footage có sẵn. Mình có thể nhận trọn gói quay & dựng, hoặc tham gia từng khâu tuỳ scope dự án."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative overflow-hidden rounded-2xl border border-black/5 bg-cinema-surface p-8 ring-1 ring-black/5 transition-shadow hover:shadow-xl hover:shadow-black/10"
          >
            <div className="mb-6 inline-flex items-center justify-center rounded-xl border border-cinema-gold/30 bg-cinema-gold/10 p-3 text-cinema-gold transition group-hover:bg-cinema-gold group-hover:text-white">
              <service.icon size={22} />
            </div>

            <div className="text-xs uppercase tracking-[0.2em] text-cinema-faint">
              {service.subtitle}
            </div>
            <h3 className="mt-1 font-display text-3xl text-foreground">
              {service.title}
            </h3>

            <p className="mt-4 text-sm text-muted leading-relaxed">
              {service.description}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {service.skills.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-black/10 bg-white/60 px-3 py-1 text-[11px] text-muted"
                >
                  {s}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
