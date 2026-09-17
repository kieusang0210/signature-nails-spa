import React, { useState } from 'react';
import { NAIL_CATEGORIES } from '../data/servicesData';
import { Calendar, ShieldCheck, Clock, Sparkles, X, Eye, CheckCircle2, Award, Heart, Feather } from 'lucide-react';
import { BotanicalBranch } from '../components/ui/BotanicalDecor';

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
  const [activeCategoryTab, setActiveCategoryTab] = useState<number>(0);
  const [activeImageModal, setActiveImageModal] = useState<GalleryItem | null>(null);

  const filteredGallery = GALLERY_ITEMS.filter(
    item => filter === 'all' || item.category === filter
  );

  return (
    <div className="bg-[#F7F3EA] min-h-screen">
      
      {/* 1. EDITORIAL LUXURY HERO BANNER */}
      <section className="relative bg-[#243126] text-white py-10 lg:py-14 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/sage_silk_bg.png')] bg-cover bg-center opacity-20 mix-blend-soft-light pointer-events-none" />
        <BotanicalBranch className="absolute top-0 right-0 w-96 h-[420px] text-[#AEB9A5]" opacity={0.12} />
        <BotanicalBranch className="absolute bottom-0 left-0 w-80 h-96 text-[#E8DFD1] rotate-180" opacity={0.08} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Hero Text Content */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3E4A2A]/90 border border-[#AEB9A5]/40 text-[#AEB9A5] text-xs font-semibold uppercase tracking-[0.25em]">
                <ShieldCheck className="w-4 h-4 text-[#E8D6D1]" />
                <span>Sanitary &amp; Luxury Nail Care</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1]">
                Meticulous Nail Care <br />
                <span className="italic font-normal text-[#E8D6D1]">&amp; Custom Artistry.</span>
              </h1>

              <p className="text-sm sm:text-base text-[#FCFAF5]/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Polished manicures, organic spa pedicures, and long-lasting enhancements. Crafted with single-use sanitized pouch tools, hospital-grade hygiene, and premium non-toxic polishes.
              </p>

              {/* Feature Bullet Badges */}
              <div className="pt-1 flex flex-wrap justify-center lg:justify-start gap-3 text-xs font-medium text-[#FCFAF5]/90">
                <span className="flex items-center gap-1.5 bg-[#3E4A2A]/40 px-3 py-1.5 rounded-full border border-[#AEB9A5]/30">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#AEB9A5]" />
                  100% Single-Use Files &amp; Buffers
                </span>
                <span className="flex items-center gap-1.5 bg-[#3E4A2A]/40 px-3 py-1.5 rounded-full border border-[#AEB9A5]/30">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#AEB9A5]" />
                  Medical Autoclave Sanitization
                </span>
                <span className="flex items-center gap-1.5 bg-[#3E4A2A]/40 px-3 py-1.5 rounded-full border border-[#AEB9A5]/30">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#AEB9A5]" />
                  3+ Week Guarantee
                </span>
              </div>

              {/* Hero Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onOpenBooking('nails')}
                  className="w-full sm:w-auto bg-[#FCFAF5] hover:bg-white text-[#243126] px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-xl flex items-center justify-center gap-2 group"
                >
                  <Calendar className="w-4 h-4 text-[#7E8B72] group-hover:scale-110 transition-transform" />
                  <span>Book Nail Visit</span>
                </button>

                <a
                  href="#pricing-menu"
                  className="w-full sm:w-auto bg-transparent hover:bg-[#3E4A2A] text-white border border-[#AEB9A5] px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-all text-center"
                >
                  Explore Menu &amp; Pricing
                </a>
              </div>
            </div>

            {/* Right Hero Image Layout */}
            <div className="lg:col-span-5 relative">
              <div className="relative max-w-md mx-auto">
                <div className="relative rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl aspect-[4/5] group">
                  <img
                    src="https://nz-website-media-r2-pub.gocheckin.net/19649-8506/page/index-85d76b4bc1566f97e2b4aeceee0ee2b7-27328.jpg"
                    alt="Luxury Nail Artistry Sanctuary"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#243126] via-transparent to-transparent opacity-85 p-6 flex flex-col justify-end">
                    <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#AEB9A5]">Signature Craft</span>
                    <h3 className="font-serif text-white text-2xl font-bold">Après Gel-X &amp; Custom Art</h3>
                  </div>
                </div>

                {/* Top Right Accent Badge (Positioned so it NEVER overlaps bottom text) */}
                <div className="absolute -top-4 -right-2 sm:-right-4 bg-[#FCFAF5] text-[#243126] px-4 py-2.5 rounded-2xl shadow-xl border border-[#E8DFD1] hidden sm:flex items-center gap-3 z-20">
                  <div className="w-8 h-8 rounded-full bg-[#243126] text-[#AEB9A5] flex items-center justify-center font-serif text-sm font-bold">
                    S
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider">Top Rated Salon</div>
                    <div className="text-[10px] text-[#7E8B72]">Comstock Park, MI</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. HYGIENE & QUALITY GUARANTEE PILLARS */}
      <section className="py-10 bg-white border-b border-[#E8DFD1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 space-y-2">
              <ShieldCheck className="w-7 h-7 text-[#7E8B72] mx-auto" />
              <h4 className="font-serif font-bold text-base text-[#243126]">Single-Use Kits</h4>
              <p className="text-xs text-[#243126]/75">Files, buffers &amp; foot basin liners disposed after every client.</p>
            </div>

            <div className="p-4 space-y-2">
              <Award className="w-7 h-7 text-[#7E8B72] mx-auto" />
              <h4 className="font-serif font-bold text-base text-[#243126]">Hospital Sterilization</h4>
              <p className="text-xs text-[#243126]/75">Medical-grade autoclave for 100% metal tool sterilization.</p>
            </div>

            <div className="p-4 space-y-2">
              <Heart className="w-7 h-7 text-[#7E8B72] mx-auto" />
              <h4 className="font-serif font-bold text-base text-[#243126]">Organic Ingredients</h4>
              <p className="text-xs text-[#243126]/75">Nutrient-rich sea salts, essential oils &amp; vitamin scrubs.</p>
            </div>

            <div className="p-4 space-y-2">
              <Feather className="w-7 h-7 text-[#7E8B72] mx-auto" />
              <h4 className="font-serif font-bold text-base text-[#243126]">Gentle Nail Health</h4>
              <p className="text-xs text-[#243126]/75">Zero harsh electric drilling on natural nail beds.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* 3. MULTI-PHOTO INTERACTIVE NAIL GALLERY */}
        <div className="space-y-8 bg-white rounded-3xl p-6 sm:p-12 border border-[#E8DFD1] shadow-xl relative overflow-hidden" id="gallery">
          <div className="text-center max-w-2xl mx-auto space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#7E8B72]">
              <Sparkles className="w-4 h-4 text-[#3E4A2A]" />
              <span>Salon Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#243126]">
              Real Client Nail Showcase
            </h2>
            <p className="text-xs sm:text-sm text-[#243126]/75 max-w-lg mx-auto">
              Explore authentic sets crafted by our technicians. Click any design to preview and reserve.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2.5 pt-4">
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
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-sm ${
                    filter === tab.id
                      ? 'bg-[#243126] text-white shadow-md'
                      : 'bg-[#F7F3EA] text-[#243126]/80 hover:bg-[#E8DFD1] hover:text-[#243126]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 relative z-10">
            {filteredGallery.map(item => (
              <div
                key={item.id}
                onClick={() => setActiveImageModal(item)}
                className="bg-[#FCFAF5] rounded-2xl overflow-hidden border border-[#E8DFD1] shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#243126]/90 via-[#243126]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                  
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#243126] text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {item.tag}
                  </span>

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#243126] opacity-0 group-hover:opacity-100 transition-opacity">
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

        {/* 4. LUXURY STRUCTURED SERVICE PRICING MENU WITH TABS */}
        <div className="space-y-10" id="pricing-menu">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7E8B72]">
              Menu &amp; Transparent Pricing
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#243126]">
              Nail Services &amp; Treatment Menu
            </h2>
            <p className="text-xs sm:text-sm text-[#243126]/75">
              Select a service category below to view all options, durations, and details.
            </p>

            {/* Category Switcher Tabs */}
            <div className="flex flex-wrap justify-center gap-2 pt-6">
              {NAIL_CATEGORIES.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategoryTab(idx)}
                  className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                    activeCategoryTab === idx
                      ? 'bg-[#243126] text-white border-[#243126] shadow-md'
                      : 'bg-white text-[#243126] border-[#E8DFD1] hover:bg-[#F7F3EA]'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Category Display */}
          {NAIL_CATEGORIES[activeCategoryTab] && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFD1] shadow-lg space-y-8 animate-blur-reveal">
              <div className="border-b border-[#E8DFD1] pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#243126]">
                    {NAIL_CATEGORIES[activeCategoryTab].name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#243126]/75 mt-1 max-w-2xl">
                    {NAIL_CATEGORIES[activeCategoryTab].description}
                  </p>
                </div>
                <button
                  onClick={() => onOpenBooking('nails')}
                  className="shrink-0 bg-[#3E4A2A] hover:bg-[#243126] text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm inline-flex items-center gap-2 self-start md:self-auto"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#AEB9A5]" />
                  <span>Book Category</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {NAIL_CATEGORIES[activeCategoryTab].items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-6 rounded-2xl border border-[#E8DFD1] bg-[#FCFAF5] hover:border-[#AEB9A5] transition-all hover:shadow-md flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="font-serif text-xl font-bold text-[#243126] group-hover:text-[#3E4A2A] transition-colors">
                          {item.name}
                        </h4>
                        <div className="shrink-0">
                          <span className="text-sm font-bold text-[#243126] bg-[#E8DFD1]/70 px-3 py-1.5 rounded-xl">
                            {item.price}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-[#243126]/75 leading-relaxed mt-2">{item.desc}</p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#E8DFD1]/70 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-[#7E8B72] flex items-center gap-1.5 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#3E4A2A]" />
                        <span>Duration: {item.duration}</span>
                      </span>
                      <button
                        onClick={() => onOpenBooking('nails')}
                        className="text-[#3E4A2A] font-bold hover:underline uppercase text-[11px] tracking-wider"
                      >
                        Book This &rarr;
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>



        {/* 6. EMOTIONAL CTA FOOTER BANNER */}
        <div className="bg-[#243126] text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/sage_silk_bg.png')] bg-cover bg-center opacity-20 pointer-events-none mix-blend-soft-light" />
          <BotanicalBranch className="absolute top-0 right-0 w-80 h-96 text-[#AEB9A5]" opacity={0.1} />

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#AEB9A5]">
              Reservations &amp; Appointments
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              Ready for Meticulous, Polished Nails?
            </h2>
            <p className="text-xs sm:text-sm text-[#FCFAF5]/80 leading-relaxed font-light">
              Book your nail appointment online in less than a minute or call our Comstock Park salon directly at <strong className="text-white">616-785-0944</strong>.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking('nails')}
                className="bg-[#FCFAF5] hover:bg-white text-[#243126] px-9 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all shadow-lg hover:scale-105"
              >
                Book Your Nail Appointment Now
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* LIGHTBOX GALLERY MODAL */}
      {activeImageModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-[#E8DFD1] animate-blur-reveal">
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

              <div className="pt-2">
                <button
                  onClick={() => {
                    setActiveImageModal(null);
                    onOpenBooking('nails');
                  }}
                  className="w-full bg-[#243126] hover:bg-[#3E4A2A] text-white py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#AEB9A5]" />
                  <span>Reserve This Nail Style</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};


