import { NAIL_CATEGORIES } from '../data/servicesData';
import { Calendar, ShieldCheck, Clock } from 'lucide-react';

interface NailsPageProps {
  onOpenBooking: (serviceType?: 'nails' | 'facial' | 'consultation') => void;
}

export const NailsPage: React.FC<NailsPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="py-12 bg-[#F7F3EA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEE8D9] text-[#3E4A2A] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#61725A]" />
            <span>Signature Nail Care</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#243126]">
            Meticulous Nail Care &amp; Artistry
          </h1>
          <p className="text-xs sm:text-sm text-[#243126]/80 leading-relaxed max-w-xl mx-auto">
            Polished manicures, luxurious spa pedicures, and long-lasting nail enhancements crafted with single-use sanitized tools and top-tier products.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenBooking('nails')}
              className="bg-[#3E4A2A] hover:bg-[#61725A] text-white px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#A39A63]" />
              <span>Book Nail Appointment</span>
            </button>
          </div>
        </div>

        {/* Service Categories Accordions/Grids */}
        <div className="space-y-12">
          {NAIL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-[#EEE8D9] shadow-sm space-y-6">
              <div className="border-b border-[#EEE8D9] pb-4">
                <h2 className="font-serif text-2xl font-bold text-[#243126]">{cat.name}</h2>
                <p className="text-xs text-[#243126]/75 mt-1">{cat.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-5 rounded-2xl border border-[#EEE8D9] bg-[#F7F3EA]/30 hover:bg-[#F7F3EA] transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="font-serif text-lg font-bold text-[#243126]">{item.name}</h3>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-xs font-bold text-[#3E4A2A] bg-[#EEE8D9] px-2.5 py-1 rounded-lg">
                            {item.price}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-[#243126]/75 leading-relaxed">{item.desc}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#EEE8D9] flex items-center justify-between text-xs">
                      <span className="text-[11px] text-[#61725A] flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{item.duration}</span>
                      </span>
                      <button
                        onClick={() => onOpenBooking('nails')}
                        className="text-[#3E4A2A] font-semibold hover:underline"
                      >
                        Book This
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Kids & Add-ons Extra Card */}
        <div className="bg-[#EEE8D9]/40 rounded-3xl p-8 border border-[#AEB9A5]/60 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-[#243126]">Little Princess / Kids Care</h3>
            <p className="text-xs text-[#243126]/80 leading-relaxed">
              Gentle manicures and pedicures for guests aged 10 and under. Fun polish colors, sticker accents, and child-safe non-toxic polish options available.
            </p>
            <span className="inline-block text-xs font-bold text-[#3E4A2A]">Kids Manicure ($18) | Kids Pedicure ($28)</span>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-[#243126]">Custom Add-ons &amp; Repairs</h3>
            <p className="text-xs text-[#243126]/80 leading-relaxed">
              French Tip Upgrade (+$10), Paraffin Wax Treatment (+$10), Nail Repair (+$5/nail), Chrome / Cat Eye Finish (+$15), Extra Massage (+$1/min).
            </p>
          </div>
        </div>

        {/* Final Booking Callout */}
        <div className="bg-[#3E4A2A] text-white rounded-3xl p-8 text-center space-y-4 shadow-lg">
          <h2 className="font-serif text-3xl font-bold">Ready for Polished Nails?</h2>
          <p className="text-xs text-[#EEE8D9]/80 max-w-md mx-auto">
            Book your next manicure or pedicure appointment online or call us directly at 616-785-0944.
          </p>
          <button
            onClick={() => onOpenBooking('nails')}
            className="bg-[#F7F3EA] hover:bg-white text-[#3E4A2A] px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
          >
            Book Nail Appointment
          </button>
        </div>

      </div>
    </div>
  );
};
