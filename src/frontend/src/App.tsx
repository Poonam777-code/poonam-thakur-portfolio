import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { Toaster } from "sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster
        position="bottom-right"
        richColors
        toastOptions={{
          className: "font-body",
          duration: 4500,
        }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
