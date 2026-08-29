import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Eyebrow } from '@/components/Eyebrow';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', propertyType: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `*New Contact Request*\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Property Type:* ${form.propertyType}\n*Message:* ${form.message}`;
    const whatsappUrl = `https://wa.me/919061733999?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
  };

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <section id="contact" className="grain-overlay bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        {/* Heading */}
        <Reveal className="mb-16 text-center">
          <Eyebrow withLines className="justify-center">Contact</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl font-light text-espresso sm:text-5xl lg:text-6xl">
            Let&apos;s Talk About Your <span className="italic text-gold-600">Property</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Form */}
          <Reveal>
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-xl border border-cream-400 bg-cream-100 p-12 text-center animate-scale-in">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/15">
                  <Mail size={24} strokeWidth={1.5} className="text-gold-600" />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-light text-espresso">Thanks for Reaching Out</h3>
                <p className="mt-3 max-w-sm font-sans text-sm font-light leading-relaxed text-espresso/80">
                  Thanks for getting in touch. Our team will review your message and get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', propertyType: '', message: '' });
                  }}
                  className="mt-8 text-[12px] font-medium uppercase tracking-[0.15em] text-espresso underline decoration-gold-500 underline-offset-4 transition-colors hover:text-gold-600"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="text-[10px] font-medium uppercase tracking-[0.2em] text-espresso/60">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange('name')}
                    className="mt-2 w-full border-b border-cream-400 bg-transparent pb-3 font-sans text-sm text-espresso outline-none transition-colors focus:border-espresso"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-[10px] font-medium uppercase tracking-[0.2em] text-espresso/60">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange('email')}
                    className="mt-2 w-full border-b border-cream-400 bg-transparent pb-3 font-sans text-sm text-espresso outline-none transition-colors focus:border-espresso"
                    placeholder="you@property.com"
                  />
                </div>

                <div>
                  <label htmlFor="propertyType" className="text-[10px] font-medium uppercase tracking-[0.2em] text-espresso/60">
                    Property Type
                  </label>
                  <select
                    id="propertyType"
                    required
                    value={form.propertyType}
                    onChange={handleChange('propertyType')}
                    className="mt-2 w-full border-b border-cream-400 bg-transparent pb-3 font-sans text-sm text-espresso outline-none transition-colors focus:border-espresso"
                  >
                    <option value="" disabled>Select your property type</option>
                    <option value="boutique-hotel">Hotel</option>
                    <option value="resort">Resort</option>
                    <option value="villa-group">Villa Group</option>
                    <option value="serviced-apartments">Serviced Apartments</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-[10px] font-medium uppercase tracking-[0.2em] text-espresso/60">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange('message')}
                    className="mt-2 w-full resize-none border-b border-cream-400 bg-transparent pb-3 font-sans text-sm text-espresso outline-none transition-colors focus:border-espresso"
                    placeholder="Tell us what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-espresso px-8 py-4 text-[12px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-300 ease-smooth hover:scale-[1.02] hover:bg-espresso-800 hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            )}
          </Reveal>

          {/* Contact details */}
          <Reveal delay={150}>
            <div className="flex h-full flex-col justify-center lg:pl-8">
              <p className="max-w-sm font-sans text-sm font-light leading-relaxed text-espresso/80">
                Have a requirement or planning a new project? Tell us what you need, and our team will get back to you.
              </p>

              <div className="mt-10 space-y-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-500/40">
                    <Mail size={16} strokeWidth={1.5} className="text-gold-600" />
                  </span>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-espresso/60">Email</p>
                    <p className="mt-1 font-sans text-sm text-espresso">info@telrah.co</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-500/40">
                    <Phone size={16} strokeWidth={1.5} className="text-gold-600" />
                  </span>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-espresso/60">Phone</p>
                    <p className="mt-1 font-sans text-sm text-espresso">+91 9061 7339 99</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-500/40">
                    <MapPin size={16} strokeWidth={1.5} className="text-gold-600" />
                  </span>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-espresso/60">Location</p>
                    <p className="mt-1 font-sans text-sm text-espresso">Sornakanji Estate -2 Surat 395017</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
