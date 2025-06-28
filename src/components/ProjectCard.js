import React from 'react';

const ProjectCard = ({ title, description, image, githubLink, demoLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col h-full">
      <div className="w-full h-48 mb-4 overflow-hidden rounded-md">
        {/* You can replace this div with an <img> tag when you have actual images */}
        {image ? (
 <img src={image} alt={`${title} thumbnail`} className="w-full h-full object-cover" />
 ) : (
 <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600">
 Placeholder Image
 </div>
 )}
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>

      <p className="text-gray-600 text-base mb-4">{description}</p>

      <div className="flex space-x-4">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            GitHub
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline font-medium"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;