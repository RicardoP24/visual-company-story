
import { Card, CardContent } from "@/components/ui/card";
import { Building, Users, MapPin, Home } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "PROPERTY OWNERSHIP ACADEMY",
      subtitle: "TAILORED INVESTMENT SERVICES",
      description: "We offer tailored 1:1 educational sessions for aspiring relocators and investors at all stages of their journey.",
      features: [
        "Clear explanations of legal, financial, and market realities",
        "Personalized guidance, based on your goals",
        "Tools, frameworks, and PDFs to move forward smart",
        "Perfect for early-stage investors, planners, or DIY movers"
      ],
      icon: Building,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "PROPERTY OWNERSHIP CONSULTANCY",
      subtitle: "TAILORED INVESTMENT SERVICES", 
      description: "End-to-end support for those ready to buy, rent, or invest. You bring the vision, we'll handle the rest.",
      features: [
        "Strategy planning based on your goals and timeline",
        "Market research, property search, visits, and negotiation",
        "Trusted partners for banking, legal, tax, and renovation",
        "Whether it's a first home, investment property, or land - we get it done right"
      ],
      icon: Users,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "PROPERTY OWNERSHIP TOUR",
      subtitle: "TAILORED INVESTMENT SERVICES",
      description: "A curated, premium experience for those who want to explore and get quality insight fast.",
      features: [
        "Property visits + partner meetings + cultural immersion",
        "Itinerary, logistics, and prep handled by our team",
        "Ideal for investors, relocators, or family buyers",
        "We guide you through Portugal or Cabo Verde, combining market insight strategies meetings, and on-site exploration"
      ],
      icon: MapPin,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "PROPERTY MANAGEMENT",
      subtitle: "TAILORED INVESTMENT SERVICES",
      description: "Whether you're abroad or simply don't want to deal with the hassle, we manage your property as if it were our own.",
      features: [
        "Renovation Management - Coordinating contractors, timelines, material acquisition and budgets",
        "Long-Term Rental Management - Tenant screening, onboarding, and issue resolution"
      ],
      icon: Home,
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wider">
            OUR <span className="text-gold">SERVICES</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto font-light">
            Comprehensive real estate solutions tailored to your investment journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-gold/20 hover:border-gold/40 transition-all duration-500 group overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="w-8 h-8 text-gold mb-2" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-light text-gold mb-2 tracking-wider">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-400 tracking-widest mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed font-light">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                        <span className="font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
