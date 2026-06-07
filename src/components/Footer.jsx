// src/components/Footer.jsx
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const realGoogleMapsLink = "https://maps.app.goo.gl/AJrJJfR5xbeXLgN8A";

  return (
    <footer className="bg-[#111111] text-white pt-24 pb-8 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Top Section: Info & Map */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
          
          {/* Left Column: Text Info */}
          <div className="flex flex-col gap-10 w-full lg:w-1/3">
            {/* Brand */}
            <h2 className="text-2xl font-bold tracking-tight text-white">
              S R Enterprises
            </h2>

            {/* Location Block */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.15em] text-zinc-500 uppercase mb-3">
                Studio Location
              </h3>
              <p className="text-zinc-300 leading-relaxed font-medium">
                S R Enterprises<br />
                Mumbai, Maharashtra, India
              </p>
            </div>

            {/* Hours Block */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.15em] text-zinc-500 uppercase mb-3">
                Operating Hours
              </h3>
              <p className="text-zinc-300 leading-relaxed font-medium">
                Monday — Friday: 09:00 - 19:00<br />
                Saturday: 10:00 - 16:00
              </p>
            </div>

            {/* Contact Icons */}
            <div className="flex gap-4 pt-2">
              <button 
                aria-label="Email Us"
                className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center hover:bg-zinc-700 transition-colors group"
              >
                <Mail size={16} className="text-zinc-400 group-hover:text-white transition-colors" />
              </button>
              <button 
                aria-label="Call Us"
                className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center hover:bg-zinc-700 transition-colors group"
              >
                <Phone size={16} className="text-zinc-400 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>

          {/* Right Column: Google Map Embed (Now interactive as a button) */}
          <div className="w-full lg:w-2/3 h-80 lg:h-auto min-h-[350px] rounded-3xl overflow-hidden relative bg-zinc-900 border border-zinc-800 shadow-2xl group">
            
            {/* 1. THE MAP (pointer-events-none makes it ignore the mouse) 
            */}
            <iframe
              title="S R Enterprises Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.78832030050953!2d72.83658479825861!3d18.992692699303657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf3c69dcb16d%3A0x28a25d20325cdbca!2sS%20R%20Enterprises!5e0!3m2!1sen!2sin!4v1780848172859!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ 
                border: 0,
                filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(85%)' 
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* 2. THE OVERLAY LINK (Sits on top, captures the click, and shows a hover effect) 
            */}
            <a 
              href={realGoogleMapsLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40 cursor-pointer"
            >
              {/* This pill button only appears when the user hovers over the map */}
              <div className="opacity-0 group-hover:opacity-100 bg-white text-zinc-950 font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-2xl">
                <MapPin size={18} />
                Open in Maps
              </div>
            </a>
          </div>

        </div>

        {/* Bottom Section: Copyright & Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800/60 text-xs md:text-sm text-zinc-500 gap-6 md:gap-0">
          <p className="font-medium tracking-wide">
            © {currentYear} S R Enterprises. All rights reserved.
          </p>
          
          <div className="flex gap-8 font-medium tracking-wide">
            <Link to="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
            <Link to="/sustainability" className="hover:text-zinc-300 transition-colors">Sustainability</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;