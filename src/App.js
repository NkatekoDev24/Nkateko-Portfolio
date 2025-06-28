import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage.js'; // Adjust the import path as necessary
import AboutPage from './pages/AboutPage.js';
import SkillsPage from './pages/SkillsPage.js';
import ProjectsPage from './pages/ProjectsPage.js';
import ExperiencePage from './pages/ExperiencePage.js';
import ContactPage from './pages/ContactPage.js';

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
    </BrowserRouter>
  );
}

export default App;
