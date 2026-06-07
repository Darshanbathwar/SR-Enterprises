import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global components
import ScrollToTop from './components/ScrollToTop'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Collections from './pages/Collections';
import Colors from './pages/Colors';
import Tools from './pages/Tools';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <ScrollToTop /> 
      
      <div className="font-sans selection:bg-white selection:text-black min-h-screen bg-zinc-950 flex flex-col">
        <Navbar />
        
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/colors" element={<Colors />} /> 
            <Route path="/tools" element={<Tools />} /> 
            <Route path="/about" element={<About />} /> 

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}