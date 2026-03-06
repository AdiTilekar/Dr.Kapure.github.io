import { useState } from 'react';
import { ChevronDown, Phone, ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: 'How do I know which treatment is right for me?',
    answer:
      "Every journey at Dr.Kapure's Skin Clinic begins with a comprehensive skin analysis and one-on-one consultation with Dr. Kapure. Based on your skin type, concerns, and goals, we design a personalized treatment plan.",
  },
  {
    question: 'Are the treatments painful?',
    answer:
      'Most of our treatments are minimally invasive with little to no downtime. We use advanced numbing techniques and the latest devices to ensure your comfort throughout the procedure.',
  },
  {
    question: 'How many sessions will I need?',
    answer:
      'The number of sessions varies depending on the treatment and your individual goals. During your consultation, Dr. Kapure will provide a clear treatment timeline with expected results at each stage.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'We request a minimum of 24 hours notice for cancellations or rescheduling. This helps us accommodate all our patients effectively and ensures you get the best possible care.',
  },
  {
    question: 'Do you offer financing or payment plans?',
    answer:
      'Yes, we offer flexible payment options including EMI plans for comprehensive treatment packages. Our team will walk you through all available options during your visit.',
  },
  {
    question: 'Is there any downtime after laser treatments?',
    answer:
      'Downtime is minimal for most laser procedures. You may experience mild redness or sensitivity for 24-48 hours. We provide detailed aftercare instructions tailored to your specific treatment.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left — CTA Panel */}
          <div className="lg:col-span-4 fade-in-up">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold mb-4">
              Have Questions?
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-charcoal mb-4 leading-[1.1]">
              We&#39;re Here<br />to Help
            </h2>
            <p className="text-sm text-charcoal/45 leading-relaxed mb-8">
              Can&#39;t find your answer? Our team is happy to assist you with any queries about our treatments.
            </p>

            <div className="space-y-4">
              <a
                href="#book"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-charcoal text-white text-[11px] font-semibold uppercase tracking-[0.15em] hover:bg-gold transition-all duration-300 group"
              >
                Book Free Consultation
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="tel:+918329467612"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 border border-charcoal/15 text-charcoal text-[11px] font-semibold uppercase tracking-[0.15em] hover:border-gold hover:text-gold transition-all duration-300"
              >
                <Phone size={14} />
                Call Us Directly
              </a>
            </div>
          </div>

          {/* Right — Accordion */}
          <div className="lg:col-span-8 fade-in-up">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border-b border-gray-200/80 ${index === 0 ? 'border-t' : ''}`}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <span className="text-[11px] font-semibold text-gold/50 font-serif">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="font-serif text-[17px] text-charcoal group-hover:text-gold transition-colors duration-300">
                        {faq.question}
                      </span>
                    </div>
                    <div className={`w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === index ? 'bg-gold border-gold' : 'group-hover:border-gold'}`}>
                      <ChevronDown
                        size={14}
                        className={`transition-all duration-300 ${
                          openIndex === index ? 'rotate-180 text-white' : 'text-charcoal/40'
                        }`}
                      />
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openIndex === index ? 'max-h-60 pb-6' : 'max-h-0'
                    }`}
                  >
                    <p className="text-[13px] text-charcoal/45 leading-[1.8] pl-9">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
