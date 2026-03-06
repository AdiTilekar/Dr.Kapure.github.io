import { ArrowRight, Star, Users } from 'lucide-react';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '10K+', label: 'Happy Patients' },
  { value: '25+', label: 'Treatments' },
  { value: '5.0', label: 'Google Rating' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-cream pt-28 lg:pt-24 overflow-hidden">
      {/* Subtle bg decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-gold/[0.06] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-gold/[0.04] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/60 backdrop-blur-sm border border-gold/20 rounded-full mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-charcoal">
                Pune&apos;s Premier Skin Clinic
              </span>
            </div>

            <h1 className="font-serif text-[clamp(3.5rem,7vw,6.5rem)] font-medium leading-[1.08] text-charcoal mb-8">
              Where Beauty Meets<br />
              <span className="italic text-gradient">Clinical Excellence</span>
            </h1>

            {/* Description with gold left border */}
            <div className="border-l-[3px] border-gold pl-5 mb-10 max-w-[520px]">
              <p className="text-[15px] lg:text-base text-charcoal/60 leading-[1.75]">
                Experience advanced dermatology and aesthetic treatments
                at Dr.Kapure&apos;s Skin Clinic, led by renowned skin specialist
                <span className="font-semibold text-charcoal"> Dr. Smita Kapure</span>.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#book"
                className="inline-flex items-center justify-center px-8 py-4 bg-charcoal text-white text-[13px] font-semibold tracking-wide rounded-[4px] hover:bg-gold hover:text-charcoal transition-all duration-300 group"
              >
                Book a Consultation
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-charcoal text-[13px] font-medium tracking-wide hover:text-gold transition-all duration-300 group"
              >
                Explore Services
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Mini Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-gold/25 to-gold/5 border-2 border-cream flex items-center justify-center"
                  >
                    <Users size={12} className="text-gold/60" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={12} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-[11px] text-charcoal/45">
                  Trusted by <span className="font-semibold text-charcoal/70">10,000+</span> patients
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="fade-in-up relative lg:pl-8">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-2xl shadow-gold/10">
              <img 
                src="/images/hero-treatment.jpg" 
                alt="Professional dermatology treatment at Dr.Kapure's Skin Clinic"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip - Highlighted */}
      <div className="relative mt-20 lg:mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-rose-gold/[0.08] via-dusty-pink/[0.15] to-rose-gold/[0.08] rounded-2xl shadow-lg shadow-rose-gold/10 border border-rose-gold/20 p-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-rose-gold/[0.15]">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="py-8 lg:py-10 px-4 flex flex-col items-center justify-center"
                  >
                    <p className="font-serif text-4xl lg:text-5xl font-bold text-gradient mb-2 whitespace-nowrap">
                      {stat.value}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60 font-semibold text-center">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
