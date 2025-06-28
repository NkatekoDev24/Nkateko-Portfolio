import React from 'react';

function ExperiencePage() {
  return (
    <section id="experience" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Professional Experience</h2>
        <div className="relative border-l border-gray-300 ml-4 md:ml-0">
          {/* University of the Free State Experience */}
          <div className="mb-8 flex items-center w-full">
            <div className="z-10 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full shrink-0 -left-4">
              {/* Icon or marker for timeline */}
            </div>
            <div className="ml-6 p-4 bg-white rounded-lg shadow-md w-full">
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">University of the Free State<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">2024 – Present</span></h3>
              <p className="block mb-2 text-sm font-normal leading-none text-gray-400">Junior Researcher</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Developed Lebitso App in Android Studio for South African sign language research.</li>
                <li>Co-authored the reports for the project advancing SASL for 4IR Technological Development.</li>
                <li>Developed a financial management app in Android Studio, tailored for small enterprises to foster good financial habits.</li>
              </ul>
            </div>
          </div>

          {/* DevelopmentHub Experience */}
          <div className="mb-8 flex items-center w-full">
            <div className="z-10 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full shrink-0 -left-4">
              {/* Icon or marker for timeline */}
            </div>
            <div className="ml-6 p-4 bg-white rounded-lg shadow-md w-full">
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">DevelopmentHub<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">Jul–Dec 2022</span></h3>
              <p className="block mb-2 text-sm font-normal leading-none text-gray-400">Full Stack Developer Intern</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Built dynamic web applications using Angular & ASP.NET Boilerplate (ABP).</li>
                <li>Developed responsive front-end interfaces with AngularJS for improved user experience.</li>
                <li>Designed RESTful APIs & backend services with Node.js, ensuring seamless functionality.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperiencePage;