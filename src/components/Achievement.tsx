
import { useState, useEffect, useRef } from "react";
import { TrendingUp, DollarSign, Home, Users } from "lucide-react";

export const Achievement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    properties: 0,
    clients: 0,
    revenue: 0,
    years: 0
  });
  const sectionRef = useRef<HTMLElement>(null);

  const achievements = [
    { key: 'properties', icon: Home, target: 1500, suffix: '+', label: 'Properties Sold' },
    { key: 'clients', icon: Users, target: 800, suffix: '+', label: 'Happy Clients' },
    { key: 'revenue', icon: DollarSign, target: 250, suffix: 'M+', label: 'Revenue Generated', prefix: '€' },
    { key: 'years', icon: TrendingUp, target: 15, suffix: '+', label: 'Years Experience' }
  ];

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

  useEffect(() => {
    if (!isVisible) return;

    const animateCounters = () => {
      achievements.forEach((achievement, index) => {
        setTimeout(() => {
          let start = 0;
          const end = achievement.target;
          const duration = 2000;
          const increment = end / (duration / 50);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(timer);
            }

            setCounters(prev => ({
              ...prev,
              [achievement.key]: Math.floor(start)
            }));
          }, 50);
        }, index * 200);
      });
    };

    animateCounters();
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="achievements" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold text-sm tracking-widest font-light mb-6 block">OUR ACHIEVEMENTS</span>
          
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-wider">
            PROVEN <span className="text-gold">RESULTS</span>
          </h2>
          
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
          
          <p className="text-gray-300 text-xl max-w-4xl mx-auto font-light leading-relaxed">
            Numbers that speak to our commitment to excellence and client success
          </p>
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            const currentValue = counters[achievement.key as keyof typeof counters];
            
            return (
              <div 
                key={index}
                className={`text-center group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700/50 rounded-lg p-8 hover:border-gray-600/50 transition-all duration-500 hover:scale-105">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gold/20 to-gold/40 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-gold" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-4xl md:text-5xl font-light text-white">
                      {achievement.prefix}{currentValue}{achievement.suffix}
                    </span>
                  </div>
                  
                  <h3 className="text-gray-400 text-sm tracking-wider group-hover:text-gray-300 transition-colors duration-300">
                    {achievement.label}
                  </h3>
                  
                  {/* Progress indicator */}
                  <div className="w-full bg-gray-800 rounded-full h-1 mt-4">
                    <div 
                      className="bg-gradient-to-r from-gold to-gold-light h-1 rounded-full transition-all duration-2000"
                      style={{ width: `${(currentValue / achievement.target) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
