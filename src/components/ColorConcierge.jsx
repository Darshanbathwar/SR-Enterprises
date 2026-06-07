// src/components/ColorConcierge.jsx
import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import conciergeImg from '../assets/ColorConcierge.png';

const ColorConcierge = () => {
  return (
    <section className="w-full bg-zinc-950 text-white flex flex-col md:flex-row min-h-[75vh] border-t border-zinc-900">
      
      {/* Left: Content Area (Dark Background) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-10 md:p-20 lg:p-28 order-2 md:order-1">
        
        {/* Eyebrow Subheading */}
        <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4">
          Bespoke Consulting
        </span>
        
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
          The Color Concierge.
        </h2>
        
        {/* Paragraph */}
        <p className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-lg">
          Eliminate the guesswork. Our master colorists work directly with you to analyze your space's lighting, architectural nuances, and intended mood. Receive a tailored, comprehensive palette crafted exclusively for your environment.
        </p>
        
        {/* Action Button */}
        <div>
          <Link 
            to="/concierge" 
            className="inline-flex items-center gap-3 bg-transparent text-white border border-white/30 px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all hover:bg-white hover:text-zinc-950 hover:border-white shadow-lg"
          >
            Book a Consultation
            <Calendar size={18} />
          </Link>
        </div>

      </div>

      {/* Right: Studio Image */}
      <div className="w-full md:w-1/2 min-h-[40vh] md:min-h-full relative overflow-hidden order-1 md:order-2">
        <div 
          className="absolute inset-0 bg-contain bg-no-repeat bg-center transition-transform duration-[2s] ease-out hover:scale-105"
          style={{ 
            // Using the imported local image
            backgroundImage: `url(${conciergeImg})` 
          }} 
        />
        {/* Subtle dark overlay to blend the image edge cleanly into the UI */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-zinc-950/20" />
      </div>

    </section>
  );
};

export default ColorConcierge;