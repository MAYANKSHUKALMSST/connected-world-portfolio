import { Mail, Phone, Globe, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tech-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Mayank Shukla
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8">
            IoT Product Engineer & Embedded Systems Specialist
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Multidisciplinary engineer driving real-world innovations through cohesive integration 
            of embedded hardware and advanced software systems. Specialized in IoT, ML at the edge, 
            and cyber-physical systems.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="outline" size="lg" className="group">
              <Mail className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
              mayankshukla.ms.st@gmail.com
            </Button>
            
            <Button variant="outline" size="lg" className="group">
              <Phone className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
              +91 8177063899
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <Button size="lg" className="group">
              <Globe className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Website
            </Button>
            
            <Button variant="outline" size="lg" className="group">
              <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              GitHub
            </Button>
            
            <Button variant="outline" size="lg" className="group">
              <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;