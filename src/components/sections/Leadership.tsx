import { OrganicBackground } from '@/components/OrganicBackground';
import { Reveal } from '@/components/Reveal';

type Leader = {
  name: string;
  role: string;
  image: string;
};

const LEADERS: Leader[] = [
  {
    name: 'Adrian Telrah',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/36700225/pexels-photo-36700225.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Sofia Marchetti',
    role: 'Director of Operations',
    image: 'https://images.pexels.com/photos/34381971/pexels-photo-34381971.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Karim Hassan',
    role: 'Head of Product',
    image: 'https://images.pexels.com/photos/34762353/pexels-photo-34762353.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Eleanor Vance',
    role: 'Director of Partnerships',
    image: 'https://images.pexels.com/photos/15780884/pexels-photo-15780884.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="relative border-t border-cream-400 bg-white py-24 sm:py-32 lg:py-40 overflow-hidden">
      <OrganicBackground variant="leadership" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        {/* Heading */}
        <Reveal className="mb-16 max-w-2xl">
          <h2 className="font-serif text-4xl font-light text-espresso sm:text-5xl lg:text-6xl">
            <span className="italic text-gold-600">Board &amp;</span> Leadership
          </h2>
          <p className="mt-6 max-w-md font-sans text-sm font-light leading-relaxed text-cream-800">
            The minds behind every thread. A team that has spent decades in hospitality, united by one belief: comfort is never an accident.
          </p>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {LEADERS.map((leader, i) => (
            <Reveal key={leader.name} delay={i * 100} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-cream-200">
                <img
                  src={leader.image}
                  alt={`${leader.name} — ${leader.role}`}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-all duration-700 ease-smooth group-hover:grayscale-0 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-light text-espresso">{leader.name}</h3>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-cream-700">{leader.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
