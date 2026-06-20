import React from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-pine-950 text-white">
      <div className="absolute inset-0">
        <img src="/assets/himshakti-hero.png" alt="Natural Himalayan food products" className="h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-pine-950 via-pine-950/90 to-pine-950/20" />
      </div>
      <div className="page-container relative flex min-h-[680px] items-center py-24 sm:min-h-[720px]">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-amber-200 backdrop-blur">
            <Sparkles size={15} /> AI-powered growth for Himalayan foods
          </div>
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Tradition, powered by <span className="text-saffron">intelligence.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
            Inventory, production, forecasting, and direct sales in one smart platform—built for the food producers of Uttarakhand.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="/dashboard" className="inline-flex items-center justify-center gap-2 rounded-full bg-saffron px-6 py-3.5 text-sm font-extrabold text-pine-950">
              Explore the platform <ArrowRight size={18} />
            </a>
            <a href="/about" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur">
              <Play size={16} fill="currentColor" /> Our story
            </a>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-9 gap-y-4 border-t border-white/15 pt-7">
            {[["30%", "less wastage"], ["24/7", "smart monitoring"], ["100%", "local sourcing"]].map(([value, label]) => (
              <div key={label}><strong className="block font-display text-xl">{value}</strong><span className="text-xs text-white/55">{label}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
