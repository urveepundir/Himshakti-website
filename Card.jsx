import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Card({ icon: Icon, title, description, accent }) {
  return (
    <article className="group rounded-[2rem] border border-pine-900/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft sm:p-8">
      <div className={`mb-8 grid h-14 w-14 place-items-center rounded-2xl ${accent}`}><Icon size={25} /></div>
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-bold tracking-tight text-pine-950">{title}</h3>
        <ArrowUpRight size={20} className="shrink-0 text-slate-300 group-hover:text-pine-700" />
      </div>
      <p className="mt-3 text-sm leading-7 text-slate-500">{description}</p>
    </article>
  );
}
