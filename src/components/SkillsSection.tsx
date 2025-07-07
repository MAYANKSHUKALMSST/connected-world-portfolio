import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cpu, Wrench, Award, Network } from "lucide-react";

const skillCategories = [
  {
    title: "Software Tools",
    icon: Code,
    skills: ["STM Cube IDE", "KiCad", "Yocto Framework", "Postman", "Putty", "ESP IDF"]
  },
  {
    title: "Development Boards",
    icon: Cpu,
    skills: ["STM32, Nucleo, Blue Pill", "Raspberry Pi 5, 4", "AMB82-Mini", "ESP32, 32-S3, 8266", "Arduino"]
  },
  {
    title: "Hardware Analysis Tools",
    icon: Wrench,
    skills: ["Oscilloscope", "Signal Generator", "Variable Power Supply", "Logic Analyzer"]
  },
  {
    title: "Protocols & Networking",
    icon: Network,
    skills: [
      "MQTT", "CoAP", "HTTP/HTTPS", "AMQP", "WebSocket", "LwM2M", "OPC UA", 
      "TCP/IP", "UDP", "6LoWPAN", "Wi-Fi", "BLE", "Zigbee", "LoRaWAN", 
      "Cellular (2G–NB-IoT)", "I2C", "SPI", "UART", "TLS/SSL", "DTLS", "OAuth 2.0"
    ]
  }
];

const certifications = [
  "Ethical Hacker: IoT Attacks - Infosys Springboard",
  "KiCad PCB Designing – Udemy",
  "IoT Penetration Testing - Infosys Springboard",
  "Android App Development- Udemy",
  "AI For India 2.0 - Geek Networks, IIT Madras Research Park",
  "Python - Geek Networks, IIT Madras Research Park",
  "Cloud Implementation using Azure IoT - Infosys Springboard",
  "Industrial Iot 4.0- NPTEL"
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive toolkit for IoT and embedded systems development
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-primary">
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-muted/20 text-foreground border-border/50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-gradient-card border-border/50">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl text-primary">
              Certifications
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/10 border border-border/30">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;