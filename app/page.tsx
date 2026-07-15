import Navbar from "@/src/components/navbar/navbar";
import Features from "@/src/components/sections/features";
import Services from "@/src/components/sections/services";
import Process from "@/src/components/sections/process";
import Portfolio from "@/src/components/sections/portfolio";
import Testimonials from "@/src/components/sections/testimonials";
import FAQ from "@/src/components/sections/faq";
import Pricing from "@/src/components/sections/pricing";
import Newsletter from "@/src/components/sections/newsletter";
import Footer from "@/src/components/sections/footer";
import { Button } from "@/src/shadcn/components/ui/button";
import { Card } from "@/src/shadcn/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* HERO SECTION  */}
      <Card className="relative overflow-hidden rounded-none bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 min-h-[90vh]">
        {/* Background Image */}
        <Image
          src="/images/hero.jpg"
          alt="Hero Image"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl sm:h-96 sm:w-96" />
        </div>

        {/* Content */}
        <div className="relative z-20 flex min-h-[90vh] items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/50 bg-blue-500/20 px-4 py-2 sm:mb-8">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
              <span className="text-sm font-semibold text-blue-300">
                Experts en transformation digitale
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Votre partenaire technologique</span>
              <span className="mt-2 block bg-linear-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                de long terme.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mb-8 max-w-2xl text-base font-light leading-relaxed text-gray-200 sm:text-lg md:text-xl lg:text-2xl">
              Stratégie, design et développement web sur mesure pour accélérer
              votre croissance en Europe et en Afrique.
            </p>

            {/* Stats */}
            <div className="mx-auto mb-8 mt-8 flex max-w-2xl flex-row gap-3 sm:mt-12 sm:flex-row sm:gap-4">
              <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur-sm sm:p-4">
                <p className="mb-1 text-2xl font-bold text-blue-400 sm:text-3xl">
                  500+
                </p>
                <p className="text-xs text-gray-400 sm:text-sm">
                  Projets réussis
                </p>
              </div>
              <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur-sm sm:p-4">
                <p className="mb-1 text-2xl font-bold text-blue-400 sm:text-3xl">
                  98%
                </p>
                <p className="text-xs text-gray-400 sm:text-sm">
                  Satisfaction clients
                </p>
              </div>
              <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur-sm sm:p-4">
                <p className="mb-1 text-2xl font-bold text-blue-400 sm:text-3xl">
                  50+
                </p>
                <p className="text-xs text-gray-400 sm:text-sm">
                  Experts disponibles
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-full bg-linear-to-r from-blue-500 to-blue-600 px-8 text-lg font-semibold text-white transition-all hover:shadow-xl hover:shadow-blue-500/50"
              >
                <Link href="/contact">Démarrer gratuitement</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-blue-400/50 px-8 text-lg font-semibold text-white hover:bg-blue-500/10"
              >
                <Link href="/about">En savoir plus</Link>
              </Button>
            </div>
          </div>
        </div>

        <Navbar />
      </Card>

      {/* SERVICES SECTION */}
      <Services />

      {/* PROCESS SECTION */}
      <Process />

      {/* FEATURES SECTION */}
      <Features />

      {/* PORTFOLIO SECTION */}
      <Portfolio />

      {/* TESTIMONIALS SECTION */}
      <Testimonials />

      {/* FAQ SECTION */}
      <FAQ />

      {/* PRICING SECTION */}
      <Pricing />

      {/* NEWSLETTER SECTION */}
      <Newsletter />

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
}
