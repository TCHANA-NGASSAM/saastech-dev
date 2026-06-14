import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MarketingShell from "@/src/components/marketing-shell";
import PageHero from "@/src/components/page-hero";
import { SectionShell } from "@/src/components/section-shell";
import CTA from "@/src/components/sections/cta";
import { getProjectBySlug, projects } from "@/src/data/projects";
import { Button } from "@/src/shadcn/components/ui/button";
import { ArrowLeft } from "lucide-react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Projet introuvable" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <MarketingShell className="bg-white">
      <PageHero title={project.title} description={project.description} />

      <SectionShell size="compact" containerClassName="max-w-4xl">
          <div
            className={`mb-8 flex h-36 items-center justify-center rounded-2xl bg-linear-to-br sm:mb-10 sm:h-48 ${project.gradient}`}
          >
            <span className="text-5xl opacity-40 sm:text-7xl">{project.icon}</span>
          </div>

          <div className="mb-6 flex flex-wrap gap-2 sm:mb-8">
            <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
              {project.category}
            </span>
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mb-8 rounded-xl border border-gray-200 bg-gray-50 p-5 sm:mb-10 sm:p-8">
            <p className="text-lg font-bold text-blue-600 sm:text-xl">{project.scope}</p>
            <p className="text-gray-600">{project.scopeLabel}</p>
          </div>

          <p className="mb-8 text-base leading-relaxed text-gray-700 sm:mb-10 sm:text-lg">
            Il s&apos;agit d&apos;un exemple de projet que nous pouvons réaliser dans
            ce domaine. Contactez-nous pour en discuter et définir ensemble la
            meilleure approche pour votre besoin.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button variant="outline" className="h-12 w-full rounded-full sm:w-auto" asChild>
              <Link href="/projet">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Tous les projets
              </Link>
            </Button>
            <Button
              className="h-12 w-full rounded-full bg-linear-to-r from-blue-500 to-blue-600 px-8 sm:w-auto"
              asChild
            >
              <Link href="/contact">Discuter de votre projet</Link>
            </Button>
          </div>
      </SectionShell>

      <CTA />
    </MarketingShell>
  );
}
