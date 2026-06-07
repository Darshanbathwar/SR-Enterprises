// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Determine if we have scrolled down enough to trigger the glass effect
      setHasScrolled(currentScrollY > 20);

      // 2. Determine scroll direction to show/hide the navbar
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // If scrolling down AND past a 100px threshold, hide it
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // If scrolling up, show it
        setIsVisible(true);
      }

      // 3. Update the last scroll position for the next calculation
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]); 

  // Determine the exact positioning and styling based on our state variables
  let navPositionClass = 'top-4';
  if (!isVisible) {
    navPositionClass = '-top-24'; // Slide completely off the screen
  } else if (!hasScrolled) {
    navPositionClass = 'top-8'; // Rest slightly lower when at the very top of the page
  }

  // Changed to whitish frosted glass with higher initial opacity (bg-white/60)
  const navStyleClass = hasScrolled
    ? 'bg-white/30 backdrop-blur-sm shadow-2xl border-white/40 py-3'
    : 'bg-white/60 backdrop-blur-sm border-white/30 py-4';

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-full border transition-all duration-500 ease-in-out ${navPositionClass} ${navStyleClass}`}
    >
      <div className="px-6 flex items-center justify-between">
        {/* Logo - Increased weight to font-extrabold */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center font-extrabold text-sm transition-transform group-hover:scale-105">
            R
          </div>
          <span className="text-zinc-900 font-extrabold text-xl tracking-tight">SR Enterprises</span>
        </Link>

        {/* Links - Increased base text weight to font-bold */}
        <div className="hidden md:flex items-center gap-8 text-xl font-bold text-zinc-900">
          <Link to="/colors" className=" relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-black hover:text-zinc-900 transition-colors">Colors</Link>
          <Link to="/collections" className="hover:text-zinc-900 transition-colors">Collections</Link>
          <Link to="/tools" className="hover:text-zinc-900 transition-colors">Tools&Textures</Link>
          <Link to="/about" className="hover:text-zinc-900 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-zinc-900 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;