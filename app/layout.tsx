// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://gwamswhatersolutions.co.za"),
  title: {
    default: "GWAMS Vhalaudzi Water Solutions | Borehole Pump Installation & Repair",
    template: "%s | GWAMS Vhalaudzi Water Solutions",
  },
  description:
    "Professional water solutions for homes, farms, and businesses. Expert borehole pump installation & repair, pressure pump installation, and water tank installation in Limpopo.",
  keywords: [
    "borehole pump installation",
    "borehole pump repair",
    "pressure pump installation",
    "water tank installation",
    "water solutions Limpopo",
    "GWAMS Vhalaudzi",
    "Nzhelele water",
  ],
  openGraph: {
    title: "GWAMS Vhalaudzi Water Solutions",
    description: "Water is Life — We Make It Flow! Professional water solutions for homes, farms & businesses.",
    type: "website",
    locale: "en_ZA",
    siteName: "GWAMS Vhalaudzi Water Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "GWAMS Vhalaudzi Water Solutions",
    description: "Professional water solutions — borehole pump, pressure pump & water tank installation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#0b72d6",
                color: "#fff",
                borderRadius: "12px",
                fontFamily: "'DM Sans', sans-serif",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
