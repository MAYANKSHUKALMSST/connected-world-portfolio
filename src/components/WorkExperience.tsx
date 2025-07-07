import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    title: "IoT Product Engineer",
    company: "Zuree Telecom Pvt Ltd",
    location: "Gurugram, India",
    period: "Oct. 2024 - Present",
    achievements: [
      "Spearheading end-to-end development of commercial IoT products with system architecture, embedded firmware (C/C++/Python), and custom PCB design",
      "Developing ML models for various IoT Products using ESP32, STM32, Raspberry Pi, and AMB82 MINI platforms",
      "Integrated sensors and modules (SIM800L/A7670E, MPU6050, GPS, TTL converters, RS485) with MQTT, HTTP, HTTPS protocols",
      "Contributed two granted patents focused on innovative IoT system architectures and sensor integration frameworks",
      "Designed and deployed custom quadcopter drone with embedded flight control, sensor fusion, and telemetry"
    ],
    technologies: ["C/C++", "Python", "ESP32", "STM32", "Raspberry Pi", "MQTT", "PCB Design", "ML"]
  },
  {
    title: "Embedded Software Engineer",
    company: "TechVein IT Solution Pvt Ltd",
    location: "Kolkata, India",
    period: "April 2024 - Oct. 2024",
    achievements: [
      "Developed and prototyped IoT-based automation solutions including line follower robots and pick-and-place robotic arms",
      "Implemented embedded control algorithms and real-time logic using ATmega, ESP8266, STM32 microcontrollers",
      "Designed systems with IoT communication protocols (MQTT, CoAP, HTTP) for reliable device-to-cloud connectivity",
      "Integrated analog/digital sensors (proximity, infrared, temperature, ultrasonic, encoders) for real-time decision-making"
    ],
    technologies: ["ATmega", "ESP8266", "STM32", "MQTT", "CoAP", "Robotics", "IoT Sensors"]
  }
];

const WorkExperience = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional journey in IoT and embedded systems development
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-primary mb-2">
                      {experience.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-foreground">
                      {experience.company}
                    </CardDescription>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="w-4 h-4" />
                      {experience.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-muted/20 text-primary border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;