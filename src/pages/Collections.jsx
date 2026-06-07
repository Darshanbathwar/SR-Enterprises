// src/pages/Collections.jsx
import React from 'react';
import { Download } from 'lucide-react';

const Collections = () => {
  // Expanded data for the dedicated page
  const allCollections = [
    {
      id: 1,
      brand: "SR ENTERPRISES",
      title: "Book of colours",
      subtitle: "Ultimate shade guide for interior spaces",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop",
      pdfUrl: "#",
      theme: "bg-[#282A52]" 
    },
    {
      id: 2,
      brand: "SR ENTERPRISES",
      title: "Earth & Stone",
      subtitle: "Tactile textures for modern facades",
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop",
      pdfUrl: "#",
      theme: "bg-[#3A332C]" 
    },
    {
      id: 3,
      brand: "SR ENTERPRISES",
      title: "Urban Glass",
      subtitle: "High-gloss finishes for contemporary living",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
      pdfUrl: "#",
      theme: "bg-[#1C2321]" 
    },
    {
      id: 4,
      brand: "SR ENTERPRISES",
      title: "Industrial Metals",
      subtitle: "Oxidized and brushed metallic coatings",
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000&auto=format&fit=crop",
      pdfUrl: "#",
      theme: "bg-[#4A4A4A]" 
    },
    {
      id: 5,
      brand: "SR ENTERPRISES",
      title: "Botanical Pigments",
      subtitle: "Organic, eco-conscious raw materials",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1000&auto=format&fit=crop",
      pdfUrl: "#",
      theme: "bg-[#2B3A2F]" 
    },
    {
      id: 6,
      brand: "SR ENTERPRISES",
      title: "The Whites",
      subtitle: "Decoding temperature in minimalist design",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop",
      pdfUrl: "#",
      theme: "bg-[#D1D1C7]",
      textColor: "text-zinc-900" // Special case for a light card
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-20 max-w-3xl">
          <span className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4 block">
            The Digital Archives
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Curated Knowledge.
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed font-medium">
            Download our comprehensive shade guides, texture manuals, and architectural lookbooks. Designed for visionaries who demand absolute precision in their planning phase.
          </p>
        </div>

        {/* Full Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCollections.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2 group border border-zinc-800/50"
            >
              {/* Top Banner */}
              <div className={`${item.theme} ${item.textColor || 'text-white'} px-8 pt-8 pb-6 flex flex-col justify-center min-h-[160px]`}>
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
              <div className="h-64 w-full relative overflow-hidden bg-zinc-900">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
              </div>

              {/* Bottom Footer */}
              <div className="bg-[#F8F7F5] p-6 flex justify-center items-center">
                <a 
                  href={item.pdfUrl} 
                  download
                  className="bg-[#FFC629] text-black font-bold text-lg px-8 py-3.5 rounded-full flex items-center gap-3 transition-colors hover:bg-[#eab308] shadow-md w-full justify-center"
                >
                  Download PDF
                  <Download size={20} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Collections;