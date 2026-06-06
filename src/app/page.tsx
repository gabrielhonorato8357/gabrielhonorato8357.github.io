import Hero from "@/components/Hero";
import CategoriesSection from "@/components/CategoriesSection";
import WorkSection from "@/components/WorkSection";
import ProjectsSection from "@/components/ProjectsSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <WorkSection />
      <ProjectsSection />
      <ArchitectureSection />
      <ContactSection />
    </>
  );
}
