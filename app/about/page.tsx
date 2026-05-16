import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { Now } from "@/components/about/now";
import { Services } from "@/components/about/services";
import { Toolkit } from "@/components/about/toolkit";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Giới thiệu — ${SITE.name}`,
  description: `${SITE.role} tại Hà Nội với ${SITE.yearsExperience}+ năm kinh nghiệm. Trực tiếp quay & dựng video TikTok, YouTube và đồ hoạ chuyển động cho thương hiệu.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `Giới thiệu | ${SITE.name}`,
    description: SITE.bio,
    url: "/about",
    type: "profile",
    locale: SITE.locale,
    images: [{ url: SITE.avatar, alt: `${SITE.name} portrait` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Giới thiệu | ${SITE.name}`,
    description: SITE.bio,
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Services />
      <Toolkit />
      <Now />
    </>
  );
}
