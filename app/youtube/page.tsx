import type { Metadata } from "next";
import { Tv } from "lucide-react";
import { PlatformHero } from "@/components/projects/platform-hero";
import { ProjectCard } from "@/components/projects/project-card";
import { Section } from "@/components/ui/section";
import { SITE } from "@/lib/site";
import { YOUTUBE_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Dự án YouTube — Dựng video YouTube dạng dài",
  description:
    "Dự án dựng video YouTube cinematic, long-form, motion graphic và chỉnh màu cho các thương hiệu cầu lông & studio sáng tạo.",
  alternates: { canonical: "/youtube" },
  openGraph: {
    title: `Dự án YouTube | ${SITE.name}`,
    description: "Long-form cinematic · YouTube video editor portfolio.",
    url: "/youtube",
    locale: SITE.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Dự án YouTube | ${SITE.name}`,
    description: "Long-form cinematic · YouTube video editor portfolio.",
  },
};

const stats = [
  { value: String(YOUTUBE_PROJECTS.length), label: "Kênh đã hợp tác" },
  { value: "Khoảng 10M+", label: "Lượt xem tích luỹ" },
  { value: "Long-form", label: "Định dạng chính" },
];

export default function YoutubePage() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Dự án YouTube — ${SITE.name}`,
    url: `${SITE.url}/youtube`,
    itemListElement: YOUTUBE_PROJECTS.map((p, i) => ({
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
        eyebrow="YouTube"
        title={
          <>
            Long-form,
            <br />
            <span className="font-serif italic font-normal bg-linear-to-br from-cinema-gold-soft via-cinema-gold to-[#7a6312] bg-clip-text text-transparent">
              điện ảnh.
            </span>
          </>
        }
        description="Kênh YouTube mình trực tiếp dựng — long-form cinematic, motion graphic, chỉnh màu mood và thiết kế âm thanh cho thương hiệu cầu lông và studio."
        icon={<Tv size={22} />}
        stats={stats}
      />

      <Section
        eyebrow={`${YOUTUBE_PROJECTS.length} kênh`}
        title="Tất cả dự án YouTube."
        description="Bấm vào từng thẻ để mở kênh thật trên YouTube."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {YOUTUBE_PROJECTS.map((project, i) => (
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
