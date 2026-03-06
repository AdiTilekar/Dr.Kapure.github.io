import { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(() => setShowTooltip(false), 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip */}
        <div
          className={`absolute bottom-full right-0 mb-3 bg-white shadow-xl shadow-charcoal/10 border border-gray-100 px-4 py-2.5 rounded-lg whitespace-nowrap transition-all duration-500 ${
            showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          <p className="text-[12px] font-medium text-charcoal">Chat with us!</p>
          <p className="text-[10px] text-charcoal/40">Quick replies guaranteed</p>
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45" />
        </div>

        <a
          href="https://wa.me/918329467612"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30 hover:scale-110 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
          <MessageCircle size={24} className="text-white relative z-10" fill="white" />
        </a>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-7 z-50 w-10 h-10 bg-charcoal/80 backdrop-blur-sm text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gold transition-all duration-300 ${
          showScroll
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} />
      </button>
    </>
  );
}
