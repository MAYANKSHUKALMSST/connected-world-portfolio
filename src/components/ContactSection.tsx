import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Globe, Github, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss your next IoT or embedded systems project
          </p>
        </div>
        
        <Card className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary mb-4">
              Contact Information
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/10 border border-border/30">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">mayankshukla.ms.st@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/10 border border-border/30">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">+91 8177063899</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="lg" className="group">
                <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                GitHub
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group"
                onClick={() => window.open('https://www.linkedin.com/in/mayank-shukla-24086112a/', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                LinkedIn
              </Button>

              <Button variant="outline" size="lg" className="group">
                <Globe className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Website
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;