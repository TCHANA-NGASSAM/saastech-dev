import { Card, CardContent, CardHeader } from "@/src/shadcn/components/ui/card";
import { Lightbulb, Pencil, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Découverte",
    description:
      "Nous écoutons vos besoins, vos objectifs et vos défis pour créer une stratégie adaptée.",
  },
  {
    icon: Pencil,
    title: "Conception",
    description:
      "Nos designers créent des wireframes et maquettes pour visualiser votre solution.",
  },
  {
    icon: Code2,
    title: "Développement",
    description:
      "Notre équipe technique construit votre projet avec les meilleures pratiques.",
  },
  {
    icon: Rocket,
    title: "Lancement & Support",
    description:
      "Nous lançons votre projet et vous accompagnons pour sa croissance.",
  },
];

export default function Process() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Notre Processus
          </h2>
          <p className="text-lg text-gray-600">
            Une approche structurée et éprouvée pour garantir le succès de votre
            projet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="border border-gray-200 h-full hover:border-blue-500 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-4xl font-bold text-blue-600 opacity-20">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-6 h-0.5 bg-linear-to-r from-blue-400 to-transparent transform translate-x-6" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
