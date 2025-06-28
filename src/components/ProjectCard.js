import React from 'react';

const ProjectCard = ({ title, description, image, githubLink, demoLink }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gray-200 mb-4">
        {/* You can replace this div with an <img> tag when you have actual images */}
        {image && <img src={image} alt={`${title} thumbnail`} className="w-full h-full object-cover" />}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-700 mb-4">{description}</p>

      {/* Links */}
      <div className="flex space-x-4">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;