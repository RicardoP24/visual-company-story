
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "OUR APPROACH", href: "#approach" },
    { name: "NETWORK", href: "#network" },
    { name: "RESOURCES", href: "#resources" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-gray-700/50 shadow-2xl' 
        : 'bg-black/90 backdrop-blur-sm border-b border-gray-600/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4 group cursor-pointer">
            {/* Geometric Logo */}
            <div className="w-12 h-12 relative transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Geometric network pattern */}
                <g stroke="#A08F66" strokeWidth="1.5" fill="none" className="group-hover:stroke-gold-light transition-colors">
                  {/* Outer connections */}
                  <path d="M20,30 L50,15 L80,30 L70,60 L30,60 Z" />
                  <path d="M20,30 L30,60" />
                  <path d="M50,15 L30,60" />
                  <path d="M50,15 L70,60" />
                  <path d="M80,30 L70,60" />
                  <path d="M80,30 L30,60" />
                  
                  {/* Inner network */}
                  <path d="M35,40 L50,25 L65,40 L60,55 L40,55 Z" />
                  <path d="M35,40 L65,40" />
                  <path d="M50,25 L60,55" />
                  <path d="M50,25 L40,55" />
                  
                  {/* Connection nodes */}
                  <circle cx="20" cy="30" r="2" fill="#A08F66" className="group-hover:fill-gold-light transition-colors" />
                  <circle cx="50" cy="15" r="2" fill="#A08F66" className="group-hover:fill-gold-light transition-colors" />
                  <circle cx="80" cy="30" r="2" fill="#A08F66" className="group-hover:fill-gold-light transition-colors" />
                  <circle cx="70" cy="60" r="2" fill="#A08F66" className="group-hover:fill-gold-light transition-colors" />
                  <circle cx="30" cy="60" r="2" fill="#A08F66" className="group-hover:fill-gold-light transition-colors" />
                  <circle cx="35" cy="40" r="1.5" fill="#A08F66" className="group-hover:fill-gold-light transition-colors" />
                  <circle cx="65" cy="40" r="1.5" fill="#A08F66" className="group-hover:fill-gold-light transition-colors" />
                  <circle cx="50" cy="25" r="1.5" fill="#A08F66" className="group-hover:fill-gold-light transition-colors" />
                  <circle cx="60" cy="55" r="1.5" fill="#A08F66" className="group-hover:fill-gold-light transition-colors" />
                  <circle cx="40" cy="55" r="1.5" fill="#A08F66" className="group-hover:fill-gold-light transition-colors" />
                </g>
              </svg>
            </div>
            <div>
              <div className="text-gold font-light text-lg tracking-wider group-hover:text-gold-light transition-colors" style={{ fontFamily: "'Dancing Script', cursive" }}>
                Kings in Company
              </div>
              <div className="text-xs text-gray-400 tracking-widest">
                REAL ESTATE NETWORK
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-white hover:text-gold transition-colors duration-300 text-sm tracking-wider font-light group"
              >
                {item.name}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></div>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold transition-colors duration-300 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden transition-all duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-md rounded-b-lg border-b border-gray-600/30">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-gold hover:bg-gold/5 rounded-md transition-all duration-300 text-sm tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
