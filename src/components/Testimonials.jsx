import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ananya M.',
    treatment: 'HydraFacial Treatment',
    text: "The results were visible from the very first session. Dr. Kapure's attention to detail and the clinic's ambiance made the entire experience feel so premium and comfortable.",
    rating: 5,
    location: 'Pune',
  },
  {
    name: 'Rahul S.',
    treatment: 'PRP Hair Therapy',
    text: "After just 3 sessions, I noticed significant regrowth. The team is incredibly professional, and Dr. Kapure explained every step of the process thoroughly.",
    rating: 5,
    location: 'Pune',
  },
  {
    name: 'Priya K.',
    treatment: 'Pre-Wedding Package',
    text: "I started my pre-wedding glow package 3 months before my wedding. On my big day, my skin was absolutely radiant. Everyone kept asking about my skincare routine!",
    rating: 5,
    location: 'Pune',
  },
  {
    name: 'Vikram T.',
    treatment: 'Acne Scar Treatment',
    text: "Years of acne scars faded significantly after Dr. Kapure's laser treatment. My confidence is back and I can't thank the team enough!",
    rating: 5,
    location: 'Pune',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-off-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 fade-in-up">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            Success Stories
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-charcoal mb-4">
            Patient Transformations
          </h2>
          <p className="text-sm text-charcoal/50 max-w-xl">
            Real stories from patients who experienced life-changing results at Dr.Kapure's Skin Clinic
          </p>
        </div>

        {/* Testimonials Grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 fade-in-up">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="stagger-child group bg-cream border-l-2 border-gold p-8 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
              </div>

              <p className="text-[14px] text-charcoal/70 leading-relaxed mb-6">
                &ldquo;{item.text}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-charcoal/10">
                <div>
                  <p className="text-[13px] font-semibold text-charcoal">{item.name}</p>
                  <p className="text-[11px] text-charcoal/40 mt-1">{item.treatment}</p>
                </div>
                <p className="text-[10px] text-gold uppercase tracking-wider">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center fade-in-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-cream border border-gold/20 rounded-full">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} className="text-gold fill-gold" />
              ))}
            </div>
            <span className="text-[12px] text-charcoal/60">
              <span className="font-semibold text-charcoal">5.0/5</span> · 500+ Reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
