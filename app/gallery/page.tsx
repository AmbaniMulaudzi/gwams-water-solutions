// app/gallery/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import CTABanner from "@/components/sections/CTABanner";

const categories = ["All", "Borehole", "Tank", "Pump", "Installation", "Repair"];

const galleryItems = [
  {
    id: 1,
    title: "DAB Borehole Pump Kit",
    category: "Borehole",
    description: "Complete DAB submersible pump kit with control box, safety rope and power cable — ready for installation.",
    src: "/images/gallery/gallery-borehole-kit-dab.jpg",
  },
  {
    id: 2,
    title: "Borehole Pump Kit",
    category: "Borehole",
    description: "Stainless steel submersible pump kit with control box, power cable and safety rope.",
    src: "/images/gallery/gallery-borehole-kit-2.jpg",
  },
  {
    id: 3,
    title: "Submersible Pump Kit",
    category: "Borehole",
    description: "Complete borehole pump kit with control box, cable and all fittings included.",
    src: "/images/gallery/gallery-borehole-kit-3.jpg",
  },
  {
    id: 4,
    title: "Water Tank Installation",
    category: "Tank",
    description: "5000L JoJo tank installed on a professionally built brick stand with full plumbing.",
    src: "/images/gallery/gallery-jojo-tank.jpg",
  },
  {
    id: 5,
    title: "Water Tank & Pressure Pump System",
    category: "Tank & Pressure Pump Installation",
    description: "Green JoJo tank with pressure pump and filtration system — complete water solution.",
    src: "/images/gallery/gallery-complete-system.jpg",
  },
 
  {
    id: 7,
    title: "Pump with Filtration",
    category: "Pump",
    description: "Teal centrifugal pump with dual inline filtration units for clean, consistent water pressure.",
    src: "/images/gallery/gallery-pump-filtration.jpg",
  },
  {
    id: 8,
    title: "Water Booster/Pressure Pumps",
    category: "Pressure Pump",
    description: "Range of JoJo water booster pump systems for residential and commercial applications.",
    src: "/images/gallery/gallery-booster-pumps.png",
  },
  {
    id: 9,
    title: "Complete Borehole System",
    category: "Installation",
    description: "Full borehole installation — pump, JoJo tank, pressure pump and filtration in one system.",
    src: "/images/gallery/gallery-complete-system.jpg",
  },
  {
    id: 10,
    title: "Old vs New Pump",
    category: "Repair",
    description: "Side-by-side comparison of a corroded pump extracted from a borehole and its brand new replacement.",
    src: "/images/gallery/gallery-pump-repair-old-new.jpg",
  },
  {
    id: 11,
    title: "Pump Extraction",
    category: "Repair",
    description: "Pulling a failed submersible pump from a borehole for diagnosis and repair.",
    src: "/images/gallery/gallery-pump-repair-extract.jpg",
  },
 
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<null | (typeof galleryItems)[0]>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <div className="pt-20 bg-gradient-to-br from-[#091c42] via-[#0b4d8c] to-[#0288d1]">
        <div className="container-custom py-16 lg:py-24 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Our Work
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Project Gallery
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Browse our completed installations and repairs across Limpopo. Real work, real results.
          </p>
        </div>
        <svg
          viewBox="0 0 1440 60"
          className="w-full fill-white dark:fill-[#0a1628]"
          preserveAspectRatio="none"
        >
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* Gallery */}
      <section className="py-16 bg-white dark:bg-[#0a1628]">
        <div className="container-custom">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary-600 text-white shadow-water"
                    : "bg-[#f0f4ff] dark:bg-[#111e38] text-[#536080] dark:text-[#8ba3c7] hover:bg-primary-50 dark:hover:bg-primary-950/30 hover:text-primary-700 dark:hover:text-primary-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => setLightbox(item)}
                className="group relative rounded-2xl overflow-hidden aspect-square shadow-card hover:shadow-water-lg transition-all duration-300 hover:-translate-y-1 text-left"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Category badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-xs font-semibold bg-black/40 text-white backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end z-10">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full">
                    <div className="font-display font-bold text-white text-sm leading-tight">
                      {item.title}
                    </div>
                    <div className="text-white/75 text-xs mt-1 line-clamp-2">
                      {item.description}
                    </div>
                  </div>
                </div>

                {/* Expand icon */}
                <div className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <polyline points="15 3 21 3 21 9" />
                    <polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-[#8ba3c7] py-16">
              No items in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="bg-white dark:bg-[#111e38] rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-video">
              <Image
                src={lightbox.src}
                alt={lightbox.title}
                fill
                className="object-cover"
                sizes="512px"
              />
            </div>
            <div className="p-6">
              <span className="badge text-xs mb-2">{lightbox.category}</span>
              <h3 className="font-display font-bold text-lg text-[#0d1b3e] dark:text-white mt-2 mb-1">
                {lightbox.title}
              </h3>
              <p className="text-sm text-[#536080] dark:text-[#8ba3c7]">
                {lightbox.description}
              </p>
              <button
                onClick={() => setLightbox(null)}
                className="mt-4 text-sm text-[#8ba3c7] hover:text-[#536080] transition-colors"
              >
                ← Close
              </button>
            </div>
          </div>
        </div>
      )}

      <CTABanner />
    </>
  );
}

