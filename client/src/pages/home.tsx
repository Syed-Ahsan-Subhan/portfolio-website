import Navigation from "@/components/navigation";
import HeroMinimal from "@/components/hero-minimal";
import About from "@/components/about";
import SkillsClean from "@/components/skills-clean";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroMinimal />
      <About />
      <SkillsClean />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
