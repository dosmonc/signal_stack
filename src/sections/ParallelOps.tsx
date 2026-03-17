import { useEffect, useRef, useState } from 'react';
import { Mountain, Music2, ExternalLink } from 'lucide-react';

const ParallelOps = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const ventures = [
    {
      icon: <Mountain className="w-8 h-8" />,
      title: 'Buy Sell Land NC LLC',
      description: 'A fast-cash land acquisition operation across the Southeast.',
      links: [
        { label: 'Buy-Sell.Land', url: 'https://buy-sell.land' },
        { label: 'Buy-Sell.Space', url: 'https://buy-sell.space' },
      ],
      image: '/images/buysellland.jpg',
      accent: 'neon' as const,
    },
    {
      icon: <Music2 className="w-8 h-8" />,
      title: 'Spunris3 & M3FF Music',
      description: 'Gritty, cinematic audio production and label management under the Father Dust moniker.',
      links: [
        { label: 'YouTube', url: 'https://youtube.com/@fatherdust' },
        { label: 'm3ffmusic', url: 'https://m3ffmusic.pages.dev' },
        { label: 'spunris3', url: 'https://spunris3.com' },
      ],
      image: '/images/spunris3.jpg',
      accent: 'cyan' as const,
    },
  ];

  return (
    <section
      id="ventures"
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
          <div className="w-12 h-[2px] bg-chaos-cyan" />
          <span className="font-mono text-sm text-chaos-cyan tracking-widest">PARALLEL OPERATIONS</span>
        </div>
        
        <h2
          className={`heading-section text-chaos-offwhite mb-4 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Systems Building Doesn't Stop at the Browser
        </h2>
        <p
          className={`text-chaos-grey max-w-xl transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Ventures and operations running parallel to the digital agency work.
        </p>
      </div>

      {/* Ventures Grid */}
      <div className="max-width section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ventures.map((venture, index) => (
            <div
              key={venture.title}
              className={`group relative bg-chaos-gunmetal border-2 border-chaos-gunmetal overflow-hidden transition-all duration-700 hover:border-chaos-neon ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={venture.image}
                  alt={venture.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chaos-gunmetal via-chaos-gunmetal/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6 lg:p-8 -mt-16">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 mb-4 ${
                    venture.accent === 'neon' ? 'text-chaos-neon' : 'text-chaos-cyan'
                  }`}
                >
                  {venture.icon}
                </div>

                <h3 className="font-mono font-bold text-xl lg:text-2xl text-chaos-offwhite mb-3">
                  {venture.title}
                </h3>

                <p className="text-chaos-grey mb-6">
                  {venture.description}
                </p>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {venture.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 font-mono text-xs tracking-wider border transition-all duration-300 ${
                        venture.accent === 'neon'
                          ? 'border-chaos-neon text-chaos-neon hover:bg-chaos-neon hover:text-chaos-black'
                          : 'border-chaos-cyan text-chaos-cyan hover:bg-chaos-cyan hover:text-chaos-black'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-chaos-neon/30 to-transparent" />
    </section>
  );
};

export default ParallelOps;
