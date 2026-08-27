import { Sparkles, Heart } from 'lucide-react';

interface NailsToGlowBridgeProps {
  onNavigate: (tab: string) => void;
  onOpenBooking: (serviceType?: 'nails' | 'facial' | 'consultation') => void;
}

export const NailsToGlowBridge: React.FC<NailsToGlowBridgeProps> = ({ onNavigate, onOpenBooking }) => {
  const steps = [
    { num: '1', title: 'Visit for Nails', desc: 'Enjoy your manicure or pedicure appointment in our relaxed salon.' },
    { num: '2', title: 'Ask About Skin', desc: 'Inquire with your tech or scan our QR menu about skin concerns.' },
    { num: '3', title: 'Free Skin Chat', desc: 'Spend 5 minutes with our esthetician to analyze your skin needs.' },
    { num: '4', title: 'Choose Pathway', desc: 'Select a custom facial pathway (Deep Clean, Glow, or Renewal).' },
    { num: '5', title: 'Sustained Glow', desc: 'Build a comfortable repeat-care plan aligned with your lifestyle.' },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#3E4A2A] via-[#61725A] to-[#3E4A2A] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A39A63]/30 border border-[#A39A63]/50 text-[#F7F3EA] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#A39A63]" />
            <span>Nails to Glow Bridge Campaign</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            You already trust us with your nails. <br />
            <span className="italic font-normal text-[#AEB9A5]">Now meet our skin side.</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#EEE8D9]/90 max-w-xl mx-auto leading-relaxed">
            Transition seamlessly from your favorite manicure visit into approachable, professional skincare under one roof.
          </p>
        </div>

        {/* 5 Journey Steps Horizontal */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#243126]/40 backdrop-blur-sm border border-[#AEB9A5]/30 p-5 rounded-2xl text-center space-y-2 relative"
            >
              <div className="w-8 h-8 rounded-full bg-[#A39A63] text-white font-serif font-bold text-sm flex items-center justify-center mx-auto mb-3">
                {step.num}
              </div>
              <h3 className="font-serif font-bold text-base text-white">{step.title}</h3>
              <p className="text-[11px] text-[#EEE8D9]/80 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('facial')}
            className="w-full sm:w-auto bg-[#F7F3EA] hover:bg-white text-[#3E4A2A] px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#A39A63]" />
            <span>Meet Our Skin Side</span>
          </button>
          <button
            onClick={() => onOpenBooking('consultation')}
            className="w-full sm:w-auto bg-[#243126] hover:bg-[#3E4A2A] text-white border border-[#AEB9A5]/50 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
          >
            <Heart className="w-4 h-4 text-[#AEB9A5]" />
            <span>Ask During Next Nail Visit</span>
          </button>
        </div>

      </div>
    </section>
  );
};
