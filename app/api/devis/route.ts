import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const DESTINATION_EMAIL = "Info.prodeco1@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      phone,
      city,
      serviceType,
      surface,
      budget,
      timeline,
      message,
    } = body ?? {};

    if (!fullName || !email || !phone || !serviceType || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    const emailSubject = `Nouvelle demande de devis PRO’DECO — ${serviceType} (${fullName})`;

    const textContent = [
      "Nouvelle demande de devis reçue depuis le site PRO’DECO :",
      "",
      `Nom complet : ${fullName}`,
      `Email : ${email}`,
      `Téléphone : ${phone}`,
      `Ville / Code postal : ${city || "Non précisé"}`,
      `Type de prestation : ${serviceType}`,
      `Surface estimée : ${surface ? `${surface} m²` : "Non précisée"}`,
      `Budget envisagé : ${budget || "Non précisé"}`,
      `Délai souhaité : ${timeline || "Non précisé"}`,
      "",
      "Description du projet :",
      message,
    ].join("\n");

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #1E2424; line-height: 1.6;">
        <h2 style="color: #0B7A75; margin-bottom: 12px;">Nouvelle demande de devis — PRO’DECO</h2>
        <table cellpadding="6" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td><strong>Nom complet :</strong></td>
            <td>${escapeHtml(String(fullName))}</td>
          </tr>
          <tr>
            <td><strong>Email :</strong></td>
            <td>${escapeHtml(String(email))}</td>
          </tr>
          <tr>
            <td><strong>Téléphone :</strong></td>
            <td>${escapeHtml(String(phone))}</td>
          </tr>
          <tr>
            <td><strong>Ville / Code postal :</strong></td>
            <td>${escapeHtml(String(city || "Non précisé"))}</td>
          </tr>
          <tr>
            <td><strong>Type de prestation :</strong></td>
            <td>${escapeHtml(String(serviceType))}</td>
          </tr>
          <tr>
            <td><strong>Surface estimée :</strong></td>
            <td>${escapeHtml(String(surface ? `${surface} m²` : "Non précisée"))}</td>
          </tr>
          <tr>
            <td><strong>Budget envisagé :</strong></td>
            <td>${escapeHtml(String(budget || "Non précisé"))}</td>
          </tr>
          <tr>
            <td><strong>Délai souhaité :</strong></td>
            <td>${escapeHtml(String(timeline || "Non précisé"))}</td>
          </tr>
        </table>
        <h3 style="color: #1E2424; margin-top: 20px; margin-bottom: 8px;">Description du projet</h3>
        <p style="background: #F7F8F7; padding: 12px; border-radius: 8px; white-space: pre-line;">
          ${escapeHtml(String(message))}
        </p>
      </div>
    `;

    const hasSmtpConfig =
      Boolean(process.env.SMTP_HOST) &&
      Boolean(process.env.SMTP_USER) &&
      Boolean(process.env.SMTP_PASS);

    if (!hasSmtpConfig) {
      console.info(
        "[DEV] Demande de devis prête pour",
        DESTINATION_EMAIL,
        {
          fullName,
          email,
          phone,
          city,
          serviceType,
          surface,
          budget,
          timeline,
          message,
        }
      );

      return NextResponse.json({
        success: true,
        devMode: true,
        message: `Votre demande a bien été enregistrée pour ${DESTINATION_EMAIL}. (Configurez les variables SMTP dans .env.local pour l’envoi réel par e-mail.)`,
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"PRO’DECO Web" <${process.env.SMTP_USER}>`,
      to: DESTINATION_EMAIL,
      replyTo: String(email),
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: `Votre demande de devis a bien été envoyée à ${DESTINATION_EMAIL}.`,
    });
  } catch (error) {
    console.error("Erreur envoi devis:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l’envoi de votre demande." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}