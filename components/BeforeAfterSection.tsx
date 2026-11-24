"use client";

import { useState } from "react";
import { BEFORE_AFTER_PROJECTS } from "@/data/siteData";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfterSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);

  const current = BEFORE_AFTER_PROJECTS[selectedIndex];

  return (
    <section id="avant-apres" className="bg-[#FAF8F5] py-20 border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-12 h-0.5 bg-[#0B7A75]" />
          <h2 className="font-serif text-3xl font-bold text-center text-[#1E2424]">
            Avant / Après
          </h2>
          <span className="w-12 h-0.5 bg-[#0B7A75]" />
        </div>

        <p className="text-center text-stone-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
          Faites glisser le curseur pour comparer l’état initial et le rendu final de nos chantiers.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {BEFORE_AFTER_PROJECTS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setSelectedIndex(idx);
                setSliderPos(50);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition cursor-pointer ${
                selectedIndex === idx
                  ? "bg-[#0B7A75] text-white shadow-sm"
                  : "bg-white text-[#1E2424] border border-stone-200 hover:border-[#0B7A75]"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md border border-stone-100 overflow-hidden">
          <div className="relative h-72 sm:h-96 md:h-[460px] w-full select-none overflow-hidden">
            <img
              src={current.afterImage}
              alt={`${current.title} - Après`}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={current.beforeImage}
                alt={`${current.title} - Avant`}
                className="absolute inset-0 w-full h-full max-w-none object-cover"
              />
            </div>

            <span className="absolute top-4 left-4 bg-[#1E2424]/80 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Avant
            </span>
            <span className="absolute top-4 right-4 bg-[#0B7A75]/90 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Après
            </span>

            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-md pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-[#0B7A75] shadow-lg flex items-center justify-center border border-stone-200">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>

            <input
              type="range"
              min={0}
              max={100}
              value={sliderPos}
              aria-label="Comparer avant et après"
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
            />
          </div>

          <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B7A75]">
                {current.category}
              </span>
              <h3 className="text-lg font-bold text-[#1E2424]">{current.title}</h3>
              <p className="text-sm text-stone-600 mt-1">{current.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}