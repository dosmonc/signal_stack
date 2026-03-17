import { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Approach from './sections/Approach';
import Vault from './sections/Vault';
import ParallelOps from './sections/ParallelOps';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen bg-chaos-void">
      {/* Noise overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.02]">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Grid overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-40 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(57, 255, 20, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(57, 255, 20, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <Header scrollY={scrollY} />
      
      <main className="relative z-10">
        <Hero />
        <Services />
        <Approach />
        <Vault />
        <ParallelOps />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
