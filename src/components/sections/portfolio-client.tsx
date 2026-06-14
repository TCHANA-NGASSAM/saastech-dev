"use client";

import { Button } from "@/src/shadcn/components/ui/button";
import { Card, CardContent } from "@/src/shadcn/components/ui/card";
import { ArrowUpRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface Project {
  title: string;
  category: string;
  gradient: string;
  description: string;
  impact: string;
  impactLabel: string;
  tech: string[];
  icon: string;
}

interface PortfolioClientProps {
  caseStudies: Project[];
}

export default function PortfolioClient({ caseStudies }: PortfolioClientProps) {
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
            <motion.div key={index} variants={itemVariants}>
              <Card className="group border-0 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 hover:-translate-y-1 cursor-pointer h-full">
                {/* Top Visual */}
                <div
                  className={`h-32 bg-linear-to-br ${project.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center text-5xl opacity-20 group-hover:opacity-40 transition-opacity"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    {project.icon}
                  </motion.div>
                </div>

                <CardContent className="p-5 space-y-4">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                      {project.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Impact Metric */}
                  <div className="pt-2 border-t border-gray-200">
                    <motion.p
                      className="text-2xl font-black text-blue-600 mb-1"
                      whileHover={{ scale: 1.1 }}
                    >
                      {project.impact}
                    </motion.p>
                    <p className="text-xs text-gray-500 font-medium">
                      {project.impactLabel}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.slice(0, 2).map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.tech.length > 2 && (
                      <span className="text-xs text-gray-500 px-2 py-1">
                        +{project.tech.length - 2}
                      </span>
                    )}
                  </div>

                  {/* CTA Link */}
                  <Button
                    variant="ghost"
                    className="w-full text-blue-600 hover:bg-blue-50 group/btn font-semibold mt-2"
                  >
                    Voir le détail
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
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
