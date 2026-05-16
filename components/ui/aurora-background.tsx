import { clsx } from "clsx";

type AuroraBackgroundProps = {
  /** Cường độ tổng thể của các blob (0-1). Mặc định 1. */
  intensity?: number;
  /** Có hiển thị blob gold ấm không. */
  warm?: boolean;
  className?: string;
};

export function AuroraBackground({
  intensity = 1,
  warm = true,
  className,
}: AuroraBackgroundProps) {
  return (
    <div
      aria-hidden
      className={clsx(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div
        className="animate-aurora-1 absolute -left-[20%] -top-[20%] h-[70vh] w-[70vh] rounded-full blur-[120px]"
        style={{
          backgroundColor: "var(--color-cinema-blue)",
          opacity: 0.35 * intensity,
        }}
      />
      <div
        className="animate-aurora-2 absolute -right-[15%] top-[10%] h-[55vh] w-[55vh] rounded-full blur-[120px]"
        style={{
          backgroundColor: "var(--color-cinema-blue-soft)",
          opacity: 0.45 * intensity,
        }}
      />
      {warm && (
        <div
          className="animate-aurora-3 absolute left-[40%] top-[30%] h-[40vh] w-[40vh] rounded-full blur-[110px]"
          style={{
            backgroundColor: "var(--color-cinema-gold-soft)",
            opacity: 0.18 * intensity,
          }}
        />
      )}

      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-black/10 to-transparent" />
    </div>
  );
}
