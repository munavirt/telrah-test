import { useEffect, useState } from 'react';

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-700 ease-smooth ${
        done ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center">
        <svg width="60" height="60" viewBox="0 0 60 60" className="text-espresso">
          <text
            x="30"
            y="44"
            textAnchor="middle"
            fontFamily="Cormorant Garamond, Georgia, serif"
            fontSize="42"
            fontStyle="italic"
            fontWeight="500"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="200"
            style={{ animation: 'logo-draw 1.2s ease forwards' }}
          >
            T
          </text>
        </svg>
        <span className="mt-4 font-serif text-sm font-medium tracking-[0.4em] text-espresso/70">TELRAH</span>
      </div>
    </div>
  );
}
