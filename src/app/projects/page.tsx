import type { Metadata } from "next";
import { PageContainer } from "@/components/PageContainer";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work by Kian Kamshad: Trace travel app, Brown Housing Lottery, and more.",
};

export default function ProjectsPage() {
  return (
    <div className="py-10 sm:py-16 md:py-24">
      <PageContainer>
        <SectionHeader
          number="§ Projects"
          title="Selected work"
          subtitle="Each entry covers the problem, how I worked on it, the design decisions that mattered, and what came out the other side. Range is the point."
        />

        <div className="mt-8 space-y-4 sm:mt-14 sm:space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </PageContainer>
    </div>
  );
}
