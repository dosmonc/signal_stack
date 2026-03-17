import { useEffect, useRef, useState } from 'react';
import { Brain, Wrench, Target, ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  items: { title: string; description: string }[];
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
              <ArrowUpRight className={`w-4 h-4 mt-1 ${textColor} opacity-0 group-hover/item:opacity-100 transition-opacity`} />
              <div>
                <h4 className="font-mono font-semibold text-sm text-chaos-offwhite group-hover/item:text-chaos-neon transition-colors">
                  {item.title}
                </h4>
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
      icon: <Brain className="w-10 h-10" />,
      title: 'AI & Chatbot Development',
      accent: 'neon' as const,
      items: [
        {
          title: 'Custom AI Integration',
          description: 'Autonomous agents built to handle outreach, customer service, and data extraction.',
        },
        {
          title: 'Prompt Injection & Security',
          description: 'Ethical stress-testing for your AI models. I break it before they do.',
        },
        {
          title: 'Workflow Automation',
          description: 'Connecting the dots between your software to eliminate manual data entry.',
        },
      ],
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: 'Website Creation & Rescue',
      accent: 'cyan' as const,
      items: [
        {
          title: 'Custom Builds',
          description: 'From lean, high-speed landing pages to complex, multi-layered web apps.',
        },
        {
          title: 'The Rescue Operation',
          description: 'Fixing shattered code, abysmal load times, and broken user experiences.',
        },
        {
          title: 'System Maintenance',
          description: 'Ongoing optimization so you never have to look at the backend again.',
        },
      ],
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: 'Search Dominance (SEO & GEO)',
      accent: 'neon' as const,
      items: [
        {
          title: 'Charlotte Local SEO',
          description: 'Locking down the Google 3-Pack and dominating local intent queries.',
        },
        {
          title: 'Generative Engine Optimization',
          description: 'Forcing your brand to be the definitive answer on ChatGPT, Perplexity, and AI Overviews.',
        },
        {
          title: 'Strategic Content',
          description: 'Architecture that ranks everywhere your customers are looking.',
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
          className={`heading-section text-chaos-offwhite transition-all duration-700 delay-200 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          What I Build
        </h2>
      </div>

      {/* Services Grid */}
      <div className="max-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 150}
            />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 w-px h-32 bg-gradient-to-b from-transparent via-chaos-neon/30 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-chaos-cyan/30 to-transparent" />
    </section>
  );
};

export default Services;
