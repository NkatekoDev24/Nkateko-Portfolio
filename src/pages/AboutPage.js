import React from 'react';

function AboutPage() {
  return (
    <section id="about" className="pt-32 pb-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        {/* Education Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          <p>University of the Free State (2017–2021): BSc Computer Science</p>
          <p>University of the Free State (2023–2024): BSc Honours Computer Science</p>
        </div>

        {/* Career Goal/Mission Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Career Goal/Mission</h3>
          <p>
            {/* Add your career goal/mission here */}
            Passionate about leveraging technology to solve real-world problems and continuously learning to build innovative solutions.
          </p>
        </div>

        {/* Summary of Skills Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Summary of Skills</h3>
          <p>
            {/* Add a brief paragraph summarizing your skills here */}
            Experienced in full-stack development with a focus on mobile and web applications. Proficient in various programming languages, frameworks, and tools, including C#, Java, JavaScript, React Native, and more. Eager to apply my skills in a challenging and impactful role.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;