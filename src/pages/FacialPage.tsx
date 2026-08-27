import { useState } from 'react';
import { ALL_FACIAL_SERVICES, SKIN_CONCERNS } from '../data/servicesData';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import { Sparkles, Calendar, HeartHandshake, ChevronDown, CheckCircle2, ShieldAlert } from 'lucide-react';

interface FacialPageProps {
  onOpenBooking: (serviceType?: 'nails' | 'facial' | 'consultation') => void;
  selectedConcernId?: string;
}

export const FacialPage: React.FC<FacialPageProps> = ({ onOpenBooking, selectedConcernId }) => {
  const [activeConcern, setActiveConcern] = useState<string | null>(selectedConcernId || null);
  const [expandedFacialId, setExpandedFacialId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpandedFacialId(expandedFacialId === id ? null : id);
  };

  return (
    <div className="py-12 bg-[#F7F3EA] min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. Facial Hero */}
        <div className="bg-[#243126] text-[#F7F3EA] rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3E4A2A] text-[#A39A63] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Approachable Professional Skincare</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Healthier skin built around your goals.
            </h1>

            <p className="text-xs sm:text-sm text-[#EEE8D9]/85 leading-relaxed font-sans">
              No complicated medical jargon or aggressive peelings. Just clean, effective botanical treatments, deep pore clearing, and barrier renewal under the care of certified estheticians.
            </p>

            {/* 2. Consultation CTA */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onOpenBooking('consultation')}
                className="bg-[#AEB9A5] hover:bg-[#61725A] text-[#243126] hover:text-white px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Start With Free Skin Consultation</span>
              </button>

              <button
                onClick={() => onOpenBooking('facial')}
                className="bg-transparent border border-[#AEB9A5] hover:bg-[#3E4A2A] text-white px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#A39A63]" />
                <span>Book Facial Appointment</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 & 4. "Choose by Concern" Navigator & Pathways */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#61725A]">
              Interactive Skin Navigator
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#243126] mt-1">
              Choose by What Your Skin is Experiencing
            </h2>
            <p className="text-xs text-[#243126]/75 mt-2">
              Select your primary skin feel below to highlight recommended treatments.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <button
                onClick={() => setActiveConcern(null)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeConcern === null
                    ? 'bg-[#3E4A2A] text-white'
                    : 'bg-white text-[#243126] border border-[#AEB9A5]/60 hover:bg-[#EEE8D9]'
                }`}
              >
                Show All Concerns
              </button>
              {SKIN_CONCERNS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveConcern(activeConcern === c.id ? null : c.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    activeConcern === c.id
                      ? 'bg-[#3E4A2A] text-white'
                      : 'bg-white text-[#243126] border border-[#AEB9A5]/60 hover:bg-[#EEE8D9]'
                  }`}
                >
                  {c.title}
                </button>
              ))}
            </div>
          </div>

          {/* 4 Concern Cards Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKIN_CONCERNS.filter(c => activeConcern === null || activeConcern === c.id).map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-2xl p-6 border border-[#EEE8D9] shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#A39A63] bg-[#F7F3EA] px-2.5 py-0.5 rounded-full">
                    {c.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#243126] mt-2">{c.title}</h3>
                  <p className="text-xs text-[#243126]/80 leading-relaxed mt-1">{c.description}</p>
                </div>
                <div className="pt-3 border-t border-[#EEE8D9]">
                  <span className="text-[10px] uppercase font-bold text-[#61725A] block">Recommended Facial:</span>
                  <span className="text-xs font-bold text-[#3E4A2A]">{c.recommendedFacial}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5 & 6. Full Treatment List in Expandable Accordions */}
        <div className="bg-white rounded-3xl p-8 border border-[#EEE8D9] shadow-sm space-y-8">
          <div className="border-b border-[#EEE8D9] pb-4 text-center sm:text-left">
            <h2 className="font-serif text-3xl font-bold text-[#243126]">Complete Facial Menu</h2>
            <p className="text-xs text-[#243126]/75 mt-1">
              Click any treatment to view plain-language outcomes, duration, step-by-step process, and post-care advice.
            </p>
          </div>

          <div className="space-y-4">
            {ALL_FACIAL_SERVICES.map((facial) => {
              const isExpanded = expandedFacialId === facial.id;
              return (
                <div
                  key={facial.id}
                  className="border border-[#AEB9A5]/60 rounded-2xl overflow-hidden bg-[#F7F3EA]/30 transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(facial.id)}
                    className="w-full p-5 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#F7F3EA] transition-colors"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-[#3E4A2A] text-white flex items-center justify-center font-serif text-base font-bold shrink-0">
                        <Sparkles className="w-4 h-4 text-[#A39A63]" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-[#243126]">{facial.name}</h3>
                        <p className="text-xs text-[#243126]/75">{facial.subCategory} • {facial.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="font-bold text-lg text-[#3E4A2A]">{facial.price}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#61725A] transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-6 pt-2 border-t border-[#EEE8D9] bg-white space-y-4">
                      <p className="text-xs text-[#243126]/85 leading-relaxed">{facial.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-[#F7F3EA] p-4 rounded-xl space-y-1">
                          <span className="text-[10px] uppercase font-bold text-[#61725A] block">Desired Outcome:</span>
                          <p className="text-xs font-semibold text-[#243126]">{facial.outcome}</p>
                        </div>
                        <div className="bg-[#F7F3EA] p-4 rounded-xl space-y-1">
                          <span className="text-[10px] uppercase font-bold text-[#61725A] block">Best For:</span>
                          <p className="text-xs font-semibold text-[#243126]">{facial.bestFor}</p>
                        </div>
                      </div>

                      {facial.whatHappens && (
                        <div className="space-y-2">
                          <span className="text-xs font-bold text-[#243126] block">What Happens During Treatment:</span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#243126]/80">
                            {facial.whatHappens.map((step, sIdx) => (
                              <li key={sIdx} className="flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#61725A] shrink-0" />
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {facial.postCareNotice && (
                        <div className="flex items-start gap-2 text-xs text-[#3E4A2A] bg-[#EEE8D9]/60 p-3 rounded-xl">
                          <ShieldAlert className="w-4 h-4 text-[#A39A63] shrink-0 mt-0.5" />
                          <span><strong>Post-Care Note:</strong> {facial.postCareNotice}</span>
                        </div>
                      )}

                      <div className="pt-2 flex justify-end">
                        <button
                          onClick={() => onOpenBooking('facial')}
                          className="bg-[#3E4A2A] hover:bg-[#61725A] text-white px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider"
                        >
                          Book {facial.name}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 11 & 12. Pre/Post Care & FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-[#EEE8D9] shadow-sm space-y-6">
            <h2 className="font-serif text-2xl font-bold text-[#243126]">First-Time Facial FAQs</h2>
            <FAQAccordion />
          </div>

          <div className="lg:col-span-5 bg-[#EEE8D9]/40 rounded-3xl p-8 border border-[#AEB9A5]/60 space-y-6">
            <h2 className="font-serif text-2xl font-bold text-[#243126]">Pre &amp; Post Care Advice</h2>
            
            <div className="space-y-4 text-xs text-[#243126]/85">
              <div className="space-y-1">
                <h4 className="font-bold text-[#3E4A2A]">Before Your Appointment:</h4>
                <p>Avoid strong exfoliation, retinol, or direct sun exposure for 48 hours prior to your facial.</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-[#3E4A2A]">After Your Appointment:</h4>
                <p>Stay hydrated, avoid heavy makeup for 12 hours, and apply gentle sunscreen daily to protect your fresh barrier.</p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenBooking('consultation')}
                className="w-full bg-[#3E4A2A] hover:bg-[#61725A] text-white py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-center"
              >
                Schedule Skin Consultation
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
