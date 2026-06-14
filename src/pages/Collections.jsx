// src/pages/Collections.jsx
import React, { useState } from 'react';
import { Download, Search } from 'lucide-react';
import { allCollections } from '../data/allcollections';

const Collections = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter logic for the search bar
  const filteredCollections = allCollections.filter(item => {
    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.subtitle.toLowerCase().includes(query) ||
      item.brand.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-12 max-w-3xl">
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

        {/* Search Control */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 border-b border-zinc-900 pb-8 items-start md:items-center justify-end">
          {/* Search Bar */}
          <div className="relative w-full md:w-96 flex-shrink-0">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search size={18} className="text-zinc-500" />
            </div>
            <input
              type="text"
              placeholder="Search collections, titles, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/40 border border-zinc-800 text-white rounded-full py-3 pl-11 pr-4 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder-zinc-600 text-sm"
            />
          </div>
        </div>

        {/* Empty State Fallback */}
        {filteredCollections.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-500 text-lg">No collections match your search criteria.</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-4 text-white underline hover:text-zinc-300 transition-colors"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Full Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((item) => (
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