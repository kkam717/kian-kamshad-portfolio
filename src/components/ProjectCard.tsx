import Link from "next/link";
import { ProjectPreview } from "@/components/ProjectPreview";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const actionLinkClass =
  "inline-flex min-h-[44px] w-full items-center justify-center border px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider transition-colors sm:min-h-0 sm:text-xs";

function ProjectActions({
  project,
  liveLabel,
  isExternal,
}: {
  project: Project;
  liveLabel: string;
  isExternal: boolean;
}) {
  return (
    <div className="flex w-full flex-row gap-2 sm:flex-col sm:gap-3">
      {project.liveUrl && (
        <Link
          href={project.liveUrl}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className={`${actionLinkClass} border-navy text-navy active:bg-navy active:text-cream md:hover:bg-navy md:hover:text-cream`}
        >
          {liveLabel}
        </Link>
      )}
      {project.githubUrl && (
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${actionLinkClass} border-line text-slate active:border-navy active:text-navy md:hover:border-navy md:hover:text-navy`}
        >
          Source
        </Link>
      )}
      {project.pdfUrl && (
        <Link
          href={project.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${actionLinkClass} border-line text-slate active:border-navy active:text-navy md:hover:border-navy md:hover:text-navy`}
        >
          Read PDF
        </Link>
      )}
    </div>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, "0");
  const isExternal = Boolean(project.liveUrl?.startsWith("http"));
  const liveLabel = project.liveUrl?.includes("youtube.com")
    ? "View Channel"
    : isExternal
      ? "Visit Site"
      : "Read Writeup";

  const hasActions = Boolean(
    project.liveUrl || project.githubUrl || project.pdfUrl,
  );
  const hasSidebar = Boolean(project.image || hasActions);

  return (
    <article className="group border border-line bg-cream transition-colors active:border-gold/50 active:bg-ivory md:hover:border-gold/50 md:hover:bg-ivory">
      <div
        className={`grid gap-5 p-5 sm:gap-6 sm:p-6 md:gap-8 md:p-8 ${
          hasSidebar
            ? "grid-cols-1 sm:grid-cols-[minmax(0,1fr)_11rem] md:grid-cols-[minmax(0,1fr)_12.5rem] lg:grid-cols-[minmax(0,1fr)_13.75rem]"
            : ""
        }`}
      >
        <div className="min-w-0">
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

          <p className="mt-3 text-sm text-slate sm:mt-4 sm:text-base">
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

          <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-slate"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-3 flex flex-col gap-1 font-mono text-[10px] uppercase tracking-wider text-slate sm:mt-4 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-1">
            <span>{project.role}</span>
            <span className="hidden sm:inline">·</span>
            <span>{project.status}</span>
          </div>
        </div>

        {hasSidebar && (
          <aside className="flex flex-col gap-4 sm:items-stretch sm:pt-1">
            {project.image && <ProjectPreview image={project.image} />}
            {hasActions && (
              <ProjectActions
                project={project}
                liveLabel={liveLabel}
                isExternal={isExternal}
              />
            )}
          </aside>
        )}
      </div>
    </article>
  );
}
