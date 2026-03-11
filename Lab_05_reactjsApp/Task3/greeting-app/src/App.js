import React from 'react';
import Greeting from './Greeting';

function App() {
  const greetings = [
    { name: 'Ali', timeOfDay: 'Morning', bgColor: '#fffde7' },
    { name: 'Sara', timeOfDay: 'Afternoon', bgColor: '#e8f5e9' },
    { name: 'Usman', timeOfDay: 'Evening', bgColor: '#fce4ec' },
  ];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '40px 20px',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
  };

  const titleStyle = {
    width: '100%',
    textAlign: 'center',
    fontSize: '28px',
    marginBottom: '20px',
    color: '#333',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Dynamic Greeting App</h1>
      {greetings.map((g, index) => (
        <Greeting
          key={index}
          name={g.name}
          timeOfDay={g.timeOfDay}
          bgColor={g.bgColor}
        />
      ))}
    </div>
  );
}

export default App;
