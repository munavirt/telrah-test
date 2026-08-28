import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SCENES = [
  {
    num: '01',
    label: 'MATERIAL',
    title: 'Good Products Start with Good Materials.',
    description: 'We select fabrics and materials for how they feel, how they perform, and how they hold up to regular hospitality use.',
    img: 'https://images.pexels.com/photos/7232412/pexels-photo-7232412.jpeg?auto=compress&cs=tinysrgb&w=2400',
    imgAlt: 'Extreme macro detail of white knitted textile fibers showing intricate weave pattern',
    treatment: {
      gradient: 'radial-gradient(ellipse at 30% 50%, rgba(46, 27, 26, 0.7) 0%, rgba(46, 27, 26, 0.3) 40%, transparent 75%)',
      blurMask: 'radial-gradient(ellipse at 30% 50%, black 0%, black 20%, transparent 60%)',
      textColor: 'text-white',
      descColor: 'text-white/90',
      labelColor: 'text-gold-300',
      numColor: 'text-gold-400'
    }
  },
  {
    num: '02',
    label: 'CRAFT',
    title: 'Made for Everyday Use.',
    description: 'From stitching to finishing, each product is made with the demands of hotels and hospitality teams in mind.',
    img: 'https://images.pexels.com/photos/6843278/pexels-photo-6843278.jpeg?auto=compress&cs=tinysrgb&w=2400',
    imgAlt: 'Soft white fabric draped with natural folds showing craftsmanship',
    treatment: {
      gradient: 'radial-gradient(ellipse at 30% 50%, rgba(46, 27, 26, 0.8) 0%, rgba(46, 27, 26, 0.4) 45%, transparent 80%)',
      blurMask: 'radial-gradient(ellipse at 30% 50%, black 0%, black 25%, transparent 65%)',
      textColor: 'text-white',
      descColor: 'text-white/90',
      labelColor: 'text-gold-300',
      numColor: 'text-gold-400'
    }
  },
  {
    num: '03',
    label: 'COMFORT',
    title: 'Comfort Guests Can Feel.',
    description: 'Soft bedding, dependable towels, and everyday essentials designed to make rooms feel comfortable from the moment guests arrive.',
    img: 'https://images.pexels.com/photos/3755590/pexels-photo-3755590.jpeg?auto=compress&cs=tinysrgb&w=2400',
    imgAlt: 'Elegant white bed linen with soft pillows arranged beautifully',
    treatment: {
      gradient: 'radial-gradient(ellipse at 30% 50%, rgba(250, 246, 240, 0.9) 0%, rgba(250, 246, 240, 0.5) 40%, transparent 75%)',
      blurMask: 'radial-gradient(ellipse at 30% 50%, black 0%, black 20%, transparent 60%)',
      textColor: 'text-espresso',
      descColor: 'text-espresso/90',
      labelColor: 'text-gold-600',
      numColor: 'text-gold-500'
    }
  },
  {
    num: '04',
    label: 'THE COMPLETE STAY',
    title: 'Everything Your Property Needs.',
    description: 'From bedding and bath products to amenities and extra beds, TELRAH brings essential hospitality products together with options to suit your property.',
    img: 'https://images.pexels.com/photos/34645131/pexels-photo-34645131.jpeg?auto=compress&cs=tinysrgb&w=2400',
    imgAlt: 'Elegant hotel room featuring modern design with natural light and luxurious bedding',
    treatment: {
      gradient: 'radial-gradient(ellipse at 30% 50%, rgba(46, 27, 26, 0.75) 0%, rgba(46, 27, 26, 0.35) 45%, transparent 80%)',
      blurMask: 'radial-gradient(ellipse at 30% 50%, black 0%, black 25%, transparent 65%)',
      textColor: 'text-white',
      descColor: 'text-white/90',
      labelColor: 'text-gold-300',
      numColor: 'text-gold-400'
    }
  }
];

export function TelrahStandard() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [isReduced, setIsReduced] = useState(false);

  // Handle resize and refresh
  const refreshScrollTrigger = useCallback(() => {
    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    // Check for reduced motion
    const reducedMatch = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReduced(reducedMatch);

    if (reducedMatch) return;

    const ctx = gsap.context(() => {
      if (!pinRef.current) return;

      const scenes = gsap.utils.toArray('.ts-scene');
      const totalScenes = scenes.length;

      // Pin the section for cinematic sequence
      const scrollTween = gsap.to(scenes, {
        xPercent: -100 * (totalScenes - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: pinRef.current,
          start: 'top top',
          end: () => `+=${window.innerHeight * 2.5}`,
          pin: true,
          scrub: 1.5,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        }
      });

      // Scene animations
      scenes.forEach((scene: any, index: number) => {
        const img = scene.querySelector('.ts-scene-img');
        const numText = scene.querySelector('.ts-num');
        const labelText = scene.querySelector('.ts-label');
        const titleText = scene.querySelector('.ts-title');
        const descText = scene.querySelector('.ts-description');

        const treatmentLayer = scene.querySelector('.ts-treatment');

        // Image animation - cinematic scale (clean image)
        if (img) {
          gsap.set(img, { scale: 1.1, opacity: 0 });

          gsap.to(img, {
            scale: 1,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: scene,
              containerAnimation: scrollTween,
              start: 'left center',
              end: 'left 25%',
              scrub: 1.5,
            }
          });

          // Exit animation
          gsap.to(img, {
            scale: 0.95,
            opacity: 0,
            ease: 'power2.in',
            scrollTrigger: {
              trigger: scene,
              containerAnimation: scrollTween,
              start: 'right 25%',
              end: 'right center',
              scrub: 1.5,
            }
          });
        }

        // Staggered typography animation with refined timing
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: scene,
            containerAnimation: scrollTween,
            start: 'left 55%',
            toggleActions: 'play none none reverse',
          }
        });

        if (treatmentLayer) {
          timeline.fromTo(treatmentLayer,
            { opacity: 0 },
            { opacity: 1, duration: 1.2, ease: 'power2.inOut' }
          );
        }

        const textDelay = treatmentLayer ? '-=0.9' : 0;

        if (numText) {
          timeline.fromTo(numText,
            { opacity: 0, y: 35 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
            textDelay as any
          );
        }

        if (labelText) {
          timeline.fromTo(labelText,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
            '-=0.35'
          );
        }

        if (titleText) {
          timeline.fromTo(titleText,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
            '-=0.35'
          );
        }

        if (descText) {
          timeline.fromTo(descText,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
            '-=0.35'
          );
        }
      });

    }, sectionRef);

    // Handle resize
    const handleResize = () => {
      refreshScrollTrigger();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [refreshScrollTrigger]);

  // Reduced motion fallback
  if (isReduced) {
    return (
      <section ref={sectionRef} id="standard" className="relative bg-cream-100 overflow-hidden text-espresso">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-20 lg:py-40">
          <div className="max-w-2xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-8 bg-gold-500" />
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-gold-600">
                The Telrah Standard
              </span>
            </div>
            <h2 className="font-serif text-5xl font-light leading-[1.05] text-espresso sm:text-6xl lg:text-7xl">
              <span className="block">Made to Meet</span>
              <span className="block italic text-gold-600">the Demands</span>
              <span className="block">of Hospitality</span>
            </h2>
            <p className="mt-8 max-w-md font-sans text-sm font-light leading-relaxed text-cream-800 sm:text-base">
              From the materials we choose to the way products perform in daily use, TELRAH focuses on what matters to hospitality teams: comfort, durability, consistency, and products that are made to fit the property.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-20 space-y-20">
          {SCENES.map((scene) => (
            <div key={scene.num} className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/2 relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src={scene.img}
                  alt={scene.imgAlt}
                  className="w-full h-64 sm:h-96 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full lg:w-1/2 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-serif text-3xl italic font-light text-gold-500">{scene.num}</span>
                  <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.25em] text-gold-600">{scene.label}</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-light leading-tight text-espresso mb-3">{scene.title}</h3>
                <p className="text-cream-800 font-light text-sm sm:text-base max-w-md">{scene.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="standard" className="relative bg-cream-100 overflow-hidden text-espresso">

      {/* SECTION INTRODUCTION */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-20 lg:py-40">
        <div className="max-w-2xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-8 bg-gold-500" />
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-gold-600">
              The Telrah Standard
            </span>
          </div>
          <h2 className="font-serif text-5xl font-light leading-[1.05] text-espresso sm:text-6xl lg:text-7xl">
            <span className="block">Made to Meet</span>
            <span className="block italic text-gold-600">the Demands</span>
            <span className="block">of Hospitality</span>
          </h2>
          <p className="mt-8 max-w-md font-sans text-sm font-light leading-relaxed text-cream-800 sm:text-base">
            From the materials we choose to the way products perform in daily use, TELRAH focuses on what matters to hospitality teams: comfort, durability, consistency, and products that are made to fit the property.
          </p>
        </div>
      </div>

      {/* CINEMATIC VIEWPORT */}
      <div
        ref={pinRef}
        className="relative h-screen w-full bg-cream-50 overflow-hidden"
        style={{ minHeight: '100vh' }}
      >
        {/* Progress Indicator */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold-600">
            01
          </span>
          <div className="w-24 h-px bg-gold-500/30" />
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold-600">
            04
          </span>
        </div>

        {/* Scenes Container */}
        <div className="flex h-full w-full">
          {SCENES.map((scene, index) => (
            <div
              key={scene.num}
              className="ts-scene relative flex-shrink-0 w-full h-full flex items-center justify-center"
            >
              {/* Background Image Layer */}
              <div className="absolute inset-0 overflow-hidden bg-espresso-900">
                <img
                  src={scene.img}
                  alt={scene.imgAlt}
                  className="ts-scene-img absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Treatment Layers (Softening + Readability) */}
              <div className="ts-treatment absolute inset-0 pointer-events-none z-0">
                {/* Subtle Image Softening */}
                <div 
                  className="absolute inset-0"
                  style={{
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                    maskImage: (scene as any).treatment.blurMask,
                    WebkitMaskImage: (scene as any).treatment.blurMask
                  }}
                />
                {/* Localized Gradient Overlay */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: (scene as any).treatment.gradient
                  }}
                />
              </div>

              {/* Typography Container */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex flex-col justify-center">
                <div className="max-w-2xl sm:max-w-3xl">
                  {/* Chapter Number */}
                  <div className="ts-num mb-3 sm:mb-4">
                    <span className={`font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl italic font-light ${(scene as any).treatment.numColor}`}>
                      {scene.num}
                    </span>
                  </div>

                  {/* Label */}
                  <div className="ts-label mb-4 sm:mb-6">
                    <span className={`text-[10px] sm:text-[11px] lg:text-[12px] font-medium uppercase tracking-[0.25em] sm:tracking-[0.3em] ${(scene as any).treatment.labelColor}`}>
                      {scene.label}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="ts-title mb-4 sm:mb-6">
                    <h3 className={`font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight ${(scene as any).treatment.textColor}`}>
                      {scene.title}
                    </h3>
                  </div>

                  {/* Description */}
                  {scene.description && (
                    <div className="ts-description max-w-md sm:max-w-lg">
                      <p className={`font-sans text-xs sm:text-sm lg:text-base font-light leading-relaxed ${(scene as any).treatment.descColor}`}>
                        {scene.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Release buffer */}
      <div className="h-16 bg-cream-50 sm:h-24" />
    </section>
  );
}