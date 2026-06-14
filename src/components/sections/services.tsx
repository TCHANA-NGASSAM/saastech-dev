import Link from "next/link";
import ServicesGrid from "@/src/components/services-grid";
import { SectionHeader, SectionShell } from "@/src/components/section-shell";
import { Button } from "@/src/shadcn/components/ui/button";

export default function Services() {
  return (
    <SectionShell className="pt-16 sm:pt-20 lg:pt-24">
      <SectionHeader
        title="Nos Services"
        description="Une gamme complète de solutions digitales pour transformer votre entreprise"
      />

      <ServicesGrid />

      <div className="mt-12 text-center sm:mt-14">
        <Button variant="outline" className="rounded-full border-gray-300" asChild>
          <Link href="/services">Voir tous les services</Link>
        </Button>
      </div>
    </SectionShell>
  );
}
