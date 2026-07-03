import PortfolioClient from "./portfolio-client";

type projecType = {
  title: string;
  category: string;
  description: string;
  price: string;
  company: string;
  badge: string;
};

const caseStudies : projecType[] = [
  {
    title: "Plateforme SaaS E-commerce",
    category: "SaaS",
    description: "Plateforme de gestion de boutiques en ligne",
    price: "$120/hr",
    company: "Shopify",
    badge: "Senior SaaS Engineer",
  },
  {
    title: "Application Mobile Finance",
    category: "Mobile",
    description: "Appli bancaire digitale blockchain",
    price: "$140/hr",
    company: "Revolut",
    badge: "Mobile Product Lead",
  },
  {
    title: "Transformation ERP",
    category: "Enterprise",
    description: "Migration système ERP 200 utilisateurs",
    price: "$130/hr",
    company: "SAP",
    badge: "ERP Solutions Architect",
  },
  {
    title: "Portail Smart Home",
    category: "IoT",
    description: "Système domotique immobilier résidentiel",
    price: "$110/hr",
    company: "Nest",
    badge: "IoT Product Designer",
  },
  {
    title: "Plateforme Marketplace B2B",
    category: "SaaS",
    description: "Marketplace de services B2B",
    price: "$135/hr",
    company: "Alibaba",
    badge: "Marketplace Strategist",
  },
  {
    title: "Application Logistique",
    category: "Enterprise",
    description: "Suivi logistique en temps réel",
    price: "$125/hr",
    company: "DHL",
    badge: "Logistics Engineer",
  },
  {
    title: "Plateforme E-learning",
    category: "Education",
    description: "Plateforme de formation digitale",
    price: "$115/hr",
    company: "Coursera",
    badge: "Learning Experience Lead",
  },
  {
    title: "Dashboard Analytics",
    category: "Data",
    description: "Dashboard analytics en temps réel",
    price: "$150/hr",
    company: "Google",
    badge: "Senior Backend Engineer",
  },
];

export default function Portfolio() {
  return <PortfolioClient caseStudies={caseStudies} />;
}
