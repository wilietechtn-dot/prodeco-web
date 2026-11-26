import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const DESTINATION_EMAIL =
  process.env.CONTACT_TO_EMAIL ||
  process.env.SMTP_USER ||
  "info.prodeco1@gmail.com";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const nom = typeof body?.nom === "string" ? body.nom.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const telephone =
      typeof body?.telephone === "string" ? body.telephone.trim() : "";
    const sujet =
      typeof body?.sujet === "string" && body.sujet.trim()
        ? body.sujet.trim()
        : "Nouveau message depuis le site PRO’DECO";
    const message =
      typeof body?.message === "string" ? body.message.trim() : "";

    if (!nom || !email || !message) {
      return NextResponse.json(
        { error: "Veuillez renseigner votre nom, votre e-mail et votre message." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Veuillez saisir une adresse e-mail valide." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          error:
            "Configuration SMTP incomplète sur le serveur (.env : SMTP_HOST, SMTP_USER, SMTP_PASS).",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const safeNom = escapeHtml(nom);
    const safeEmail = escapeHtml(email);
    const safeTelephone = escapeHtml(telephone || "Non renseigné");
    const safeSujet = escapeHtml(sujet);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    await transporter.sendMail({
      from: `"PRO’DECO Contact" <${smtpUser}>`,
      to: DESTINATION_EMAIL,
      replyTo: email,
      subject: `[Contact PRO’DECO] ${sujet} — ${nom}`,
      text: [
        `Nouveau message reçu sur le site PRO’DECO`,
        `----------------------------------------`,
        `Nom : ${nom}`,
        `E-mail : ${email}`,
        `Téléphone : ${telephone || "Non renseigné"}`,
        `Sujet : ${sujet}`,
        ``,
        `Message :`,
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #1E2424; line-height: 1.6;">
          <h2 style="color: #0B7A75; margin-bottom: 12px;">Nouveau message de contact — PRO’DECO</h2>
          <p><strong>Nom :</strong> ${safeNom}</p>
          <p><strong>E-mail :</strong> ${safeEmail}</p>
          <p><strong>Téléphone :</strong> ${safeTelephone}</p>
          <p><strong>Sujet :</strong> ${safeSujet}</p>
          <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 16px 0;" />
          <p><strong>Message :</strong></p>
          <p style="background: #F7F8F7; padding: 12px; border-radius: 8px;">${safeMessage}</p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Votre message a bien été envoyé." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur envoi e-mail contact:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l’envoi du message." },
      { status: 500 }
    );
  }
}