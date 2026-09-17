import React, { useMemo } from 'react';

export const FloatingDustParticles: React.FC = () => {
  // Memoize particles so they remain stable across re-renders and keyframes never reset
  const particles = useMemo(() => {
    return Array.from({ length: 28 }, (_, index) => {
      const size = Math.floor(Math.random() * 4) + 2; // 2px to 5px delicate motes
      const left = (Math.random() * 92 + 4).toFixed(1); // 4% to 96%
      const top = (Math.random() * 80 + 10).toFixed(1); // 10% to 90%
      const duration = (Math.random() * 6 + 8).toFixed(1); // 8s to 14s smooth float
      const delay = (Math.random() * 8).toFixed(1); // 0s to 8s staggered start
      const animType = index % 2 === 0 ? 'animate-dust-rise' : 'animate-dust-sway';

      return {
        id: index,
        size: `${size}px`,
        left: `${left}%`,
        top: `${top}%`,
        duration: `${duration}s`,
        delay: `-${delay}s`,
        animType,
      };
    });
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className={`dust-particle ${p.animType}`}
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
};
