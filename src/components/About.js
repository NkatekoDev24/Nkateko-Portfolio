import React from 'react';

function About() {
  return (
    <section id="about" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Education</h3>
        <p>University of the Free State (BSc Computer Science 2017–2021, BSc Honours Computer Science 2023–2024)</p>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Career Goal/Mission</h3>
        <p>[Career goal/mission will go here - from CV objective]</p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Summary of Skills</h3>
        <p>[Summary of skills will go here - brief paragraph]</p>
      </div>
    </section>
  );
}

export default About;