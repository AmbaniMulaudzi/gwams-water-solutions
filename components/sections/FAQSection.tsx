// components/sections/FAQSection.tsx
"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does a borehole pump installation take?",
    answer:
      "A standard borehole pump installation typically takes 4–8 hours depending on the depth of the borehole and complexity of the setup. We include all components: the pump, cable, control box, safety rope, and fittings.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We primarily service Limpopo province including Nzhelele, Tshakhuma, Thohoyandou, Louis Trichardt, Makhado, and surrounding areas. Contact us for availability in your specific area.",
  },
  {
    question: "Do you offer a warranty on your work?",
    answer:
      "Yes, all our installations come with a workmanship warranty. We also assist with manufacturer warranties on pumps and equipment. Our goal is your long-term satisfaction.",
  },
  {
    question: "What brands of pumps do you install?",
    answer:
      "We install and repair a wide range of pump brands including DAB, Grundfos, Pedrollo, Franklin Electric, Metaplast, and other quality brands available in South Africa.",
  },
  {
    question: "Can you install a water tank on my existing property?",
    answer:
      "Absolutely! We handle the complete installation including, plumbing connections, overflow and outlet fittings. We work with JoJo tanks and other poly tank brands.",
  },
  {
    question: "How do I know if my borehole pump needs repair?",
    answer:
      "Common signs include reduced or no water flow, pump running but no water, unusual noises, or electrical issues. Contact us immediately — early diagnosis can save the pump and prevent costly damage.",
  },
  {
    question: "Do you offer free quotes?",
    answer:
      "Yes, we offer free site assessments and quotations. Contact us via WhatsApp or phone to schedule a visit. We provide transparent pricing with no hidden costs.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#0a1628]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge mb-4">FAQ</span>
            <h2 className="section-heading mb-4">Frequently Asked Questions</h2>
            <p className="section-subheading mx-auto">
              Everything you need to know about our water solutions services.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  open === i
                    ? "border-primary-300 dark:border-primary-700 shadow-water"
                    : "border-[#dce6f5] dark:border-[#1e3558]"
                } bg-white dark:bg-[#111e38]`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className={`font-display font-semibold text-sm sm:text-base transition-colors ${
                    open === i ? "text-primary-600 dark:text-primary-400" : "text-[#0d1b3e] dark:text-white"
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    open === i ? "bg-primary-600 text-white rotate-180" : "bg-[#f0f4ff] dark:bg-[#1e3558] text-[#536080] dark:text-[#8ba3c7]"
                  }`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                {open === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-[#536080] dark:text-[#8ba3c7] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center p-6 bg-primary-50 dark:bg-primary-950/30 rounded-2xl border border-primary-100 dark:border-primary-900">
            <p className="text-[#536080] dark:text-[#8ba3c7] mb-3">
              Still have questions? We're happy to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:0663644104" className="btn-primary text-sm">
                Call: 066 364 4104
              </a>
              <a
                href="https://wa.me/27663644104"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
