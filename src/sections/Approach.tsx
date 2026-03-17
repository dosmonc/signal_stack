import { useEffect, useRef, useState } from 'react';

const Approach = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textRevealed, setTextRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setTextRevealed(true), 400);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="approach"
      ref={sectionRef}
      className="relative py-32 lg:py-48 bg-chaos-black overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #39FF14 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Large decorative text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className={`font-mono font-bold text-[20vw] text-chaos-gunmetal/30 whitespace-nowrap transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          CHAOS
        </span>
      </div>

      <div className="relative z-10 max-width section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <div
            className={`flex items-center justify-center gap-4 mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-8 h-[2px] bg-chaos-cyan" />
            <span className="font-mono text-sm text-chaos-cyan tracking-widest">THE APPROACH</span>
            <div className="w-8 h-[2px] bg-chaos-cyan" />
          </div>

          {/* Main heading */}
          <h2
            className={`heading-section font-mono font-bold text-chaos-offwhite mb-12 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-chaos-neon">CONTROLLED CHAOS.</span>
            <br />
            <span className="text-chaos-cyan">RUTHLESS EXECUTION.</span>
          </h2>

          {/* Body text with reveal effect */}
          <div
            className={`relative overflow-hidden transition-all duration-1000 delay-400 ${
              textRevealed ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-lg lg:text-xl text-chaos-grey leading-relaxed">
              You don't need a stiff, corporate agency dragging out timelines. You need an
              operator who can step into the mess and build a machine that works. I thrive in
              the chaos, turning your operational bottlenecks into sleek, functional,
              revenue-generating digital assets.
            </p>
            <p className="text-lg lg:text-xl text-chaos-grey leading-relaxed mt-6">
              <span className="text-chaos-offwhite font-semibold">
                No jargon, no runaround, no filler.
              </span>{' '}
              Just straight talk and systems optimized for money, time, and control.
            </p>
          </div>

          {/* Stats or highlights */}
          <div
            className={`grid grid-cols-3 gap-8 mt-16 transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {[
              { value: '50+', label: 'Projects Deployed' },
              { value: '100%', label: 'Client Satisfaction' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-mono font-bold text-2xl lg:text-4xl text-chaos-neon mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-xs lg:text-sm text-chaos-grey uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-12 left-12 w-24 h-24 border-l-2 border-t-2 border-chaos-neon/20" />
      <div className="absolute bottom-12 right-12 w-24 h-24 border-r-2 border-b-2 border-chaos-cyan/20" />
    </section>
  );
};

export default Approach;
