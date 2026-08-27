import React from 'react';
import { SKIN_CONCERNS } from '../../data/servicesData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface SkinConcernGridProps {
  onNavigate: (tab: string, concernId?: string) => void;
  onOpenBooking: (serviceType?: 'nails' | 'facial' | 'consultation') => void;
}

export const SkinConcernGrid: React.FC<SkinConcernGridProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <section className="py-20 bg-[#F7F3EA] border-t border-[#EEE8D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEE8D9] text-[#3E4A2A] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#A39A63]" />
            <span>Meet Our Skin Side</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#243126]">
            Professional skincare without the intimidation.
          </h2>
          <p className="text-xs sm:text-sm text-[#243126]/75 mt-3 leading-relaxed max-w-xl mx-auto">
            You do not need to know the name of a treatment before you book. Start with what your skin is experiencing, and we will help guide you.
          </p>
        </div>

        {/* 4 Concern Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKIN_CONCERNS.map((concern) => (
            <div
              key={concern.id}
              onClick={() => onNavigate('facial', concern.id)}
              className="bg-white rounded-2xl overflow-hidden border border-[#EEE8D9] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={concern.image}
                    alt={concern.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#243126]/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-white/90 text-[#3E4A2A] px-2.5 py-1 rounded-full">
                    {concern.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="font-serif text-xl font-bold text-[#243126]">
                    {concern.title}
                  </h3>
                  <p className="text-xs text-[#243126]/80 leading-relaxed">
                    {concern.description}
                  </p>

                  {/* Customer Language Tags */}
                  <div className="pt-2">
                    <span className="block text-[10px] uppercase font-bold text-[#61725A] mb-1.5">
                      Common signs:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {concern.customerLanguage.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-[#EEE8D9]/60 text-[#243126] text-[11px] px-2 py-0.5 rounded-md font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="p-5 pt-0">
                <div className="w-full pt-3 border-t border-[#EEE8D9] flex items-center justify-between text-xs font-semibold text-[#3E4A2A] group-hover:text-[#61725A] transition-colors">
                  <span>Explore Concern Pathway</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Free Consultation Prompt */}
        <div className="mt-12 bg-[#EEE8D9]/50 rounded-2xl p-6 sm:p-8 border border-[#AEB9A5]/50 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <h3 className="font-serif text-xl font-bold text-[#243126]">
              Still not sure which skin pathway fits you?
            </h3>
            <p className="text-xs text-[#243126]/75">
              Talk directly with our certified esthetician. No pressure, just honest skincare advice.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking('consultation')}
            className="shrink-0 bg-[#3E4A2A] hover:bg-[#61725A] text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
          >
            Book Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
