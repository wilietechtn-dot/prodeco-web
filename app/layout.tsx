import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const WHATSAPP_URL =
  "https://wa.me/33666010553?text=Bonjour%20PRO%27DECO%2C%20je%20souhaite%20obtenir%20un%20devis%20pour%20un%20projet%20de%20r%C3%A9novation.";

export const metadata: Metadata = {
  title: "PRO’DECO | Rénovation intérieure élégante",
  description:
    "Entreprise de rénovation intérieure à Saint-Martin-d'Hères : peinture, isolation, revêtements de sols.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="font-sans bg-[#FAF8F5] text-[#1E2424] antialiased overflow-x-hidden flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex flex-col">{children}</div>
        <Footer />

        {/* Bouton WhatsApp flottant global */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contacter PRO’DECO sur WhatsApp"
          className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2.5 bg-[#0B7A75] hover:bg-[#085E5A] text-white text-sm font-semibold px-4 py-3.5 rounded-full shadow-lg border border-white/20 transition hover:scale-105"
        >
          <MessageCircle className="w-5 h-5 shrink-0" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </body>
    </html>
  );
}