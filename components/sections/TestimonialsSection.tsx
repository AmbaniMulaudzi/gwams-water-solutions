// components/sections/TestimonialsSection.tsx
"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Tshilidzi Mudau",
    location: "Nzhelele, Limpopo",
    rating: 5,
    review:
      "GWAMS did an excellent job installing our borehole pump. The team was professional and worked quickly. We now have reliable water supply for our whole family. Highly recommended!",
    service: "Borehole Pump Installation",
    initials: "TM",
  },
  {
    name: "Vhonani Netshitomboni",
    location: "Thohoyandou, Limpopo",
    rating: 5,
    review:
      "We struggled with low water pressure for years. GWAMS installed a pressure pump system and the difference was immediate. Clean, strong water pressure in every tap. Great service and very affordable!",
    service: "Pressure Pump Installation",
    initials: "VN",
  },
  {
    name: "Mashudu Ramabulana",
    location: "Louis Trichardt",
    rating: 5,
    review:
      "Our borehole pump broke down and Ambani and his team came out quickly. They diagnosed the problem fast and had it repaired within hours. Very professional and fairly priced.",
    service: "Borehole Pump Repair",
    initials: "MR",
  },
  {
    name: "Fhedzisani Tshivhula",
    location: "Thohoyandou",
    rating: 5,
    review:
      "I've used GWAMS for two properties now. Their work is consistent and they stand behind what they install. Response time on WhatsApp is fast too. Will use them again!",
    service: "Borehole Pump Installation",
    initials: "FT",
  },
  {
    name: "Ndivhuwo Makhuvha",
    location: "Mutale",
    rating: 5,
    review:
      "The pressure pump installation transformed our water supply. We went from a trickle to great pressure throughout the house. Ambani explained everything clearly. 10/10 service!",
    service: "Pressure Pump Installation",
    initials: "NM",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#091c42] via-[#0b4d8c] to-[#0288d1] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Customer Reviews
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-blue-200/80 max-w-xl mx-auto">
            Don't just take our word for it — hear from our satisfied customers across Limpopo.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-10">
            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {[...Array(testimonials[active].rating)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FFC107">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            <blockquote className="text-white text-lg leading-relaxed mb-6 font-body">
              "{testimonials[active].review}"
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-water-teal rounded-full flex items-center justify-center font-display font-bold text-white text-sm shrink-0">
                {testimonials[active].initials}
              </div>
              <div>
                <div className="font-display font-bold text-white">{testimonials[active].name}</div>
                <div className="text-blue-200/70 text-sm">{testimonials[active].location}</div>
                <div className="text-primary-300 text-xs font-semibold mt-0.5">{testimonials[active].service}</div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center transition-colors"
            >
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? "bg-white w-6" : "bg-white/30"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center transition-colors"
            >
              
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
