import React from 'react';
import ProjectCard from './ProjectCard'; // Assuming ProjectCard.js is in the same directory

const Projects = () => {
  const projects = [
    {
      title: 'Good Money Habits App',
      description: 'Financial education for small/medium businesses',
      imageUrl: '/assets/gmh_logo.png', // Replace with actual image URL
      githubUrl: 'https://github.com/NkatekoDev24/Good-Money-Habits',
    },
    {
      title: 'Lebitso App',
      description: 'South African Sign Language communication tool',
      imageUrl: 'placeholder2.jpg', // Replace with actual image URL
      githubUrl: 'https://github.com/NkatekoDev24/LebitsoApp-Android',
    },
    {
      title: 'Job Interview Questions Management App',
      description: 'Tool for managing interview questions',
      imageUrl: 'placeholder3.jpg', // Replace with actual image URL
      githubUrl: 'https://github.com/NkatekoDev24/Job-Interview-Questions-Management-App',
    },
  ];

  return (
    <section className="py-16"> {/* Added padding */}
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2> {/* Styled heading */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Added responsive grid with gap */}
        {projects.map((project, index) => (
          <ProjectCard
            key={index} // Using index as key, consider using a unique ID if available
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;