"use client";

import Link from "next/link";
import { SectionShell } from "@/src/components/section-shell";
import { siteConfig } from "@/src/data/site";
import { Button } from "@/src/shadcn/components/ui/button";
import { Check, Clock, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const consultationDetails = [
  {
    icon: Target,
    title: "Audit stratégique",
    description: "Analyse approfondie de votre projet et objectifs business",
  },
  {
    icon: Zap,
    title: "Solutions sur mesure",
    description: "Recommandations personnalisées adaptées à votre contexte",
  },
  {
    icon: Clock,
    title: "Roadmap claire",
    description: "Calendrier de réalisation et étapes d'implémentation",
  },
];

export default function Pricing() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <SectionShell
      variant="dark"
      size="lg"
      className="relative overflow-hidden"
      containerClassName="relative z-10 max-w-6xl"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-10 text-center sm:mb-12 lg:mb-14"
      >
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/50 bg-blue-500/10 px-3 py-1.5 sm:mb-6 sm:px-4 sm:py-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
          <span className="text-xs font-semibold text-blue-300 sm:text-sm">
            Prenez rendez-vous
          </span>
        </span>
        <h2 className="mb-4 text-3xl leading-tight font-bold text-white sm:mb-6 sm:text-4xl md:text-5xl">
          Démarrons votre transformation{" "}
          <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            avec une consultation stratégique
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-base text-gray-300 sm:text-lg">
          Discutez directement avec nous pour définir la meilleure stratégie pour
          votre projet
        </p>
      </motion.div>

      <div className="mb-10 grid items-center gap-8 lg:mb-12 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4 text-2xl font-bold text-white sm:mb-6 sm:text-3xl">
            Ce que vous obtenez
          </h3>
          <p className="mb-8 leading-relaxed text-gray-300">
            Notre équipe analysera votre situation pour proposer une solution
            adaptée à votre contexte, vos ressources et vos ambitions.
          </p>

          <ul className="mb-8 space-y-4 sm:mb-10">
            {[
              "Diagnostic complet de votre projet",
              "Stratégie personnalisée",
              "Estimation réaliste",
              "Support transparent",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <Check className="h-5 w-5 shrink-0 text-blue-400" />
                <span className="text-gray-200">{item}</span>
              </li>
            ))}
          </ul>

          <Button
            asChild
            className="h-12 w-full rounded-lg bg-linear-to-r from-blue-500 to-blue-600 text-lg font-semibold text-white sm:h-14"
          >
            <Link href="/contact">Prendre rendez-vous</Link>
          </Button>

          <p className="mt-4 text-center text-sm text-gray-400">
            Consultation de 45–60 minutes, sans engagement
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-4"
        >
          {consultationDetails.map((detail) => {
            const Icon = detail.icon;
            return (
              <motion.div
                key={detail.title}
                variants={itemVariants}
                className="group cursor-pointer rounded-lg border border-slate-700 bg-slate-800 p-6 transition-all hover:border-blue-500/50"
              >
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 transition-all group-hover:bg-blue-500/20">
                    <Icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-semibold text-white">
                      {detail.title}
                    </h4>
                    <p className="text-sm text-gray-400">{detail.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="rounded-lg border border-blue-500/20 bg-linear-to-r from-blue-600/10 via-cyan-600/10 to-blue-600/10 p-5 text-center sm:p-8"
      >
        <p className="mb-4 text-sm text-gray-300 sm:text-base">
          {siteConfig.valueProposition}
        </p>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          <div>
            <p className="text-2xl font-bold text-blue-400">0€</p>
            <p className="text-sm text-gray-400">Consultation initiale</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-400">48h</p>
            <p className="text-sm text-gray-400">Devis personnalisé</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-400">100%</p>
            <p className="text-sm text-gray-400">Transparence</p>
          </div>
        </div>
      </motion.div>
    </SectionShell>
  );
}
