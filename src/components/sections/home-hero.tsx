import Link from "next/link";
import HeroIllustration from "@/src/components/hero-illustration";
import { siteConfig } from "@/src/data/site";
import { Button } from "@/src/shadcn/components/ui/button";

function HeroWave() {
  return (
    <div className="pointer-events-none absolute right-0 bottom-0 left-0 leading-none">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-12 w-full sm:h-16 md:h-20"
        aria-hidden
      >
        <path
          fill="#ffffff"
          d="M0,72 C240,120 480,24 720,72 C960,120 1200,24 1440,72 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#1e56a0]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-24 pb-20 sm:gap-12 sm:px-6 sm:pt-28 sm:pb-24 lg:grid-cols-2 lg:gap-16 lg:pb-28 lg:pt-32">
        {/* Texte */}
        <div className="text-center lg:text-left">
          <p className="mb-4 text-xs font-semibold tracking-wide text-blue-100 uppercase sm:text-sm">
            Agence digitale — Europe & Afrique
          </p>

          <h1 className="mb-5 text-3xl leading-tight font-bold text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.15] lg:text-5xl">
            Développer votre activité avec la transformation digitale
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-blue-50/95 sm:text-lg lg:mx-0">
            {siteConfig.tagline} Nous vous accompagnons à chaque étape de votre
            projet web, mobile ou SaaS.
          </p>

          <Button
            asChild
            className="h-12 rounded-full bg-white px-8 text-sm font-bold tracking-wide text-slate-900 uppercase shadow-lg hover:bg-blue-50"
          >
            <Link href="/contact">Découvrir {siteConfig.name}</Link>
          </Button>
        </div>

        {/* Illustration */}
        <div className="flex justify-center lg:justify-end">
          <HeroIllustration />
        </div>
      </div>

      <HeroWave />
    </section>
  );
}
