import Hero from "@/pages/Hero";
import About from "@/pages/About";
import SkillsSection from "@/pages/SkillsSection";
import Contact from "@/pages/Contact";
import Work from "@/pages/Work";

export default function Home() {
  return (
    <div className="mt-16">
      <Hero />
      <About />
      <SkillsSection />
      <Work />
      <Contact />
    </div>
  );
}
