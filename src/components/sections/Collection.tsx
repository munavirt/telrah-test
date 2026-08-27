import { OrganicBackground } from '@/components/OrganicBackground';
import { useState } from 'react';
import { X } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

type Product = {
  name: string;
  category: 'Bedding' | 'Bath' | 'Amenities' | 'Extra Beds';
  image: string;
  description: string;
  detail: string;
};

const PRODUCTS: Product[] = [
  {
    name: 'Plush Bath Towels',
    category: 'Bath',
    image: 'https://images.pexels.com/photos/7691101/pexels-photo-7691101.jpeg?auto=compress&cs=tinysrgb&w=900',
    description: '400–700+ GSM cotton towels with double-stitched borders and a buttery hand feel that survives industrial laundering.',
    detail: 'Available in 30×30, 36×72, and 16×28. Custom GSM, color, and embroidery on orders 500+ units.',
  },
  {
    name: 'Crisp White Duvet Set',
    category: 'Bedding',
    image: 'https://images.pexels.com/photos/29080565/pexels-photo-29080565.jpeg?auto=compress&cs=tinysrgb&w=900',
    description: 'Percale weave sheets with a matte finish and cooling breathability, designed for a perfectly made bed every morning.',
    detail: 'Thread counts from 200–600. Fitted sheets, duvet covers, pillowcases, and top sheets available separately.',
  },
  {
    name: 'Marble Bath Amenities',
    category: 'Amenities',
    image: 'https://images.pexels.com/photos/27638184/pexels-photo-27638184.jpeg?auto=compress&cs=tinysrgb&w=900',
    description: 'A curated tray of shampoo, body wash, lotion, and soap in refillable dispensers with your property’s branding.',
    detail: 'Vegan, paraben-free formulations. Custom scent profiles and branded packaging available.',
  },
  {
    name: 'Waffle Bathrobe',
    category: 'Bath',
    image: 'https://images.pexels.com/photos/31145149/pexels-photo-31145149.jpeg?auto=compress&cs=tinysrgb&w=900',
    description: 'Waffle-knit robes with a cotton terry lining, shawl collar, and self-tie belt — the weight of a spa, the softness of home.',
    detail: 'S/M/L/XL. Custom embroidery, belt loops, and loop hangers. Quick-dry weave for humid climates.',
  },
  {
    name: 'Folding Extra Bed',
    category: 'Extra Beds',
    image: 'https://images.pexels.com/photos/6434632/pexels-photo-6434632.jpeg?auto=compress&cs=tinysrgb&w=900',
    description: 'A rollaway cot with a firm mattress, fresh linens, and a frame that folds flat for storage — ready for the third guest.',
    detail: 'Mattress thickness 10–15cm. Custom linen sets included. Storage cart available for housekeeping teams.',
  },
  {
    name: 'Embroidery Detail',
    category: 'Bedding',
    image: 'https://images.pexels.com/photos/10743457/pexels-photo-10743457.jpeg?auto=compress&cs=tinysrgb&w=900',
    description: 'Custom monogram embroidery on pillowcases, duvet folds, and towel borders — your property’s mark, stitched to last.',
    detail: 'Gold, espresso, or custom thread colors. Minimum 200 units per design. Digital proof before production.',
  },
];

const CATEGORIES = ['All', 'Bedding', 'Bath', 'Amenities', 'Extra Beds'] as const;

export function Collection() {
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>('All');
  const [lightbox, setLightbox] = useState<Product | null>(null);

  const filtered = activeCategory === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="collection" className="relative bg-white py-24 sm:py-32 lg:py-40">
      <OrganicBackground variant="collection" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        {/* Heading */}
        <Reveal className="mb-12 text-center">
          <h2 className="font-serif text-4xl font-light text-espresso sm:text-5xl lg:text-6xl">
            The <span className="italic text-gold-600">Collection</span>
          </h2>
        </Reveal>

        {/* Filter tabs */}
        <Reveal delay={100} className="mb-16 flex flex-wrap items-center justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.12em] transition-all duration-300 ease-smooth ${activeCategory === cat
                  ? 'bg-espresso text-white'
                  : 'border border-cream-400 text-espresso/70 hover:border-espresso hover:text-espresso'
                }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {filtered.map((product, i) => (
            <Reveal
              key={product.name}
              delay={(i % 3) * 80}
              className="group cursor-pointer"
            >
              <button onClick={() => setLightbox(product)} className="block w-full text-left">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-cream-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 rounded-lg ring-1 ring-gold-500/0 transition-all duration-500 group-hover:ring-1 group-hover:ring-gold-500/40" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-light text-espresso">{product.name}</h3>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-cream-700">
                  {product.category}
                </p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-espresso/80 p-6 backdrop-blur-sm animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative grid max-w-4xl grid-cols-1 overflow-hidden rounded-2xl bg-white animate-scale-in sm:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-espresso backdrop-blur transition-colors hover:bg-white"
              aria-label="Close"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
            <div className="aspect-square sm:aspect-auto">
              <img src={lightbox.image} alt={lightbox.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold-600">{lightbox.category}</p>
              <h3 className="mt-3 font-serif text-3xl font-light text-espresso">{lightbox.name}</h3>
              <p className="mt-4 font-sans text-sm font-light leading-relaxed text-cream-800">{lightbox.description}</p>
              <div className="mt-6 border-t border-cream-400 pt-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-cream-700">Customization</p>
                <p className="mt-2 font-sans text-sm font-light leading-relaxed text-espresso/80">{lightbox.detail}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
