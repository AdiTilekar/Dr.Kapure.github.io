import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '/about', isRoute: true },
  { label: 'Skin', href: '#skin', isRoute: false },
  { label: 'Hair', href: '#hair', isRoute: false },
  { label: 'Laser', href: '#laser', isRoute: false },
  { label: 'Pre-Wedding', href: '#prewedding', isRoute: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Nav */}
      <nav
        className={`transition-all duration-500 ${
          scrolled
            ? 'bg-white/98 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-gray-100/80'
            : 'bg-white/70 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[88px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/images/logo.png" 
                alt="Dr. Kapure's Skin Clinic" 
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="leading-tight">
                <div className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-charcoal transition-colors group-hover:text-gold">
                  Dr.Kapure's
                </div>
                <div className="text-[11px] md:text-xs uppercase tracking-[0.28em] text-gold font-medium">
                  Skin Clinic
                </div>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`relative text-[13px] font-medium tracking-wide uppercase transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:bg-gold after:transition-all after:duration-300 ${
                      location.pathname === link.href
                        ? 'text-charcoal after:w-full'
                        : 'text-charcoal/60 hover:text-charcoal after:w-0 hover:after:w-full'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="relative text-[13px] font-medium tracking-wide text-charcoal/60 hover:text-charcoal transition-colors duration-300 uppercase after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+918329467612" className="text-[13px] font-medium text-charcoal/60 hover:text-gold transition-colors duration-300">
                Call Us
              </a>
              <a
                href="#book"
                className="inline-flex items-center px-7 py-2.5 bg-charcoal text-white text-[11px] font-semibold uppercase tracking-[0.15em] hover:bg-gold transition-all duration-300 pulse-glow"
              >
                Book Consultation
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-charcoal hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 transition-all duration-400 overflow-hidden ${
          mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-8 space-y-5">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-[13px] font-medium tracking-wide transition-colors uppercase ${
                  location.pathname === link.href ? 'text-gold' : 'text-charcoal/60 hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-[13px] font-medium tracking-wide text-charcoal/60 hover:text-gold transition-colors uppercase"
              >
                {link.label}
              </a>
            )
          )}
          <div className="pt-4 border-t border-gray-100">
            <a
              href="#book"
              onClick={() => setMobileOpen(false)}
              className="block text-center px-6 py-3.5 bg-charcoal text-white text-[11px] font-semibold uppercase tracking-[0.15em] hover:bg-gold transition-colors"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
