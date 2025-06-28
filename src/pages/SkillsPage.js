import React from 'react';
import { FaCode } from 'react-icons/fa';
import {
  SiJava,
  SiKotlin,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiStreamlit,
  SiFirebase,
  SiSqlite,
  SiMongodb,
  SiGit,
  SiAndroidstudio,
  SiNodedotjs,
} from 'react-icons/si';

// Assuming SiFirebase is needed and should be imported individually or from the SiIcons import
const skillData = [
  { name: 'Kotlin', icon: SiKotlin },
  { name: 'Python', icon: SiPython },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'ReactJS', icon: SiReact },
  { name: 'React Native', icon: SiReact }, // Using React icon for React Native
  { name: 'Angular', icon: SiAngular },
  { name: 'Streamlit', icon: SiStreamlit },
  { name: 'Firebase', icon: SiFirebase }, // Assuming this was intended to be kept
  { name: 'SQLite', icon: SiSqlite },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Git', icon: SiGit },
  { name: 'Android Studio', icon: SiAndroidstudio },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'REST APIs', icon: FaCode }, // Using FaCode for REST APIs
];

function SkillsPage() {
  return (
    <section id="skills" className="py-16 pt-32 bg-gray-200">
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