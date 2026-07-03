"use client";

import Navbar from "@/src/components/navbar/navbar";
import PageHero from "@/src/components/page-hero";
import ProjetCard from "@/src/components/projetCard";
import CTA from "@/src/components/sections/cta";
import Footer from "@/src/components/sections/footer";
import { Button } from "@/src/shadcn/components/ui/button";
import { Card, CardContent } from "@/src/shadcn/components/ui/card";
import { ArrowUpRight, Bookmark } from "lucide-react";

type projecType = {
  title: string;
  category: string;
  description: string;
  price: string;
  company: string;
  badge: string;
};

const projects : projecType[] = [
  {
    title: "Plateforme E-commerce",
    category: "Web App",
    description:
      "Solution complète de vente en ligne avec paiement sécurisé et gestion avancée des commandes.",
    price: "$120/hr",
    company: "Nike",
    badge: "Senior UI Developer",
  },
  {
    title: "Dashboard Analytics",
    category: "Data",
    description:
      "Visualisation des indicateurs clés en temps réel avec génération automatique de rapports.",
    price: "$150/hr",
    company: "Google",
    badge: "Senior Backend Engineer",
  },
  {
    title: "Azure Data Pipeline",
    category: "Data",
    description:
      "Architecture cloud pour ingestion, traitement et stockage de données à grande échelle.",
    price: "$125-145/hr",
    company: "Airbnb",
    badge: "Azure Data Engineer",
  },
  {
    title: "Plateforme E-commerce",
    category: "Web App",
    description:
      "Solution complète de vente en ligne avec paiement sécurisé et gestion avancée des commandes.",
    price: "$120/hr",
    company: "Nike",
    badge: "Senior UI Developer",
  },
  {
    title: "Dashboard Analytics",
    category: "Data",
    description:
      "Visualisation des indicateurs clés en temps réel avec génération automatique de rapports.",
    price: "$150/hr",
    company: "Google",
    badge: "Senior Backend Engineer",
  },
  {
    title: "Azure Data Pipeline",
    category: "Data",
    description:
      "Architecture cloud pour ingestion, traitement et stockage de données à grande échelle.",
    price: "$125-145/hr",
    company: "Airbnb",
    badge: "Azure Data Engineer",
  },
];

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      <PageHero
        title="Nos Projets"
        description="Découvrez nos réalisations et les projets sur lesquels nous avons travaillé."
      />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
             <ProjetCard key={index} project={project}  />
            ))}
          </div>
        </div>
      </div>

      <CTA />
      <Footer />
    </div>
  );
}
