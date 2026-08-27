import React, { useState } from 'react';
import { FAQ_ITEMS } from '../../data/faqData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {FAQ_ITEMS.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-[#AEB9A5]/60 rounded-xl overflow-hidden bg-white transition-all shadow-sm"
          >
            <button
              onClick={() => toggleIndex(idx)}
              className="w-full p-4 text-left font-serif text-base sm:text-lg font-semibold text-[#243126] flex items-center justify-between gap-4 hover:bg-[#F7F3EA]/60 transition-colors"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-4 h-4 text-[#61725A] shrink-0" />
                <span>{item.question}</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#61725A] shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#243126]/80 leading-relaxed border-t border-[#EEE8D9] bg-[#F7F3EA]/30">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
