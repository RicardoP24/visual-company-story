
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

  const teamMembers = [
    {
      name: "ISMAEL GOMES QUETA",
      role: "FOUNDER & CEO",
      image: "/lovable-uploads/48c09b2a-1209-43c6-ab28-9a60d3420772.png",
      linkedin: "#"
    },
    {
      name: "NUNO MIGUEL ANDRADE",
      role: "INVESTMENT CONSULTANT",
      image: "/lovable-uploads/48c09b2a-1209-43c6-ab28-9a60d3420772.png",
      linkedin: "#"
    },
    {
      name: "DANIELA DE OLIVEIRA",
      role: "CLIENT OPERATIONS MANAGER",
      isPlaceholder: true,
      linkedin: "#"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="team" 
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Geometric Logo Background */}
      <div className="absolute top-8 left-8 opacity-10">
        <div className="w-32 h-32 relative">
          <div className="absolute inset-0 border border-gold/30 transform rotate-12 rounded-lg"></div>
          <div className="absolute inset-2 border border-gold/50 transform -rotate-12 rounded-lg"></div>
          <div className="absolute inset-4 border border-gold transform rotate-45 rounded-lg"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="mb-8">
            <span className="text-gold text-sm tracking-widest font-light">THE COMPANY</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-wider leading-tight">
            OUR TEAM
          </h1>

          {/* Decorative Line */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-0.5 bg-gold"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 text-xl font-light leading-relaxed">
              With a foundation of experience and strong networks, we turn expertise<br />
              and collaboration into valuable investment opportunities.
            </p>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Gold Background Section */}
          <div className="bg-gradient-to-r from-gold to-gold-light py-16 px-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.name} 
                  className="text-center group"
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Profile Image */}
                  <div className="relative mb-6 mx-auto w-48 h-48">
                    <div className="w-full h-full rounded-full border-4 border-white overflow-hidden shadow-xl group-hover:scale-105 transition-transform duration-300">
                      {member.isPlaceholder ? (
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <div className="w-24 h-24 relative">
                            <div className="absolute inset-0 border-2 border-gold transform rotate-12 rounded-lg"></div>
                            <div className="absolute inset-2 border-2 border-gold/70 transform -rotate-12 rounded-lg"></div>
                            <div className="absolute inset-4 border-2 border-gold transform rotate-45 rounded-lg"></div>
                          </div>
                        </div>
                      ) : (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="space-y-2">
                    <h3 className="text-black font-semibold text-lg tracking-wider">
                      {member.name}
                    </h3>
                    <p className="text-black/80 text-sm tracking-widest font-light">
                      {member.role}
                    </p>
                    
                    {/* LinkedIn Icon */}
                    <div className="pt-4">
                      <a 
                        href={member.linkedin}
                        className="inline-flex items-center justify-center w-10 h-10 bg-black rounded-full hover:bg-gray-800 transition-colors duration-300 group"
                        aria-label={`${member.name} LinkedIn Profile`}
                      >
                        <Linkedin className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
