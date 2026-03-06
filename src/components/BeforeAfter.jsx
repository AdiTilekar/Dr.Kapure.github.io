const transformations = [
  { label: 'Acne Scars Removal', category: 'Laser Resurfacing', duration: '4 Sessions', result: 'Visible reduction in 6 weeks', image: '/images/Acene Scars.jpg' },
  { label: 'Pigmentation Correction', category: 'Chemical Peel + Laser', duration: '6 Sessions', result: 'Even skin tone achieved', image: null },
  { label: 'Hair Restoration', category: 'PRP + Growth Factor', duration: '8 Sessions', result: 'Significant regrowth', image: null },
  { label: 'Anti-Aging Treatment', category: 'Dermal Fillers + Botox', duration: '2 Sessions', result: 'Youthful, natural look', image: null },
  { label: 'Skin Texture Refinement', category: 'HydraFacial + Microneedling', duration: '5 Sessions', result: 'Smoother, radiant skin', image: null },
  { label: 'Pre-Wedding Glow', category: 'Signature Package', duration: '12 Weeks', result: 'Camera-ready radiance', image: null },
];

export default function BeforeAfter() {
  return (
    <section className="py-20 lg:py-28 bg-dusty-pink/[0.25] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-gold/[0.03] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 fade-in-up">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            Real Transformations
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-charcoal mb-4">
            Before &amp; After Gallery
          </h2>
          <p className="text-sm text-charcoal/50 max-w-2xl">
            Documented results from real patients. Every transformation is a testament to our expertise and personalized care.
          </p>
        </div>

        {/* 3x2 Grid with Gold Borders */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-up">
          {transformations.map((item, index) => (
            <div
              key={index}
              className="stagger-child group"
            >
              {/* Image Container with Gold Border */}
              <div className="aspect-[4/3] bg-gradient-to-br from-off-white via-cream to-off-white border-2 border-gold/30 group-hover:border-gold group-hover:shadow-xl group-hover:shadow-gold/10 transition-all duration-500 overflow-hidden relative">
                
                {item.image ? (
                  <>
                    {/* Real Image */}
                    <img 
                      src={item.image} 
                      alt={`${item.label} - Before and After`}
                      className="w-full h-full object-cover"
                    />
                    {/* Split Line */}
                    <div className="absolute inset-y-0 left-1/2 w-[2px] bg-white/80 shadow-lg" />
                    
                    {/* Before/After Labels */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between z-10">
                      <span className="text-[9px] font-semibold uppercase tracking-widest text-white bg-charcoal/70 backdrop-blur-sm px-3 py-1.5 rounded">Before</span>
                      <span className="text-[9px] font-semibold uppercase tracking-widest text-white bg-charcoal/70 backdrop-blur-sm px-3 py-1.5 rounded">After</span>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Split Line */}
                    <div className="absolute inset-y-0 left-1/2 w-[1px] bg-gold/20" />
                    
                    {/* Before/After Labels */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between">
                      <span className="text-[9px] font-semibold uppercase tracking-widest text-charcoal/40 bg-cream/80 px-2 py-1 rounded">Before</span>
                      <span className="text-[9px] font-semibold uppercase tracking-widest text-charcoal/40 bg-cream/80 px-2 py-1 rounded">After</span>
                    </div>

                    {/* Placeholder Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.08)_0%,transparent_70%)]" />
                      <div className="text-center text-charcoal/20 relative z-10">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gold/5 border border-gold/15 flex items-center justify-center">
                          <span className="text-2xl text-gold/40">✦</span>
                        </div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider px-4 text-charcoal/30">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Meta Info */}
              <div className="mt-4 px-1">
                <h3 className="text-[13px] font-semibold text-charcoal mb-1">{item.label}</h3>
                <p className="text-[11px] text-charcoal/50 mb-2">{item.category}</p>
                <div className="flex items-center justify-between text-[10px] text-charcoal/40 pt-2 border-t border-charcoal/10">
                  <span>{item.duration}</span>
                  <span className="text-gold">{item.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center fade-in-up">
          <p className="text-[11px] text-charcoal/40 italic">
            *Individual results may vary. Photos shown with patient consent.
          </p>
        </div>
      </div>
    </section>
  );
}
