
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Network } from "@/components/Network";
import { Features } from "@/components/Features";
import { Achievement } from "@/components/Achievement";
import { Markets } from "@/components/Markets";
import { CompanyStatement } from "@/components/CompanyStatement";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Network />
      <Features />
      <Achievement />
      <Markets />
      <CompanyStatement />
      <Team />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
