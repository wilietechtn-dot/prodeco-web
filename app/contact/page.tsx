import {
  ArrowRight,
  Bus,
  Car,
  Clock,
  Footprints,
  Home,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7F6] text-[#1E2424] overflow-x-hidden">
      <main className="flex-grow">
        {/* Hero Contact */}
        <section className="relative h-[430px] md:h-[470px] flex items-center overflow-hidden bg-[#1E2424]">
          <img
            src="/images/chantier-mezzanine-parquet.jpg"
            alt="Contact PRO'DECO rénovation intérieure"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: "none" }}
          />
          <div className="absolute inset-y-0 left-0 w-full sm:w-3/5 md:w-1/2 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
            <div className="max-w-lg">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#1E2424] tracking-tight mb-3">
                Contact
              </h1>
              <span className="block w-14 h-1 bg-[#0B7A75] mb-5" />
              <p className="text-lg md:text-xl font-bold text-[#1E2424] leading-snug mb-6">
                Une question ? Un projet ?
                <br />
                Nous sommes à votre écoute !
              </p>
              <a
                href="#formulaire-contact"
                className="inline-flex items-center gap-2 bg-[#0B7A75] hover:bg-[#085E5A] text-white text-sm font-semibold px-6 py-3 rounded-full transition shadow-md"
              >
                Nous contacter <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
          <div className="bg-white rounded-2xl shadow-lg shadow-stone-200/70 border border-stone-100 py-7 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-stone-200 text-center">
            <div className="flex flex-col items-center pt-2 lg:pt-0">
              <div className="w-11 h-11 rounded-full bg-[#0B7A75] text-white flex items-center justify-center mb-3 shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <p className="text-sm font-bold text-[#1E2424] mb-1">Téléphone</p>
              <a
                href="tel:0666010553"
                className="text-sm text-stone-600 hover:text-[#0B7A75] transition"
              >
                0666010553
              </a>
            </div>

            <div className="flex flex-col items-center pt-5 sm:pt-2 lg:pt-0 lg:pl-6">
              <div className="w-11 h-11 rounded-full bg-[#0B7A75] text-white flex items-center justify-center mb-3 shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <p className="text-sm font-bold text-[#1E2424] mb-1">Email</p>
              <a
                href="mailto:contact@prodeco.fr"
                className="text-sm text-stone-600 hover:text-[#0B7A75] transition"
              >
               Info.prodeco1@gmail.com

              </a>
            </div>

            <div className="flex flex-col items-center pt-5 lg:pt-0 lg:pl-6">
              <div className="w-11 h-11 rounded-full bg-[#0B7A75] text-white flex items-center justify-center mb-3 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="text-sm font-bold text-[#1E2424] mb-1">Adresse</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                Saint-Martin-d’Hères
                <br />
                France
              </p>
            </div>

            <div className="flex flex-col items-center pt-5 sm:pt-2 lg:pt-0 lg:pl-6">
              <div className="w-11 h-11 rounded-full bg-[#0B7A75] text-white flex items-center justify-center mb-3 shadow-sm">
                <Clock className="w-5 h-5" />
              </div>
              <p className="text-sm font-bold text-[#1E2424] mb-1">
                Horaires d’ouverture
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                Lun – Ven : 9h – 18h
              </p>
            </div>
          </div>
        </section>

        <section
          id="formulaire-contact"
          className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          <div className="lg:col-span-6">
            <ContactForm />
          </div>

          <div className="lg:col-span-6 bg-white rounded-2xl shadow-lg shadow-stone-200/70 border border-stone-100 overflow-hidden">
            <div className="relative h-72 sm:h-80 w-full bg-stone-100">
              <iframe
                title="Carte PRO'DECO Saint-Martin-d'Hères"
                src="https://www.openstreetmap.org/export/embed.html?bbox=5.70%2C45.15%2C5.80%2C45.21&layer=mapnik&marker=45.176%2C5.756"
                className="w-full h-full border-0"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-white rounded-xl shadow-md px-4 py-3 border border-stone-100 max-w-[230px]">
                <p className="text-sm font-bold text-[#1E2424]">PRO’DECO</p>
                <p className="text-xs text-stone-500 mb-1.5">
                  Saint-Martin-d’Hères, France
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Saint-Martin-d%27Heres+France"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B7A75] hover:underline"
                >
                  Voir sur Google Maps →
                </a>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-serif text-xl font-bold text-[#1E2424] mb-4">
                Accès facile
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
                <div className="flex items-start gap-2.5 pt-2 sm:pt-0">
                  <Car className="w-5 h-5 text-[#0B7A75] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-[#1E2424]">En voiture</p>
                    <p className="text-xs text-stone-500">Accès par A480</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-3 sm:pt-0 sm:pl-4">
                  <Footprints className="w-5 h-5 text-[#0B7A75] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-[#1E2424]">À pied</p>
                    <p className="text-xs text-stone-500">Depuis le centre-ville</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-3 sm:pt-0 sm:pl-4">
                  <Bus className="w-5 h-5 text-[#0B7A75] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-[#1E2424]">En transports</p>
                    <p className="text-xs text-stone-500">Lignes TAG</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-14">
          <div className="relative overflow-hidden bg-gradient-to-r from-[#086A66] via-[#0B7A75] to-[#16A39C] rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white shadow-md">
            <div className="flex items-center gap-5">
              <div className="hidden sm:flex w-16 h-16 rounded-2xl border-2 border-white/30 items-center justify-center shrink-0">
                <Home className="w-9 h-9 text-white/90" />
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-1">
                  Construisons ensemble votre projet !
                </h2>
                <p className="text-teal-50 text-sm">
                  PRO’DECO, votre partenaire de confiance pour tous vos travaux de rénovation.
                </p>
              </div>
            </div>

            <a
              href="#formulaire-contact"
              className="inline-flex items-center gap-2 bg-white text-[#1E2424] hover:bg-stone-100 text-sm font-semibold px-6 py-3 rounded-full transition shrink-0 shadow-sm"
            >
              Demander un devis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}