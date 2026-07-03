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

export default function Home() {
  return (
    <div className="bg-white">
      {/* HERO SECTION  */}
      <Card className="relative bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 rounded-none min-h-[90vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/50">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-sm font-semibold">
                Experts en transformation digitale
              </span>
            </div>

            {/* Title */}
            <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-tight mb-6">
              <span className="text-white">
                Votre partenaire technologique
              </span>
              <br />
              <span className="bg-linear-to-r from-blue-400 via-blue-300 to-cyan-400 text-transparent bg-clip-text">
                de long terme.
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
              Stratégie, design et développement web sur mesure pour accélérer
              votre croissance en Europe et en Afrique.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 my-12 mb-12 max-w-2xl mx-auto">
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-400 mb-2">500+</p>
                <p className="text-gray-400 text-sm">Projets réussis</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-400 mb-2">98%</p>
                <p className="text-gray-400 text-sm">Satisfaction clients</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-400 mb-2">50+</p>
                <p className="text-gray-400 text-sm">Experts disponibles</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-full h-12 px-8 text-lg font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all">
                Démarrer gratuitement
              </Button>
              <Button
                variant="outline"
                className="border-blue-400/50 text-white rounded-full h-12 px-8 text-lg font-semibold hover:bg-blue-500/10"
              >
                En savoir plus
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
