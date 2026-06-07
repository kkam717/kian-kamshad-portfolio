import Link from "next/link";
import { HeroPortrait } from "@/components/HeroPortrait";
import { PageContainer } from "@/components/PageContainer";

export function Hero() {
  return (
    <section className="relative">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <PageContainer className="relative grid gap-8 py-10 sm:gap-10 sm:py-14 md:grid-cols-[1fr_320px] md:items-center md:gap-12 md:py-24 lg:grid-cols-[1fr_380px] lg:gap-16">
        <div className="animate-fade-up animate-delay-1 relative order-first mx-auto w-full max-w-[280px] sm:max-w-[320px] md:order-last md:max-w-[380px]">
          <div className="rounded-sm border border-gold/40 p-2 sm:p-3">
            <div className="border border-navy/20 p-1">
              <HeroPortrait />
            </div>
          </div>
        </div>

        <div className="order-last md:order-first">
          <p className="animate-fade-up font-mono text-[10px] uppercase tracking-[0.2em] text-gold sm:text-xs sm:tracking-[0.25em]">
            Portfolio · Design & Product · 2026
          </p>
          <h1 className="animate-fade-up animate-delay-1 mt-3 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-navy sm:mt-4 sm:text-5xl md:text-6xl lg:text-7xl">
            Kian Alexander
            <br />
            Kamshad<span className="text-gold">.</span>
          </h1>

          <div className="animate-fade-up animate-delay-2 mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/projects"
              className="inline-flex min-h-[48px] items-center justify-center border border-navy bg-navy px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-cream transition-colors active:bg-navy-light sm:min-h-0"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center border border-navy px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-navy transition-colors active:bg-ivory sm:min-h-0"
            >
              Get in Touch
            </Link>
          </div>

          <dl className="animate-fade-up animate-delay-3 mt-8 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-line pt-6 sm:mt-12 sm:gap-6 sm:pt-8 md:grid-cols-4">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-gold">
                Based
              </dt>
              <dd className="mt-1 text-sm text-navy">London &amp; NYC</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-gold">
                Currently
              </dt>
              <dd className="mt-1 text-sm text-navy">Co-building Trace</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-gold">
                Education
              </dt>
              <dd className="mt-1 text-sm text-navy">Brown · CS</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-gold">
                Beyond code
              </dt>
              <dd className="mt-1 text-sm text-navy">Guitar · Squash</dd>
            </div>
          </dl>
        </div>
      </PageContainer>
    </section>
  );
}
