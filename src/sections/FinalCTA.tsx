import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const FinalCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
      ref={sectionRef}
      className="relative py-32 lg:py-48 bg-chaos-void overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(57, 255, 20, 0.15) 0%, transparent 70%)',
          }}
        />
        
        {/* Pulsing rings */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-chaos-neon/20"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              animation: `pulse 4s ease-in-out ${i * 1.3}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-width section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <div
            className={`flex items-center justify-center gap-4 mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-8 h-[2px] bg-chaos-neon" />
            <span className="font-mono text-sm text-chaos-neon tracking-widest">READY TO BUILD?</span>
            <div className="w-8 h-[2px] bg-chaos-neon" />
          </div>

          {/* Main heading */}
          <h2
            className={`heading-section font-mono font-bold text-chaos-offwhite mb-8 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Ready to build something
            <br />
            <span className="text-chaos-neon">that actually works?</span>
          </h2>

          {/* Description */}
          <p
            className={`text-lg lg:text-xl text-chaos-grey mb-12 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Stop trying to DIY your digital presence or patch up a bleeding software stack.
            Let's jump on a 30-minute call, map out the architecture, and execute.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="https://calendly.com/tmoncrieff94/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 btn-neon text-lg lg:text-xl py-5 px-10 animate-pulse-neon"
            >
              <span>Book Your 30-Minute Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-3 btn-cyan text-lg py-5 px-10"
            >
              <span>Submit Service Request</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Contact info */}
          <div
            className={`flex flex-wrap justify-center gap-8 mt-16 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center gap-3 text-chaos-grey">
              <MapPin className="w-5 h-5 text-chaos-neon" />
              <span className="font-mono text-sm">Charlotte, NC</span>
            </div>
            <a
              href="tel:828-471-0032"
              className="flex items-center gap-3 text-chaos-grey hover:text-chaos-neon transition-colors"
            >
              <Phone className="w-5 h-5 text-chaos-neon" />
              <span className="font-mono text-sm">828-471-0032</span>
            </a>
            <a
              href="mailto:aiautoally@gmail.com"
              className="flex items-center gap-3 text-chaos-grey hover:text-chaos-neon transition-colors"
            >
              <Mail className="w-5 h-5 text-chaos-neon" />
              <span className="font-mono text-sm">aiautoally@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-24 left-24 w-32 h-32 border-l-2 border-t-2 border-chaos-neon/20" />
      <div className="absolute bottom-24 right-24 w-32 h-32 border-r-2 border-b-2 border-chaos-cyan/20" />
    </section>
  );
};

export default FinalCTA;
