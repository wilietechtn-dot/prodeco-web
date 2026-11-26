import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PRO’DECO | Rénovation intérieure élégante",
    template: "%s | PRO’DECO",
  },
  description:
    "PRO’DECO, entreprise de rénovation intérieure à Saint-Martin-d’Hères : peinture, isolation, revêtements de sols et rénovation complète.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col bg-[#F7F8F7] text-[#1E2424] antialiased">
        <Navbar />
        <div className="flex-grow flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}