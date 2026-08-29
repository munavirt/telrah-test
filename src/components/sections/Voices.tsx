import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

type Testimonial = {
  quote: string;
  author: string;
  property: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Products that hold up to the demands of everyday hospitality, from the first order to the many stays that follow.',
    author: 'Reliable Quality',
    property: 'Built for everyday hospitality',
  },
  {
    quote: 'From product specifications to custom requirements, we work around what your property actually needs.',
    author: 'Made for Your Property',
    property: 'Flexible products and customization',
  },
  {
    quote: 'Consistent products, responsive service, and one team to help keep your hospitality operation moving.',
    author: 'A Partner You Can Rely On',
    property: 'Support when your team needs it',
  },
];

export function Voices() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused]);

  const goPrev = () => setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const goNext = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length);

  const active = TESTIMONIALS[index];

  return (
    <section id="voices" className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        {/* Heading */}
        <Reveal className="mb-16 text-center">
          <h2 className="font-serif text-4xl font-light text-espresso sm:text-5xl lg:text-6xl">
            What Matters to Our <span className="italic text-gold-600">Partners</span>
          </h2>
        </Reveal>

        {/* Carousel */}
        <Reveal delay={100}>
          <div
            className="relative mx-auto max-w-3xl text-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Decorative quote mark */}
            <span className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 font-serif text-[120px] leading-none text-espresso/15 select-none">
              &ldquo;
            </span>

            {/* Testimonial text */}
            <div className="relative min-h-[280px] sm:min-h-[240px]">
              {TESTIMONIALS.map((t, i) => (
                <blockquote
                  key={i}
                  className={`absolute inset-0 flex flex-col items-center justify-start transition-all duration-700 ease-smooth ${
                    i === index ? 'opacity-100' : 'pointer-events-none opacity-0'
                  }`}
                >
                  <p className="font-serif text-xl font-light italic leading-relaxed text-espresso sm:text-2xl lg:text-3xl">
                    {t.quote}
                  </p>
                  <div className="mt-8 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={14} strokeWidth={1.5} className="fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <p className="mt-5 text-[12px] font-medium uppercase tracking-[0.2em] text-espresso">{t.author}</p>
                  <p className="mt-1 text-[12px] font-light text-espresso/60">{t.property}</p>
                </blockquote>
              ))}
            </div>

            {/* Navigation */}
            <div className="mt-12 flex items-center justify-center gap-6">
              <button
                onClick={goPrev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-400 text-espresso transition-all duration-300 ease-smooth hover:border-espresso hover:bg-espresso hover:text-white"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} strokeWidth={1.5} />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? 'w-6 bg-espresso' : 'w-1.5 bg-cream-400 hover:bg-cream-600'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-400 text-espresso transition-all duration-300 ease-smooth hover:border-espresso hover:bg-espresso hover:text-white"
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
