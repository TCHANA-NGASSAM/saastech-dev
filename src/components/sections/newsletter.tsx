"use client";

import { SectionHeader, SectionShell } from "@/src/components/section-shell";
import { Button } from "@/src/shadcn/components/ui/button";
import { Card } from "@/src/shadcn/components/ui/card";
import { Input } from "@/src/shadcn/components/ui/input";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Une erreur est survenue.");
        return;
      }

      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    } catch {
      setError("Impossible de finaliser l'inscription. Réessayez plus tard.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionShell variant="accent" containerClassName="max-w-4xl">
      <Card className="border-0 bg-white/10 backdrop-blur-sm">
        <div className="p-8 sm:p-10 md:p-12">
          <SectionHeader
            title="Restez à jour"
            description="Inscrivez-vous à notre newsletter pour recevoir nos derniers conseils en digitalisation et nos actualités."
            titleClassName="text-white"
            descriptionClassName="text-white/90"
          />

          <form
            onSubmit={handleSubmit}
            className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <Input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 min-w-0 flex-1 border-white/30 bg-white/20 text-base text-white placeholder:text-white/60"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="default"
              className="h-12 shrink-0 rounded-lg bg-white text-blue-600 hover:bg-white/90 sm:px-6"
            >
              {isSubmitting ? "..." : submitted ? "Inscrit !" : "S'inscrire"}
            </Button>
          </form>

          {error && <p className="mt-4 text-center text-sm text-red-100">{error}</p>}

          {submitted && (
            <p className="mt-4 text-center text-white/80">
              Merci ! Vérifiez votre email pour confirmer votre inscription.
            </p>
          )}
        </div>
      </Card>
    </SectionShell>
  );
}
