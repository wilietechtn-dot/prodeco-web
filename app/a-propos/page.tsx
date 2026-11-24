import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Gem,
  Handshake,
  Home,
  Users,
} from "lucide-react";

const PILLARS = [
  {
    icon: Gem,
    title: "Qualité garantie",
    subtitle: "Un travail soigné\net durable",
  },
  {
    icon: Handshake,
    title: "Accompagnement personnalisé",
    subtitle: "À chaque étape de votre projet",
  },
  {
    icon: Clock,
    title: "Respect des délais",
    subtitle: "Votre satisfaction,\nnotre priorité",
  },
  {
    icon: Users,
    title: "Une équipe experte",
    subtitle: "Des professionnels\nà votre service",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8F7] text-[#1E2424] overflow-x-hidden">
      <main className="flex-grow">
        {/* Bannière Hero À propos */}
        <section className="relative h-[430px] md:h-[470px] flex items-center overflow-hidden bg-[#1E2424]">
          <img
            src="/images/chantier-mezzanine-parquet.jpg"
            alt="Rénovation intérieure et mezzanine par PRO'DECO"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: "none" }}
          />
          <div className="absolute inset-y-0 left-0 w-full sm:w-3/5 md:w-1/2 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
            <div className="max-w-lg">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#1E2424] tracking-tight mb-3">
                À propos
              </h1>
              <span className="block w-14 h-1 bg-[#0B7A75] mb-5" />
              <p className="text-lg md:text-xl font-bold text-[#1E2424] leading-snug">
                Une entreprise de confiance
                <br />
                pour vos projets de rénovation
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6 relative h-[400px] sm:h-[440px] flex items-center justify-center">
            <div className="w-60 sm:w-64 h-64 sm:h-72 rounded-3xl bg-[#3CA29D] absolute top-6 right-10 sm:right-16" />

            <div className="w-64 sm:w-72 h-72 sm:h-80 rounded-3xl overflow-hidden border-[6px] border-white shadow-xl -rotate-3 -translate-x-10 -translate-y-4 z-10 bg-stone-200">
              <img
                src="/images/chantier-escalier-rouge.jpg"
                alt="Escalier et peinture PRO'DECO"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-20 h-20 rounded-2xl bg-white shadow-lg border border-stone-100 flex items-center justify-center text-[#0B7A75] absolute bottom-8 left-8 sm:left-14 z-30">
              <Home className="w-10 h-10 stroke-[1.8]" />
            </div>

            <div className="w-52 sm:w-60 h-44 sm:h-48 rounded-2xl overflow-hidden border-[6px] border-white shadow-xl rotate-3 absolute bottom-4 right-6 sm:right-12 z-20 bg-stone-200">
              <img
                src="/images/chantier-chambre-verte.jpg"
                alt="Finitions peinture intérieure PRO'DECO"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#0B7A75]">
                Notre histoire
              </span>
              <span className="w-16 h-0.5 bg-[#0B7A75]" />
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1E2424] leading-[1.18] mb-5">
              PRO’DECO,
              <br />
              plus qu’une entreprise,
              <br />
              un partenaire de confiance
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
              Depuis notre création,{" "}
              <strong className="text-[#1E2424]">PRO’DECO</strong> s’engage à
              transformer vos espaces en lieux de vie modernes, confortables et
              durables. Forts d’une équipe qualifiée et passionnée, nous mettons
              notre expertise au service de vos projets de{" "}
              <strong className="text-[#1E2424]">rénovation intérieure</strong>,
              de peinture, d’isolation et de revêtements.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-7">
              Notre objectif : vous offrir un{" "}
              <strong className="text-[#1E2424]">travail de qualité</strong>, dans
              le respect des délais et de votre budget.
            </p>

            <Link
              href="#engagements"
              className="inline-flex items-center gap-2 bg-[#0B7A75] hover:bg-[#085E5A] text-white text-sm font-semibold px-6 py-3 rounded-full transition shadow-sm"
            >
              En savoir plus sur nous <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <section id="engagements" className="max-w-7xl mx-auto px-6 pb-20">
          <div className="bg-white rounded-2xl shadow-md shadow-stone-200/70 border border-stone-100 py-8 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-stone-200 text-center">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center pt-4 sm:pt-2 lg:pt-0 lg:px-4 first:pt-0"
                >
                  <Icon className="w-9 h-9 text-[#0B7A75] stroke-[1.7] mb-3" />
                  <h3 className="text-sm font-bold text-[#1E2424] mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-stone-500 whitespace-pre-line leading-relaxed">
                    {pillar.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="block text-xs font-extrabold tracking-[0.2em] uppercase text-[#0B7A75] mb-2">
              Pourquoi nous choisir ?
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1E2424] leading-tight mb-3">
              Notre engagement
              <br />à vos côtés
            </h2>
            <span className="block w-14 h-1 bg-[#0B7A75] mb-6" />

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
              Chez PRO’DECO, nous croyons que chaque projet est unique. C’est
              pourquoi nous vous proposons des solutions sur mesure, alliant
              esthétique, performance et durabilité.
            </p>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-7">
              Notre savoir-faire et notre expérience nous permettent de répondre
              à toutes vos envies, du simple rafraîchissement à la rénovation
              complète.
            </p>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#0B7A75] hover:bg-[#085E5A] text-white text-sm font-semibold px-6 py-3 rounded-full transition shadow-sm"
            >
              Découvrir nos services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="hidden sm:block absolute -inset-2 rounded-3xl border-2 border-[#0B7A75]/40 rotate-1 pointer-events-none" />
            <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-xl border-[6px] border-white">
              <img
                src="/images/chantier-cuisine-noire.jpg"
                alt="Cuisine rénovée par PRO'DECO"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-14">
          <div className="relative rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 bg-gradient-to-r from-[#086A66] via-[#0B7A75] to-[#12948D]">
            <div className="lg:col-span-4 h-44 lg:h-auto relative bg-white/10">
              <img
                src="/images/chantier-couloir-apres.jpg"
                alt="Couloir rénové PRO'DECO"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-[#096E6A]" />
            </div>

            <div className="lg:col-span-8 px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold leading-tight mb-1.5">
                  Ensemble, donnons vie
                  <br />à vos projets !
                </h2>
                <p className="text-teal-50 text-sm">
                  Contactez-nous dès aujourd’hui pour un devis gratuit.
                </p>
              </div>

              <div className="hidden md:block w-px h-14 bg-white/25" />

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#1E2424] hover:bg-stone-100 text-sm font-semibold px-6 py-3 rounded-full transition shrink-0 shadow-sm"
              >
                Nous contacter <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}