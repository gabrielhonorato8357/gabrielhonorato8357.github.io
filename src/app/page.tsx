import Hero from "@/components/Hero";
import CategoriesSection from "@/components/CategoriesSection";
import WorkSection from "@/components/WorkSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <WorkSection />
      <ArchitectureSection />
      <ContactSection />
    </>
  );
}