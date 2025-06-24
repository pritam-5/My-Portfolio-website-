
import React, { useState } from 'react';
import { Heart, MessageCircle, X } from 'lucide-react';

const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Pritam's portfolio bot. How can I help you today?", isBot: true }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setMessages([...messages, { text: newMessage, isBot: false }]);
    
    // Simple bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Thanks for your message! For quick responses, please reach out to Pritam directly via email or LinkedIn.", 
        isBot: true 
      }]);
    }, 1000);
    
    setNewMessage('');
  };

  return (
    <>
      {/* Chatbot */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-obsidian-800 border border-gray-700 rounded-lg shadow-2xl z-50">
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <span className="text-white font-semibold">Chat with Portfolio Bot</span>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="h-64 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-neon-green/20 text-neon-green'
                      : 'bg-neon-blue text-obsidian-900'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 bg-obsidian-700 border border-gray-600 rounded text-white text-sm focus:border-neon-green focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-neon-green text-obsidian-900 rounded text-sm hover:bg-neon-blue transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-4 right-4 w-12 h-12 bg-neon-green text-obsidian-900 rounded-full flex items-center justify-center shadow-lg hover:bg-neon-blue transition-colors z-40"
      >
        <MessageCircle size={24} />
      </button>

      <footer className="bg-obsidian-800 border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold text-neon-green animate-text-glow">
                {'<Pritam Portfolio/>'}
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and lots of caffeine</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2025 Pritam. All rights reserved.
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-700 text-center text-gray-500 text-sm">
            <p>Designed and developed with passion for creating exceptional digital experiences</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
