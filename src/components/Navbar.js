import React from 'react';
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          My Portfolio
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-gray-300 hover:text-white">
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
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;