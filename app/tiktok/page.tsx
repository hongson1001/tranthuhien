import type { Metadata } from "next";
import { Smartphone } from "lucide-react";
import { PlatformHero } from "@/components/projects/platform-hero";
import { ProjectCard } from "@/components/projects/project-card";
import { Section } from "@/components/ui/section";
import { SITE } from "@/lib/site";
import { TIKTOK_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Dự án TikTok — Dựng video TikTok",
  description:
    "Dự án dựng video TikTok cho thương hiệu cầu lông, bất động sản, công nghệ và wedding. Hook nhanh, cắt nhịp, chữ động.",
  alternates: { canonical: "/tiktok" },
  openGraph: {
    title: `Dự án TikTok | ${SITE.name}`,
    description: "Short-form viral · TikTok video editor portfolio.",
    url: "/tiktok",
    locale: SITE.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Dự án TikTok | ${SITE.name}`,
    description: "Short-form viral · TikTok video editor portfolio.",
  },
};

const tiktokFullProduction = TIKTOK_PROJECTS.filter((p) => p.fullProduction).length;

const stats = [
  { value: String(TIKTOK_PROJECTS.length), label: "Kênh đã hợp tác" },
  { value: "Khoảng 20M+", label: "Lượt xem tích luỹ" },
  {
    value: tiktokFullProduction > 0 ? `${tiktokFullProduction}` : "—",
    label: "Quay & Dựng",
  },
];

export default function TikTokPage() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Dự án TikTok — ${SITE.name}`,
    url: `${SITE.url}/tiktok`,
    itemListElement: TIKTOK_PROJECTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: p.href,
      description: p.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />

      <PlatformHero
        eyebrow="TikTok"
        title={
          <>
            Video ngắn,
            <br />
            <span className="font-serif italic font-normal bg-linear-to-br from-cinema-gold-soft via-cinema-gold to-[#7a6312] bg-clip-text text-transparent">
              nhịp viral.
            </span>
          </>
        }
        description="Tuyển tập kênh TikTok mình trực tiếp dựng — short-form bám hook 0–3 giây, cắt nhịp theo nhạc, kinetic typography và lồng tiếng/phụ đề động."
        icon={<Smartphone size={22} />}
        stats={stats}
      />

      <Section
        eyebrow={`${TIKTOK_PROJECTS.length} kênh`}
        title="Tất cả dự án TikTok."
        description="Bấm vào từng thẻ để mở kênh thật trên TikTok."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {TIKTOK_PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              priority={i < 2}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
