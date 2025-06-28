import React from 'react';
import {
  SiCsharp,
  SiJava,
  SiKotlin,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngularjs,
  SiStreamlit,
  SiFirebase,
  SiSqlite,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiGit,
  SiAndroidstudio,
  SiNodedotjs,
} from 'react-icons/si';
// Using SiReactquery as a placeholder for React Native if no specific RN icon in Simple Icons
import { FaReact } from 'react-icons/fa'; // Using FaReact for React Native as a placeholder

const Skills = () => {
  const skills = [
    { name: 'C#', icon: SiCsharp },
    { name: 'Java', icon: SiJava },
    { name: 'Kotlin', icon: SiKotlin },
    { name: 'Python', icon: SiPython },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'ReactJS', icon: SiReact },
    { name: 'React Native', icon: FaReact }, // Using FaReact as a placeholder
    { name: 'AngularJS', icon: SiAngularjs },
    { name: 'Streamlit', icon: SiStreamlit },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'SQLite', icon: SiSqlite },
    { name: 'SQL', icon: SiMicrosoftsqlserver }, // Placeholder
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Git', icon: SiGit },
    { name: 'Android Studio', icon: SiAndroidstudio },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'REST APIs', icon: FaReact }, // Using FaReact as a placeholder
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">Skills & Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div key={index} className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm">
              {IconComponent && (
                <IconComponent className="w-6 h-6 mr-2" />
              )}
            <span className="text-gray-800 text-sm font-medium">{skill.name}</span>
          </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;