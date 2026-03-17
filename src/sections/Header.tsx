import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

interface HeaderProps {
  scrollY: number;
}

const Header = ({ scrollY }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(scrollY > 100);
  }, [scrollY]);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Approach', href: '#approach' },
    { label: 'The Vault', href: '#vault' },
    { label: 'Ventures', href: '#ventures' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isVisible
            ? 'bg-chaos-void/90 backdrop-blur-md border-b border-chaos-gunmetal'
            : 'bg-transparent'
        }`}
      >
        <div className="max-width section-padding">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a 
              href="#" 
              className="flex items-center gap-2 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <Terminal className="w-6 h-6 text-chaos-neon group-hover:animate-pulse" />
              <span className="font-mono font-bold text-chaos-offwhite text-sm lg:text-base">
                TM<span className="text-chaos-neon">.</span>DEV
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="font-mono text-sm text-chaos-grey hover:text-chaos-neon transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-chaos-neon transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="https://calendly.com/tmoncrieff94/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon text-sm py-2 px-4"
              >
                Book Call
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-chaos-offwhite"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-chaos-void/98 backdrop-blur-lg transition-all duration-500 lg:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="font-mono text-2xl text-chaos-offwhite hover:text-chaos-neon transition-colors duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://calendly.com/tmoncrieff94/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon mt-8"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Call
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
