// components/sections/GalleryPreview.tsx
import Link from "next/link";
import Image from "next/image";

const items = [
  {
    id: 1,
    category: "Tank Installation",
    label: "JoJo Tank on Brick Base",
    src: "/images/gallery/gallery-jojo-tank.jpg",
  },
  {
    id: 2,
    category: "Complete System",
    label: "Tank, Pump & Filter System",
    src: "/images/gallery/gallery-complete-system.jpg",
  },
  {
    id: 3,
    category: "Borehole Pump",
    label: "DAB Borehole Pump Kit",
    src: "/images/gallery/gallery-borehole-kit-dab.jpg",
  },
  {
    id: 4,
    category: "Pressure Pump",
    label: "Pump with Filtration System",
    src: "/images/gallery/gallery-pump-filtration.jpg",
  },
  {
    id: 5,
    category: "Borehole Pump",
    label: "Borehole Pump Kit",
    src: "/images/gallery/gallery-borehole-kit-2.jpg",
  },
  {
    id: 6,
    category: "Pump Repair",
    label: "Old vs New Pump",
    src: "/images/gallery/gallery-pump-repair-old-new.jpg",
  },
];

export default function GalleryPreview() {
  return (
    <section className="py-20 lg:py-28 bg-surface dark:bg-[#0d1e3a]">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <span className="badge mb-3">Our Work</span>
            <h2 className="section-heading">Project Gallery</h2>
          </div>
          <Link href="/gallery" className="btn-secondary text-sm shrink-0">
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl aspect-square relative overflow-hidden group cursor-pointer shadow-card hover:shadow-water-lg transition-all duration-300 hover:-translate-y-1"
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                <div className="text-white text-sm font-semibold leading-tight">{item.label}</div>
                <div className="text-white/70 text-xs mt-0.5">{item.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}