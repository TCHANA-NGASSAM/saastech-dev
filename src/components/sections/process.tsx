import { SectionHeader, SectionShell } from "@/src/components/section-shell";
import { Card, CardContent } from "@/src/shadcn/components/ui/card";
import { cn } from "@/src/shadcn/lib/utils";
import { Code2, Lightbulb, Pencil, Rocket } from "lucide-react";
import { Fragment } from "react";

const steps = [
  {
    icon: Lightbulb,
    title: "Découverte",
    description:
      "Nous écoutons vos besoins, vos objectifs et vos défis pour créer une stratégie adaptée.",
  },
  {
    icon: Pencil,
    title: "Conception",
    description:
      "Nos designers créent des wireframes et maquettes pour visualiser votre solution.",
  },
  {
    icon: Code2,
    title: "Développement",
    description:
      "Notre équipe technique construit votre projet avec les meilleures pratiques.",
  },
  {
    icon: Rocket,
    title: "Lancement & Support",
    description:
      "Nous lançons votre projet et vous accompagnons pour sa croissance.",
  },
];

/** Hauteurs partagées carte / connecteur pour aligner le trait dégradé */
const PROCESS_ICON_BLOCK = "h-14 shrink-0";
const PROCESS_TITLE_ROW = "flex min-h-10 shrink-0 items-center";

function ProcessConnector() {
  return (
    <div className="hidden shrink-0 flex-col lg:flex lg:w-8 xl:w-10" aria-hidden>
      <div className={PROCESS_ICON_BLOCK} />
      <div className={cn(PROCESS_TITLE_ROW, "px-0.5")}>
        <div className="h-px w-full rounded-full bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
      </div>
    </div>
  );
}

function ProcessStepCard({
  step,
  index,
  className,
}: {
  step: (typeof steps)[number];
  index: number;
  className?: string;
}) {
  const Icon = step.icon;

  return (
    <Card
      className={cn(
        "h-full gap-0 overflow-hidden rounded-2xl border border-gray-200/70 bg-white py-0 shadow-none ring-0",
        className,
      )}
    >
      <CardContent className="flex h-full flex-col p-6 lg:p-7">
        <div className={cn(PROCESS_ICON_BLOCK, "mb-0 flex items-start")}>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100/80">
            <Icon className="h-5 w-5 text-blue-600" strokeWidth={1.75} aria-hidden />
          </div>
        </div>

        <div className={cn(PROCESS_TITLE_ROW, "mb-4 gap-2.5")}>
          <span
            className="shrink-0 text-[2.5rem] leading-none font-bold text-blue-500/25 lg:text-[2.75rem]"
            aria-hidden
          >
            {index + 1}
          </span>
          <h3 className="text-base leading-snug font-bold text-gray-900 lg:text-[1.05rem]">
            {step.title}
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-gray-600">{step.description}</p>
      </CardContent>
    </Card>
  );
}

export default function Process() {
  return (
    <SectionShell divider>
      <SectionHeader
        title="Notre Processus"
        description="Une approche structurée et éprouvée pour garantir le succès de votre projet"
      />

      <div className="hidden lg:flex lg:items-stretch">
        {steps.map((step, index) => (
          <Fragment key={step.title}>
            {index > 0 ? <ProcessConnector /> : null}
            <ProcessStepCard step={step} index={index} className="min-w-0 flex-1" />
          </Fragment>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:hidden">
        {steps.map((step, index) => (
          <ProcessStepCard key={step.title} step={step} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}
