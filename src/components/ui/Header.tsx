import React, { useState } from 'react';
import { Phone, MapPin, Calendar, Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenBooking: (serviceType?: 'nails' | 'facial' | 'consultation') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'nails', label: 'Nails' },
    { id: 'facial', label: 'Facial & Skincare' },
    { id: 'results', label: 'Results' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F7F3EA]/95 backdrop-blur-md border-b border-[#EEE8D9]">
      {/* Top Banner / Announcement */}
      <div className="bg-[#3E4A2A] text-[#F7F3EA] text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#A39A63]" />
            <span>Nails to Glow: Ask about our complimentary skin consultations during your next visit!</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-[#EEE8D9]/90">
            <a href="tel:616-785-0944" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3 h-3 text-[#A39A63]" />
              <span>616-785-0944</span>
            </a>
            <a 
              href="https://maps.app.goo.gl/SmMmnthwKZtKcLKE7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MapPin className="w-3 h-3 text-[#A39A63]" />
              <span>3782 Alpine Ave NW, Comstock Park, MI</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 rounded-full bg-[#3E4A2A] flex items-center justify-center text-[#F7F3EA] font-serif text-xl font-bold shadow-sm group-hover:bg-[#61725A] transition-colors">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-[#243126]">
                Signature
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-[#61725A] font-medium">
                Nails &amp; Skincare
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium tracking-wide transition-all relative py-1 ${
                  currentTab === item.id 
                    ? 'text-[#3E4A2A] font-semibold' 
                    : 'text-[#243126]/80 hover:text-[#3E4A2A]'
                }`}
              >
                {item.label}
                {currentTab === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#61725A] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Book Now Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#3E4A2A] hover:bg-[#61725A] text-[#FFFFFF] px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow transition-all flex items-center gap-2 group"
            >
              <Calendar className="w-4 h-4 text-[#AEB9A5] group-hover:scale-110 transition-transform" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#3E4A2A] text-white px-3.5 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#243126] hover:text-[#3E4A2A] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F3EA] border-b border-[#EEE8D9] px-4 pt-2 pb-6 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2.5 px-3 rounded-lg text-base font-medium transition-colors ${
                currentTab === item.id
                  ? 'bg-[#EEE8D9] text-[#3E4A2A] font-semibold'
                  : 'text-[#243126] hover:bg-[#EEE8D9]/50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-[#EEE8D9]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#3E4A2A] text-white py-3 rounded-full text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#AEB9A5]" />
              <span>Select Service &amp; Book</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
