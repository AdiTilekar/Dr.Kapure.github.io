import { Calendar, Clock, MapPin, Gift, X } from 'lucide-react';
import { useState, useEffect } from 'react';

// ⚠️ EVENT CONFIGURATION - Set to false to hide the popup ⚠️
const SHOW_EVENT_POPUP = true;

// Event Details - Edit these as needed
const EVENT_CONFIG = {
  title: "Free Skin & Disease Diagnosis Camp",
  subtitle: "केस विकार व त्वचा रोग निदान शिबिर",
  date: "Today - Saturday, March 7, 2026",
  dateMarathi: "दिनांक शनिवार ०७ मार्च २०२६ रोजी सा. १० ते सायं ५ वाजे पर्यंत",
  time: "10:00 AM to 5:00 PM",
  location: "Dr. Kapure's Clinic, Sector 18, Near Shivaji Park, Sambaji Nagar, Chinchwad, Pune - 411019",
  offer: "Free Consultation Worth ₹500",
  description: "Walk-in for complimentary skin analysis, personalized treatment recommendations, and special event-day discounts!",
};

export default function EventBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (SHOW_EVENT_POPUP) {
      // Show popup after a short delay (500ms) for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Don't render if configuration is disabled
  if (!SHOW_EVENT_POPUP) return null;

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsVisible(false)}
      />

      {/* Popup Modal */}
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[95%] max-w-4xl max-h-[90vh] overflow-y-auto transition-all duration-500 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative bg-gradient-to-br from-white via-[#FFF5F0] to-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-charcoal/10 hover:bg-charcoal/20 transition-all duration-300 group"
            aria-label="Close popup"
          >
            <X size={24} className="text-charcoal group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Header Banner */}
          <div className="relative bg-gradient-to-r from-[#D4A5A5] via-[#C9A96E] to-[#D4A5A5] px-6 sm:px-10 py-8 sm:py-10 text-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.8)_0%,transparent_50%)] animate-pulse" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.8)_0%,transparent_50%)] animate-pulse" style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
            </div>

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full mb-4 animate-bounce">
                <Gift size={18} className="text-white" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">Today's Special Event</span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
                {EVENT_CONFIG.title}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90 mb-4">
                {EVENT_CONFIG.subtitle}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 sm:px-10 py-8 sm:py-10">
            {/* Description */}
            <p className="text-base sm:text-lg text-charcoal/70 text-center mb-8 leading-relaxed max-w-2xl mx-auto">
              {EVENT_CONFIG.description}
            </p>

            {/* Event Details Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 bg-gradient-to-br from-[#D4A5A5]/10 to-[#C9A96E]/10 rounded-2xl p-5 border border-gold/20">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A5A5] to-[#C9A96E] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Calendar size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-charcoal/50 uppercase tracking-wide mb-1 font-semibold">Date & Time</p>
                  <p className="text-sm font-bold text-charcoal mb-1">{EVENT_CONFIG.date}</p>
                  <p className="text-xs text-charcoal/60">{EVENT_CONFIG.dateMarathi}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-gradient-to-br from-[#D4A5A5]/10 to-[#C9A96E]/10 rounded-2xl p-5 border border-gold/20">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A5A5] to-[#C9A96E] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Clock size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-charcoal/50 uppercase tracking-wide mb-1 font-semibold">Timing</p>
                  <p className="text-sm font-bold text-charcoal">{EVENT_CONFIG.time}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-gradient-to-br from-[#D4A5A5]/10 to-[#C9A96E]/10 rounded-2xl p-5 border border-gold/20 sm:col-span-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A5A5] to-[#C9A96E] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-charcoal/50 uppercase tracking-wide mb-1 font-semibold">Location</p>
                  <p className="text-sm font-bold text-charcoal">{EVENT_CONFIG.location}</p>
                </div>
              </div>
            </div>

            {/* Offer Highlight */}
            <div className="bg-gradient-to-r from-[#D4A5A5]/20 via-[#C9A96E]/20 to-[#D4A5A5]/20 rounded-2xl p-6 text-center mb-8 border-2 border-dashed border-gold/40">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4A5A5] to-[#C9A96E] mx-auto mb-3 flex items-center justify-center shadow-lg">
                <Gift size={32} className="text-white" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-2">
                {EVENT_CONFIG.offer}
              </h3>
              <p className="text-sm text-charcoal/60">
                Limited slots available • First come, first served
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="tel:+918329467612"
                onClick={() => setIsVisible(false)}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#D4A5A5] to-[#C9A96E] text-white text-sm sm:text-base font-bold uppercase tracking-wider rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>📞</span> Call Now
              </a>
              
              <a
                href="https://wa.me/918329467612?text=Hi, I want to book for today's free consultation event"
                onClick={() => setIsVisible(false)}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] text-white text-sm sm:text-base font-bold uppercase tracking-wider rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>💬</span> WhatsApp
              </a>
            </div>

            <p className="text-xs text-center text-charcoal/40 mt-6 italic">
              *शिबिराचा लाभ घेण्यासाठी आजच संपर्क करा
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
