import { Heart } from 'lucide-react';

export default function PreWedding() {
  return (
    <section className="py-20 lg:py-28 bg-dusty-pink">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="fade-in-up grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-xl shadow-black/[0.08] border border-gray-100/40">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden lg:rounded-2xl m-2 lg:m-4">
            <img 
              src={`${import.meta.env.BASE_URL}images/prewedding-bride.jpg`}
              alt="Pre-Wedding Bridal Glow Treatment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center px-8 lg:px-14 py-10 lg:py-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/[0.08] rounded-full mb-8 self-start">
              <Heart size={14} className="text-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
                Pre-Wedding Excellence
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal leading-[1.15] mb-2">
              Where Love Meets
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl font-medium leading-[1.15] mb-6">
              <span className="italic text-gradient">Luminous Skin</span>
            </h2>

            <p className="text-[14px] text-charcoal/50 leading-[1.75] mb-8 max-w-md">
              Expert dermatological care meets luxury in our bespoke
              pre-wedding programs, designed to unveil your most
              confident self.
            </p>

            <a
              href="#book"
              className="inline-flex items-center justify-center px-10 py-4 bg-charcoal/80 text-white text-[14px] font-semibold tracking-wide rounded-xl hover:bg-charcoal transition-colors duration-300 self-stretch lg:self-start"
            >
              View Packages
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
