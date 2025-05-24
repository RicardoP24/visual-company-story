
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wider">
            GET <span className="text-gold">STARTED</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto font-light">
            Ready to begin your real estate investment journey? Contact us to schedule a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-gradient-to-br from-gray-900 to-black border-gold/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light text-gold mb-6 tracking-wider">
                CONTACT INFORMATION
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-medium mb-2">Email</h4>
                  <p className="text-gray-300">info@kingsincompany.com</p>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">Services</h4>
                  <div className="space-y-2 text-gray-300">
                    <p>• Property Ownership Academy</p>
                    <p>• Investment Consultancy</p>
                    <p>• Property Tours</p>
                    <p>• Property Management</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">Locations</h4>
                  <div className="space-y-1 text-gray-300">
                    <p>Portugal</p>
                    <p>Cabo Verde</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-black border-gold/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light text-gold mb-6 tracking-wider">
                REQUEST CONSULTATION
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm mb-2">First Name</label>
                    <Input className="bg-black/50 border-gray-600 text-white focus:border-gold" />
                  </div>
                  <div>
                    <label className="block text-white text-sm mb-2">Last Name</label>
                    <Input className="bg-black/50 border-gray-600 text-white focus:border-gold" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white text-sm mb-2">Email</label>
                  <Input type="email" className="bg-black/50 border-gray-600 text-white focus:border-gold" />
                </div>
                
                <div>
                  <label className="block text-white text-sm mb-2">Service Interest</label>
                  <select className="w-full p-3 bg-black/50 border border-gray-600 text-white focus:border-gold rounded-md">
                    <option>Property Ownership Academy</option>
                    <option>Property Ownership Consultancy</option>
                    <option>Property Ownership Tour</option>
                    <option>Property Management</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white text-sm mb-2">Message</label>
                  <Textarea className="bg-black/50 border-gray-600 text-white focus:border-gold min-h-32" />
                </div>
                
                <Button className="w-full bg-gold hover:bg-yellow-600 text-black font-medium tracking-wider py-3 transition-all duration-300">
                  SEND MESSAGE
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
