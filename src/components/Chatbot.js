import React, { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container" style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      <div className="chatbot-icon" onClick={toggleChat} style={{ cursor: 'pointer', fontSize: '2rem' }}>
        💬 {/* Placeholder chat bubble icon */}
      </div>
      {isOpen && (
        <div className="chatbot-window" style={{
          position: 'absolute',
          bottom: '70px',
          right: '0',
          width: '300px',
          height: '400px',
          border: '1px solid #ccc',
          backgroundColor: '#fff',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div className="chat-header" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '10px' }}>
            Chat Assistant
          </div>
          <div className="chat-messages" style={{ flexGrow: 1, overflowY: 'auto' }}>
            {/* Placeholder for chat messages */}
            <p>Hello! How can I help you today?</p>
          </div>
          <div className="chat-input" style={{ paddingTop: '10px', borderTop: '1px solid #eee' }}>
            <input type="text" placeholder="Type your message..." style={{ width: '100%', padding: '5px' }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;