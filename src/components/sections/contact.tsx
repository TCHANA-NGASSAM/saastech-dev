"use client";

import { Button } from "@/src/shadcn/components/ui/button";
import { Card } from "@/src/shadcn/components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useMemo, useState } from "react";

type ContactSubject =
  | "Application Windows"
  | "Développement Web & Mobile"
  | "API & Industriel"
  | "Stage Étudiant"
  | "Autre";

export default function Contact() {
  const subjects = useMemo<ContactSubject[]>(
    () => [
      "Application Windows",
      "Développement Web & Mobile",
      "API & Industriel",
      "Stage Étudiant",
      "Autre",
    ],
    [],
  );

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState<ContactSubject | "">("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !subject || !message) return;

    setSubmitted(true);
    setFullName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Envoyez-nous un message. Nous sommes ouverts à toutes suggestions ou
            simplement pour discuter de votre projet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <Card className="lg:col-span-8 border border-gray-200 shadow-sm">
            <div className="p-8 sm:p-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Envoyez-nous un message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact_fullName"
                      className="text-sm font-medium text-gray-700"
                    >
                      Nom complet
                    </label>
                    <input
                      id="contact_fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full h-11 rounded-lg border border-gray-200 bg-white px-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact_email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Adresse email
                    </label>
                    <input
                      id="contact_email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full h-11 rounded-lg border border-gray-200 bg-white px-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                      placeholder="nom@domaine.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact_subject"
                    className="text-sm font-medium text-gray-700"
                  >
                    Sujet
                  </label>
                  <select
                    id="contact_subject"
                    value={subject}
                    onChange={(e) =>
                      setSubject(e.target.value as ContactSubject | "")
                    }
                    required
                    className="w-full h-11 rounded-lg border border-gray-200 bg-white px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                  >
                    <option value="" disabled>
                      Sélectionnez un sujet
                    </option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact_message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact_message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="w-full rounded-lg border border-gray-200 bg-white px-3 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 resize-y"
                    placeholder="Décrivez votre besoin (objectifs, délai, budget, etc.)"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg px-10 py-7 rounded-full cursor-pointer hover:from-blue-700 hover:to-blue-900 focus:ring-4 focus:ring-blue-300/50 transition"
                  >
                    Envoyer le message
                  </Button>
                  <p className="text-sm text-gray-500">
                    Réponse généralement sous 24–48h ouvrées.
                  </p>
                </div>

                {submitted && (
                  <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                    ✓ Merci ! Votre message a bien été pris en compte.
                  </div>
                )}
              </form>
            </div>
          </Card>

          <div className="lg:col-span-4 space-y-6 height-full">
            <Card className="border border-gray-200 shadow-sm">
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Nos coordonnées
                </h3>

                <ul className="space-y-5">
                  <li className="flex gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Adresse
                      </p>
                      <p className="text-sm text-gray-600">
                        En attente ....
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Email
                      </p>
                      <a
                        href="mailto:info@cameroonit.cm"
                        className="text-sm text-gray-600 hover:text-blue-700 transition"
                      >
                        En attente ....
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-3">
                    <Phone className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Téléphone
                      </p>
                      <a
                        href="tel:+237656480640"
                        className="text-sm text-gray-600 hover:text-blue-700 transition"
                      >
                        En attente ....
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Horaires
                      </p>
                      <p className="text-sm text-gray-600">
                        En attente ....
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Card>


          </div>
        </div>
      </div>
    </section>
  );
}
