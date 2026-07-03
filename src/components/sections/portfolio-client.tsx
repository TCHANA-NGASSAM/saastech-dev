"use client";

import { Button } from "@/src/shadcn/components/ui/button";
import { Card, CardContent } from "@/src/shadcn/components/ui/card";
import { ArrowUpRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import ProjetCard from "../projetCard";

type projecType = {
  title: string;
  category: string;
  description: string;
  price: string;
  company: string;
  badge: string;
};

export default function PortfolioClient({
  caseStudies,
}: {
  caseStudies: projecType[];
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="portfolio"
      className="py-24 px-6 bg-linear-to-b from-white via-gray-50 to-white scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-blue-50 border border-blue-200">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 text-sm font-semibold">
              Nos succès
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 leading-tight">
            Projets qui{" "}
            <span className="bg-linear-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
              transforment
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez comment nos solutions innovantes ont généré des résultats
            spectaculaires
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {caseStudies.map((project, index) => (
             <ProjetCard key={index} project={project}  />
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-full h-12 px-8 font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            <Link href={"/projet"}>Explorer tout les projets</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
