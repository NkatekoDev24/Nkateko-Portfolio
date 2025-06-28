import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gray-100 text-gray-800">
      <div className="text-center container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        {/* Profile Image Section */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto md:mx-0 mb-8 md:mb-0 md:mr-12 shadow-lg">
          <img src="/assets/nkateko.jpg" alt="Nkateko Nkuna" className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110" />
        </div>

        {/* Text Content */}
        <div className="md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">Nkateko Nkuna</h1>
          <h2 className="text-xl md:text-2xl text-gray-700 mb-6">Software Developer | AI Enthusiast | Full Stack Learner</h2>
          <p className="text-lg max-w-xl mb-8 text-gray-800 leading-relaxed">
            Welcome to my portfolio! I'm a passionate software developer with a focus on building innovative solutions. I'm constantly exploring new technologies and honing my skills to create impactful software.
          </p>

          <Link to="/projects" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out mt-4">
            View Projects
          </Link>
          {/* Social Media Links Placeholder */}
          <div className="flex justify-center md:justify-start space-x-6">
            {/* Links will go here - Add actual social media icons and links */}
            {/* Example: <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300"><i className="fab fa-linkedin fa-2x"></i></a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;