import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[540px] md:min-h-[600px] flex items-center overflow-hidden bg-[#1E2424]">
      {/* Vidéo Avant / Après en arrière-plan */}
      <video
        src="/images/avant-apres-facade.mp4"
        poster="/images/hero-salon.jpg"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Avant et après rénovation PRO’DECO"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dégradé pour garantir la lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E2424]/85 via-[#1E2424]/60 to-[#1E2424]/25" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="max-w-xl text-white">
          <span className="inline-block text-xs font-extrabold tracking-[0.2em] uppercase text-[#5EEAD4] mb-3">
            Saint-Martin-d’Hères • Rénovation intérieure & façade
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-4">
            Transformez vos espaces avec précision
          </h1>

          <span className="block w-14 h-1 bg-[#12948D] mb-5" />

          <p className="text-base md:text-lg text-stone-100 leading-relaxed mb-7">
            Peinture, isolation, revêtements de sols et finitions soignées :
            découvrez la différence <strong>PRO’DECO</strong> avant et après
            travaux.
          </p>

          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 bg-[#0B7A75] hover:bg-[#085E5A] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition shadow-md"
            >
              Demander un devis <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 bg-white/95 hover:bg-white text-[#1E2424] text-sm font-semibold px-6 py-3.5 rounded-full transition shadow-sm"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  return (
    <div className="bg-white border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-[#1E2424]">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#0B7A75] shrink-0" />
          <span className="font-medium">Devis gratuit et détaillé</span>
        </div>
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-[#0B7A75] shrink-0" />
          <span className="font-medium">Finitions durables & soignées</span>
        </div>
        <div className="flex items-center gap-3">
          <Award className="w-5 h-5 text-[#0B7A75] shrink-0" />
          <span className="font-medium">Équipe locale à Saint-Martin-d’Hères</span>
        </div>
      </div>
    </div>
  );
}