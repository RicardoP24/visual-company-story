
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import logo from '../assets/logo.png'; // Adjust path as needed

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    const contactSection = document.getElementById('services');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('resources');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Animation */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" style={{
        transform: `translateY(${scrollY * 0.5}px)`
      }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
      </div>

      {/* Animated Background Image */}
      <div className="absolute inset-0 opacity-20 animate-slow-zoom" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: `translateY(${scrollY * 0.3}px)`
      }}></div>
    </div>

    {/* Floating Geometric Elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rotate-45 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-gold/30 rotate-12 animate-float" style={{
        animationDelay: '2s'
      }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gold/10 rotate-45 animate-float" style={{
        animationDelay: '4s'
      }}></div>
      <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-gold/15 rounded-full animate-float" style={{
        animationDelay: '1s'
      }}></div>
    </div>

    {/* Main Content */}
    <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
      {/* Animated Logo */}
      <div className="flex justify-center mb-8 ">
        <img
          src={logo}
          alt="Logo"
          className="w-20 h-20 object-contain drop-shadow-[0_0_10px_rgba(160,143,42,0.8)]"
        />
      </div>

      <div className="animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-wider">
          <span className="text-gold">KINGS 'N</span>
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

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
        <Button
          size="lg"
          className="bg-gold hover:bg-gold-light text-black font-medium tracking-wider px-8 py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          onClick={scrollToServices}
        >
          EXPLORE SERVICES
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-gold text-gold hover:bg-gold hover:text-black font-medium tracking-wider px-8 py-3 transition-all duration-300 transform hover:scale-105"
          onClick={scrollToContact}
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  </section>;
};
