import React from 'react';
import { Award, Heart, CheckCircle2, Sparkles } from 'lucide-react';

interface EstheticianProfileProps {
  onOpenBooking: (serviceType?: 'nails' | 'facial' | 'consultation') => void;
}

export const EstheticianProfile: React.FC<EstheticianProfileProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-[#F7F3EA] border-b border-[#EEE8D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EEE8D9] shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Col */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-[#EEE8D9] group">
                <img
                  src="/images/skincare_esthetician.png"
                  alt="Lead Certified Esthetician at Signature"
                  className="w-full h-96 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#243126]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-[#EEE8D9] flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-[#243126] text-base">Xena &amp; Skincare Team</h4>
                    <p className="text-[11px] text-[#61725A] font-medium">Licensed Esthetician Specialist</p>
                  </div>
                  <Award className="w-5 h-5 text-[#A39A63]" />
                </div>
              </div>
            </div>

            {/* Content Col */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEE8D9] text-[#3E4A2A] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#A39A63]" />
                <span>Esthetician Expertise</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#243126]">
                "Skincare should feel clear, personal, and comfortable."
              </h2>

              <p className="text-xs sm:text-sm text-[#243126]/80 leading-relaxed">
                We believe skin care is not about chasing unattainable perfection or pushing overwhelming 10-step routines. It is about understanding what your skin barrier needs today and providing gentle, effective care that respects your natural skin.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 bg-[#F7F3EA] p-3 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-[#61725A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#243126]">No Intimidation</h4>
                    <p className="text-[11px] text-[#243126]/70">We explain every product and step in simple language.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-[#F7F3EA] p-3 rounded-xl">
                  <Heart className="w-4 h-4 text-[#61725A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#243126]">Personalized Care</h4>
                    <p className="text-[11px] text-[#243126]/70">Every treatment is adjusted to your comfort level.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => onOpenBooking('consultation')}
                  className="w-full sm:w-auto bg-[#3E4A2A] hover:bg-[#61725A] text-white px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                >
                  Book Consultation With Esthetician
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
