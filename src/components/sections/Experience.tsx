import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Reveal } from '@/components/Reveal';

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  {
    number: '01',
    title: 'The Details',
    italicWord: 'Details',
    body: 'The little things guests notice often make the biggest difference. From crisp bed linen to soft robes, we choose textiles that make rooms feel welcoming from the moment guests walk in.',
    image: 'https://images.pexels.com/photos/2736384/pexels-photo-2736384.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Luxury hotel bed with white linens and decorative lamp',
  },
  {
    number: '02',
    title: 'Comfort That Lasts',
    italicWord: 'Comfort That Lasts',
    body: 'Good hospitality starts with comfort guests can feel. Our towels range from 400 to 700+ GSM, while our linens are chosen for softness, breathability, and everyday durability. Because they need to feel good on the first stay — and still perform after many more.',
    image: 'https://images.pexels.com/photos/7640927/pexels-photo-7640927.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Macro detail of soft white towel fabric texture',
  },
  {
    number: '03',
    title: 'Everything for the Stay',
    italicWord: 'Everything for the Stay',
    body: 'From bedding and bath essentials to amenities and extra beds, TELRAH brings the key details of a guest stay together in one place. One partner, one consistent standard, and less to manage for your team.',
    image: 'https://images.pexels.com/photos/27638184/pexels-photo-27638184.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Hotel bathroom amenities arranged on a wooden counter',
  },
];

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollZoneRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const chapterRef = useRef(0);
  const [chapter, setChapter] = useState(0);

  // --- Pin only: ScrollTrigger pins the stage, does NOT calculate chapters ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = ScrollTrigger.create({
        trigger: scrollZoneRef.current!,
        start: 'top top',
        end: 'bottom bottom',
        pin: stageRef.current!,
        pinSpacing: false,
      });
      return () => st.kill();
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // --- Chapter state: derived from scroll position, one owner, no wheel hijack ---
  useEffect(() => {
    let raf = 0;

    const update = () => {
      const zone = scrollZoneRef.current;
      if (!zone) return;

      const rect = zone.getBoundingClientRect();
      const viewport = window.innerHeight;
      const scrollable = zone.offsetHeight - viewport;

      let newChapter: number;
      let fullProgress: number;

      if (rect.top > 0) {
        // Above the zone — entering from Hero → show 01
        newChapter = 0;
        fullProgress = 0;
      } else if (rect.bottom < viewport) {
        // Below the zone — entering from Next Section → show 03
        newChapter = PILLARS.length - 1;
        fullProgress = 1;
      } else {
        // Inside the zone — map scroll progress to discrete chapter
        const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
        fullProgress = progress;
        newChapter = Math.min(PILLARS.length - 1, Math.floor(progress * PILLARS.length));
      }

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleY(${fullProgress})`;
      }

      if (newChapter !== chapterRef.current) {
        chapterRef.current = newChapter;
        setChapter(newChapter);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const renderTitle = (pillar: (typeof PILLARS)[0]) =>
    pillar.title.split(pillar.italicWord).map((part, i, arr) =>
      i < arr.length - 1 ? (
        <span key={i}>
          {part}
          <span className="italic text-gold-600">{pillar.italicWord}</span>
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    );

  return (
    <section id="experience" ref={sectionRef} className="relative bg-cream-100">
      {/* Heading — scrolls normally before the pin starts */}
      <div className="mx-auto max-w-7xl px-6 py-24 text-center sm:py-32 lg:py-40">
        <Reveal>
          <h2 className="font-serif text-4xl font-light text-espresso sm:text-5xl lg:text-6xl">
            Made for the <span className="italic text-gold-600">Way Guests Stay</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg font-sans text-sm font-light leading-relaxed text-cream-800">
            From the room to the smallest detail, everything is chosen to make a stay feel comfortable, easy, and well looked after.
          </p>
        </Reveal>
      </div>

      {/* Scroll zone — 300vh real scroll distance (3 chapters × 100vh) */}
      <div ref={scrollZoneRef} style={{ height: '300vh' }} className="relative">
        {/* Pinned stage — 100vh, pinned by ScrollTrigger, never controls scroll */}
        <div ref={stageRef} className="relative h-screen w-full overflow-hidden">
          {PILLARS.map((pillar, index) => {
            const reversed = index % 2 === 1;
            const isActive = index === chapter;
            return (
              <div
                key={pillar.number}
                className="absolute inset-0 flex items-center transition-all duration-700 ease-smooth"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive
                    ? 'translateY(0) scale(1)'
                    : index < chapter
                      ? 'translateY(-60px) scale(0.98)'
                      : 'translateY(60px) scale(0.98)',
                  pointerEvents: isActive ? 'auto' : 'none',
                  zIndex: isActive ? 10 : 0,
                }}
              >
                <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 sm:px-12 lg:grid-cols-2 lg:gap-16 lg:px-20">
                  {/* Text */}
                  <div className={reversed ? 'lg:order-2 lg:pr-8' : 'lg:pl-8'}>
                    <span className="font-serif text-5xl italic text-gold-500 sm:text-6xl">
                      {pillar.number}
                    </span>
                    <h3 className="mt-4 font-serif text-4xl font-light leading-tight text-espresso sm:text-5xl lg:text-6xl">
                      {renderTitle(pillar)}
                    </h3>
                    <p className="mt-6 max-w-md font-sans text-sm font-light leading-relaxed text-cream-800 sm:text-base lg:text-lg">
                      {pillar.body}
                    </p>
                  </div>

                  {/* Image */}
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl shadow-espresso/10 ${reversed ? 'lg:order-1' : ''
                      }`}
                  >
                    <img
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/8 to-transparent" />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Step indicator — left side */}
          <div className="absolute left-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 sm:left-10 lg:flex">
            {PILLARS.map((pillar, i) => (
              <div key={pillar.number} className="flex items-center gap-3">
                <span
                  className={`font-serif text-sm italic transition-all duration-500 ${i === chapter ? 'text-espresso' : 'text-cream-500'
                    }`}
                >
                  {pillar.number}
                </span>
                <span
                  className={`h-px transition-all duration-500 ${i === chapter ? 'w-8 bg-gold-600' : 'w-4 bg-cream-400'
                    }`}
                />
              </div>
            ))}
          </div>

          {/* Progress + counter — bottom right */}
          <div className="absolute bottom-8 right-8 z-30 flex items-center gap-4 sm:bottom-12 sm:right-12">
            <div className="flex flex-col items-end gap-1">
              <span className="font-serif text-2xl font-light text-espresso">
                {String(chapter + 1).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-cream-600">
                of {String(PILLARS.length).padStart(2, '0')}
              </span>
            </div>
            <div className="relative h-16 w-px bg-cream-400">
              <div
                ref={progressRef}
                className="absolute left-0 top-0 h-full w-full origin-top bg-gold-600"
                style={{ transform: 'scaleY(0)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}