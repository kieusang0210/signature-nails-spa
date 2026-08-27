import React from 'react';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { BotanicalBranch } from '../ui/BotanicalDecor';

interface HeroDualProps {
  onNavigate: (tab: string) => void;
  onOpenBooking: (serviceType?: 'nails' | 'facial' | 'consultation') => void;
}

export const HeroDual: React.FC<HeroDualProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-[#F7F3EA] pt-12 pb-20 lg:pt-20 lg:pb-32 border-b border-[#E8DFD1]">
      {/* Background Subtle Botanical Branch Texture */}
      <BotanicalBranch className="absolute -top-10 -right-10 w-96 h-[500px] text-[#7E8B72]" opacity={0.12} />
      <BotanicalBranch className="absolute -bottom-20 -left-20 w-80 h-[450px] text-[#AEB9A5] rotate-45" opacity={0.1} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCFAF5] border border-[#E8DFD1] text-[#243126] text-[11px] font-semibold uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5 text-[#7E8B72]" />
              <span>Signature Nails &amp; Spa • Comstock Park, MI</span>
            </div>

            {/* Large Editorial Serif Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#243126] leading-[1.08] tracking-tight">
              Beauty, cared for <br />
              <span className="italic font-normal text-[#7E8B72]">from nails to skin.</span>
            </h1>

            <p className="text-xs sm:text-sm text-[#243126]/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Discover polished nail artistry and approachable professional skincare designed around your skin concerns, your comfort, and your goals.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenBooking('nails')}
                className="w-full sm:w-auto bg-[#243126] hover:bg-[#3E4A2A] text-[#F7F3EA] px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 group"
              >
                <Calendar className="w-4 h-4 text-[#AEB9A5]" />
                <span>Book Your Visit</span>
              </button>

              <button
                onClick={() => onNavigate('facial')}
                className="w-full sm:w-auto bg-[#FCFAF5] hover:bg-[#E8DFD1]/50 text-[#243126] border border-[#AEB9A5] px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-[#7E8B72]" />
                <span>Explore Facial Services</span>
              </button>
            </div>

            {/* Secondary Text Link */}
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking('consultation')}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7E8B72] hover:text-[#243126] transition-colors group"
              >
                <span className="underline underline-offset-4 decoration-[#AEB9A5]">Not sure which facial to choose? Start with a skin consultation</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Asymmetric Overlapping Photography Layout */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              
              {/* Main Large Editorial Image */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white editorial-image-container z-10 w-full sm:w-[85%] aspect-[4/5] ml-auto">
                <img
                  src="/images/skincare_facial_treatment.png"
                  alt="Approachable Professional Skincare & Facial"
                  className="w-full h-full object-cover editorial-image-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#243126]/70 via-transparent to-transparent p-6 flex flex-col justify-end">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#AEB9A5]">Skincare Studio</span>
                  <h3 className="font-serif text-white text-xl sm:text-2xl font-bold">Approachable Skincare</h3>
                </div>
              </div>

              {/* Smaller Overlapping Detail Image */}
              <div className="absolute -bottom-8 -left-4 sm:left-0 z-20 w-48 sm:w-60 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white editorial-image-container hidden sm:block">
                <img
                  src="https://nz-website-media-r2-pub.gocheckin.net/19649-8506/page/index-3a2a6f5836457c12f578bc4bbb4c6244-49660.jpg"
                  alt="Polished Nail Care Detail"
                  className="w-full h-full object-cover editorial-image-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#243126]/80 via-transparent to-transparent p-3 flex flex-col justify-end">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-[#E8D6D1]">Nail Artistry</span>
                  <p className="font-serif text-white text-xs font-semibold">Polished Nails</p>
                </div>
              </div>

              {/* Decorative Accent Pill Badge */}
              <div className="absolute -top-6 left-12 z-20 bg-[#FCFAF5]/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#E8DFD1] shadow-md hidden sm:flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#7E8B72] animate-pulse" />
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#243126]">
                  Nails &amp; Professional Skincare
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
