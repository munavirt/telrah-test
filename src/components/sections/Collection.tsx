import { OrganicBackground } from '@/components/OrganicBackground';
import { useState } from 'react';
import { X } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import faceTowelImg from '../../assets/face-towel.png';
import handTowelImg from '../../assets/hand-towel.png';
import bathTowelImg from '../../assets/bath-towel.png';
import bathMatImg from '../../assets/bath-matt.png';
import waffleBathrobeImg from '../../assets/waffle-bathrobe.png';
import amenitiesKitImg from '../../assets/amenties-kit.png';
import foldingExtraBedImg from '../../assets/folding-extrabed.png';
import mattressProtector from '../../assets/mattress-protector.png';

type Product = {
  name: string;
  category: 'Bedding' | 'Bath' | 'Amenities' | 'Extra Beds';
  image: string;
  description: string;
  detail: string;
};

const PRODUCTS: Product[] = [
  {
    name: 'Bed Sheets',
    category: 'Bedding',
    image: 'https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&w=900',
    description: 'Hotel-grade bed sheets designed for a soft, durable and refined sleeping experience.',
    detail: 'Available in Plain Percale, Plain Satin, 1cm Stripes and Checked. Thread counts available in 300TC, 400TC and 500TC. Multiple bed sizes available. Customisation available.',
  },

  {
    name: 'Duvets',
    category: 'Bedding',
    image: 'https://images.pexels.com/photos/7303691/pexels-photo-7303691.jpeg?auto=compress&cs=tinysrgb&w=900',
    description: 'Comfort-focused duvets designed for a comfortable and restful hospitality experience.',
    detail: 'Available in 200 GSM, 250 GSM, 300 GSM and 400 GSM. Available fillings include Siliconized Fiber and Microfiber. Customisation available.',
  },

  {
    name: 'Mattress Protector',
    category: 'Bedding',
    image: mattressProtector,
    description: 'Cotton terry towelling mattress protectors designed to add comfort and protection to every stay.',
    detail: 'Available in Single, Medium, Queen and King sizes. Designed to be absorbent, breathable and comfortable.',
  },

  {
    name: 'Pillows',
    category: 'Bedding',
    image: 'https://images.pexels.com/photos/3755585/pexels-photo-3755585.jpeg?auto=compress&cs=tinysrgb&w=900',
    description: 'Comfort-focused pillows designed to support a restful and comfortable guest experience.',
    detail: 'Available fillings include Conjugated Microfiber, Microfibers and Memory Foams. Available in Small, Medium and Big sizes.',
  },

  {
    name: 'Bed Runner & Cushion',
    category: 'Bedding',
    image: 'https://images.pexels.com/photos/8721406/pexels-photo-8721406.jpeg?auto=compress&cs=tinysrgb&w=900',
    description: 'Refined bed runners and cushions designed to add a polished finishing touch to hospitality spaces.',
    detail: 'Bed runners available in 18 × 90 in and 18 × 96 in. Cushions available in 16 × 16 in and 24 × 24 in. Customisation available.',
  },
  {
    name: 'Plush Bath Towels',
    category: 'Bath',
    image: 'https://images.pexels.com/photos/7691101/pexels-photo-7691101.jpeg?auto=compress&cs=tinysrgb&w=900',
    description: '400–700+ GSM cotton towels with double-stitched borders and a buttery hand feel that survives industrial laundering.',
    detail: 'Available in 30×30, 36×72, and 16×28. Custom GSM, color, and embroidery on orders 500+ units.',
  },
  {
    name: 'Face Towel',
    category: 'Bath',
    image: faceTowelImg,
    description: 'Soft, absorbent face towels designed for a refined and comfortable guest experience.',
    detail: 'Available in hospitality-grade cotton with multiple GSM and size options. Customisation available.',
  },
  {
    name: 'Hand Towel',
    category: 'Bath',
    image: handTowelImg,
    description: 'Soft and absorbent hand towels designed for everyday hotel and hospitality use.',
    detail: 'Available in hospitality-grade cotton with multiple GSM and size options. Customisation available.',
  },
  {
    name: 'Pool Towel',
    category: 'Bath',
    image: bathTowelImg,
    description: 'Generously sized towels designed for poolside, resort and leisure environments.',
    detail: 'Available in hospitality-grade cotton with multiple GSM and size options. Customisation available.',
  },
  {
    name: 'Bath Mat',
    category: 'Bath',
    image: bathMatImg,
    description: 'Soft and absorbent bath mats designed to provide a comfortable finishing touch to hotel bathrooms.',
    detail: 'Available in hospitality-grade cotton with multiple size and GSM options. Customisation available.',
  },
  {
    name: 'Waffle Bathrobe',
    category: 'Bath',
    image: waffleBathrobeImg,
    description: 'Waffle-knit robes with a cotton terry lining, shawl collar, and self-tie belt — the weight of a spa, the softness of home.',
    detail: 'S/M/L/XL. Custom embroidery, belt loops, and loop hangers. Quick-dry weave for humid climates.',
  },
  {
    name: 'Guest Amenities',
    category: 'Amenities',
    image: amenitiesKitImg,
    description: 'Thoughtfully selected guest amenities for a polished and comfortable stay.',
    detail: 'Shaving kits, dental kits, combs, soap, shower caps, ear buds, and shampoo. Customisation available.'
  },
  {
    name: 'Folding Extra Bed',
    category: 'Extra Beds',
    image: foldingExtraBedImg,
    description: 'A rollaway cot with a firm mattress, fresh linens, and a frame that folds flat for storage — ready for the third guest.',
    detail: 'Mattress thickness 10–15cm. Custom linen sets included. Storage cart available for housekeeping teams.',
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
        
        <Reveal className="mb-12 text-center">
          <h2 className="font-serif text-4xl font-light text-espresso sm:text-5xl lg:text-6xl">
            The <span className="italic text-gold-600">Collection</span>
          </h2>
        </Reveal>

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
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-espresso/60">
                  {product.category}
                </p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

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
              <p className="mt-4 font-sans text-sm font-light leading-relaxed text-espresso/80">{lightbox.description}</p>
              <div className="mt-6 border-t border-cream-400 pt-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-espresso/60">Customization</p>
                <p className="mt-2 font-sans text-sm font-light leading-relaxed text-espresso/80">{lightbox.detail}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
