import React from 'react';
import { FaCode } from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

// Assuming SiFirebase is needed and should be imported individually or from the SiIcons import
const skillData = [
  { name: 'C#', icon: SiIcons.SiCsharp },
  { name: 'Java', icon: SiIcons.SiJava },
  { name: 'Kotlin', icon: SiIcons.SiKotlin },
  { name: 'Python', icon: SiIcons.SiPython },
  { name: 'JavaScript', icon: SiIcons.SiJavascript },
  { name: 'TypeScript', icon: SiIcons.SiTypescript },
  { name: 'ReactJS', icon: SiIcons.SiReact },
  { name: 'React Native', icon: SiIcons.SiReact }, // Using React icon for React Native
  { name: 'Angular', icon: SiIcons.SiAngular },
  { name: 'Streamlit', icon: SiIcons.SiStreamlit },
  { name: 'Firebase', icon: SiIcons.SiFirebase }, // Assuming this was intended to be kept
  { name: 'SQLite', icon: SiIcons.SiSqlite },
  { name: 'SQL', icon: SiIcons.SiMicrosoftsqlserver }, // Using SQL Server icon for general SQL
  { name: 'MongoDB', icon: SiIcons.SiMongodb },
  { name: 'Git', icon: SiIcons.SiGit },
  { name: 'Android Studio', icon: SiIcons.SiAndroidstudio },
  { name: 'Node.js', icon: SiIcons.SiNodedotjs },
  { name: 'REST APIs', icon: FaCode }, // Using FaCode for REST APIs
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