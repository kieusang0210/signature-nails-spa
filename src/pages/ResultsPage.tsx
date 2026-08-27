import { useState } from 'react';
import { RESULTS_DATA } from '../data/resultsData';
import { Sparkles, Calendar } from 'lucide-react';

interface ResultsPageProps {
  onOpenBooking: (serviceType?: 'nails' | 'facial' | 'consultation') => void;
}

export const ResultsPage: React.FC<ResultsPageProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'skin' | 'nails'>('all');

  const filtered = RESULTS_DATA.filter(r => filter === 'all' || r.category === filter);

  return (
    <div className="py-12 bg-[#F7F3EA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEE8D9] text-[#3E4A2A] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#A39A63]" />
            <span>Real Skin. Real Signature Results.</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#243126]">
            Real Treatments, Real Client Transformations
          </h1>
          <p className="text-xs sm:text-sm text-[#243126]/75 leading-relaxed max-w-xl mx-auto">
            Authentic results from our Comstock Park studio. No plastic retouches or exaggerated claims—just healthy skin and beautiful nails.
          </p>

          {/* Filter */}
          <div className="flex justify-center gap-2 pt-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold ${
                filter === 'all' ? 'bg-[#3E4A2A] text-white' : 'bg-white text-[#243126] border border-[#AEB9A5]'
              }`}
            >
              All Results
            </button>
            <button
              onClick={() => setFilter('skin')}
              className={`px-4 py-2 rounded-full text-xs font-semibold ${
                filter === 'skin' ? 'bg-[#3E4A2A] text-white' : 'bg-white text-[#243126] border border-[#AEB9A5]'
              }`}
            >
              Skin Transformations
            </button>
            <button
              onClick={() => setFilter('nails')}
              className={`px-4 py-2 rounded-full text-xs font-semibold ${
                filter === 'nails' ? 'bg-[#3E4A2A] text-white' : 'bg-white text-[#243126] border border-[#AEB9A5]'
              }`}
            >
              Nail Artistry &amp; Care
            </button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#EEE8D9] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.resultImg}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#243126]/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-white/90 text-[#3E4A2A] text-[10px] uppercase font-bold px-3 py-1 rounded-full">
                    {item.category === 'skin' ? 'Facial Result' : 'Nail Artistry'}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#61725A] font-semibold">
                    <span>{item.treatmentName}</span>
                    <span>{item.timeframe}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#243126]">{item.title}</h3>
                  <p className="text-xs text-[#243126]/80 italic">"{item.quote}"</p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenBooking(item.category === 'skin' ? 'facial' : 'nails')}
                  className="w-full bg-[#3E4A2A] hover:bg-[#61725A] text-white py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book This Treatment</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="bg-[#EEE8D9]/40 p-4 rounded-xl text-center text-[11px] text-[#243126]/60">
          * Individual skin and nail results may vary based on lifestyle, homecare maintenance, and personal skin biology.
        </div>

      </div>
    </div>
  );
};
