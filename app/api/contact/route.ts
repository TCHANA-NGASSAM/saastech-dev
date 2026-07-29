// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { fullName, email, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? "SAASTECH <no-reply@example.com>",
      to: process.env.CONTACT_TO ?? "contact@saastech.com",
      replyTo: email,
      subject: `[Contact] ${subject}`,
      html: `
        <h3>Nouveau message de contact</h3>
        <p><strong>Nom :</strong> ${fullName}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi mail:", error);
    return NextResponse.json(
      { success: false, error: "Échec de l'envoi du message" },
      { status: 500 }
    );
  }
}