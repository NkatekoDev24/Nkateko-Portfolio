import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1A2E3E] p-4 z-50 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4 py-2 bg-[#283a4a]/90 border-b border-gray-600">
        <Link to="/" className="text-white text-2xl font-semibold hover:text-gray-300 transition duration-300">
          My Portfolio
        </Link>
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="text-gray-300 hover:text-white relative group">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" className="text-gray-300 hover:text-white">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-gray-300 hover:text-white">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/experience" className="text-gray-300 hover:text-white">
              Experience
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </li>
          {/* Add the underline effect styles within a style tag or in index.css */}
          <style jsx>{`
            .group:hover .underline-animation {
              transform: scaleX(1);
            }
          `}</style>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;