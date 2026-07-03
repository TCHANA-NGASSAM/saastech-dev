"use client";

import { Card } from "@/src/shadcn/components/ui/card";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Comment démarrer avec SAASTEK?",
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
    question: "Travaillez-vous avec des startups?",
    answer:
      "Absolument! Nous avons une expertise particulière avec les startups. Nous proposons des tarifs flexibles et des modèles adaptés aux jeunes entreprises.",
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
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-gray-600">
            Trouvez les réponses à vos questions les plus courantes
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 border-t border-gray-200 pt-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
