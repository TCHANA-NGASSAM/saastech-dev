import Link from "next/link";
import type { Service } from "@/src/data/services";
import { Button } from "@/src/shadcn/components/ui/button";
import { Card } from "@/src/shadcn/components/ui/card";
import { cn } from "@/src/shadcn/lib/utils";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

function ServiceCardIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center">
      <div
        className="absolute -bottom-1 -left-3 h-[4.5rem] w-[4.5rem] rounded-full bg-blue-50"
        aria-hidden
      />
      <div
        className="absolute -top-1 -right-3 h-10 w-10 rounded-full bg-blue-100/80"
        aria-hidden
      />
      <Icon className="relative h-12 w-12 text-blue-600" strokeWidth={1.35} aria-hidden />
    </div>
  );
}

type ServiceCardProps = {
  service: Service;
  className?: string;
  showFeatures?: boolean;
  linkLabel?: string;
};

export default function ServiceCard({
  service,
  className,
  showFeatures = false,
  linkLabel = "En savoir plus",
}: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Card
      className={cn(
        "flex h-full flex-col items-center gap-0 overflow-hidden rounded-3xl border border-gray-100 bg-white py-0 text-center shadow-sm ring-0 transition-shadow hover:shadow-md",
        className,
      )}
    >
      <div className="flex w-full flex-1 flex-col items-center px-8 py-10 sm:px-10 sm:py-12">
        <ServiceCardIcon icon={Icon} />

        <h3 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">
          {service.title}
        </h3>

        <p className="max-w-sm text-base leading-relaxed text-gray-600">
          {service.shortDescription}
        </p>

        {showFeatures ? (
          <ul className="mt-6 space-y-2 text-sm leading-relaxed text-gray-600">
            {service.features.slice(0, 3).map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="w-full border-t border-gray-100 px-8 py-5 sm:px-10">
        <Button
          variant="ghost"
          className="group mx-auto h-auto px-2 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
          asChild
        >
          <Link href={`/services/${service.slug}`}>
            {linkLabel}
            <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
