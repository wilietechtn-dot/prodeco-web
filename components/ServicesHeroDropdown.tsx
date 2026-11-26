"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const DROPDOWN_LIST = [
  "Toutes nos prestations",
  "Peinture intérieure",
  "Isolation intérieure",
  "Revêtements de sols",
  "Rénovation complète",
];

export default function ServicesHeroDropdown() {
  const [listOpen, setListOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Toutes nos prestations");

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setListOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 bg-[#0B7A75] hover:bg-[#085E5A] text-white text-sm font-semibold px-6 py-3 rounded-full transition shadow-md cursor-pointer"
      >
        <span>Nos services</span>
        {listOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      {listOpen && (
        <ul
          role="menu"
          className="absolute left-0 mt-2 w-64 rounded-2xl bg-white py-2 shadow-lg border border-stone-100 z-50"
        >
          {DROPDOWN_LIST.map((item) => {
            const isSelected = selectedItem === item;
            return (
              <li key={item} role="none">
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    setSelectedItem(item);
                    setListOpen(false);
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
      )}
    </div>
  );
}