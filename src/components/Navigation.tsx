
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "OUR APPROACH", href: "#approach" },
    { name: "RESOURCES", href: "#resources" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 relative">
              <div className="absolute inset-0 border-2 border-gold rounded-full">
                <div className="absolute inset-2 border border-gold rounded-full">
                  <div className="absolute inset-1 bg-gradient-to-br from-gold to-yellow-600 rounded-full opacity-20"></div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 border border-gold transform rotate-45"></div>
              </div>
            </div>
            <div>
              <div className="text-gold font-light text-lg tracking-wider">Kings in Company</div>
              <div className="text-xs text-gray-400 tracking-widest">REAL ESTATE NETWORK</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-gold transition-colors duration-300 text-sm tracking-wider font-light"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-gold transition-colors duration-300 text-sm tracking-wider"
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
