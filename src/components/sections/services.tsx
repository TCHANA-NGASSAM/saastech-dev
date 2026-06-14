import Link from "next/link";
import { services } from "@/src/data/services";
import { Button } from "@/src/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/src/shadcn/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Nos Services
          </h2>
          <p className="text-lg text-gray-600">
            Une gamme complète de solutions digitales pour transformer votre
            entreprise
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.slug}
                className="flex flex-col border border-gray-200 transition hover:border-blue-500 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-blue-600">
                    <Icon className="h-7 w-7 text-white" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-600">{service.shortDescription}</p>
                </CardContent>
                <CardFooter className="border-t border-gray-100 pt-4">
                  <Button
                    variant="ghost"
                    className="group -ml-2 h-auto px-2 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                    asChild
                  >
                    <Link href={`/services/${service.slug}`}>
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="rounded-full border-gray-300"
            asChild
          >
            <Link href="/services">Voir tous les services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
