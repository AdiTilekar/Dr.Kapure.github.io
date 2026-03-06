import { MapPin, Clock, Phone, Mail, ArrowRight, Instagram, Youtube } from 'lucide-react';

const locations = [
  {
    name: 'Pune (Pimpri Chinchwad)',
    address: 'Shivaji Park Trail, Sambhajinagar, Chinchwad, Pune, Vitthal Nagar, Maharashtra 411019',
    phone: '+91 832 946 7612',
  },
];

const hours = [
  { day: 'Monday — Friday', time: '10:00 AM — 7:00 PM' },
  { day: 'Saturday', time: '10:00 AM — 5:00 PM' },
  { day: 'Sunday', time: 'By Appointment Only' },
];

const quickLinks = [
  'Skin Treatments',
  'Hair Restoration',
  'Laser Services',
  'Pre-Wedding Packages',
  'About Dr. Kapure',
  'Book Appointment',
];

export default function Footer() {
  return (
    <footer id="book">
      {/* Newsletter CTA Band */}
      <div className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-serif text-2xl lg:text-3xl text-white font-medium mb-2">
                Start Your Skin Journey Today
              </h3>
              <p className="text-[13px] text-white/40">
                Book a free consultation and discover your personalized treatment plan
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#book"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-charcoal text-[11px] font-semibold uppercase tracking-[0.15em] hover:bg-gold-light transition-all duration-300 group"
              >
                Book Free Consultation
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="tel:+918329467612"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/15 text-white text-[11px] font-semibold uppercase tracking-[0.15em] hover:border-gold hover:text-gold transition-all duration-300"
              >
                <Phone size={14} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img 
                  src="/images/logo.png" 
                  alt="Dr. Kapure's Skin Clinic" 
                  className="h-14 w-auto"
                />
                <div className="leading-tight">
                  <div className="font-serif text-xl font-semibold tracking-tight text-white">
                    Dr.Kapure's
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-gold/80 font-medium">
                    Skin Clinic
                  </div>
                </div>
              </div>
              <p className="text-[13px] text-white/35 leading-relaxed mb-6 max-w-xs">
                Where science meets beauty. Premium dermatological care for skin
                that radiates confidence.
              </p>
              <div className="flex items-center gap-2.5">
                {[
                  { Icon: Mail, href: 'mailto:hello@drkapureskin.in' },
                  { Icon: Phone, href: 'tel:+918329467612' },
                  { Icon: Instagram, href: '#' },
                  { Icon: Youtube, href: '#' },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-9 h-9 border border-white/[0.08] rounded-full flex items-center justify-center hover:border-gold hover:text-gold hover:bg-gold/[0.05] transition-all duration-300 text-white/40"
                  >
                    <Icon size={14} strokeWidth={1.3} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-white/35 hover:text-gold transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location */}
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-6">
                Location
              </h4>
              <div className="space-y-5">
                {locations.map((loc) => (
                  <div key={loc.name}>
                    <div className="flex items-start gap-2 mb-1">
                      <MapPin size={13} className="text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-[13px] font-medium text-white/60">
                        {loc.name}
                      </span>
                    </div>
                    <p className="text-[12px] text-white/30 leading-relaxed ml-[21px]">
                      {loc.address}
                    </p>
                    <p className="text-[12px] text-white/30 mt-0.5 ml-[21px]">
                      {loc.phone}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Operating Hours */}
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-6">
                Operating Hours
              </h4>
              <div className="space-y-3.5">
                {hours.map((item) => (
                  <div key={item.day} className="flex items-start gap-2">
                    <Clock size={13} className="text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[13px] text-white/60">{item.day}</p>
                      <p className="text-[12px] text-white/30">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-white/25">
              &copy; {new Date().getFullYear()} Dr.Kapure&#39;s Skin Clinic. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[11px] text-white/25 hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[11px] text-white/25 hover:text-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
