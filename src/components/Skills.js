import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'C#', logoUrl: 'placeholder-csharp.png' },
    { name: 'Java', logoUrl: 'placeholder-java.png' },
    { name: 'Kotlin', logoUrl: 'placeholder-kotlin.png' },
    { name: 'Python', logoUrl: 'placeholder-python.png' },
    { name: 'JavaScript', logoUrl: 'placeholder-javascript.png' },
    { name: 'TypeScript', logoUrl: 'placeholder-typescript.png' },
    { name: 'ReactJS', logoUrl: 'placeholder-react.png' },
    { name: 'React Native', logoUrl: 'placeholder-reactnative.png' },
    { name: 'AngularJS', logoUrl: 'placeholder-angular.png' },
    { name: 'Streamlit', logoUrl: 'placeholder-streamlit.png' },
    { name: 'Firebase', logoUrl: 'placeholder-firebase.png' },
    { name: 'SQLite', logoUrl: 'placeholder-sqlite.png' },
    { name: 'SQL', logoUrl: 'placeholder-sql.png' },
    { name: 'MongoDB', logoUrl: 'placeholder-mongodb.png' },
    { name: 'Git', logoUrl: 'placeholder-git.png' },
    { name: 'Android Studio', logoUrl: 'placeholder-androidstudio.png' },
    { name: 'Node.js', logoUrl: 'placeholder-nodejs.png' },
    { name: 'REST APIs', logoUrl: 'placeholder-restapi.png' },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">Skills & Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm">
            <img
              src={skill.logoUrl}
              alt={`${skill.name} logo`}
              className="w-6 h-6 mr-2"
            />
            <span className="text-gray-800 text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;