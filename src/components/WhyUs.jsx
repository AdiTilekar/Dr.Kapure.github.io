import { Zap, UserCheck, Star, TrendingUp, Sparkles } from 'lucide-react';

const features = [
  { Icon: Zap, num: '01', title: 'Advanced Technology', desc: 'US-FDA approved equipment ensuring precision and safety.' },
  { Icon: UserCheck, num: '02', title: 'Personalized Care', desc: 'Tailored treatment plans curated by Dr. Smita Kapure herself.' },
  { Icon: Star, num: '03', title: 'Premium Experience', desc: 'A serene, boutique-style clinic offering comfort and privacy.' },
  { Icon: TrendingUp, num: '04', title: 'Visible Results', desc: 'Scientifically designed solutions that bring lasting transformations.' },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-to-b from-rose-gold-light/[0.05] to-rose-gold-light/[0.08] relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-gold/[0.03] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left — Header + Feature Cards */}
          <div>
            <p className="fade-in-up text-[11px] font-semibold uppercase tracking-[0.3em] text-gold mb-4">
              What&apos;s Special at Dr.Kapure&apos;s
            </p>
            <h2 className="fade-in-up font-serif text-3xl md:text-4xl lg:text-[42px] font-medium text-charcoal leading-[1.15] mb-12">
              What Makes Dr.Kapure&apos;s<br />Skin Clinic Exceptional
            </h2>

            {/* Staggered 2x2 Cards */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`fade-in-up stagger-child bg-off-white rounded-2xl p-6 ${i % 2 === 1 ? 'mt-8' : ''}`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gold/[0.08] flex items-center justify-center">
                      <f.Icon size={18} strokeWidth={1.5} className="text-gold" />
                    </div>
                    <span className="text-[12px] text-charcoal/20 font-medium">{f.num}</span>
                  </div>
                  <h3 className="font-sans text-[15px] font-bold text-charcoal mb-2">{f.title}</h3>
                  <p className="text-[13px] text-charcoal/40 leading-[1.6]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Clinic Image with Badge */}
          <div className="fade-in-up relative">
            <div className="aspect-[3/4] bg-gradient-to-br from-gold/[0.08] via-gold/[0.04] to-transparent rounded-3xl flex items-center justify-center overflow-hidden border border-gold/10 shadow-lg shadow-gold/5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,169,110,0.12)_0%,transparent_60%)]" />
              <div className="text-center text-charcoal/20 relative z-10">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gold/5 border border-gold/10 flex items-center justify-center">
                  <span className="text-3xl text-gold/40">✦</span>
                </div>
                <p className="text-sm font-medium uppercase tracking-[0.2em]">Clinic Interior</p>
                <p className="text-xs mt-1 text-charcoal/10">3:4 Aspect Ratio</p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg shadow-black/[0.06] flex items-center gap-3">
              <div className="w-10 h-10 bg-charcoal rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles size={18} className="text-white" />
              </div>
              <div>
                <p className="text-[14px] font-bold text-charcoal">Rated #1 in Pune</p>
                <p className="text-[11px] text-charcoal/40">For Advanced Dermatology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
