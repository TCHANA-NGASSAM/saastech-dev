"use client";
import { Button } from "@/src/shadcn/components/ui/button";
import { Check, Zap, Target, Clock } from "lucide-react";
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
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-24 px-6 bg-slate-900 relative overflow-hidden">
      {/* Décoration de fond */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/50 mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-300 text-sm font-semibold">Prennez rendez-vous</span>
          </span>
          <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Démarrons votre transformation
            <br />
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              avec une consultation stratégique
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discutez directement avec nos experts pour définir la meilleure stratégie pour votre projet
          </p>
        </motion.div>

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Gauche - Texte et CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Ce que vous obtenez
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {"Notre équipe d'experts analysera votre situation pour proposer une solution adaptée à votre contexte, vos ressources et vos ambitions."}
            </p>
            
            <ul className="space-y-4 mb-10">
              {["Diagnostic complet de votre projet", "Stratégie personnalisée", "Estimation réaliste", "Support transparent"].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center gap-3"
                  whileHover={{ x: 4 }}
                >
                  <Check className="w-5 h-5 text-blue-400 shrink-0" />
                  <span className="text-gray-200">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-lg h-14 px-10 text-lg font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all w-full">
                Prendre rendez-vous
              </Button>
            </motion.div>

            <p className="text-sm text-gray-400 mt-4 text-center">
              ⏱️ Consultation de 45-60 minutes, sans engagement
            </p>
          </motion.div>

          {/* Droite - Cards détail */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-4"
          >
            {consultationDetails.map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500/50 transition-all group cursor-pointer"
                >
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-all">
                        <Icon className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {detail.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Footer avec stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-linear-to-r from-blue-600/10 via-cyan-600/10 to-blue-600/10 rounded-lg border border-blue-500/20 p-8 text-center"
        >
          <p className="text-gray-300 mb-4">
            Rejoignez les <span className="text-white font-semibold">500+</span> entreprises qui font confiance à nos experts
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div>
              <p className="text-2xl font-bold text-blue-400">98%</p>
              <p className="text-sm text-gray-400">Satisfaction clients</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-400">48h</p>
              <p className="text-sm text-gray-400">Devis </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-400">0€</p>
              <p className="text-sm text-gray-400">Aucun engagement</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
