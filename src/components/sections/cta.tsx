import { Button } from "@/src/shadcn/components/ui/button";
import { Card } from "@/src/shadcn/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-5xl mx-auto">
        <Card className="border-0 bg-white/10 backdrop-blur-sm">
          <div className="p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Prêt à transformer votre projet?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  {
                    "Notre équipe d'experts est disponible pour discuter de votre vision et créer une stratégie digitale adaptée à vos objectifs."
                  }
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="text-white">Consultation gratuite</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="text-white">
                      Proposition personnalisée
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="text-white">Support dédié du jour 1</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-blue-600 hover:bg-white/90 rounded-lg">
                    <Link href="/contact">Planifier une consultation</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="bg-white/20 rounded-2xl p-8 text-center">
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-white">500+</span>
                  </div>
                  <p className="text-white mb-6 font-semibold">
                    Projets réussis en Europe et Afrique
                  </p>
                  <hr className="border-white/30 my-6" />
                  <div className="space-y-3">
                    <div>
                      <p className="text-2xl font-bold text-white">98%</p>
                      <p className="text-white/80 text-sm">
                        Taux de satisfaction client
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
