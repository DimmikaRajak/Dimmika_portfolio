import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchSection } from './components/ResearchSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-600 selection:text-white">
      {/* Navigation Bar with Mobile Side Drawer & Direct Resume Download */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="space-y-2">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResearchSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
