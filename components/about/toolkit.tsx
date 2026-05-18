import { Section } from "@/components/ui/section";

const groups = [
  {
    label: "Hậu kỳ",
    items: [
      "Adobe Premiere Pro",
      "CapCut (TikTok short-form)",
      "Adobe After Effects",
      "DaVinci Resolve",
      "Adobe Audition",
      "Adobe Photoshop",
    ],
  },
  {
    label: "Đồ hoạ & thiết kế",
    items: ["Adobe Illustrator", "Figma", "Canva"],
  },
  {
    label: "Sản xuất",
    items: ["Máy quay mirrorless", "Gimbal", "Light kit cơ bản", "Mic thu trực tiếp"],
  },
];

export function Toolkit() {
  return (
    <Section
      eyebrow="Công cụ"
      title="Toolkit cá nhân."
      description="Phần mềm & thiết bị sử dụng thường xuyên cho cả khâu quay lẫn hậu kỳ."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div
            key={g.label}
            className="rounded-2xl border border-black/5 bg-cinema-surface p-6 ring-1 ring-black/5"
          >
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-cinema-faint">
              {g.label}
            </h3>
            <ul className="space-y-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <span className="h-1 w-1 rounded-full bg-cinema-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
