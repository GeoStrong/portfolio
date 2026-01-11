
import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EduLangSection from './components/EduLangSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';
import ScrollProgress from './components/ScrollProgress';

const App: React.FC = () => {
  return (
    <div className="relative">
      <ScrollProgress />
      
      <Suspense fallback={<div className="fixed inset-0 bg-gray-950 flex items-center justify-center text-indigo-500 font-bold">Loading Experience...</div>}>
        <ThreeBackground />
      </Suspense>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <ExperienceSection />
        <ProjectsSection />
        <EduLangSection />
        <Contact />
      </main>

      <Footer />

      {/* Background decoration elements */}
      <div className="fixed top-0 right-0 -z-20 w-[500px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full" />
      <div className="fixed bottom-0 left-0 -z-20 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full" />
    </div>
  );
};

export default App;
