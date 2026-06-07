// src/pages/About.jsx
import React from 'react';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutbg from '../assets/aboutbg.png';

const About = () => {
  return (
    <div className="min-h-screen bg-zinc-950 pt-24 pb-0 flex flex-col">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center px-6 py-20 border-b border-zinc-900">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center "
            style={{ backgroundImage: `url(${aboutbg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-6">
              Architectural Depth.<br />
              <span className="text-zinc-500">Artistic Precision.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed mb-8">
              Redefining the sensory boundaries of space through ultra-premium pigment science. We don't just sell paint; we curate the medium of atmosphere.
            </p>
            <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
              <span className="w-12 h-[1px] bg-zinc-700"></span>
              Est. 2024
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Legacy Section */}
      <section className="w-full bg-zinc-950 py-24 px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
              Our<br />Legacy
            </h2>
            {/* Minimalist icon from screenshot */}
            <div className="w-6 h-6 border-2 border-zinc-800 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-zinc-500 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Founded on the belief that color is the most structural element of architecture, S R Enterprises emerged as a bespoke boutique for those who view surfaces as canvases. As a premier authorized partner for titans like Jotun and Asian Paints, we bridge the gap between industrial scale and artisan intimacy.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Our journey began in the local markets, where we recognized a void in the high-end residential and commercial sector: the need for technical mastery paired with sensory consultation. We don't merely match swatches; we analyze light, texture, and volume to ensure every pigment performs at its absolute peak.
            </p>
            
          </div>
        </div>
      </section>

      {/* 3. Core Pillars Grid */}
      <section className="w-full bg-zinc-950 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-[#111111] p-10 md:p-12 rounded-3xl border border-zinc-800/50 hover:border-zinc-700 transition-colors">
            <span className="text-zinc-700 text-xl font-mono mb-8 block">01</span>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Curated<br />Pigments</h3>
            <p className="text-zinc-500 leading-relaxed text-sm">
              Hand-selected palettes sourced from the world's most innovative chemical labs, ensuring depth that standard paints can never achieve.
            </p>
          </div>

          <div className="bg-[#111111] p-10 md:p-12 rounded-3xl border border-zinc-800/50 hover:border-zinc-700 transition-colors">
            <span className="text-zinc-700 text-xl font-mono mb-8 block">02</span>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Technical<br />Expertise</h3>
            <p className="text-zinc-500 leading-relaxed text-sm">
              From surface chemistry to light reflectance indices (LRV), our team provides the engineering backbone to your aesthetic vision.
            </p>
          </div>

          <div className="bg-[#111111] p-10 md:p-12 rounded-3xl border border-zinc-800/50 hover:border-zinc-700 transition-colors">
            <span className="text-zinc-700 text-xl font-mono mb-8 block">03</span>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Sensory<br />Immersion</h3>
            <p className="text-zinc-500 leading-relaxed text-sm">
              We treat color as an experience. Our consultations factor in how a space feels at dawn, dusk, and under artificial illumination.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Visit Our Studio (Light Theme) */}
      <section className="w-full bg-white text-zinc-950 py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(aboutbg)" }}
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
              Visit Our Studio.<br />Experience the spectrum in person.
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed mb-12 max-w-lg">
              Located in the heart of the architectural district, our studio is a laboratory of light. We invite architects, designers, and homeowners to test finishes on a scale that reveals their true character.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <MapPin className="text-zinc-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Studio Location</h4>
                  <p className="text-zinc-500 text-sm">S R Enterprises<br />Mumbai, Maharashtra, India</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Clock className="text-zinc-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Operating Hours</h4>
                  <p className="text-zinc-500 text-sm">Monday — Friday: 09:00 - 19:00<br />Saturday: 10:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="w-full bg-zinc-950 py-32 px-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-10">
          Your vision deserves better than 'standard'.
        </h2>
        <Link 
          to="/collections"
          className="bg-white text-black font-bold text-sm px-8 py-4 rounded-full tracking-widest uppercase transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          Browse the Collection
        </Link>
      </section>

    </div>
  );
};

export default About;