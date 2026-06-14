// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Clock, ArrowRight, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle');
  const [isLocked, setIsLocked] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState('');

  // Check if the user is in a cooldown period when the component loads
  useEffect(() => {
    const lastSubmission = localStorage.getItem('sr_contact_submitted');
    if (lastSubmission) {
      const timePassed = Date.now() - parseInt(lastSubmission, 10);
      const cooldownPeriod = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

      if (timePassed < cooldownPeriod) {
        setIsLocked(true);
        // Calculate remaining hours
        const hoursLeft = Math.ceil((cooldownPeriod - timePassed) / (1000 * 60 * 60));
        setTimeRemaining(`${hoursLeft} hour${hoursLeft > 1 ? 's' : ''}`);
      } else {
        // Cooldown expired, clear it
        localStorage.removeItem('sr_contact_submitted');
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Double-check lock before submitting
    if (isLocked) return;
    
    setStatus('submitting');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          ...formData
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', inquiry: '', message: '' });
        
        // Lock the form for 24 hours to protect your 250/mo limit
        localStorage.setItem('sr_contact_submitted', Date.now().toString());
        setTimeout(() => {
          setIsLocked(true);
          setTimeRemaining('24 hours');
        }, 3000);

      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-24 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: Typography & Info */}
        <div className="flex flex-col justify-center">
          <span className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase mb-6 block">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-10 leading-[1.1]">
            Start the<br />
            <span className="text-zinc-500">conversation.</span>
          </h1>
          
          <p className="text-lg text-zinc-400 leading-relaxed mb-16 max-w-md">
            Whether you are conceptualizing a new architectural space or seeking technical guidance on our premium finishes, our consultants are ready to assist.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Location */}
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                <MapPin size={16} className="text-zinc-400" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 tracking-wide">Studio</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  S R Enterprises<br />
                  Mumbai, Maharashtra<br />
                  India
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                <Clock size={16} className="text-zinc-400" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 tracking-wide">Hours</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Mon — Fri: 09:00 - 19:00<br />
                  Sat: 10:00 - 16:00
                </p>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="flex flex-col gap-3 sm:col-span-2">
              <div className="flex items-center gap-4 group cursor-pointer w-max">
                <Mail size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
                <span className="text-zinc-400 font-mono text-sm group-hover:text-white transition-colors">
                  studio@srenterprises.com
                </span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer w-max">
                <Phone size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
                <span className="text-zinc-400 font-mono text-sm group-hover:text-white transition-colors">
                  +91 (0) 98765 43210
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sleek Form */}
        <div className="flex flex-col justify-center">
          <div className="bg-[#111111] border border-zinc-800/60 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
            
            {isLocked ? (
              /* Locked State UI */
              <div className="flex flex-col items-center justify-center text-center py-12 px-4 relative z-10">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
                  Inquiry Received
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Thank you for reaching out. We have received your message and our team will get back to you shortly.
                </p>
                <div className="bg-zinc-950/50 border border-zinc-800/50 rounded-lg px-6 py-4">
                  <p className="text-xs font-mono text-zinc-500">
                    To prevent spam, this form is temporarily locked for <span className="text-zinc-300">{timeRemaining}</span>. If you need immediate assistance, please call us directly.
                  </p>
                </div>
              </div>
            ) : (
              /* Active Form UI */
              <>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-8">
                  Send a Direct Inquiry
                </h3>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                  
                  {/* THE HONEYPOT: Hidden from humans, traps spam bots */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  {/* Name */}
                  <div>
                    <label className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-3 block">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder-zinc-700 text-sm"
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  {/* Email & Phone Backup Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-3 block">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder-zinc-700 text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-3 block">
                        Phone Number (Optional)
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder-zinc-700 text-sm"
                        placeholder="+91..."
                      />
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-3 block">
                      Inquiry Type
                    </label>
                    <select 
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all text-sm appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="text-zinc-700">Select an option...</option>
                      <option value="consultation">Color Consultation</option>
                      <option value="architectural">Architectural Supply</option>
                      <option value="support">Product Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-3 block">
                      Project Details
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder-zinc-700 text-sm resize-none"
                      placeholder="Tell us about your space and vision..."
                    />
                  </div>

                  {/* Submit Button & Status Messages */}
                  <div className="mt-4 flex flex-col gap-4">
                    <button 
                      type="submit"
                      disabled={status === 'submitting'}
                      className={`bg-white text-black font-bold text-sm px-8 py-4 rounded-full tracking-widest uppercase transition-all flex items-center justify-center gap-3 group shadow-lg ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-zinc-200'}`}
                    >
                      {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                      {status !== 'submitting' && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
                    </button>

                    {/* Feedback Messages */}
                    {status === 'success' && (
                      <p className="text-emerald-400 text-sm font-medium text-center animate-pulse">
                        Message sent successfully. Locking form...
                      </p>
                    )}
                    {status === 'error' && (
                      <p className="text-red-400 text-sm font-medium text-center">
                        Something went wrong. Please check your network and try again.
                      </p>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;