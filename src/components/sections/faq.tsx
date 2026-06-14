"use client";

import { SectionHeader, SectionShell } from "@/src/components/section-shell";
import { Card } from "@/src/shadcn/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Comment démarrer avec SAASTECH?",
    answer:
      "Nous proposons une consultation initiale gratuite pour comprendre vos besoins. Contactez-nous et nous mettrons en place un projet adapté à votre budget et vos objectifs.",
  },
  {
    question: "Quels services offrez-vous?",
    answer:
      "Nous proposons du développement web et mobile, des solutions SaaS, des solutions enterprise (ERP, CRM) et de la formation IT.",
  },
  {
    question: "Quel est votre délai de mise en place?",
    answer:
      "Le délai dépend de la complexité du projet. Pour une landing page: 2-3 semaines. Pour une application custom: 1-3 mois. Nous vous fournirons une estimation précise après l'analyse de vos besoins.",
  },
  {
    question: "Proposez-vous du support après le lancement?",
    answer:
      "Oui, nous proposons différents niveaux de support: maintenance, mises à jour, monitoring et assistance technique. Nous pouvons discuter des options lors de notre consultation.",
  },
  {
    question: "Quelle est votre expertise ?",
    answer:
      "SAASTECH couvre le développement web, mobile et SaaS, ainsi que les solutions enterprise (ERP, CRM). Nous intervenons de la conception au déploiement, avec une approche transparente et des livrables définis à l'avance.",
  },
  {
    question: "Travaillez-vous avec des startups ?",
    answer:
      "Oui, nous accompagnons startups, PME et porteurs de projet. Nous adaptons nos offres à votre budget, vos délais et vos objectifs.",
  },
  {
    question: "Comment fonctionnent vos tarifs?",
    answer:
      "Nous proposons trois modèles: tarification au projet, forfaits mensuels pour les services récurrents, et modèles basés sur la performance pour certains services.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionShell containerClassName="max-w-3xl">
      <SectionHeader
        title="Questions fréquentes"
        description="Trouvez les réponses à vos questions les plus courantes"
      />

      <div className="space-y-4 sm:space-y-5">
        {faqs.map((faq, index) => (
          <Card key={index} className="overflow-hidden border border-gray-200 py-0">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-gray-50 sm:px-6 sm:py-6"
            >
              <h3 className="min-w-0 flex-1 text-base font-semibold text-gray-900 sm:text-lg">
                {faq.question}
              </h3>
              <ChevronDown
                className={`mt-0.5 h-5 w-5 shrink-0 text-gray-600 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="border-t border-gray-200 px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
                <p className="leading-relaxed text-gray-600">{faq.answer}</p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
