"use client";

import Navbar from "@/src/components/navbar/navbar";
import { Button } from "@/src/shadcn/components/ui/button";
import { Card, CardContent } from "@/src/shadcn/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Plateforme E-commerce",
    category: "Web App",
    description:
      "Solution complète de vente en ligne avec paiement sécurisé et gestion avancée des commandes.",
    image: "images/anorake.webp",
    impact: "+45%",
    impactLabel: "augmentation des ventes",
    tech: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "Dashboard Analytics",
    category: "Data",
    description:
      "Visualisation des indicateurs clés en temps réel avec génération automatique de rapports.",
    image: "images/anorake.webp",
    impact: "2M+",
    impactLabel: "données analysées",
    tech: ["React", "Chart.js", "Node.js"],
  },
  {
    title: "Application Mobile",
    category: "Mobile",
    description:
      "Application mobile cross-platform offrant une expérience utilisateur fluide.",
    image: "images/anorake.webp",
    impact: "50K+",
    impactLabel: "utilisateurs",
    tech: ["React Native", "Firebase", "TypeScript"],
  },
  {
    title: "Plateforme E-commerce",
    category: "Web App",
    description:
      "Solution complète de vente en ligne avec paiement sécurisé et gestion avancée des commandes.",
    image: "images/anorake.webp",
    impact: "+45%",
    impactLabel: "augmentation des ventes",
    tech: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "Dashboard Analytics",
    category: "Data",
    description:
      "Visualisation des indicateurs clés en temps réel avec génération automatique de rapports.",
    image: "images/anorake.webp",
    impact: "2M+",
    impactLabel: "données analysées",
    tech: ["React", "Chart.js", "Node.js"],
  },
  {
    title: "Application Mobile",
    category: "Mobile",
    description:
      "Application mobile cross-platform offrant une expérience utilisateur fluide.",
    image: "images/anorake.webp",
    impact: "50K+",
    impactLabel: "utilisateurs",
    tech: ["React Native", "Firebase", "TypeScript"],
  },
  {
    title: "Plateforme E-commerce",
    category: "Web App",
    description:
      "Solution complète de vente en ligne avec paiement sécurisé et gestion avancée des commandes.",
    image: "images/anorake.webp",
    impact: "+45%",
    impactLabel: "augmentation des ventes",
    tech: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "Dashboard Analytics",
    category: "Data",
    description:
      "Visualisation des indicateurs clés en temps réel avec génération automatique de rapports.",
    image: "images/anorake.webp",
    impact: "2M+",
    impactLabel: "données analysées",
    tech: ["React", "Chart.js", "Node.js"],
  },
  {
    title: "Application Mobile",
    category: "Mobile",
    description:
      "Application mobile cross-platform offrant une expérience utilisateur fluide.",
    image: "images/anorake.webp",
    impact: "50K+",
    impactLabel: "utilisateurs",
    tech: ["React Native", "Firebase", "TypeScript"],
  },
];

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Nos Projets
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos réalisations et les projets sur lesquels nous avons travaillé.
            </p>
          </div>

          {/* Grille de projets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Contenu */}
                <CardContent className="p-6 flex flex-col">

                  {/* Catégorie */}
                  <span className="w-fit text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700 mb-4">
                    {project.category}
                  </span>

                  {/* Titre */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-md bg-gray-100 text-gray-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Statistique */}
                  <div className="border-t pt-4 mb-5">
                    <p className="text-3xl font-black text-blue-600">
                      {project.impact}
                    </p>
                    <p className="text-sm text-gray-500">
                      {project.impactLabel}
                    </p>
                  </div>

                  {/* Bouton */}
                  <Button className="w-full px-10 py-7 rounded-full cursor-pointer ">
                    Voir le projet
                    <ArrowUpRight className="w-4 h-4 ml-2 transition-transform" />
                  </Button>

                </CardContent>
              </Card>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
}