import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight, Play } from "lucide-react";
export const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const testimonials = [{
    id: 1,
    name: "Sofia Martins",
    role: "Property Investor",
    location: "Lisbon, Portugal",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Kings in Company transformed my investment strategy completely. Their insights into the Portuguese market helped me secure three properties that have already appreciated 25%. The Academy program was invaluable.",
    highlight: "25% appreciation in 18 months",
    videoTestimonial: true
  }, {
    id: 2,
    name: "Marcus Thompson",
    role: "First-time Buyer",
    location: "Cabo Verde",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "From complete beginner to confident property owner in 6 months. The consultation process was thorough, and they guided me through every step. I now own a beautiful villa in Sal Island.",
    highlight: "Dream villa acquired in 6 months",
    videoTestimonial: false
  }, {
    id: 3,
    name: "Elena Rodriguez",
    role: "Real Estate Developer",
    location: "Porto, Portugal",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The property ownership tour opened my eyes to opportunities I never knew existed. Their network and expertise in emerging markets gave me the confidence to expand my portfolio internationally.",
    highlight: "Expanded to 3 countries",
    videoTestimonial: true
  }, {
    id: 4,
    name: "João Silva",
    role: "Retired Investor",
    location: "Algarve, Portugal",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "After 30 years in traditional investments, Kings in Company showed me the power of strategic real estate. Their management service means I can enjoy retirement while my properties generate passive income.",
    highlight: "Passive income achieved",
    videoTestimonial: false
  }];
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);
  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(index);
  };
  return <section ref={sectionRef} className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '3s'
      }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 mb-6">
            <Quote className="w-6 h-6 text-gold animate-pulse" />
            <span className="text-gold text-sm tracking-widest font-light">SUCCESS STORIES</span>
            <Quote className="w-6 h-6 text-gold animate-pulse transform rotate-180" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-wider">
            VOICES OF <span className="text-gold">SUCCESS</span>
          </h2>
          
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
          
          <p className="text-gray-300 text-xl max-w-4xl mx-auto font-light leading-relaxed">
            Real stories from clients who transformed their property ownership journey with Kings in Company
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-gold/20 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Client Image & Info */}
                <div className="lg:col-span-2 p-8 lg:p-12 bg-gradient-to-br from-gold/10 to-gold/5 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="w-32 h-32 mx-auto mb-6 relative">
                      <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} className="w-full h-full rounded-full object-cover border-4 border-gold/30 shadow-2xl" />
                      {testimonials[currentTestimonial].videoTestimonial && <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-gold/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-gold transition-colors">
                            <Play className="w-5 h-5 text-black ml-0.5" />
                          </div>
                        </div>}
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-xl font-medium text-white mb-2">{testimonials[currentTestimonial].name}</h3>
                      <p className="text-gold text-sm mb-1">{testimonials[currentTestimonial].role}</p>
                      <p className="text-gray-400 text-xs mb-4">{testimonials[currentTestimonial].location}</p>
                      
                      {/* Rating */}
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-gold fill-current" />)}
                      </div>
                      
                      {/* Highlight Badge */}
                      <div className="inline-flex items-center px-4 py-2 bg-gold/20 rounded-full border border-gold/30">
                        <span className="text-gold text-xs font-medium">{testimonials[currentTestimonial].highlight}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="relative">
                    <Quote className="w-12 h-12 text-gold/30 mb-6" />
                    
                    <blockquote className="text-white text-lg lg:text-xl font-light leading-relaxed mb-8">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>
                    
                    <Quote className="w-12 h-12 text-gold/30 ml-auto transform rotate-180" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button onClick={prevTestimonial} className="w-12 h-12 bg-gold/20 hover:bg-gold/30 border border-gold/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
              <ChevronLeft className="w-5 h-5 text-gold" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => <button key={index} onClick={() => goToTestimonial(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-gold scale-125' : 'bg-gold/30 hover:bg-gold/50'}`} />)}
            </div>

            <button onClick={nextTestimonial} className="w-12 h-12 bg-gold/20 hover:bg-gold/30 border border-gold/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
              <ChevronRight className="w-5 h-5 text-gold" />
            </button>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className={`mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
        transitionDelay: '500ms'
      }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => <Card key={testimonial.id} className={`bg-gradient-to-br from-gray-900/50 to-black/50 border-gold/10 hover:border-gold/30 transition-all duration-500 cursor-pointer group ${index === currentTestimonial ? 'ring-2 ring-gold/30' : ''}`} onClick={() => goToTestimonial(index)}>
                <CardContent className="p-6 bg-neutral-700">
                  <div className="flex items-center mb-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-gold/30" />
                    <div className="ml-3">
                      <h4 className="text-white text-sm font-medium">{testimonial.name}</h4>
                      <p className="text-gold text-xs">{testimonial.role}</p>
                    </div>
                    {testimonial.videoTestimonial && <Play className="w-4 h-4 text-gold ml-auto" />}
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-white transition-colors">
                    "{testimonial.text.substring(0, 120)}..."
                  </p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-3 h-3 text-gold fill-current" />)}
                    </div>
                    <span className="text-gold text-xs">{testimonial.highlight}</span>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};