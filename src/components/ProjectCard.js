import React from 'react';

const ProjectCard = ({ title, description, image, githubLink, demoLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col h-full">
      <div className="w-full h-48 mb-6 overflow-hidden rounded-md">
        {/* You can replace this div with an <img> tag when you have actual images */}
        {image ? (
 <img src={image} alt={`${title} thumbnail`} className="w-full h-full object-cover" />
 ) : (
 <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600">
 Placeholder Image
 </div>
 )}
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>

      <p className="text-gray-700 text-base mb-6 flex-grow">{description}</p>

      <div className="flex space-x-4 mt-auto">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
          >
            GitHub
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;