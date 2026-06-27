import Hero from '../sections/Hero';
import Dashboard from '../sections/Dashboard';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Timeline from '../sections/Timeline';
import Certifications from '../sections/Certifications';
import Resume from '../sections/Resume';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <Dashboard />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Certifications />
      <Resume />
      <Contact />
    </main>
  );
}
