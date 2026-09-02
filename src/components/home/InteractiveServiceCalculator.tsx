import React, { useState } from 'react';
import { Calendar, Check, ShoppingBag, ArrowRight } from 'lucide-react';
import { BotanicalBranch } from '../ui/BotanicalDecor';

interface ServiceItem {
  id: string;
  name: string;
  price: number;
  description: string;
  popular?: boolean;
}

interface ServiceCategory {
  id: string;
  name: string;
  items: ServiceItem[];
}

const SERVICE_DATA: ServiceCategory[] = [
  {
    id: 'nails',
    name: 'Nail Manicures',
    items: [
      { id: 'mani-classic', name: 'Signature Classic Manicure', price: 25, description: 'Nail shaping, cuticle treatment, hand massage, and regular polish of your choice.' },
      { id: 'mani-gel', name: 'Gel Polish Manicure', price: 40, description: 'Long-lasting high-shine gel polish with full cuticle care & relaxing hand massage.', popular: true },
      { id: 'mani-collagen', name: 'Collagen Hand Treatment Spa', price: 38, description: 'Nail care combined with deeply hydrating collagen gloves for velvety smooth hands.' },
      { id: 'mani-deluxe', name: 'Deluxe Signature Spa Manicure', price: 48, description: 'Sugar scrub exfoliation, hot towel wrap, paraffin wax treatment, and hand massage.' },
    ]
  },
  {
    id: 'pedicures',
    name: 'Spa Pedicures',
    items: [
      { id: 'pedi-classic', name: 'Signature Classic Pedicure', price: 38, description: 'Warm sea salt soak, nail trimming, callus smoothing, lotion massage, and warm towel wrap.' },
      { id: 'pedi-sugar', name: 'Organic Sugar Scrub Pedicure', price: 48, description: 'Classic pedicure enhanced with organic sugar scrub exfoliation for silky soft legs.' },
      { id: 'pedi-deluxe', name: 'Deluxe Detox Spa Pedicure', price: 58, description: 'Organic detox sea salt soak, purifying clay mask, hot towel wrap, and deep lotion massage.', popular: true },
      { id: 'pedi-vip', name: 'VIP Collagen & Hot Stone Pedicure', price: 75, description: 'Collagen-infused bath, soothing hot stone massage, paraffin wax, and shoulder massage.' },
    ]
  },
  {
    id: 'dip-gelx',
    name: 'Dip & Gel-X',
    items: [
      { id: 'dip-standard', name: 'Organic Dipping Powder', price: 48, description: 'Lightweight, durable, odor-free enhancement enriched with vitamins to strengthen natural nails.', popular: true },
      { id: 'dip-french', name: 'Dipping Powder French', price: 55, description: 'Classic French tip finish or custom dual-color gradient with long-lasting chip resistance.' },
      { id: 'gelx-full', name: 'Après Gel-X Full Set', price: 65, description: 'Full coverage soft gel extensions with zero natural nail damage and lightweight elegance.' },
      { id: 'gelx-refill', name: 'Gel-X Extension Refill', price: 52, description: 'Maintenance fill and reshape for existing Gel-X extensions.' },
    ]
  },
  {
    id: 'facials',
    name: 'Luxury Facials',
    items: [
      { id: 'facial-glow', name: 'Signature Glow & Hydrate Facial', price: 95, description: 'Deep cleansing, gentle exfoliation, customized serum infusion, and relaxing facial massage.', popular: true },
      { id: 'facial-acne', name: 'Clear & Clarifying Acne Facial', price: 110, description: 'Targeted pore extraction, antibacterial high frequency treatment, and soothing botanical mask.' },
      { id: 'facial-aging', name: 'Ageless Firming Peptide Facial', price: 130, description: 'Micro-current toning, peptide firming mask, and LED red light therapy for youth renewal.' },
      { id: 'facial-express', name: 'Express Lunchtime Refresh Facial', price: 65, description: '30-minute quick skin refresh including double cleanse, gentle peel, and hydration shield.' },
    ]
  },
  {
    id: 'add-ons',
    name: 'Waxing & Add-ons',
    items: [
      { id: 'wax-eyebrow', name: 'Eyebrow Shaping & Waxing', price: 18, description: 'Precision waxing and custom arch shaping for structured brows.' },
      { id: 'wax-lip', name: 'Upper Lip Waxing', price: 12, description: 'Gentle hair removal for smooth upper lip skin.' },
      { id: 'addon-paraffin', name: 'Warm Paraffin Wax Treatment', price: 15, description: 'Deep moisture lock treatment for dry hands or feet.' },
      { id: 'addon-led', name: 'LED Light Therapy Add-on', price: 30, description: 'Targeted light therapy to stimulate collagen or calm active inflammation.' },
    ]
  }
];

interface InteractiveServiceCalculatorProps {
  onOpenBooking: (serviceType?: 'nails' | 'facial' | 'consultation') => void;
}

export const InteractiveServiceCalculator: React.FC<InteractiveServiceCalculatorProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<string>('nails');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const currentCategory = SERVICE_DATA.find(cat => cat.id === activeTab) || SERVICE_DATA[0];

  const allServices = SERVICE_DATA.flatMap(c => c.items);
  const selectedItems = allServices.filter(item => selectedServices.includes(item.id));
  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="py-20 lg:py-28 bg-[#FCFAF5] relative overflow-hidden border-b border-[#E8DFD1]" id="services">
      <BotanicalBranch className="absolute top-0 right-0 w-80 h-96 text-[#7E8B72]" opacity={0.08} />
      <BotanicalBranch className="absolute bottom-0 left-0 w-80 h-96 text-[#AEB9A5] rotate-180" opacity={0.08} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] uppercase font-semibold tracking-[0.3em] text-[#7E8B72] block mb-2">
            Service Menu &amp; Interactive Estimator
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#243126] mb-4">
            Curated Nails &amp; Skincare Menu
          </h2>
          <p className="text-xs sm:text-sm text-[#243126]/75 max-w-xl mx-auto">
            Explore our signature offerings. Check any services you wish to experience to estimate your total and reserve your visit.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex bg-[#F7F3EA] p-1.5 rounded-full border border-[#E8DFD1] shadow-inner gap-1 max-w-full">
            {SERVICE_DATA.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all whitespace-nowrap ${
                  activeTab === category.id
                    ? 'bg-[#243126] text-[#F7F3EA] shadow-sm'
                    : 'text-[#243126]/80 hover:text-[#243126] hover:bg-[#E8DFD1]/50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Tab Service List */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFD1] shadow-xl">
          <div className="flex justify-between items-center pb-6 border-b border-[#E8DFD1] mb-6">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#243126]">
              {currentCategory.name}
            </h3>
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#7E8B72]">
              Est. Prices
            </span>
          </div>

          <div className="space-y-4">
            {currentCategory.items.map(item => {
              const isSelected = selectedServices.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleService(item.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex gap-4 items-start ${
                    isSelected
                      ? 'border-[#3E4A2A] bg-[#F7F3EA]/70 shadow-sm'
                      : 'border-[#E8DFD1]/80 hover:border-[#AEB9A5] bg-white'
                  }`}
                >
                  {/* Custom Checkbox */}
                  <div className={`mt-1 w-5 h-5 rounded-md flex items-center justify-center border transition-colors flex-shrink-0 ${
                    isSelected ? 'bg-[#3E4A2A] border-[#3E4A2A] text-white' : 'border-[#AEB9A5] bg-white'
                  }`}>
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>

                  {/* Details & Price Line */}
                  <div className="flex-grow">
                    <div className="flex items-baseline justify-between w-full">
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-lg font-bold text-[#243126]">
                          {item.name}
                        </span>
                        {item.popular && (
                          <span className="bg-[#E8D6D1] text-[#243126] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                            Guest Favorite
                          </span>
                        )}
                      </div>
                      
                      {/* Dotted Leader Line */}
                      <span className="service-leader hidden sm:block"></span>

                      <span className="font-serif text-lg font-bold text-[#3E4A2A]">
                        ${item.price}
                      </span>
                    </div>
                    <p className="text-xs text-[#243126]/70 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Calculator Bar at Bottom of Card */}
          <div className="mt-8 pt-6 border-t border-[#E8DFD1] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#F7F3EA] p-5 rounded-2xl">
            <div>
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#7E8B72]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#243126]">
                  Selected Services ({selectedItems.length}):
                </span>
              </div>
              <p className="text-xs text-[#243126]/70 mt-0.5 max-w-md">
                {selectedItems.length > 0
                  ? selectedItems.map(i => i.name).join(', ')
                  : 'Click any services above to add to your estimate.'}
              </p>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#7E8B72] block">
                  Estimated Total
                </span>
                <span className="font-serif text-2xl font-bold text-[#243126]">
                  ${totalPrice}
                </span>
              </div>

              <button
                onClick={() => {
                  const hasFacial = selectedItems.some(i => i.id.startsWith('facial'));
                  onOpenBooking(hasFacial ? 'facial' : 'nails');
                }}
                className="bg-[#243126] hover:bg-[#3E4A2A] text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 text-[#AEB9A5]" />
                <span>Book Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
