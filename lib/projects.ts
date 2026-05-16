export type Platform = "tiktok" | "youtube" | "brand";
export type Engagement = "current" | "freelance";
export type AssetType = "logo" | "photo";

export type Project = {
  slug: string;
  title: string;
  client: string;
  platform: Platform;
  engagement: Engagement;
  year: number;
  role: string;
  thumbnail: string;
  /** "logo" = avatar brand (resolution thấp, render object-contain + blur backdrop). "photo" = ảnh chụp (full bleed). */
  assetType: AssetType;
  description: string;
  metrics?: { label: string; value: string }[];
  href: string;
  featured?: boolean;
  /** Trần Thu Hiền trực tiếp quay + dựng (không chỉ nhận footage để cắt). */
  fullProduction?: boolean;
};

export const ALL_PROJECTS: Project[] = [
  {
    slug: "ngocanh-wedding",
    title: "Ngọc Anh Wedding",
    client: "@ngocanhwedding68",
    platform: "tiktok",
    engagement: "freelance",
    year: 2025,
    role: "Dựng · Chỉnh màu",
    thumbnail: "/tiktok/ngocanh_wedding.jpeg",
    assetType: "photo",
    description:
      "Video cưới ngắn theo phong cách điện ảnh — mood màu, nhịp cảm xúc, đồng bộ nhạc theo nhịp cắt.",
    href: "https://www.tiktok.com/@ngocanhwedding68",
    featured: true,
  },
  {
    slug: "mpick-studio",
    title: "M Pick Studio",
    client: "@MPickStudio",
    platform: "youtube",
    engagement: "freelance",
    year: 2025,
    role: "Dựng · Đồ hoạ động",
    thumbnail: "/ytb/studio.jpg",
    assetType: "logo",
    description:
      "Kể chuyện thương hiệu dạng dài cho studio — đồ hoạ chuyển động, cắt điện ảnh, thiết kế âm thanh.",
    href: "https://www.youtube.com/@MPickStudio/featured",
    featured: true,
  },
  {
    slug: "fbshop-youtube",
    title: "FBShop",
    client: "@fbshopvn · Cầu lông",
    platform: "youtube",
    engagement: "current",
    year: 2024,
    role: "Dựng phim",
    thumbnail: "/ytb/fbshop.jpg",
    assetType: "logo",
    description:
      "Video YouTube cho cửa hàng cầu lông FBShop — giới thiệu vợt, giày, phụ kiện và highlight các giải đấu.",
    href: "https://www.youtube.com/c/fbshopvn",
    featured: true,
  },
  {
    slug: "bds-realty",
    title: "Thương Phạm BĐS",
    client: "@thuongphambds",
    platform: "tiktok",
    engagement: "freelance",
    year: 2024,
    role: "Dựng · Đồ hoạ động",
    thumbnail: "/tiktok/bds.jpeg",
    assetType: "photo",
    description:
      "Video ngắn ngành bất động sản — tham quan dự án, chữ chuyển động, chuyển cảnh năng động.",
    href: "https://www.tiktok.com/@thuongphambds",
    featured: true,
  },
  {
    slug: "fbshop-official",
    title: "FBShop Official",
    client: "@fbshop.official · Cầu lông",
    platform: "tiktok",
    engagement: "current",
    year: 2024,
    role: "Dựng phim",
    thumbnail: "/tiktok/store_fbshop.jpeg",
    assetType: "logo",
    description:
      "TikTok chính thức của cửa hàng cầu lông FBShop — vợt mới về, ưu đãi cửa hàng, mở đầu cuốn, phụ đề động.",
    href: "https://www.tiktok.com/@fbshop.official",
  },
  {
    slug: "fbshop-vn",
    title: "FBShop Review",
    client: "@fbshop.vn · Cầu lông",
    platform: "tiktok",
    engagement: "current",
    year: 2024,
    role: "Dựng phim",
    thumbnail: "/tiktok/fbshop_review.jpeg",
    assetType: "logo",
    description:
      "Chuỗi review vợt cầu lông & phụ kiện dạng ngắn — mở đầu 0–3 giây cuốn, cắt nhanh, phụ đề động.",
    href: "https://www.tiktok.com/@fbshop.vn",
  },
  {
    slug: "techone",
    title: "TechOne",
    client: "@techone.vn",
    platform: "tiktok",
    engagement: "freelance",
    year: 2024,
    role: "Dựng · Đồ hoạ động",
    thumbnail: "/tiktok/techone.jpeg",
    assetType: "logo",
    description:
      "TikTok thương hiệu ngành công nghệ: dựng nhanh, chữ chuyển động, đồ hoạ thông tin động.",
    href: "https://www.tiktok.com/@techone.vn",
  },
];

export const FEATURED_PROJECTS: Project[] = ALL_PROJECTS.filter(
  (p) => p.featured,
);

export const TIKTOK_PROJECTS: Project[] = ALL_PROJECTS.filter(
  (p) => p.platform === "tiktok",
);

export const YOUTUBE_PROJECTS: Project[] = ALL_PROJECTS.filter(
  (p) => p.platform === "youtube",
);
