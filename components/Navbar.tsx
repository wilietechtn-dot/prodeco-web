"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

const SERVICE_ITEMS = [
  "Toutes nos prestations",
  "Peinture intérieure",
  "Isolation intérieure",
  "Revêtements de sols",
  "Rénovation complète",
];

export default function Navbar() {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(
    "Toutes nos prestations"
  );

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setServicesDropdownOpen(false);
  }

  const isHome = pathname === "/";
  const isAbout = pathname === "/a-propos";
  const isServices = pathname?.startsWith("/services") ?? false;
  const isRealisations = pathname?.startsWith("/realisations") ?? false;
  const isContact = pathname === "/contact";
  const isDevis = pathname === "/devis";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src="/images/logo.png"
            alt="Logo PRO'DECO"
            className="h-10 sm:h-11 w-auto object-contain"
          />
          <div className="leading-tight">
            <span className="block text-lg sm:text-xl font-extrabold tracking-tight text-[#1E2424]">
              PRO’DECO
            </span>
            <span className="block text-[11px] font-medium text-stone-500">
              Rénovation intérieure
            </span>
          </div>
        </Link>

        {/* Navigation Desktop */}
        <nav
          aria-label="Navigation principale"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700"
        >
          <Link
            href="/"
            className={
              isHome
                ? "text-[#0B7A75] font-semibold border-b-2 border-[#0B7A75] pb-1"
                : "hover:text-[#0B7A75] transition"
            }
          >
            Accueil
          </Link>

          <Link
            href="/a-propos"
            className={
              isAbout
                ? "text-[#0B7A75] font-semibold border-b-2 border-[#0B7A75] pb-1"
                : "hover:text-[#0B7A75] transition"
            }
          >
            À propos
          </Link>

          {/* Lien vers /services + liste déroulante simple sans redirection */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <div className="flex items-center gap-1">
              <Link
                href="/services"
                className={
                  isServices
                    ? "text-[#0B7A75] font-semibold border-b-2 border-[#0B7A75] pb-1"
                    : "hover:text-[#0B7A75] transition"
                }
              >
                Nos services
              </Link>
              <button
                type="button"
                aria-expanded={servicesDropdownOpen}
                aria-label="Ouvrir la liste des services"
                onClick={() => setServicesDropdownOpen((prev) => !prev)}
                className="p-0.5 text-stone-600 hover:text-[#0B7A75] transition cursor-pointer"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-[#0B7A75]" : ""
                  }`}
                />
              </button>
            </div>

            {servicesDropdownOpen && (
              <div className="absolute left-0 top-full pt-2 w-64 z-50">
                <ul
                  role="menu"
                  className="bg-white rounded-2xl shadow-lg border border-stone-100 py-2"
                >
                  {SERVICE_ITEMS.map((item) => {
                    const isSelected = selectedService === item;
                    return (
                      <li key={item} role="none">
                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => {
                            setSelectedService(item);
                            setServicesDropdownOpen(false);
                          }}
                          className={`w-full text-left px-5 py-3 text-base transition cursor-pointer ${
                            isSelected
                              ? "bg-[#E9F7F5] text-[#0B7A75] font-medium"
                              : "text-[#222629] hover:bg-stone-50"
                          }`}
                        >
                          {item}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          <Link
            href="/realisations"
            className={
              isRealisations
                ? "text-[#0B7A75] font-semibold border-b-2 border-[#0B7A75] pb-1"
                : "hover:text-[#0B7A75] transition"
            }
          >
            Réalisations
          </Link>

          <Link
            href="/contact"
            className={
              isContact
                ? "text-[#0B7A75] font-semibold border-b-2 border-[#0B7A75] pb-1"
                : "hover:text-[#0B7A75] transition"
            }
          >
            Contact
          </Link>
        </nav>

        {/* Bouton CTA Desktop + Bouton Burger Mobile */}
        <div className="flex items-center gap-3">
          <Link
            href="/devis"
            className={`hidden sm:inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition shadow-sm shrink-0 ${
              isDevis
                ? "bg-[#085E5A] ring-2 ring-[#0B7A75]/40"
                : "bg-[#0B7A75] hover:bg-[#085E5A]"
            }`}
          >
            Demander un devis <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            className="lg:hidden w-10 h-10 rounded-lg border border-stone-200 flex items-center justify-center text-[#1E2424] hover:border-[#0B7A75] hover:text-[#0B7A75] transition cursor-pointer"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile dépliable */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col space-y-1 text-base font-medium text-stone-700">
            <Link
              href="/"
              className={`px-3 py-2.5 rounded-lg transition ${
                isHome
                  ? "bg-teal-50 text-[#0B7A75] font-semibold"
                  : "hover:bg-stone-50 hover:text-[#0B7A75]"
              }`}
            >
              Accueil
            </Link>

            <Link
              href="/a-propos"
              className={`px-3 py-2.5 rounded-lg transition ${
                isAbout
                  ? "bg-teal-50 text-[#0B7A75] font-semibold"
                  : "hover:bg-stone-50 hover:text-[#0B7A75]"
              }`}
            >
              À propos
            </Link>

            {/* Lien vers /services + accordéon liste simple sans redirection sur mobile */}
            <div>
              <div
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition ${
                  isServices
                    ? "bg-teal-50 text-[#0B7A75] font-semibold"
                    : "hover:bg-stone-50 hover:text-[#0B7A75]"
                }`}
              >
                <Link href="/services" className="flex-grow">
                  Nos services
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  aria-expanded={mobileServicesOpen}
                  aria-label="Afficher la liste des services"
                  className="p-1 cursor-pointer"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="mt-1 ml-3 pl-3 border-l-2 border-[#0B7A75]/30 flex flex-col space-y-1">
                  {SERVICE_ITEMS.map((item) => {
                    const isSelected = selectedService === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => {
                          setSelectedService(item);
                          setMobileServicesOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition cursor-pointer ${
                          isSelected
                            ? "bg-[#E9F7F5] text-[#0B7A75] font-semibold"
                            : "text-stone-600 hover:text-[#0B7A75] hover:bg-stone-50"
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/realisations"
              className={`px-3 py-2.5 rounded-lg transition ${
                isRealisations
                  ? "bg-teal-50 text-[#0B7A75] font-semibold"
                  : "hover:bg-stone-50 hover:text-[#0B7A75]"
              }`}
            >
              Réalisations
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2.5 rounded-lg transition ${
                isContact
                  ? "bg-teal-50 text-[#0B7A75] font-semibold"
                  : "hover:bg-stone-50 hover:text-[#0B7A75]"
              }`}
            >
              Contact
            </Link>

            <div className="pt-3">
              <Link
                href="/devis"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0B7A75] hover:bg-[#085E5A] text-white text-sm font-semibold px-5 py-3 rounded-full transition shadow-sm"
              >
                Demander un devis <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}