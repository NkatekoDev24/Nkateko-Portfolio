import React from 'react';
import ProjectCard from '../components/ProjectCard'; // Adjust the import path if necessary

function ProjectsPage() {
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
    <section id="projects" className="py-16 bg-gray-100 pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl} // Include demoUrl if available
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;