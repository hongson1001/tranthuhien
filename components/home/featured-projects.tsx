import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/projects/project-card";
import { Section } from "@/components/ui/section";
import { FEATURED_PROJECTS } from "@/lib/projects";

export function FeaturedProjects() {
  return (
    <Section
      id="featured"
      eyebrow="Dự án nổi bật"
      title={
        <>
          Những thước phim
          <br />
          <span className="font-serif font-normal italic text-muted">
            đáng để xem lại.
          </span>
        </>
      }
      description="Tuyển chọn các kênh tôi đã trực tiếp dựng video — từ TikTok ngắn, YouTube dài tới phim thương hiệu."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {FEATURED_PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i}
            priority={i < 2}
          />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/tiktok"
          className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-muted transition hover:text-cinema-gold"
        >
          Xem tất cả dự án
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </Section>
  );
}
