
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-obsidian-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-neon-green">Me</span>
          </h2>
          <div className="w-24 h-1 bg-neon-green mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Picture */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-green to-neon-blue rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative">
                <img
                  src="/Pritam-uploads/d3ad8d80-d055-4fb1-b0b9-a000ccacbfaf.png"
                  alt="Pritam - Computer Science Student & Web Developer"
                  className="w-80 h-80 rounded-full object-cover border-4 border-obsidian-700 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-obsidian-900/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi, I'm <span className="text-neon-green font-semibold">Pritam</span>, a passionate Computer Science Engineering student, 
              currently in my 2nd year. I love building websites and exploring new technologies.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm currently learning Front-end Web Development — working with HTML, CSS, JavaScript, 
              Tailwind CSS, React. I enjoy creating futuristic, eye-catching websites 
              with smooth animations and clean UI with the help of AI.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Apart from coding, I'm also interested in <span className="text-neon-blue font-semibold">Artificial Intelligence and Prompt Engineering</span>, 
              and I'm planning to dive deeper into this field soon.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-obsidian-700/50 rounded-lg border border-neon-green/20">
                <div className="text-3xl font-bold text-neon-green">2nd</div>
                <div className="text-gray-400">Year Student</div>
              </div>
              <div className="text-center p-4 bg-obsidian-700/50 rounded-lg border border-neon-blue/20">
                <div className="text-3xl font-bold text-neon-blue">CSE</div>
                <div className="text-gray-400">Major</div>
              </div>
            </div>
          </div>
        </div>

        {/* Currently Learning Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">📚 Currently Learning</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-obsidian-700/30 rounded-lg p-6 border border-gray-700">
              <h4 className="text-xl font-semibold text-neon-green mb-4">Frontend Development</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• HTML, CSS, JavaScript</li>
                <li>• Tailwind CSS & React</li>
                <li>• Responsive Design</li>
              </ul>
            </div>
            <div className="bg-obsidian-700/30 rounded-lg p-6 border border-gray-700">
              <h4 className="text-xl font-semibold text-neon-blue mb-4">Backend & More</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Node.js & Express</li>
                <li>• Data Structures & Algorithms</li>
                <li>• AI & Machine Learning (planned)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
