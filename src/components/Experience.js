import React from 'react';

const Experience = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">Professional Experience</h2>
      <div className="relative border-l-2 border-gray-200">
        <div className="mb-8 flex items-center w-full">
          <div className="z-10 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full shrink-0 -left-4">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-900">Junior Researcher at University of the Free State</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">2024–Present</time>
            <ul className="list-disc list-inside text-base font-normal text-gray-500">
              <li>Developed Lebitso App in Android Studio for South African sign language research.</li>
              <li>Co-authored the reports for the project advancing SASL for 4IR Technological Development.</li>
              <li>Developed a financial management app in Android Studio, tailored for small enterprises to foster good financial habits.</li>
            </ul>
          </div>
        </div>
        <div className="mb-8 flex items-center w-full">
           <div className="z-10 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full shrink-0 -left-4">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-900">Full Stack Developer Intern at DevelopmentHub</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">Jul–Dec 2022</time>
            <ul className="list-disc list-inside text-base font-normal text-gray-500">
              <li>Built dynamic web applications using Angular & ASP.NET Boilerplate (ABP).</li>
              <li>Developed responsive front-end interfaces with AngularJS for improved user experience.</li>
              <li>Designed RESTful APIs & backend services with Node.js, ensuring seamless functionality.</li>
            </ul>
          </div>
        </div>
        {/* Add more work experience entries as needed */}
      </div>
    </section>
  );
}

export default Experience;