import { Calendar, Clock, MapPin, Gift, X } from 'lucide-react';
import { useState } from 'react';

// ⚠️ EVENT CONFIGURATION - Set to false to hide the banner ⚠️
const SHOW_EVENT_BANNER = true;

// Event Details - Edit these as needed
const EVENT_CONFIG = {
  title: "Free Skin & Disease Diagnosis Camp",
  date: "Today - Saturday, March 7, 2026",
  time: "10:00 AM to 5:00 PM",
  location: "Dr. Kapure's Clinic, Sector 18, Chinchwad, Pune",
  offer: "Free Consultation Worth ₹500",
  description: "Walk-in for complimentary skin analysis, personalized treatment recommendations, and special event-day discounts!",
};

export default function EventBanner() {
  const [isVisible, setIsVisible] = useState(true);

  // Don't render if configuration is disabled or user closed it
  if (!SHOW_EVENT_BANNER || !isVisible) return null;

  return (
    <section className="relative bg-gradient-to-r from-[#D4A5A5] via-[#C9A96E] to-[#D4A5A5] overflow-hidden mt-[88px]">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.8)_0%,transparent_50%)] animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.8)_0%,transparent_50%)] animate-pulse" style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-10">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 lg:top-6 lg:right-6 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300 group z-20"
          aria-label="Close banner"
        >
          <X size={18} className="text-white group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-8 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4 animate-bounce">
              <Gift size={16} className="text-white" />
              <span className="text-xs font-bold uppercase tracking-wider">Today's Special Event</span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
              {EVENT_CONFIG.title}
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl leading-relaxed">
              {EVENT_CONFIG.description}
            </p>

            {/* Event Details Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Calendar size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/70 uppercase tracking-wide mb-1">Date</p>
                  <p className="text-sm font-semibold text-white">{EVENT_CONFIG.date}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/70 uppercase tracking-wide mb-1">Timing</p>
                  <p className="text-sm font-semibold text-white">{EVENT_CONFIG.time}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 sm:col-span-2">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/70 uppercase tracking-wide mb-1">Location</p>
                  <p className="text-sm font-semibold text-white">{EVENT_CONFIG.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right CTA Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4A5A5] to-[#C9A96E] mx-auto mb-4 flex items-center justify-center">
              <Gift size={28} className="text-white" />
            </div>
            
            <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
              {EVENT_CONFIG.offer}
            </h3>
            
            <p className="text-sm text-charcoal/60 mb-6">
              Limited slots available. Walk-in today!
            </p>

            <div className="space-y-3">
              <a
                href="tel:+918329467612"
                className="block w-full px-6 py-4 bg-gradient-to-r from-[#D4A5A5] to-[#C9A96E] text-white text-sm font-bold uppercase tracking-wider rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Call Now: +91 83294 67612
              </a>
              
              <a
                href="https://wa.me/918329467612?text=Hi, I want to book for today's free consultation event"
                className="block w-full px-6 py-3 bg-charcoal/10 text-charcoal text-sm font-semibold rounded-xl hover:bg-charcoal/20 transition-colors duration-300"
              >
                WhatsApp to Confirm
              </a>
            </div>

            <p className="text-xs text-charcoal/40 mt-4 italic">
              *First come, first served basis
            </p>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </section>
  );
}
