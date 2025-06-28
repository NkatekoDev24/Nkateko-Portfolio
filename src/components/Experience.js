import React from 'react';

const Experience = () => {
  return (
    <section>
      <h2>Professional Experience</h2>
      <div>
        <div>
          <h3>Junior Researcher at University of the Free State</h3>
          <p>2024–Present</p>
          <ul>
            <li>Android apps for sign language & financial education</li>
            <li>Research + development support</li>
          </ul>
        </div>
        <div>
          <h3>Full Stack Developer Intern at DevelopmentHub</h3>
          <p>Jul–Dec 2022</p>
          <ul>
            <li>Angular front-ends</li>
            <li>REST APIs with Node.js</li>
          </ul>
        </div>
        {/* Add more work experience entries as needed */}
      </div>
    </section>
  );
}

export default Experience;