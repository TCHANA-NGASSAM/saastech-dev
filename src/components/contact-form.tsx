"use client";

import { Button } from "@/src/shadcn/components/ui/button";
import { Card } from "@/src/shadcn/components/ui/card";
import { Input } from "@/src/shadcn/components/ui/input";
import { Label } from "@/src/shadcn/components/ui/label";
import { Textarea } from "@/src/shadcn/components/ui/textarea";
import { contactSubjects, type ContactSubject } from "@/src/data/site";
import { CheckCircle2, Clock, Send } from "lucide-react";
import { useState } from "react";

type ContactFormProps = {
  variant?: "page" | "section";
};

export default function ContactForm({ variant = "page" }: ContactFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState<ContactSubject | "">("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName || !email || !subject || !message) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, subject, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Une erreur est survenue.");
        return;
      }

      setSubmitted(true);
      setFullName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError("Impossible d'envoyer le message. Réessayez plus tard.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const cardClass =
    variant === "page"
      ? "border-0 shadow-xl shadow-gray-200/50 overflow-hidden"
      : "border border-gray-200 shadow-sm";

  return (
    <Card className={cardClass}>
      <div className={variant === "page" ? "bg-linear-to-r px-4 pt-6 sm:px-8 sm:pt-8" : "p-6 pb-0 sm:p-8 sm:pb-0 md:p-10"}>
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          Envoyez-nous un message
        </h2>
        <p className="mt-1 text-gray-600">
          Remplissez le formulaire et nous vous répondrons rapidement
        </p>
      </div>

      <div className="bg-white p-4 sm:p-8 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="contact_fullName">Nom complet</Label>
              <Input
                id="contact_fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                placeholder="Votre nom complet"
                className="h-12 rounded-xl border-2"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact_email">Adresse email</Label>
              <Input
                id="contact_email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="nom@domaine.com"
                className="h-12 rounded-xl border-2"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact_subject">Sujet</Label>
            <select
              id="contact_subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value as ContactSubject | "")}
              required
              className="flex h-12 w-full rounded-xl border-2 border-input bg-background px-4 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="" disabled>
                Sélectionnez un sujet
              </option>
              {contactSubjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact_message">Message</Label>
            <Textarea
              id="contact_message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              placeholder="Décrivez votre projet, vos objectifs et vos besoins..."
              className="rounded-xl border-2 resize-y"
            />
          </div>

          <div className="flex flex-col gap-4 pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-12 w-full rounded-full bg-linear-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 sm:w-auto sm:px-10"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Envoi en cours...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Envoyer le message
                </span>
              )}
            </Button>
            <p className="flex items-center justify-center gap-1 text-sm text-gray-500 sm:justify-start">
              <Clock className="h-4 w-4" />
              Réponse sous 24–48h ouvrées
            </p>
          </div>

          {error && (
            <div className="rounded-xl border-2 border-red-200 bg-red-50 px-6 py-4 text-sm text-red-800">
              {error}
            </div>
          )}

          {submitted && (
            <div className="flex items-center gap-3 rounded-xl border-2 border-green-200 bg-green-50 px-6 py-4">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
              <p className="text-sm font-medium text-green-800">
                Merci ! Votre message a bien été envoyé. Nous vous répondrons rapidement.
              </p>
            </div>
          )}
        </form>
      </div>
    </Card>
  );
}
