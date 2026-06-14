"use client";

import { Button } from "@/src/shadcn/components/ui/button";
import { Card } from "@/src/shadcn/components/ui/card";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle2 } from "lucide-react";
import { useMemo, useState } from "react";
import Navbar from "@/src/components/navbar/navbar";

type ContactSubject =
    | "Application Windows"
    | "Développement Web & Mobile"
    | "API & Industriel"
    | "Stage Étudiant"
    | "Autre";

export default function ContactPage() {
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
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!fullName || !email || !subject || !message) return;

        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 1500));

        setSubmitted(true);
        setFullName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setIsSubmitting(false);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50">
            <Navbar />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16">

                        <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                            Contactez-nous
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Nous sommes à votre écoute. Discutons de votre projet et transformons vos idées en réalité.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Contact Form Card */}
                        <Card className="lg:col-span-8 border-0 shadow-xl shadow-gray-200/50 overflow-hidden">
                            <div className="bg-linear-to-r px-8">
                                <h2 className="text-2xl font-bold text-black">
                                    Envoyez-nous un message
                                </h2>
                                <p className="text-gray-600 mt-1">
                                    Remplissez le formulaire et nous vous répondrons rapidement
                                </p>
                            </div>
                            <div className="p-8 sm:p-10 bg-white">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="contact_fullName"
                                                className="text-sm font-semibold text-gray-700"
                                            >
                                            </label>
                                            <input
                                                id="contact_fullName"
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                                required
                                                className="w-full h-12 rounded-xl border-2 border-gray-200 bg-gray-50 px-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                                                placeholder="Votre nom complet"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label
                                                htmlFor="contact_email"
                                                className="text-sm font-semibold text-gray-700"
                                            >
                                            </label>
                                            <input
                                                id="contact_email"
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                className="w-full h-12 rounded-xl border-2 border-gray-200 bg-gray-50 px-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                                                placeholder="nom@domaine.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="contact_subject"
                                            className="text-sm font-semibold text-gray-700"
                                        >
                                        </label>
                                        <select
                                            id="contact_subject"
                                            value={subject}
                                            onChange={(e) =>
                                                setSubject(e.target.value as ContactSubject | "")
                                            }
                                            required
                                            className="w-full h-12 rounded-xl border-2 border-gray-200 bg-gray-50 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
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
                                            className="text-sm font-semibold text-gray-700"
                                        >
                                        </label>
                                        <textarea
                                            id="contact_message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                            rows={6}
                                            className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 resize-y"
                                            placeholder="Décrivez votre projet, vos objectifs et vos besoins..."
                                        />
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-linear-to-r from-blue-600 to-blue-800 text-white px-10 py-7 rounded-full cursor-pointer hover:from-blue-700 hover:to-blue-900 focus:ring-4 focus:ring-blue-300/50 transition disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center gap-2">
                                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Envoi en cours...
                                                </span>
                                            ) : (
                                                <span className="flex items-center gap-2">
                                                    <Send className="w-4 h-4" />
                                                    Envoyer le message
                                                </span>
                                            )}
                                        </Button>
                                        <p className="text-sm text-gray-500 flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            Réponse sous 24–48h ouvrées
                                        </p>
                                    </div>

                                    {submitted && (
                                        <div className="rounded-xl border-2 border-green-200 bg-green-50 px-6 py-4 flex items-center gap-3 animate-in slide-in-from-top-2 duration-300">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                                            <p className="text-sm font-medium text-green-800">
                                                Merci ! Votre message a bien été envoyé. Nous vous répondrons rapidement.
                                            </p>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </Card>

                        {/* Contact Information Card */}
                        <div className="lg:col-span-4 space-y-6">
                            <Card className="overflow-hidden border-0 shadow-xl shadow-gray-200/50 rounded-2xl">
                                <div className="bg-linear-to-br px-8">
                                    <h2 className="text-2xl font-bold text-black">
                                        Nos coordonnées
                                    </h2>
                                    <p className="text-gray-600 mt-1">
                                        {"N'hésitez pas à nous contacter"}
                                    </p>
                                </div>
                                <div className="p-8 bg-white">
                                    <ul className="space-y-6">
                                        <li className="flex gap-4 group">
                                            <div className="shrink-0 w-12 h-12 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors flex items-center justify-center">
                                                <MapPin className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900 mb-1">
                                                    Adresse
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    En attente ....
                                                </p>
                                            </div>
                                        </li>

                                        <li className="flex gap-4 group">
                                            <div className="shrink-0 w-12 h-12 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors flex items-center justify-center">
                                                <Mail className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900 mb-1">
                                                    Email
                                                </p>
                                                <a
                                                    href="mailto:info@saastech.com"
                                                    className="text-sm text-gray-600 hover:text-blue-700 transition-colors"
                                                >
                                                    En attente ....
                                                </a>
                                            </div>
                                        </li>

                                        <li className="flex gap-4 group">
                                            <div className="shrink-0 w-12 h-12 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors flex items-center justify-center">
                                                <Phone className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900 mb-1">
                                                    Téléphone
                                                </p>
                                                <a
                                                    href="tel:+237656480640"
                                                    className="text-sm text-gray-600 hover:text-blue-700 transition-colors"
                                                >
                                                    En attente ....
                                                </a>
                                            </div>
                                        </li>

                                        <li className="flex gap-4 group">
                                            <div className="shrink-0 w-12 h-12 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors flex items-center justify-center">
                                                <Clock className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900 mb-1">
                                                    Horaires
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    Lun – Ven : 8h00 – 17h00
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
