// src/components/PrecisionTools.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
// Import the generated image from your assets folder
import tools from '../assets/tools.png';

const PrecisionTools = () => {
  return (
    <section className="w-full bg-zinc-950 text-white flex flex-col md:flex-row min-h-[75vh] border-t border-zinc-900">
      
      {/* Left: Texture Image */}
      <div className="w-full md:w-1/2 min-h-[40vh] md:min-h-full relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-contain bg-no-repeat bg-center transition-transform duration-[2s] ease-out hover:scale-105"
          style={{ 
            // Using the imported local image
            backgroundImage: `url(${tools})` 
          }} 
        />
        {/* Subtle dark overlay to blend the image edge cleanly into the UI */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-950/20" />
      </div>

      {/* Right: Content Area (Dark Background) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-10 md:p-20 lg:p-28">
        
        {/* Eyebrow Subheading */}
        <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4">
          Craftsmanship
        </span>
        
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
          Precision Tools & Textures
        </h2>
        
        {/* Paragraph */}
        <p className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-lg">
          We provide more than just paint. Our professional applicators, stencils, and textured rollers are engineered to bring the most complex artisanal visions to life with mathematical consistency.
        </p>
        
        {/* Action Button */}
        <div>
          <Link 
            to="/tools" 
            className="inline-flex items-center gap-3 bg-white text-zinc-950 px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all hover:bg-zinc-200 hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Browse Tools
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PrecisionTools;