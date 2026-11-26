import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Handshake,
  ShieldCheck,
  Smile,
} from "lucide-react";
import RealisationsGallery from "@/components/RealisationsGallery";

export const metadata: Metadata = {
  title: "Nos réalisations",
};

const STATS = [
  {
    icon: ShieldCheck,
    value: "100+",
    label: "Projets réalisés",
  },
  {
    icon: Smile,
    value: "98%",
    label: "Clients satisfaits",
  },
  {
    icon: Award,
    value: "15 ans",
    label: "d’expérience",
  },
  {
    icon: Handshake,
    value: "Une équipe",
    label: "professionnelle",
  },
];

export default function RealisationsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8F7] text-[#1E2424] overflow-x-hidden">
      <main className="flex-grow">
        <section className="relative h-[430px] md:h-[470px] flex items-center overflow-hidden bg-[#1E2424]">
          <img
            src="/images/chantier-bar-panoramique.jpg"
            alt="Réalisations PRO’DECO"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: "none" }}
          />
          <div className="absolute inset-y-0 left-0 w-full sm:w-3/5 md:w-1/2 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
            <div className="max-w-lg">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#1E2424] tracking-tight leading-[1.08] mb-3">
                Nos
                <br />
                réalisations
              </h1>
              <span className="block w-14 h-1 bg-[#0B7A75] mb-4" />
              <p className="text-base md:text-lg font-bold text-[#1E2424] leading-snug mb-6">
                Découvrez nos projets et laissez-vous
                <br />
                inspirer par notre savoir-faire.
              </p>
              <a
                href="#projets"
                className="inline-flex items-center gap-2 bg-[#0B7A75] hover:bg-[#085E5A] text-white text-sm font-semibold px-6 py-3 rounded-full transition shadow-md"
              >
                Voir plus de réalisations <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <RealisationsGallery />

        <section className="max-w-7xl mx-auto px-6 pb-10">
          <div className="bg-white rounded-2xl shadow-md shadow-stone-200/70 border border-stone-100 py-7 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-stone-200">
            {STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-3.5 pt-4 sm:pt-2 lg:pt-0 lg:px-4 first:pt-0"
                >
                  <div className="w-12 h-12 rounded-full border-2 border-[#0B7A75]/40 text-[#0B7A75] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <p className="text-lg font-extrabold text-[#1E2424] leading-tight">
                      {stat.value}
                    </p>
                    <p className="text-xs text-stone-600">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-14">
          <div className="relative rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 bg-gradient-to-r from-[#086A66] via-[#0B7A75] to-[#12948D]">
            <div className="lg:col-span-4 h-44 lg:h-auto relative bg-white/10">
              <img
                src="/images/chantier-papier-peint-bois.jpg"
                alt="Décoration murale et agencement PRO’DECO"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-[#096E6A]" />
            </div>

            <div className="lg:col-span-8 px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-1">
                  Ensemble, donnons vie à vos projets !
                </h2>
                <p className="text-teal-50 text-sm">
                  Contactez-nous dès aujourd’hui pour un devis gratuit.
                </p>
              </div>

              <Link
                href="/contact#formulaire-contact"
                className="inline-flex items-center gap-2 bg-white text-[#1E2424] hover:bg-stone-100 text-sm font-semibold px-6 py-3 rounded-full transition shrink-0 shadow-sm"
              >
                Demander un devis <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}