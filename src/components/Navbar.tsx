import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NAV_LINKS = [
  { label: "Collections", href: "#collections" },
  { label: "Solutions", href: "#solutions" },
  { label: "Why Telrah", href: "#why-telrah" },
  { label: "Partnership", href: "#partnership" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      gsap.set(navRef.current, { autoAlpha: 1 });
      return;
    }

    gsap.set(navRef.current, { autoAlpha: 0 });
    gsap.to(navRef.current, {
      autoAlpha: 1,
      duration: 1.5,
      delay: 0.2, // Navbar begins subtle fade-in at 0.20s per specs
      ease: "power2.out",
    });
  }, { scope: navRef });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-[#4C2D2B]/10"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-14 h-20 md:h-24">
        
        <a
          href="#top"
          className={[
            "font-serif text-xl md:text-2xl tracking-[0.15em] transition-colors duration-500",
            scrolled ? "text-[#4C2D2B]" : "text-white",
          ].join(" ")}
        >
          TELRAH
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={[
                "text-xs tracking-[0.1em] uppercase transition-colors duration-500",
                scrolled
                  ? "text-[#4C2D2B] hover:text-[#4C2D2B]"
                  : "text-white/85 hover:text-white",
              ].join(" ")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-2.5 text-xs tracking-[0.1em] uppercase bg-[#4C2D2B] text-white hover:bg-[#3a211f] transition-colors duration-300"
          >
            Request a Quote
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={[
              "block w-6 h-px transition-all duration-300",
              scrolled ? "bg-[#4C2D2B]" : "bg-white",
              mobileOpen ? "rotate-45 translate-y-[3px]" : "",
            ].join(" ")}
          />
          <span
            className={[
              "block w-6 h-px transition-all duration-300",
              scrolled ? "bg-[#4C2D2B]" : "bg-white",
              mobileOpen ? "-rotate-45 -translate-y-[3px]" : "",
            ].join(" ")}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#4C2D2B]/10 px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm tracking-[0.08em] uppercase text-[#4C2D2B]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 text-xs tracking-[0.1em] uppercase bg-[#4C2D2B] text-white mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Request a Quote
          </a>
        </div>
      )}
    </header>
  );
}
