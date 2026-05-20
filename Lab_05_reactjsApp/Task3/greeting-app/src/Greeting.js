import React from 'react';

function Greeting({ name, timeOfDay, bgColor }) {
  const getGreeting = () => {
    switch (timeOfDay.toLowerCase()) {
      case 'morning':
        return `Good Morning, ${name}! ☀️ Rise and shine!`;
      case 'afternoon':
        return `Good Afternoon, ${name}! 🌤️ Hope your day is going great!`;
      case 'evening':
        return `Good Evening, ${name}! 🌅 Time to relax!`;
      case 'night':
        return `Good Night, ${name}! 🌙 Sweet dreams!`;
      default:
        return `Hello, ${name}! 👋 Welcome!`;
    }
  };

  const cardStyle = {
    backgroundColor: bgColor || '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '30px',
    margin: '16px',
    width: '320px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const greetingStyle = {
    fontSize: '20px',
    color: '#333',
    margin: '0 0 10px 0',
  };

  const timeStyle = {
    fontSize: '14px',
    color: '#777',
    fontStyle: 'italic',
  };

  return (
    <div style={cardStyle}>
      <p style={greetingStyle}>{getGreeting()}</p>
      <p style={timeStyle}>Time of Day: {timeOfDay}</p>
    </div>
  );
}

export default Greeting;
