import React, { useState } from 'react';
import { Calendar, Menu, X } from 'lucide-react';

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
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F7F3EA]/90 backdrop-blur-md border-b border-[#E8DFD1] transition-all">
      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 rounded-full bg-[#243126] flex items-center justify-center text-[#F7F3EA] font-serif text-xl font-bold shadow-md group-hover:bg-[#3E4A2A] transition-colors">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-[#243126]">
                Signature
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase font-sans text-[#7E8B72] font-semibold">
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
                className={`text-xs font-semibold uppercase tracking-[0.15em] transition-all relative py-2 ${
                  currentTab === item.id 
                    ? 'text-[#243126] font-bold' 
                    : 'text-[#243126]/75 hover:text-[#3E4A2A]'
                }`}
              >
                {item.label}
                {currentTab === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#7E8B72] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Book Now Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="bg-transparent text-[#243126] hover:bg-[#243126] hover:text-[#F7F3EA] border border-[#243126] px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-sm hover:shadow flex items-center gap-2 group"
            >
              <Calendar className="w-3.5 h-3.5 text-[#7E8B72] group-hover:text-[#AEB9A5] transition-colors" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#243126] text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#AEB9A5]" />
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
        <div className="lg:hidden bg-[#F7F3EA] border-b border-[#E8DFD1] px-4 pt-2 pb-6 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2.5 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                currentTab === item.id
                  ? 'bg-[#E8DFD1] text-[#243126] font-bold'
                  : 'text-[#243126] hover:bg-[#E8DFD1]/50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-[#E8DFD1]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#243126] text-white py-3 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2"
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

