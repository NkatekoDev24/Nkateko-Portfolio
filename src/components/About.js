import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 flex items-center justify-center">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Education</h3>
            <p className="text-lg leading-relaxed">University of the Free State (BSc Computer Science 2017–2021, BSc Honours Computer Science 2023–2024)</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Career Goal/Mission</h3>
            <p className="text-lg leading-relaxed">[Career goal/mission will go here - from CV objective]</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Summary of Skills</h3>
            <p className="text-lg leading-relaxed">[Summary of skills will go here - brief paragraph]</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;