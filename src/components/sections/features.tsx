"use client";

import {
  MARKETING_CARD,
  MARKETING_CARD_CONTENT,
  MARKETING_CARD_HEADER,
  SECTION_GRID,
  SectionHeader,
  SectionShell,
} from "@/src/components/section-shell";
import { Card, CardContent, CardHeader } from "@/src/shadcn/components/ui/card";
import { Cpu, Layers, Palette, TrendingUp, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: Zap,
    title: "Performance",
    description:
      "Solutions ultra-rapides et optimisées pour une expérience utilisateur exceptionnelle",
  },
  {
    icon: Layers,
    title: "Scalabilité",
    description:
      "Infrastructure capable de grandir avec votre entreprise sans compromettre la qualité",
  },
  {
    icon: Palette,
    title: "Customisation",
    description:
      "Design et fonctionnalités adaptés à vos besoins métier spécifiques",
  },
  {
    icon: TrendingUp,
    title: "Croissance",
    description:
      "Stratégies digitales éprouvées pour accélérer votre développement commercial",
  },
  {
    icon: Users,
    title: "Support Réactif",
    description:
      "Équipe dédiée disponible pour vous accompagner à chaque étape",
  },
  {
    icon: Cpu,
    title: "Technologie Avancée",
    description:
      "Stack technologique moderne et fiable pour des solutions durables",
  },
];

export default function Features() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <SectionShell divider>
      <SectionHeader
        title="Ce qui nous rend différents"
        description="Découvrez pourquoi les entreprises nous font confiance pour transformer leur vision digitale"
      />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className={`${SECTION_GRID} md:grid-cols-2 lg:grid-cols-3`}
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card className={`h-full transition-all hover:border-blue-400 hover:shadow-lg ${MARKETING_CARD}`}>
                <CardHeader className={MARKETING_CARD_HEADER}>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </CardHeader>
                <CardContent className={MARKETING_CARD_CONTENT}>
                  <p className="leading-relaxed text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionShell>
  );
}
