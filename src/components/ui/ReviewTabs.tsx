import React, { useState, useEffect } from 'react';
import { REVIEWS_DATA } from '../../data/reviewsData';
import { Sparkles, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { BotanicalDivider } from './BotanicalDecor';

export const ReviewTabs: React.FC = () => {
  const [category, setCategory] = useState<'all' | 'nails' | 'facial'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const filtered = REVIEWS_DATA.filter((r) => category === 'all' || r.category === category);

  useEffect(() => {
    if (isPaused || filtered.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filtered.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused, filtered.length]);

  const activeReview = filtered[currentIndex] || filtered[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filtered.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  return (
    <section className="py-24 bg-[#FCFAF5] border-y border-[#E8DFD1] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title & Filter Tabs */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7E8B72]">
            <Sparkles className="w-3.5 h-3.5 text-[#A39A63]" />
            <span>Verified Client Feedback</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#243126]">
            Words from Our Neighbors
          </h2>

          <div className="flex justify-center items-center gap-2 pt-2">
            <button
              onClick={() => { setCategory('all'); setCurrentIndex(0); }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
                category === 'all'
                  ? 'bg-[#243126] text-[#F7F3EA]'
                  : 'bg-[#F7F3EA] text-[#243126] border border-[#E8DFD1] hover:bg-[#E8DFD1]/50'
              }`}
            >
              All Feedback
            </button>
            <button
              onClick={() => { setCategory('nails'); setCurrentIndex(0); }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
                category === 'nails'
                  ? 'bg-[#243126] text-[#F7F3EA]'
                  : 'bg-[#F7F3EA] text-[#243126] border border-[#E8DFD1] hover:bg-[#E8DFD1]/50'
              }`}
            >
              Nail Stories
            </button>
            <button
              onClick={() => { setCategory('facial'); setCurrentIndex(0); }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
                category === 'facial'
                  ? 'bg-[#243126] text-[#F7F3EA]'
                  : 'bg-[#F7F3EA] text-[#243126] border border-[#E8DFD1] hover:bg-[#E8DFD1]/50'
              }`}
            >
              Facial Stories
            </button>
          </div>
        </div>

        {/* Editorial Testimonial Showcase */}
        {activeReview && (
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="bg-[#F7F3EA]/70 rounded-3xl p-8 sm:p-14 border border-[#E8DFD1] shadow-sm relative text-center space-y-6 transition-all duration-500"
          >
            {/* Large Decorative Serif Quotation Mark */}
            <span className="block font-serif text-7xl sm:text-8xl text-[#AEB9A5]/40 leading-none h-8 select-none">
              “
            </span>

            {/* Large Editorial Quote */}
            <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#243126] italic font-normal leading-relaxed max-w-3xl mx-auto">
              "{activeReview.comment}"
            </blockquote>

            <BotanicalDivider className="!my-4" />

            {/* Author Info */}
            <div className="space-y-1">
              <h3 className="font-sans text-sm font-bold text-[#243126] flex items-center justify-center gap-1.5 uppercase tracking-wider">
                <span>{activeReview.author}</span>
                {activeReview.verified && (
                  <CheckCircle className="w-3.5 h-3.5 text-[#7E8B72]" />
                )}
              </h3>
              <p className="text-xs text-[#7E8B72] font-medium">{activeReview.serviceName}</p>
            </div>

            {/* Controls */}
            <div className="pt-4 flex items-center justify-between text-xs text-[#7E8B72]">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full border border-[#AEB9A5]/50 hover:bg-white text-[#243126] transition-colors"
                aria-label="Previous quote"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-sans font-semibold tracking-widest text-[11px] text-[#243126]/60">
                {currentIndex + 1} / {filtered.length}
              </span>
              <button
                onClick={handleNext}
                className="p-2 rounded-full border border-[#AEB9A5]/50 hover:bg-white text-[#243126] transition-colors"
                aria-label="Next quote"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
