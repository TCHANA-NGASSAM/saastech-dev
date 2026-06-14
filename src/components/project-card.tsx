import Link from "next/link";
import type { Project } from "@/src/data/projects";
import {
  MARKETING_CARD,
  MARKETING_CARD_CONTENT,
  MARKETING_CARD_FOOTER,
  MARKETING_CARD_HEADER,
} from "@/src/components/section-shell";
import { Button } from "@/src/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/src/shadcn/components/ui/card";
import { ArrowRight } from "lucide-react";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      className={`flex h-full flex-col transition hover:border-blue-500 hover:shadow-lg ${MARKETING_CARD}`}
    >
      <CardHeader className={`${MARKETING_CARD_HEADER} gap-4`}>
        <div className="flex items-start justify-between gap-3">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-blue-600 text-2xl"
            aria-hidden
          >
            {project.icon}
          </div>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            {project.category}
          </span>
        </div>
        <h3 className="line-clamp-2 text-lg font-semibold text-gray-900 sm:min-h-14 sm:text-xl">
          {project.title}
        </h3>
      </CardHeader>

      <CardContent className={`flex flex-1 flex-col gap-5 ${MARKETING_CARD_CONTENT}`}>
        <p className="line-clamp-2 text-sm leading-relaxed text-gray-600 sm:min-h-10">
          {project.description}
        </p>

        <div className="mt-auto border-t border-gray-100 pt-5">
          <p className="text-lg font-bold text-blue-600">{project.scope}</p>
          <p className="text-xs text-gray-500">{project.scopeLabel}</p>
        </div>

        <div className="flex min-h-7 flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className={MARKETING_CARD_FOOTER}>
        <Button
          variant="ghost"
          className="group -ml-2 h-auto px-2 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
          asChild
        >
          <Link href={`/projet/${project.slug}`}>
            En savoir plus
            <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
