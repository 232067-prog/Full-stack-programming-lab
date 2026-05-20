import React from 'react';

function CourseItem({ courseName, instructor, duration, courseType }) {
  const cardStyle = {
    backgroundColor: courseType === 'Online' ? '#e3f2fd' : '#fff3e0',
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '20px',
    margin: '12px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  };

  const nameStyle = {
    margin: '0 0 10px 0',
    fontSize: '20px',
    color: '#333',
  };

  const textStyle = {
    margin: '5px 0',
    fontSize: '14px',
    color: '#555',
  };

  const labelStyle = {
    fontWeight: 'bold',
    color: '#333',
  };

  const badgeStyle = {
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 'bold',
    marginTop: '10px',
    color: '#fff',
    backgroundColor: courseType === 'Online' ? '#1976d2' : '#e65100',
  };

  return (
    <div style={cardStyle}>
      <h3 style={nameStyle}>{courseName}</h3>
      <p style={textStyle}><span style={labelStyle}>Instructor:</span> {instructor}</p>
      <p style={textStyle}><span style={labelStyle}>Duration:</span> {duration}</p>
      <span style={badgeStyle}>{courseType}</span>
    </div>
  );
}

export default CourseItem;
