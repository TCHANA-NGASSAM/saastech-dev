"use client";

import { Button } from "@/src/shadcn/components/ui/button";
import { Card } from "@/src/shadcn/components/ui/card";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 px-6 bg-blue-600">
      <div className="max-w-4xl mx-auto">
        <Card className="border-0 bg-white/10 backdrop-blur-sm">
          <div className="p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Restez à jour
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Inscrivez-vous à notre newsletter pour recevoir nos derniers
              conseils en digitalisation et nos cas de succès.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white"
              />
              <Button
                type="submit"
                variant="default"
                className="bg-white text-blue-600 hover:bg-white/90 rounded-lg"
              >
                {submitted ? "Inscrit!" : "S'inscrire"}
              </Button>
            </form>

            {submitted && (
              <p className="mt-4 text-white/80">
                ✓ Merci! Vérifiez votre email pour confirmer votre inscription.
              </p>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}
