// components/sections/HeroSection.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Support Available" },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[#040e24]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#071a3e] via-[#0a3a7a] to-[#0369a1] opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(14,116,196,0.35),transparent)]" />
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[100px]" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[2px] h-[120%] bg-gradient-to-b from-transparent via-white/10 to-transparent rotate-[25deg]"
          style={{ left: "30%", top: "-10%" }}
        />
        <div
          className="absolute w-[1px] h-[120%] bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent rotate-[25deg]"
          style={{ left: "55%", top: "-10%" }}
        />
      </div>

      {mounted && [1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div
          key={i}
          className="absolute animate-float pointer-events-none"
          style={{
            left: `${8 + i * 13}%`,
            top: `${15 + (i % 4) * 18}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${5 + i}s`,
            opacity: 0.08 + (i % 3) * 0.05,
          }}
        >
          <svg width={20 + i * 4} height={26 + i * 4} viewBox="0 0 24 30" fill="white">
            <path d="M12 0C12 0 2 12 2 19a10 10 0 0020 0C22 12 12 0 12 0z" />
          </svg>
        </div>
      ))}

      <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none hidden lg:block">
        <img src="/logo.svg" alt="" className="w-[520px] h-[520px]" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none" style={{ height: "120px" }}>
          <path d="M0,60 C180,100 360,20 540,60 C720,100 900,20 1080,60 C1260,100 1350,40 1440,60 L1440,120 L0,120 Z" fill="rgba(255,255,255,0.03)" />
          <path d="M0,80 C240,40 480,100 720,70 C960,40 1200,90 1440,70 L1440,120 L0,120 Z" fill="rgba(255,255,255,0.04)" />
        </svg>
      </div>

      <div className="container-custom relative z-10 pt-28 pb-24">
        <div className="max-w-4xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Serving Limpopo & Beyond
          </div>

          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-7xl leading-tight mb-6 drop-shadow-lg">
            Water Is Life —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7dd3fc] via-[#38bdf8] to-[#22d3ee]">
              We Make It Flow!
            </span>
          </h1>

          <p className="text-blue-200/90 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Professional borehole pump installation & repair, pressure pump installation, and water tank solutions for homes, farms, businesses & communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/contact" className="btn-primary text-base px-8 py-4 shadow-xl hover:scale-105 transition-transform duration-200">
              Get a Free Quote
              <ArrowRight />
            </Link>
              <a
              href="https://wa.me/27663644104?text=Hi%20GWAMS!%20I%20need%20water%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base px-8 py-4 shadow-xl hover:scale-105 transition-transform duration-200"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center hover:bg-white/20 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl" />
                <div className="relative z-10">
                  <div className="font-display font-extrabold text-3xl text-white mb-1 drop-shadow">
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-200/80">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-blue-300/50 text-sm flex items-center justify-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Licensed • Insured • Trusted across Limpopo
          </p>

        </div>
      </div>
    </section>
  );
}

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);