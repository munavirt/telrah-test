import { Check } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { useCountUp } from '@/hooks/useCountUp';

const STATS = [
  { value: 700, suffix: '+', label: 'GSM Towel Options' },
  { value: 100, suffix: '%', label: 'Customizable' },
  { value: 4, suffix: '', label: 'Product Categories' },
  { value: 1, suffix: '', label: 'Reliable Partner' },
];

const DIFFERENTIATORS = [
  'Quality First',
  'Consistent Supply',
  'Custom Solutions',
  'Dedicated Support',
];

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: current } = useCountUp(value);

  return (
    <div className="px-6 py-10 sm:px-8 sm:py-12">
      <div className="flex items-baseline">
        <span ref={ref} className="font-serif text-5xl font-light text-espresso lg:text-6xl">
          {current}
        </span>
        <span className="font-serif text-3xl font-light text-gold-500 lg:text-4xl">{suffix}</span>
      </div>
      <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em] text-cream-700">{label}</p>
    </div>
  );
}

export function WhyTelrah() {
  return (
    <section id="why" className="border-t border-cream-400 bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[2fr_3fr] lg:gap-24">
          {/* Left — sticky heading */}
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <h2 className="font-serif text-4xl font-light text-espresso sm:text-5xl lg:text-6xl">
                <span className="italic text-gold-600">Why</span> Telrah
              </h2>
              <p className="mt-6 max-w-sm font-sans text-sm font-light leading-relaxed text-cream-800">
                We exist for properties that treat comfort as a standard, not a feature. Every product is engineered for longevity, consistency, and the kind of quiet quality guests remember.
              </p>
              <a
                href="#collection"
                className="group mt-8 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.15em] text-espresso"
              >
                <span className="relative">
                  Learn about our standards
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-gold-500 transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </div>
          </Reveal>

          {/* Right — stats grid */}
          <Reveal delay={150}>
            <div>
              <div className="grid grid-cols-2 border-l border-t border-cream-400">
                {STATS.map((stat) => (
                  <div key={stat.label} className="border-b border-r border-cream-400">
                    <StatCard {...stat} />
                  </div>
                ))}
              </div>

              {/* Differentiators */}
              <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {DIFFERENTIATORS.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gold-500">
                      <Check size={12} strokeWidth={2} className="text-gold-600" />
                    </span>
                    <span className="font-sans text-sm font-light text-espresso">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
