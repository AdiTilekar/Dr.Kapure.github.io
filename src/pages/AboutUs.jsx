import { useEffect } from 'react';
import {
  Heart,
  Shield,
  Eye,
  Target,
  Award,
  GraduationCap,
  BookOpen,
  Stethoscope,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Clock,
  MapPin,
} from 'lucide-react';

/* ── data ──────────────────────────────────────────────── */

const timeline = [
  { year: '2008', title: 'The Beginning', desc: 'Dr. Smita Kapure completed her MD in Dermatology and began her clinical practice with a vision to bridge the gap between medical dermatology and aesthetic care.' },
  { year: '2012', title: 'Advanced Fellowship', desc: 'Pursued advanced training in laser dermatology and cosmetic procedures from internationally acclaimed institutions.' },
  { year: '2015', title: 'Clinic Founded', desc: "Dr.Kapure's Skin Clinic was established, bringing world-class dermatological care to patients with a focus on evidence-based treatments." },
  { year: '2018', title: 'Technology Upgrade', desc: 'Invested in state-of-the-art equipment including FDA-approved lasers, advanced diagnostic tools, and premium treatment devices.' },
  { year: '2022', title: '10,000+ Patients', desc: 'Crossed the milestone of 10,000 happy patients, reinforcing our commitment to excellence and patient satisfaction.' },
  { year: '2025', title: 'Expanding Horizons', desc: 'Continuing to pioneer new treatments, expand services, and set benchmarks in dermatological care and aesthetic excellence.' },
];

const values = [
  { Icon: Heart, title: 'Patient First', desc: 'Every decision we make is guided by what is best for our patients — their comfort, safety, and results.' },
  { Icon: Shield, title: 'Evidence-Based', desc: 'We only recommend treatments backed by clinical research and proven efficacy, never trends or gimmicks.' },
  { Icon: Eye, title: 'Transparency', desc: 'Honest consultations, clear pricing, and realistic expectations — because trust is the foundation of care.' },
  { Icon: Target, title: 'Precision', desc: 'From diagnosis to treatment, we combine advanced technology with meticulous attention to deliver optimal outcomes.' },
];

const facilities = [
  { Icon: Zap, title: 'FDA-Approved Lasers', desc: 'Latest generation laser systems for hair removal, skin resurfacing, and pigmentation treatments.' },
  { Icon: Sparkles, title: 'Advanced Diagnostics', desc: 'High-resolution dermatoscopy and skin analysis technology for accurate diagnosis.' },
  { Icon: Shield, title: 'Sterile Environment', desc: 'Hospital-grade sterilization protocols ensuring the highest standards of hygiene and safety.' },
  { Icon: Star, title: 'Comfort-Centric Design', desc: 'Thoughtfully designed spaces that feel calming and luxurious, reducing treatment anxiety.' },
];

const credentials = [
  { Icon: GraduationCap, text: 'MBBS, MD (Dermatology, Venereology & Leprosy)' },
  { Icon: BookOpen, text: '15+ Years of Clinical & Aesthetic Experience' },
  { Icon: Award, text: 'Fellow — American Academy of Dermatology' },
  { Icon: Stethoscope, text: 'Member — Indian Association of Dermatologists (IADVL)' },
  { Icon: Award, text: 'Certified in Advanced Laser & Cosmetic Dermatology' },
  { Icon: Users, text: '10,000+ Patients Successfully Treated' },
];

const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '10K+', label: 'Happy Patients' },
  { value: '25+', label: 'Advanced Treatments' },
  { value: '98%', label: 'Patient Satisfaction' },
];

/* ── component ─────────────────────────────────────────── */

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ─── HERO BANNER ────────────────────────────────── */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 bg-charcoal text-white overflow-hidden">
        {/* texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)', backgroundSize: '30px 30px' }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-gold/[0.06] to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-gold/[0.04] to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="fade-in-up text-[11px] font-semibold uppercase tracking-[0.3em] text-gold mb-6">
            Our Story
          </p>
          <h1 className="fade-in-up font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] max-w-3xl mx-auto mb-6">
            Where Science Meets{' '}
            <span className="text-gradient">Compassion</span>
          </h1>
          <p className="fade-in-up text-[15px] md:text-base text-white/45 leading-[1.8] max-w-2xl mx-auto mb-10">
            At Dr.Kapure&apos;s Skin Clinic, we believe that healthy skin is the foundation
            of confidence. For over 15 years, we have been dedicated to providing
            world-class dermatological care rooted in science, driven by empathy, and
            delivered with precision.
          </p>

          {/* Stats Strip */}
          <div className="fade-in-up grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto pt-10 border-t border-white/[0.08]">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-serif text-3xl md:text-4xl font-semibold text-gold">{s.value}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/35 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MISSION & VALUES ───────────────────────────── */}
      <section className="py-24 lg:py-32 bg-off-white relative overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-gold/[0.04] blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="fade-in-up text-[11px] font-semibold uppercase tracking-[0.3em] text-gold mb-4">
              Our Philosophy
            </p>
            <h2 className="fade-in-up font-serif text-3xl md:text-4xl font-medium leading-[1.15] text-charcoal mb-4">
              Built on Values, Driven by Results
            </h2>
            <p className="fade-in-up text-[14px] text-charcoal/45 max-w-xl mx-auto leading-[1.8]">
              Our mission is to deliver personalised, evidence-based skin care
              that empowers every patient to look and feel their best.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="fade-in-up stagger-child bg-white border border-gray-100 p-8 group hover:border-gold/30 hover:shadow-lg hover:shadow-gold/[0.04] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-gold/[0.08] flex items-center justify-center mb-5 group-hover:bg-gold/[0.15] transition-colors duration-300">
                  <v.Icon size={20} strokeWidth={1.3} className="text-gold" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">{v.title}</h3>
                <p className="text-[13px] text-charcoal/45 leading-[1.7]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DR. PROFILE — DETAILED ─────────────────────── */}
      <section className="py-24 lg:py-32 bg-cream relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            {/* Portrait */}
            <div className="fade-in-up lg:col-span-5 relative">
              <div className="absolute -bottom-5 -left-5 w-full h-full border border-gold/15 rounded-[2px]" />
              <div className="absolute -top-3 -right-3 w-28 h-28 border border-gold/10 rounded-full" />

              <div className="relative aspect-[4/5] bg-off-white border border-gray-200/80 flex items-center justify-center overflow-hidden rounded-[2px]">
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent pointer-events-none" />
                <div className="text-center text-charcoal/15 relative z-10">
                  <div className="w-20 h-20 mx-auto mb-4 border border-dashed border-charcoal/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">✦</span>
                  </div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em]">Doctor Portrait</p>
                  <p className="text-xs mt-1.5 text-charcoal/10">Professional Headshot</p>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -right-2 lg:-right-6 bottom-12 bg-white shadow-xl shadow-black/[0.05] border border-gray-100 px-5 py-4 rounded-[2px]">
                <p className="text-2xl font-serif font-semibold text-gold">15+</p>
                <p className="text-[9px] uppercase tracking-[0.2em] text-charcoal/35 mt-0.5">Years Practice</p>
              </div>
            </div>

            {/* Content */}
            <div className="fade-in-up lg:col-span-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold mb-5">
                The Doctor Behind the Vision
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium leading-[1.15] text-charcoal mb-2">
                Dr. Smita Kapure
              </h2>
              <p className="text-[13px] text-gold/80 uppercase tracking-[0.15em] font-medium mb-6">
                Consultant Dermatologist &amp; Aesthetic Physician
              </p>

              <div className="space-y-4 mb-8">
                <p className="text-[14px] text-charcoal/50 leading-[1.8]">
                  Dr. Smita Kapure is a highly accomplished dermatologist with over
                  15 years of experience in clinical dermatology, cosmetic
                  dermatology, and aesthetic medicine. Her journey began with a
                  deep-rooted passion for understanding skin at a cellular level,
                  which led her to pursue advanced training from some of the most
                  prestigious institutions in India and abroad.
                </p>
                <p className="text-[14px] text-charcoal/50 leading-[1.8]">
                  Known for her meticulous approach and compassionate care, Dr. Kapure
                  combines cutting-edge technology with a personalised treatment
                  philosophy. She believes that every patient&apos;s skin tells a unique
                  story, and her role is to listen, diagnose, and craft a treatment
                  plan that delivers transformative results.
                </p>
                <p className="text-[14px] text-charcoal/50 leading-[1.8]">
                  Beyond her clinical practice, Dr. Kapure is an active contributor
                  to dermatological research, regularly presents at national and
                  international conferences, and is committed to mentoring the next
                  generation of dermatologists.
                </p>
              </div>

              {/* Credentials */}
              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {credentials.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 border border-gold/20 rounded-full flex items-center justify-center flex-shrink-0 bg-gold/[0.04]">
                      <item.Icon size={14} strokeWidth={1.3} className="text-gold" />
                    </div>
                    <span className="text-[12px] text-charcoal/55 leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>

              <a
                href="#book"
                className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-white text-[11px] font-semibold uppercase tracking-[0.15em] hover:bg-gold hover:text-charcoal transition-all duration-300 group"
              >
                Book Consultation with Dr. Kapure
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── JOURNEY TIMELINE ───────────────────────────── */}
      <section className="py-24 lg:py-32 bg-off-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="fade-in-up text-[11px] font-semibold uppercase tracking-[0.3em] text-gold mb-4">
              Our Journey
            </p>
            <h2 className="fade-in-up font-serif text-3xl md:text-4xl font-medium leading-[1.15] text-charcoal">
              Milestones That Define Us
            </h2>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2" />

            <div className="space-y-0">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div key={i} className="fade-in-up relative flex items-start" style={{ minHeight: '180px' }}>
                    {/* Left content */}
                    <div className={`w-1/2 ${isLeft ? 'pr-16 text-right' : ''}`}>
                      {isLeft && (
                        <div className="pt-2">
                          <p className="text-gold font-serif text-2xl font-semibold mb-1">{item.year}</p>
                          <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
                          <p className="text-[13px] text-charcoal/45 leading-[1.7]">{item.desc}</p>
                        </div>
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-off-white z-10 mt-3" />

                    {/* Right content */}
                    <div className={`w-1/2 ${!isLeft ? 'pl-16' : ''}`}>
                      {!isLeft && (
                        <div className="pt-2">
                          <p className="text-gold font-serif text-2xl font-semibold mb-1">{item.year}</p>
                          <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
                          <p className="text-[13px] text-charcoal/45 leading-[1.7]">{item.desc}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-gold/20" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div key={i} className="fade-in-up relative">
                  <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full bg-gold border-3 border-off-white z-10" />
                  <p className="text-gold font-serif text-xl font-semibold mb-1">{item.year}</p>
                  <h3 className="font-serif text-base font-semibold text-charcoal mb-1.5">{item.title}</h3>
                  <p className="text-[13px] text-charcoal/45 leading-[1.7]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLINIC & FACILITIES ─────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#111111] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)', backgroundSize: '30px 30px' }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-gold/[0.06] to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <p className="fade-in-up text-[11px] font-semibold uppercase tracking-[0.3em] text-gold mb-5">
                Our Clinic
              </p>
              <h2 className="fade-in-up font-serif text-3xl md:text-4xl font-medium leading-[1.15] mb-6">
                A Space Designed for Healing
              </h2>
              <p className="fade-in-up text-[14px] text-white/40 leading-[1.8] mb-10">
                Our clinic is thoughtfully designed to create a serene, welcoming
                environment where patients feel at ease from the moment they walk
                in. Every element — from the ambient lighting to the state-of-the-art
                treatment suites — reflects our commitment to premium care.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {facilities.map((f, i) => (
                  <div key={i} className="fade-in-up stagger-child">
                    <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-3">
                      <f.Icon size={18} strokeWidth={1.3} className="text-gold" />
                    </div>
                    <h3 className="font-serif text-base font-semibold mb-1.5">{f.title}</h3>
                    <p className="text-[12px] text-white/35 leading-[1.7]">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Placeholder Grid */}
            <div className="fade-in-up grid grid-cols-2 gap-4">
              {['Reception', 'Treatment Suite', 'Consultation Room', 'Laser Room'].map((label, i) => (
                <div
                  key={i}
                  className={`relative bg-white/[0.03] border border-white/[0.06] flex items-center justify-center overflow-hidden rounded-[2px] ${
                    i === 0 ? 'aspect-[4/3] col-span-2' : 'aspect-square'
                  }`}
                >
                  <div className="text-center text-white/15">
                    <span className="text-xl mb-1 block">✦</span>
                    <p className="text-[10px] uppercase tracking-[0.2em]">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ──────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-cream relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="fade-in-up text-[11px] font-semibold uppercase tracking-[0.3em] text-gold mb-4">
                Why Us
              </p>
              <h2 className="fade-in-up font-serif text-3xl md:text-4xl font-medium leading-[1.15] text-charcoal mb-6">
                The Dr.Kapure&apos;s Difference
              </h2>
              <p className="fade-in-up text-[14px] text-charcoal/45 leading-[1.8] mb-8">
                Choosing the right dermatologist is a decision that impacts your skin,
                your confidence, and your well-being. Here is what sets us apart from
                the rest.
              </p>

              <div className="space-y-5">
                {[
                  'Personalised treatment plans — never one-size-fits-all',
                  'Only FDA-approved, clinically proven technologies',
                  'Transparent pricing with no hidden costs',
                  'Follow-up care included with every treatment',
                  'Warm, judgement-free environment for every patient',
                  'Doctor-led consultations — not delegated to assistants',
                ].map((text, i) => (
                  <div key={i} className="fade-in-up flex items-start gap-3">
                    <CheckCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-[13px] text-charcoal/55 leading-[1.6]">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Visual / Testimonial Card */}
            <div className="fade-in-up relative">
              <div className="bg-off-white border border-gray-100 p-10 lg:p-12">
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="font-serif text-lg md:text-xl italic text-charcoal/70 leading-[1.7] mb-6">
                  &ldquo;Dr. Kapure changed my relationship with my skin. For the first
                  time in years, I feel confident without makeup. The entire
                  experience — from consultation to follow-up — was exceptional.&rdquo;
                </p>
                <div>
                  <p className="text-[13px] font-semibold text-charcoal">Sneha R.</p>
                  <p className="text-[11px] text-charcoal/35 uppercase tracking-wider mt-0.5">
                    Patient since 2019
                  </p>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/15 rounded-[2px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── VISIT CTA ──────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)', backgroundSize: '30px 30px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.04] rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="fade-in-up text-[11px] font-semibold uppercase tracking-[0.3em] text-gold mb-5">
            Visit Us
          </p>
          <h2 className="fade-in-up font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] mb-5">
            Begin Your Skin Transformation
          </h2>
          <p className="fade-in-up text-[14px] text-white/40 leading-[1.8] max-w-xl mx-auto mb-10">
            Take the first step towards healthier, radiant skin. Book a personalised
            consultation with Dr. Kapure today and experience the difference that
            expertise and care can make.
          </p>

          <div className="fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#book"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-charcoal text-[11px] font-semibold uppercase tracking-[0.15em] hover:bg-gold-light transition-all duration-300 group"
            >
              Book Free Consultation
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="tel:+918329467612"
              className="inline-flex items-center gap-2 px-10 py-4 border border-white/15 text-white text-[11px] font-semibold uppercase tracking-[0.15em] hover:border-gold hover:text-gold transition-all duration-300"
            >
              Call +91 832 946 7612
            </a>
          </div>

          {/* Location hint */}
          <div className="fade-in-up flex items-center justify-center gap-2 mt-10 text-white/25">
            <MapPin size={14} className="text-gold/50" />
            <span className="text-[11px] uppercase tracking-[0.15em]">
              Pimpri Chinchwad, Pune
            </span>
            <span className="mx-2 text-white/10">|</span>
            <Clock size={14} className="text-gold/50" />
            <span className="text-[11px] uppercase tracking-[0.15em]">
              Mon – Sat: 10 AM – 7 PM
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
