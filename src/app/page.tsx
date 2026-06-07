import Link from "next/link";
import { Hero } from "@/components/Hero";
import { PageContainer } from "@/components/PageContainer";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />

      <section className="border-t border-line bg-ivory py-12 sm:py-16 md:py-20">
        <PageContainer>
          <SectionHeader
            number="§ 01 About"
            title="Biography"
            subtitle={siteConfig.bio.subtitle}
          />

          <div className="mt-8 max-w-3xl sm:mt-12">
            <div className="space-y-4 text-sm leading-relaxed text-slate sm:text-base">
              {siteConfig.bio.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 border-t border-line pt-5 sm:mt-10">
              <p className="font-mono text-[10px] uppercase tracking-widest text-slate/60">
                Outside work
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate/80 sm:text-sm">
                {siteConfig.interestsSummary}
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <PageContainer>
          <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              number="§ 02 Selected Work"
              title="Featured projects"
              subtitle="Consumer mobile, campus tools, and everything in between."
            />
            <Link
              href="/projects"
              className="link-underline shrink-0 font-mono text-xs uppercase tracking-wider text-slate active:text-navy md:hover:text-navy"
            >
              View all projects →
            </Link>
          </div>

          <div className="mt-8 space-y-4 sm:mt-12 sm:space-y-6">
            {featured.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="border-t border-line bg-navy py-12 text-cream sm:py-16 md:py-20">
        <PageContainer className="text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold sm:text-xs">
            Let&apos;s connect
          </p>
          <h2 className="mt-3 font-serif text-2xl font-semibold sm:mt-4 sm:text-3xl md:text-4xl">
            Open to collaborations, conversations, and new projects.
          </h2>
          <Link
            href="/contact"
            className="mt-6 inline-flex min-h-[48px] items-center border border-gold px-8 py-3 font-mono text-xs uppercase tracking-[0.15em] text-gold transition-colors active:bg-gold active:text-navy sm:mt-8 md:hover:bg-gold md:hover:text-navy"
          >
            Contact Me
          </Link>
        </PageContainer>
      </section>
    </>
  );
}
