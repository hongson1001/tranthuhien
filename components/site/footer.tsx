import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "@/components/ui/icons";
import { SITE } from "@/lib/site";

const socials = [
  { href: SITE.social.facebook, label: "Facebook", icon: FacebookIcon },
  { href: SITE.social.instagram, label: "Instagram", icon: InstagramIcon },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32 border-t border-black/5 bg-cinema-surface">
      <div className="absolute inset-x-0 -top-px mx-auto h-px max-w-7xl bg-linear-to-r from-transparent via-cinema-gold/50 to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 text-center sm:px-8 md:grid-cols-3 md:text-left">
        <div className="flex flex-col items-center space-y-4 md:items-start">
          <div className="flex items-center gap-3">
            <span className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-cinema-gold/40">
              <Image
                src={SITE.avatar}
                alt={`${SITE.name} avatar`}
                fill
                sizes="40px"
                className="object-cover"
              />
            </span>
            <span className="font-display text-xl tracking-[0.18em] uppercase">
              {SITE.shortName}
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            {SITE.tagline}
          </p>
          <p className="text-xs text-cinema-faint">{SITE.location}</p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-cinema-faint">
            Điều hướng
          </h3>
          <ul className="space-y-2">
            {SITE.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-cinema-faint">
            Liên hệ
          </h3>
          <div className="space-y-3">
            <a
              href={`mailto:${SITE.email}`}
              className="group inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-cinema-gold"
            >
              <Mail size={16} className="opacity-70" />
              <span className="border-b border-dashed border-black/20 group-hover:border-cinema-gold/60">
                {SITE.email}
              </span>
            </a>
            <a
              href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
              className="group inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-cinema-gold"
            >
              <Phone size={16} className="opacity-70" />
              <span className="border-b border-dashed border-black/20 group-hover:border-cinema-gold/60">
                {SITE.phone}
              </span>
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 md:justify-start">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-black/5 text-muted transition hover:border-cinema-gold/40 hover:bg-cinema-gold/10 hover:text-cinema-gold"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-center text-xs text-cinema-faint sm:px-8 md:flex-row md:items-center md:text-left">
          <p>© {year} {SITE.name}. Bảo lưu mọi quyền.</p>
        </div>
      </div>
    </footer>
  );
}
