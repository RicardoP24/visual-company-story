
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, Phone } from "lucide-react";

export const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const teamMembers = [
    {
      id: 1,
      name: "Ismael Santos",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      quote: "Transforming property ownership dreams into reality across Portugal and Cabo Verde.",
      bio: "With over 15 years in real estate, Ismael has helped hundreds of clients navigate international property investments.",
      linkedin: "#",
      email: "ismael@kingscompany.com",
      phone: "+351 123 456 789"
    },
    {
      id: 2,
      name: "Maria Silva",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=300&h=300&fit=crop&crop=face",
      quote: "Excellence in execution is what sets us apart from the competition.",
      bio: "Maria ensures seamless operations and client satisfaction across all our services and markets.",
      linkedin: "#",
      email: "maria@kingscompany.com",
      phone: "+351 123 456 790"
    },
    {
      id: 3,
      name: "João Pereira",
      role: "Investment Advisor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      quote: "Every investment should tell a story of growth and prosperity.",
      bio: "Specialized in Portuguese and Cape Verdean markets with a track record of successful investment strategies.",
      linkedin: "#",
      email: "joao@kingscompany.com",
      phone: "+351 123 456 791"
    },
    {
      id: 4,
      name: "Ana Costa",
      role: "Client Relations Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      quote: "Building lasting relationships is the foundation of our success.",
      bio: "Ana manages client relationships and ensures personalized service throughout the property ownership journey.",
      linkedin: "#",
      email: "ana@kingscompany.com",
      phone: "+351 123 456 792"
    }
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

  return (
    <section id="team" ref={sectionRef} className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-gold"></div>
            <span className="text-gold text-sm tracking-widest font-light">OUR TEAM</span>
            <div className="w-8 h-0.5 bg-gold"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-wider">
            MEET THE <span className="text-gold">EXPERTS</span>
          </h2>
          
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
          
          <p className="text-gray-300 text-xl max-w-4xl mx-auto font-light leading-relaxed">
            Our dedicated team of real estate professionals brings decades of combined experience in Portuguese and Cape Verdean markets
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-gray-700/50 backdrop-blur-sm hover:border-gold/50 transition-all duration-500 group cursor-pointer overflow-hidden">
                <CardContent className="p-0">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div className="text-white">
                        <p className="text-sm leading-relaxed mb-4">{member.bio}</p>
                        <div className="flex space-x-3">
                          <a
                            href={member.linkedin}
                            className="w-8 h-8 bg-gold/20 hover:bg-gold/40 rounded-full flex items-center justify-center transition-colors"
                          >
                            <Linkedin className="w-4 h-4 text-gold" />
                          </a>
                          <a
                            href={`mailto:${member.email}`}
                            className="w-8 h-8 bg-gold/20 hover:bg-gold/40 rounded-full flex items-center justify-center transition-colors"
                          >
                            <Mail className="w-4 h-4 text-gold" />
                          </a>
                          <a
                            href={`tel:${member.phone}`}
                            className="w-8 h-8 bg-gold/20 hover:bg-gold/40 rounded-full flex items-center justify-center transition-colors"
                          >
                            <Phone className="w-4 h-4 text-gold" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-white mb-2 group-hover:text-gold transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-gold text-sm mb-4">{member.role}</p>
                    <blockquote className="text-gray-300 text-sm italic leading-relaxed">
                      "{member.quote}"
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
