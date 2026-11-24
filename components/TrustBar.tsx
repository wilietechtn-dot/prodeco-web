import Link from "next/link";
import { ArrowRight, Award, Handshake, Home, Leaf } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[540px] md:h-[600px] flex items-center overflow-hidden">
      {/* Image de fond avec dégradé clair à gauche pour la lisibilité */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-salon.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/95 via-[#FAF8F5]/75 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-xl">
          <span className="block w-12 h-0.5 bg-[#0B7A75] mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1E2424] leading-[1.15] mb-4">
            Réinventez vos espaces,
            <br />
            révélez votre intérieur
          </h1>
          <p className="text-stone-700 font-medium text-base md:text-lg mb-8">
            Rénovation intérieure • Peinture • Isolation • Revêtements
          </p>
          <Link
            href="#realisations"
            className="inline-flex items-center gap-2 bg-[#0B7A75] hover:bg-[#085E5A] text-white font-medium px-6 py-3.5 rounded-full transition shadow-md"
          >
            Découvrir nos réalisations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  const items = [
    {
      icon: Award,
      title: "Qualité garantie",
      sub: "Un travail soigné et durable",
    },
    {
      icon: Handshake,
      title: "Accompagnement sur mesure",
      sub: "À chaque étape de votre projet",
    },
    {
      icon: Home,
      title: "Plus de 10 ans d'expérience",
      sub: "À Saint-Martin-d'Hères",
    },
    {
      icon: Leaf,
      title: "Une rénovation responsable",
      sub: "Pour un habitat plus durable",
    },
  ];

  return (
    <div className="bg-white border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-6 py-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-6 first:pl-0">
              <Icon className="w-7 h-7 text-[#0B7A75] shrink-0 stroke-[1.75]" />
              <div>
                <p className="text-sm font-bold text-[#1E2424]">{item.title}</p>
                <p className="text-xs text-stone-500">{item.sub}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}