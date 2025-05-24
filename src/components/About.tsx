
export const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-wider">
              OUR <span className="text-gold">APPROACH</span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-gold to-transparent mb-8"></div>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed font-light">
              At Kings in Company, we believe that every real estate journey is unique. Our tailored approach ensures 
              that whether you're taking your first steps into property investment or expanding your portfolio, 
              you receive the personalized guidance and expertise you need.
            </p>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light">
              From educational sessions and strategic consultancy to curated property tours and comprehensive 
              management services, we're your trusted partners in navigating the complexities of international 
              real estate investment.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-light text-gold mb-3 tracking-wider">EXPERTISE</h3>
                <p className="text-gray-400 font-light">
                  Deep market knowledge across Portugal and Cabo Verde
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-light text-gold mb-3 tracking-wider">NETWORK</h3>
                <p className="text-gray-400 font-light">
                  Trusted partners in legal, financial, and construction services
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80"
                alt="Modern architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Geometric overlay */}
              <div className="absolute top-8 right-8 w-20 h-20 border-2 border-gold/30 rotate-45"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-gold/20 rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
