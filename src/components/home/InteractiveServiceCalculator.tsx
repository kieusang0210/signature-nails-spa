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
    name: 'Natural Nail Care',
    items: [
      { id: 'mani-classic', name: 'Classic Manicure', price: 25, description: 'Nail shaping, cuticle trimming, hand massage, and regular polish.' },
      { id: 'mani-shellac', name: 'Classic Manicure w/ Shellac', price: 38, description: 'Classic manicure upgraded with long-lasting gel shellac polish.', popular: true },
      { id: 'pedi-classic', name: 'Classic Spa Pedicure', price: 35, description: 'Whirlpool foot bath, nail shaping, callus smoothing, foot scrub, and calming massage.' },
      { id: 'pedi-deluxe', name: 'Deluxe Spa Pedicure', price: 50, description: 'Exfoliating scrub, mud mask with warm towels, and extended relaxing massage.', popular: true },
      { id: 'pedi-hotstone', name: 'Hot Stone Spa Pedicure', price: 60, description: 'Warm stone massage, deep moisture treatment, and muscle tension relief.' },
      { id: 'pedi-candle', name: 'Candle Therapy Spa Pedicure', price: 75, description: 'Luxury warm massage candle oil treatment for ultra-hydrated, soft skin.' },
    ]
  },
  {
    id: 'enhancements',
    name: 'Nail Enhancements',
    items: [
      { id: 'enh-acrylic-full', name: 'Full Set Acrylic w/ Shellac', price: 55, description: 'Full set acrylic enhancements with gel shellac finish.', popular: true },
      { id: 'enh-acrylic-fill', name: 'Acrylic Fill-In', price: 42, description: 'Maintenance fill for acrylic enhancements.' },
      { id: 'enh-dip', name: 'Dip Powder', price: 45, description: 'Vitamin-fortified dip powder application (w/ Tips +$10, w/ Take-Off +$5).' },
      { id: 'enh-gelx', name: 'Gel-X / Builder Gel', price: 60, description: 'Soft gel extension system or builder gel for natural weight feel.', popular: true },
      { id: 'enh-builder-fill', name: 'Builder Gel Fill-In', price: 50, description: 'Maintenance fill for builder gel extensions.' },
      { id: 'enh-toe-full', name: 'Toe Full-Set Acrylic', price: 65, description: 'Full set acrylic enhancements for toes.' },
    ]
  },
  {
    id: 'facials',
    name: 'Facials & Skin Therapies',
    items: [
      { id: 'fac-express', name: 'Express Refresh (30m)', price: 55, description: 'Cleanse + instantly refreshed skin.' },
      { id: 'fac-essential', name: 'Essential Deep Clean (50m)', price: 85, description: 'Deep pore cleanse + visibly clearer skin.' },
      { id: 'fac-oxygen', name: 'Bubble Oxygen Clean (60m)', price: 105, description: 'Oxygen cleanse + fresh radiant glow.' },
      { id: 'fac-adv-deep', name: 'Advanced Deep Clean (75m)', price: 125, description: 'Purify pores + clearer, calmer skin.', popular: true },
      { id: 'fac-pore-detox', name: 'Pore Detox Infusion (75m)', price: 135, description: 'Detox pores + loosen build up, remove impurities.' },
      { id: 'fac-gentle', name: 'Gentle Renewal (60m)', price: 115, description: '(Soft Hydration) Deeply hydrates to soften skin, smooth fine lines.' },
      { id: 'fac-nanoglow', name: 'NanoGlow Infusion (75m)', price: 145, description: '(Skin Renewal & Revitalization) Infuses targeted nutrients to boost hydration.', popular: true },
      { id: 'fac-silk-lift', name: 'Silk Lift Therapy (90m)', price: 175, description: '(Firm & Lift) Firms, lifts, and improves elasticity.', popular: true },
      { id: 'fac-luminous', name: 'Luminous Glass Therapy (90m)', price: 175, description: '(Advanced Brightening & Glass Skin) Purifies, brightens, and smooths.' },
      { id: 'fac-aqua-luxe', name: 'Aqua Luxe Therapy (90m)', price: 185, description: '(Ultimate Hydration) Intense hydration to restore softness and radiance.' },
    ]
  },
  {
    id: 'acne',
    name: 'Acne Treatment',
    items: [
      { id: 'acne-relief', name: 'Acne Relief (75m)', price: 125, description: 'Deep cleanse + reduced breakouts.' },
      { id: 'acne-calm', name: 'Calm Acne Therapy (75m)', price: 145, description: 'Soothe inflammation + stronger skin barrier.', popular: true },
      { id: 'acne-hydra', name: 'Acne Detox Hydra (90m)', price: 165, description: 'Deep detox + faster skin recovery.' },
    ]
  },
  {
    id: 'waxing',
    name: 'Waxing Services',
    items: [
      { id: 'wax-eyebrow', name: 'Eyebrows Waxing', price: 15, description: 'Precision brow waxing and custom arch shaping.' },
      { id: 'wax-lip', name: 'Lip Waxing', price: 10, description: 'Gentle hair removal for upper lip.' },
      { id: 'wax-chin', name: 'Chin Waxing', price: 10, description: 'Gentle hair removal for chin area.' },
      { id: 'wax-sideburns', name: 'Sideburns Waxing', price: 20, description: 'Smooth hair removal for sideburns.' },
      { id: 'wax-fullface', name: 'Full Face Waxing', price: 45, description: 'Complete facial waxing (brows, lip, chin, sideburns).' },
      { id: 'wax-underarms', name: 'Underarms Waxing', price: 45, description: 'Gentle underarm hair removal.' },
      { id: 'wax-fulllegs', name: 'Full Legs Waxing', price: 50, description: 'Full leg hair removal from thighs to ankles.' },
      { id: 'wax-halfleg', name: 'Half Leg Waxing', price: 30, description: 'Hair removal for upper or lower legs.' },
    ]
  },
  {
    id: 'add-ons',
    name: 'Add-on Services',
    items: [
      { id: 'addon-french', name: 'French Design', price: 10, description: 'Classic white or custom French tip polish.' },
      { id: 'addon-cateye', name: 'Cat-Eye Effect', price: 10, description: 'Magnetic cat-eye shimmer effect.' },
      { id: 'addon-chrome', name: 'Chrome Finish', price: 10, description: 'High-gloss mirror chrome finish.' },
      { id: 'addon-ombre', name: 'Ombré Design', price: 15, description: 'Seamless gradient color transition.' },
      { id: 'addon-dermaplaning', name: 'Dermaplaning (Skin)', price: 40, description: 'Exfoliates dead skin cells and peach fuzz for ultra-smooth skin.' },
      { id: 'addon-led', name: 'LED Light Therapy (Skin)', price: 20, description: 'Targeted light therapy to stimulate collagen or calm inflammation.' },
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
