import type { Metadata } from "next";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { education, experience } from "@/data/experience";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Education, employment, and skills: Kian Alexander Kamshad's professional background.",
};

export default function ExperiencePage() {
  return (
    <div className="py-10 sm:py-16 md:py-24">
      <PageContainer>
        <SectionHeader
          number="§ Experience"
          title="Resume & background"
          subtitle="Computer Science at Brown, a year in industry at Airbus, and work spanning mobile apps, research, and internal tools."
        />

        <section className="mt-8 sm:mt-14">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
            Education
          </h3>
          <div className="mt-4 space-y-6 sm:mt-6 sm:space-y-8">
            {education.map((entry) => (
              <article
                key={entry.institution}
                className="border-b border-line pb-6 last:border-0 sm:pb-8"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-2">
                  <h4 className="font-serif text-xl font-medium text-navy sm:text-2xl">
                    {entry.institution}
                  </h4>
                  <span className="shrink-0 font-mono text-[10px] text-slate sm:text-xs">
                    {entry.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-navy sm:text-base">
                  {entry.degree}
                </p>
                <p className="text-sm text-slate">{entry.location}</p>
                {entry.details && (
                  <ul className="mt-3 space-y-2 sm:mt-4">
                    {entry.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-3 text-sm text-slate before:mt-2 before:h-1 before:w-1 before:shrink-0 before:bg-gold before:content-['']"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 sm:mt-16">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
            Employment
          </h3>
          <div className="mt-4 space-y-6 sm:mt-6 sm:space-y-8">
            {experience.map((entry) => (
              <article
                key={`${entry.organisation}-${entry.period}`}
                className="border-b border-line pb-6 last:border-0 sm:pb-8"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-2">
                  <div>
                    <h4 className="font-serif text-lg font-medium text-navy sm:text-xl">
                      {entry.title}
                    </h4>
                    <p className="text-sm text-navy/80 sm:text-base">
                      {entry.organisation}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-[10px] text-slate sm:text-xs">
                    {entry.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate">{entry.location}</p>
                <ul className="mt-3 space-y-2 sm:mt-4">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm text-slate before:mt-2 before:h-1 before:w-1 before:shrink-0 before:bg-gold before:content-['']"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 border-t border-line pt-12 sm:mt-16 sm:gap-10 sm:pt-16 md:grid-cols-3">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
              Skills
            </h3>
            <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
              {siteConfig.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-slate"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
              Languages
            </h3>
            <ul className="mt-3 space-y-2 sm:mt-4">
              {siteConfig.languages.map((lang) => (
                <li key={lang.name} className="text-sm text-slate">
                  <span className="text-navy">{lang.name}</span>
                  <span className="text-slate/60">, {lang.level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
              Citizenships
            </h3>
            <p className="mt-3 text-sm text-slate sm:mt-4">
              {siteConfig.citizenships.join(" · ")}
            </p>

            <h3 className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-slate/60 sm:mt-8">
              Outside work
            </h3>
            <p className="mt-2 text-xs text-slate/80 sm:text-sm">
              {siteConfig.interestsSummary}
            </p>
          </div>
        </section>
      </PageContainer>
    </div>
  );
}
