"use client";

import ProjectCard from "@/src/components/project-card";
import { SECTION_GRID, SectionHeader, SectionShell } from "@/src/components/section-shell";
import type { Project } from "@/src/data/projects";
import { Button } from "@/src/shadcn/components/ui/button";
import Link from "next/link";

interface PortfolioClientProps {
  caseStudies: Project[];
}

export default function PortfolioClient({ caseStudies }: PortfolioClientProps) {
  return (
    <SectionShell id="expertises" divider>
      <SectionHeader
        title={
          <>
            Ce que nous{" "}
            <span className="bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              savons construire
            </span>
          </>
        }
        description="Des solutions que nous concevons et développons pour vous — du MVP au produit complet, sur le web, le mobile et le SaaS."
      />

      <div className={`${SECTION_GRID} md:grid-cols-2 xl:grid-cols-4`}>
        {caseStudies.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-12 text-center sm:mt-14">
        <Button asChild variant="outline" className="rounded-full border-gray-300">
          <Link href="/projet">Voir tous les exemples</Link>
        </Button>
      </div>
    </SectionShell>
  );
}
