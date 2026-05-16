"use client";

import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon } from "@/components/ui/icons";
import { SITE } from "@/lib/site";

export function SiteNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-black/5 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-cinema-gold/40 transition-all group-hover:ring-cinema-gold">
            <Image
              src={SITE.avatar}
              alt={`${SITE.name} avatar`}
              fill
              sizes="36px"
              className="object-cover"
              priority
            />
          </span>
          <span className="font-display text-lg tracking-[0.18em] uppercase">
            {SITE.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {SITE.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "relative rounded-full px-4 py-2 text-sm transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted hover:text-foreground",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-black/5"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-cinema-gold/40 bg-cinema-gold/10 px-5 py-2 text-sm font-medium text-cinema-gold transition hover:bg-cinema-gold hover:text-white"
          >
            Hợp tác
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-black/5 text-foreground md:hidden"
        >
          {open ? <CloseIcon size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-black/5 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-6 py-4 sm:px-8">
              {SITE.nav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      "rounded-lg px-4 py-3 text-base transition-colors",
                      active
                        ? "bg-black/5 text-foreground"
                        : "text-muted hover:bg-black/5 hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-cinema-gold px-4 py-3 text-base font-medium text-white"
              >
                Hợp tác
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
