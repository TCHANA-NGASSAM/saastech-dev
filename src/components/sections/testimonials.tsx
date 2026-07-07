"use client";

import { Card, CardContent } from "@/src/shadcn/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    name: "Jean Dupont",
    company: "TechStart Paris",
    text: "SAASTECH a transformé notre présence digitale. Leurs solutions sont innovantes et véritablement adaptées à nos besoins.",
    rating: 5,
  },
  {
    name: "Marie Laurent",
    company: "Agence Marketing Pro",
    text: "L'équipe est professionnelle et réactive. Notre site web a généré 40% de leads en plus en 3 mois.",
    rating: 5,
  },
  {
    name: "Pierre Moreau",
    company: "E-commerce Solutions",
    text: "Un vrai partenaire pour la croissance. Les résultats parlent d'eux-mêmes. Hautement recommandé!",
    rating: 5,
  },
  {
    name: "Sophie Bernard",
    company: "Startup Innovation",
    text: "Excellent travail sur la conception UX/UI. L'équipe comprend vraiment notre vision et la met en œuvre parfaitement.",
    rating: 5,
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
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Retours de nos clients
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez ce que nos partenaires pensent de nos solutions
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border border-gray-200 hover:shadow-lg transition-all hover:border-blue-400">
                <CardContent className="pt-6">
                  <motion.div
                    className="flex gap-1 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {testimonial.text}
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
