
import { useState, useEffect, useRef } from "react";

export const CompanyStatement = () => {
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
    <section ref={sectionRef} id="statement" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold text-sm tracking-widest font-light mb-6 block">THE COMPANY</span>
          
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-wider">
            OUR <span className="text-gold">STATEMENT</span>
          </h2>
          
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        {/* Statement Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <img 
              src="/lovable-uploads/8715f737-ef32-417b-9f39-cbd2505a4c3f.png" 
              alt="Company Statement" 
              className="w-full h-auto rounded-lg border border-gray-700/50 shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '300ms' }}>
            <div className="space-y-12">
              {/* Mission */}
              <div>
                <h3 className="text-2xl font-light text-gold mb-6 tracking-wider">MISSION</h3>
                <p className="text-gray-300 text-lg font-light leading-relaxed">
                  We are committed to being your reliable allies in the real estate market, uncovering lucrative investments, 
                  building consistent value, and assuring long-term returns.
                </p>
              </div>

              {/* Vision */}
              <div>
                <h3 className="text-2xl font-light text-gold mb-6 tracking-wider">VISION</h3>
                <p className="text-gray-300 text-lg font-light leading-relaxed">
                  To grow from a local enterprise to a global force, setting the benchmark in the real estate investment 
                  industry in Portugal and West Africa.
                </p>
              </div>

              {/* Values */}
              <div>
                <h3 className="text-2xl font-light text-gold mb-6 tracking-wider">VALUES</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">Integrity</h4>
                    <p className="text-gray-400 text-sm">Do what's right, even when no one is watching.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Unity</h4>
                    <p className="text-gray-400 text-sm">Success is built through collaboration, shared purpose, and mutual respect.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Empowerment</h4>
                    <p className="text-gray-400 text-sm">Striving to leave a meaningful mark on our communities and future generations.</p>
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
