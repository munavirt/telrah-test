const FOOTER_LINKS = {
  Products: [
    'Bedding',
    'Bath',
    'Amenities',
    'Extra Beds',
    'Custom Solutions',
  ],
  Explore: [
    'Collections',
    'Why Telrah',
    'Telrah Standard',
    'Partnership',
    'Contact',
  ],
};

const SOCIAL_LINKS = [] as const;

export function Footer() {
  return (
    <footer className="bg-espresso text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-12 lg:px-20">

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          <div className="lg:pr-8">
            <h3 className="font-serif text-3xl font-medium tracking-[0.15em] text-white">
              TELRAH
            </h3>

            <p className="mt-4 max-w-xs font-sans text-sm font-light leading-relaxed text-white/50">
              Hospitality products made for comfort, durability, and everyday use.
            </p>
          </div>

          <div>
            <h4 className="text-[12px] font-medium uppercase tracking-[0.2em] text-white">
              Products
            </h4>

            <ul className="mt-5 space-y-3">
              {FOOTER_LINKS.Products.map((item) => (
                <li key={item}>
                  <a
                    href="#collection"
                    className="font-sans text-[13px] font-light text-white/60 transition-colors duration-300 hover:text-gold-500"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-medium uppercase tracking-[0.2em] text-white">
              Explore
            </h4>

            <ul className="mt-5 space-y-3">
              {FOOTER_LINKS.Explore.map((item) => (
                <li key={item}>
                  <a
                    href={
                      item === 'Collections'
                        ? '#collection'
                        : item === 'Why Telrah'
                          ? '#why'
                          : item === 'Telrah Standard'
                            ? '#standard'
                            : item === 'Partnership'
                              ? '#partnership'
                              : '#contact'
                    }
                    className="font-sans text-[13px] font-light text-white/60 transition-colors duration-300 hover:text-gold-500"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-medium uppercase tracking-[0.2em] text-white">
              Connect
            </h4>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="mailto:partnerships@telrah.com"
                  className="font-sans text-[13px] font-light text-white/60 transition-colors duration-300 hover:text-gold-500"
                >
                  info@telrah.co
                </a>
              </li>

              <li>
                <span className="font-sans text-[13px] font-light text-white/60">
                  +91 9061 7339 99
                </span>
              </li>
            </ul>

            {SOCIAL_LINKS.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 font-sans text-[10px] font-medium uppercase tracking-[0.1em] text-white/50 transition-all duration-300 hover:border-gold-500 hover:text-gold-500"
                    aria-label={social}
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">

          <p className="font-sans text-xs font-bold tracking-[0.02em] text-white/40">
            © 2026 TELRAH. All Rights Reserved.
          </p>

          <p className="font-sans text-xs font-bold tracking-[0.02em] text-white/40">
            Designed &amp; Developed by{' '}
            <a
              href="https://www.promocraft.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/55 transition-colors duration-300 hover:text-gold-500"
            >
              Promocraft
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}