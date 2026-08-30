import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import telrahLogo from '../assets/telrah-logo.png';

export function Preloader() {
  const [done, setDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      gsap.set(['.preloader-logo', '.preloader-text'], { opacity: 1, scale: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline();

    tl.fromTo(
      '.preloader-logo',
      { opacity: 0, scale: 0.92 },
      { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' },
      0.2 // Starts at 0.2s, ends at 0.6s
    )

    .fromTo(
      '.preloader-text',
      { opacity: 0, y: 8, letterSpacing: '0.2em' },
      { opacity: 1, y: 0, letterSpacing: '0.4em', duration: 0.8, ease: 'power2.out' },
      0.5 // Overlaps slightly with the logo settling
    );
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-700 ease-smooth ${
        done ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center">
        <img
          src={telrahLogo}
          alt="Telrah"
          className="preloader-logo h-[160px] w-[160px] object-contain opacity-0"
        />
        <span className="preloader-text mt-6 font-serif text-xl font-medium tracking-[0.4em] text-espresso/70 opacity-0">
          TELRAH
        </span>
      </div>
    </div>
  );
}
