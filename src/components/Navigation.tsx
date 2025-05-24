
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
            {/* Company Logo */}
            <div className="w-12 h-12 relative transition-transform duration-300 group-hover:scale-110">
              <img 
                src="/lovable-uploads/46fbbc88-bd63-4b6c-8a43-4ae4d2bb0a6b.png" 
                alt="Kings in Company Logo" 
                className="w-full h-full object-contain filter brightness-110 group-hover:brightness-125 transition-all duration-300"
              />
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
