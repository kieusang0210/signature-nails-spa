import React from 'react';
import { Phone, MapPin, Clock, Calendar, ShieldAlert } from 'lucide-react';

interface ContactPageProps {
  onOpenBooking: (serviceType?: 'nails' | 'facial' | 'consultation') => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="py-12 bg-[#F7F3EA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#61725A]">
            Visit Signature
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#243126]">
            Contact &amp; Location
          </h1>
          <p className="text-xs sm:text-sm text-[#243126]/75">
            Conveniently located in Comstock Park, MI. Walk-ins welcome for nails, appointments recommended for facials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Info Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-[#EEE8D9] shadow-sm space-y-6">
            <h2 className="font-serif text-2xl font-bold text-[#243126]">Salon Information</h2>

            <div className="space-y-4 text-xs text-[#243126]/85">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#3E4A2A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#243126] text-sm">Address</h4>
                  <p>3782 Alpine Ave NW, Comstock Park, MI 49321</p>
                  <p className="text-[11px] text-[#61725A] mt-0.5">Free dedicated parking plaza in front.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#3E4A2A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#243126] text-sm">Phone</h4>
                  <a href="tel:616-785-0944" className="text-[#3E4A2A] font-bold text-sm hover:underline">
                    616-785-0944
                  </a>
                  <p className="text-[11px] text-[#61725A] mt-0.5">Call anytime during business hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#3E4A2A] shrink-0 mt-0.5" />
                <div className="w-full">
                  <h4 className="font-bold text-[#243126] text-sm mb-1">Hours of Care</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between border-b border-[#EEE8D9] pb-0.5">
                      <span>Mon – Fri:</span>
                      <span className="font-semibold text-[#243126]">9:30 am – 7:00 pm</span>
                    </div>
                    <div className="flex justify-between border-b border-[#EEE8D9] pb-0.5">
                      <span>Saturday:</span>
                      <span className="font-semibold text-[#243126]">9:30 am – 6:00 pm</span>
                    </div>
                    <div className="flex justify-between border-b border-[#EEE8D9] pb-0.5">
                      <span>Sunday:</span>
                      <span className="font-semibold text-[#243126]">10:00 am – 4:00 pm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <button
                onClick={() => onOpenBooking()}
                className="w-full bg-[#3E4A2A] hover:bg-[#61725A] text-white py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#A39A63]" />
                <span>Book Appointment Online</span>
              </button>

              <div className="p-3 rounded-xl bg-[#EEE8D9]/50 border border-[#AEB9A5]/50 flex items-start gap-2 text-[11px] text-[#243126]/75">
                <ShieldAlert className="w-4 h-4 text-[#A39A63] shrink-0 mt-0.5" />
                <span><strong>Cancellation Policy:</strong> 24-hour notice requested for appointment rescheduling.</span>
              </div>
            </div>
          </div>

          {/* Map Frame */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-[#EEE8D9] shadow-sm min-h-[400px]">
            <iframe
              title="Signature Nails & Spa Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.425492811638!2d-85.6889343!3d43.0324783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8819a99c170dec77%3A0x22ec3b65eb4455c6!2sSignature%20Nails%20%26%20Spa!5e0!3m2!1sen!2s!4v1763573793078!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </div>
  );
};
