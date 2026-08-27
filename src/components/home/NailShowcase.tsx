import React from 'react';
import { ArrowRight, Calendar, Star, ShieldCheck } from 'lucide-react';

interface NailShowcaseProps {
  onNavigate: (tab: string) => void;
  onOpenBooking: (serviceType?: 'nails' | 'facial' | 'consultation') => void;
}

export const NailShowcase: React.FC<NailShowcaseProps> = ({ onNavigate, onOpenBooking }) => {
  const nailGallery = [
    {
      img: 'https://nz-website-media-r2-pub.gocheckin.net/19649-8506/page/index-85d76b4bc1566f97e2b4aeceee0ee2b7-27328.jpg',
      title: 'French Almond Gel-X',
      tag: 'Custom Art'
    },
    {
      img: 'https://nz-website-media-r2-pub.gocheckin.net/19649-8506/page/index-b151e59adf93247d9215fb43f4f56242-33204.jpg',
      title: 'Deep Rose Dip Powder',
      tag: 'Natural Strength'
    },
    {
      img: 'https://nz-website-media-r2-pub.gocheckin.net/19649-8506/page/index-3a2a6f5836457c12f578bc4bbb4c6244-49660.jpg',
      title: 'Glitter Ombré Acrylics',
      tag: 'Long Lasting'
    },
    {
      img: 'https://nz-website-media-r2-pub.gocheckin.net/19649-8506/page/index-97dd879699ffef99600c8500b32f5971-57575.jpg',
      title: 'Deluxe Herbal Pedicure',
      tag: 'Spa Relaxation'
    }
  ];

  return (
    <section className="py-20 bg-[#F7F3EA] border-b border-[#EEE8D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#61725A]">
              <ShieldCheck className="w-4 h-4 text-[#3E4A2A]" />
              <span>Established Local Care</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#243126]">
              Pristine Nail Artistry &amp; Spa Pedicures
            </h2>
            <p className="text-xs sm:text-sm text-[#243126]/75 max-w-xl">
              From natural nail health restoration to long-lasting dip powder and custom nail art.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('nails')}
              className="bg-white hover:bg-[#EEE8D9] text-[#243126] border border-[#AEB9A5] px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Explore Nail Menu
            </button>
            <button
              onClick={() => onOpenBooking('nails')}
              className="bg-[#3E4A2A] hover:bg-[#61725A] text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Nails</span>
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nailGallery.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-[#EEE8D9] shadow-sm hover:shadow-md transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#243126]/80 via-transparent to-transparent opacity-90" />
                <div className="absolute top-3 left-3 bg-white/90 text-[#3E4A2A] text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full">
                  {item.tag}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-white font-bold text-lg">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Highlight Box */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-[#EEE8D9] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#EEE8D9] text-[#3E4A2A] flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 fill-current" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#243126]">Sanitation &amp; Health First</h4>
              <p className="text-xs text-[#243126]/75">Medical-grade autoclave sterilization, single-use buffers, and non-toxic polish options.</p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('nails')}
            className="shrink-0 text-xs font-semibold text-[#3E4A2A] hover:text-[#61725A] flex items-center gap-1.5"
          >
            <span>Read Nail Care Standards</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
