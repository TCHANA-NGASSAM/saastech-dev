export type Project = {
  slug: string;
  title: string;
  category: string;
  gradient: string;
  description: string;
  /** Ce que ce type de projet couvre — pas un résultat client fictif */
  scope: string;
  scopeLabel: string;
  tech: string[];
  icon: string;
};

export const projects: Project[] = [
  {
    slug: "plateforme-saas-ecommerce",
    title: "Plateforme SaaS E-commerce",
    category: "SaaS",
    gradient: "from-blue-500 to-blue-600",
    description: "Boutiques en ligne, catalogue produits et tunnel de commande.",
    scope: "MVP → Scale",
    scopeLabel: "Parcours type",
    tech: ["Next.js", "PostgreSQL", "Stripe"],
    icon: "💼",
  },
  {
    slug: "application-mobile-finance",
    title: "Application Mobile Finance",
    category: "Mobile",
    gradient: "from-purple-500 to-purple-600",
    description: "Applications iOS et Android pour services financiers ou fintech.",
    scope: "Cross-platform",
    scopeLabel: "iOS & Android",
    tech: ["React Native", "Node.js", "MongoDB"],
    icon: "📱",
  },
  {
    slug: "transformation-erp",
    title: "Outils métier sur mesure",
    category: "Enterprise",
    gradient: "from-green-500 to-green-600",
    description: "ERP, CRM ou outils internes adaptés à vos processus.",
    scope: "Sur mesure",
    scopeLabel: "Processus métier",
    tech: ["APIs", "Cloud", "TypeScript"],
    icon: "⚙️",
  },
  {
    slug: "portail-smart-home",
    title: "Portail IoT & Domotique",
    category: "IoT",
    gradient: "from-cyan-500 to-cyan-600",
    description: "Interfaces web pour piloter capteurs et équipements connectés.",
    scope: "Temps réel",
    scopeLabel: "Monitoring",
    tech: ["IoT", "Python", "React"],
    icon: "🏠",
  },
  {
    slug: "marketplace-b2b",
    title: "Marketplace B2B",
    category: "SaaS",
    gradient: "from-indigo-500 to-indigo-600",
    description: "Place de marché pour mettre en relation offreurs et acheteurs pro.",
    scope: "Multi-vendeurs",
    scopeLabel: "Modèle marketplace",
    tech: ["Vue.js", "Django", "PostgreSQL"],
    icon: "🛍️",
  },
  {
    slug: "application-logistique",
    title: "Application Logistique",
    category: "Enterprise",
    gradient: "from-orange-500 to-orange-600",
    description: "Suivi de flotte, livraisons et opérations terrain.",
    scope: "Terrain",
    scopeLabel: "Mobile-first",
    tech: ["React", "Node.js", "Redis"],
    icon: "📦",
  },
  {
    slug: "plateforme-elearning",
    title: "Plateforme E-learning",
    category: "Education",
    gradient: "from-pink-500 to-pink-600",
    description: "Cours en ligne, parcours apprenants et espace formateur.",
    scope: "LMS",
    scopeLabel: "Formation digitale",
    tech: ["Next.js", "Strapi", "AWS"],
    icon: "📚",
  },
  {
    slug: "dashboard-analytics",
    title: "Dashboard Analytics",
    category: "Data",
    gradient: "from-teal-500 to-teal-600",
    description: "Tableaux de bord et indicateurs pour piloter votre activité.",
    scope: "KPIs",
    scopeLabel: "Visualisation data",
    tech: ["React", "D3.js", "ClickHouse"],
    icon: "📊",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(limit = 8): Project[] {
  return projects.slice(0, limit);
}
