import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import NAV from './components/NAV';
import HeroSec from './components/HeroSec';
import Feautures from './components/Feautures';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import Contacts from './components/Contacts';
import ResumeSkills from './components/ResumeSkills';
import Certification from './components/Certification';
import Home from './components/Home';
import Chatbot from './components/Chatbot';
import ScrollToTop from './components/ScrollToTop';
import ChatbotWidget from './components/ChatbotWidget';
import AnimatedBackground from './components/AnimatedBackground';
import WelcomeAnimation from './components/WelcomeAnimation';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 50,
      delay: 0,
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row overflow-x-hidden scroll-smooth">
      {/* Welcome Animation */}
      <WelcomeAnimation />
      
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navbar */}
      <NAV />

      {/* Toast notifications */}
      <ToastContainer position="top-right" autoClose={400} />

      {/* Main Content */}
      <div className="w-full md:ml-[19vw] md:w-[81vw]">
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/herosec" element={<HeroSec />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<ResumeSkills />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/features" element={<Feautures />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certification />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </div>

      {/* Floating Chatbot Widget - Always Visible */}
      <div className="fixed bottom-0 right-0 z-[99999] pointer-events-none">
        <div className="pointer-events-auto">
          <ChatbotWidget />
        </div>
      </div>
    </div>
  );
};

export default App;
