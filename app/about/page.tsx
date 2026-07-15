"use client";

import Navbar from "@/src/components/navbar/navbar";
import Footer from "@/src/components/sections/footer";
import { Card, CardContent } from "@/src/shadcn/components/ui/card";
import { Button } from "@/src/shadcn/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/src/shadcn/components/ui/carousel";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Zap,
  Users,
  Award,
  Lightbulb,
  Rocket,
  Check,
  Globe,
  Brain,
  Heart,
  Code,
  Palette,
  Briefcase,
  TrendingUp,
  Shield,
  Clock,
  Star,
} from "lucide-react";
import { services } from "@/src/data/services";
import Link from "next/link";

export default function About() {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: valuesRef, inView: valuesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: teamRef, inView: teamInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: processRef, inView: processInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Nous repoussons constamment les limites de la technologie pour vous offrir des solutions avant-gardistes.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Vos objectifs deviennent nos objectifs. Nous travaillons en partenariat étroit pour votre succès.",
    },
    {
      icon: Heart,
      title: "Excellence",
      description:
        "Chaque projet mérite notre meilleur travail. La qualité n'est jamais un compromis.",
    },
  ];

  const strengths = [
    "Expertise technique multidisciplinaire",
    "Équipe passionnée et innovante",
    "Solutions scalables et durables",
    "Support client réactif 24/7",
    "Portfolio de 500+ projets réussis",
    "Partenaires des plus grandes marques",
  ];

  const timeline = [
    {
      year: "2009",
      title: "Fondation",
      description:
        "SAASTECH née de la passion pour la technologie et l'innovation digitale.",
    },
    {
      year: "2012",
      title: "Première Expansion",
      description:
        "Ouverture du bureau en Afrique pour servir le marché en croissance.",
    },
    {
      year: "2016",
      title: "500+ Projets",
      description:
        "Passage du cap des 500 projets réussis, reconnaissance du marché.",
    },
    {
      year: "2020",
      title: "Transformation",
      description:
        "Adaptation à la transformation digitale post-COVID, solutions innovantes.",
    },
    {
      year: "2024",
      title: "Bilan Actuel",
      description:
        "50+ experts, 1000+ clients satisfaits, 15 ans d'excellence.",
    },
  ];

  const testimonials = [
    {
      name: "Jean Dupont",
      role: "CEO, TechStart Paris",
      text: "SAASTECH a transformé notre présence digitale en 6 mois. Nos revenus ont augmenté de 150%.",
      rating: 5,
    },
    {
      name: "Marie Laurent",
      role: "Fondatrice, Agence Marketing",
      text: "L'équipe est professionnelle et comprend vraiment nos besoins. Un vrai partenaire.",
      rating: 5,
    },
    {
      name: "Pierre Moreau",
      role: "CTO, E-commerce Solutions",
      text: "Infrastructure scalable, equipe réactive. Exactement ce qu'il nous fallait.",
      rating: 5,
    },
    {
      name: "Sophie Bernard",
      role: "Responsable Produit, Startup",
      text: "Design exception, développement rapide. Nous avons lancé en 3 mois.",
      rating: 5,
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description:
        "Nous analysons votre contexte, vos défis et vos objectifs business.",
      duration: "2-3 semaines",
    },
    {
      step: "02",
      title: "Stratégie",
      description:
        "Création d'une feuille de route détaillée et validée ensemble.",
      duration: "1-2 semaines",
    },
    {
      step: "03",
      title: "Conception",
      description:
        "Design, wireframes et prototypes interactifs pour validation.",
      duration: "3-4 semaines",
    },
    {
      step: "04",
      title: "Développement",
      description: "Développement agile avec délivrables réguliers et tests.",
      duration: "6-plus semaines",
    },
    {
      step: "05",
      title: "Lancement",
      description: "Déploiement, monitoring et optimisation en production.",
      duration: "1-2 semaines",
    },
    {
      step: "06",
      title: "Support",
      description: "Support continu, maintenance et améliorations futures.",
      duration: "Ongoing",
    },
  ];

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
    <div className="bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section
        ref={statsRef}
        className="relative overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 py-24 md:py-32 lg:py-40 px-6"
      >
        {/* Decorative Background Elements */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              À propos de
              <span className="block bg-linear-to-r from-blue-400 via-blue-300 to-cyan-400 text-transparent bg-clip-text">
                SAASTECH
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-200">
              Votre partenaire technologique pour une transformation digitale
              réussie en Europe et en Afrique.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
          >
            {[
              { number: "500+", label: "Projets réussis", icon: Briefcase },
              { number: "50+", label: "Experts talentueux", icon: Users },
              { number: "98%", label: "Satisfaction clients", icon: Star },
              { number: "15+", label: "Années d'expérience", icon: Clock },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className="inline-block p-2 md:p-3 bg-blue-500/10 rounded-lg mb-2 md:mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-6 md:w-8 h-6 md:h-8 text-blue-400" />
                  </div>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400 mb-1 md:mb-2">
                    {stat.number}
                  </p>
                  <p className="text-xs md:text-sm lg:text-lg text-gray-300 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Notre histoire
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              15 ans de passion pour la technologie et l&apos;innovation
            </p>
          </motion.div>

          {/* Desktop Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="hidden lg:block relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-blue-500 to-cyan-500" />

            <div className="space-y-16">
              {timeline.map((event, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`flex gap-8 ${
                    idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 text-right">
                    <Card className="border border-gray-200 hover:shadow-xl transition-all hover:border-blue-400 h-full">
                      <CardContent className="p-8">
                        <p className="text-3xl font-bold text-blue-600 mb-2">
                          {event.year}
                        </p>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {event.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center Dot */}
                  <div className="flex justify-center shrink-0">
                    <div className="w-6 h-6 bg-blue-600 rounded-full ring-4 ring-white ring-offset-4 ring-offset-blue-50 relative z-10 mt-8" />
                  </div>

                  {/* Placeholder */}
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile & Tablet Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="lg:hidden space-y-6"
          >
            {timeline.map((event, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex gap-4"
              >
                {/* Timeline Marker */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-5 h-5 bg-blue-600 rounded-full ring-3 ring-blue-100" />
                  {idx < timeline.length - 1 && (
                    <div className="w-1 h-16 bg-linear-to-b from-blue-500 to-cyan-500 mt-2" />
                  )}
                </div>

                {/* Content */}
                <Card className="border border-gray-200 hover:shadow-lg transition-all flex-1">
                  <CardContent className="p-6">
                    <p className="text-2xl font-bold text-blue-600 mb-1">
                      {event.year}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos valeurs fondamentales
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident chaque décision et chaque projet
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="border border-gray-200 hover:shadow-lg transition-all h-full hover:border-blue-400">
                    <CardContent className="p-8">
                      <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
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
              Nos domaines d&apos;expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              6 piliers pour accompagner votre transformation
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((exp, idx) => {
              const Icon = exp.icon;
              return (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="border border-gray-200 hover:shadow-xl transition-all hover:border-blue-400 h-full group">
                    <CardContent className="p-8">
                      <div className="bg-linear-to-br from-blue-500/10 to-cyan-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-all">
                        <Icon className="w-7 h-7 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {exp.shortDescription}
                      </p>
                      {/* <div className="pt-4 border-t border-gray-200">
                        <p className="text-sm text-blue-600 font-semibold">
                          {exp.deliverables.length} projets réalisés
                        </p>
                        <p className="text-sm text-gray-500">
                        </p>
                      </div> */}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre processus
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une méthodologie éprouvée pour des résultats exceptionnels
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {process.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="border border-gray-200 hover:shadow-lg transition-all h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-cyan-500" />
                  <CardContent className="p-8">
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-4xl font-black text-transparent bg-linear-to-r from-blue-500 to-cyan-500 bg-clip-text">
                        {item.step}
                      </span>
                      <span className="text-sm text-gray-500 font-medium">
                        {item.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourquoi nous choisir ?
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Depuis plus de 15 ans, nous accompagnons des entreprises de
                toutes tailles dans leur transformation digitale. Notre approche
                combinie stratégie, design et technologie pour des résultats
                mesurables et durables.
              </p>

              <div className="space-y-4 mb-8">
                {strengths.map((strength, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex gap-4 items-start"
                  >
                    <div className="bg-blue-500 rounded-full p-1 mt-1 shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium">{strength}</p>
                  </motion.div>
                ))}
              </div>

              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 text-lg"
              >
                <Link href="/services">Découvrez nos services</Link>
              </Button>
            </motion.div>

            {/* Right side - Stats cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  icon: Rocket,
                  title: "Vélocité",
                  desc: "Déploiement rapide",
                  stat: "3x",
                },
                {
                  icon: Award,
                  title: "Qualité",
                  desc: "Standards élevés",
                  stat: "98%",
                },
                {
                  icon: Lightbulb,
                  title: "Créativité",
                  desc: "Solutions innovantes",
                  stat: "500+",
                },
                {
                  icon: Zap,
                  title: "Performance",
                  desc: "Ultra-optimisé",
                  stat: "99.9%",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={idx}
                    className="border border-gray-200 hover:shadow-lg transition-all"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <Icon className="w-8 h-8 text-blue-600" />
                        <span className="text-2xl font-bold text-blue-600">
                          {item.stat}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La satisfaction de nos clients est notre plus bel atout
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="border border-gray-200 hover:shadow-lg transition-all h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed italic">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="font-bold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre équipe incroyable
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              50+ experts passionnés répartis en Europe et en Afrique
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="px-4">
                {[
                  {
                    name: "Ted Brockinski",
                    role: "Lead Designer",
                    image:
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
                  },
                  {
                    name: "Jessie Roberts",
                    role: "Lead Developer",
                    image:
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
                  },
                  {
                    name: "Billie Peaker",
                    role: "Project Manager",
                    image:
                      "https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=300&h=300&fit=crop",
                  },
                  {
                    name: "Alex Johnson",
                    role: "Lead Strategist",
                    image:
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
                  },
                  {
                    name: "Sarah Williams",
                    role: "UX Specialist",
                    image:
                      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
                  },
                ].map((member, idx) => (
                  <CarouselItem
                    key={idx}
                    className="basis-full md:basis-1/2 lg:basis-1/3 flex justify-center"
                  >
                    <div className="text-center group">
                      <div className="relative mb-6 inline-block">
                        <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-200 border-4 border-gray-100 group-hover:border-blue-400 transition-all shadow-lg">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm">
                        {member.role}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 md:left-4 bg-white hover:bg-gray-100 text-gray-900" />
              <CarouselNext className="right-0 md:right-4 bg-white hover:bg-gray-100 text-gray-900" />
            </Carousel>
          </motion.div>

          {/* Additional Team Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { label: "Taux de rétention", value: "95%" },
              { label: "Temps de réponse moyen", value: "2h" },
              { label: "Projets en cours", value: "75+" },
              { label: "Satisfaction client", value: "4.9/5" },
            ].map((stat, idx) => (
              <Card key={idx} className="border border-gray-200">
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-linear-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Rejoignez les 500+ entreprises qui nous font confiance pour leur
              transformation digitale. Contactez-nous pour un audit gratuit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-semibold"
              >
                <Link href="/contact">Démarrer un projet</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full px-8 py-3 text-lg font-semibold"
              >
                <Link href="/contact">Prendre un rendez-vous</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
