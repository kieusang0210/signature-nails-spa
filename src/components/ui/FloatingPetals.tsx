import React from 'react';

export const FloatingPetals: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
    >
      {/* Petal 1 */}
      <div className="absolute top-[-5%] left-[10%] animate-petal-1">
        <svg className="w-5 h-6 text-[#E8D6D1] opacity-75 fill-current" viewBox="0 0 24 32">
          <path d="M12 0C18 8 24 16 24 24C24 28.4 20.4 32 16 32C11.6 32 0 24 0 12C0 5.4 6.6 0 12 0Z" />
        </svg>
      </div>

      {/* Petal 2 */}
      <div className="absolute top-[-5%] left-[30%] animate-petal-2">
        <svg className="w-4 h-5 text-[#AEB9A5] opacity-60 fill-current" viewBox="0 0 24 32">
          <path d="M12 0C18 8 24 16 24 24C24 28.4 20.4 32 16 32C11.6 32 0 24 0 12C0 5.4 6.6 0 12 0Z" />
        </svg>
      </div>

      {/* Petal 3 */}
      <div className="absolute top-[-5%] left-[60%] animate-petal-3">
        <svg className="w-6 h-7 text-[#E8DFD1] opacity-70 fill-current" viewBox="0 0 24 32">
          <path d="M12 0C18 8 24 16 24 24C24 28.4 20.4 32 16 32C11.6 32 0 24 0 12C0 5.4 6.6 0 12 0Z" />
        </svg>
      </div>

      {/* Petal 4 */}
      <div className="absolute top-[-5%] left-[82%] animate-petal-4">
        <svg className="w-4 h-5 text-[#E8D6D1] opacity-65 fill-current" viewBox="0 0 24 32">
          <path d="M12 0C18 8 24 16 24 24C24 28.4 20.4 32 16 32C11.6 32 0 24 0 12C0 5.4 6.6 0 12 0Z" />
        </svg>
      </div>

      {/* Petal 5 */}
      <div className="absolute top-[-5%] left-[45%] animate-petal-5">
        <svg className="w-5 h-6 text-[#AEB9A5] opacity-55 fill-current" viewBox="0 0 24 32">
          <path d="M12 0C18 8 24 16 24 24C24 28.4 20.4 32 16 32C11.6 32 0 24 0 12C0 5.4 6.6 0 12 0Z" />
        </svg>
      </div>
    </div>
  );
};
