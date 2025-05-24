
import { useState, useEffect, useRef } from "react";

export const Markets = () => {
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

  return (
    <section ref={sectionRef} id="markets" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold text-sm tracking-widest font-light mb-6 block">OUR MARKETS</span>
          
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-wider">
            INVESTMENT <span className="text-gold">TERRITORIES</span>
          </h2>
          
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
          
          <p className="text-gray-300 text-xl max-w-4xl mx-auto font-light leading-relaxed">
            Strategic locations across Portugal and Cabo Verde offering exceptional investment opportunities
          </p>
        </div>

        {/* Markets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Portugal Market */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              <img 
                src="/lovable-uploads/d6b3a0f0-d7af-48d6-b1cf-12b99f7c81f1.png" 
                alt="Portugal Markets" 
                className="w-full h-96 object-cover rounded-lg border border-gray-700/50 shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-3xl font-light text-gold mb-4">PORTUGAL</h3>
                <div className="space-y-4 text-white">
                  <div>
                    <h4 className="text-lg font-medium text-gold mb-2">PRIMARY LOCATIONS</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Lisbon Metropolitan Area:</strong> The vibrant heart of Portugal, encompassing the historic and bustling city of Lisbon and its surrounding areas.</li>
                      <li>• <strong>Setúbal (Lisbon South Bay):</strong> A rapidly growing area south of Lisbon, known for its stunning coastline and increasing development opportunities.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gold mb-2">SECONDARY LOCATIONS</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Porto and Douro Valley:</strong> Northern Portugal's cultural hub and scenic wine region.</li>
                      <li>• <strong>Silver Coast:</strong> A picturesque coastal region between Lisbon and Porto, known for its beautiful beaches and historic towns.</li>
                      <li>• <strong>Algarve:</strong> Portugal's premier tourist destination, famed for its stunning beaches and high-end resorts.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cabo Verde Market */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '300ms' }}>
            <div className="relative">
              <img 
                src="/lovable-uploads/27180d63-2250-4e8f-9de5-4a20d6abeafe.png" 
                alt="Cabo Verde Markets" 
                className="w-full h-96 object-cover rounded-lg border border-gray-700/50 shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-3xl font-light text-gold mb-4">CABO VERDE</h3>
                <div className="space-y-4 text-white">
                  <div>
                    <h4 className="text-lg font-medium text-gold mb-2">Sal Island:</h4>
                    <p className="text-sm">Highly attractive for tourism-related investments due to its beautiful beaches, ideal climate for year-round tourism, and growing popularity among international visitors.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gold mb-2">São Vicente Island:</h4>
                    <p className="text-sm">The vibrant cultural scene, coupled with its strategic location as a port of call for cruise ships and a hub for music and arts festivals, makes it an appealing destination for investment in tourism infrastructure and residential projects.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gold mb-2">Santiago Island:</h4>
                    <p className="text-sm">Praia City's role as the economic and administrative center of Cabo Verde, coupled with its historical significance and growing urbanization, makes it a promising location for commercial, residential, and industrial developments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
