import { Stethoscope, Award, Calendar, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const credentials = [
  { Icon: Stethoscope, text: 'Skin Specialist' },
  { Icon: Award, text: 'Certified in Aesthetic & Laser Medicine' },
  { Icon: Calendar, text: '15+ Years of Experience' },
  { Icon: TrendingUp, text: 'Thousands of Successful Treatments' },
];

export default function DoctorProfile() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-sage-light/[0.12] to-sage-light/[0.18] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-gold/[0.04] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Circular Portrait */}
          <div className="fade-in-up relative flex justify-center">
            {/* Decorative outer ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[420px] h-[420px] md:w-[520px] md:h-[520px] rounded-full border border-charcoal/[0.06]" />
            </div>

            {/* Animated Golden Ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] animate-spin-slow" style={{ animationDuration: '20s' }}>
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#C9A96E', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#D4A5A5', stopOpacity: 0.8 }} />
                    <stop offset="100%" style={{ stopColor: '#C9A96E', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <circle
                  cx="50%"
                  cy="50%"
                  r="48%"
                  fill="none"
                  stroke="url(#goldGradient)"
                  strokeWidth="2"
                  strokeDasharray="12 8"
                  className="animate-pulse-subtle"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="48%"
                  fill="none"
                  stroke="url(#goldGradient)"
                  strokeWidth="1"
                  strokeDasharray="6 14"
                  opacity="0.5"
                  className="animate-reverse-spin"
                  style={{ animationDuration: '15s' }}
                />
              </svg>
            </div>

            <div className="w-[380px] h-[380px] md:w-[480px] md:h-[480px] rounded-full bg-gradient-to-br from-gold/10 via-gold/5 to-transparent flex items-center justify-center overflow-hidden relative ring-4 ring-gold/10 shadow-2xl shadow-gold/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.15)_0%,transparent_70%)]" />
              <div className="text-center text-charcoal/20 relative z-10">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gold/5 border-2 border-gold/15 flex items-center justify-center">
                  <span className="text-3xl text-gold/40">✦</span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/25">Dr. Smita Kapure</p>
                <p className="text-[10px] mt-2 text-charcoal/15">Professional Portrait</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="fade-in-up">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold mb-5">
              Meet the Expert
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium leading-[1.15] text-charcoal mb-8">
              Meet Dr. Smita Kapure —<br />Pune&apos;s Trusted Skin Specialist
            </h2>

            {/* Credential Pills */}
            <div className="space-y-3 mb-10">
              {credentials.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white border border-gray-200/60 rounded-2xl px-5 py-4 hover:border-gold/30 hover:shadow-md hover:shadow-gold/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/[0.08] flex items-center justify-center flex-shrink-0">
                    <item.Icon size={18} strokeWidth={1.5} className="text-gold" />
                  </div>
                  <span className="text-[14px] font-medium text-charcoal">{item.text}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-gold hover:text-gold-light transition-colors duration-300 group"
            >
              Know More About Dr. Smita Kapure
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
