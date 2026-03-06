const items = [
  'FDA-Approved Devices',
  'Board-Certified Dermatologist',
  '10,000+ Treatments',
  'Zero Downtime Procedures',
  'Personalized Skin Analysis',
  'Premium Skincare Products',
  'Advanced Laser Technology',
  'Evidence-Based Medicine',
];

export default function TrustMarquee() {
  return (
    <section className="py-5 bg-charcoal overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center mx-8 text-[11px] uppercase tracking-[0.2em] text-white/50 font-medium shrink-0">
            <span className="text-gold mr-4">✦</span>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
