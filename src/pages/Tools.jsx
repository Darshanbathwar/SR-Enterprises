// src/pages/Tools.jsx
import React, { useState } from 'react';
import { X, SlidersHorizontal, Search, CheckCircle2 } from 'lucide-react';
import { toolLibrary, toolCategories } from '../data/tools';

const Tools = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTool, setSelectedTool] = useState(null);

  const filteredTools = toolLibrary.filter(tool => {
    const matchesFilter = activeFilter === 'All' || tool.category === activeFilter;
    const matchesSearch = 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (tool.description && tool.description.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-12">
          <span className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4 block">
            Craftsmanship
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Precision Tools.
          </h1>
        </div>

        {/* Search & Filters Controls */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 border-b border-zinc-900 pb-8 items-start md:items-center justify-between">
          
          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2 text-zinc-500 mr-2">
              <SlidersHorizontal size={18} />
              <span className="text-sm uppercase tracking-widest font-bold hidden sm:inline">Filter:</span>
            </div>
            {toolCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-white text-zinc-950 shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
                    : 'bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                {category}
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
              placeholder="Search tools or textures..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/40 border border-zinc-800 text-white rounded-full py-3 pl-11 pr-4 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder-zinc-600 text-sm"
            />
          </div>
          
        </div>

        {/* Empty State */}
        {filteredTools.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-500 text-lg">No tools match your exact search criteria.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveFilter('All'); }}
              className="mt-4 text-white underline hover:text-zinc-300"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <div 
              key={tool.id}
              onClick={() => setSelectedTool(tool)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-zinc-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 bg-zinc-900"
            >
              <div className="h-64 w-full relative overflow-hidden bg-black">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  style={{ backgroundImage: `url(${tool.image})` }}
                />
              </div>
              <div className="p-6 flex flex-col relative z-10">
                <span className="text-zinc-500 font-bold tracking-widest text-[10px] uppercase mb-2">
                  {tool.category}
                </span>
                <span className="font-bold text-white text-lg tracking-wide">{tool.name}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep Dive Modal Overlay */}
      {selectedTool && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedTool(null)}
          />
          
          <div className="relative w-full max-w-5xl bg-zinc-950 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 flex flex-col md:flex-row animate-[fadeIn_0.3s_ease-out]">
            
            <button 
              onClick={() => setSelectedTool(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Left: Tool Image Splash */}
            <div className="w-full md:w-5/12 h-64 md:h-auto relative bg-black">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{ backgroundImage: `url(${selectedTool.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent md:bg-gradient-to-r md:from-transparent md:to-zinc-950" />
            </div>

            {/* Right: Technical Details */}
            <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center overflow-y-auto max-h-[60vh] md:max-h-[85vh]">
              
              <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase block mb-2">
                {selectedTool.category || 'Specialty'}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-6 text-white">
                {selectedTool.name}
              </h2>

              {selectedTool.description && (
                <p className="text-zinc-400 leading-relaxed mb-10 text-lg">
                  {selectedTool.description}
                </p>
              )}

              {/* Engineered Features - Glassmorphic Pills */}
              {selectedTool.features && selectedTool.features.length > 0 && (
                <div className="mb-10">
                  <h3 className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-4">
                    Engineered Specs
                  </h3>
                  <div className="flex flex-col gap-3">
                    {selectedTool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 rounded-lg p-3">
                        <CheckCircle2 size={16} className="text-zinc-400" />
                        <span className="text-sm font-medium text-zinc-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Best Applications */}
              {selectedTool.bestFor && selectedTool.bestFor.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-4">
                    Ideal Applications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTool.bestFor.map((app, idx) => (
                      <span key={idx} className="bg-[#111111] border border-zinc-800 text-zinc-400 text-xs font-mono uppercase px-3 py-1.5 rounded-full">
                        {app}
                      </span>
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

export default Tools;