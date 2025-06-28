import React from 'react';
import { SiCsharp, SiJava, SiKotlin, SiPython, SiJavascript, SiTypescript, SiReact, SiAngularjs, SiStreamlit, SiFirebase, SiSqlite, SiMicrosoftsqlserver, SiMongodb, SiGit, SiAndroidstudio, SiNodedotjs } from 'react-icons/si';
import { FaRestassured } from 'react-icons/fa';


const skillData = [
  { name: 'C#', icon: SiCsharp },
  { name: 'Java', icon: SiJava },
  { name: 'Kotlin', icon: SiKotlin },
  { name: 'Python', icon: SiPython },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'ReactJS', icon: SiReact },
  { name: 'React Native', icon: SiReact }, // Using React icon for React Native
  { name: 'AngularJS', icon: SiAngularjs },
  { name: 'Streamlit', icon: SiStreamlit },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'SQLite', icon: SiSqlite },
  { name: 'SQL', icon: SiMicrosoftsqlserver }, // Using SQL Server icon for general SQL
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Git', icon: SiGit },
  { name: 'Android Studio', icon: SiAndroidstudio },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'REST APIs', icon: FaRestassured }, // Using FaRestassured for REST APIs
];

function SkillsPage() {
  return (
    <section id="skills" className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills & Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skillData.map((skill, index) => (
            <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              {React.createElement(skill.icon, { className: "text-4xl text-blue-600 mr-3" })}
              <span className="text-lg font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;