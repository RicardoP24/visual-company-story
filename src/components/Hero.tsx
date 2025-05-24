
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>

      {/* Geometric background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-gold/30 rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gold/10 rotate-45"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 relative">
            <div className="absolute inset-0 border-2 border-gold rounded-full animate-pulse">
              <div className="absolute inset-2 border border-gold rounded-full">
                <div className="absolute inset-1 bg-gradient-to-br from-gold to-yellow-600 rounded-full opacity-30"></div>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border border-gold transform rotate-45"></div>
            </div>
          </div>
        </div>

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

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gold hover:bg-yellow-600 text-black font-medium tracking-wider px-8 py-3 transition-all duration-300 transform hover:scale-105"
          >
            EXPLORE SERVICES
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-gold text-gold hover:bg-gold hover:text-black font-medium tracking-wider px-8 py-3 transition-all duration-300"
          >
            LEARN MORE
          </Button>
        </div>
      </div>
    </section>
  );
};
