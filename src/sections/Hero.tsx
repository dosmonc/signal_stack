import { useEffect, useState, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isScrambling, setIsScrambling] = useState(true);
  const [showSubtext, setShowSubtext] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const finalText = 'WEBSITES, AI, AND ORDER FROM CHAOS';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';

  useEffect(() => {
    let iteration = 0;
    const maxIterations = finalText.length * 3;
    
    const interval = setInterval(() => {
      setDisplayText(
        finalText
          .split('')
          .map((char, index) => {
            if (char === ' ' || char === ',') return char;
            if (index < iteration / 3) {
              return finalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      iteration += 1;

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(finalText);
        setIsScrambling(false);
        setTimeout(() => setShowSubtext(true), 300);
        setTimeout(() => setShowCTA(true), 600);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-chaos-void/50 via-transparent to-chaos-void" />
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-chaos-neon/20 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
              animation: `pulse 3s ease-in-out ${i * 0.5}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-width section-padding w-full py-32">
        <div className="flex flex-col items-center text-center">
          {/* Main Heading */}
          <h1 className="heading-massive font-mono text-chaos-offwhite mb-8 min-h-[1.2em]">
            {displayText.split('').map((char, index) => (
              <span
                key={index}
                className={
                  char === ','
                    ? 'text-chaos-grey'
                    : isScrambling && chars.includes(char)
                    ? 'text-chaos-neon/50'
                    : index < displayText.indexOf(',')
                    ? 'text-chaos-neon'
                    : index > displayText.indexOf(',') && index < displayText.indexOf('ORDER')
                    ? 'text-chaos-cyan'
                    : 'text-chaos-offwhite'
                }
              >
                {char}
              </span>
            ))}
            {!isScrambling && <span className="animate-blink text-chaos-neon">_</span>}
          </h1>

          {/* Subheading */}
          <p
            className={`max-w-3xl text-lg lg:text-xl text-chaos-grey mb-12 transition-all duration-700 ${
              showSubtext
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            I engineer high-converting web assets, deploy secure AI systems, and build
            search dominance for brands in Charlotte and beyond. Stop wrestling with
            broken tech. Let's build systems that scale.
          </p>

          {/* CTA Button */}
          <div
            className={`transition-all duration-700 delay-200 ${
              showCTA
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="https://calendly.com/tmoncrieff94/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 btn-neon text-lg lg:text-xl py-4 px-8 lg:py-5 lg:px-10 animate-pulse-neon"
            >
              <span>Book Your Free Strategy Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Scroll hint */}
          <button
            onClick={scrollToServices}
            className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-chaos-grey hover:text-chaos-neon transition-all duration-500 ${
              showCTA ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="font-mono text-xs tracking-widest">[SCROLL TO INITIATE]</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-24 left-6 w-16 h-16 border-l-2 border-t-2 border-chaos-neon/30 pointer-events-none" />
      <div className="absolute top-24 right-6 w-16 h-16 border-r-2 border-t-2 border-chaos-cyan/30 pointer-events-none" />
      <div className="absolute bottom-24 left-6 w-16 h-16 border-l-2 border-b-2 border-chaos-cyan/30 pointer-events-none" />
      <div className="absolute bottom-24 right-6 w-16 h-16 border-r-2 border-b-2 border-chaos-neon/30 pointer-events-none" />
    </section>
  );
};

export default Hero;
