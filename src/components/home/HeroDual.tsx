import React from 'react';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { BotanicalBranch } from '../ui/BotanicalDecor';

interface HeroDualProps {
  onNavigate: (tab: string) => void;
  onOpenBooking: (serviceType?: 'nails' | 'facial' | 'consultation') => void;
}

export const HeroDual: React.FC<HeroDualProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-[#F7F3EA] pt-14 pb-24 lg:pt-24 lg:pb-36 border-b border-[#E8DFD1] min-h-[85vh] flex items-center justify-center">
      {/* Background Radial Glow Effect */}
      <div className="hero-background-glow"></div>

      {/* Background Botanical Branch Textures */}
      <BotanicalBranch className="absolute -top-10 -right-10 w-96 h-[500px] text-[#7E8B72]" opacity={0.15} />
      <BotanicalBranch className="absolute -bottom-20 -left-20 w-80 h-[450px] text-[#AEB9A5] rotate-45" opacity={0.12} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-7 text-center lg:text-left">
            {/* Small Luxury Eyebrow Tagline */}
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-[#7E8B72]">
              <Sparkles className="w-3.5 h-3.5 text-[#3E4A2A]" />
              <span>Welcome to Signature Nails &amp; Spa</span>
            </div>

            {/* Large Editorial Serif Headline with Italic Accent */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#243126] leading-[1.08] tracking-tight">
              Elevate Your Nails,<br />
              <span className="italic font-normal text-[#7E8B72]">Nurture Your Glow.</span>
            </h1>

            <p className="text-xs sm:text-sm text-[#243126]/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans font-light">
              Step into Comstock Park's premier sanctuary for luxury nail care and medical-grade facial aesthetics. We combine minimalist elegance, meticulous detail, and skin health wellness for an unmatched pampering experience.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenBooking('nails')}
                className="w-full sm:w-auto bg-[#243126] hover:bg-[#3E4A2A] text-[#F7F3EA] px-9 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 group"
              >
                <Calendar className="w-4 h-4 text-[#AEB9A5] group-hover:scale-110 transition-transform" />
                <span>View Services &amp; Book</span>
              </button>

              <button
                onClick={() => onNavigate('facial')}
                className="w-full sm:w-auto bg-transparent hover:bg-[#E8DFD1]/50 text-[#243126] border border-[#AEB9A5] px-9 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-[#7E8B72]" />
                <span>Facial Experience</span>
              </button>
            </div>

            {/* Free Consultation Callout */}
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking('consultation')}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7E8B72] hover:text-[#243126] transition-colors group"
              >
                <span className="underline underline-offset-4 decoration-[#AEB9A5]">Not sure which treatment is right? Request a free skin consultation</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Asymmetric Editorial Image Layout */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              
              {/* Main Large Editorial Image */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white editorial-image-container z-10 w-full sm:w-[88%] ml-auto">
                <img
                  src="/images/skincare_facial_treatment.png"
                  alt="Signature Facial & Skincare Sanctuary"
                  className="w-full h-full object-cover editorial-image-zoom aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#243126]/90 via-[#243126]/30 to-transparent p-6 sm:p-8 flex flex-col justify-end">
                  <div className="max-w-[60%] sm:max-w-[65%]">
                    <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#AEB9A5]">Skin Health Studio</span>
                    <h3 className="font-serif text-white text-xl sm:text-3xl font-bold leading-tight">Approachable Skincare</h3>
                  </div>
                </div>
              </div>

              {/* Smaller Overlapping Detail Image (Positioned on the Right Edge) */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 z-20 w-44 sm:w-56 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white editorial-image-container hidden sm:block">
                <img
                  src="https://nz-website-media-r2-pub.gocheckin.net/19649-8506/page/index-3a2a6f5836457c12f578bc4bbb4c6244-49660.jpg"
                  alt="Luxury Nail Artistry"
                  className="w-full h-full object-cover editorial-image-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#243126]/85 via-transparent to-transparent p-3 sm:p-4 flex flex-col justify-end">
                  <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#E8D6D1]">Custom Artistry</span>
                  <p className="font-serif text-white text-xs sm:text-sm font-semibold">Polished Nails</p>
                </div>
              </div>

              {/* Top Accent Badge */}
              <div className="absolute -top-6 left-12 z-20 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#E8DFD1] shadow-lg hidden sm:flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#7E8B72] animate-pulse" />
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#243126]">
                  Nails &amp; Skincare Excellence
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex flex-col items-center gap-1 absolute bottom-2 left-1/2 -translate-x-1/2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer z-30">
          <span className="text-[9px] uppercase font-semibold tracking-[0.3em] text-[#7E8B72]">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#7E8B72] to-transparent animate-pulse" />
        </div>

      </div>
    </section>
  );
};

