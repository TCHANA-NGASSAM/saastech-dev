"use client";

import {
  MARKETING_CARD,
  MARKETING_CARD_CONTENT,
  SECTION_GRID,
  SectionHeader,
  SectionShell,
} from "@/src/components/section-shell";
import { Card, CardContent } from "@/src/shadcn/components/ui/card";
import { Handshake, Rocket, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const commitments = [
  {
    icon: Handshake,
    title: "Transparence totale",
    text: "Devis clair, délais réalistes et communication directe à chaque étape du projet.",
  },
  {
    icon: Rocket,
    title: "Accompagnement personnalisé",
    text: "Un interlocuteur dédié, des solutions adaptées à votre contexte et une écoute attentive.",
  },
  {
    icon: Zap,
    title: "Réactivité",
    text: "Réponse sous 48h ouvrées, consultation gratuite et devis clair avant tout engagement.",
  },
  {
    icon: Shield,
    title: "Engagement qualité",
    text: "Méthode structurée, livrables définis à l'avance et communication régulière tout au long du projet.",
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <SectionShell variant="muted">
      <SectionHeader
        title="Notre engagement"
        description="Voici ce que vous pouvez attendre de nous à chaque étape de votre projet."
      />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className={`${SECTION_GRID} sm:grid-cols-2 lg:grid-cols-4`}
      >
        {commitments.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card className={`h-full transition-all hover:border-blue-400 hover:shadow-lg ${MARKETING_CARD}`}>
                <CardContent className={`${MARKETING_CARD_CONTENT} pt-6`}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mb-3 font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionShell>
  );
}
