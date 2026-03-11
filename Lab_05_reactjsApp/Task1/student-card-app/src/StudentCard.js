import React from 'react';

function StudentCard({ name, rollNo, department, university, color }) {
  const cardStyle = {
    backgroundColor: color || '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '24px',
    margin: '16px',
    width: '280px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    margin: '0 0 12px 0',
    fontSize: '22px',
    color: '#333',
  };

  const textStyle = {
    margin: '6px 0',
    fontSize: '15px',
    color: '#555',
  };

  const labelStyle = {
    fontWeight: 'bold',
    color: '#333',
  };

  return (
    <div style={cardStyle}>
      <h2 style={headingStyle}>{name}</h2>
      <p style={textStyle}><span style={labelStyle}>Roll No:</span> {rollNo}</p>
      <p style={textStyle}><span style={labelStyle}>Department:</span> {department}</p>
      <p style={textStyle}><span style={labelStyle}>University:</span> {university}</p>
    </div>
  );
}

export default StudentCard;
