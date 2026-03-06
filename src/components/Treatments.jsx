import { ArrowRight } from 'lucide-react';

/* ── What We Offer — Bento Grid ── */

const categories = [
  { title: 'Aesthetic Procedures', desc: 'Enhance your natural beauty with expert care.', span: '' },
  { title: 'Skin Treatments', desc: '', span: 'row-span-2' },
  { title: 'Laser Solutions', desc: '', span: '' },
  { title: 'Hair & Scalp Treatments', desc: '', span: '' },
  { title: 'Anti-Ageing Treatments', desc: '', span: '' },
];

/* ── Signature Treatments ── */

const signature = [
  { title: 'Pigmentation Treatment', icon: '◗' },
  { title: 'Hair Loss Treatment', icon: '❦' },
  { title: 'Laser Hair Removal', icon: '✦' },
];

export default function Treatments() {
  return (
    <>
      {/* ─── WHAT WE OFFER — BENTO GRID ────────────────── */}
      <section id="laser" className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14 fade-in-up">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold mb-4">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[42px] font-medium text-charcoal">
              Comprehensive Skin, Hair &amp; Aesthetic Care
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 fade-in-up" style={{ gridAutoRows: 'minmax(200px, auto)' }}>
            {categories.map((cat, i) => (
              <div
                key={i}
                className={`stagger-child group relative bg-gradient-to-br from-charcoal/[0.04] to-[#E8D5C4]/60 rounded-2xl overflow-hidden flex items-end p-6 hover:shadow-xl transition-shadow duration-500 ${cat.span} ${i === 1 ? 'aspect-auto min-h-[420px]' : 'aspect-[4/3]'}`}
              >
                {/* Placeholder visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.1)_0%,transparent_70%)]" />
                  <div className="text-center text-charcoal/15 relative z-10">
                    <div className="w-16 h-16 mb-3 mx-auto rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-3xl text-white/60">✦</span>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/40">{cat.title}</p>
                  </div>
                </div>
                {/* Bottom gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal/50 to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <h3 className="font-serif text-lg md:text-xl font-semibold text-white leading-tight">
                    {cat.title}
                  </h3>
                  {cat.desc && (
                    <p className="text-[12px] text-white/60 mt-1">{cat.desc}</p>
                  )}
                  {i === 0 && (
                    <span className="inline-block mt-2 text-[11px] text-white/70 underline underline-offset-4">
                      Learn More
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SIGNATURE TREATMENTS ──────────────────────── */}
      <section className="py-16 lg:py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header — Split */}
          <div className="grid lg:grid-cols-2 gap-8 mb-14 fade-in-up">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold mb-4">
                Our Main Services
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[42px] font-medium text-charcoal leading-[1.15]">
                Our Signature<br />Treatments
              </h2>
            </div>
            <p className="text-[14px] text-charcoal/45 leading-[1.75] lg:pt-8 max-w-lg">
              Beauty begins the moment you decide to take care of yourself.
              With 25+ services to choose from, it can be hard to know where
              to start. Explore our most sought-after treatments, crafted to
              enhance your natural beauty with precision, care, and expertise.
            </p>
          </div>

          {/* 3-Column Cards */}
          <div className="grid md:grid-cols-3 gap-6 fade-in-up">
            {signature.map((item, i) => (
              <div key={i} className="stagger-child group">
                {/* Tall Image Placeholder */}
                <div className="aspect-[3/4] bg-gradient-to-br from-gold/[0.05] to-[#E8D5C4]/50 rounded-2xl overflow-hidden flex items-center justify-center mb-0 relative">
                  <div className="text-center text-charcoal/15">
                    <div className="w-14 h-14 mx-auto mb-2 border border-dashed border-charcoal/10 rounded-full flex items-center justify-center">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <p className="text-[9px] uppercase tracking-[0.2em]">{item.title}</p>
                  </div>
                </div>
                {/* Bottom label bar */}
                <div className="bg-off-white border border-gray-200/60 rounded-b-2xl -mt-4 relative z-10 px-5 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold/[0.08] flex items-center justify-center flex-shrink-0">
                    <span className="text-gold text-sm">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-charcoal">{item.title}</p>
                    <a
                      href="#book"
                      className="inline-flex items-center gap-1 text-[11px] text-charcoal/40 hover:text-gold transition-colors duration-300"
                    >
                      See more <ArrowRight size={11} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
