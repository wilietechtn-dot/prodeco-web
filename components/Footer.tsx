import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const INSTAGRAM_URL =
  "https://www.instagram.com/pro_deco38?lqvp=MzNvcjh3eTJ5Z3ls";

export default function Footer() {
  return (
    <footer className="bg-[#222629] text-stone-300 pt-14 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-stone-700">
        <div>
          <Link href="/" className="flex items-center gap-2.5 text-white mb-2">
            <img
              src="/images/logo.png"
              alt="Logo PRO’DECO"
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-bold">PRO’DECO</span>
          </Link>
          <p className="text-xs text-stone-400">Rénovation intérieure</p>
        </div>

        <div className="space-y-2.5">
          <p className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#12948D] shrink-0" />
            <span>Saint-Martin-d’Hères</span>
          </p>
          <a
            href="tel:0666010553"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <Phone className="w-4 h-4 text-[#12948D] shrink-0" />
            <span>0666010553</span>
          </a>
          <a
            href="mailto:Info.prodeco1@gmail.com"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <Mail className="w-4 h-4 text-[#12948D] shrink-0" />
            <span>Info.prodeco1@gmail.com</span>
          </a>
        </div>

        <div className="flex items-start gap-2.5">
          <Clock className="w-4 h-4 text-[#12948D] mt-1 shrink-0" />
          <div>
            <p className="font-semibold text-white mb-1">Horaires d’ouverture</p>
            <p className="text-xs text-stone-400">Lun – Ven :  9h – 18h</p>
          </div>
        </div>

        <div>
          <p className="font-semibold text-white mb-3">Suivez-nous</p>
          <div className="flex gap-3">
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-white text-[#222629] flex items-center justify-center hover:bg-[#12948D] hover:text-white transition"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-white text-[#222629] flex items-center justify-center hover:bg-[#12948D] hover:text-white transition"
            >
              <svg
                className="w-4 h-4 stroke-current fill-none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-white text-[#222629] flex items-center justify-center hover:bg-[#12948D] hover:text-white transition"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#"
              aria-label="YouTube"
              className="w-8 h-8 rounded-full bg-white text-[#222629] flex items-center justify-center hover:bg-[#12948D] hover:text-white transition"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}