// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // To track the active route
  const location = useLocation();

  // Close the mobile menu automatically when the route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if we have scrolled down enough to trigger the glass effect
      setHasScrolled(currentScrollY > 20);

      // Determine scroll direction to show/hide the navbar
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // If scrolling down AND past a 100px threshold, hide it
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Also close mobile menu if scrolling down
      } else if (currentScrollY < lastScrollY) {
        // If scrolling up, show it
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]); 

  // Determine the exact positioning and styling based on state variables
  let navPositionClass = 'top-4';
  if (!isVisible) {
    navPositionClass = '-top-24'; // Slide completely off the screen
  } else if (!hasScrolled) {
    navPositionClass = 'top-8'; // Rest slightly lower when at the very top
  }

  const navStyleClass = hasScrolled
    ? 'bg-white/30 backdrop-blur-sm shadow-2xl border-white/40 py-3'
    : 'bg-white/60 backdrop-blur-sm border-white/30 py-4';

  // Helper function to determine if a path is active
  const isActive = (path) => location.pathname === path;

  // Reusable NavLink component with bolder, higher-contrast styling
  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className={`relative transition-colors hover:text-black ${
        isActive(to)
          ? "text-black font-extrabold after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[3px] after:bg-black"
          : "text-zinc-900 font-bold after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-[3px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
      }`}
    >
      {children}
    </Link>
  );

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-full border transition-all duration-500 ease-in-out ${navPositionClass} ${navStyleClass}`}
    >
      <div className="px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer group z-50">
          <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center font-extrabold text-sm transition-transform group-hover:scale-105">
            R
          </div>
          <span className="text-zinc-900 font-extrabold text-2xl tracking-tight">SR Enterprises</span>
        </Link>

        {/* Desktop Links - Increased text size (text-lg) and gap (gap-10) */}
        <div className="hidden md:flex items-center gap-10 text-lg">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/colors">Colors</NavLink>
          <NavLink to="/collections">Collections</NavLink>
          <NavLink to="/tools">Tools & Textures</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Mobile Menu Hamburger Toggle */}
        <button
          className="md:hidden text-zinc-900 focus:outline-none z-50 p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Dropdown Menu - Increased text sizes for better tap targets */}
      {isMobileMenuOpen && (
        <div className="absolute top-[110%] left-0 w-full bg-white/90 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl py-8 px-8 flex flex-col gap-6 md:hidden animate-[fadeIn_0.2s_ease-out]">
          <Link 
            to="/" 
            className={`text-2xl font-black tracking-tight ${isActive('/') ? 'text-black underline underline-offset-8 decoration-[3px]' : 'text-zinc-900 hover:text-zinc-600'}`}
          >
            Home
          </Link>
          <Link 
            to="/colors" 
            className={`text-2xl font-black tracking-tight ${isActive('/colors') ? 'text-black underline underline-offset-8 decoration-[3px]' : 'text-zinc-900 hover:text-zinc-600'}`}
          >
            Colors
          </Link>
          <Link 
            to="/collections" 
            className={`text-2xl font-black tracking-tight ${isActive('/collections') ? 'text-black underline underline-offset-8 decoration-[3px]' : 'text-zinc-900 hover:text-zinc-600'}`}
          >
            Collections
          </Link>
          <Link 
            to="/tools" 
            className={`text-2xl font-black tracking-tight ${isActive('/tools') ? 'text-black underline underline-offset-8 decoration-[3px]' : 'text-zinc-900 hover:text-zinc-600'}`}
          >
            Tools & Textures
          </Link>
          <Link 
            to="/about" 
            className={`text-2xl font-black tracking-tight ${isActive('/about') ? 'text-black underline underline-offset-8 decoration-[3px]' : 'text-zinc-900 hover:text-zinc-600'}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`text-2xl font-black tracking-tight ${isActive('/contact') ? 'text-black underline underline-offset-8 decoration-[3px]' : 'text-zinc-900 hover:text-zinc-600'}`}
          >
            Contact
          </Link>
        </div>
      )}

      {/* Tailwind inline style for mobile menu fade-in */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </nav>
  );
};

export default Navbar;