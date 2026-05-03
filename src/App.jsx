import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import HiddenCorner from './components/HiddenCorner/HiddenCorner';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import SocialDock from './components/SocialDock/SocialDock';
import Chatbot from './components/Chatbot/Chatbot';
import BackToTop from './components/BackToTop/BackToTop';
import PageLoader from './components/PageLoader/PageLoader';
import './index.css';

export default function App() {
  return (
    <ThemeProvider>
      <PageLoader />
      <Navbar />
      <SocialDock />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Blog />
        <HiddenCorner />
        <Contact />
      </main>
      <Chatbot />
      <BackToTop />
    </ThemeProvider>
  );
}
