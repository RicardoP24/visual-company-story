
import { useState, useEffect, useRef } from "react";
import { Shield, Search, Calculator, HeadphonesIcon, Award, Zap } from "lucide-react";

export const Features = () => {
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

  const features = [
    {
      icon: Search,
      title: "Market Research",
      description: "In-depth analysis of local markets, trends, and investment opportunities to maximize your returns."
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Complete legal protection and secure handling of all documentation and financial transactions."
    },
    {
      icon: Calculator,
      title: "Investment Analysis",
      description: "Comprehensive ROI calculations and financial modeling to ensure profitable investment decisions."
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock assistance from our expert team throughout your investment journey."
    },
    {
      icon: Award,
      title: "Premium Properties",
      description: "Exclusive access to high-quality properties in prime locations across our target markets."
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description: "Streamlined processes and quick turnaround times to secure the best opportunities."
    }
  ];

  return (
    <section ref={sectionRef} id="features" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold text-sm tracking-widest font-light mb-6 block">OUR FEATURES</span>
          
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-wider">
            WHY CHOOSE <span className="text-gold">US</span>
          </h2>
          
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
          
          <p className="text-gray-300 text-xl max-w-4xl mx-auto font-light leading-relaxed">
            Comprehensive solutions and expert guidance for all your real estate investment needs
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className={`group bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-700/50 rounded-lg p-8 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/40 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-gold" />
                </div>
                
                <h3 className="text-xl font-medium text-white mb-4 group-hover:text-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Hover Effect Line */}
                <div className="w-0 h-0.5 bg-gold mt-4 group-hover:w-full transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
