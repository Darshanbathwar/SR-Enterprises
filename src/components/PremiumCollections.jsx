// src/components/PremiumCollections.jsx
import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const collections = [
  {
    id: 1,
    brand: "SR ENTERPRISES",
    title: "Lux Indica",
    subtitle: "Heritage & Earth",
    image: "/images/luxindica.png",
    pdfUrl: "/pdfs/luxindica-shade-booklet.pdf",
    theme: "bg-[#4A2C2A]" 
  },
  {
    id: 2,
    brand: "SR ENTERPRISES",
    title: "Insignia",
    subtitle: "The Signature Series",
    image: "/images/insignia.png",
    pdfUrl: "/pdfs/Insignia-Booklet_30.10.pdf",
    theme: "bg-[#1A1A1A]" 
  },
  {
    id: 3,
    brand: "SR ENTERPRISES",
    title: "Shvet",
    subtitle: "Decoding the Whites",
    image: "/images/shvet.png",
    pdfUrl: "/pdfs/Shvet-Brochure.pdf",
    theme: "bg-[#EAE8E3]",
    textColor: "text-zinc-900"
  },
  {
    id: 4,
    brand: "SR ENTERPRISES",
    title: "Royale",
    subtitle: "The Designer's Edit",
    // Represents vintage, aristocratic opulence and deep, moody jewel tones
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1000&auto=format&fit=crop",
    pdfUrl: "/pdfs/Royale-Designer-Palette.pdf",
    theme: "bg-[#2B3A42]"
  },
  {
    id: 5,
    brand: "SR ENTERPRISES",
    title: "Royale Archives",
    subtitle: "Interior Atmospheres",
    image: "/images/royalbookofcolors.png",
    pdfUrl: "/pdfs/Royale-Book-of-colours-2024.pdf",
    theme: "bg-[#1F242A]" 
  },
  {
    id: 6,
    brand: "SR ENTERPRISES",
    title: "Ultima",
    subtitle: "Exterior Facades",
    image: "/images/ultima.png",
    pdfUrl: "/pdfs/Ultima-book-of-colours-2024.pdf",
    theme: "bg-[#4A4A4A]" 
  }
];

const PremiumCollections = () => {
  return (
    <section className="bg-zinc-950 py-24 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Premium Collections
          </h2>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Explore our meticulously curated digital catalogs. Each volume is designed to provide architects, designers, and visionaries with comprehensive shade guides, tactile finish details, and structural inspiration for their next project.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {collections.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2 group border border-zinc-800/50"
            >
              {/* Top Banner */}
              <div className={`${item.theme} ${item.textColor || 'text-white'} px-8 pt-8 pb-6 flex flex-col justify-center`}>
                <span className="text-[11px] md:text-xs font-bold tracking-[0.15em] mb-2 uppercase opacity-90">
                  {item.brand}
                </span>
                <h3 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-light opacity-80 tracking-wide">
                  {item.subtitle}
                </p>
              </div>

              {/* Middle Image */}
              <div className="h-64 w-full relative overflow-hidden bg-zinc-900 border-y border-black/20">
                <div 
                  className="absolute inset-0 bg-cover bg-top bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
              </div>

              {/* Bottom Footer */}
              <div className="bg-[#F8F7F5] p-6 flex justify-center items-center">
                <a 
                  href={item.pdfUrl} 
                  download
                  className="bg-[#FFC629] text-black font-bold text-lg px-8 py-3.5 rounded-full flex items-center gap-3 transition-colors hover:bg-[#eab308] shadow-md"
                >
                  Download PDF
                  <Download size={20} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <Link 
            to="/collections" 
            className="group relative overflow-hidden rounded-full bg-transparent px-8 py-4 border border-white/20 transition-all hover:border-white hover:bg-white"
          >
            <span className="relative z-10 text-sm font-bold tracking-widest text-white uppercase flex items-center gap-2 group-hover:text-black transition-colors">
              View All Collections
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PremiumCollections;