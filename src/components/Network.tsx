
import { useState, useEffect, useRef } from "react";
import { Users, Building, Globe, TrendingUp } from "lucide-react";

export const Network = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const networkStats = [
    { icon: Users, value: "500+", label: "Global Partners" },
    { icon: Building, value: "50+", label: "Cities Covered" },
    { icon: Globe, value: "15+", label: "Countries" },
    { icon: TrendingUp, value: "€100M+", label: "Properties Managed" }
  ];

  return (
    <section ref={sectionRef} id="network" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold text-sm tracking-widest font-light mb-6 block">OUR NETWORK</span>
          
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-wider">
            GLOBAL <span className="text-gold">CONNECTIONS</span>
          </h2>
          
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
          
          <p className="text-gray-300 text-xl max-w-4xl mx-auto font-light leading-relaxed">
            Building bridges across continents, connecting investors with premium real estate opportunities worldwide
          </p>
        </div>

        {/* Network Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {networkStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gold/20 to-gold/40 rounded-full flex items-center justify-center border border-gray-600/50">
                  <IconComponent className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-3xl font-light text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400 text-sm tracking-wider">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Network Description */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Content */}
          <div>
            <h3 className="text-2xl font-light text-gold mb-6 tracking-wider">STRATEGIC PARTNERSHIPS</h3>
            <p className="text-gray-300 text-lg font-light leading-relaxed mb-6">
              Our extensive network spans across multiple continents, connecting local expertise with global opportunities. 
              We collaborate with trusted partners, financial institutions, and real estate professionals to deliver 
              exceptional results for our clients.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-white">Exclusive access to off-market properties</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-white">Direct connections with local experts</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-white">Streamlined international transactions</span>
              </div>
            </div>
          </div>

          {/* Visual Network Representation */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-900/50 to-black/50 rounded-lg border border-gray-700/50 p-8">
              <div className="relative w-full h-full">
                {/* Central Node */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                  <Building className="w-8 h-8 text-black" />
                </div>
                
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <defs>
                    <radialGradient id="lineGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(160, 143, 102, 0.6)" />
                      <stop offset="100%" stopColor="rgba(160, 143, 102, 0.1)" />
                    </radialGradient>
                  </defs>
                  {/* Lines connecting center to outer nodes */}
                  <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" />
                  <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" />
                  <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="url(#lineGradient)" strokeWidth="2" />
                  <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="url(#lineGradient)" strokeWidth="2" />
                </svg>
                
                {/* Outer Nodes */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <Globe className="w-4 h-4 text-gold" />
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-gold" />
                </div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-gold" />
                </div>
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <Building className="w-4 h-4 text-gold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
