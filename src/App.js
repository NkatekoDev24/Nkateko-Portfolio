import React from 'react';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Experience from './components/Experience.js';
import Contact from './components/Contact.js';
import Chatbot from './components/Chatbot.js';

function App() {
  return (
    <main className="text-gray-800">
      {/* Homepage Section */}
      <section className="relative h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white flex items-center justify-center">
        <div className="container mx-auto px-4 text-center z-10">
          {/* Profile Image Placeholder */}
          <div className="w-40 h-40 bg-gray-300 rounded-full mx-auto mb-6 overflow-hidden shadow-lg">
            {/* Replace with your image */}
            <img src="/path/to/your/profile-image.jpg" alt="Profile" className="w-full h-full object-cover"/>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-4 animate-fade-in-up">Nkateko Nkuna</h1>
          <h2 className="text-2xl md:text-3xl mb-8 animate-fade-in-up animation-delay-200">Software Developer | AI Enthusiast | Full Stack Learner</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in animation-delay-400">
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
      <Contact />

      {/* Download CV Section */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <a href="/CV_Nkateko_Nkuna.pdf" download="CV_Nkateko_Nkuna.pdf" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block">
            Download My CV
          </a>
        </div>
      </section>
      <Chatbot />
    </main>
  );
}

export default App;
