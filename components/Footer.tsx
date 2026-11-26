import Link from "next/link";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#182022] text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <p className="font-serif text-xl font-bold text-white mb-2">
            PRO’DECO
          </p>
          <p className="text-stone-400 leading-relaxed mb-4">
            Rénovation intérieure, peinture, isolation et revêtements de sols à
            Saint-Martin-d’Hères.
          </p>
          <a
            href="https://www.instagram.com/pro_deco38"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-stone-800 hover:bg-[#0B7A75] text-white text-xs font-medium transition"
          >
            <span>Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div>
          <p className="font-bold text-white uppercase tracking-wider text-xs mb-3">
            Navigation
          </p>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/a-propos" className="hover:text-white transition">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Nos services
              </Link>
            </li>
            <li>
              <Link
                href="/realisations"
                className="hover:text-white transition"
              >
                Nos réalisations
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-bold text-white uppercase tracking-wider text-xs mb-3">
            Contact direct
          </p>
          <ul className="space-y-2.5 text-stone-300">
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#52B2AD] shrink-0" />
              <a href="tel:0666010553" className="hover:text-white transition">
                06 66 01 05 53
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#52B2AD] shrink-0" />
              <a
                href="mailto:info.prodeco1@gmail.com"
                className="hover:text-white transition"
              >
                info.prodeco1@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#52B2AD] shrink-0" />
              <span>Saint-Martin-d’Hères, France</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-800/80 py-4 px-6 text-center text-xs text-stone-500">
        © 2026 PRO’DECO — Tous droits réservés.
      </div>
    </footer>
  );
}