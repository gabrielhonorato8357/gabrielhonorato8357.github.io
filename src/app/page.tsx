import Hero from "@/components/Hero";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ArchitectureSection from "@/components/ArchitectureSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <FeaturedProjects />
      <ArchitectureSection />
      <ContactSection />
    </>
  );
}
