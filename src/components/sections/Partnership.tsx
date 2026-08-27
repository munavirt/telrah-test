import { Reveal } from '@/components/Reveal';
import { ArrowRight } from 'lucide-react';

const PARTNERSHIP_IMG =
  'https://images.pexels.com/photos/7490852/pexels-photo-7490852.jpeg?auto=compress&cs=tinysrgb&w=1200';

export function Partnership() {
  return (
    <section id="partnership" className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        <Reveal>
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl lg:grid-cols-2">
            {/* Left — espresso background */}
            <div className="flex flex-col justify-center bg-espresso p-10 sm:p-14 lg:p-16">
              <h2 className="font-serif text-3xl font-light text-white sm:text-4xl lg:text-5xl">
                <span className="italic text-gold-500">Partner</span> With Telrah
              </h2>
              <p className="mt-6 max-w-md font-sans text-sm font-light leading-relaxed text-white/70 sm:text-base">
                Dedicated support, full customization, and a supply chain built for consistency. We work with a limited number of properties at a time — because partnership means attention.
              </p>
              <a
                href="#contact"
                className="group mt-10 inline-flex w-fit items-center justify-center rounded-full bg-white px-8 py-4 text-[12px] font-medium uppercase tracking-[0.15em] text-espresso transition-all duration-300 ease-smooth hover:scale-[1.02] hover:shadow-xl"
              >
                Schedule a Consultation
              </a>
            </div>

            {/* Right — image */}
            <div className="relative min-h-[320px] overflow-hidden lg:min-h-full">
              <img
                src={PARTNERSHIP_IMG}
                alt="Two professionals reviewing fabric swatches together"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-espresso/30 to-transparent" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
