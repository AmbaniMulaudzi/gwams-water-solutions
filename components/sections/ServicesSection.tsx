// components/sections/ServicesSection.tsx
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "borehole-pump",
    title: "Borehole Pump Installation",
    description:
      "Expert installation of submersible borehole pumps for a reliable underground water supply. Complete kits including pump, cables, control box and fittings.",
    image: "/images/gallery/gallery-borehole-kit-dab.jpg",
    features: ["Submersible pump systems", "Control box installation", "Full cable & fitting kits", "Testing & commissioning"],
    color: "from-primary-600 to-primary-800",
    bgColor: "bg-primary-50 dark:bg-primary-950/30",
  },
  {
    id: "pressure-pump",
    title: "Pressure Pump Installation",
    description:
      "Boost water pressure and enjoy consistent flow throughout your home, farm or business. Professional installation with automatic pump controllers.",
    image: "/images/gallery/gallery-pump-filtration.jpg",
    features: ["Booster pump systems", "Auto pressure control", "Filtration integration", "Pipe & fitting work"],
    color: "from-water-teal to-water-dark",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/30",
  },
  {
    id: "water-tank",
    title: "Water Tank Installation",
    description:
      "Professional tank installation on custom-built bases for homes, farms and businesses. We handle the full installation including base construction and plumbing.",
    image: "/images/gallery/gallery-jojo-tank.jpg",
    features: ["JoJo & poly tanks", "Full plumbing setup", "Overflow & drain systems"],
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    id: "pump-repair",
    title: "Borehole Pump Repair",
    description:
      "Fast and effective diagnosis and repair of borehole pump issues. We get your water flowing again with minimal downtime.",
    image: "/images/gallery/gallery-pump-repair-old-new.jpg",
    features: ["Fault diagnosis", "Pump extraction & inspection", "Part replacement", "Performance testing"],
    color: "from-indigo-600 to-purple-700",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/30",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white dark:bg-[#0a1628]">
      <svg
        viewBox="0 0 1440 80"
        className="w-full fill-white dark:fill-[#0a1628]"
        preserveAspectRatio="none"
        style={{ display: "block" }}
      >
        <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" />
      </svg>
      <div className="py-20 lg:py-28">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="badge mb-4">What We Do</span>
            <h2 className="section-heading mb-4">Our Services</h2>
            <p className="section-subheading mx-auto">
              Comprehensive water solutions tailored to your needs — from borehole drilling to tank installation.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="card group hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  {/* Title on image */}
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="font-display font-bold text-lg text-white leading-tight drop-shadow">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[#536080] dark:text-[#8ba3c7] text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="grid grid-cols-2 gap-1.5 mb-5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-1.5 text-xs text-[#536080] dark:text-[#8ba3c7]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0b72d6" strokeWidth="2.5" strokeLinecap="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center gap-1 transition-colors"
                  >
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary">
              Request a Service Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}