import { useState } from 'react';
import { NAIL_CATEGORIES } from '../data/servicesData';
import { Calendar, ShieldCheck, Clock, Sparkles, X, Eye } from 'lucide-react';

interface NailsPageProps {
  onOpenBooking: (serviceType?: 'nails' | 'facial' | 'consultation') => void;
}

interface GalleryItem {
  id: string;
  category: 'gelx' | 'dip' | 'art' | 'pedicure';
  title: string;
  tag: string;
  img: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    category: 'art',
    title: 'Metallic Gold Line Art Almonds',
    tag: 'Custom Artistry',
    img: '/images/nail_art_1.png',
    description: 'Minimalist nude almond nails with hand-painted gold leaf line work and soft shimmer.'
  },
  {
    id: 'g-2',
    category: 'dip',
    title: 'Velvet Rose Blush Dip Powder',
    tag: 'Dip Powder',
    img: '/images/nail_art_2.png',
    description: 'Vitamins-enriched dipping powder in a romantic blush rose color with high gloss finish.'
  },
  {
    id: 'g-3',
    category: 'pedicure',
    title: 'Floral Bath Botanical Spa Pedicure',
    tag: 'Spa Pedicure',
    img: '/images/nail_art_3.png',
    description: 'Soothing foot bath with natural sea salts, fresh flower petals, and custom polish.'
  },
  {
    id: 'g-4',
    category: 'gelx',
    title: 'French Almond Gel-X Extensions',
    tag: 'Gel-X Extensions',
    img: 'https://nz-website-media-r2-pub.gocheckin.net/19649-8506/page/index-85d76b4bc1566f97e2b4aeceee0ee2b7-27328.jpg',
    description: 'Full set Après Gel-X soft extensions with classic French tip lines and durable shine.'
  },
  {
    id: 'g-5',
    category: 'dip',
    title: 'Deep Rose Shimmer Dip Set',
    tag: 'Dip Powder',
    img: 'https://nz-website-media-r2-pub.gocheckin.net/19649-8506/page/index-b151e59adf93247d9215fb43f4f56242-33204.jpg',
    description: 'Natural nail strengthening dip set with rich berry hue and 3+ week durability.'
  },
  {
    id: 'g-6',
    category: 'art',
    title: 'Glitter Ombré Natural Dip',
    tag: 'Custom Artistry',
    img: 'https://nz-website-media-r2-pub.gocheckin.net/19649-8506/page/index-3a2a6f5836457c12f578bc4bbb4c6244-49660.jpg',
    description: 'Seamless gradient fade from nude base into delicate sparkle glitter tips.'
  },
  {
    id: 'g-7',
    category: 'gelx',
    title: 'Chrome Accents Almond Gel-X',
    tag: 'Gel-X Extensions',
    img: 'https://nz-website-media-r2-pub.gocheckin.net/19649-8506/page/index-f28e9c2bb570762650accbf37b6dcc64-41689.jpg',
    description: 'Modern chrome mirror line accents over almond gel extensions for a sleek finish.'
  },
  {
    id: 'g-8',
    category: 'pedicure',
    title: 'Deluxe Herbal Detox Spa Pedicure',
    tag: 'Spa Pedicure',
    img: 'https://nz-website-media-r2-pub.gocheckin.net/19649-8506/page/index-97dd879699ffef99600c8500b32f5971-57575.jpg',
    description: 'Organic detox sea salt soak, hot stone massage, clay mask, and paraffin treatment.'
  }
];

export const NailsPage: React.FC<NailsPageProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'gelx' | 'dip' | 'art' | 'pedicure'>('all');
  const [activeImageModal, setActiveImageModal] = useState<GalleryItem | null>(null);

  const filteredGallery = GALLERY_ITEMS.filter(
    item => filter === 'all' || item.category === filter
  );

  return (
    <div className="py-12 bg-[#F7F3EA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8DFD1] text-[#243126] text-xs font-semibold uppercase tracking-[0.2em]">
            <ShieldCheck className="w-4 h-4 text-[#7E8B72]" />
            <span>Signature Nail Sanctuary</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#243126]">
            Meticulous Nail Care &amp; Artistry
          </h1>
          <p className="text-xs sm:text-sm text-[#243126]/80 leading-relaxed max-w-xl mx-auto font-light">
            Polished manicures, luxurious spa pedicures, and long-lasting nail enhancements crafted with single-use sanitized tools and top-tier organic products.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenBooking('nails')}
              className="bg-[#243126] hover:bg-[#3E4A2A] text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-md inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#AEB9A5]" />
              <span>Book Your Nail Visit</span>
            </button>
          </div>
        </div>

        {/* Multi-Photo Interactive Nail Gallery */}
        <div className="space-y-8 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFD1] shadow-lg" id="gallery">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#7E8B72]">
              <Sparkles className="w-4 h-4 text-[#3E4A2A]" />
              <span>Salon Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#243126]">
              Real Client Nail Art Showcase
            </h2>
            <p className="text-xs sm:text-sm text-[#243126]/75">
              Browse authentic nail sets created by our salon technicians. Click any image to view details and reserve your style.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {[
                { id: 'all', label: 'All Designs' },
                { id: 'gelx', label: 'Gel-X Extensions' },
                { id: 'dip', label: 'Dip Powder' },
                { id: 'art', label: 'Custom Artistry' },
                { id: 'pedicure', label: 'Spa Pedicures' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as any)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                    filter === tab.id
                      ? 'bg-[#243126] text-white shadow-sm'
                      : 'bg-[#F7F3EA] text-[#243126]/80 hover:bg-[#E8DFD1] hover:text-[#243126]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {filteredGallery.map(item => (
              <div
                key={item.id}
                onClick={() => setActiveImageModal(item)}
                className="bg-[#FCFAF5] rounded-2xl overflow-hidden border border-[#E8DFD1] shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#243126]/85 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                  
                  <span className="absolute top-3 left-3 bg-white/90 text-[#243126] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    {item.tag}
                  </span>

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#243126] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif text-lg font-bold leading-snug">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
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
        <div className="bg-[#243126] text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">Ready for Polished Nails?</h2>
          <p className="text-xs sm:text-sm text-[#F7F3EA]/80 max-w-md mx-auto">
            Book your next manicure or pedicure appointment online or call us directly at 616-785-0944.
          </p>
          <button
            onClick={() => onOpenBooking('nails')}
            className="bg-[#F7F3EA] hover:bg-white text-[#243126] px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors shadow-md"
          >
            Book Nail Appointment
          </button>
        </div>

      </div>

      {/* Lightbox Photo Preview Modal */}
      {activeImageModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-[#E8DFD1]">
            <button
              onClick={() => setActiveImageModal(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 text-[#243126] flex items-center justify-center shadow-md hover:bg-white transition-all z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-80 sm:h-96 w-full">
              <img
                src={activeImageModal.img}
                alt={activeImageModal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#243126]/90 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 bg-white/90 text-[#243126] text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">
                {activeImageModal.tag}
              </span>
            </div>

            <div className="p-6 sm:p-8 space-y-4 bg-white">
              <h3 className="font-serif text-2xl font-bold text-[#243126]">
                {activeImageModal.title}
              </h3>
              <p className="text-xs text-[#243126]/80 leading-relaxed">
                {activeImageModal.description}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setActiveImageModal(null);
                    onOpenBooking('nails');
                  }}
                  className="w-full bg-[#243126] hover:bg-[#3E4A2A] text-white py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#AEB9A5]" />
                  <span>Book This Nail Design</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

