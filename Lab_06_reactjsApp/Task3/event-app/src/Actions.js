import React, { useState } from 'react';

function Actions() {
  const [message, setMessage] = useState('Click a button to perform an action.');
  const [bgColor, setBgColor] = useState('#f7f7f7');
  const [hoveredButton, setHoveredButton] = useState('');

  const colors = ['#f7f7f7', '#e8f5e9', '#e3f2fd', '#fff3e0', '#fce4ec'];

  const changeBackgroundColor = () => {
    setBgColor((current) => {
      const currentIndex = colors.indexOf(current);
      const nextIndex = (currentIndex + 1) % colors.length;
      return colors[nextIndex];
    });
    setMessage('Background color changed.');
  };

  const buttonStyle = (buttonName) => ({
    marginRight: '8px',
    padding: '10px 14px',
    cursor: 'pointer',
    color: hoveredButton === buttonName ? '#e53935' : '#222',
    border: '1px solid #bbb',
    backgroundColor: '#fff',
  });

  return (
    <div style={{ backgroundColor: bgColor, padding: '20px', borderRadius: '8px', minHeight: '220px' }}>
      <p style={{ fontSize: '18px' }}>{message}</p>

      <button
        onClick={() => setMessage('Hello! This is your message.')}
        onMouseOver={() => setHoveredButton('message')}
        onMouseOut={() => setHoveredButton('')}
        style={buttonStyle('message')}
      >
        Show message
      </button>

      <button
        onClick={changeBackgroundColor}
        onMouseOver={() => setHoveredButton('bg')}
        onMouseOut={() => setHoveredButton('')}
        style={buttonStyle('bg')}
      >
        Change background color
      </button>

      <button
        onClick={() => window.alert('Alert button clicked!')}
        onMouseOver={() => setHoveredButton('alert')}
        onMouseOut={() => setHoveredButton('')}
        style={buttonStyle('alert')}
      >
        Show alert
      </button>
    </div>
  );
}

export default Actions;
