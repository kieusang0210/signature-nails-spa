import React from 'react';
import { FEATURED_FACIALS } from '../../data/servicesData';
import { Clock, Tag, Sparkles, ArrowRight, Calendar } from 'lucide-react';

interface FeaturedFacialsProps {
  onNavigate: (tab: string) => void;
  onOpenBooking: (serviceType?: 'nails' | 'facial' | 'consultation') => void;
}

export const FeaturedFacials: React.FC<FeaturedFacialsProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <section className="py-20 bg-[#EEE8D9]/30 border-b border-[#EEE8D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#61725A]">
            Curated Skin Menu
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#243126] mt-1">
            Top 3 Signature Facial Pathways
          </h2>
          <p className="text-xs sm:text-sm text-[#243126]/75 mt-2">
            Our most requested treatments designed for clear pores, radiant glow, and intense hydration.
          </p>
        </div>

        {/* 3 Featured Facial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_FACIALS.map((facial) => (
            <div
              key={facial.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#EEE8D9] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image + Badge */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={facial.image}
                    alt={facial.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#243126]/60 via-transparent to-transparent" />
                  {facial.badge && (
                    <span className="absolute top-3 right-3 bg-[#3E4A2A] text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#A39A63]" />
                      <span>{facial.badge}</span>
                    </span>
                  )}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="bg-white/90 text-[#3E4A2A] text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{facial.duration}</span>
                    </span>
                    <span className="bg-[#3E4A2A] text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                      {facial.price}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-bold text-[#243126]">
                    {facial.name}
                  </h3>
                  <p className="text-xs text-[#243126]/80 leading-relaxed">
                    {facial.description}
                  </p>

                  <div className="pt-2">
                    <div className="bg-[#F7F3EA] p-3 rounded-xl space-y-1">
                      <span className="text-[10px] uppercase font-bold text-[#61725A] block">
                        Desired Outcome:
                      </span>
                      <p className="text-xs font-medium text-[#243126]">
                        {facial.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-1.5 text-[11px] text-[#243126]/70 pt-1">
                    <Tag className="w-3.5 h-3.5 text-[#61725A] shrink-0 mt-0.5" />
                    <span><strong className="text-[#243126]">Best for:</strong> {facial.bestFor}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => onOpenBooking('facial')}
                  className="w-full bg-[#3E4A2A] hover:bg-[#61725A] text-white py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book This Facial</span>
                </button>
                <button
                  onClick={() => onNavigate('facial')}
                  className="w-full text-center text-xs font-medium text-[#3E4A2A] hover:text-[#61725A] py-1 transition-colors flex items-center justify-center gap-1"
                >
                  <span>Learn Full Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => onNavigate('facial')}
            className="inline-flex items-center gap-2 bg-white hover:bg-[#F7F3EA] text-[#3E4A2A] border border-[#AEB9A5] px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
          >
            <span>View Complete Facial Menu ({FEATURED_FACIALS.length + 2} Treatments)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
