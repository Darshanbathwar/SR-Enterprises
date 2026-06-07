// src/pages/Colors.jsx
import React, { useState } from 'react';
import { X, SlidersHorizontal, Search } from 'lucide-react';
import { colorLibrary, colorFamilies } from '../data/colors';

const Colors = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);

  // Filter logic covering both the category pills and the search bar
  const filteredColors = colorLibrary.filter(color => {
    const matchesFilter = activeFilter === 'All' || color.family === activeFilter;
    const matchesSearch = 
      color.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      color.hex.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (color.description && color.description.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-12">
          <span className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4 block">
            The Pigment Library
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Engineered Color.
          </h1>
        </div>

        {/* Search & Filters Controls */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 border-b border-zinc-900 pb-8 items-start md:items-center justify-between">
          
          {/* Family Filters */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2 text-zinc-500 mr-2">
              <SlidersHorizontal size={18} />
              <span className="text-sm uppercase tracking-widest font-bold hidden sm:inline">Filter:</span>
            </div>
            {colorFamilies.map(family => (
              <button
                key={family}
                onClick={() => setActiveFilter(family)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  activeFilter === family 
                    ? 'bg-white text-zinc-950 shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
                    : 'bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                {family}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80 flex-shrink-0">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search size={18} className="text-zinc-500" />
            </div>
            <input
              type="text"
              placeholder="Search colors, hex, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/40 border border-zinc-800 text-white rounded-full py-3 pl-11 pr-4 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder-zinc-600 text-sm"
            />
          </div>
          
        </div>

        {/* Empty State Fallback */}
        {filteredColors.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-500 text-lg">No colors match your exact search criteria.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveFilter('All'); }}
              className="mt-4 text-white underline hover:text-zinc-300"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Color Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredColors.map((color) => (
            <div 
              key={color.id}
              onClick={() => setSelectedColor(color)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-zinc-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              <div 
                className="h-48 w-full transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundColor: color.hex }}
              />
              <div className="bg-zinc-900 p-4 flex justify-between items-center relative z-10">
                <span className="font-bold text-white text-sm tracking-wide">{color.name}</span>
                <span className="text-zinc-500 font-mono text-xs uppercase hidden sm:inline">{color.hex}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep Dive Modal Overlay */}
      {selectedColor && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedColor(null)}
          />
          
          <div className="relative w-full max-w-5xl bg-zinc-950 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 flex flex-col md:flex-row animate-[fadeIn_0.3s_ease-out]">
            
            <button 
              onClick={() => setSelectedColor(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Left: Main Splash */}
            <div 
              className="w-full md:w-5/12 h-64 md:h-auto relative"
              style={{ backgroundColor: selectedColor.hex }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r" />
              <div className="absolute bottom-8 left-8 text-white">
                <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-70 block mb-2">
                  {selectedColor.family || 'Custom'} Family
                </span>
                <h2 className="text-4xl font-serif font-medium tracking-tight mb-1">
                  {selectedColor.name}
                </h2>
                <span className="font-mono text-sm uppercase opacity-90">{selectedColor.hex}</span>
              </div>
            </div>

            {/* Right: Technical Details */}
            <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center overflow-y-auto max-h-[60vh] md:max-h-[85vh]">
              
              {selectedColor.description && (
                <p className="text-zinc-400 leading-relaxed mb-10 text-lg">
                  {selectedColor.description}
                </p>
              )}

              {/* Tonal Shades */}
              {selectedColor.shades && selectedColor.shades.length > 0 && (
                <div className="mb-10">
                  <h3 className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-4">
                    Tonal Shades
                  </h3>
                  <div className="flex h-16 rounded-xl overflow-hidden shadow-inner border border-zinc-800">
                    {selectedColor.shades.map((shade, idx) => (
                      <div 
                        key={idx} 
                        className="flex-1 flex items-end p-2 group relative"
                        style={{ backgroundColor: shade }}
                      >
                        <span className="text-[10px] font-mono text-white/0 group-hover:text-white/80 transition-colors uppercase bg-black/40 px-1 rounded">
                          {shade}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Expanded Combinations Cards */}
              {selectedColor.combinations && selectedColor.combinations.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-4">
                    Curated Combinations
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {selectedColor.combinations.map((combo, idx) => (
                      <div key={idx} className="flex flex-col bg-zinc-900/50 border border-zinc-800 rounded-xl p-3 gap-3 transition-colors hover:bg-zinc-900">
                        <div 
                          className="w-full h-16 rounded-lg shadow-md border border-white/5"
                          style={{ backgroundColor: combo.hex }}
                        />
                        <div className="flex flex-col px-1">
                          <span className="text-sm font-bold text-zinc-200 truncate">{combo.name}</span>
                          <span className="text-[10px] font-mono text-zinc-500 uppercase mt-0.5">{combo.hex}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}} />
    </div>
  );
};

export default Colors;