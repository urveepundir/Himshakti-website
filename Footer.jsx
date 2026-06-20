import React from "react";
import { Leaf, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-pine-950 text-white">
      <div className="page-container grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-saffron"><Leaf size={21} fill="currentColor" /></span><strong className="font-display text-xl">HimShakti</strong></div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">Technology that helps Himalayan food producers grow with less waste, better planning, and stronger market access.</p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-saffron">Explore</h3>
          <div className="mt-5 grid gap-3 text-sm text-white/60"><a href="/">Home</a><a href="/about">About</a><a href="/dashboard">Dashboard</a><a href="/login">Login</a></div>
        </div>
        <div>
          <h3 className="text-sm font-bold text-saffron">Contact</h3>
          <div className="mt-5 grid gap-4 text-sm text-white/60"><span className="flex items-center gap-3"><MapPin size={17} /> Haldwani, Uttarakhand</span><span className="flex items-center gap-3"><Mail size={17} /> hello@himshakti.in</span></div>
        </div>
      </div>
      <div className="border-t border-white/10"><div className="page-container flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:justify-between"><span>© 2026 HimShakti Foods.</span><span>Intern ID TBI-26100683</span></div></div>
    </footer>
  );
}
