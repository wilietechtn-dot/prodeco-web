"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, ShieldCheck } from "lucide-react";

const SERVICE_OPTIONS = [
  "Peinture intérieure",
  "Isolation intérieure",
  "Revêtements de sols",
  "Rénovation complète",
  "Aménagement / Salle de bain",
];

const BUDGET_OPTIONS = [
  "Moins de 5 000 €",
  "5 000 € – 15 000 €",
  "15 000 € – 30 000 €",
  "Plus de 30 000 €",
  "À définir ensemble",
];

const TIMELINE_OPTIONS = [
  "Dès que possible",
  "Dans 1 à 3 mois",
  "Dans 3 à 6 mois",
  "Projet à planifier",
];

export default function DevisForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Saint-Martin-d’Hères");
  const [serviceType, setServiceType] = useState(SERVICE_OPTIONS[0]);
  const [surface, setSurface] = useState("");
  const [budget, setBudget] = useState(BUDGET_OPTIONS[1]);
  const [timeline, setTimeline] = useState(TIMELINE_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const [accepted, setAccepted] = useState(true);

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!accepted) {
      setErrorMsg(
        "Veuillez accepter le traitement de vos données pour envoyer votre demande."
      );
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          city,
          serviceType,
          surface,
          budget,
          timeline,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMsg(
          data?.error || "Impossible d’envoyer la demande pour le moment."
        );
      } else {
        setSuccessMsg(
          data?.message ||
            "Votre demande de devis a bien été envoyée à Info.prodeco1@gmail.com."
        );
        setFullName("");
        setEmail("");
        setPhone("");
        setSurface("");
        setMessage("");
      }
    } catch {
      setErrorMsg("Erreur réseau. Veuillez réessayer dans quelques instants.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg shadow-stone-200/70 border border-stone-100 p-6 sm:p-8">
      <div className="mb-6">
        <span className="block text-xs font-extrabold tracking-[0.2em] uppercase text-[#0B7A75] mb-1.5">
          Formulaire de devis gratuit
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2424]">
          Décrivez votre projet de rénovation
        </h2>
        <p className="text-xs sm:text-sm text-stone-500 mt-1">
          Votre demande est transmise directement à{" "}
          <strong className="text-[#1E2424]">Info.prodeco1@gmail.com</strong>.
        </p>
      </div>

      {successMsg && (
        <div className="mb-6 rounded-xl bg-teal-50 border border-[#0B7A75]/30 p-4 text-sm text-[#085E5A] flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#0B7A75] shrink-0 mt-0.5" />
          <p>{successMsg}</p>
        </div>
      )}

      {errorMsg && (
        <div className="mb-6 rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-bold text-[#1E2424] mb-1.5"
            >
              Nom complet *
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Ex. Camille Laurent"
              className="w-full rounded-xl border border-stone-200 bg-[#FAF8F5] px-4 py-2.5 text-sm text-[#1E2424] focus:border-[#0B7A75] focus:bg-white focus:outline-none transition"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-bold text-[#1E2424] mb-1.5"
            >
              Adresse e-mail *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="camille@exemple.fr"
              className="w-full rounded-xl border border-stone-200 bg-[#FAF8F5] px-4 py-2.5 text-sm text-[#1E2424] focus:border-[#0B7A75] focus:bg-white focus:outline-none transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-bold text-[#1E2424] mb-1.5"
            >
              Téléphone *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="06 00 00 00 00"
              className="w-full rounded-xl border border-stone-200 bg-[#FAF8F5] px-4 py-2.5 text-sm text-[#1E2424] focus:border-[#0B7A75] focus:bg-white focus:outline-none transition"
            />
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-xs font-bold text-[#1E2424] mb-1.5"
            >
              Ville / Code postal
            </label>
            <input
              id="city"
              name="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Saint-Martin-d’Hères (38400)"
              className="w-full rounded-xl border border-stone-200 bg-[#FAF8F5] px-4 py-2.5 text-sm text-[#1E2424] focus:border-[#0B7A75] focus:bg-white focus:outline-none transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="serviceType"
              className="block text-xs font-bold text-[#1E2424] mb-1.5"
            >
              Type de prestation *
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full rounded-xl border border-stone-200 bg-[#FAF8F5] px-4 py-2.5 text-sm text-[#1E2424] focus:border-[#0B7A75] focus:bg-white focus:outline-none transition"
            >
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="surface"
              className="block text-xs font-bold text-[#1E2424] mb-1.5"
            >
              Surface approximative (m²)
            </label>
            <input
              id="surface"
              name="surface"
              type="number"
              min="1"
              value={surface}
              onChange={(e) => setSurface(e.target.value)}
              placeholder="Ex. 65"
              className="w-full rounded-xl border border-stone-200 bg-[#FAF8F5] px-4 py-2.5 text-sm text-[#1E2424] focus:border-[#0B7A75] focus:bg-white focus:outline-none transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="budget"
              className="block text-xs font-bold text-[#1E2424] mb-1.5"
            >
              Budget envisagé
            </label>
            <select
              id="budget"
              name="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full rounded-xl border border-stone-200 bg-[#FAF8F5] px-4 py-2.5 text-sm text-[#1E2424] focus:border-[#0B7A75] focus:bg-white focus:outline-none transition"
            >
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="timeline"
              className="block text-xs font-bold text-[#1E2424] mb-1.5"
            >
              Délai souhaité
            </label>
            <select
              id="timeline"
              name="timeline"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="w-full rounded-xl border border-stone-200 bg-[#FAF8F5] px-4 py-2.5 text-sm text-[#1E2424] focus:border-[#0B7A75] focus:bg-white focus:outline-none transition"
            >
              {TIMELINE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs font-bold text-[#1E2424] mb-1.5"
          >
            Détails de votre projet *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Précisez les pièces concernées, l’état actuel, vos envies de finitions..."
            className="w-full rounded-xl border border-stone-200 bg-[#FAF8F5] px-4 py-3 text-sm text-[#1E2424] focus:border-[#0B7A75] focus:bg-white focus:outline-none transition"
          />
        </div>

        <label className="flex items-start gap-2.5 text-xs text-stone-600 cursor-pointer">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="mt-0.5 rounded border-stone-300 text-[#0B7A75] focus:ring-[#0B7A75]"
          />
          <span>
            J’accepte que les informations saisies soient utilisées pour
            établir mon devis personnalisé et me recontacter.
          </span>
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B7A75] hover:bg-[#085E5A] disabled:opacity-60 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition shadow-sm cursor-pointer"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Envoi en cours...
            </>
          ) : (
            <>
              Envoyer ma demande de devis <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="inline-flex items-center gap-1.5 text-xs text-stone-500 pt-1">
          <ShieldCheck className="w-4 h-4 text-[#0B7A75] shrink-0" />
          Devis gratuit et sans engagement • Réponse rapide
        </p>
      </form>
    </div>
  );
}