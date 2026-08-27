import React from 'react';

interface BotanicalBranchProps {
  className?: string;
  opacity?: number;
}

export const BotanicalBranch: React.FC<BotanicalBranchProps> = ({ className = '', opacity = 0.12 }) => {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      style={{ opacity }}
      viewBox="0 0 200 400"
      fill="none"
      stroke="currentColor"
    >
      {/* Organic Botanical Branch Line Art */}
      <path
        d="M20 400C50 300 80 200 120 50M120 50C110 30 100 10 90 0M120 50C135 65 150 80 170 95"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Leaf 1 */}
      <path
        d="M80 200C60 180 40 185 30 205C45 220 70 215 80 200Z"
        fill="currentColor"
        fillOpacity="0.4"
        strokeWidth="1"
      />
      {/* Leaf 2 */}
      <path
        d="M100 130C125 110 145 115 155 135C140 150 115 145 100 130Z"
        fill="currentColor"
        fillOpacity="0.4"
        strokeWidth="1"
      />
      {/* Leaf 3 */}
      <path
        d="M50 280C30 260 10 265 0 285C15 300 40 295 50 280Z"
        fill="currentColor"
        fillOpacity="0.3"
        strokeWidth="1"
      />
      {/* Leaf 4 */}
      <path
        d="M115 70C135 45 160 50 170 70C150 85 130 80 115 70Z"
        fill="currentColor"
        fillOpacity="0.4"
        strokeWidth="1"
      />
    </svg>
  );
};

export const BotanicalDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div aria-hidden="true" className={`flex items-center justify-center gap-3 my-8 opacity-40 ${className}`}>
      <div className="h-px w-16 bg-[#AEB9A5]" />
      <svg className="w-4 h-4 text-[#7E8B72] fill-current" viewBox="0 0 24 24">
        <path d="M12 2C13.5 6 17 9.5 21 11C17 12.5 13.5 16 12 20C10.5 16 7 12.5 3 11C7 9.5 10.5 6 12 2Z" />
      </svg>
      <div className="h-px w-16 bg-[#AEB9A5]" />
    </div>
  );
};
