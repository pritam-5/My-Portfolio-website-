
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'neon-green',
      skills: ['HTML5', 'CSS', 'JavaScript', 'Tailwind CSS', 'React']
    },
    {
      title: 'Backend (Learning)',
      color: 'neon-blue', 
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Database Design']
    },
    {
      title: 'Interests',
      color: 'neon-purple',
      skills: ['AI & ML', 'Python', 'Data Science', 'Deep Learning']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-obsidian-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-neon-green">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-neon-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Currently learning and exploring modern web technologies and AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-obsidian-800/50 rounded-lg p-6 border border-gray-700 hover:border-neon-green/30 transition-all duration-300"
            >
              <h3 className={`text-2xl font-bold text-${category.color} mb-6 text-center`}>
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-center">
                      <span className="text-gray-300 font-medium text-center">{skill}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
