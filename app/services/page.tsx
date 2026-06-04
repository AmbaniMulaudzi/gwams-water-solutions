import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Borehole pump installation and repair, pressure pump installation, and water tank installation.",
};

const services = [
  {
    id: "borehole-pump",
    title: "Borehole Pump Installation",
    image: "/images/gallery/gallery-borehole-kit-dab.jpg",
    description: "We install complete borehole pump kits for residential, agricultural, and commercial boreholes. Our installation includes the submersible pump unit, control box, power cable, safety rope, and all required fittings and connectors.",
    features: [
      "Selection of complete pump kit",
      "Submersible pump lowering and securing",
      "Control box installation and wiring",
      "Power cable management",
      "Safety rope and pump guard",
      "Outlet pipe connection",
      "System testing and commissioning",
      "Customer training and handover",
    ],
    gradient: "from-primary-600 to-primary-800",
    bg: "bg-primary-50 dark:bg-primary-950/20",
  },
  {
    id: "pressure-pump",
    title: "Pressure Pump Installation",
    image: "/images/gallery/gallery-pump-filtration.jpg",
    description: "Low water pressure is frustrating and affects everyday life. We install high-quality booster and pressure pump systems to give you consistent, strong water pressure throughout your property.",
    features: [
      "Pressure pump selection",
      "Automatic pressure controller",
      "Inlet and outlet pipe connections",
      "Filtration system integration",
      "Anti-vibration mounting",
      "Electrical wiring",
      "Pressure testing and adjustment",
      "Flow rate optimization",
    ],
    gradient: "from-water-teal to-water-dark",
    bg: "bg-cyan-50 dark:bg-cyan-950/20",
  },
  {
    id: "water-tank",
    title: "Water Tank Installation",
    image: "/images/gallery/gallery-jojo-tank.jpg",
    description: "We handle the complete water tank installation process from start to finish. Installing the tank, and plumbing all connections including inlet, outlet, overflow, and drain.",
    features: [
      "Site assessment and planning",
      "JoJo/poly tank placement and securing",
      "Inlet pipe and ball float valve",
      "Outlet pipe and valve installation",
      "Overflow pipe and drain",
      "Pressure pump integration",
      "Full system testing",
    ],
    gradient: "from-blue-500 to-blue-700",
    bg: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    id: "pump-repair",
    title: "Borehole Pump Repair",
    image: "/images/gallery/gallery-pump-repair-old-new.jpg",
    description: "When your borehole pump fails, every hour without water matters. We provide fast diagnosis and repair services to get your water supply restored quickly and reliably.",
    features: [
      "Emergency call-out service",
      "Pump extraction from borehole",
      "Full diagnostic inspection",
      "Motor and impeller assessment",
      "Cable and control box testing",
      "Part replacement and repair",
      "Re-installation and testing",
      "Preventive maintenance advice",
    ],
    gradient: "from-indigo-600 to-purple-700",
    bg: "bg-indigo-50 dark:bg-indigo-950/20",
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="pt-20 bg-gradient-to-br from-[#091c42] via-[#0b4d8c] to-[#0288d1]">
        <div className="container-custom py-16 lg:py-24 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            What We Offer
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Our Services
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Complete water solutions from installation to repair - professional, reliable, and affordable.
          </p>
        </div>
        <svg viewBox="0 0 1440 60" className="w-full fill-white dark:fill-[#0a1628]" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <section className="py-20 bg-white dark:bg-[#0a1628]">
        <div className="container-custom space-y-16">
          {services.map((service, i) => (
            <div key={service.id} id={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative rounded-3xl overflow-hidden shadow-water-lg aspect-video">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${service.gradient} shadow`}>
                    {service.title}
                  </div>
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className={`${service.bg} rounded-3xl p-8 lg:p-10`}>
                  <h2 className="font-display font-bold text-2xl lg:text-3xl text-[#0d1b3e] dark:text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-[#536080] dark:text-[#8ba3c7] leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <h3 className="font-display font-bold text-sm text-[#0d1b3e] dark:text-white mb-3 uppercase tracking-wide">
                    Whats Included:
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className={`w-5 h-5 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center shrink-0`}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="text-[#536080] dark:text-[#8ba3c7] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="btn-primary text-sm">
                      Request This Service
                    </Link>
                    <a href="https://wa.me/27663644104" target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm">
                      Quick Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}