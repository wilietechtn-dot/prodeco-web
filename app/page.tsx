import { Hero, TrustBar } from "@/components/Hero";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import { SERVICES, TESTIMONIALS, GALLERY_IMAGES } from "@/data/siteData";
import Link from "next/link";
import { ArrowRight, MessageCircle, Star } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/33666010553?text=Bonjour%20PRO%27DECO%2C%20je%20souhaite%20obtenir%20un%20devis%20pour%20un%20projet%20de%20r%C3%A9novation.";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden relative">
      <main className="flex-grow">
        <Hero />
        <TrustBar />

        <section
          id="apropos"
          className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-6 rounded-xl overflow-hidden shadow-md h-80 md:h-96">
            <img
              src="/images/chantier-mezzanine-parquet.jpg"
              alt="Travaux de rénovation intérieure PRO’DECO"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-6">
            <span className="block w-10 h-0.5 bg-[#0B7A75] mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1E2424] mb-5">
              Votre projet, notre savoir-faire
            </h2>
            <p className="text-stone-600 leading-relaxed">
              PRO’DECO, entreprise de{" "}
              <strong className="text-[#1E2424]">rénovation intérieure</strong> à
              Saint-Martin-d’Hères, vous accompagne dans tous vos{" "}
              <strong className="text-[#1E2424]">travaux</strong> : peinture,
              isolation, revêtements de sols et bien plus encore. Donnez une
              nouvelle vie à votre intérieur avec une équipe passionnée et
              expérimentée.
            </p>
          </div>
        </section>

        <section id="services" className="max-w-7xl mx-auto px-6 pb-20">
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="w-12 h-0.5 bg-[#0B7A75]" />
            <h2 className="font-serif text-3xl font-bold text-center text-[#1E2424]">
              Nos services
            </h2>
            <span className="w-12 h-0.5 bg-[#0B7A75]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {SERVICES.map((service) => (
              <article
                key={service.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100 flex flex-col hover:shadow-md transition"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-[#1E2424] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-stone-600 flex-grow">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <BeforeAfterSection />

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="w-12 h-0.5 bg-[#0B7A75]" />
            <h2 className="font-serif text-3xl font-bold text-center text-[#1E2424]">
              Ce que nos clients disent
            </h2>
            <span className="w-12 h-0.5 bg-[#0B7A75]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm"
              >
                <p className="text-sm text-stone-600 italic mb-5">“{t.quote}”</p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold text-[#1E2424]">{t.name}</p>
                    <div className="flex text-amber-400">
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="galerie" className="max-w-7xl mx-auto px-6 pb-16">
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="w-12 h-0.5 bg-[#0B7A75]" />
            <h2 className="font-serif text-3xl font-bold text-center text-[#1E2424]">
              Notre galerie
            </h2>
            <span className="w-12 h-0.5 bg-[#0B7A75]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((src, i) => (
              <div key={i} className="h-52 rounded-lg overflow-hidden shadow-sm">
                <img
                  src={src}
                  alt={`Réalisation PRO'DECO ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="max-w-7xl mx-auto px-6 pb-16">
          <div className="bg-gradient-to-r from-[#0B7A75] to-[#12948D] rounded-2xl px-8 py-9 flex flex-col md:flex-row items-center justify-between gap-6 text-white shadow-md">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-1">
                Parlons de votre projet
              </h2>
              <p className="text-teal-50 text-sm">
                Contactez-nous dès aujourd’hui pour obtenir un devis personnalisé.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#064A47] hover:bg-[#053B38] text-white text-sm font-semibold px-5 py-3 rounded-full border border-white/25 transition"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <Link
                href="/contact#formulaire-contact"
                className="inline-flex items-center gap-2 bg-white text-[#1E2424] hover:bg-stone-100 text-sm font-semibold px-6 py-3 rounded-full transition"
              >
                Obtenir un devis <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}