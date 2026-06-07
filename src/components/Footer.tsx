import Link from "next/link";
import { PageContainer } from "@/components/PageContainer";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ivory pb-[calc(3.25rem+env(safe-area-inset-bottom,0px))] md:pb-0">
      <PageContainer className="flex flex-col gap-5 py-8 sm:gap-6 sm:py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-base font-medium text-navy sm:text-lg">
            {siteConfig.name}
          </p>
          <p className="mt-1 font-mono text-[10px] tracking-wider text-slate sm:text-xs">
            {siteConfig.locations.join(" · ")}
          </p>
        </div>

        <div className="hidden flex-wrap gap-6 md:flex">
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-mono text-xs uppercase tracking-wider text-slate hover:text-navy"
          >
            LinkedIn
          </Link>
          <Link
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-mono text-xs uppercase tracking-wider text-slate hover:text-navy"
          >
            Instagram
          </Link>
          <Link
            href="/contact"
            className="link-underline font-mono text-xs uppercase tracking-wider text-slate hover:text-navy"
          >
            Contact
          </Link>
        </div>

        <p className="font-mono text-[10px] text-slate sm:text-xs">
          © {year} · kiankamshad.com
        </p>
      </PageContainer>
    </footer>
  );
}
