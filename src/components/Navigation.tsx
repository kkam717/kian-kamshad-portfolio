"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageContainer } from "@/components/PageContainer";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/90 backdrop-blur-md safe-top">
      <PageContainer className="flex items-center justify-between py-3 md:py-4">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-tight text-navy md:text-xl"
        >
          <span className="md:hidden">Kian K.</span>
          <span className="hidden md:inline">Kian Kamshad</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
                pathname === link.href
                  ? "text-gold"
                  : "text-slate hover:text-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="font-mono text-[10px] uppercase tracking-widest text-gold md:hidden"
        >
          Say hello
        </Link>
      </PageContainer>
    </header>
  );
}
