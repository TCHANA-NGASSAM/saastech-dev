import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Code2,
  Megaphone,
  Settings,
  Smartphone,
  Zap,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  icon: LucideIcon;
  gradient: string;
  features: string[];
  deliverables: string[];
  useCases: string[];
};

export const services: Service[] = [
  {
    slug: "developpement-web",
    title: "Développement Web",
    shortDescription:
      "Sites web modernes et responsive construits avec les dernières technologies.",
    overview:
      "Nous concevons et développons des sites vitrines, landing pages et applications web sur mesure. Performance, accessibilité et SEO sont intégrés dès la conception pour garantir une expérience fluide sur tous les appareils.",
    icon: Code2,
    gradient: "from-blue-600 to-slate-800",
    features: [
      "Design responsive et mobile-first",
      "Optimisation Core Web Vitals",
      "CMS headless ou intégration sur mesure",
      "Déploiement CI/CD et hébergement cloud",
    ],
    deliverables: [
      "Maquettes et prototype interactif",
      "Application web production-ready",
      "Documentation technique et guide éditorial",
      "Formation à la prise en main",
    ],
    useCases: [
      "Refonte de site corporate",
      "Landing page produit ou campagne marketing",
      "Portail client ou extranet léger",
    ],
  },
  {
    slug: "applications-mobiles",
    title: "Applications Mobiles",
    shortDescription: "Applications iOS et Android performantes et intuitives.",
    overview:
      "De la validation du concept au déploiement sur les stores, nous livrons des applications natives ou cross-platform alignées sur vos parcours utilisateurs et vos contraintes métier.",
    icon: Smartphone,
    gradient: "from-slate-800 to-cyan-700",
    features: [
      "React Native ou développement natif selon le besoin",
      "Mode offline et synchronisation",
      "Notifications push et analytics",
      "Publication App Store et Google Play",
    ],
    deliverables: [
      "Spécifications fonctionnelles et UX mobile",
      "Application testée sur appareils réels",
      "Soumission stores et suivi des releases",
      "Plan de maintenance évolutive",
    ],
    useCases: [
      "Application métier terrain",
      "Marketplace ou service B2C",
      "Companion app pour un produit SaaS existant",
    ],
  },
  {
    slug: "solutions-saas",
    title: "Solutions SaaS",
    shortDescription:
      "Plateformes en ligne scalables et faciles à utiliser pour votre business.",
    overview:
      "Nous construisons des produits SaaS multi-tenant avec authentification, facturation, tableaux de bord et API — pensés pour évoluer avec votre base utilisateurs sans refonte coûteuse.",
    icon: Settings,
    gradient: "from-blue-900 to-blue-600",
    features: [
      "Architecture multi-tenant sécurisée",
      "Abonnements et paiements récurrents",
      "Tableaux de bord et reporting",
      "API REST ou GraphQL documentée",
    ],
    deliverables: [
      "MVP fonctionnel avec parcours clés",
      "Back-office administration",
      "Infrastructure scalable (cloud)",
      "Monitoring et alerting opérationnel",
    ],
    useCases: [
      "Lancement d'un nouveau produit SaaS",
      "Modernisation d'un outil interne en produit commercial",
      "Extension d'une offre existante vers le cloud",
    ],
  },
  {
    slug: "solutions-enterprise",
    title: "Solutions Enterprise",
    shortDescription:
      "Systèmes ERP et CRM propriétaires adaptés à votre entreprise.",
    overview:
      "Quand les solutions du marché ne couvrent pas vos processus, nous développons des ERP, CRM et outils métiers sur mesure — intégrés à votre SI existant.",
    icon: Zap,
    gradient: "from-slate-900 to-blue-700",
    features: [
      "Modélisation des processus métier",
      "Intégrations ERP, CRM, comptabilité",
      "Workflows et validations multi-niveaux",
      "Sécurité, audit trail et conformité",
    ],
    deliverables: [
      "Cartographie fonctionnelle détaillée",
      "Application métier déployée en production",
      "Connecteurs avec systèmes tiers",
      "Accompagnement au changement",
    ],
    useCases: [
      "Remplacement d'outils Excel critiques",
      "CRM verticalisé pour un secteur spécifique",
      "Orchestration de processus inter-services",
    ],
  },
  {
    slug: "automatisation-ia",
    title: "Automatisation IA",
    shortDescription:
      "Automatisez vos processus métier avec des solutions IA intelligentes et fiables.",
    overview:
      "Nous concevons des workflows d'automatisation pilotés par l'IA pour réduire les tâches répétitives, améliorer la productivité et accélérer votre prise de décision.",

    icon: Megaphone,
    gradient: "from-purple-600 to-indigo-800",

    features: [
      "Identification des processus automatisables et optimisation du flux de travail",
      "Intégration de chatbots et assistants IA dans vos opérations",
      "Automatisation de la collecte, du tri et de l'analyse des données",
      "Déploiement de solutions IA adaptées à vos outils métiers",
      "Monitoring des performances et amélioration continue",
    ],

    deliverables: [
      "Audit des processus et cartographie des automatisations",
      "Workflows automatisés configurés et intégrés",
      "Assistants IA ou bots opérationnels",
      "Documentation de mise en œuvre et plan de maintenance",
    ],

    useCases: [
      "Automatisation du support client et des réponses fréquentes",
      "Rationalisation des tâches administratives et de suivi",
      "Analyse automatisée de données et génération de rapports",
      "Assistance à la prise de décision grâce à l'IA",
    ],
  },
  {
    slug: "academie-saastech",
    title: "Académie SAASTECH",
    shortDescription:
      "Formations spécialisées et e-learning pour monter en compétences.",
    overview:
      "Nous proposons des parcours sur mesure pour vos équipes : développement web, cloud, sécurité, product management — en présentiel, distanciel ou via plateforme e-learning.",
    icon: BookOpen,
    gradient: "from-blue-700 to-indigo-900",
    features: [
      "Programmes adaptés au niveau des équipes",
      "Ateliers pratiques sur vos propres projets",
      "Plateforme e-learning et suivi des progrès",
      "Certification interne et retours d'évaluation",
    ],
    deliverables: [
      "Diagnostic des compétences et plan de montée en charge",
      "Supports pédagogiques et exercices",
      "Sessions animées par des praticiens",
      "Bilan et recommandations post-formation",
    ],
    useCases: [
      "Onboarding technique de nouvelles recrues",
      "Montée en compétence sur une stack moderne",
      "Sensibilisation sécurité et bonnes pratiques",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getOtherServices(currentSlug: string): Service[] {
  return services.filter((service) => service.slug !== currentSlug);
}
