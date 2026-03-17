import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Folder, Code, Briefcase, Music, ShoppingBag } from 'lucide-react';

interface Project {
  name: string;
  url: string;
  image: string;
  category: string;
}

interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const Vault = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
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

  const categories: Category[] = [
    { id: 'all', label: 'ALL', icon: <Folder className="w-4 h-4" /> },
    { id: 'webapps', label: 'WEB APPS', icon: <Code className="w-4 h-4" /> },
    { id: 'business', label: 'BUSINESS', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'creative', label: 'CREATIVE', icon: <Music className="w-4 h-4" /> },
    { id: 'products', label: 'PRODUCTS', icon: <ShoppingBag className="w-4 h-4" /> },
  ];

  const projects: Project[] = [
    // Web Apps & Systems
    { name: 'tbuilds', url: 'https://tbuilds.pages.dev', image: '/images/tbuilds.jpg', category: 'webapps' },
    { name: 'automationally', url: 'https://automationally.pages.dev', image: '/images/automationally.jpg', category: 'webapps' },
    { name: 'gptpromptvault', url: 'https://gptpromptvault.pages.dev', image: '/images/gptpromptvault.jpg', category: 'webapps' },
    { name: 'thethinkery', url: 'https://thethinkery.pages.dev', image: '/images/thethinkery.jpg', category: 'webapps' },
    { name: 'experiment-b', url: 'https://experiment-b.pages.dev', image: '/images/experiment-b.jpg', category: 'webapps' },
    
    // Service & Business Sites
    { name: 'webfix24', url: 'https://webfix24.pages.dev', image: '/images/webfix24.jpg', category: 'business' },
    { name: 'website48', url: 'https://website48.pages.dev', image: '/images/website48.jpg', category: 'business' },
    { name: 'clt-house-sitters', url: 'https://clt-house-sitters.pages.dev', image: '/images/clt-house-sitters.jpg', category: 'business' },
    { name: 'Carolinawellness', url: 'https://Carolinawellness.pages.dev', image: '/images/carolinawellness.jpg', category: 'business' },
    { name: 'tripleb', url: 'https://tripleb.pages.dev', image: '/images/tripleb.jpg', category: 'business' },
    { name: 'showup', url: 'https://showup.pages.dev', image: '/images/showup.jpg', category: 'business' },
    { name: 'showupbiz', url: 'https://showupbiz.pages.dev', image: '/images/showupbiz.jpg', category: 'business' },
    { name: 'aiautoally', url: 'https://aiautoally.b12sites.com/index', image: '/images/aiautoally.jpg', category: 'business' },
    
    // Creative & Media
    { name: 'mbkid', url: 'https://mbkid.pages.dev', image: '/images/mbkid.jpg', category: 'creative' },
    { name: 'dustylog', url: 'https://dustylog.pages.dev', image: '/images/dustylog.jpg', category: 'creative' },
    { name: 'dytorious', url: 'https://dytorious.pages.dev', image: '/images/dytorious.jpg', category: 'creative' },
    { name: 'jweed', url: 'https://jweed.pages.dev', image: '/images/jweed.jpg', category: 'creative' },
    
    // Digital Products
    { name: 'Digital Products', url: 'https://gum.new/gum/cmm5sj1fe000004la7493c7y8', image: '/images/digital-products.jpg', category: 'products' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section
      id="vault"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-chaos-void"
    >
      {/* Header */}
      <div className="max-width section-padding mb-12">
        <div
          className={`flex items-center gap-4 mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          <div className="w-12 h-[2px] bg-chaos-neon" />
          <span className="font-mono text-sm text-chaos-neon tracking-widest">THE VAULT</span>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <h2
              className={`heading-section text-chaos-offwhite mb-4 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              The Proof is in the Deployments
            </h2>
            <p
              className={`text-chaos-grey max-w-xl transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              A live ledger of active builds, web apps, AI integrations, and digital infrastructure.
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            className={`flex flex-wrap gap-2 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 font-mono text-xs tracking-wider transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-chaos-neon text-chaos-black'
                    : 'bg-chaos-gunmetal text-chaos-grey hover:text-chaos-offwhite border border-chaos-gunmetal hover:border-chaos-neon'
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-chaos-gunmetal border-2 border-chaos-gunmetal overflow-hidden transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 50}ms` }}
              onMouseEnter={() => setHoveredProject(project.name)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-chaos-void/80 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredProject === project.name ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="flex items-center gap-2 text-chaos-neon font-mono text-sm">
                    <span>VIEW SITE</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                {/* Browser chrome */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-chaos-black/80 flex items-center px-2 gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/80" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                  <div className="w-2 h-2 rounded-full bg-green-500/80" />
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-mono font-semibold text-sm text-chaos-offwhite group-hover:text-chaos-neon transition-colors truncate">
                    {project.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-chaos-grey opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="font-mono text-xs text-chaos-grey mt-1 truncate">
                  {project.url.replace('https://', '')}
                </p>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 border-2 border-chaos-neon opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </a>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-px h-48 bg-gradient-to-b from-transparent via-chaos-neon/20 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-px h-32 bg-gradient-to-b from-transparent via-chaos-cyan/20 to-transparent" />
    </section>
  );
};

export default Vault;
