// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import PremiumCollections from '../components/PremiumCollections';
import PrecisionTools from '../components/PrecisionTools';
import ColorConcierge from '../components/ColorConcierge';

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Hero />
      
      <PremiumCollections />
      
      <PrecisionTools />

      <ColorConcierge />
    </div>
  );
};

export default Home;