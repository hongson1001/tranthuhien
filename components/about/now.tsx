import Link from "next/link";
import { Section } from "@/components/ui/section";

const items = [
  {
    label: "Full-time tại",
    value: "FBShop (cửa hàng cầu lông)",
    note: "Dựng nội dung TikTok · YouTube · in-store visuals",
  },
  {
    label: "Freelance gần đây",
    value: "Wedding cinematic · Bất động sản · Brand",
    note: "Ngọc Anh Wedding · Thương Phạm BĐS · TechOne · M Pick Studio",
  },
  {
    label: "Đang nhận",
    value: "Dự án cuối 2025 & 2026",
    note: "Brand film, wedding short, TikTok series, motion graphics",
  },
];

export function Now() {
  return (
    <Section
      eyebrow="Hiện tại"
      title="Đang làm — đang nhận."
      description="Một số dự án đang triển khai và những việc mình sẵn sàng tham gia."
    >
      <div className="overflow-hidden rounded-2xl border border-black/5 bg-cinema-surface ring-1 ring-black/5">
        {items.map((row, i) => (
          <div
            key={row.label}
            className={`grid gap-4 px-6 py-6 sm:grid-cols-[180px_1fr] sm:gap-8 sm:px-10 ${
              i < items.length - 1 ? "border-b border-black/5" : ""
            }`}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-cinema-faint">
              {row.label}
            </div>
            <div>
              <div className="font-display text-2xl text-foreground sm:text-3xl">
                {row.value}
              </div>
              <p className="mt-1 text-sm text-muted">{row.note}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition hover:bg-cinema-gold hover:text-white"
        >
          Cùng làm việc với mình
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </Section>
  );
}
