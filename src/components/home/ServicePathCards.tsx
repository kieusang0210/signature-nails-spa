import React from 'react';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

interface ServicePathCardsProps {
  onNavigate: (tab: string) => void;
  onOpenBooking: (serviceType?: 'nails' | 'facial' | 'consultation') => void;
}

export const ServicePathCards: React.FC<ServicePathCardsProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <section className="py-20 bg-[#F7F3EA] border-b border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7E8B72]">
            Two Core Specialties
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#243126] mt-1">
            Choose Your Signature Journey
          </h2>
          <p className="text-xs sm:text-sm text-[#243126]/75 mt-2">
            Whether you seek pristine nail design or barrier skin renewal, explore your visual service path.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Nail Artistry Tile */}
          <div
            onClick={() => onNavigate('nails')}
            className="group relative h-96 rounded-3xl overflow-hidden shadow-lg border border-[#E8DFD1] cursor-pointer editorial-image-container"
          >
            <img
              src="https://nz-website-media-r2-pub.gocheckin.net/19649-8506/page/index-f28e9c2bb570762650accbf37b6dcc64-41689.jpg"
              alt="Signature Nail Artistry"
              className="w-full h-full object-cover editorial-image-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#243126]/90 via-[#243126]/40 to-transparent p-8 flex flex-col justify-end">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#AEB9A5] mb-1">
                Established Specialty
              </span>
              <h3 className="font-serif text-white text-3xl font-bold">
                Nail Artistry &amp; Spa Care
              </h3>
              <p className="text-xs text-[#FCFAF5]/80 mt-2 max-w-md">
                Classic Manicures, Herbal Spa Pedicures, Dip Powder &amp; Custom Hand-Drawn Gel Art.
              </p>

              <div className="pt-6 flex items-center justify-between text-xs font-semibold text-[#F7F3EA]">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenBooking('nails');
                  }}
                  className="bg-[#243126] hover:bg-[#3E4A2A] text-white px-5 py-2.5 rounded-full uppercase tracking-wider flex items-center gap-1.5 border border-[#AEB9A5]/40"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#AEB9A5]" />
                  <span>Book Nails</span>
                </button>
                <div className="flex items-center gap-1 text-[#AEB9A5] group-hover:translate-x-1.5 transition-transform duration-300">
                  <span>Explore Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Skincare Studio Tile */}
          <div
            onClick={() => onNavigate('facial')}
            className="group relative h-96 rounded-3xl overflow-hidden shadow-lg border border-[#E8DFD1] cursor-pointer editorial-image-container"
          >
            <img
              src="/images/skincare_nanoglow.png"
              alt="Signature Facial & Skincare Studio"
              className="w-full h-full object-cover editorial-image-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#243126]/90 via-[#243126]/40 to-transparent p-8 flex flex-col justify-end">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8D6D1] mb-1">
                Meet Our Skin Side
              </span>
              <h3 className="font-serif text-white text-3xl font-bold">
                Facial &amp; Skincare Studio
              </h3>
              <p className="text-xs text-[#FCFAF5]/80 mt-2 max-w-md">
                Pore Cleansing, NanoGlow Infusion, Silk Renewal &amp; Calming Barrier Care.
              </p>

              <div className="pt-6 flex items-center justify-between text-xs font-semibold text-[#F7F3EA]">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenBooking('consultation');
                  }}
                  className="bg-[#FCFAF5] text-[#243126] hover:bg-[#E8DFD1] px-5 py-2.5 rounded-full uppercase tracking-wider flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#7E8B72]" />
                  <span>Free Consultation</span>
                </button>
                <div className="flex items-center gap-1 text-[#E8D6D1] group-hover:translate-x-1.5 transition-transform duration-300">
                  <span>Explore Facial</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
