import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WorkExperience from "@/components/WorkExperience";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <WorkExperience />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
};

export default Index;
