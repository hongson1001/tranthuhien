import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type SectionProps = Omit<ComponentPropsWithoutRef<"section">, "title"> & {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export function Section({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      {...rest}
      className={clsx(
        "relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-20 md:px-8 lg:py-28",
        className,
      )}
    >
      {(eyebrow || title || description) && (
        <header
          className={clsx(
            "mb-12 flex flex-col gap-4",
            align === "center" && "items-center text-center",
          )}
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-cinema-gold">
              <span className="h-px w-8 bg-cinema-gold/60" />
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="font-display text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="max-w-2xl text-base text-muted sm:text-lg">
              {description}
            </p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
