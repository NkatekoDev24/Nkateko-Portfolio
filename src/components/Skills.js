import React from 'react';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';
import Skills from '../components/Skills';

const Skills = () => {
  const skills = [
    { name: 'C#', icon: SiIcons.SiCsharp, color: '#178600' },
    { name: 'Java', icon: SiIcons.SiJava, color: '#007396' },
    { name: 'Kotlin', icon: 'SiKotlin' },
    { name: 'Python', icon: 'SiPython' },
    { name: 'JavaScript', icon: 'SiJavascript' },
    { name: 'TypeScript', icon: 'SiTypescript' },
    { name: 'ReactJS', icon: 'SiReact' },
    { name: 'React Native', icon: 'FaReact' }, // Using FaReact as a placeholder, check if a Si icon is better
    { name: 'AngularJS', icon: 'SiAngularjs' },
    { name: 'Streamlit', icon: 'SiStreamlit' },
    { name: 'Firebase', icon: 'SiFirebase' },
    { name: 'SQLite', icon: 'SiSqlite' },
    { name: 'SQL', icon: 'SiMicrosoftsqlserver' }, // Placeholder, check for a specific SQL icon
    { name: 'MongoDB', icon: 'SiMongodb' },
    { name: 'Git', icon: 'SiGit' },
    { name: 'Android Studio', icon: 'SiAndroidstudio' },
    { name: 'Node.js', icon: 'SiNodedotjs' },
    { name: 'REST APIs', icon: 'FaReact' }, // Using FaReact as a placeholder, check for a relevant icon
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">Skills & Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => {
          const IconComponent = SiIcons[skill.icon] || FaIcons[skill.icon];
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