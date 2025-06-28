import React from 'react';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Experience from './components/Experience.js';
import Chatbot from './components/Chatbot.js';

function App() {
  return (
    <main className="text-gray-800">
      {/* Homepage Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>

          <h1 className="text-5xl font-bold text-gray-900 mb-3">Nkateko Nkuna</h1>
          <h2 className="text-2xl text-gray-700 mb-6">Software Developer | AI Enthusiast | Full Stack Learner</h2>
          <p className="text-lg text-gray-800 max-w-xl mx-auto mb-8">
            Welcome to my portfolio! I'm a passionate software developer with a focus on building innovative solutions.
          </p>

          {/* Social Media Links Placeholder */}
          <div className="flex justify-center space-x-4">
            {/* Links will go here */}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <About />
      <Skills />
      <Projects />
      <Experience />
      <button href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Download My CV</button>
      <Chatbot />
    </main>
  );
}

export default App;
