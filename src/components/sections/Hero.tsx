import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import heroImage from '../../assets/img-left.png'

gsap.registerPlugin(ScrollTrigger);

const HERO_IMG = heroImage;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      gsap.set('.hero-bg', { scale: 1, autoAlpha: 1 });
      gsap.set(['.hero-line-1', '.hero-line-2', '.hero-line-3'], { y: '0%', autoAlpha: 1, scale: 1, filter: 'blur(0px)' });
      gsap.set('.hero-scroll', { autoAlpha: 1 });
      return;
    }

    const isMobile = window.innerWidth < 768;
    const initialBlur = isMobile ? 'blur(5px)' : 'blur(8px)';

    gsap.set('.hero-bg', { scale: 1.04, autoAlpha: 0.85 }); // Start mostly visible

    gsap.set(['.hero-line-1', '.hero-line-2', '.hero-line-3'], {
      y: '110%',
      autoAlpha: 0,
      scale: 1.025,
      filter: initialBlur
    });

    gsap.set('.hero-scroll', { autoAlpha: 0 });

    const tl = gsap.timeline();

    tl.to('.hero-bg', {
      scale: 1,
      autoAlpha: 1,
      duration: 1.8,
      ease: 'power2.out',
    }, 0)

      .to('.hero-line-1', {
        y: '0%',
        autoAlpha: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.0,
        ease: 'power3.out',
      }, 0.15)

      .to('.hero-line-2', {
        y: '0%',
        autoAlpha: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.15,
        ease: 'power3.out',
      }, 0.25)

      .to('.hero-line-3', {
        y: '0%',
        autoAlpha: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.0,
        ease: 'power3.out',
      }, 0.35)

      .fromTo('.hero-text-group', {
        y: 3,
      }, {
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, 0.8)

      .to('.hero-scroll', {
        autoAlpha: 1,
        duration: 1.0,
        ease: 'power2.out',
      }, 1.5);

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      animation: gsap.to(bgRef.current, {
        y: '-8%',
        ease: 'none',
      })
    });

  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative h-[100vh] w-full overflow-hidden bg-espresso-900 flex flex-col items-center justify-center"
    >

      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <img
          src={HERO_IMG}
          alt="Luxury hospitality textiles"
          className="hero-bg h-full w-full object-cover invisible"
          fetchPriority="high"
        />

        <div className="absolute inset-0 bg-espresso-900/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(46,27,26,0.4)_100%)]" />
      </div>

      <div
        ref={headlineRef}
        className="relative z-20 flex flex-col items-center justify-center text-center px-6 sm:px-12 w-full max-w-5xl"
      >
        <div className="hero-text-group">
          <h1 className="font-serif font-light leading-[1.1] text-white">
            <span className="block overflow-hidden">
              <span className="hero-line-1 block invisible text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]">
                Everything You Need
              </span>
            </span>
            <span className="block overflow-hidden -mt-2 sm:-mt-4">
              <span className="hero-line-2 block invisible italic text-gold-400 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]">
                For
              </span>
            </span>
            <span className="block overflow-hidden -mt-2 sm:-mt-4">
              <span className="hero-line-3 block invisible text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]">
                Better Stays
              </span>
            </span>
          </h1>
        </div>
      </div>

      <div className="hero-scroll invisible absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/70 text-sm">↓</span>
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
      </div>
    </section>
  );
}
