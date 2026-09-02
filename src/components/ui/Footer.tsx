import React from 'react';
import { Phone, MapPin, Clock, Heart, Sparkles } from 'lucide-react';
import { BotanicalBranch } from './BotanicalDecor';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenBooking: (serviceType?: 'nails' | 'facial' | 'consultation') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-[#243126] text-[#F7F3EA] relative overflow-hidden border-t border-[#3E4A2A]">
      {/* Subtle Oversized Faded Background Botanical Drawing */}
      <BotanicalBranch className="absolute -bottom-20 -right-10 w-[500px] h-[600px] text-[#AEB9A5]" opacity={0.04} />
      <BotanicalBranch className="absolute -top-20 -left-10 w-[450px] h-[550px] text-[#E8DFD1] rotate-180" opacity={0.03} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 md:pb-16 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#3E4A2A]/60">
          
          {/* Brand Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#AEB9A5] flex items-center justify-center text-[#243126] font-serif text-xl font-bold">
                S
              </div>
              <span className="font-serif text-2xl font-semibold tracking-wide text-white">
                Signature
              </span>
            </div>
            <p className="text-xs text-[#FCFAF5]/75 leading-relaxed font-sans">
              Approachable professional skincare &amp; polished nail artistry in a trusted local beauty destination in Comstock Park, Michigan.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/108071447716186"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#3E4A2A] hover:bg-[#7E8B72] flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/signature_nails_spa_inc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#3E4A2A] hover:bg-[#7E8B72] flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-white font-medium tracking-wider border-b border-[#3E4A2A] pb-2 inline-block">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs text-[#FCFAF5]/80">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => onNavigate('nails')} className="hover:text-white transition-colors">Nail Artistry &amp; Spa</button>
              </li>
              <li>
                <button onClick={() => onNavigate('facial')} className="hover:text-white transition-colors">Facial &amp; Skincare Menu</button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">About Salon &amp; Esthetician</button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">Contact &amp; Location</button>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-white font-medium tracking-wider border-b border-[#3E4A2A] pb-2 inline-block flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#AEB9A5]" />
              <span>Opening Hours</span>
            </h3>
            <ul className="space-y-2 text-xs text-[#FCFAF5]/80">
              <li className="flex justify-between border-b border-[#3E4A2A]/50 pb-1">
                <span>Mon – Fri</span>
                <span className="font-semibold text-white">9:30 am – 7:00 pm</span>
              </li>
              <li className="flex justify-between border-b border-[#3E4A2A]/50 pb-1">
                <span>Saturday</span>
                <span className="font-semibold text-white">9:30 am – 6:00 pm</span>
              </li>
              <li className="flex justify-between border-b border-[#3E4A2A]/50 pb-1">
                <span>Sunday</span>
                <span className="font-semibold text-white">10:00 am – 4:00 pm</span>
              </li>
            </ul>
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking('consultation')}
                className="w-full text-center bg-[#3E4A2A] hover:bg-[#7E8B72] text-white py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#AEB9A5]" />
                <span>Free Skin Consultation</span>
              </button>
            </div>
          </div>

          {/* Location & Map */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-white font-medium tracking-wider border-b border-[#3E4A2A] pb-2 inline-block">
              Location
            </h3>
            <div className="space-y-3 text-xs text-[#FCFAF5]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#AEB9A5] shrink-0 mt-0.5" />
                <span>3782 Alpine Ave NW,<br />Comstock Park, MI 49321</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#AEB9A5] shrink-0" />
                <a href="tel:616-785-0944" className="hover:text-white transition-colors font-medium">616-785-0944</a>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden h-28 border border-[#3E4A2A]">
              <iframe
                title="Signature Nails & Spa Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.425492811638!2d-85.6889343!3d43.0324783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8819a99c170dec77%3A0x22ec3b65eb4455c6!2sSignature%20Nails%20%26%20Spa!5e0!3m2!1sen!2s!4v1763573793078!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#FCFAF5]/60 gap-4">
          <p>© {new Date().getFullYear()} Signature Nails &amp; Spa. All Rights Reserved.</p>
          <div className="flex items-center gap-1 text-[#FCFAF5]/80">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-[#E8D6D1] fill-current" />
            <span>for Comstock Park &amp; Greater Grand Rapids, MI</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
