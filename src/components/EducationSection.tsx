import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology, Computer Science",
    institution: "BBDNITM",
    location: "Lucknow, UP, India",
    period: "Sep. 2021 – July 2024",
    thesis: "Anomaly Detection in Wireless Sensor Network",
    highlights: [
      "Focused on data structures, algorithms, operating systems, computer networks, and software engineering",
      "Practical applications in IoT and embedded systems through academic projects",
      "Machine learning, IoT system design, cloud integration, and real-time data processing projects",
      "Proficiency in C, C++, Python, Java; full-stack applications and microservices architectures",
      "Software design patterns, database systems, Git and Agile methodologies"
    ],
    skills: ["C/C++", "Python", "Java", "IoT", "Machine Learning", "Cloud Computing", "Git"]
  },
  {
    degree: "Diploma in Electronics Engineering",
    institution: "Gov. Polytechnic Barabanki",
    location: "UP, India",
    period: "Aug. 2012 - May 2016",
    highlights: [
      "Specialized in analog and digital circuit design, embedded systems, and microcontroller programming",
      "Hands-on experience with hardware interfacing, PCB design, sensor integration, and communication protocols",
      "Academic projects involving automation systems, robotics, and power electronics",
      "Strong foundation in electronic device theory, signal processing, and instrumentation"
    ],
    skills: ["Circuit Design", "Embedded Systems", "PCB Design", "Microcontrollers", "Robotics"]
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6 bg-muted/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-muted-foreground">
            Academic foundation in computer science and electronics engineering
          </p>
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary-foreground" />
                    </div>
                    
                    <div>
                      <CardTitle className="text-2xl text-primary mb-2">
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="text-lg font-semibold text-foreground">
                        {edu.institution}
                      </CardDescription>
                      {edu.thesis && (
                        <div className="flex items-center gap-2 mt-2 text-sm text-primary">
                          <BookOpen className="w-4 h-4" />
                          <span className="font-medium">Thesis: {edu.thesis}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground lg:text-right">
                    <div className="flex items-center gap-2 lg:justify-end">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2 lg:justify-end">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-muted/20 text-primary border-primary/20">
                      {skill}
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

export default EducationSection;