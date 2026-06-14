import type { Metadata } from "next";
import MarketingShell from "@/src/components/marketing-shell";
import PageHero from "@/src/components/page-hero";
import ServicesGrid from "@/src/components/services-grid";
import { SectionHeader, SectionShell } from "@/src/components/section-shell";
import CTA from "@/src/components/sections/cta";
import Process from "@/src/components/sections/process";

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

      <SectionShell size="compact">
        <SectionHeader
          align="left"
          title="Une offre complète"
          description="Chaque service est pensé pour répondre à un besoin précis. Explorez le détail de nos expertises et contactez-nous pour un devis sur mesure."
        />

        <ServicesGrid showFeatures linkLabel="Voir le détail" />
      </SectionShell>

      <Process />
      <CTA />
    </MarketingShell>
  );
}
