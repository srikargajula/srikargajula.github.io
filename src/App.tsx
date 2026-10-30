import { useState } from 'react';
import { BackgroundParticles } from './components/BackgroundParticles';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { FloatingActions } from './components/FloatingActions';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07080D] text-slate-200 selection:bg-indigo-500/30 selection:text-indigo-200 relative overflow-x-hidden">
      {/* Intro Brand Loader Screen */}
      <LoadingScreen />

      {/* Dynamic Background Particle Constellation */}
      <BackgroundParticles />

      {/* Main Navigation Bar */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Portfolio Content */}
      <main className="relative z-10">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top & Quick Actions */}
      <FloatingActions onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Interactive Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
