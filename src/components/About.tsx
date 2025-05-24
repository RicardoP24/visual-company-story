
import { Button } from "@/components/ui/button";
import { Award, Globe, Users, TrendingUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countUp, setCountUp] = useState({ projects: 0, clients: 0, years: 0, satisfaction: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Animate counters
          const duration = 2000;
          const steps = 60;
          const interval = duration / steps;
          
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            
            setCountUp({
              projects: Math.floor(150 * progress),
              clients: Math.floor(500 * progress),
              years: Math.floor(12 * progress),
              satisfaction: Math.floor(98 * progress)
            });
            
            if (step >= steps) clearInterval(timer);
          }, interval);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: TrendingUp, label: "Properties Managed", value: countUp.projects, suffix: "+" },
    { icon: Users, label: "Happy Clients", value: countUp.clients, suffix: "+" },
    { icon: Globe, label: "Years Experience", value: countUp.years, suffix: "" },
    { icon: Award, label: "Satisfaction Rate", value: countUp.satisfaction, suffix: "%" }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-gold"></div>
              <span className="text-gold text-sm tracking-widest font-light">OUR STORY</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-wider leading-tight">
              WHERE <span className="text-gold">VISION</span> MEETS
              <br />
              <span className="text-gold">EXECUTION</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                At Kings in Company, we don't just facilitate transactions — we craft investment journeys. 
                Our approach transcends traditional real estate services, creating bespoke experiences that 
                honor both your aspirations and the unique character of each property.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                From the sun-drenched coastlines of Portugal to the pristine archipelago of Cabo Verde, 
                we've cultivated relationships that unlock opportunities others simply cannot access. 
                Every client becomes part of our extended family of successful investors.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center p-4 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-lg border border-gold/20 transition-all duration-700 hover:border-gold/40 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                  <div className="text-2xl font-light text-white mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs text-gray-400 tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-gold hover:bg-gold-light text-black font-medium tracking-wider px-8 py-3 transition-all duration-300 transform hover:scale-105">
              DISCOVER OUR PROCESS
            </Button>
          </div>

          {/* Visual Side */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80"
                  alt="Luxury architecture"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Floating Quote */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-black/80 backdrop-blur-sm p-6 rounded-lg border border-gold/20">
                    <p className="text-gold text-sm italic leading-relaxed">
                      "Excellence is not a destination, but a journey of continuous refinement in everything we do."
                    </p>
                    <div className="mt-3 text-xs text-gray-400 tracking-wider">
                      — KINGS IN COMPANY PHILOSOPHY
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Geometric Overlays */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-gold/30 rotate-45 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gold/20 rotate-12 animate-float" style={{ animationDelay: '2s' }}></div>
              
              {/* Side Image */}
              <div className="absolute top-1/4 -right-8 w-32 h-40 bg-gradient-to-br from-gray-800 to-black rounded-lg overflow-hidden border border-gold/20">
                <img 
                  src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=400&q=80"
                  alt="Modern building detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
