"use client";

import { useState, FormEvent } from "react";
import { Mail, MessageSquare, Phone, Send, User, CheckCircle2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Veuillez remplir tous les champs obligatoires (*).");
      return;
    }

    setStatus("submitting");

    try {
      // Remplacez cet appel par votre route API /api/contact si besoin
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg shadow-stone-200/70 border border-stone-100">
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2424] mb-1.5">
        Envoyez-nous un message
      </h2>
      <p className="text-sm text-stone-500 mb-6">
        Notre équipe vous répondra dans les plus brefs délais.
      </p>

      {status === "success" && (
        <div className="mb-5 p-4 rounded-xl bg-teal-50 border border-teal-200 text-[#085E5A] text-sm flex items-center gap-2.5">
          <CheckCircle2 className="w-5 h-5 shrink-0 text-[#0B7A75]" />
          <span>Merci ! Votre message a bien été envoyé à l’équipe PRO’DECO.</span>
        </div>
      )}

      {errorMsg && (
        <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nom */}
        <div className="relative">
          <User className="w-4 h-4 text-[#0B7A75] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            required
            placeholder="Votre nom *"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-stone-200 bg-white text-sm text-[#1E2424] placeholder:text-stone-400 focus:outline-none focus:border-[#0B7A75] focus:ring-2 focus:ring-[#0B7A75]/15 transition"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail className="w-4 h-4 text-[#0B7A75] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="email"
            required
            placeholder="Votre email *"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-stone-200 bg-white text-sm text-[#1E2424] placeholder:text-stone-400 focus:outline-none focus:border-[#0B7A75] focus:ring-2 focus:ring-[#0B7A75]/15 transition"
          />
        </div>

        {/* Téléphone */}
        <div className="relative">
          <Phone className="w-4 h-4 text-[#0B7A75] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="tel"
            placeholder="Votre téléphone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-stone-200 bg-white text-sm text-[#1E2424] placeholder:text-stone-400 focus:outline-none focus:border-[#0B7A75] focus:ring-2 focus:ring-[#0B7A75]/15 transition"
          />
        </div>

        {/* Message */}
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-[#0B7A75] absolute left-4 top-3.5 pointer-events-none" />
          <textarea
            rows={4}
            required
            placeholder="Votre message *"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-stone-200 bg-white text-sm text-[#1E2424] placeholder:text-stone-400 focus:outline-none focus:border-[#0B7A75] focus:ring-2 focus:ring-[#0B7A75]/15 transition resize-y"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0B7A75] to-[#12948D] hover:from-[#085E5A] hover:to-[#0B7A75] text-white font-semibold text-sm py-3.5 px-6 rounded-xl shadow-md transition disabled:opacity-60 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          {status === "submitting" ? "Envoi en cours..." : "Envoyer le message →"}
        </button>
      </form>
    </div>
  );
}