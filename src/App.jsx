// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Colors from './pages/Colors';
import Tools from './pages/Tools';

export default function App() {
  return (
    <Router>
      <div className="font-sans selection:bg-white selection:text-black min-h-screen bg-zinc-950 flex flex-col">
        <Navbar />
        
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/colors" element={<Colors />} />
            <Route path="/tools" element={<Tools />} />
           
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}