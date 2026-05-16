"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Section } from "@/components/ui/section";
import { SITE } from "@/lib/site";

const PLATFORMS = [
  "TikTok ngắn",
  "YouTube dài",
  "Wedding cinematic",
  "Brand film",
  "Motion graphic",
  "Khác",
];

export function QuickBrief() {
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState(PLATFORMS[0]);
  const [message, setMessage] = useState("");

  const subject = encodeURIComponent(
    `[Brief] ${platform}${name ? ` — ${name}` : ""}`,
  );
  const body = encodeURIComponent(
    [
      `Xin chào ${SITE.shortName},`,
      "",
      name && `Mình là ${name}.`,
      `Mình đang cần: ${platform}.`,
      "",
      message || "Chi tiết brief: …",
      "",
      "Cảm ơn!",
    ]
      .filter(Boolean)
      .join("\n"),
  );

  const mailto = `mailto:${SITE.email}?subject=${subject}&body=${body}`;

  return (
    <Section
      eyebrow="Brief nhanh"
      title="Gửi brief — mở sẵn email."
      description="Điền 3 ô bên dưới rồi bấm gửi — mình sẽ mở app email của bạn với nội dung đã soạn sẵn. Không cần đăng nhập."
    >
      <form
        action={mailto}
        method="post"
        encType="text/plain"
        className="grid gap-4 rounded-2xl border border-black/5 bg-cinema-surface p-6 ring-1 ring-black/5 sm:p-8"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-cinema-faint">
              Tên / công ty
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="VD: FBShop / Nguyễn Văn A"
              className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-foreground placeholder:text-cinema-faint focus:border-cinema-gold focus:outline-none focus:ring-2 focus:ring-cinema-gold/30"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-cinema-faint">
              Cần dạng video gì
            </span>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-foreground focus:border-cinema-gold focus:outline-none focus:ring-2 focus:ring-cinema-gold/30"
            >
              {PLATFORMS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-cinema-faint">
            Mô tả ngắn brief
          </span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            placeholder="Sản phẩm, đối tượng, deadline, tham chiếu (nếu có)…"
            className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-foreground placeholder:text-cinema-faint focus:border-cinema-gold focus:outline-none focus:ring-2 focus:ring-cinema-gold/30"
          />
        </label>

        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-xs text-cinema-faint">
            Form sẽ mở email mặc định của máy bạn với nội dung đã soạn sẵn — không
            cần đăng nhập, không lưu data trên server.
          </p>

          <a
            href={mailto}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-cinema-gold hover:text-white"
          >
            Mở email gửi brief
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </form>
    </Section>
  );
}
