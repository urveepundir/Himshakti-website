import React, { useState } from "react";
import { Leaf, Menu, ShoppingBag, X } from "lucide-react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Dashboard", "/dashboard"],
  ["Login", "/login"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-pine-900/10 bg-cream/95 backdrop-blur-xl">
      <div className="page-container flex h-20 items-center justify-between">
        <a href="/" className="flex items-center gap-3" aria-label="HimShakti home">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-pine-900 text-saffron shadow-lg">
            <Leaf size={23} fill="currentColor" />
          </span>
          <span>
            <strong className="block font-display text-xl font-extrabold tracking-tight text-pine-950">HimShakti</strong>
            <span className="block text-[8px] font-bold tracking-[0.2em] text-pine-700">FOODS OF THE HIMALAYAS</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => <a key={label} href={href} className="text-sm font-semibold text-slate-600 transition hover:text-pine-700">{label}</a>)}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <button className="grid h-10 w-10 place-items-center rounded-full border border-pine-900/10 text-pine-900"><ShoppingBag size={18} /></button>
          <a href="/dashboard" className="rounded-full bg-pine-900 px-5 py-2.5 text-sm font-bold text-white">Open platform</a>
        </div>
        <button className="grid h-11 w-11 place-items-center rounded-xl border border-pine-900/10 text-pine-950 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="page-container grid gap-2 border-t border-pine-900/10 py-4 md:hidden">
          {links.map(([label, href]) => <a key={label} href={href} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-pine-50">{label}</a>)}
        </nav>
      )}
    </header>
  );
}
