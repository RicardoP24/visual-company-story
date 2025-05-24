
import { useState, useEffect, useRef } from "react";
import { Linkedin } from "lucide-react";

export const Team = () => {
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
    <section ref={sectionRef} id="team" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold text-sm tracking-widest font-light mb-6 block">THE COMPANY</span>
          
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-wider">
            OUR <span className="text-gold">TEAM</span>
          </h2>
          
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
          
          <p className="text-gray-300 text-xl max-w-4xl mx-auto font-light leading-relaxed">
            With a foundation of experience and strong networks, we turn expertise 
            and collaboration into valuable investment opportunities.
          </p>
        </div>

        {/* Team Content */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <img 
            src="/lovable-uploads/47b27a2d-451f-4cc2-9a16-8dc118b6dd0f.png" 
            alt="Our Team" 
            className="w-full h-auto rounded-lg border border-gray-700/50 shadow-2xl"
          />
        </div>

        {/* Team Grid Alternative (if you want individual profiles) */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gold/20 to-gold/40 border-4 border-gray-600/50"></div>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">ISMAEL GOMES QUETA</h3>
            <p className="text-gold text-sm mb-4">FOUNDER & CEO</p>
            <Linkedin className="w-5 h-5 text-gold mx-auto cursor-pointer hover:text-gold-light transition-colors" />
          </div>
          
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gold/20 to-gold/40 border-4 border-gray-600/50"></div>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">NUNO MIGUEL ANDRADE</h3>
            <p className="text-gold text-sm mb-4">INVESTMENT CONSULTANT</p>
            <Linkedin className="w-5 h-5 text-gold mx-auto cursor-pointer hover:text-gold-light transition-colors" />
          </div>
          
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gold/20 to-gold/40 border-4 border-gray-600/50"></div>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">DANIELA DE OLIVEIRA</h3>
            <p className="text-gold text-sm mb-4">CLIENT OPERATIONS MANAGER</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};
