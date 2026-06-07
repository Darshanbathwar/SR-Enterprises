import React from 'react';
import srbg from "../assets/srbg.png" 
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {

    useGSAP(() => {
        const t1= gsap.timeline();
        t1.fromTo(".hero-heading", {y: 50, opacity: 0}, {y: 0, opacity: 1,delay: 0.5, duration: 2, ease: "power3.out"})
        .fromTo(".hero-subheading", {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 1.5, ease: "power3.out"}, "-=1")
});

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-950">
      
      {/* BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-[10s] ease-out hover:scale-105"
        style={{
          backgroundImage: `url(${srbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Dark/Color Gradients for Text Legibility over the vibrant background */}
      <div className="absolute inset-0 z-0 bg-black/40" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 to-transparent h-48" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="hero-heading text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter drop-shadow-2xl mb-6 leading-[0.9]">
          Awaken Your<br />Senses.
        </h1>
        
        <p className="hero-subheading text-lg md:text-xl text-zinc-200 mb-12 max-w-2xl font-medium drop-shadow-md">
          Immerse yourself in pure chromatic depth. Artisanal, hyper-pigmented formulas engineered to catch the light and transform your atmosphere.
        </p>

        <button className="group relative overflow-hidden rounded-full bg-white/10 px-8 py-4 backdrop-blur-md border border-white/20 transition-all hover:bg-white/20 hover:scale-105 active:scale-95">
          <span className="relative z-10 text-sm font-bold tracking-widest text-white uppercase">
            Discover the Spectrum
          </span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
        </button>
      </div>

      {/* Custom Keyframe for button hover shimmer */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
};

export default Hero;