import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BrickWall,
  Clock,
  Gem,
  Handshake,
  HardHat,
  Home,
  Layers,
  PaintRoller,
  Users,
} from "lucide-react";
import ServicesHeroDropdown from "@/components/ServicesHeroDropdown";

export const metadata: Metadata = {
  title: "Nos services",
};

interface PrestationItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PRESTATIONS: PrestationItem[] = [
  {
    id: "peinture",
    title: "Peinture intérieure",
    description: "Des finitions parfaites pour un intérieur qui vous ressemble.",
    image: "/images/chantier-chambre-verte.jpg",
    icon: PaintRoller,
  },
  {
    id: "isolation",
    title: "Isolation intérieure",
    description:
      "Améliorez votre confort et réduisez votre consommation.",
    image: "/images/chantier-entrepot-apres.jpg",
    icon: Home,
  },
  {
    id: "sols",
    title: "Revêtements de sols",
    description:
      "Un large choix de sols pour un style unique et durable.",
    image: "/images/chantier-mezzanine-parquet.jpg",
    icon: Layers,
  },
  {
    id: "renovation-complete",
    title: "Rénovation complète",
    description:
      "Confiez-nous votre projet de A à Z, en toute sérénité.",
    image: "/images/chantier-cuisine-noire.jpg",
    icon: BrickWall,
  },
];

const EXPERTISE_ITEMS = [
  {
    icon: Gem,
    title: "Qualité garantie",
    description: "Des travaux réalisés avec des matériaux haut de gamme.",
  },
  {
    icon: HardHat,
    title: "Équipe expérimentée",
    description: "Une équipe de professionnels à votre service.",
  },
  {
    icon: Handshake,
    title: "Accompagnement personnalisé",
    description: "Un suivi sur mesure à chaque étape de votre projet.",
  },
  {
    icon: Clock,
    title: "Respect des délais",
    description: "Nous nous engageons à livrer vos projets dans les temps.",
  },
  {
    icon: Users,
    title: "Excellent rapport qualité-prix",
    description: "Une rénovation durable au meilleur prix.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8F7] text-[#1E2424] overflow-x-hidden">
      <main className="flex-grow">
        <section className="relative h-[430px] md:h-[470px] flex items-center overflow-hidden bg-[#1E2424]">
          <img
            src="/images/hero-salon.jpg"
            alt="Nos services de rénovation intérieure PRO’DECO"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: "none" }}
          />
          <div className="absolute inset-y-0 left-0 w-full sm:w-3/5 md:w-1/2 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
            <div className="max-w-lg">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#1E2424] tracking-tight mb-3">
                Nos services
              </h1>
              <span className="block w-14 h-1 bg-[#0B7A75] mb-5" />
              <p className="text-lg md:text-xl font-bold text-[#1E2424] leading-snug mb-6">
                Des solutions complètes pour
                <br />
                rénover et embellir vos espaces
              </p>

              <ServicesHeroDropdown />
            </div>
          </div>
        </section>

        <section id="prestations" className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="w-12 h-0.5 bg-[#0B7A75]" />
              <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#0B7A75]">
                Nos prestations
              </span>
              <span className="w-12 h-0.5 bg-[#0B7A75]" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1E2424]">
              Un savoir-faire unique pour tous vos projets
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRESTATIONS.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md shadow-stone-200/70 border border-stone-100 flex flex-col text-center hover:-translate-y-1 transition duration-300"
                >
                  <div className="h-44 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="relative -mt-8 mx-auto w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center border border-stone-100 text-[#0B7A75]">
                    <Icon className="w-7 h-7 stroke-[1.8]" />
                  </div>

                  <div className="px-5 pt-4 pb-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-[#1E2424] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="relative py-16 bg-gradient-to-b from-white to-[#F2F4F3] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative h-[430px] sm:h-[470px] flex items-center justify-center">
              <span className="w-8 h-8 rounded-lg bg-[#52B2AD] rotate-12 absolute top-6 left-1/2" />
              <span className="w-10 h-10 rounded-lg bg-[#52B2AD] rotate-12 absolute bottom-4 left-24" />
              <span className="w-7 h-7 rounded-lg bg-[#85CCC8] rotate-12 absolute top-1/2 right-4" />

              <div className="w-56 sm:w-64 h-64 sm:h-72 rounded-3xl overflow-hidden border-[6px] border-white shadow-xl -rotate-12 -translate-x-14 sm:-translate-x-20 z-10">
                <img
                  src="/images/chantier-bureau-vert.jpg"
                  alt="Peinture et finitions PRO’DECO"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-40 sm:w-44 h-40 sm:h-44 rounded-2xl overflow-hidden border-[6px] border-white shadow-xl -rotate-12 absolute top-8 right-8 sm:right-14 z-20">
                <img
                  src="/images/chantier-cuisine-bleue.jpg"
                  alt="Pose de parquet chevron et agencement"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-52 sm:w-60 h-44 sm:h-48 rounded-3xl overflow-hidden border-[6px] border-white shadow-xl -rotate-12 absolute bottom-6 right-6 sm:right-10 z-20">
                <img
                  src="/images/chantier-entrepot-apres.jpg"
                  alt="Rénovation de grand volume"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#0B7A75]">
                  Notre expertise
                </span>
                <span className="w-14 h-0.5 bg-[#0B7A75]" />
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1E2424] mb-7">
                Pourquoi choisir PRO’DECO ?
              </h2>

              <div className="space-y-5 relative z-10">
                {EXPERTISE_ITEMS.map((adv, idx) => {
                  const Icon = adv.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-[#0B7A75] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-[#1E2424]">
                          {adv.title}
                        </h3>
                        <p className="text-sm text-stone-600">
                          {adv.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="hidden sm:block absolute top-16 right-0 -rotate-6 text-center pointer-events-none">
                <p className="font-serif italic font-bold text-xl text-[#0B7A75] leading-tight">
                  Votre satisfaction,
                  <br />
                  notre priorité !
                </p>
                <span className="block w-28 h-0.5 bg-[#0B7A75] mx-auto mt-1 rounded-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="relative rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 bg-[#08635F]">
            <div className="lg:col-span-4 h-48 lg:h-auto relative">
              <img
                src="/images/chantier-cuisine-noire-2.jpg"
                alt="Intérieur rénové PRO’DECO"
                className="w-full h-full object-cover"
              />
              <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-[#08635F]" />
            </div>

            <div className="lg:col-span-8 px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-1.5">
                  Prêt à concrétiser votre projet ?
                </h2>
                <p className="text-teal-50 text-sm">
                  Contactez-nous dès aujourd’hui pour un devis gratuit et personnalisé.
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