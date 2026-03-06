const concerns = [
  {
    title: 'Stubborn Acne Scars?',
    desc: "They won't fade on their own. Expert treatment is here.",
    offer: 'Upto 30% Off*',
    imgLabel: 'Acne Treatment',
    image: `${import.meta.env.BASE_URL}images/treatment-acne.jpg`,
  },
  {
    title: 'Worried About Ageing?',
    desc: "Don't let fine lines define you. Reclaim your youth.",
    offer: 'Free Skin Analysis*',
    imgLabel: 'Anti-Ageing',
    image: `${import.meta.env.BASE_URL}images/treatment-antiaging.jpg`,
  },
  {
    title: 'Dull, Lifeless Skin?',
    desc: 'Stop hiding behind makeup. Get your natural glow back.',
    offer: 'Special Peel Packages*',
    imgLabel: 'Skin Glow',
    image: `${import.meta.env.BASE_URL}images/dull-skin.jpg`,
  },
  {
    title: 'Hairfall Anxiety?',
    desc: 'Watching your hair thin daily? We can stop it.',
    offer: 'Get Flat 20% Off*',
    imgLabel: 'Hair Treatment',
    image: `${import.meta.env.BASE_URL}images/Hairfall-anxiety.jpg`,
  },
];

export default function ConcernCards() {
  return (
    <section id="skin" className="py-20 lg:py-28 bg-off-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 fade-in-up">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            Common Concerns
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal mb-4">
            What's Troubling You?
          </h2>
          <p className="text-sm text-charcoal/50 max-w-2xl mx-auto">
            Identify your concern and discover our specialized treatments designed for lasting results
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6 fade-in-up">
          {concerns.map((item, index) => (
            <div
              key={index}
              className="stagger-child group grid grid-cols-1 sm:grid-cols-[1fr_1fr] bg-[#F5E6D8] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl m-3">
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.imgLabel}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gold/10 via-gold/5 to-transparent flex items-center justify-center border border-gold/10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.08)_0%,transparent_70%)]" />
                    <div className="text-center text-charcoal/20 relative z-10">
                      <div className="w-14 h-14 mx-auto mb-2 rounded-full bg-gold/5 flex items-center justify-center">
                        <span className="text-2xl text-gold/40">✦</span>
                      </div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-charcoal/30">{item.imgLabel}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center pr-6 py-6">
                <h3 className="font-sans text-base md:text-lg font-bold text-charcoal mb-2 uppercase leading-tight">
                  {item.title}
                </h3>
                <p className="text-[13px] text-charcoal/50 leading-[1.6] mb-4">
                  {item.desc}
                </p>
                <p className="text-[14px] font-semibold text-[#D4764E] mb-4">
                  {item.offer}
                </p>
                <a
                  href="#book"
                  className="inline-flex items-center justify-center px-6 py-3 bg-charcoal/80 text-white text-[11px] font-semibold uppercase tracking-[0.15em] rounded-lg hover:bg-charcoal transition-colors duration-300 self-start"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
