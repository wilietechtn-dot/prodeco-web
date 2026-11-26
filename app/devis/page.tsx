import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import DevisForm from "@/components/DevisForm";

export const metadata: Metadata = {
  title: "Devis",
};

const STEPS = [
  {
    number: "01",
    title: "Analyse de votre besoin",
    desc: "Étude des pièces, surfaces et contraintes techniques de votre logement.",
  },
  {
    number: "02",
    title: "Devis clair et détaillé",
    desc: "Estimation transparente des matériaux et de la main-d’œuvre, sans surprise.",
  },
  {
    number: "03",
    title: "Réalisation soignée",
    desc: "Intervention d’une équipe qualifiée dans le respect des délais convenus.",
  },
];

export default function DevisPage() {
  return (
    <div className="flex-grow flex flex-col bg-[#F5F7F6] text-[#1E2424] overflow-x-hidden">
      <main className="flex-grow">
        <section className="relative h-[380px] md:h-[420px] flex items-center overflow-hidden bg-[#1E2424]">
          <img
            src="/images/hero-salon.jpg"
            alt="Demander un devis de rénovation intérieure PRO’DECO"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: "none" }}
          />
          <div className="absolute inset-y-0 left-0 w-full sm:w-3/5 md:w-1/2 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
            <div className="max-w-xl">
              <span className="inline-block text-xs font-extrabold tracking-[0.2em] uppercase text-[#0B7A75] mb-2">
                Estimation gratuite
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#1E2424] tracking-tight leading-[1.08] mb-3">
                Demander un devis
              </h1>
              <span className="block w-14 h-1 bg-[#0B7A75] mb-4" />
              <p className="text-base md:text-lg font-bold text-[#1E2424] leading-snug">
                Remplissez le formulaire ci-dessous : votre projet est transmis
                directement à{" "}
                <span className="text-[#0B7A75]">info.prodeco1@gmail.com</span>.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <DevisForm />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl shadow-md shadow-stone-200/70 border border-stone-100 p-6">
              <h2 className="font-serif text-xl font-bold text-[#1E2424] mb-4">
                Coordonnées directes
              </h2>
              <div className="space-y-3.5 text-sm text-stone-600">
                <a
                  href="mailto:info.prodeco1@gmail.com"
                  className="flex items-center gap-3 hover:text-[#0B7A75] transition"
                >
                  <span className="w-9 h-9 rounded-full bg-teal-50 text-[#0B7A75] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </span>
                  <span>info.prodeco1@gmail.com</span>
                </a>

                <a
                  href="tel:0666010553"
                  className="flex items-center gap-3 hover:text-[#0B7A75] transition"
                >
                  <span className="w-9 h-9 rounded-full bg-teal-50 text-[#0B7A75] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </span>
                  <span>06 66 01 05 53</span>
                </a>

                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-teal-50 text-[#0B7A75] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <span>Saint-Martin-d’Hères, France</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-teal-50 text-[#0B7A75] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </span>
                  <span>Lun – Ven : 9h – 18h</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md shadow-stone-200/70 border border-stone-100 p-6">
              <h2 className="font-serif text-xl font-bold text-[#1E2424] mb-4">
                Comment ça se passe ?
              </h2>
              <div className="space-y-4">
                {STEPS.map((step) => (
                  <div key={step.number} className="flex items-start gap-3.5">
                    <span className="w-8 h-8 rounded-full bg-[#0B7A75] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-[#1E2424]">
                        {step.title}
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed mt-0.5">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span className="inline-flex items-center gap-1.5 text-[#0B7A75] font-semibold">
                  <CheckCircle2 className="w-4 h-4" /> Accompagnement PRO’DECO
                </span>
                <Link
                  href="/realisations"
                  className="inline-flex items-center gap-1 font-semibold text-[#1E2424] hover:text-[#0B7A75] transition"
                >
                  Voir nos réalisations <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}