import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pb7569672@gmail.com',
      href: 'mailto:pb7569672@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/pritam-5',
      href: 'https://github.com/pritam-5'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/pritam-bera-733703270'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/pritam-5',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/pritam-bera-733703270',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:pb7569672@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-obsidian-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            📫 Let's <span className="text-neon-green">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-neon-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Feel free to check out my projects and connect for collaborations or opportunities!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-obsidian-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-green focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-obsidian-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-green focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-obsidian-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-green focus:outline-none transition-colors duration-300"
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-obsidian-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-green focus:outline-none transition-colors duration-300 resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 px-6 py-3 bg-neon-green text-obsidian-900 rounded-lg font-semibold hover:bg-neon-blue transition-all duration-300 transform hover:scale-105"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-obsidian-800/30 rounded-lg border border-gray-700 hover:border-neon-green/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-neon-green/10 rounded-lg flex items-center justify-center group-hover:bg-neon-green/20 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 bg-obsidian-800/50 rounded-lg flex items-center justify-center border border-gray-600 hover:border-neon-green hover:bg-neon-green/10 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-neon-green transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
