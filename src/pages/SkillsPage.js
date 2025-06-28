import React from 'react';
import { FaRestassured } from 'react-icons/fa';
import { SiCsharp } from 'react-icons/si';
import { SiJava } from 'react-icons/si';
import { SiKotlin } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiAngularjs } from 'react-icons/si';
import { SiStreamlit } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiSqlite } from 'react-icons/si';
import { SiMicrosoftsqlserver } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiGit } from 'react-icons/si';
import { SiAndroidstudio } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';






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