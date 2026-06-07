import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { MobileQuickActions } from "@/components/MobileQuickActions";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kian Alexander Kamshad.",
};

export default function ContactPage() {
  return (
    <div className="py-10 sm:py-16 md:py-24">
      <PageContainer>
        <SectionHeader
          number="§ Contact"
          title="Get in touch"
          subtitle="Open to collaborations, product conversations, and new opportunities in London and New York."
        />

        <div className="mt-6 sm:mt-8">
          <MobileQuickActions />
        </div>

        <div className="mt-8 grid gap-10 sm:mt-14 sm:gap-16 lg:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
              Send a message
            </h3>
            <div className="mt-4 sm:mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-8 sm:space-y-10">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                Email
              </h3>
              <ul className="mt-3 space-y-2 sm:mt-4">
                <li>
                  <Link
                    href={`mailto:${siteConfig.email}`}
                    className="link-underline break-all text-sm text-navy active:text-gold sm:text-base md:hover:text-gold"
                  >
                    {siteConfig.email}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`mailto:${siteConfig.workEmail}`}
                    className="link-underline break-all text-sm text-navy active:text-gold sm:text-base md:hover:text-gold"
                  >
                    {siteConfig.workEmail}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                Phone
              </h3>
              <ul className="mt-3 space-y-2 text-navy sm:mt-4">
                <li>
                  <Link
                    href={`tel:${siteConfig.phoneUK}`}
                    className="link-underline text-sm sm:text-base"
                  >
                    {siteConfig.phoneUK}
                  </Link>
                  <span className="ml-2 text-xs text-slate sm:text-sm">UK</span>
                </li>
                <li>
                  <Link
                    href={`tel:${siteConfig.phoneUS}`}
                    className="link-underline text-sm sm:text-base"
                  >
                    {siteConfig.phoneUS}
                  </Link>
                  <span className="ml-2 text-xs text-slate sm:text-sm">
                    USA
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                Addresses
              </h3>
              <ul className="mt-3 space-y-3 sm:mt-4">
                {siteConfig.addresses.map((addr) => (
                  <li key={addr.label} className="text-sm text-navy sm:text-base">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate">
                      {addr.label}
                    </span>
                    <p className="mt-1">{addr.line}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden md:block">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                Social
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-navy hover:text-gold"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-navy hover:text-gold"
                  >
                    Instagram · @kkam717
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
