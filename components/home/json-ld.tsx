import { SITE } from "@/lib/site";

export function HomeJsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}#person`,
    name: SITE.name,
    url: SITE.url,
    image: `${SITE.url}${SITE.avatar}`,
    jobTitle: SITE.role,
    description: SITE.bio,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hà Nội",
      addressCountry: "VN",
    },
    knowsAbout: [
      "Cinematography",
      "Videography",
      "Video Editing",
      "Motion Design",
      "Color Grading",
      "TikTok Editing",
      "YouTube Editing",
      "Wedding Cinematic",
      "Brand Film",
      "After Effects",
      "Premiere Pro",
      "DaVinci Resolve",
      "CapCut",
    ],
    sameAs: Object.values(SITE.social),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${SITE.name} — Portfolio`,
    url: SITE.url,
    inLanguage: "vi-VN",
    publisher: { "@id": `${SITE.url}#person` },
  };

  const portfolio = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${SITE.name} — Video Editing Portfolio`,
    url: SITE.url,
    description: SITE.bio,
    author: { "@id": `${SITE.url}#person` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolio) }}
      />
    </>
  );
}
