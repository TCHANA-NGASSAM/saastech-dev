import type { Metadata } from "next";
import Link from "next/link";
import MarketingShell from "@/src/components/marketing-shell";
import PageHero from "@/src/components/page-hero";
import CTA from "@/src/components/sections/cta";
import Process from "@/src/components/sections/process";
import { services } from "@/src/data/services";
import { Button } from "@/src/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/src/shadcn/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | SAASTECH",
  description:
    "Développement web, applications mobiles, SaaS, solutions enterprise et formation IT pour votre transformation digitale.",
};

export default function ServicesPage() {
  return (
    <MarketingShell>
      <PageHero
        title="Nos services"
        description="Du prototype au produit scalable : nous couvrons toute la chaîne de valeur logicielle, en Europe et en Afrique."
      />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Une offre complète
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Chaque service est pensé pour répondre à un besoin précis. Explorez
              le détail de nos expertises et contactez-nous pour un devis sur
              mesure.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.slug}
                  className="flex flex-col border border-gray-200 transition hover:border-blue-500/40 hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                      <Icon className="h-7 w-7 text-white" aria-hidden />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-gray-600">{service.shortDescription}</p>
                    <ul className="mt-4 space-y-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="text-sm text-gray-500 before:mr-2 before:text-blue-500 before:content-['•']"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="border-t border-gray-100 pt-4">
                    <Button
                      variant="ghost"
                      className="group -ml-2 h-auto px-2 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                      asChild
                    >
                      <Link href={`/services/${service.slug}`}>
                        Voir le détail
                        <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Process />
      <CTA />
    </MarketingShell>
  );
}
