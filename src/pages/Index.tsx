import HeroSection from "@/components/HeroSection";
import WorkExperience from "@/components/WorkExperience";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WorkExperience />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
    </div>
  );
};

export default Index;
