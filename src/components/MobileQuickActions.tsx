import Link from "next/link";
import { siteConfig } from "@/data/site";

const actions = [
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
        <path d="M4 6h16v12H4V6Z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  {
    label: "Call",
    href: `tel:${siteConfig.phoneUK}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
        <path d="M6.5 4h3l1.5 5-2 1.5a11 11 0 0 0 5 5L14 14l5 1.5v3a1.5 1.5 0 0 1-1.5 1.5A14.5 14.5 0 0 1 5 6.5 1.5 1.5 0 0 1 6.5 4Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 11v5M8 8v.01M12 16v-3a2 2 0 0 1 4 0v3" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: siteConfig.instagram,
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17" cy="7" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export function MobileQuickActions() {
  return (
    <div className="grid grid-cols-4 gap-2 md:hidden">
      {actions.map((action) => (
        <Link
          key={action.label}
          href={action.href}
          target={action.external ? "_blank" : undefined}
          rel={action.external ? "noopener noreferrer" : undefined}
          className="flex min-h-[72px] flex-col items-center justify-center gap-2 rounded-sm border border-line bg-ivory px-2 py-3 text-navy active:bg-gold/10"
        >
          <span className="text-gold">{action.icon}</span>
          <span className="font-mono text-[9px] uppercase tracking-wider">
            {action.label}
          </span>
        </Link>
      ))}
    </div>
  );
}
