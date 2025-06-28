import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from '/home/sandbox/my-portfolio/src/pages/Homepage.js';
import AboutPage from '/home/sandbox/my-portfolio/src/pages/AboutPage.js'; // Corrected path
import SkillsPage from '/home/sandbox/my-portfolio/src/pages/SkillsPage.js'; // Corrected path
import ProjectsPage from '/home/sandbox/my-portfolio/src/pages/ProjectsPage.js'; // Corrected path
import ExperiencePage from '/home/sandbox/my-portfolio/src/pages/ExperiencePage.js'; // Corrected path
import ContactPage from '/home/sandbox/my-portfolio/src/pages/ContactPage.js'; // Corrected path

// Assuming these components are still in the components directory
import Chatbot from './components/Chatbot.js';
import Navbar from './components/Navbar.js'; // We will create this component next

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Include the Navbar component */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {/* Download CV Section (You can decide if you want this on all pages or a specific one) */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <a href="/CV_Nkateko_Nkuna.pdf" download="CV_Nkateko_Nkuna.pdf" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block">
            Download My CV
          </a>
        </div>
      </section>
      <Chatbot /> {/* Include the Chatbot component (can be on all pages) */}
    </BrowserRouter>
  );
}

export default App;
