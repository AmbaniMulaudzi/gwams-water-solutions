// components/layout/Footer.tsx
import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "Borehole Pump Installation", href: "/services#borehole-pump" },
  { label: "Pressure Pump Installation", href: "/services#pressure-pump" },
  { label: "Water Tank Installation", href: "/services#water-tank" },
  { label: "Borehole Pump Repair", href: "/services#pump-repair" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#091c42] text-white">
      {/* Wave top */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" className="w-full fill-white dark:fill-[#0a1628]">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="container-custom pt-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            {/* Logo + Name */}
            <div className="flex items-center gap-3 mb-3">
              <div className="relative w-11 h-11 shrink-0">
                <Image
                  src="/logo.svg"
                  alt="GWAMS Vhalaudzi Water Solutions Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-display font-extrabold text-sm leading-tight text-white tracking-wide">
                  GWAMS VHALAUDZI
                </div>
                <div className="text-xs text-primary-300 font-medium">
                  Water Solutions
                </div>
              </div>
            </div>

            {/* Slogan */}
            <p className="text-sm font-semibold text-water-light/90 italic mb-3">
              "Water Is Life — We Make It Flow!"
            </p>

            <p className="text-sm text-blue-200/70 leading-relaxed mb-5">
              Professional water solutions for homes, farms, businesses & communities across Limpopo.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {["facebook", "instagram", "twitter"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary-600 flex items-center justify-center transition-colors duration-200"
                  aria-label={s}
                >
                  <span className="text-xs font-bold capitalize">{s[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary-300 mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-blue-200/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 group-hover:bg-water-light transition-colors" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-blue-200/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 group-hover:bg-water-light transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary-300 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-blue-200/70">
                <PhoneIcon />
                <div>
                  <div className="text-white font-semibold">066 364 4104</div>
                  <div>Call us anytime</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-200/70">
                <WhatsAppIcon />
                <div>
                  <a
                    href="https://wa.me/27663644104"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-green-400 transition-colors"
                  >
                    WhatsApp: 066 364 4104
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-200/70">
                <LocationIcon />
                <div>
                  <div className="text-white font-semibold">Tshituni Tsha Fhasi</div>
                  <div>Nzhelele, Limpopo</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-200/70">
                <PersonIcon />
                <div>
                  <div className="text-white font-semibold">Ambani Mulaudzi</div>
                  <div>Founder & Director</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 shrink-0">
              <Image
                src="/logo.svg"
                alt="GWAMS Logo"
                fill
                className="object-contain opacity-60"
              />
            </div>
            <p className="text-sm text-blue-200/50">
              © {new Date().getFullYear()} GWAMS Vhalaudzi Water Solutions. All rights reserved.
            </p>
          </div>
          <p className="text-sm text-blue-200/50">
            For Homes • Farms • Businesses & Communities
          </p>
        </div>
      </div>
    </footer>
  );
}

const PhoneIcon = () => (
  <svg className="w-5 h-5 mt-0.5 text-primary-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 mt-0.5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-5 h-5 mt-0.5 text-primary-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PersonIcon = () => (
  <svg className="w-5 h-5 mt-0.5 text-primary-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);