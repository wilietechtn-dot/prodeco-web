"use client";

import { useState } from "react";
import {
  BedDouble,
  Home,
  Layers,
  PaintRoller,
  Wrench,
} from "lucide-react";

export type CategoryFilter =
  | "Tous"
  | "Peinture"
  | "Isolation"
  | "Revêtements de sols"
  | "Rénovation complète";

interface ProjectCard {
  id: string;
  label: string;
  category: Exclude<CategoryFilter, "Tous">;
  image: string;
  beforeImage?: string;
  icon: React.ComponentType<{ className?: string }>;
}

const FILTERS: {
  label: CategoryFilter;
  icon?: React.ComponentType<{ className?: string }>;
}[] = [
  { label: "Tous" },
  { label: "Peinture", icon: PaintRoller },
  { label: "Isolation", icon: Home },
  { label: "Revêtements de sols", icon: Layers },
  { label: "Rénovation complète", icon: Wrench },
];

const PROJECTS: ProjectCard[] = [
  {
    id: "reno-complete",
    label: "Rénovation complète",
    category: "Rénovation complète",
    image: "/images/chantier-couloir-apres.jpg",
    beforeImage: "/images/chantier-couloir-bois-avant.jpg",
    icon: Home,
  },
  {
    id: "peinture-cuisine",
    label: "Peinture intérieure",
    category: "Peinture",
    image: "/images/hero-salon.jpg",
    icon: PaintRoller,
  },
  {
    id: "amenagement-chambre",
    label: "Aménagement intérieur",
    category: "Peinture",
    image: "/images/chantier-chambre-verte.jpg",
    icon: BedDouble,
  },
  {
    id: "sols-couloir",
    label: "Revêtements de sols",
    category: "Revêtements de sols",
    image: "/images/chantier-mezzanine-parquet.jpg",
    icon: Layers,
  },
  {
    id: "isolation-combles",
    label: "Isolation intérieure",
    category: "Isolation",
    image: "/images/chantier-entrepot-apres.jpg",
    icon: Home,
  },
  {
    id: "salle-de-bain",
    label: "Agencement & cuisine",
    category: "Rénovation complète",
    image: "/images/chantier-cuisine-noire.jpg",
    icon: Wrench,
  },
];

export default function RealisationsGallery() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("Tous");

  const filteredProjects =
    activeFilter === "Tous"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <section id="projets" className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {FILTERS.map((filter) => {
          const Icon = filter.icon;
          const isActive = activeFilter === filter.label;

          return (
            <button
              key={filter.label}
              type="button"
              onClick={() => setActiveFilter(filter.label)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition cursor-pointer ${
                isActive
                  ? "bg-[#0B7A75] text-white shadow-sm"
                  : "bg-white text-[#1E2424] border border-[#0B7A75]/40 hover:border-[#0B7A75] hover:text-[#0B7A75]"
              }`}
            >
              {Icon && (
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? "text-white" : "text-[#0B7A75]"
                  }`}
                />
              )}
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => {
          const Icon = project.icon;
          const hasSplit = Boolean(project.beforeImage);

          return (
            <div
              key={project.id}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-stone-200/80 block bg-stone-200 select-none"
            >
              {hasSplit && project.beforeImage ? (
                <>
                  <img
                    src={project.beforeImage}
                    alt={`${project.label} - Avant`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      clipPath: "polygon(62% 0, 100% 0, 100% 100%, 42% 100%)",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={`${project.label} - Après`}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                  >
                    <line
                      x1="62"
                      y1="0"
                      x2="42"
                      y2="100"
                      stroke="#FFFFFF"
                      strokeWidth="1.2"
                    />
                  </svg>

                  <span className="absolute top-3.5 left-3.5 bg-[#222629]/85 text-white text-xs font-semibold px-3.5 py-1 rounded-full">
                    Avant
                  </span>
                  <span className="absolute top-3.5 right-3.5 bg-[#0B7A75] text-white text-xs font-semibold px-3.5 py-1 rounded-full shadow-sm">
                    Après
                  </span>
                </>
              ) : (
                <img
                  src={project.image}
                  alt={project.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              )}

              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />

              <div className="absolute bottom-3.5 left-3.5 inline-flex items-center gap-2 bg-[#222629]/85 text-white text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-lg">
                <Icon className="w-4 h-4 text-white shrink-0" />
                <span>{project.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}