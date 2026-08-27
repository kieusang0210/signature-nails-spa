import React from 'react';
import { Phone, Sparkles, Calendar } from 'lucide-react';

interface MobileBookingBarProps {
  onOpenBooking: (serviceType?: 'nails' | 'facial' | 'consultation') => void;
}

export const MobileBookingBar: React.FC<MobileBookingBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#F7F3EA]/95 backdrop-blur-lg border-t border-[#EEE8D9] px-3 py-2.5 shadow-lg">
      <div className="grid grid-cols-3 gap-2">
        {/* Book Nails */}
        <button
          onClick={() => onOpenBooking('nails')}
          className="bg-white border border-[#AEB9A5] hover:bg-[#EEE8D9] text-[#3E4A2A] py-2 px-1 rounded-xl text-[11px] font-semibold flex flex-col items-center justify-center gap-0.5 shadow-sm active:scale-95 transition-all"
        >
          <Calendar className="w-4 h-4 text-[#3E4A2A]" />
          <span>Book Nails</span>
        </button>

        {/* Book Facial */}
        <button
          onClick={() => onOpenBooking('facial')}
          className="bg-[#3E4A2A] text-white py-2 px-1 rounded-xl text-[11px] font-semibold flex flex-col items-center justify-center gap-0.5 shadow-sm active:scale-95 transition-all"
        >
          <Sparkles className="w-4 h-4 text-[#A39A63]" />
          <span>Book Facial</span>
        </button>

        {/* Call Us Direct */}
        <a
          href="tel:616-785-0944"
          className="bg-white border border-[#AEB9A5] hover:bg-[#EEE8D9] text-[#243126] py-2 px-1 rounded-xl text-[11px] font-semibold flex flex-col items-center justify-center gap-0.5 shadow-sm active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-[#61725A]" />
          <span>Call Salon</span>
        </a>
      </div>
    </div>
  );
};
