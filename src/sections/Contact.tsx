import { useEffect, useRef, useState } from 'react';
import { Send, Mail, CheckCircle, Loader2, Wrench, Zap, Globe, Code, FileText, Bot, Sparkles, TrendingUp, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [serviceFormState, setServiceFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [newsletterFormState, setNewsletterFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const serviceOptions = [
    { id: 'repair-24', label: 'Website Repair - 24hr Emergency', icon: <Wrench className="w-4 h-4" /> },
    { id: 'repair-48', label: 'Website Repair - 48hr Standard', icon: <Wrench className="w-4 h-4" /> },
    { id: 'repair-norush', label: 'Website Repair - No Rush', icon: <Wrench className="w-4 h-4" /> },
    { id: 'rejuvenate-seo', label: 'Website Rejuvenate - SEO', icon: <Zap className="w-4 h-4" /> },
    { id: 'rejuvenate-geo', label: 'Website Rejuvenate - GEO', icon: <Zap className="w-4 h-4" /> },
    { id: 'rejuvenate-ai', label: 'Website Rejuvenate - AI Search', icon: <Zap className="w-4 h-4" /> },
    { id: 'rejuvenate-backlinks', label: 'Website Rejuvenate - Backlinks', icon: <Zap className="w-4 h-4" /> },
    { id: 'landing-nav', label: 'Landing Page - Header/Footer Nav', icon: <Globe className="w-4 h-4" /> },
    { id: 'landing-cta', label: 'Landing Page - CTA Page', icon: <Globe className="w-4 h-4" /> },
    { id: 'landing-logo', label: 'Landing Page - Custom Logo', icon: <Globe className="w-4 h-4" /> },
    { id: 'landing-domain', label: 'Landing Page - Custom Domain', icon: <Globe className="w-4 h-4" /> },
    { id: 'landing-newsletter', label: 'Landing Page - Newsletter Form', icon: <Globe className="w-4 h-4" /> },
    { id: 'build-easy', label: 'Full Build - Easy Website', icon: <Code className="w-4 h-4" /> },
    { id: 'build-medium', label: 'Full Build - Medium Website', icon: <Code className="w-4 h-4" /> },
    { id: 'build-hard', label: 'Full Build - Harder Website', icon: <Code className="w-4 h-4" /> },
    { id: 'gas-sheets', label: 'Google Apps Script - Sheet Automation', icon: <FileText className="w-4 h-4" /> },
    { id: 'gas-full', label: 'Google Apps Script - Full Integration', icon: <FileText className="w-4 h-4" /> },
    { id: 'ai-agents', label: 'AI Integration - AI Agents', icon: <Bot className="w-4 h-4" /> },
    { id: 'ai-chatbot', label: 'AI Integration - Chatbots', icon: <Bot className="w-4 h-4" /> },
    { id: 'ai-answering', label: 'AI Integration - Answering Service', icon: <Bot className="w-4 h-4" /> },
    { id: 'ai-outreach', label: 'AI Integration - Text/Email Outreach', icon: <Bot className="w-4 h-4" /> },
    { id: 'ai-automation', label: 'AI Integration - Automation Workflows', icon: <Bot className="w-4 h-4" /> },
    { id: 'strategy-brand', label: 'Strategy - Brand Positioning', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'strategy-content', label: 'Strategy - Content Strategy', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'strategy-growth', label: 'Strategy - Growth Roadmap', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'seo-local', label: 'SEO/GEO - Local SEO Package', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'seo-geo', label: 'SEO/GEO - GEO Dominance', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'seo-complete', label: 'SEO/GEO - Complete Package', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'other-maintenance', label: 'Other - Website Maintenance', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'other-prompt', label: 'Other - Prompt Engineering', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'other-api', label: 'Other - API Integrations', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'other-ecommerce', label: 'Other - E-commerce Setup', icon: <MessageSquare className="w-4 h-4" /> },
  ];

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleServiceSubmit = (_e: React.FormEvent<HTMLFormElement>) => {
    setServiceFormState('submitting');
    // Formspree will handle the actual submission
    setTimeout(() => {
      setServiceFormState('success');
    }, 1500);
  };

  const handleNewsletterSubmit = (_e: React.FormEvent<HTMLFormElement>) => {
    setNewsletterFormState('submitting');
    // Formspree will handle the actual submission
    setTimeout(() => {
      setNewsletterFormState('success');
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-chaos-black"
    >
      {/* Header */}
      <div className="max-width section-padding mb-16">
        <div
          className={`flex items-center gap-4 mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          <div className="w-12 h-[2px] bg-chaos-neon" />
          <span className="font-mono text-sm text-chaos-neon tracking-widest">GET IN TOUCH</span>
        </div>
        
        <h2
          className={`heading-section text-chaos-offwhite mb-4 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Let's Build Something Together
        </h2>
        <p
          className={`text-chaos-grey max-w-xl transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Select the services you need or join the Signal-Stack family for updates, tips, and exclusive offers.
        </p>
      </div>

      {/* Forms Grid */}
      <div className="max-width section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Service Request Form */}
          <div
            className={`bg-chaos-gunmetal border-2 border-chaos-gunmetal p-6 lg:p-8 transition-all duration-700 hover:border-chaos-neon ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="w-6 h-6 text-chaos-neon" />
              <h3 className="font-mono font-bold text-xl text-chaos-offwhite">
                Service Request
              </h3>
            </div>

            {serviceFormState === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-chaos-neon mb-4" />
                <h4 className="font-mono font-bold text-lg text-chaos-offwhite mb-2">
                  Request Received!
                </h4>
                <p className="text-chaos-grey">
                  I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form 
                action="https://formspree.io/f/xdawppkw"
                method="POST"
                onSubmit={handleServiceSubmit}
                className="space-y-6"
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-mono text-sm text-chaos-grey mb-2">
                    Your Name <span className="text-chaos-neon">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-chaos-void border-2 border-chaos-gunmetal px-4 py-3 text-chaos-offwhite font-mono text-sm focus:border-chaos-neon focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-mono text-sm text-chaos-grey mb-2">
                    Email Address <span className="text-chaos-neon">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-chaos-void border-2 border-chaos-gunmetal px-4 py-3 text-chaos-offwhite font-mono text-sm focus:border-chaos-neon focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block font-mono text-sm text-chaos-grey mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-chaos-void border-2 border-chaos-gunmetal px-4 py-3 text-chaos-offwhite font-mono text-sm focus:border-chaos-neon focus:outline-none transition-colors"
                    placeholder="(828) 555-0123"
                  />
                </div>

                {/* Services Selection */}
                <div>
                  <label className="block font-mono text-sm text-chaos-grey mb-3">
                    Services Needed <span className="text-chaos-neon">*</span>
                  </label>
                  <input 
                    type="hidden" 
                    name="services" 
                    value={selectedServices.map(id => serviceOptions.find(s => s.id === id)?.label).join(', ')} 
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto p-2 bg-chaos-void border-2 border-chaos-gunmetal">
                    {serviceOptions.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => toggleService(service.id)}
                        className={`flex items-center gap-2 px-3 py-2 text-left font-mono text-xs transition-all ${
                          selectedServices.includes(service.id)
                            ? 'bg-chaos-neon text-chaos-black'
                            : 'bg-chaos-gunmetal text-chaos-grey hover:text-chaos-offwhite'
                        }`}
                      >
                        {service.icon}
                        <span className="truncate">{service.label}</span>
                      </button>
                    ))}
                  </div>
                  {selectedServices.length > 0 && (
                    <p className="mt-2 text-xs text-chaos-neon font-mono">
                      {selectedServices.length} service(s) selected
                    </p>
                  )}
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="notes" className="block font-mono text-sm text-chaos-grey mb-2">
                    Tell Me About Your Project / Problem <span className="text-chaos-neon">*</span>
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    required
                    rows={4}
                    className="w-full bg-chaos-void border-2 border-chaos-gunmetal px-4 py-3 text-chaos-offwhite font-mono text-sm focus:border-chaos-neon focus:outline-none transition-colors resize-none"
                    placeholder="Describe what you need help with, your current website URL (if applicable), timeline, budget range, etc."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={serviceFormState === 'submitting' || selectedServices.length === 0}
                  className="w-full btn-neon flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {serviceFormState === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Newsletter Form */}
          <div
            className={`bg-chaos-gunmetal border-2 border-chaos-gunmetal p-6 lg:p-8 transition-all duration-700 hover:border-chaos-cyan ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '450ms' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-chaos-cyan" />
              <h3 className="font-mono font-bold text-xl text-chaos-offwhite">
                Join Signal-Stack Family
              </h3>
            </div>

            {newsletterFormState === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle className="w-16 h-16 text-chaos-cyan mb-4" />
                <h4 className="font-mono font-bold text-lg text-chaos-offwhite mb-2">
                  Welcome to the Family!
                </h4>
                <p className="text-chaos-grey">
                  You'll receive updates, tips, and exclusive offers.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-chaos-grey mb-4">
                    Subscribe to get:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Weekly web development tips & tricks',
                      'AI automation insights and tutorials',
                      'Exclusive discounts on services',
                      'Early access to new offerings',
                      'SEO/GEO strategy updates',
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3 text-chaos-offwhite">
                        <div className="w-1.5 h-1.5 bg-chaos-cyan" />
                        <span className="font-mono text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <form 
                  action="https://formspree.io/f/xreyoobq"
                  method="POST"
                  onSubmit={handleNewsletterSubmit}
                  className="space-y-6"
                >
                  {/* Name */}
                  <div>
                    <label htmlFor="newsletter-name" className="block font-mono text-sm text-chaos-grey mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="newsletter-name"
                      name="name"
                      className="w-full bg-chaos-void border-2 border-chaos-gunmetal px-4 py-3 text-chaos-offwhite font-mono text-sm focus:border-chaos-cyan focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="newsletter-email" className="block font-mono text-sm text-chaos-grey mb-2">
                      Email Address <span className="text-chaos-cyan">*</span>
                    </label>
                    <input
                      type="email"
                      id="newsletter-email"
                      name="email"
                      required
                      className="w-full bg-chaos-void border-2 border-chaos-gunmetal px-4 py-3 text-chaos-offwhite font-mono text-sm focus:border-chaos-cyan focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Interests */}
                  <div>
                    <label className="block font-mono text-sm text-chaos-grey mb-3">
                      What are you interested in? (Optional)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {['Web Dev', 'AI/Automation', 'SEO/GEO', 'All Topics'].map((interest) => (
                        <label key={interest} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            name="interests"
                            value={interest}
                            className="w-4 h-4 accent-chaos-cyan bg-chaos-void border-chaos-gunmetal"
                          />
                          <span className="font-mono text-xs text-chaos-grey">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={newsletterFormState === 'submitting'}
                    className="w-full btn-cyan flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {newsletterFormState === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5" />
                        <span>Join Signal-Stack</span>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-chaos-grey text-center font-mono">
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              </>
            )}
          </div>

        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-px h-48 bg-gradient-to-b from-transparent via-chaos-neon/20 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-px h-32 bg-gradient-to-b from-transparent via-chaos-cyan/20 to-transparent" />
    </section>
  );
};

export default Contact;
