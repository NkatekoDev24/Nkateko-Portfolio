import React from 'react';
import {
  SiCsharp
} from 'react-icons/si/SiCsharp';
import { SiJava } from 'react-icons/si/SiJava';
import { SiKotlin } from 'react-icons/si/SiKotlin';
import { SiPython } from 'react-icons/si/SiPython';
import { SiJavascript } from 'react-icons/si/SiJavascript';
import { SiTypescript } from 'react-icons/si/SiTypescript';
import { SiReact } from 'react-icons/si/SiReact';
// Using SiReactquery as a placeholder for React Native if no specific RN icon in Simple Icons
import { SiReactquery } from 'react-icons/si/SiReactquery';
import { SiAngularjs } from 'react-icons/si/SiAngularjs';
import { SiStreamlit } from 'react-icons/si/SiStreamlit';
import { SiFirebase } from 'react-icons/si/SiFirebase';
import { SiSqlite } from 'react-icons/si/SiSqlite';
// Using SiMicrosoftsqlserver as a placeholder for SQL
import { SiMicrosoftsqlserver } from 'react-icons/si/SiMicrosoftsqlserver';
import { SiMongodb } from 'react-icons/si/SiMongodb';
import { SiGit } from 'react-icons/si/SiGit';
import { SiAndroidstudio } from 'react-icons/si/SiAndroidstudio';
import { SiNodedotjs } from 'react-icons/si/SiNodedotjs';
import { FaRestassured } from 'react-icons/fa/FaRestassured'; // Font Awesome for REST APIs

const Skills = () => {
  const skills = [
    { name: 'C#', icon: SiCsharp },
    { name: 'Java', icon: SiJava },
    { name: 'Kotlin', icon: SiKotlin },
    { name: 'Python', icon: SiPython },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'ReactJS', icon: SiReact },
    { name: 'React Native', icon: SiReactquery }, // Placeholder
    { name: 'AngularJS', icon: SiAngularjs },
    { name: 'Streamlit', icon: SiStreamlit },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'SQLite', icon: SiSqlite },
    { name: 'SQL', icon: SiMicrosoftsqlserver }, // Placeholder
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Git', icon: SiGit },
    { name: 'Android Studio', icon: SiAndroidstudio },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'REST APIs', icon: FaRestassured },
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