import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, "0");
  const isExternal = Boolean(project.liveUrl?.startsWith("http"));
  const liveLabel = project.liveUrl?.includes("youtube.com")
    ? "View Channel"
    : isExternal
      ? "Visit Site"
      : "Read Writeup";

  return (
    <article className="group border border-line bg-cream transition-colors active:border-gold/50 active:bg-ivory md:hover:border-gold/50 md:hover:bg-ivory">
      <div className="flex flex-col gap-5 p-5 sm:p-6 md:flex-row md:items-start md:justify-between md:gap-6 md:p-8">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
            <span className="font-mono text-sm text-gold">{num}</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate">
              {project.year} · {project.type}
            </span>
          </div>

          <h3 className="mt-2 font-serif text-xl font-semibold text-navy sm:mt-3 sm:text-2xl md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-gold sm:text-xs">
            {project.subtitle}
          </p>

          <p className="mt-3 text-sm text-slate sm:mt-4 sm:max-w-2xl sm:text-base">
            {project.description}
          </p>

          <ul className="mt-4 space-y-2 sm:mt-5">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm text-navy/80 before:mt-2 before:h-1 before:w-1 before:shrink-0 before:bg-gold before:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-3 flex flex-col gap-1 font-mono text-[10px] uppercase tracking-wider text-slate sm:mt-4 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-1">
            <span>{project.role}</span>
            <span className="hidden sm:inline">·</span>
            <span>{project.status}</span>
          </div>
        </div>

        <div className="flex shrink-0 flex-row gap-2 sm:gap-3 md:flex-col md:items-end">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex min-h-[44px] flex-1 items-center justify-center border border-navy px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-navy transition-colors active:bg-navy active:text-cream sm:text-xs md:min-h-0 md:min-w-[140px] md:flex-none md:hover:bg-navy md:hover:text-cream"
            >
              {liveLabel}
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] flex-1 items-center justify-center border border-line px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-slate transition-colors active:border-navy active:text-navy sm:text-xs md:min-h-0 md:min-w-[140px] md:flex-none md:hover:border-navy md:hover:text-navy"
            >
              Source
            </Link>
          )}
          {project.pdfUrl && (
            <Link
              href={project.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] flex-1 items-center justify-center border border-line px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-slate transition-colors active:border-navy active:text-navy sm:text-xs md:min-h-0 md:min-w-[140px] md:flex-none md:hover:border-navy md:hover:text-navy"
            >
              Read PDF
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
