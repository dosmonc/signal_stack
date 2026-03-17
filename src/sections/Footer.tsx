import { Terminal, Github, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <Youtube className="w-5 h-5" />, url: 'https://youtube.com/@fatherdust', label: 'YouTube' },
  ];

  const quickLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Approach', href: '#approach' },
    { label: 'The Vault', href: '#vault' },
    { label: 'Ventures', href: '#ventures' },
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-chaos-black border-t border-chaos-gunmetal">
      <div className="max-width section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a 
              href="#" 
              className="flex items-center gap-2 group mb-6"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <Terminal className="w-6 h-6 text-chaos-neon group-hover:animate-pulse" />
              <span className="font-mono font-bold text-chaos-offwhite text-lg">
                Tyler Moncrieff
              </span>
            </a>
            <p className="text-chaos-grey max-w-md mb-6">
              Principal Frontend Engineer and UI/UX Designer. Building high-performance,
              conversion-optimized digital experiences from Charlotte, NC.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-chaos-grey hover:text-chaos-neon transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono font-semibold text-chaos-offwhite mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-chaos-grey hover:text-chaos-neon transition-colors duration-300 font-mono text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono font-semibold text-chaos-offwhite mb-6">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:828-471-0032"
                  className="text-chaos-grey hover:text-chaos-neon transition-colors duration-300 font-mono text-sm"
                >
                  828-471-0032
                </a>
              </li>
              <li>
                <a
                  href="mailto:aiautoally@gmail.com"
                  className="text-chaos-grey hover:text-chaos-neon transition-colors duration-300 font-mono text-sm"
                >
                  aiautoally@gmail.com
                </a>
              </li>
              <li className="text-chaos-grey font-mono text-sm">
                Charlotte, NC
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-chaos-gunmetal flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-chaos-grey">
            {currentYear} Tyler Moncrieff. All rights reserved.
          </p>
          <p className="font-mono text-xs text-chaos-neon tracking-wider">
            Built for leverage. Optimized for speed.
          </p>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-chaos-neon via-chaos-cyan to-chaos-neon" />
    </footer>
  );
};

export default Footer;
