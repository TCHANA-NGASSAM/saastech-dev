"use client";

import { Card, CardContent, CardHeader } from "@/src/shadcn/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/shadcn/components/ui/carousel";
import { Zap, Layers, Palette, TrendingUp, Users, Cpu } from "lucide-react";
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
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ce qui nous rend différents
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez pourquoi les entreprises nous font confiance pour
            transformer leur vision digitale
          </p>
        </motion.div>

        <div className="md:hidden">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <CarouselItem key={index} className="basis-full">
                    <motion.div variants={itemVariants}>
                      <Card className="border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all">
                        <CardHeader className="pb-3">
                          <motion.div
                            className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <Icon className="w-6 h-6 text-blue-600" />
                          </motion.div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {feature.title}
                          </h3>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-1/2 border border-gray-200 bg-white/90 shadow-sm hover:bg-white" />
            <CarouselNext className="right-0 translate-x-1/2 border border-gray-200 bg-white/90 shadow-sm hover:bg-white" />
          </Carousel>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all">
                  <CardHeader className="pb-3">
                    <motion.div
                      className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-6 h-6 text-blue-600" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
