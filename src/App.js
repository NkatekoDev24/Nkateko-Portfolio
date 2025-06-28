import React from 'react';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Experience from './components/Experience.js';
import Chatbot from './components/Chatbot.js';

function App() {
  return (
    <main className="bg-gray-100 text-gray-800">
      <div className="text-center">
        {/* Profile Image Placeholder */}
        <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>

        <h1 className="text-4xl font-bold mb-2">Nkateko Nkuna</h1>
        <h2 className="text-xl text-gray-600 mb-4">Software Developer | AI Enthusiast | Full Stack Learner</h2>
        <p className="text-lg max-w-md mx-auto mb-6">
          Welcome to my portfolio! I'm a passionate software developer with a focus on building innovative solutions.
        </p>

        {/* Social Media Links Placeholder */}
        <div className="flex justify-center space-x-4">
          {/* Links will go here */}
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Chatbot />
    </main>
  );
}

export default App;
