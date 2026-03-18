import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Clock, Zap, Globe, Code, FileText, TrendingUp, MessageSquare, Bot, Sparkles } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  items: { title: string; description: string; price?: string }[];
  accent: 'neon' | 'cyan';
  delay: number;
}

const ServiceCard = ({ icon, title, items, accent, delay }: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const borderColor = accent === 'neon' ? 'hover:border-chaos-neon' : 'hover:border-chaos-cyan';
  const glowColor = accent === 'neon' ? 'group-hover:shadow-neon' : 'group-hover:shadow-cyan';
  const textColor = accent === 'neon' ? 'text-chaos-neon' : 'text-chaos-cyan';

  return (
    <div
      ref={cardRef}
      className={`group card-tactical p-6 lg:p-8 transition-all duration-700 ${borderColor} ${glowColor} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Icon */}
      <div className={`mb-6 ${textColor}`}>
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-mono font-bold text-xl lg:text-2xl text-chaos-offwhite mb-6">
        {title}
      </h3>

      {/* Items */}
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="group/item">
            <div className="flex items-start gap-3">
              <ArrowUpRight className={`w-4 h-4 mt-1 ${textColor} opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0`} />
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-mono font-semibold text-sm text-chaos-offwhite group-hover/item:text-chaos-neon transition-colors">
                    {item.title}
                  </h4>
                  {item.price && (
                    <span className={`font-mono text-xs ${textColor} whitespace-nowrap`}>
                      {item.price}
                    </span>
                  )}
                </div>
                <p className="text-sm text-chaos-grey mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Clock className="w-10 h-10" />,
      title: 'Website Repair',
      accent: 'neon' as const,
      items: [
        {
          title: '24 Hour Emergency Fix',
          description: 'Critical issues resolved within 24 hours. Priority support.',
          price: 'from $497'
        },
        {
          title: '48 Hour Standard Fix',
          description: 'Most repairs completed within 48 hours.',
          price: 'from $297'
        },
        {
          title: 'No Rush Repair',
          description: 'Flexible timeline for non-critical fixes.',
          price: 'from $147'
        },
      ],
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Website Rejuvenate',
      accent: 'cyan' as const,
      items: [
        {
          title: 'SEO Optimization',
          description: 'On-page SEO, meta tags, schema markup, speed optimization.',
          price: 'from $397'
        },
        {
          title: 'GEO (Generative Engine Opt.)',
          description: 'Optimize for ChatGPT, Perplexity, AI Overviews visibility.',
          price: '$350'
        },
        {
          title: 'AI Search Ranking',
          description: 'Structured data and content for AI search engines.',
          price: 'from $347'
        },
        {
          title: 'Backlink Strategy',
          description: 'Quality backlink acquisition and outreach.',
          price: 'from $597/mo'
        },
      ],
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Landing Page',
      accent: 'neon' as const,
      items: [
        {
          title: 'Header/Footer Navigation',
          description: 'Professional nav with your branding.',
          price: 'from $97'
        },
        {
          title: 'CTA Landing Page',
          description: 'High-converting single-page with strong call-to-action.',
          price: 'from $247'
        },
        {
          title: 'Custom Logo Design',
          description: 'Unique logo designed for your brand.',
          price: 'from $197'
        },
        {
          title: 'Custom Domain Setup',
          description: 'Your own [customdomain].pages.dev or custom domain.',
          price: 'from $47'
        },
        {
          title: 'Newsletter Form Integration',
          description: 'Email capture form connected to your provider.',
          price: 'from $67'
        },
      ],
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Website Full Builds',
      accent: 'cyan' as const,
      items: [
        {
          title: 'Easy Website',
          description: 'Landing Page + Home, About Us, Contact Us.',
          price: 'from $697'
        },
        {
          title: 'Medium Website',
          description: 'Easy + High-converting funnels with 2 lead gen forms.',
          price: '$500'
        },
        {
          title: 'Harder Website',
          description: 'Medium + Blog (3 articles), moving images, custom banner, SEO footer.',
          price: '$800'
        },
      ],
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Google App Script Automation',
      accent: 'neon' as const,
      items: [
        {
          title: 'Custom Sheet Automations',
          description: 'Automated data processing, formatting, and reporting.',
          price: 'from $197'
        },
        {
          title: 'Sheets + Webapp + App Script',
          description: 'Full integration between Google Sheets, web apps, and scripts.',
          price: 'from $497'
        },
        {
          title: 'Workflow Automation',
          description: 'Connect multiple Google Workspace apps seamlessly.',
          price: 'from $347'
        },
      ],
    },
    {
      icon: <Bot className="w-10 h-10" />,
      title: 'Custom AI Integration & Builds',
      accent: 'cyan' as const,
      items: [
        {
          title: 'AI Agents',
          description: 'Autonomous agents for specific business tasks.',
          price: 'From $500'
        },
        {
          title: 'AI Chatbots',
          description: 'Custom-trained chatbots for your website.',
          price: 'from $597'
        },
        {
          title: 'AI Answering Service',
          description: 'AI-powered phone answering and routing.',
          price: 'From $250/mo'
        },
        {
          title: 'AI Text/Email Outreach',
          description: 'Automated personalized outreach campaigns.',
          price: 'From $175/mo'
        },
        {
          title: 'AI Automation Workflows',
          description: 'End-to-end AI-powered business automation.',
          price: 'from $697'
        },
      ],
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: 'Strategic Content Brainstorming',
      accent: 'neon' as const,
      items: [
        {
          title: 'Brand Positioning Session',
          description: '1-hour strategy call to position your brand for growth.',
          price: '$100'
        },
        {
          title: 'Content Strategy Plan',
          description: '30-day content roadmap with topics and angles.',
          price: '$125'
        },
        {
          title: 'Growth Roadmap',
          description: 'Quarterly plan with actionable milestones.',
          price: 'From $250'
        },
      ],
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'SEO/GEO/AI Search Rankings',
      accent: 'cyan' as const,
      items: [
        {
          title: 'Local SEO Package',
          description: 'Google Business Profile, local citations, reviews strategy.',
          price: 'from $397/mo'
        },
        {
          title: 'GEO Dominance',
          description: 'Force your brand as the definitive answer on ChatGPT, Perplexity.',
          price: 'from $597/mo'
        },
        {
          title: 'Complete Search Package',
          description: 'SEO + GEO + AI Search optimization combined.',
          price: 'from $897/mo'
        },
      ],
    },
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: 'Additional Services',
      accent: 'neon' as const,
      items: [
        {
          title: 'Website Maintenance',
          description: 'Monthly updates, security, backups, support.',
          price: 'from $147/mo'
        },
        {
          title: 'Prompt Engineering',
          description: 'Custom prompts for your business use cases.',
          price: 'from $197'
        },
        {
          title: 'API Integrations',
          description: 'Connect third-party services to your site.',
          price: 'from $297'
        },
        {
          title: 'E-commerce Setup',
          description: 'Product pages, cart, checkout, payment processing.',
          price: 'from $997'
        },
      ],
    },
  ];

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-chaos-void">
      {/* Section header */}
      <div ref={headerRef} className="max-width section-padding mb-16">
        <div
          className={`flex items-center gap-4 mb-4 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          <div className="w-12 h-[2px] bg-chaos-neon" />
          <span className="font-mono text-sm text-chaos-neon tracking-widest">SERVICES</span>
        </div>
        <h2
          className={`heading-section text-chaos-offwhite mb-4 transition-all duration-700 delay-200 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          What I Build
        </h2>
        <p
          className={`text-chaos-grey max-w-2xl transition-all duration-700 delay-300 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Fair, transparent pricing for high-quality digital solutions. Every project is tailored to your specific needs.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 100}
            />
          ))}
        </div>
      </div>

      {/* Note */}
      <div className="max-width section-padding mt-12">
        <p className="text-center text-chaos-grey text-sm font-mono">
          <span className="text-chaos-neon">*</span> All prices are starting points. Final quotes depend on project scope and complexity.
          <span className="text-chaos-neon">*</span>
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 w-px h-32 bg-gradient-to-b from-transparent via-chaos-neon/30 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-chaos-cyan/30 to-transparent" />
    </section>
  );
};

export default Services;
