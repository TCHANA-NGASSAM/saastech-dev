import Link from "next/link";
import { SectionShell } from "@/src/components/section-shell";
import { siteConfig } from "@/src/data/site";
import { Button } from "@/src/shadcn/components/ui/button";
import { Card } from "@/src/shadcn/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function CTA() {
  return (
    <SectionShell variant="gradient">
      <Card className="border-0 bg-white/10 backdrop-blur-sm">
        <div className="p-8 sm:p-10 md:p-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-white sm:mb-6 sm:text-4xl">
                Prêt à lancer votre projet digital ?
              </h2>
              <p className="mb-6 text-base text-white/90 sm:mb-8 sm:text-lg">
                De la stratégie au déploiement, nous vous accompagnons avec une
                équipe dédiée, des délais clairs et un suivi transparent.
              </p>
              <ul className="mb-6 space-y-3 sm:mb-8 sm:space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-green-300" />
                  <span className="text-sm text-white sm:text-base">Consultation gratuite</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-green-300" />
                  <span className="text-sm text-white sm:text-base">Devis transparent</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-green-300" />
                  <span className="text-sm text-white sm:text-base">
                    Suivi direct avec l&apos;équipe
                  </span>
                </li>
              </ul>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button
                  asChild
                  className="h-12 w-full rounded-lg bg-white text-blue-600 hover:bg-white/90 sm:w-auto"
                >
                  <Link href="/contact">Planifier une consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 w-full rounded-lg border-white text-white hover:bg-white/10 sm:w-auto"
                >
                  <Link href="/services">Voir nos services</Link>
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-xs rounded-2xl bg-white/20 p-6 text-center sm:p-8">
                <p className="mb-4 text-sm font-medium text-white/90 sm:text-base">
                  {siteConfig.valueProposition}
                </p>
                <hr className="my-4 border-white/30 sm:my-6" />
                <div className="grid grid-cols-3 gap-2">
                  {siteConfig.highlights.map((item) => (
                    <div key={item.label}>
                      <p className="text-lg font-bold text-white sm:text-xl">{item.value}</p>
                      <p className="text-[10px] text-white/70 sm:text-xs">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </SectionShell>
  );
}
