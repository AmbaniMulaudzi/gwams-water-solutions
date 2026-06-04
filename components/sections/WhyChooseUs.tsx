// components/sections/WhyChooseUs.tsx
const features = [
  {
    icon: "price",
    title: "Reliable Prices",
    description: "Transparent, competitive pricing with no hidden costs. We provide detailed quotes before any work begins.",
  },
  {
    icon: "quality",
    title: "Quality You Can Trust",
    description: "We use only premium pumps, tanks, and fittings. Every installation is done to the highest standard.",
  },
  {
    icon: "fast",
    title: "Fast Response",
    description: "We respond quickly to service requests and emergency repairs. Your water supply is our priority.",
  },
  {
    icon: "homes",
    title: "Homes & Farms",
    description: "From small homes to large farms and commercial properties — we have the right solution for you.",
  },
  {
    icon: "expert",
    title: "Expert Team",
    description: "Our experienced technicians are fully trained in all aspects of water pump and tank installation.",
  },
  {
    icon: "warranty",
    title: "Service Warranty",
    description: "All our installations and repairs come with a service warranty for your peace of mind.",
  },
];

const FeatureIcon = ({ type }: { type: string }) => {
  const icons: Record<string, JSX.Element> = {
    price: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    quality: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    fast: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    homes: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    expert: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    warranty: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  };
  return icons[type] || icons.quality;
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-surface dark:bg-[#0d1e3a]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="badge mb-4">Why Us</span>
          <h2 className="section-heading mb-4">Why Choose GWAMS Vhalaudzi?</h2>
          <p className="section-subheading mx-auto">
            We're committed to providing reliable, high-quality water solutions that last. Here's what sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white dark:bg-[#111e38] rounded-2xl p-6 border border-[#dce6f5] dark:border-[#1e3558] hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                <FeatureIcon type={feature.icon} />
              </div>
              <h3 className="font-display font-bold text-[#0d1b3e] dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#536080] dark:text-[#8ba3c7] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
