import { contactSubjects } from "@/src/data/site";
import { NextResponse } from "next/server";

type ContactPayload = {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide." }, { status: 400 });
  }

  const fullName = body.fullName?.trim();
  const email = body.email?.trim();
  const subject = body.subject?.trim();
  const message = body.message?.trim();

  if (!fullName || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Tous les champs sont obligatoires." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
  }

  if (!contactSubjects.includes(subject as (typeof contactSubjects)[number])) {
    return NextResponse.json({ error: "Sujet invalide." }, { status: 400 });
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { error: "Le message ne doit pas dépasser 5000 caractères." },
      { status: 400 },
    );
  }

  // Prêt pour intégration Resend / SendGrid via CONTACT_WEBHOOK_URL
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, subject, message }),
      });
    } catch {
      return NextResponse.json(
        { error: "Impossible d'envoyer le message pour le moment." },
        { status: 502 },
      );
    }
  } else {
    console.info("[contact]", { fullName, email, subject, messageLength: message.length });
  }

  return NextResponse.json({ success: true });
}
