import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MarketingShell from "@/src/components/marketing-shell";
import PageHero from "@/src/components/page-hero";
import CTA from "@/src/components/sections/cta";
import {
  getOtherServices,
  getServiceBySlug,
  services,
} from "@/src/data/services";
import { Button } from "@/src/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/src/shadcn/components/ui/card";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service introuvable | SAASTEK" };
  }

  return {
    title: `${service.title} | SAASTEK`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const otherServices = getOtherServices(slug).slice(0, 3);

  return (
    <MarketingShell>
      <PageHero title={service.title} description={service.shortDescription} />

      <section className="border-b border-gray-200 bg-gray-50 px-6 py-14">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 md:flex-row md:items-center">
          <div
            className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${service.gradient}`}
          >
            <Icon className="h-8 w-8 text-white" aria-hidden />
          </div>
          <p className="text-lg leading-relaxed text-gray-700">{service.overview}</p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-3">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Ce que nous apportons
            </h2>
            <ul className="space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
                    aria-hidden
                  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Livrables</h2>
            <ul className="space-y-4">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
                    aria-hidden
                  />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Cas d&apos;usage
            </h2>
            <ul className="space-y-4">
              {service.useCases.map((useCase) => (
                <li key={useCase} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
                    aria-hidden
                  />
                  <span className="text-gray-700">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-gray-200 pt-10 sm:flex-row">
          <Button variant="outline" className="rounded-full" asChild>
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Tous les services
            </Link>
          </Button>
          <Button
            className="rounded-full bg-linear-to-r from-blue-500 to-blue-600 px-8 hover:from-blue-600 hover:to-blue-700"
            asChild
          >
            <a
              href={`mailto:contact@saastech.com?subject=${encodeURIComponent(`Demande : ${service.title}`)}`}
            >
              Demander un devis
            </a>
          </Button>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            Autres services
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {otherServices.map((item) => {
              const OtherIcon = item.icon;
              return (
                <Card
                  key={item.slug}
                  className="border border-gray-200 bg-white transition hover:border-blue-500/40 hover:shadow-md"
                >
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                      <OtherIcon className="h-5 w-5 text-blue-600" aria-hidden />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-gray-600">
                      {item.shortDescription}
                    </p>
                    <Link
                      href={`/services/${item.slug}`}
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                      En savoir plus
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </MarketingShell>
  );
}
