import Navbar from "@/src/components/navbar/navbar";
import Features from "@/src/components/sections/features";
import FAQ from "@/src/components/sections/faq";
import Footer from "@/src/components/sections/footer";
import HomeHero from "@/src/components/sections/home-hero";
import Newsletter from "@/src/components/sections/newsletter";
import Portfolio from "@/src/components/sections/portfolio";
import Pricing from "@/src/components/sections/pricing";
import Process from "@/src/components/sections/process";
import Services from "@/src/components/sections/services";
import Testimonials from "@/src/components/sections/testimonials";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white">
      <Navbar variant="overlay" />
      <HomeHero />
      <Services />
      <Process />
      <Features />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Newsletter />
      <Footer />
    </div>
  );
}
