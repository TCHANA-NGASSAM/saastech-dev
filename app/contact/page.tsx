import type { Metadata } from "next";
import ContactForm from "@/src/components/contact-form";
import ContactInfo from "@/src/components/contact-info";
import MarketingShell from "@/src/components/marketing-shell";
import PageHero from "@/src/components/page-hero";
import { SectionShell } from "@/src/components/section-shell";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez SAASTECH pour discuter de votre projet web, mobile ou SaaS. Réponse sous 24–48h ouvrées.",
};

export default function ContactPage() {
  return (
    <MarketingShell className="bg-linear-to-br from-slate-50 via-white to-blue-50">
      <PageHero
        title="Contactez-nous"
        description="Nous sommes à votre écoute. Discutons de votre projet et transformons vos idées en réalité."
      />

      <SectionShell size="compact" className="bg-transparent">
        <div className="grid grid-cols-1 items-start gap-6 sm:gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ContactForm variant="page" />
          </div>
          <div className="lg:col-span-4">
            <ContactInfo variant="page" />
          </div>
        </div>
      </SectionShell>
    </MarketingShell>
  );
}
