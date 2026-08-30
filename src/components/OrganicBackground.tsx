import { useEffect, useState } from 'react';

type Variant = 'experience' | 'why' | 'collection' | 'voices' | 'leadership' | 'partnership' | 'contact';

export function OrganicBackground({ variant, className = '' }: { variant: Variant; className?: string }) {
  const [scrollY, setScrollY] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    
    if (mq.matches) return;

    let raf: number;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrollY(window.scrollY));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const parallax = (speed: number) => {
    if (reduceMotion) return {};
    return { transform: `translateY(${scrollY * speed}px)` };
  };

  const baseClasses = `pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`;

  if (variant === 'experience') {
    return (
      <div className={baseClasses}>
        
        <svg
          viewBox="0 0 1440 1440"
          className="absolute -left-[20%] -top-[10%] w-[130vw] min-w-[1200px] text-espresso/10 opacity-70 mix-blend-multiply origin-top-left"
          fill="currentColor"
          style={parallax(0.015)}
        >
          <path d="M -100 400 C 300 50, 700 -100, 1100 250 C 1500 600, 1300 1100, 900 1300 C 500 1500, 50 1200, -100 900 C -250 600, -500 750, -100 400 Z" />
        </svg>
      </div>
    );
  }

  if (variant === 'why') {
    return (
      <div className={baseClasses}>
        
        <svg
          viewBox="0 0 1440 1440"
          className="absolute -bottom-[20%] -right-[15%] w-[140vw] min-w-[1300px] text-espresso/15 opacity-80 mix-blend-multiply"
          fill="currentColor"
          style={parallax(-0.01)}
        >
          <path d="M 200 1000 C 500 1500, 1100 1600, 1500 1100 C 1900 600, 1700 100, 1200 50 C 700 0, 400 300, 200 600 C 0 900, -100 500, 200 1000 Z" />
        </svg>
      </div>
    );
  }

  if (variant === 'collection') {
    return (
      <div className={baseClasses}>
        
        <svg
          viewBox="0 0 1440 1440"
          className="absolute top-[10%] -left-[30%] w-[160vw] min-w-[1500px] text-[#e0dad1]/30 opacity-60 mix-blend-multiply"
          fill="currentColor"
          style={parallax(0.01)}
        >
          <path d="M 100 600 C 300 1000, 800 1300, 1300 1000 C 1800 700, 1900 100, 1400 -100 C 900 -300, 500 100, 200 400 C -100 700, -100 200, 100 600 Z" />
        </svg>
      </div>
    );
  }

  if (variant === 'voices') {
    return (
      <div className={baseClasses}>
        
        <svg
          viewBox="0 0 1440 1440"
          className="absolute -top-[15%] -right-[20%] w-[150vw] min-w-[1400px] text-[#dad5cc]/35 opacity-70 blur-md"
          fill="currentColor"
          style={parallax(0.012)}
        >
          <path d="M 1300 200 C 800 -100, 400 -50, 100 400 C -200 850, 100 1300, 600 1400 C 1100 1500, 1600 1100, 1800 700 C 2000 300, 1800 500, 1300 200 Z" />
        </svg>
      </div>
    );
  }

  if (variant === 'leadership') {
    return (
      <div className={baseClasses}>
        
        <svg
          viewBox="0 0 1440 1440"
          className="absolute -top-[10%] -right-[10%] w-[110vw] min-w-[1100px] text-espresso/10 opacity-75 mix-blend-multiply"
          fill="currentColor"
          style={parallax(0.015)}
        >
          <path d="M 1000 -100 C 600 100, 400 600, 600 1100 C 800 1600, 1400 1500, 1700 1100 C 2000 700, 1800 100, 1500 -200 C 1200 -500, 1400 -300, 1000 -100 Z" />
        </svg>
      </div>
    );
  }

  if (variant === 'partnership') {
    return (
      <div className={baseClasses}>
        
        <svg
          viewBox="0 0 1440 1440"
          className="absolute -top-[20%] -left-[15%] w-[90vw] min-w-[900px] text-[#e6e1d8]/50 mix-blend-multiply"
          fill="currentColor"
          style={parallax(0.01)}
        >
          <path d="M 100 300 C 400 -100, 900 -50, 1100 400 C 1300 850, 900 1200, 500 1200 C 100 1200, -200 800, -100 500 C 0 200, -200 700, 100 300 Z" />
        </svg>
        <svg
          viewBox="0 0 1440 1440"
          className="absolute -bottom-[20%] -right-[10%] w-[100vw] min-w-[1000px] text-[#dcd7cd]/40 mix-blend-multiply"
          fill="currentColor"
          style={parallax(-0.01)}
        >
          <path d="M 1300 1100 C 1000 1500, 500 1450, 300 1000 C 100 550, 500 200, 900 200 C 1300 200, 1600 600, 1500 900 C 1400 1200, 1600 700, 1300 1100 Z" />
        </svg>
      </div>
    );
  }

  if (variant === 'contact') {
    return (
      <div className={baseClasses}>
        
        <svg
          viewBox="0 0 1440 1440"
          className="absolute -bottom-[30%] -right-[20%] w-[160vw] min-w-[1500px] text-espresso/15 opacity-80 mix-blend-multiply"
          fill="currentColor"
          style={parallax(0.02)}
        >
          <path d="M 400 1200 C 800 1700, 1500 1600, 1900 1100 C 2300 600, 1900 0, 1300 -100 C 700 -200, 200 300, 0 700 C -200 1100, 0 700, 400 1200 Z" />
        </svg>
      </div>
    );
  }

  return null;
}
