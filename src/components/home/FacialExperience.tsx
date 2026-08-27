import React from 'react';
import { Sparkles, HeartHandshake, ArrowRight } from 'lucide-react';
import { BotanicalBranch, BotanicalDivider } from '../ui/BotanicalDecor';

interface FacialExperienceProps {
  onNavigate: (tab: string) => void;
  onOpenBooking: (serviceType?: 'nails' | 'facial' | 'consultation') => void;
}

export const FacialExperience: React.FC<FacialExperienceProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FCFAF5] via-[#F7F3EA] to-[#FCFAF5] relative overflow-hidden border-b border-[#E8DFD1]">
      {/* Subtle Background Botanical Artwork */}
      <BotanicalBranch className="absolute top-10 right-0 w-80 h-[500px] text-[#7E8B72]" opacity={0.1} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Large Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white editorial-image-container">
              <img
                src="/images/skincare_facial_treatment.png"
                alt="Professional Skincare & Facial Experience"
                className="w-full h-[420px] sm:h-[500px] object-cover editorial-image-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#243126]/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#AEB9A5]">Private Esthetician Studio</span>
                <h3 className="font-serif text-white text-2xl font-bold">A Calming &amp; Sanitized Retreat</h3>
                <p className="text-xs text-[#FCFAF5]/80 mt-1">Designed for barrier restoration, physical comfort, and pore clarity.</p>
              </div>
            </div>
          </div>

          {/* Right Editorial Skincare Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7E8B72]">
              <Sparkles className="w-4 h-4 text-[#A39A63]" />
              <span>Professional Skincare</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#243126] leading-tight">
              A little time for your skin.
            </h2>

            <p className="text-xs sm:text-sm text-[#243126]/80 leading-relaxed font-sans">
              You do not need to know technical treatment names before you arrive. Tell us what your skin is experiencing, and our certified esthetician will tailor a pathway suited to your barrier and comfort.
            </p>

            <BotanicalDivider className="!my-4" />

            {/* 3 Key Benefits with Thin Separators */}
            <div className="space-y-4 pt-2">
              <div className="pb-4 border-b border-[#E8DFD1] flex items-start gap-4">
                <span className="font-serif text-xl font-bold text-[#7E8B72] shrink-0">01</span>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#243126]">Deep Cleansing &amp; Pore Purifying</h4>
                  <p className="text-xs text-[#243126]/75 mt-0.5">Gentle papaya enzyme exfoliation and painless ultrasonic extraction without harsh peeling.</p>
                </div>
              </div>

              <div className="pb-4 border-b border-[#E8DFD1] flex items-start gap-4">
                <span className="font-serif text-xl font-bold text-[#7E8B72] shrink-0">02</span>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#243126]">Barrier Repair &amp; Skin Renewal</h4>
                  <p className="text-xs text-[#243126]/75 mt-0.5">High-concentration peptides, ceramides, and nutrient serums to lock in resilience.</p>
                </div>
              </div>

              <div className="pb-4 border-b border-[#E8DFD1] flex items-start gap-4">
                <span className="font-serif text-xl font-bold text-[#7E8B72] shrink-0">03</span>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#243126]">Hydration &amp; Glass-like Glow</h4>
                  <p className="text-xs text-[#243126]/75 mt-0.5">Micro-channeling nano-technology for immediate event readiness with zero downtime.</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onOpenBooking('consultation')}
                className="w-full sm:w-auto bg-[#243126] hover:bg-[#3E4A2A] text-[#F7F3EA] px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <HeartHandshake className="w-4 h-4 text-[#AEB9A5]" />
                <span>Start With Free Consultation</span>
              </button>

              <button
                onClick={() => onNavigate('facial')}
                className="w-full sm:w-auto text-[#243126] hover:text-[#7E8B72] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 py-3.5 px-4 transition-colors group"
              >
                <span>View Facial Menu</span>
                <ArrowRight className="w-4 h-4 text-[#7E8B72] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
