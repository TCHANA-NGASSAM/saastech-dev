export const siteConfig = {
  name: "SAASTECH",
  tagline:
    "Votre partenaire pour la transformation digitale, en Europe et en Afrique.",
  description:
    "Agence de développement web, mobile et SaaS. Nous concevons des solutions sur mesure pour les entreprises et porteurs de projet.",
  url: "https://saastech.com",
  locale: "fr_FR",
  contact: {
    email: "contact@saastech.com",
    phone: "+237 656 480 640",
    phoneHref: "tel:+237656480640",
    address: {
      line1: "Bonapriso",
      line2: "Douala, Cameroun",
    },
    hours: "Lun – Ven : 8h00 – 17h00",
  },
  social: {
    linkedin: "https://linkedin.com/company/saastech",
    twitter: "https://twitter.com/saastech",
    github: "https://github.com/saastech",
  },
  /** Chiffres réels / promesses — pas de social proof inventé */
  highlights: [
    { value: "5", label: "Expertises" },
    { value: "2", label: "Marchés (EU & Afrique)" },
    { value: "48h", label: "Délai de réponse" },
  ],
  valueProposition:
    "Parlez-nous de votre projet : nous vous proposons un accompagnement sur mesure, de la stratégie au déploiement.",
} as const;

export const contactSubjects = [
  "Développement Web & Mobile",
  "Solutions SaaS",
  "Solutions Enterprise",
  "Formation IT",
  "Stage Étudiant",
  "Autre",
] as const;

export type ContactSubject = (typeof contactSubjects)[number];

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/#expertises", label: "Expertises" },
  { href: "/projet", label: "Exemples" },
  { href: "/contact", label: "Contact" },
] as const;
