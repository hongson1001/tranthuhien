import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactMethods } from "@/components/contact/contact-methods";
import { QuickBrief } from "@/components/contact/quick-brief";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Liên hệ — Hợp tác cùng ${SITE.name}`,
  description:
    "Liên hệ thuê dựng video TikTok, YouTube, brand film, wedding cinematic và đồ hoạ chuyển động. Phản hồi trong 24h, báo giá theo scope.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Liên hệ | ${SITE.name}`,
    description:
      "Hợp tác cùng video editor · Phản hồi trong 24h · Báo giá theo scope dự án.",
    url: "/contact",
    locale: SITE.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Liên hệ | ${SITE.name}`,
    description: "Hợp tác cùng video editor · Phản hồi trong 24h.",
  },
};

export default function ContactPage() {
  const contactLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Liên hệ — ${SITE.name}`,
    url: `${SITE.url}/contact`,
    mainEntity: {
      "@type": "Person",
      name: SITE.name,
      email: SITE.email,
      telephone: SITE.phone,
      jobTitle: SITE.role,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hà Nội",
        addressCountry: "VN",
      },
      sameAs: Object.values(SITE.social),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd) }}
      />

      <ContactHero />
      <ContactMethods />
      <QuickBrief />
    </>
  );
}
