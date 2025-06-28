import React from 'react';

function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gray-100 text-gray-800">
      <div className="text-center container mx-auto px-4">
        {/* Profile Image Placeholder */}
        <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4">
           {/* Replace with actual image tag and src */}
           <img src="/assets/nkateko.jpg" alt="Nkateko Nkuna" className="w-full h-full object-cover rounded-full" />
        </div>

        <h1 className="text-4xl font-bold mb-2">Nkateko Nkuna</h1>
        <h2 className="text-xl text-gray-600 mb-4">Software Developer | AI Enthusiast | Full Stack Learner</h2>
        <p className="text-lg max-w-md mx-auto mb-6">
          Welcome to my portfolio! I'm a passionate software developer with a focus on building innovative solutions.
        </p>

        {/* Social Media Links Placeholder */}
        <div className="flex justify-center space-x-4">
          {/* Links will go here */}
        </div>
      </div>
    </div>
  );
}

export default Homepage;