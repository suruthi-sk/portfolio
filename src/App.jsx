import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import HiddenCorner from './components/HiddenCorner/HiddenCorner';
import Contact from './components/Contact/Contact';
import SocialDock from './components/SocialDock/SocialDock';
import './index.css';

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <SocialDock />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <HiddenCorner />
        <Contact />
      </main>
    </ThemeProvider>
  );
}
