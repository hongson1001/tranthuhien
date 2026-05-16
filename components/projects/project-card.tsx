"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export const platformLabel: Record<Project["platform"], string> = {
  tiktok: "TikTok",
  youtube: "YouTube",
  brand: "Phim thương hiệu",
};

export function ProjectCard({
  project,
  index,
  priority = false,
}: {
  project: Project;
  index: number;
  priority?: boolean;
}) {
  const isExternal = project.href.startsWith("http");
  const linkProps = isExternal
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-2xl border border-black/5 bg-cinema-surface shadow-lg shadow-black/5 ring-1 ring-black/5 transition-shadow hover:shadow-xl hover:shadow-black/10"
    >
      <Link
        href={project.href}
        {...linkProps}
        className="block"
        aria-label={`Xem kênh ${project.title} trên ${platformLabel[project.platform]}`}
      >
        <div className="relative aspect-4/3 overflow-hidden">
          {project.assetType === "logo" ? (
            <>
              <Image
                src={project.thumbnail}
                alt=""
                aria-hidden
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="scale-150 object-cover opacity-70 blur-3xl"
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="relative grid h-full w-full place-items-center p-10 sm:p-14">
                <div className="relative aspect-square w-3/5 max-w-[200px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-transform duration-700 ease-out group-hover:scale-105">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} — ${project.client} ${platformLabel[project.platform]} logo`}
                    fill
                    sizes="200px"
                    className="object-contain"
                    priority={priority}
                  />
                </div>
              </div>
            </>
          ) : (
            <Image
              src={project.thumbnail}
              alt={`${project.title} — ${project.client} ${platformLabel[project.platform]} thumbnail`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center transition-transform duration-1200 ease-out group-hover:scale-105"
              priority={priority}
            />
          )}

          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />

          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/85 backdrop-blur">
            {platformLabel[project.platform]} · {project.year}
          </div>

          <div className="absolute right-4 top-4 flex flex-col items-end gap-2">
            {project.engagement === "current" && (
              <div className="inline-flex items-center gap-1.5 rounded-full border border-cinema-gold/50 bg-cinema-gold/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-black backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
                Đang làm
              </div>
            )}
            {project.fullProduction && (
              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-cinema-crimson" />
                Quay & Dựng
              </div>
            )}
          </div>

          <div className="absolute right-4 bottom-24 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
            <Play size={14} />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h3 className="font-display text-3xl leading-[1.1] text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-white/75">
                  {project.client} · {project.role}
                </p>
              </div>
              <ArrowUpRight
                size={20}
                className="shrink-0 text-white/70 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cinema-gold-soft"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-6 border-t border-black/5 px-6 py-5">
          <p className="text-sm text-muted line-clamp-2">
            {project.description}
          </p>
          {project.metrics && project.metrics.length > 0 && (
            <div className="flex shrink-0 items-center gap-4">
              {project.metrics.map((m) => (
                <div key={m.label} className="text-right">
                  <div className="font-display text-base text-cinema-gold">
                    {m.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-cinema-faint">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  );
}
