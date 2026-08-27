import React, { useState } from 'react';
import { X, Sparkles, Calendar, HeartHandshake, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: 'nails' | 'facial' | 'consultation';
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialService }) => {
  const [selectedService, setSelectedService] = useState<'nails' | 'facial' | 'consultation' | null>(initialService || null);
  const [consultationSubmitted, setConsultationSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [concernNote, setConcernNote] = useState('');

  if (!isOpen) return null;

  const handleBookNails = () => {
    window.open('https://book.gocheckin.net/v3/nails/19649/choose-service', '_blank');
  };

  const handleBookFacial = () => {
    // Dedicated facial booking trigger / appointment flow
    window.open('https://book.gocheckin.net/v3/nails/19649/choose-service', '_blank');
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultationSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#243126]/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#F7F3EA] rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#EEE8D9] relative">
        {/* Header */}
        <div className="bg-[#3E4A2A] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-[#61725A] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-[#A39A63] text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Signature Appointments</span>
          </div>
          <h2 className="font-serif text-2xl font-bold">What would you like to book?</h2>
          <p className="text-xs text-[#F7F3EA]/80 mt-1">
            Choose your service path below for an effortless appointment experience.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          {!consultationSubmitted ? (
            <>
              {/* Option 1: Book Nails */}
              <div 
                onClick={handleBookNails}
                className="group border border-[#AEB9A5]/60 hover:border-[#3E4A2A] bg-white hover:bg-[#EEE8D9]/40 p-4 rounded-xl cursor-pointer transition-all flex items-center justify-between shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#EEE8D9] group-hover:bg-[#AEB9A5]/40 flex items-center justify-center text-[#3E4A2A] transition-colors">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#243126]">
                      Book Nail Appointment
                    </h3>
                    <p className="text-xs text-[#243126]/70">
                      Manicures, Pedicures, Dip Powder &amp; Custom Nail Art
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-[#61725A] group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Option 2: Book Facial */}
              <div 
                onClick={handleBookFacial}
                className="group border border-[#AEB9A5]/60 hover:border-[#3E4A2A] bg-white hover:bg-[#EEE8D9]/40 p-4 rounded-xl cursor-pointer transition-all flex items-center justify-between shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#EEE8D9] group-hover:bg-[#AEB9A5]/40 flex items-center justify-center text-[#3E4A2A] transition-colors">
                    <Sparkles className="w-5 h-5 text-[#61725A]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#243126]">
                      Book Facial Appointment
                    </h3>
                    <p className="text-xs text-[#243126]/70">
                      Deep Clean, NanoGlow, Silk Lift &amp; Skin Renewal
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-[#61725A] group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Option 3: Free Skin Consultation */}
              <div 
                onClick={() => setSelectedService(selectedService === 'consultation' ? null : 'consultation')}
                className={`border p-4 rounded-xl cursor-pointer transition-all ${
                  selectedService === 'consultation'
                    ? 'border-[#3E4A2A] bg-[#EEE8D9]/60'
                    : 'border-[#AEB9A5]/60 hover:border-[#3E4A2A] bg-white hover:bg-[#EEE8D9]/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-[#3E4A2A] flex items-center justify-center text-[#F7F3EA]">
                      <HeartHandshake className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-[#243126] flex items-center gap-2">
                        <span>Start With a Skin Consultation</span>
                        <span className="bg-[#AEB9A5] text-[#3E4A2A] text-[10px] uppercase font-sans font-bold px-2 py-0.5 rounded-full">
                          Complimentary
                        </span>
                      </h3>
                      <p className="text-xs text-[#243126]/70">
                        Not sure which treatment fits your skin? Let us help guide you.
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={`w-5 h-5 text-[#61725A] transition-transform ${selectedService === 'consultation' ? 'rotate-90' : ''}`} />
                </div>

                {/* Dropdown consultation form */}
                {selectedService === 'consultation' && (
                  <form onSubmit={handleConsultationSubmit} className="mt-4 pt-4 border-t border-[#AEB9A5]/40 space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#243126] mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full bg-white border border-[#AEB9A5] rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#3E4A2A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#243126] mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. (616) 555-0199"
                        className="w-full bg-white border border-[#AEB9A5] rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#3E4A2A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#243126] mb-1">What is your main skin goal?</label>
                      <select
                        value={concernNote}
                        onChange={(e) => setConcernNote(e.target.value)}
                        className="w-full bg-white border border-[#AEB9A5] rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#3E4A2A]"
                      >
                        <option value="">Select skin concern...</option>
                        <option value="deep-clean">Deep Clean / Clogged Pores</option>
                        <option value="glow">Dull Skin / Radiant Glow</option>
                        <option value="acne">Breakouts &amp; Calming Support</option>
                        <option value="hydration">Dryness &amp; Fine Lines</option>
                        <option value="not-sure">I'm not sure – help me choose!</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#3E4A2A] hover:bg-[#61725A] text-white py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                    >
                      Request Free Consultation Call
                    </button>
                  </form>
                )}
              </div>
            </>
          ) : (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#AEB9A5]/40 text-[#3E4A2A] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#243126]">Consultation Requested!</h3>
              <p className="text-xs text-[#243126]/80 max-w-xs mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-[#3E4A2A]">{name}</span>. Our certified esthetician will contact you at <span className="font-semibold text-[#3E4A2A]">{phone}</span> to discuss your skin goals and help schedule the perfect treatment.
              </p>
              <button
                onClick={onClose}
                className="mt-4 bg-[#3E4A2A] text-white px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          )}

          {/* Quick Call Fallback */}
          <div className="pt-2 text-center border-t border-[#EEE8D9]">
            <p className="text-[11px] text-[#243126]/70 flex items-center justify-center gap-1.5">
              <span>Prefer to speak with us directly?</span>
              <a href="tel:616-785-0944" className="text-[#3E4A2A] font-bold hover:underline flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#A39A63]" />
                <span>616-785-0944</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
