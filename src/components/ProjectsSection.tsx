import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "OBD Device for OHS Norms",
    company: "Telecom",
    date: "Jan 2025",
    status: "Deployed",
    description: "Commercial OBD device implementation for Occupational Health and Safety compliance monitoring"
  },
  {
    title: "Smart Energy Meter with Flow Sensor",
    company: "Firmware Development",
    date: "March 2025",
    status: "Deployed",
    description: "Developed firmware for smart energy monitoring system with integrated flow sensor technology"
  },
  {
    title: "Drone Development",
    company: "Telecom",
    date: "April 2025",
    status: "Deployed",
    description: "Complete drone system development with embedded flight control and telemetry capabilities"
  },
  {
    title: "OBD for Amazon Fleet Management",
    company: "Amazon Partnership",
    date: "June 2025",
    status: "Deployed",
    description: "Fleet management solution using OBD technology for Amazon's logistics operations"
  },
  {
    title: "Custom Measurement for Tailoring Using ML",
    company: "ML Application",
    date: "Ongoing",
    status: "In Development",
    description: "Machine learning-based custom measurement system for tailoring industry applications"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Commercial Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            Deployed solutions making real-world impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-primary mb-2 group-hover:text-tech-blue-light transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-foreground font-medium">
                      {project.company}
                    </CardDescription>
                  </div>
                  
                  <Badge 
                    variant={project.status === "Deployed" ? "default" : "secondary"}
                    className={project.status === "Deployed" 
                      ? "bg-primary/20 text-primary border-primary/30" 
                      : "bg-muted/20 text-muted-foreground"
                    }
                  >
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {project.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;