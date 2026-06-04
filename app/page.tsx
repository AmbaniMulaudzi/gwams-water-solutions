// app/page.tsx
import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTABanner from "@/components/sections/CTABanner";
import GalleryPreview from "@/components/sections/GalleryPreview";
import FAQSection from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "GWAMS Vhalaudzi Water Solutions | Borehole Pump Installation & Repair",
  description:
    "Professional water solutions for homes, farms and businesses in Limpopo. Borehole pump installation & repair, pressure pump installation, water tank installation.",
};

export default function HomePage() {
  return (
    <>
      <div className="overflow-hidden">
        <HeroSection />
        <ServicesSection />
      </div>
      <WhyChooseUs />
      <GalleryPreview />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
    </>
  );
}