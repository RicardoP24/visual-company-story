
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered Background with Parallax */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
        </div>
        
        {/* Animated Background Image */}
        <div 
          className="absolute inset-0 opacity-20 animate-slow-zoom"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        ></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rotate-45 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-gold/30 rotate-12 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gold/10 rotate-45 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-gold/15 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Animated Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 relative animate-glow">
            <div className="absolute inset-0 border-2 border-gold rounded-full">
              <div className="absolute inset-2 border border-gold rounded-full">
                <div className="absolute inset-1 bg-gradient-to-br from-gold to-gold-light rounded-full opacity-30"></div>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border border-gold transform rotate-45"></div>
            </div>
          </div>
        </div>

        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-wider">
            <span className="text-gold">KINGS IN</span>
            <br />
            <span className="text-white">COMPANY</span>
          </h1>

          <p className="text-gold text-lg md:text-xl mb-4 tracking-widest font-light">
            REAL ESTATE NETWORK
          </p>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>

          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Tailored investment services for aspiring relocators and investors at all stages of their journey.
            Whether you're just starting out or refining your strategy, we'll answer your questions and equip you with confidence.
          </p>
        </div>

        {/* Dynamic Property Search Overlay */}
        <div className="animate-fade-up bg-black/20 backdrop-blur-md border border-gold/20 rounded-2xl p-8 mb-8 max-w-4xl mx-auto">
          <h3 className="text-white text-xl mb-6 font-light tracking-wider">DISCOVER YOUR NEXT INVESTMENT</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative group">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold w-5 h-5" />
              <Input 
                placeholder="Location (Portugal, Cabo Verde)" 
                className="pl-10 bg-black/30 border-gold/30 text-white placeholder-gray-400 focus:border-gold transition-all duration-300"
              />
            </div>
            <div className="relative group">
              <Input 
                placeholder="Budget Range" 
                className="bg-black/30 border-gold/30 text-white placeholder-gray-400 focus:border-gold transition-all duration-300"
              />
            </div>
            <Button className="bg-gold hover:bg-gold-light text-black font-medium tracking-wider transition-all duration-300 transform hover:scale-105">
              <Search className="w-4 h-4 mr-2" />
              EXPLORE
            </Button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold-light text-black font-medium tracking-wider px-8 py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            EXPLORE SERVICES
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-gold text-gold hover:bg-gold hover:text-black font-medium tracking-wider px-8 py-3 transition-all duration-300 transform hover:scale-105"
          >
            LEARN MORE
          </Button>
        </div>
      </div>
    </section>
  );
};
