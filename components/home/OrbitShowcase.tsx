"use client";

import Image from "next/image";
import { 
  Code2, 
  TrendingUp, 
  Palette, 
  Layers, 
  Cpu, 
  Search, 
  ShoppingBag,
  Database
} from "lucide-react";

export default function OrbitShowcase() {
  return (
    <div className="relative w-full aspect-square max-w-[320px] sm:max-w-[420px] lg:max-w-[500px] mx-auto flex items-center justify-center select-none overflow-hidden sm:overflow-visible my-4 sm:my-0">
      {/* Glow Center Ambient Background */}
      <div className="absolute w-52 sm:w-72 h-52 sm:h-72 bg-gradient-to-tr from-[#F07825]/30 via-[#FF8C42]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Outer Orbit Track */}
      <div className="absolute w-[250px] sm:w-[350px] md:w-[410px] h-[250px] sm:h-[350px] md:h-[410px] rounded-full border border-dashed border-[#F07825]/30 animate-spin-slow pointer-events-none">
        {/* Node 1: Next.js / Web Dev */}
        <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 p-2 sm:p-2.5 bg-neutral-900/95 text-white rounded-xl sm:rounded-2xl shadow-lg border border-neutral-700/80 flex items-center gap-1.5 animate-reverse-spin">
          <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F07825]" />
          <span className="text-[10px] sm:text-[11px] font-bold text-neutral-200 hidden sm:inline-block">Next.js & Web</span>
        </div>

        {/* Node 2: SEO & Growth */}
        <div className="absolute top-1/2 -right-4 sm:-right-5 -translate-y-1/2 p-2 sm:p-2.5 bg-neutral-900/95 text-white rounded-xl sm:rounded-2xl shadow-lg border border-neutral-700/80 flex items-center gap-1.5 animate-reverse-spin">
          <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F07825]" />
          <span className="text-[10px] sm:text-[11px] font-bold text-neutral-200 hidden sm:inline-block">Technical SEO</span>
        </div>

        {/* Node 3: E-Commerce */}
        <div className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 p-2 sm:p-2.5 bg-neutral-900/95 text-white rounded-xl sm:rounded-2xl shadow-lg border border-neutral-700/80 flex items-center gap-1.5 animate-reverse-spin">
          <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F07825]" />
          <span className="text-[10px] sm:text-[11px] font-bold text-neutral-200 hidden sm:inline-block">E-Commerce</span>
        </div>

        {/* Node 4: Brand Identity */}
        <div className="absolute top-1/2 -left-4 sm:-left-5 -translate-y-1/2 p-2 sm:p-2.5 bg-neutral-900/95 text-white rounded-xl sm:rounded-2xl shadow-lg border border-neutral-700/80 flex items-center gap-1.5 animate-reverse-spin">
          <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F07825]" />
          <span className="text-[10px] sm:text-[11px] font-bold text-neutral-200 hidden sm:inline-block">Brand Design</span>
        </div>
      </div>

      {/* Middle Orbit Track */}
      <div className="absolute w-[165px] sm:w-[230px] md:w-[270px] h-[165px] sm:h-[230px] md:h-[270px] rounded-full border border-neutral-800 animate-spin-reverse-medium pointer-events-none">
        {/* Node 5: React.js */}
        <div className="absolute -top-3.5 sm:-top-4 left-1/2 -translate-x-1/2 p-1.5 sm:p-2 bg-black text-white rounded-lg sm:rounded-xl shadow-md border border-neutral-750 flex items-center gap-1 animate-counter-spin">
          <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF8C42]" />
          <span className="text-[9px] sm:text-[10px] font-semibold hidden sm:inline-block">React</span>
        </div>

        {/* Node 6: Cloud & API */}
        <div className="absolute top-1/2 -right-3.5 sm:-right-4 -translate-y-1/2 p-1.5 sm:p-2 bg-black text-white rounded-lg sm:rounded-xl shadow-md border border-neutral-750 flex items-center gap-1 animate-counter-spin">
          <Database className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF8C42]" />
          <span className="text-[9px] sm:text-[10px] font-semibold hidden sm:inline-block">APIs</span>
        </div>

        {/* Node 7: Marketing */}
        <div className="absolute -bottom-3.5 sm:-bottom-4 left-1/2 -translate-x-1/2 p-1.5 sm:p-2 bg-black text-white rounded-lg sm:rounded-xl shadow-md border border-neutral-750 flex items-center gap-1 animate-counter-spin">
          <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF8C42]" />
          <span className="text-[9px] sm:text-[10px] font-semibold hidden sm:inline-block">Growth</span>
        </div>

        {/* Node 8: TypeScript */}
        <div className="absolute top-1/2 -left-3.5 sm:-left-4 -translate-y-1/2 p-1.5 sm:p-2 bg-black text-white rounded-lg sm:rounded-xl shadow-md border border-neutral-750 flex items-center gap-1 animate-counter-spin">
          <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF8C42]" />
          <span className="text-[9px] sm:text-[10px] font-semibold hidden sm:inline-block">TypeScript</span>
        </div>
      </div>

      {/* Inner Central Core */}
      <div className="relative z-10 w-20 h-20 sm:w-26 sm:h-26 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#F07825] to-[#FF8C42] p-1 shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
        <div className="w-full h-full bg-neutral-950 rounded-[14px] sm:rounded-[22px] flex flex-col items-center justify-center p-2 text-center shadow-inner border border-neutral-800">
          <Image
            src="/logo.svg"
            alt="Zavera.Tech Core"
            width={32}
            height={32}
            className="animate-pulse w-7 h-7 sm:w-9 sm:h-9"
          />
          <span className="text-[9px] sm:text-[10px] font-black text-white tracking-tight mt-1">
            Zavera<span className="text-[#F07825]">.tech</span>
          </span>
          <span className="text-[6px] text-neutral-400 font-bold uppercase tracking-wider hidden sm:block">
            HQ Abbottabad
          </span>
        </div>
      </div>

      {/* Live Status Pill */}
      <div className="absolute -bottom-3 sm:-bottom-4 bg-neutral-900/90 backdrop-blur-md border border-neutral-800 rounded-full px-3 py-1 sm:px-3.5 sm:py-1.5 shadow-md flex items-center gap-2 text-xs font-semibold text-neutral-200">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span className="w-2 h-2 rounded-full bg-emerald-500 absolute left-3 sm:left-3.5" />
        <span className="pl-3 text-[10px] sm:text-[11px] truncate max-w-[200px] sm:max-w-none">Active Ecosystem &bull; Ready</span>
      </div>
    </div>
  );
}
