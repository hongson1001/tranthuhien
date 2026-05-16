import { ArrowUpRight, Mail, Phone } from "lucide-react";
import type { ComponentType } from "react";
import { FacebookIcon, InstagramIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { SITE } from "@/lib/site";

type Method = {
  label: string;
  value: string;
  hint: string;
  href: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  external?: boolean;
  preferred?: boolean;
};

const methods: Method[] = [
  {
    label: "Email",
    value: SITE.email,
    hint: "Ưu tiên — phù hợp brief dài, kèm file",
    href: `mailto:${SITE.email}`,
    icon: Mail,
    preferred: true,
  },
  {
    label: "Điện thoại",
    value: SITE.phone,
    hint: "Gọi/Zalo — phù hợp brief gấp",
    href: `tel:${SITE.phone.replace(/\s+/g, "")}`,
    icon: Phone,
  },
  {
    label: "Facebook",
    value: "@tran.thu.hien",
    hint: "Nhắn nhanh, theo dõi cập nhật",
    href: SITE.social.facebook,
    icon: FacebookIcon,
    external: true,
  },
  {
    label: "Instagram",
    value: "@hienthutran0602",
    hint: "Xem hậu trường & teaser",
    href: SITE.social.instagram,
    icon: InstagramIcon,
    external: true,
  },
];

export function ContactMethods() {
  return (
    <Section
      eyebrow="Kênh liên hệ"
      title="Bốn cách để bắt đầu."
      description="Tuỳ độ gấp & quy mô dự án, chọn kênh phù hợp. Mình check tất cả trong ngày làm việc."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {methods.map((m) => (
          <a
            key={m.label}
            href={m.href}
            {...(m.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="group relative flex items-start gap-5 overflow-hidden rounded-2xl border border-black/5 bg-cinema-surface p-6 ring-1 ring-black/5 transition hover:shadow-lg hover:shadow-black/10"
          >
            {m.preferred && (
              <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-cinema-gold/40 bg-cinema-gold/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-cinema-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-cinema-gold" />
                Ưu tiên
              </span>
            )}

            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-cinema-gold/30 bg-cinema-gold/10 text-cinema-gold transition group-hover:bg-cinema-gold group-hover:text-white">
              <m.icon size={20} />
            </span>

            <div className="min-w-0 flex-1">
              <div className="text-xs uppercase tracking-[0.2em] text-cinema-faint">
                {m.label}
              </div>
              <div className="mt-1 truncate font-display text-2xl text-foreground transition group-hover:text-cinema-gold">
                {m.value}
              </div>
              <div className="mt-2 text-sm text-muted">{m.hint}</div>
            </div>

            <ArrowUpRight
              size={18}
              className="absolute right-5 bottom-5 text-cinema-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cinema-gold"
            />
          </a>
        ))}
      </div>
    </Section>
  );
}
