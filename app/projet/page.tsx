import type { Metadata } from "next";
import Link from "next/link";
import MarketingShell from "@/src/components/marketing-shell";
import PageHero from "@/src/components/page-hero";
import ProjectCard from "@/src/components/project-card";
import { SECTION_GRID, SectionShell } from "@/src/components/section-shell";
import { projects } from "@/src/data/projects";
import { Button } from "@/src/shadcn/components/ui/button";

export const metadata: Metadata = {
  title: "Exemples de projets",
  description:
    "Types de solutions que SAASTECH peut développer : SaaS, mobile, enterprise et data.",
};

export default function ProjectPage() {
  return (
    <MarketingShell className="bg-linear-to-br from-slate-50 via-white to-blue-50">
      <PageHero
        title="Exemples de projets"
        description="Des types de solutions que nous savons concevoir et développer — web, mobile, SaaS et enterprise."
      />

      <SectionShell size="compact" className="bg-transparent">
        <div className={`${SECTION_GRID} md:grid-cols-2 xl:grid-cols-4`}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center sm:mt-14">
          <p className="mb-6 text-gray-600">
            Votre projet ne correspond à aucun exemple ? Contactez-nous — nous
            étudions toute demande sur mesure.
          </p>
          <Button asChild className="rounded-full">
            <Link href="/contact">Discuter de votre projet</Link>
          </Button>
        </div>
      </SectionShell>
    </MarketingShell>
  );
}
