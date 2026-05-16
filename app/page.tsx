import type { Metadata } from "next";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Hero } from "@/components/home/hero";
import { HomeJsonLd } from "@/components/home/json-ld";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.role}`,
  description: SITE.bio,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.bio,
    url: "/",
    type: "website",
    locale: SITE.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.bio,
  },
};

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <Hero />
      <FeaturedProjects />
    </>
  );
}
