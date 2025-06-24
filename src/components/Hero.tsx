
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Student Developer', 'Frontend Learner', 'AI Explorer', 'Future Full-Stack Dev'];
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }
      
      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center matrix-bg relative">
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-neon-green opacity-20 text-sm font-mono animate-matrix-rain"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {'01'.repeat(50)}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-8">
          {/* Greeting */}
          <div className="space-y-4">
            <p className="text-neon-green text-lg font-mono animate-fade-in">
              {'> Hello, World!'}
            </p>
            
            {/* Name with glitch effect */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              <span className="glitch-text" data-text="Pritam">
                Pritam
              </span>
            </h1>
            
            {/* Typing animation */}
            <div className="text-2xl md:text-4xl font-mono text-gray-300 min-h-[60px] flex items-center justify-center">
              <span className="mr-2">I'm a</span>
              <span className="text-neon-blue animate-text-glow">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Computer Science Engineering student passionate about web development and AI. 
            Building modern, futuristic websites while exploring the endless possibilities 
            of technology and innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="group relative overflow-hidden bg-transparent border-2 border-neon-green text-neon-green px-8 py-3 font-semibold transition-all duration-300 hover:text-obsidian-900"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-neon-green transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
            
            <a
              href="#contact"
              className="group relative overflow-hidden bg-neon-blue text-obsidian-900 px-8 py-3 font-semibold transition-all duration-300 hover:bg-neon-purple animate-glow-pulse"
            >
              <span className="relative z-10">Let's Connect</span>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-neon-green w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
