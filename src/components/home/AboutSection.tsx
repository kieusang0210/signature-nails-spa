import React from 'react';
import { EstheticianProfile } from './EstheticianProfile';
import { ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: (serviceType?: 'nails' | 'facial' | 'consultation') => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-[#F7F3EA] border-b border-[#E8DFD1]" id="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEE8D9] text-[#3E4A2A] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#A39A63]" />
              <span>Our Story &amp; Standards</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#243126]">
              A Local Beauty Destination Built on Trust &amp; Quality
            </h2>
            <p className="text-xs sm:text-sm text-[#243126]/80 leading-relaxed">
              Located conveniently on Alpine Ave NW in Comstock Park, Signature Nails &amp; Spa has earned a reputation for precision nail care and welcoming client hospitality.
            </p>
            <p className="text-xs sm:text-sm text-[#243126]/80 leading-relaxed">
              We created our Skincare Studio to provide approachable, professional facials in the same warm environment our clients already trust. No aggressive sales tactics or intimidating clinical feel—just genuine care for your hands, feet, and skin.
            </p>
          </div>

          <div className="lg:col-span-5">
            <img
              src="https://nz-website-media-r2-pub.gocheckin.net/19649-8506/page/index-index-Panther-Lake-Nails-Kent-WA-98031(4)-76291-25228.jpg"
              alt="Signature Salon Ambience"
              className="rounded-3xl shadow-lg border-4 border-white object-cover w-full h-80 sm:h-96"
            />
          </div>
        </div>

        {/* 3 Core Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#EEE8D9] space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <ShieldCheck className="w-8 h-8 text-[#3E4A2A]" />
            <h3 className="font-serif text-xl font-bold text-[#243126]">Strict Hygiene Standards</h3>
            <p className="text-xs text-[#243126]/75 leading-relaxed">
              All metal implements undergo medical-grade autoclave sterilization between clients. Buffers and files are single-use.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#EEE8D9] space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <Heart className="w-8 h-8 text-[#61725A]" />
            <h3 className="font-serif text-xl font-bold text-[#243126]">Approachable Skincare</h3>
            <p className="text-xs text-[#243126]/75 leading-relaxed">
              We focus on skin barrier health, pore clarity, and relaxing comfort rather than aggressive chemical peels.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#EEE8D9] space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <Award className="w-8 h-8 text-[#A39A63]" />
            <h3 className="font-serif text-xl font-bold text-[#243126]">Licensed Specialists</h3>
            <p className="text-xs text-[#243126]/75 leading-relaxed">
              Our technicians and esthetician receive continuous education on current nail techniques and dermal care.
            </p>
          </div>
        </div>

        {/* Esthetician Section */}
        <EstheticianProfile onOpenBooking={onOpenBooking} />

      </div>
    </section>
  );
};
